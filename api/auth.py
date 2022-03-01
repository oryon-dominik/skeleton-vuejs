import logging
import secrets
from datetime import timedelta, datetime
from typing import Optional

from passlib.exc import UnknownHashError
from passlib.context import CryptContext
from jose import jwt

from .models import User
from .crud import get_json_handler


log = logging.getLogger('application')


pwd_context = CryptContext(
    schemes=["bcrypt"],
    bcrypt__default_rounds=13,
    deprecated="auto",
)


SECRET_KEY: str = secrets.token_urlsafe(32)
JWT_ALGORITHM: str = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 60 minutes * 24 hours * 7 days = 7 days


def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        verified = pwd_context.verify(plain_password, hashed_password)
    except UnknownHashError:
        log.exception("Password in the database is not a valid hash.")
        verified = False
    return verified


def authenticate_user(username: str, password: str) -> User | None | bool:
    """
    Authenticate user by email and password with the database.

    return None if user not found
    return False if password is incorrect
    return user if credentials are valid
    """
    handler = next(get_json_handler())
    users = handler.read_many('users')
    try:
        user = [User(**user) for user in users if user.name == username][0]
    except IndexError:
        return None
    if not verify_password(plain_password=password, hashed_password=user.password):
        return False
    return user


def create_access_token(subject: dict, expires_delta: Optional[timedelta] = None):
    """
    Create a JSON Web Token from subject (username .. ).
    """
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode: dict = subject.copy()
    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=JWT_ALGORITHM)
    return encoded_jwt
