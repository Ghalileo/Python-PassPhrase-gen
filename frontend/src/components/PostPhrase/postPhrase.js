import React, { useState} from 'react';
import axios from 'axios';

export default function POSTPhrase() {

const [title, setTitle] = useState('');
const [phrases, setPhrases] = useState('');

// Post a phrase
const addToHandler = () => {
    axios.post('http://127.0.0.1:8000/api/phrase/', {'title': title, 'phrases': phrases})
    .then(res => console.log(res))
  }
  return (
    <span className="card-text">
      <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder="title"/>
      <input className="mb-2 form-control titleIn" onChange={event => setPhrases(event.target.value)} placeholder="Phrase"/>
      <div style={{textAlign:"center"}}><button className="btn btn-outline-danger" onClick={addToHandler}>Fire!</button></div>
    </span> 
  )
}
