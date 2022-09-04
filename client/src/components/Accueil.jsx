import '../styles/accueil.css'
import Form from '../components/Form'
import carsmall from "../assets/carsmall.png"


const Accueil= () => {
  return (
    <>
    <div className=" slider">
  <div className="row slider-content align-items-center justify-content-center">
    <div className="col-md-5 contentcenter ">
      <div className="content">
        <p>Faites la</p>
        <p>inspecter par</p>
        <h1>un professionnel !</h1>
      </div>
    </div>
    
    <div className="col-md-7">
      <div className="photo">
        <img src={carsmall} alt='carsmall'/>
      </div>
    </div>
  </div>
  <div className="row align-items-center justify-content-center">
    <div className="col-md-12">
        <Form/>
    </div>
  </div>
  
</div>

  

    </>
  );
};
export default Accueil;