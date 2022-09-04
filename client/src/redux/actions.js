import { SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "./action-types"
import axios from 'axios'

export const userRegister=(newUser)=>async(dispatch)=>{
    dispatch({type:SIGN_UP})
    try {
        const res= await axios.post("/user/register", newUser)
        dispatch({
            type:SIGN_UP_SUCCESS,
            payload:res.data
        })
        
    } catch (error) {
        //dispatch d'erreur
        dispatch({type:SIGN_UP_FAIL ,
             payload:error.response.data})
        
    }
}