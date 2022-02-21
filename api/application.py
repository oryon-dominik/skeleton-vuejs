import time
import logging
from datetime import timedelta

import humanize

from fastapi import FastAPI, Request

# -- LOGGING ------------------------------------------------------------------
from .config import logs
log = logging.getLogger('application')


# -- APPLICATION --------------------------------------------------------------
app = FastAPI()

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


@app.get("/")
async def public_root():
    return {
        "message": "Welcome to a FastAPI-Application. Composed by oryon-dominik with 💖",
    }

# -----------------------------------------------------------------------------
log.info(
    "[red on yellow] A FastAPI-application skeleton composed by oryon-dominik with :heart:.\nJust serving some json-data for the frontend skeleton..",
    extra={"markup": True}
)
