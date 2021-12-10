import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navigation from './components/Nav'
import POSTPhrase from './components/PostPhrase/postPhrase';
import GETPhrases from './components/GetPhrases/getPhrases';
import GETSignups from './components/GetSignups/getSignups';
const App = () => {
<<<<<<< HEAD
  // State object for the title of passphases

  const [phraseList, setPhraseList] = useState([{}]);
  const [title, setTitle] = useState('');
  const [phrases, setPhrases] = useState('');

  // State objects for the signup data
  const [signupList, setSignupList] = useState([{}]);

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
// Read all users
useEffect(() => {
axios.get('http://127.0.0.1:8000/api/user_signup/')
  .then(res => {
    setSignupList(res.data)
  })
});

// Main body of application
=======


>>>>>>> d3b6677b25331507a6f767036f5628725f70ee0c
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
          <POSTPhrase>
          </POSTPhrase>
        </div>
        <br/>
        <h5 className="card text-white bg-dark mb-3">Your Phrases</h5>
        <div>        
          <GETPhrases>
          </GETPhrases>
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
        <GETSignups>
        </GETSignups>
      </div>
      </div>
      <h6>Copyright 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
