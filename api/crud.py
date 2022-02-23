import json
from datetime import date, datetime
from typing import Any, List, Generator
from abc import ABC, abstractmethod
from pathlib import Path


class CrudHandler(ABC):
    @abstractmethod
    def create(self, modelname: str, item: Any) -> Any:
        raise NotImplementedError("Implment this method.")

    @abstractmethod
    def read(self, modelname: str, item_id: str) -> Any:
        raise NotImplementedError("Implment this method.")

    @abstractmethod
    def read_many(self, modelname: str) -> List[Any]:
        raise NotImplementedError("Implment this method.")

    @abstractmethod
    def update(self, modelname: str, item: Any, item_id: str) -> Any:
        raise NotImplementedError("Implment this method.")

    @abstractmethod
    def delete(self, modelname: str, item_id: str) -> bool:
        raise NotImplementedError("Implment this method.")


class CrudHandlerForJsonFiles(CrudHandler):

    DATABASE = Path(__file__).parent / "database"
    IDENTIFIER_FIELD = "uid"

    def filepath(self, modelname: str) -> Path:
        self.DATABASE.mkdir(exist_ok=True)
        fp = self.DATABASE / f"{modelname.lower()}.json"
        fp.touch(exist_ok=True)
        return fp

    def read_json(self, path: Path) -> list:
        with open(path, "rb") as database:
            try:
                instances = json.load(database) or []
            except json.JSONDecodeError:
                instances = []
        return instances

    def write_json(self, path: Path, instances: list) -> None:

        def json_serializer(obj):
            """JSON serializer for objects not serializable by default json serializer"""
            if isinstance(obj, (datetime, date)):
                return obj.isoformat()
            if isinstance(obj, set):
                return list(obj)
            raise TypeError ("Type %s not serializable" % type(obj))

        with open(path, "w") as database:
            database.write(
                json.dumps(
                    sorted(instances, key=lambda x: x[self.IDENTIFIER_FIELD]),
                    indent=4,
                    sort_keys=True,
                    default=json_serializer
                )
            )

    def create(self, modelname: str, item: Any):
        """
        Create a new item in the json file.
        """
        instances = self.read_json(path=self.filepath(modelname))
        instances.append(item)
        self.write_json(path=self.filepath(modelname), instances=instances)
        return item

    def read(self, modelname: str, item_id: str | int):
        """
        Read an item from the json file.
        """
        instances = self.read_json(path=self.filepath(modelname))
        try:
            query = [i for i in instances if i[self.IDENTIFIER_FIELD] == item_id][0]
        except IndexError:
            raise ValueError(f"No item with uid '{item_id}' found.")
        return query

    def read_many(self, modelname: str):
        """
        Read all items from the json file.
        """
        instances = self.read_json(path=self.filepath(modelname))
        return instances

    def update(self, modelname: str, item: Any, item_id: str | int) -> Any:
        instances = self.read_json(path=self.filepath(modelname))
        for index, query in enumerate(instances):
            if query[self.IDENTIFIER_FIELD] == item_id:
                updated = query | {k: v for k,v in item.items() if v is not None}
                instances[index] = updated
                break
        else:
            raise ValueError(f"No item with id '{item_id}' found.")
        self.write_json(path=self.filepath(modelname), instances=instances)
        return updated

    def delete(self, modelname: str, item_id: str | int) -> bool:
        instances = self.read_json(path=self.filepath(modelname))
        for index, query in enumerate(instances):
            if query[self.IDENTIFIER_FIELD] == item_id:
                del instances[index]
                break
        else:
            try:
                raise ValueError(f"No item with id '{item_id}' found.")
            except ValueError as _:
                return False
        self.write_json(path=self.filepath(modelname), instances=instances)
        return True


def get_json_handler() -> Generator:
    handler: CrudHandler = CrudHandlerForJsonFiles()
    yield handler

def get_current_user() -> Generator:
    from .models import User
    handler = next(get_json_handler())
    user_dict = handler.read('users', 1)  # ! this is mocked for testing and always returns the default user!
    yield User(**user_dict)
