import React, {useContext, useState} from 'react';

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

// Post User Sign up information
const signUpHandler = () => {
  axios.post('http://127.0.0.1:8000/api/user_signup/', {'fullname': fullname, 'email': email, 'password': password})
  .then(res => console.log(res))
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
