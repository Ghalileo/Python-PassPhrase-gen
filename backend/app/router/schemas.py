from datetime import datetime
from typing import List, Optional
#from app.models import UserDB
import pydantic


global char_repl_list
char_repl_list = {'l':'1','L':'1',
    'i':'1','!':'1','I':'1', 
    'S' : '$', 's': '$', 
    'a': '@', 'A' : '@',
    'o':'0','O':'0','Q':'0'
     }
global new_list
new_list = []


class PassPhraseLengthError(Exception):
    """Check PassPhrase Length"""
    def __init__(self, title: str, message: str) -> None:
        self.title = title
        self.message = message
        super().__init__(message)
class Results(pydantic.BaseModel):
    _id: Optional[str]
    title: Optional[str]
    phrases: Optional[str]
    passphrase_output : Optional[str]

    @pydantic.validator('phrases',allow_reuse=False)
    def check_passphrase_valid(cls,phrases:str):
        print('started phrases validator\n')
        try:
            phrases_split = phrases.split(' ')
            if len(phrases_split) <= 2:
                raise PassPhraseLengthError(phrases,f'Passphrase too short -> {phrases, len(phrases_split)} <-Please try again')
        except PassPhraseLengthError as lenError:
            """Logic can be here for passphrase to manipulate the value OR just dump the error for later review"""
            print('\nPassPhraseLength Error\n')
            return lenError
        except AttributeError as e:
            phrases = 'you have errd out'
            return phrases
        return phrases
    @staticmethod
    def generate_phrases(pass_input):
        new_list = []
        pass_input_char_list = pass_input.split(" ")
        for index, word in enumerate(pass_input_char_list):
            if index == 2:
                try:
                        
                    new_word = list(word)
                    new_word[2] = new_word[2].upper()
                    edited_word = "".join(new_word) 

                    new_list.append(edited_word)
                except IndexError:
                    new_list.append(word.upper())
            else:
                new_list.append(word[0])
           
        for index, character in enumerate(new_list):
            if character in char_repl_list.keys():
                new_character = char_repl_list[character]
                new_list[index] = new_character
                print('character swapping')
        new_passphrase = "".join(new_list)
        print(f'aye we did the test\t\tCHANGED-> {pass_input}\tTO-> {new_passphrase}')
 #       print('Copied to clipboard')
#        pyperclip.copy(new_passphrase)
         
        return new_passphrase


# For PostDisplay
class Comment(pydantic.BaseModel):
  text: str
  username: str
  timestamp: datetime
  class Config():
    orm_mode = True

class PostDisplay(pydantic.BaseModel):
  id: int
  image_url: str
  image_url_type: str
  caption: str
  timestamp: datetime
#  user: UserDB
  comments: List[Comment]
  class Config():
    orm_mode = True
