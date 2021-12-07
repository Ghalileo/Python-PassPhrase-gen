import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PhraseView from './components/phraseView'
import UserSignupView from './components/user_signupView'

import 'bootstrap/dist/css/bootstrap.min.css'; 


const App = () => {
  // State object for the title of passphases

  const [phraseList, setPhraseList] = useState([{}]);
  const [title, setTitle] = useState('');
  const [phrases, setPhrases] = useState('');

  // State objects for the signup data
  const [signupList, setSignupList] = useState([{}]);
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Read all phrases
 

 useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/phrase/')
    .then(res => {
      setPhraseList(res.data)
    })
});


// Post a phrase
const addToHandler = () => {
  axios.post('http://127.0.0.1:8000/api/phrase/', {'title': title, 'phrases': phrases})
  .then(res => console.log(res))
}

// Post User Sign up information
const signUpHandler = () => {
  axios.post('http://127.0.0.1:8000/api/user_signup/', {'fullname': fullname, 'email': email, 'password': password})
  .then(res => console.log(res))
}




// Read all users


useEffect(() => {
axios.get('http://127.0.0.1:8000/api/user_signup/')
  .then(res => {
    setSignupList(res.data)
  })
});





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

        <div className="App_Login">
      <h1>Sign Up</h1> 
      <div className="card-body">
        <h4>It will be fun</h4>
        <span className="card-text">
          <input className="mb-2 form-control titleIn" onChange={event => setFullName(event.target.value)} placeholder="Full Name"/>
          <input className="mb-2 form-control titleIn" onChange={event => setEmail(event.target.value)} placeholder="Email Address"/>
          <input className="mb-2 form-control titleIn" onChange={event => setPassword(event.target.value)} placeholder="Password"/>
          <button className="btn btn-outline-danger" onClick={signUpHandler}>Sign Up</button>
        </span>
      </div>
      </div>


        

        <br/>
        <br/>
        <h5 className="card text-white bg-dark mb-3">Your Phrases</h5>

      <div>
        <PhraseView phraseList={phraseList}/>
      </div>
        <h5 className="card text-white bg-dark mb-3">All Passwords</h5>
      <div>
        <UserSignupView signupList={signupList}/>
      </div>

      </div>
      <h6>Copyright 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
