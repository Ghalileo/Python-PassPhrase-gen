from pydantic import BaseModel

class Results(BaseModel):
    title: str
    phrases: str