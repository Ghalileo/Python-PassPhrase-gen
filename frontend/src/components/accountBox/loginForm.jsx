import React, {useContext, useState, useEffect, useCallback} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
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
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState(null);
  const [authTokenType, setAuthTokenType] = useState(null);
  const [userId , setUserId ] = useState('')
  const [openSignIn, setOpenSignIn] = useState(false)
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate('/app',{replace:true}),[navigate])
  useEffect(() => {
    setAuthToken(window.localStorage.getItem('authToken'));
    setAuthTokenType(window.localStorage.getItem('authTokenType'))
    setUsername(window.localStorage.getItem('username'))
    setUserId(window.localStorage.getItem('userId'))
  }, [])
 
 
  useEffect(() => {
    authToken
      ? window.localStorage.setItem('authToken', authToken)
      : window.localStorage.removeItem('authToken')
    authTokenType
      ? window.localStorage.setItem('authTokenType', authTokenType)
      : window.localStorage.removeItem('authTokenType')
    username
      ? window.localStorage.setItem('username', username)
      : window.localStorage.removeItem('username')
    userId
      ? window.localStorage.setItem('userId', userId)
      : window.localStorage.removeItem('userId')

  }, [authToken, authTokenType, userId])

  const loginAuthHandler = (event) => {
      event?.preventDefault();
      //const data = {'grant_type,':'','username':username,'password':password,'scope':'','client_id':'','client_secret':''}
      const data = {'username':username,'password':password}
      const requestOptions = {

          method: 'POST',
          headers:{'content-type': 'application/x-www-form-urlencoded'},
          url: 'http://127.0.0.1:8000/auth/jwt/login',
          data: qs.stringify(data)
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

          setAuthToken(data.access_token)
          setAuthTokenType(data.token_type)
          setUserId(data.user_id)
          setUsername(data.username)

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
          <input className="mb-2 form-control titleIn" onChange={event => setUsername(event.target.value)} placeholder="username"/>
          <input className="mb-2 form-control titleIn" onChange={event => setPassword(event.target.value)} placeholder="password"/>
        </span>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      {/* <MutedLink href="#">Forget your password?</MutedLink> */}
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton className="btn btn-outline-danger" onClick={loginAuthHandler}>Login</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={switchToSignup}>
        Don't have an accoun?{" "}
      </MutedLink>
    </BoxContainer>
  );
}
