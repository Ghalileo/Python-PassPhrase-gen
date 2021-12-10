import React, { useState, useEffect} from 'react';
import axios from 'axios';
import UserSignupView from '../SignUpList/user_signupView';

export default function GETSignups() {
    const [signupList, setSignupList] = useState([{}]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/user_signup/')
        .then(res => {
          setSignupList(res.data)
        })
        .catch(function (error) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        
        });        
        },[]);
  return (
    <div>
    <UserSignupView signupList={signupList}/>
  </div>

  )
}
