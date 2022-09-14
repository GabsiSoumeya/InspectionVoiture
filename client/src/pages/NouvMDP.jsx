import React from 'react'
import '../styles/nouvMDP.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import MDPInput from'../components/MotDePass';
import Button from'../components/Button';
import { Link } from "react-router-dom";
import { useState } from 'react';
import defilant from "../assets/defilant.png";
import logo from'../assets/logo.png';

const NouvMDP = () => {
  
    const [password, setpassword] = useState({
      password:'',
      confirmPassword:''})
      const handlepassword=(event)=>{
        const value = event.target;
        const name = event.target;
        setpassword((prev)=>({
          ...prev,
          [name]: value,
        }))

      }

      const NvMotdePass=()=>{
        axios({
            method:"post",
            url:`${process.env.REACT_APP_API_URL} api/user/forgot-password`,
            data: {
                password:'',
                confirmPassword:''
            }
        })
        .then((res)=>{
        setpassword(res.data);
          if(res.status===201){
            console.log('Password changé avec succée');
      
        }
      })
      .catch((err) => {
        console.log(err.response);
        console.log("failed");
      });
    }



  return (
    <>
    
    <div className="b-left">
    <div className="b-left-wrapper">
      <Link to="/">
        <img src={logo} className="logoauth" />
      </Link>
      <img src={defilant} alt="" className="b-image" />

      <h1>Nouveau mot de passe </h1>
      
      <p>Changer votre mot de passe</p>
    </div>
    </div>

    <div className="container">
        <div className="NVmotdepass">
          <h6>Définir un nouveau mot de passe</h6>
          <MDPInput placeholder=" Nouveau Mot de passe" onWrite={handlepassword} />
          <MDPInput placeholder="Confirmer votre nouveau Mot de passe" onWrite={handlepassword} />


          <Button text="Valider" className="btconex" Click={NvMotdePass}  />

       </div>

    </div>
    </>
  )
};

export default NouvMDP;
