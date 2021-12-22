import axios from 'axios'
import React from 'react'

// Defined variable for phrase item component which will handle the location of generated phrases
const UserSignup = (props) => {

  // Function to delete generated users
const deleteSignupHandler = (fullname) => {
axios.delete(`http://127.0.0.1:8000/api/user_signup/${fullname}`)
  .then(res => console.log(res.data)) }

// Generated HTML Of user_signupItem
return(
  <div>
    <p>
      <span style={{ fontWeight: 'bold, underline'}}>{props.signup.fullname} : {props.signup.email} : </span>{props.signup.password}
      <button onClick={() => deleteSignupHandler(props.signup.fullname)} className="btn btn-outline-danger">X</button>
    </p>
  </div>

)

}

export default UserSignup;