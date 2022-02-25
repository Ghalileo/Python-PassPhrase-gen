from fastapi_users import models
import pydantic
from typing import Optional, List
from app.router.schemas import Results
class User(models.BaseUser):
    pass


class UserCreate(models.BaseUserCreate):
    pass


class UserUpdate(models.BaseUserUpdate):
    pass


class UserDB(User, models.BaseUserDB):
    pass

class UserPhrase(pydantic.BaseModel):
    user_passphrases : Results
    user : User
    