import time
import logging
from datetime import timedelta

import humanize

from fastapi import FastAPI, Request, status, Depends, Response, HTTPException, security
from fastapi.middleware.cors import CORSMiddleware

from .models import Todo, User, TodoSnippet, TodoUpdate, Token, JWTAccessToken, dissassemble_comma_seperated_lists_of_strings
from .auth import authenticate_user, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES
from . import crud

# -- LOGGING ------------------------------------------------------------------
from .config import logs  # noqa
log = logging.getLogger('application')


# -- APPLICATION --------------------------------------------------------------
app = FastAPI()
origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Time taken
@app.middleware("http")
async def request_time_taken(request: Request, call_next):
    """Adds a middleware to EVERY request response cycle."""
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    readable = humanize.precisedelta(timedelta(seconds=process_time), format="%0.4f")
    response.headers["time-taken"] = f"{readable}"
    return response


# -- ROUTES PUBLIC ------------------------------------------------------------
@app.get("/")
async def public_root():
    return {
        "message": "Welcome to a FastAPI-Application. Composed by oryon-dominik with 💖",
    }


# -- ROUTES TODOS -------------------------------------------------------------
@app.post("/api/todos/items", status_code=status.HTTP_201_CREATED, response_model=TodoSnippet)
async def create_todo(
    todo: TodoSnippet,
    handler = Depends(crud.get_json_handler),
    user: User = Depends(crud.get_current_user),  # ! this is mocked for testing and always returns the default user!
):
    return handler.create(modelname="todos", item=Todo(**todo.dict() | {"owner_url": user.url}).dict())


@app.get("/api/todos/items")
async def read_todos(
    handler = Depends(crud.get_json_handler),
):
    todos = handler.read_many(modelname="todos")
    return [Todo(**todo) for todo in todos]


@app.get("/api/todos/items/{uid}")
async def read_todo(
    uid: str,
    handler = Depends(crud.get_json_handler),
):
    todo = handler.read(modelname="todos", item_id=uid)
    return Todo(**todo)


@app.put("/api/todos/items/{uid}")
async def update_todo(
    uid: str,
    todo: TodoUpdate,
    handler = Depends(crud.get_json_handler),
):
    updated = handler.update(modelname="todos", item=todo.dict(), item_id=uid)
    return TodoSnippet(**updated)


@app.delete("/api/todos/items/{uid}")
async def delete_todo(
    uid: str,
    response: Response,
    handler = Depends(crud.get_json_handler),
):
    success = handler.delete(modelname="todos", item_id=uid)
    response.status_code = status.HTTP_204_NO_CONTENT if success else status.HTTP_404_NOT_FOUND
    return {"deleted": success}


# -- ROUTES USERS -------------------------------------------------------------
@app.get("/api/user")
async def read_user(
    handler = Depends(crud.get_json_handler),
    current_user: User = Depends(crud.get_current_user),  # ! this is mocked for testing and always returns the default user!
):
    users = handler.read_many(modelname="users")
    return [User(**user) for user in users if User(**user) == current_user]



@app.post("/api/token", response_model=Token)
async def login_for_access_token(form_data: security.OAuth2PasswordRequestForm = Depends()):
    """
    OAuth2 compatible token login, get an access token for future requests.

    raises HTTPException(401) if user could not be found.\
    raises HTTPException(401) if user could not be authenticated.\
    raises HTTPException(401) if user disabled.
    """
    username = form_data.username
    user = authenticate_user(username=username, password=form_data.password)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"User matching '{username}' not found.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Incorrect password for User '{username}'.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if user.disabled:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Useraccount for '{username}' is disabled.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # scopes have been validated
    scopes: list = dissassemble_comma_seperated_lists_of_strings(user.scopes)

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token: JWTAccessToken = create_access_token(
        subject={
            "sub": user.email,
            "scopes": scopes,
        },
        expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


# -----------------------------------------------------------------------------
log.info(
    "[red on yellow] A FastAPI-application skeleton composed by oryon-dominik with :heart:.\nJust serving some json-data for the frontend skeleton..",
    extra={"markup": True}
)
