import "../styles/home.css";
import NavbarTop from '../components/Layout/Navbar/NavbarTop'
import Accueil from "../components/Accueil";
import ServTitle from "../components/ServicesHome/ServTitle";
import ServTypes from "../components/ServicesHome/ServTypes";
import { BiMapAlt } from "react-icons/bi";
import { MdOutlineElectricCar } from "react-icons/md";

import { AiOutlineFileSync } from "react-icons/ai";
import { AiOutlineFileProtect } from "react-icons/ai";


const Home = () => {
  return (
    <>
     <NavbarTop/>
      <Accueil />
      <ServTitle />

      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ServTypes
              text="Le spécialiste se déplace et effectue une inspection compléte"
              title="Déplacement de Spécialiste"
              color={"hsla(208, 74%, 95%, 1)"}
              coloricon="#78ADDE"
              icon={<BiMapAlt size="20px" color="white" />}
            />
          </div>

          <div className="col-md-3">
            <ServTypes
              text="Le spécialiste se déplace et effectue une inspection compléte"
              title="Inspection du Véhicule"
              color={"#f9EBEA"}
              coloricon={"#D67C6f"}
              icon={<MdOutlineElectricCar size="22px" color="white" />}
            />
          </div>

          <div className="col-md-3">
            <ServTypes
              text="Le spécialiste se déplace et effectue une inspection compléte"
              title="Rapport digitale détaillé"
              color={"#fDF4E7"}
              coloricon={"#f0B25D"}
              icon={<AiOutlineFileSync size="22px" color="white" />}
            />
          </div>

          <div className="col-md-3">
            <ServTypes
              text="Le spécialiste se déplace et effectue une inspection compléte"
              title="Garantie 3 Mois si Achat"
              color={"#E9FBF9"}
              coloricon={"#6DE2D9"}
              icon={<AiOutlineFileProtect size="22px" color="white" />}
            />
          </div>
        </div>
      </div>

     
    </>
  );
};
export default Home;