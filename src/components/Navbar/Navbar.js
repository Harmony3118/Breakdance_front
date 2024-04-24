import React from "react";
import { Link } from "react-router-dom";
import logoLastSquad from "../../img/logoLastSquad.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="Logo">
        <img
          src={logoLastSquad}
          className="bouttonLogo"
          alt="logo de LastSquad"
        />
      </Link>
      <nav>
        <Link to="/histoire" className="index">
          HISTOIRE
        </Link>
        <Link to="/videos" className="index">
          VIDÉOS
        </Link>
      </nav>
    </nav>
  );
}

export default Navbar;
