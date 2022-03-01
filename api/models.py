import uuid

from datetime import datetime
from typing import List, Optional, Set
from functools import lru_cache

from pydantic import BaseModel, validator, Field


def generate_uuid() -> str:
    return str(uuid.uuid4())


def dissassemble_comma_seperated_lists_of_strings(value: str) -> List[str]:
    """Validate that the value is a comma seperated list of strings"""
    if not isinstance(value, str):
        raise ValueError(f'Expected a string, got {type(value)}')
    if value.startswith("[") and value.endswith("]"):
        value = value[1:-1]
    if "'" in value:
        value = value.replace("'", "")
    if '"' in value:
        value = value.replace('"', "")
    return [x.strip() for x in value.split(',') if x]


class JWTAccessToken(str):
    """
    String representation of the header, claims, and signature.
    Signed with ALGORITHMS.HS256.
    """
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, access_token: str):
        """
        Hash the plaintext password.
        """
        if not isinstance(access_token, str):
            raise TypeError("Can only proecess access_token strings")
        # To keep type-annotations exact, return a JWTAccessToken instance
        return cls(access_token)


class Token(BaseModel):
    """
    Token Model representing the token in authentication-process
    """
    access_token: JWTAccessToken
    token_type: str

    @validator("token_type")
    @classmethod
    def validate_token_type(cls, value):
        """Validate if the token-type is bearer."""
        if not value == "bearer":
            raise ValueError(f"Invalid token-type: {value}")
        return value


class User(BaseModel):
    url: str
    name: str
    uid: str = Field(default_factory=generate_uuid, primary_key=True, index=True)


class Tag(BaseModel):
  name: str


class TodoList(BaseModel):
  title: str
  tags: List[Tag]


class TodoBase(BaseModel):
    """
    Base class for every Todo-Model.
    """
    name: str
    is_done: bool
    description: str = ""

    @validator("tags", pre=True, check_fields=False)
    def convert_tags_from_str(cls, tags: Set[str] | List[str] | str) -> list:
        """Transform the tags from set to a str"""
        if type(tags) not in [str, list, set]:
            raise ValueError(f'Expected a str, got {type(tags)}')
        if type(tags) is str:
            tags = dissassemble_comma_seperated_lists_of_strings(tags)
        return sorted(set(tags))


class Todo(TodoBase):
    uid: Optional[str] = Field(default_factory=generate_uuid, primary_key=True, index=True)
    url: str
    owner_url: str
    tags: Optional[str] = ""
    is_done: bool
    created_at: datetime = Field(default_factory=datetime.now)
    todolist: Optional[TodoList]

    @validator("tags", pre=True)
    @classmethod
    def convert_tags_to_str(cls, tags: Set[str] | List[str] | str) -> str:
        """Transform the tags from set to a str"""
        if type(tags) is str:
            return tags
        if not (isinstance(tags, set) or isinstance(tags, list)):
            raise ValueError(f'Expected a set or List, got {type(tags)}')
        if any([',' in tag for tag in tags]):
            raise ValueError(f"Can't convert tags that contain a comma.")
        return ", ".join(tags)

    @property
    def url(self):
        @lru_cache
        def endpoint():
            return f"/api/todos"
        server = f"localhost:8000"
        return f"{server}{endpoint()}/items/{self.uid}"


class TodoSnippet(TodoBase):
    tags: Optional[List[str]] = []


class TodoUpdate(TodoBase):
    name: Optional[str]
    is_done: Optional[bool]
    description: Optional[str]
    tags: Optional[List[str]] = []
