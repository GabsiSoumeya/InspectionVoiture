import { createStore, applyMiddleware,compose} from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userReducers} from "./userReducers";

/*const initialState = {};

const middleware = [thunk];

const store = createStore(
  //rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;*/
const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(userReducers, compose(applyMiddleware(thunk) , devtools) )

