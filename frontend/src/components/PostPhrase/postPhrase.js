import React, { useState} from 'react';
import axios from 'axios';
import './style.css';
import qs from 'qs';

export default function POSTPhrase() {

const [title, setTitle] = useState('');
const [phrases, setPhrases] = useState('');
const data = {'title':title,'phrases':phrases, 'passphrase_output': 'string'}
const requestOptions = {

    method: 'POST',
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjdkM2VjNTUtYjhiYS00ODA5LTlhNjktZjM4MDhiN2I0ZjIyIiwiYXVkIjpbImZhc3RhcGktdXNlcnM6YXV0aCJdLCJleHAiOjE2NDY4NDg2Mzl9.vdWKJjLOWCoiLsnMz3NQW48tzTLzKFiPwRfEdHT3908",
      },
    url: 'http://127.0.0.1:8000/passphrases',
    data: data
}
// Post a phrase
const addToHandler = () => {
    axios(requestOptions)
    .then(res => console.log(res))
  }
  return (
    <span className="card-text">
      <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder="title"/>
      <input className="mb-2 form-control titleIn" onChange={event => setPhrases(event.target.value)} placeholder="Phrase"/>
      <div style={{textAlign:"center"}}><button className="btn btn-outline-primary generateButton" onClick={addToHandler}>Generate!</button></div>
    </span> 
  )
}
