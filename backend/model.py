from pydantic import BaseModel
from typing import Optional
class Results(BaseModel):
    _id: Optional[str]
    title: Optional[str]
    phrases: Optional[str]