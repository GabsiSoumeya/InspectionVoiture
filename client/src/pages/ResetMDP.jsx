import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input_INS from'../components/InputInscr';
import defilant from "../assets/defilant.png";
import logo from'../assets/logo.png';
import { Link } from "react-router-dom";
import Button from'../components/Button';
import '../styles/ResetMDP.css';

const ResetMDP = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState({
        email:""
      })
      const handlemail=(event)=>{
        const value = event.target;
        const name = event.target;
        setemail((prev)=>({
          ...prev,
          [name]: value,
        }))
    
      }
    
      const Reset=()=>{
        axios({
            method:"post",
            url:`${process.env.REACT_APP_API_URL} api/user/reset-password`,
            data: {
                email:email,
            }
        })
        .then((res)=>{
          setemail(res.data);
          if(res.status===201){
            console.log('Email envoyé');
            navigate ("/NouvMDP")
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
        <img src={logo} className="logoauth" alt="" />
      </Link>
      <img src={defilant} alt="" className="b-image" />

      <h1>Nouveau Mot De Passe </h1>
      <h2>Renseigner votre email</h2>
      <p>pour recevoir un nouveau mot de passe</p>
    </div>
    </div>

    <div className="container">
    <div className="MDPreset">
    <h6>Réinitialisez votre mot de passe</h6>
 

    <Input_INS
      name="email"
      type="text"
      placeholder="Adresse Email"
      onWrite={handlemail}
      
    />

<Button text="Envoyer " type="submit"
Click={Reset}  
/>
    <br/>
    <br/>
   <div className="annuler mt-2">
   <Button text="Annuler" id='btnannuler'   />
   </div>


        </div>
       </div>

    </>
    
  )

};
    
export default ResetMDP;