//import { PromiseProvider } from 'mongoose';
import React from 'react';
import props from 'prop-types';
//import { Link } from 'react-router';

function DefaultLayout (){
    return (
      
               <div>
                <div className='header'>
                    <div className='d-flex justify-content-between'>

                        <h1>InspectionVoiture</h1>
                        <button> User </button>

                        </div>
                        </div>
                 <div className="content">
                    {props.children}
                    </div>
               </div>
        
    )   

  }



export default DefaultLayout;