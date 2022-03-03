from fastapi import APIRouter, HTTPException
import pydantic
from typing import Optional
from app.router.schemas import Results
from app.models import UserPhrase,User
from app.db import create_phrase, get_phrases_by_user, delete_phrase_by_user
from app.users import current_active_user
from fastapi import Depends
router = APIRouter(
    prefix = '/passphrases',
    tags=['passphrases']

)


@router.post("", response_model=UserPhrase)
async def post_phrase(phrase:Results,user:User=Depends(current_active_user) ):
    print('post_phrase')
    response = await create_phrase(phrase.dict(),user)
    if response:
        return response
    raise HTTPException(400, "Something went wrong my friend")

@router.get("")
async def get_user_phrases(user:User = Depends(current_active_user)):
    print('get_phrases_by_email')
    response = await get_phrases_by_user(user)
    return response

@router.delete("/{id}")
async def delete_phrase(title: str, user:User = Depends(current_active_user)):
    print('delete phrase')
    response = await delete_phrase_by_user(title,user)
    return response