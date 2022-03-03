import React from 'react';
import { Outlet } from 'react-router-dom';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
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
          <Route path="/" element={<Home/>}/>
          
        <Route element={<ProtectedRoute/>}>
          <Route path="/app" element={<AppLayout/>}/>
        </Route>
        
          <Route path="*" element={<NotFound/>}/>
        </Routes> 
      </BrowserRouter>
    </div>  
  );
}
export default App;
