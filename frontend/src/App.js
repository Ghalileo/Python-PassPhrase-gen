import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navigation from './components/Nav'
import Home from './pages/Home'
import AppLayout from './pages/Layout';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';
const App = () => {


  return (
    
    <div className="app">
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/app" element={<AppLayout/>}/>
          <Route  path="*" element={<NotFound/>}/>
        </Routes >
      </BrowserRouter>
    </div>  
     
    
  );
}

export default App;
