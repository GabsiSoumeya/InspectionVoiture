import React from 'react'
import {  useState } from "react";
const Profile = () => {

    const [formData, setformData] = useState({
        firstname : "",
        lastName :"",
        email : "",
        telephone :"" , 
        birthday: "",
        adresse:"",
        ville : "",
        codepostal: "",
    })

    const handlechange =e=>{
        const {value , name}=e.target 
        setformData(prev=>({
            ...prev ,
            [name] : value 
        }))
    }



  return (
    <div>Profile</div>
  )
}

export default Profile;