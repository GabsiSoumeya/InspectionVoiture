import '../styles/form.css';
import Button from "./Button.jsx";
import InputForm from "./InputForm";
//import Ligne from "./Ligne";
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <>
      <div className="row form">
        <div className="col-md-12">
        <ul>
          <li>
            <label>
              <InputForm
                name="marque"
                type="text"
                placeholder="Marque"
                text="Marque"
              />
            </label>
          </li>
          <li>
            {/*<Ligne />*/}
          </li>
          <li>
            <label>
              <InputForm
                name="modele"
                type="text"
                placeholder="Modéle"
                text="Modéle"
              />
            </label>
          </li>
          <li>
           { /*<Ligne />*/}
          </li>
          <li>
            <label>
              <InputForm
                name="annee"
                type="text"
                placeholder="Année"
                text="Année"
              />
            </label>
          </li>
          <li>
          <Link to='/demandeinspection'><Button text="Demander mon inspection" /></Link>
          </li>
        </ul>

       </div>
       
      </div>
    </>
  );
};
export default Form;