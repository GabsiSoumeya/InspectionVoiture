import { SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "./action-types";




const initialState={
    user:null,
    error:null,
    loading:false,
    //token:
}

export const userReducers=(state=initialState, type , payload)=>{


    switch (type) {
        case SIGN_UP:
            return{
                ...state,
                loading:true,


            };
        case SIGN_UP_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }

        case SIGN_UP_SUCCESS:
            return{
                ...state,
                loading:false,
                user:payload,
                error:null
            }
            
         
    
        default:
          return state
    }

}