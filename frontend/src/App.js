import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect} from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  
  const [phrases, setPhrases] = useState('');
  


  return (
    <div className="App">
      <h1>Passphrase </h1> 
      <button>Deez nuts me!</button>
      
      <input/>
    </div>
  );
}

export default App;
