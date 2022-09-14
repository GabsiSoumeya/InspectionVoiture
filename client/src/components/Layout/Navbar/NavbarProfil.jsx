import React from 'react';
import Button from'../../Button.jsx'
import {FaUserCircle} from 'react-icons/fa';
import {BsTelephoneFill} from "react-icons/bs";
import { Link } from 'react-router-dom'
import NavLigne from'../../NavLigne';
const NavbarProfil = () => {
  return (
    <>
    
    <header>
        <div className="row navbaruser">
          
            <div className="col-md-2">
             <h6>Mon Compte</h6>
            </div>
            <div class="col-md-10 ">
              <ul>
                <li>
                  <a>
                     <BsTelephoneFill size="13px"  opacity='0px' style={{marginRight:'8px'}} /> 
                   06 78 95 24 21
                  </a>
                </li>
                <li>
                 <Button text='Devenez un spécialiste'/>
                </li>
                <li>
                  <NavLigne/>
                </li>
            
                <li>
                  <a>
                  <Link to='/Inscription'> <FaUserCircle color='#202954' size='30px' /></Link>
                 
                  </a>
                </li>
              </ul>
            </div>
         
        </div>
      </header>
        </>
    )
}


export default NavbarProfil;