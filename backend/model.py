from pydantic import BaseModel
from typing import Optional
class Results(BaseModel):
    title: Optional[str]
    phrases: Optional[str]