import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



// Defining parameter to return route to the component thats passed in 
const ProtectedRoute = ({component: Component, ...rest}) => {
    // Credentials in order to authenticate users to access application
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [jwtToken, setjwtToken] = useState('');
    
    // Authenticate user credentials from backend. 
    const loginAuthHandler = () => {
        axios.get('http:127.0.0.1:8000/user_login', {'email': email,'password': password, 'jwtToken':jwtToken})
    } 

    return(
        <Route {...rest} render={
            (props) => {
            return <Component/>
            }}
        />
    )
}

export default ProtectedRoute;