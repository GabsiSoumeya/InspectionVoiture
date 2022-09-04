import React from 'react';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Login from './pages/Login';
import ResetMDP from './pages/ResetMDP';
import {Demande} from './pages/Demande';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import NouvMDP from './pages/NouvMDP';

 function App() {
 

 


  return (
    <div className="app">
 
<BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/Inscription" element={<Inscription />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/demandeinspection" element={<Demande />}/>
      <Route path="resetpassword" element={<ResetMDP />}/>
      <Route path="NouvMDP" element={<NouvMDP />}/>

      </Routes>
  </BrowserRouter>
 
  </div>


  );
};

export default App;