import '../styles/MotDePass.css'
import React ,{ useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
const MotDePass = ({ onWrite, placeholder , errorMessage }) => {
    const [type, settype] = useState(false)
    return (
    <div className="motdepass_input ">
         
         
    <input 
    type={type ? 'text':'password'} 
     name='password'
     placeholder={placeholder}
     onChange={onWrite}
     className="MDPInput"
     
   />
    {     type ? 
  <AiOutlineEye onClick={() => settype(!type)} 
  size="20px" 
  color="#858585" 
  cursor='pointer' 
  style={{marginLeft:'-4.5%' , marginTop:'3%'}} />       
          
          :
  <AiOutlineEyeInvisible onClick={() => settype(!type)} 
  size="20px" 
  color="#858585" 
  cursor='pointer' 
  style={{marginLeft:'-4.5%' , marginTop:'3%'}}/>
  }
    </div>
  )
}

export default MotDePass;