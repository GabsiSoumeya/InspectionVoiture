import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Provider } from "react-redux";
//import  store  from "./redux/store";
//import { Signup } from './components/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
      <Provider store={store}>
    <App />
  

 </Provider>
 </React.StrictMode>
);
reportWebVitals();