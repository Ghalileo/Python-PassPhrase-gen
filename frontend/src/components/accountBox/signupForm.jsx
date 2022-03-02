import React, {useContext, useState, useEffect, useCallback} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import qs from 'qs'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
//  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from 'axios';

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [openSignIn, setOpenSignIn] = useState(false)
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate('/app',{replace:true}),[navigate])



// Post User Sign up information
const signUpHandler = () => {
  const data =  {'email': email, 'password': password}
  const requestOptions = {

    method: 'POST',
    headers:{'content-type': 'application/json'},
    url: 'http://127.0.0.1:8000/auth/register',
    data: data
}

  axios(requestOptions) 
      .then(response => {
        if (response.ok) {
          
          return response.json()
            
        }
        handleClick()
        throw response
    })
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.log(error);
        alert(error)
    })
    setOpenSignIn(false);
    }


  return (
    <BoxContainer>
      <FormContainer>
      <span className="card-text">
          <input className="mb-2 form-control titleIn" onChange={event => setFullName(event.target.value)} placeholder="Full Name"/>
          <input className="mb-2 form-control titleIn" onChange={event => setEmail(event.target.value)} placeholder="Email Address"/>
          <input className="mb-2 form-control titleIn" onChange={event => setPassword(event.target.value)} placeholder="Password"/>
        </span>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton className="btn btn-outline-danger" onClick={signUpHandler}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={switchToSignin}>
        Already have an account?
      </MutedLink>
    </BoxContainer>
  );

}
  