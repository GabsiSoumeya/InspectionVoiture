import "../../../styles/navbarmiddle.css";
import logocolor from "../../../assets/logocolor.png";
import Button from "../../../components/Button.jsx";
//import UserIcon from "../../components/UserIcon/UserIcon";
import { Link } from "react-router-dom";
import NavLigne from "../../../components/NavLigne";
import { FaUserCircle } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

const NavbarMiddle = () => {
  return (
    <header>
      <div className="row navbarmiddle">
        <div className="col-md-2">
          <Link to="/">
            <img src={logocolor} alt="logotwo" className="logotwo" />
          </Link>
        </div>
        <div className="col-md-10">
          <ul>
            <li>
              
                <BsTelephoneFill
                  size="13px"
                  opacity="0px"
                  style={{ marginRight: "8px" }}
                />
                06 78 95 24 21
            
            </li>
            <li>
              <Button text="Devenez un spécialiste" />
            </li>
            <li>
              <NavLigne />
            </li>

            <li>
              
                <Link to="/Inscription">
                  {" "}
                  <FaUserCircle color="#202954" size="30px" />
                </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default NavbarMiddle;