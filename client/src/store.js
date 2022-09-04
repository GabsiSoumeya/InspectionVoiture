import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer  from './features/authSlice'
import errorsReducer  from './features/errorsSlice'

export const store = configureStore({
  reducer: {
    auth : authenticationReducer,
    errors : errorsReducer,
  },
});