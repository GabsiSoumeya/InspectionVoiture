import React from 'react';
import'../styles/login.css';
import { useNavigate } from "react-router-dom";
import { Formik ,Form} from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import Input_INS from'../components/InputInscr'; 
import MDPInput from'../components/MotDePass';
import Button from '../components/Button';
import ButtonLog from '../components/ButtonLog';
import defilant from "../assets/defilant.png";
import logo from'../assets/logo.png';

const Login= () => {
const navigate = useNavigate();
const SignupSchema=Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Required"),
      password: Yup.string()
      .required("Mot de passe est obligatoire")
      .min(8, "Mot de passe doit être plus grand que 8 caractères")
      .max(50, "Mot de passe doit être plus petit que 50 caractères")
  }); 


  const Login = (dataform) => {
  //console.log(dataform);
  axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      data: {
          email:dataform.email,
          password:dataform.password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          navigate ("/Profil")
        }
      })
      .catch((err) => {
        console.log(err.response);
        console.log("Failed");
      });
      
    }
    return (
    <>

<div className="b-left">
          <div className="b-left-wrapper">
            <Link to="/">
              <img src={logo} className="logoauth" />
            </Link>
            <img src={defilant} alt="" className="b-image" />

            <h1>bienvenue à Nom </h1>
            <h2>Inscrivez-Vous</h2>
            <p>Vous n'avez pas un compte?</p>
          </div>
        </div>
    
      <div className="motlink">
        <Link to="/Inscription">
          <p>Inscription</p>
        </Link>
      </div>

      <div className="container">
      <div className="authlogin ">
          <h6>Connexion</h6>

          <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        Login(values);
        setSubmitting(false);
    }
  }
    >
     {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting,
    }) => (
    
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>

<Input_INS
                  name="email"
                  type="text"
                  placeholder="Adresse Email"
                  onBlur={handleBlur}
                  value={values.email}
                  onWrite={handleChange}
                />
                 {errors.email && touched.email ? (
             <div className="haserror">{errors.email}</div>
           ) : null}
           <label htmlFor="password">Mot de Passe</label>

<MDPInput
                placeholder="Mot de passe"
                name="password"
                onWrite={handleChange}
                onBlur={handleBlur}
                value={values.password}
                
              />
              {errors.password && touched.password ? (
                <span className="haserror">{errors.password}</span>
              ) : null}


<br />
                <div className="spa">
                  <Button
                    text="Connexion"
                    className="btconex"
                    Click={Login}
                    type="submit"
                  />
                  <Link to="/resetpassword">
                    <p className="sp">Mot de passe oublié ?</p>
                  </Link>
                </div>
                <div className="row lignelog">
                  <div className="ou">
                    <span className="or">Ou</span>
                  </div>
                </div>
                <div className="social">
                
                  <ButtonLog
                    text="Connecter avec Google"
                    className="buttLog"
                    icon={<FcGoogle size="20px" />}

                  />
                   
                  <br />
                  <br />
                  <br />

                  <ButtonLog
                  
                    text="Connecter avec facebook"
                    className="buttLog"
                    icon={<FaFacebook size="20px" />}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
  };

  export default Login;