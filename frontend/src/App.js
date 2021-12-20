import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navigation from './components/Nav'
import Home from './pages/Home'
import AppLayout from './pages/Layout';
const App = () => {


  return (
    
    <div className="app">
      <Navigation/>
      <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/app" element={<AppLayout/>}/>
        <Route path="*" element={ () => "404 NOT FOUND"}/>
      </Routes >
    </BrowserRouter>
    </div>  
     
    
  );
}

export default App;
