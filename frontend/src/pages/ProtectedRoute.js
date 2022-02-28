import React, {useState} from 'react';
import {Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import MainAppLayout from '../components/layout/layout'
import auth from './auth'




// Defining parameter to return route to the component thats passed in 
const ProtectedRoute = ({MainAppLayout: Component, ...rest}) => {
    // Credentials in order to authenticate users to access application
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    
    // Authenticate user credentials from backend. 
    // const loginAuthHandler = () => {
    //     axios.get('http:127.0.0.1:8000/auth/jwt/login', {'email': email,'password': password})
    // } 

    return(
        <Route {...rest} 
        render={
            (props) => {
                if (auth.loginAuthHandler()) {
                    return<Component {...props}/>
                } else {
            return (
            <Navigate 
            to={{
                pathname:"/",
                state:{
                    from: props.location
                }
            }}
            />
            )}}}
        />
    )
}

export default ProtectedRoute;