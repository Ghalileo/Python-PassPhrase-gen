import React, {useContext, useState} from 'react';
import axios from 'axios';

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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 //Post user Login
  const logInHandler = () => {
    axios.post('http://127.0.0.1:8000/api/user_login/', {'email': email, 'password': password})
    .then(res => console.log(res))
  }
  return (
    <BoxContainer>
      <FormContainer>
        <span className="card-text">
          <input className="mb-2 form-control titleIn" onChange={event => setEmail(event.target.value)} placeholder="Email Address"/>
          <input className="mb-2 form-control titleIn" onChange={event => setPassword(event.target.value)} placeholder="Password"/>
        </span>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      {/* <MutedLink href="#">Forget your password?</MutedLink> */}
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton className="btn btn-outline-danger" onClick={logInHandler}>Login</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={switchToSignup}>
        Don't have an accoun?{" "}
        
      </MutedLink>
    </BoxContainer>
  );
}
