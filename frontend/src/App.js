import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PhraseView from './components/phraseView'
import 'bootstrap/dist/css/bootstrap.min.css'; 


const App = () => {
  // State object for the title of passphases

  const [phraseList, setPhraseList] = useState([{}]);
  const [title, setTitle] = useState('');
  const [phrases, setPhrases] = useState('');

  // Read all phrases
 useEffect(() => {
   axios.get('http://localhost:8000/api/phrase')
   .then(res => {
     setPhraseList(res.data)
   })
 });

// Post a phrase
const addToHandler = () => {
  axios.post('http://localhost:8000/api/phrase/', {'title': title, 'phrase': phrases})
  .then(res => console.log(res))
}

// Main body of application
  return (
    <div className="App">
      <h1>Passphrase</h1> 
      <div className="card-body">
        <h4>Add a phrase</h4>
        <span className="card-text">
          <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder="title"/>
          <input className="mb-2 form-control titleIn" onChange={event => setPhrases(event.target.value)} placeholder="Phrase"/>
          <button className="btn btn-outline-danger" onClick={addToHandler}>Fire!</button>
        </span>
        <br/>
        <br/>
        <br/>
        <h5 className="card text-white bg-dark mb-3">Your Phrases</h5>
      <div>
        <PhraseView phraseList={phraseList}/>
      </div>
      </div>
      <h6>Copyright 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
