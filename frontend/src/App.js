import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navigation from './components/Nav'
import POSTPhrase from './components/PostPhrase/postPhrase';
import GETPhrases from './components/GetPhrases/getPhrases';
import GETSignups from './components/GetSignups/getSignups';
const App = () => {


  return (
    <div className="App">
      <Navigation/>
      <br/>
      <br/>
      <br/>
      <h1>Welcome to Passphrase</h1> 
      <div className="card-body">
        <h4>Add a phrase</h4>
        <div>
          <POSTPhrase/> 
        </div>
        <br/>
        <h5 className="card text-white bg-dark mb-3">Your Phrases</h5>
        <div>        
          <GETPhrases/>  
        </div>
        <br/>
        <div className="App_Signup">
          <h1>Sign Up</h1> 
          <div className="card-body">
            <h4>It will be fun</h4>
          </div>
        </div>
        <br/>
        <h5 className="card text-white bg-dark mb-3">Signed-Up Users</h5>
        <div>
          <GETSignups/>
        </div>
      </div>
      <h6>Copyright 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
