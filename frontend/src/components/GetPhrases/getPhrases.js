import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PhraseView from '../PhraseList/phraseView';
import qs from 'qs';
export default function GETPhrases() {
  const [phraseList, setPhraseList] = useState([]);
  const requestOptions = {
    method: 'GET',
    url: 'http://127.0.0.1:8000/passphrases',
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjdkM2VjNTUtYjhiYS00ODA5LTlhNjktZjM4MDhiN2I0ZjIyIiwiYXVkIjpbImZhc3RhcGktdXNlcnM6YXV0aCJdLCJleHAiOjE2NDY4NTU4NjZ9.m9lpSuh5l_G2KooQYAsVoYyX9eIMGivl0qjq8VgNg1g",
}
  }
  useEffect(() => {
    axios(requestOptions)

    .then(res => {
      setPhraseList(res.data)
    })
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
  
    });
  
  },[]);
  

  return (
    <div>
    <PhraseView phraseList={phraseList}/>
  </div>
  )
}
