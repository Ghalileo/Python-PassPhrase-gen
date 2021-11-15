import './App.css';
import axios from 'axios';
import React, { useState, useEffect} from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  
  const [phrases, setPhrases] = useState('');



  return (
    <div className="App">
      <h1>Passphrase </h1> 
<<<<<<< HEAD
      <button className="btn btn-outline-danger">Click me!</button>
=======
      <button className= "btn btn-outline-danger">Deez  me!</button>
      
>>>>>>> 93397d781c7939ca2e0605409867272d217efbb4
      <input/>
    </div>
  );
}

export default App;
