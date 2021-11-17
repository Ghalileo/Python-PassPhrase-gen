import './App.css';
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Phasess from './components/phrase'

const App = () => {
  // State object for the title of passphases
  const [title, setTitle] = useState('');
  // State object for phrase
  const [phrases, setPhrases] = useState('');

 


// Main body of application
  return (
    <div className="App">
      <h1>Passphrase </h1> 
      <button className="btn btn-outline-danger">Click me!</button>
      <input/>
    </div>
  );
}

export default App;
