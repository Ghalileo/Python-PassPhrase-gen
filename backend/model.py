from pydantic import BaseModel

class Results(BaseModel):
    title: str
    description: str