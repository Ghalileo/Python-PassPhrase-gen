import axios from 'axios'
import React, {useState} from 'react'

const Auth = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginAuthHandler = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('username',username);
        formData.append('password',password);

        const requestOptions = {
            method: 'POST',
            headers:{'content-type': 'application/x-www-form-urlencoded'},
            url: 'http://127.0.0.1:8000/auth/jwt/login',
            body: formData,

            
        }

        axios(requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json()

            }
            throw response
        })
        .then(data => {
            console.log(data);

        })
        .catch(error => {
            console.log(error);
            alert(error)
        })
        
    }}

export default Auth;