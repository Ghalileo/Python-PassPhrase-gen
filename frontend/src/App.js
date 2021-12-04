import UserSignup from './components/user_signupView/';

// USER LOGIN

const App = () => {
  // State object for the title of passphases

  const [SignupList, setSignupList] = useState([{}]);
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Read all users
 

 useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/user_signup/')
    .then(res => {
      setSignupList(res.data)
    })
});


// Post a user
const addToHandler = () => {
  axios.post('http://127.0.0.1:8000/api/user_signup/', {'fullname': fullname, 'email': email,'password':password})
  .then(res => console.log(res))
}

// Main body of application
  return (
    <div className="App">
      <h1>Sign Up</h1> 
      <div className="card-body">
        <h4>It will be fun</h4>
        <span className="card-text">
          <input className="mb-2 form-control titleIn" onChange={event => setFullName(event.target.value)} placeholder="Full Name"/>
          <input className="mb-2 form-control titleIn" onChange={event => setEmail(event.target.value)} placeholder="Email Address"/>
          <input className="mb-2 form-control titleIn" onChange={event => setPassword(event.target.value)} placeholder="Password"/>
          <button className="btn btn-outline-danger" onClick={addToHandler}>Login</button>
        </span>
        <br/>
        <br/>
        <br/>
      <div>
        <UserSignup SignupList={SignupList}/>
      </div>
      </div>
      <h6>Copyright 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
