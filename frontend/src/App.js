import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navigation from './components/Nav'
import Home from './pages/Home'
const App = () => {


  return (
    
    <div className="app">
      <Navigation/>
      <br/>
      <br/>
      <br/>
      
      <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home/>}/>
        
          
      </Routes >
    </BrowserRouter>
    </div>  
     
    
  );
}

export default App;
