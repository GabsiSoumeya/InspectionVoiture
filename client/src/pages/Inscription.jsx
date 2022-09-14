import React from 'react';
import '../styles/inscription.css'
import Input_INS from'../components/InputInscr'; 
import { Formik,Form , useFormik} from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MDPInput from'../components/MotDePass';
import { Link } from "react-router-dom";


import defilant from "../assets/defilant.png";
import logo from'../assets/logo.png';
const Inscription = () => {

    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(5, "trop petit")
            .max(50, "trop long!")
            .required("Ce champ est obligatoire"),
        lastName: Yup.string()
            .min(2, "trop petit")
            .max(10, "trop long!")
            .required("Ce champ est obligatoire"),
        email: Yup.string()
            .email("email invalide")
            .required("l'email est obligatoire"),
            telephone: Yup.number().required("Telephone Obligatoire"),
        password: Yup.string()
            .required("Mot de passe est obligatoire")
            .min(8, "Mot de passe doit être plus grand que 8 caractères")
            .max(50, "Mot de passe doit être plus petit que 50 caractères"),
        confirmPassword: Yup.string()
            .required("Confirmation de mot de passe est obligatoire")
            .oneOf(
                [Yup.ref("password"), null],
                "Le mot de passe de confirmation ne correspond pas"
            ),
        acceptTerms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),
    });



    const Inscription =(payload)=>{
        console.log(payload);
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/register`,
            data: { profile :{
              firstName: payload.firstName,
                lastName:payload.lastName,
               
                phone: payload.telephone,
                gender:"FEMALE"
            },
                 email: payload.email,
                password: payload.password,
            },
          })
            .then((res) => {
              console.log(res);
              console.log("SUCSESS");
              navigate("/login");
              /*if (res.data.errors) {
                firstNameError.innerHTML = res.data.errors.firstName;
                lastNameError.innerHTML = res.data.errors.lastName;
                emailError.innerHTML = res.data.errors.email;
                telephoneError.innerHTML = res.data.errors.telephone;
                passwordError.innerHTML = res.data.errors.password;
              } else {
                setFormSubmit(true);
              }*/
            })
            .catch((err) => {console.log(err);
            console.log("FAILED");
      });
        };

        const test=(e)=>{
          console.log("inTest",e)
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
            <p>Avez vous déja un compte?</p>
          </div>
        </div>

       <div className="motlink">
      <Link to="/login">
        <p>Se connecter</p>
      </Link>
    </div>
     
        <div className="INSCR">
            <h6 className="text-center">Inscription</h6>


          <Formik
    const initialValues = {{
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    }}
    onSubmit={async (values) => {
      Inscription(values)
    }}
  >

   
{({ handleChange, handleBlur, values, errors, touched, isSubmitting, },formProps) => (
        
<Form >
<label htmlFor="firstName">First Name</label>


<Input_INS
                name="firstName"
                type="text"
                placeholder="Nom"
                onWrite={handleChange}
                onBlur={handleBlur}
                value={values.firstName} />
    {errors.firstName && touched.firstName ? (
                <span className="haserror">{errors.firstName}</span>
              ) : null}

  <label htmlFor="lastName">Last Name</label>

<Input_INS
                name="lastName"
                type="text"
                placeholder="Prenom"
                onWrite={handleChange}
                onBlur={handleBlur}
                value={values.lastName} />
    {errors.lastName && touched.lastName ? (
                <span className="haserror">{errors.lastName}</span>
              ) : null}

<label htmlFor="email">Email</label>

<Input_INS
                name="email"
                type="text"
                placeholder="Adresse Email"
                onWrite={handleChange}
                onBlur={handleBlur}
                value={values.email} />
    {errors.email && touched.email ? (
                    <span className="haserror">{errors.email}</span>
                  ) : null}

<label htmlFor="telephone">Telephone</label>

<Input_INS
                name="telephone"
                type="text"
                placeholder="Numéro de téléphone"
                onWrite={handleChange}
                onBlur={handleBlur}
                value={values.telephone} />

    {errors.telephone && touched.telephone ? (
                <span className="haserror">{errors.telephone}</span>
              ) : null}

<MDPInput
                placeholder="Mot de passe"
                name="password"
                onWrite={handleChange}
                onBlur={handleBlur}
                value={values.password}
                style={{ marginTop: "9px" }}
              />
              {errors.password && touched.password ? (
                <span className="haserror">{errors.password}</span>
              ) : null}

<MDPInput
                placeholder="Confirme Mot de passe"
                name=" passwordConfirm"
                onWrite={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm}
                style={{ marginTop: "9px" }}
              />
              {errors.passwordConfirm && touched.passwordConfirm ? (
                <span className="haserror">{errors.passwordConfirm}</span>
              ) : null}

<div className="chbox">
                <input type="checkbox" name="tick" onClick={handleChange} />{" "}
                J’accepte les conditions d’utilisation et la politique de
                confidentialité.
                {errors.tick && touched.tick ? (
                  <span className="haserror">{errors.tick}</span>
                ) : null}
              </div>
              <button type="submit">Submit</button>
        
             
</Form>
)}
        </Formik>
         </div>
         </>
    
  );
};
export default Inscription;