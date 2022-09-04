import "../../../styles/navbartop.css";
import logo from "../../../assets/logo.png";
import Button from "../../Button.jsx";


import { Link } from "react-router-dom";
import NavLigne from "../../NavLigne.jsx";
import { FaUserCircle } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

const NavbarTop= () => {
  return (
    <>
      <header>
        <div className="row">
          <div className="navbartop">
            <div className="col-xl-3 col-lg-2">
              <Link to="/">
                {" "}
                <img src={logo} className="logo"alt='Le logo'/>
              </Link>
            </div>
            <div class="col-xl-6 col-lg-7 ">
              <ul>
                <li>
                  <a href="/contact">
                    <BsTelephoneFill
                      size="13px"
                      opacity="0px"
                      style={{ marginRight: "8px" }}
                    />
                    06 78 95 24 21
                  </a>
                </li>
                <li>
                  <Button text="Devenez un spécialiste" />
                </li>
                <li>
                  <NavLigne />
                </li>

                <li>
                  <a href="/">
                    <Link to="/login ">
                      {" "}
                      <FaUserCircle
                        color="#fff"
                        size="30px"
                        style={{ border: "10px" }}
                      />
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavbarTop;