//import logo from './logo.svg';
import './App.css';
//import { Router } from 'express';
import {BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import DemanderInspection from './pages/DemanderInspection';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   
   <Route path='/' element={<Home />} /> 
   <Route path='/Login' element={<Login />} /> 
   <Route path='/Register' element={<Register />} /> 
   <Route path='/DemanderInspection' element={<DemanderInspection />} /> 

   </BrowserRouter>
    </div>
  );
}

export default App;
