import "../styles/demande.css";
import { Steps, message } from "antd";
import Select from 'react-select'
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import EtapesDemande from "../components/EtapesDemande";
import inspection from "../assets/inspection.png";
import InputDemande from "../components/InputDemande";
import NavbarMiddle from "../components/Layout/Navbar/NavbarMiddle";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillFlag } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { fetchModele,fetchMarque} from '../api/index'
export const Demande= () => {
  const { Step } = Steps;
  const [marques, setmarques] = useState([])
  const [modeles, setmodeles] = useState([])
  useEffect(() => {
fetchMarque().then(res=> {
      setmarques(res.data.marques.map(v=>({label:v.nom_marque,value:v._id})));
      console.log("aaaaaaa " + marques);
      console.log("res.data " + res.data.marques[0].nom_marque
      );
    })
    .catch(err => {
      console.log(err.response);
  })
  
   
  }, [])


  useEffect(() => {
    fetchModele()
    .then(res=> {
      setmodeles(res.data.modeles.map(v=>({label:v.nom_modele,value:v._id})));
      console.log("aaaaaaa " + modeles);
      console.log("res.data " + res.data.modeles[0].nom_modele
      );
    })
    .catch(err => {
      console.log(err.response);
  })
  
   
  }, [])


  const Information = (callback) => {

      const [info, setinfo] = useState({
      marque: '',
      modele: '',
      annee: '',
      
    })
     const handleChange = e => {
   
    const { value, name } = e.target

    setinfo(prev => ({
        ...prev,
        [name]: value

    }))
    console.log(info);
     
      localStorage.setItem('information', JSON.stringify({ ...info, [name]: value }))

    }

const [selectedmarque, setSelectedmarque] = useState("")

const [selectedmodele, setSelectedmodele] = useState("")
    return (
      <>
        <div className="col-md-11 ml-5">
          <div className="information p-3">
            
                  <label>
                  <div className="inputdemande">
        {/*<select  className="Input-demande"
     defaultValue={selectedmarque}
     placeholder={"marque"}
      onChange={({ target: { value } }) => setSelectedmarque(value )}
      marques={marques}
    >
      {marques.map( marque => (
        <option value={marque.nom_marque}>
          {marque.nom_marque}
        </option>
      ))}
      </select>*/}
    <Select
        defaultValue={selectedmarque}
        placeholder={"marque"}
        onChange={setSelectedmarque}
        options={marques}


      />

</div>

                  </label>
                  <br />

                  <label>
                  <div className="inputdemande">
    <Select
        defaultValue={selectedmodele}
        placeholder={"modéle"}
        onChange={setSelectedmodele}
        options={modeles}


      />

</div>
                  </label>
                  <br />
                  <label>
                    <InputDemande
                      name="annee"
                      type="text"
                      placeholder="Année"
                      text="Année"
                      onWrite={handleChange}

                      icon={
                        <AiFillCalendar
                          color="#F0B25D"
                          style={{
                            position: "absolute",
                            marginLeft: "-2.5%",
                            marginTop: "2.5%",
                          }}
                        />
                      }
                    />
           
                  </label>
              
          </div>
        </div>
      </>
    );
  };
  const Informationaside = () => {
    return (
      <>
        <EtapesDemande
          nomEtap="Informations sur le véhicule"
          description="Veuillez remplir tous les champs obligatoires."
          question="Avez vous une question ? contactez-nous sur notre standard ouvert de 9h à 20h."
        />
      </>
    );
  };

  const Localisation = () => {
    return (
      <>
        <div className="col-md-11">
          <div className="localisation p-3">
            <label>
              <InputDemande
                name="codepostal"
                type="text"
                placeholder="Code Postale"
                icon={
                  <AiFillFlag
                    color="#F0B25D"
                    style={{
                      position: "absolute",
                      marginLeft: "-2.5%",
                      marginTop: "2.5%",
                    }}
                  />
                }
              />
            </label>
            <br />

            <label>
              <InputDemande
                name="ville"
                type="text"
                placeholder="Ville"
                icon={
                  <BiCurrentLocation
                    color="#F0B25D"
                    style={{
                      position: "absolute",
                      marginLeft: "-2.5%",
                      marginTop: "2.5%",
                    }}
                  />
                }
              />
            </label>
            <br />
            <label>
              <InputDemande
                name="pays"
                type="text"
                placeholder="Pays"
                icon={
                  <IoLocation
                    color="#F0B25D"
                    style={{
                      position: "absolute",
                      marginLeft: "-2.5%",
                      marginTop: "2.5%",
                    }}
                  />
                }
              />
            </label>
          </div>
        </div>
      </>
    );
  };
  const Localisationaside = () => {
    return (
      <>
        <EtapesDemande
          nomEtap="Localisation du véhicule"
          description="Veuillez remplir tous les champs obligatoires."
          question="Une question ? Appelez-nous sur notre standard ouvert 7j/7 de 9h à 20h."
        />
      </>
    );
  };

  const Besoin = () => {
    return (
      <>
        <div className="col-md-11 p-3">
          <div className="besoin">
            <h6>
              Vous pouvez nous insérer ici le lien de l'annonce si le véhicule
              est en ligne sur un site d'annonce.
            </h6>
            <p>[facultatif]</p>
            <textarea name="" id="" rows="6" className="area">
              Texte libre
            </textarea>
          </div>
        </div>
      </>
    );
  };
  const Besoinaside = () => {
    return (
      <>
        <EtapesDemande
          nomEtap="Des besoins spécifiques ?"
          description="Facultatif ( c'est un champ non obligatoire )"
          question="Une question ? Appelez-nous sur notre standard ouvert 7j/7 de 9h à 20h."
        />
      </>
    );
  };

  const steps = [
    {
      title: "Informations sur le véhicule",
      content: <Information />,
      asidecontent: <Informationaside />,
    },
    {
      title: "Localisation du véhicule",
      content: <Localisation />,
      asidecontent: <Localisationaside />,
    },
    {
      title: "Des besoins spécifiques ?",
      content: <Besoin />,
      asidecontent: <Besoinaside />,
    },
  ];
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="slider-demande">
        <NavbarMiddle />
        <div className="container mt-3">
          <div className="title">
            <h3> Demander mon inspection</h3>
          </div>

          <div className="col-md-8 mt-5 custom-item-step ">
            <Steps current={current}>
              {steps.map((item) => (
                <Step
                  key={item.title}
                  title={item.title}
                  className="steptitle"
                />
              ))}
            </Steps>

            <div className="steps-content">{steps[current].content}</div>

            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button text="Suivant" Click={() => next()} id="suivant" />
              )}
              {current === steps.length - 1 && (
                <Button
                  text="Demander"
                  Click={() => message.success("Processing complete!")}
                />
              )}
              {current > 0 && (
                <div className="retour">
                  <Button style={{}} text="Retour" Click={() => prev()} />
                </div>
              )}
              {current === 0 && (
                <div className="retourdisabled">
                  <Button
                    className="retour"
                    style={{ margin: "0 8px" }}
                    text="Retour"
                    disabled
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="ins">{steps[current].asidecontent}</div>
            <img src={inspection} alt="" className="ph" />
          </div>
        </div>
      </div>
    </>
  );
};

