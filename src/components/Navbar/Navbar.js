import React from "react";
import { Link } from "react-router-dom"; /* Pour utiliser Link */

import "./Navbar.css";

import logoLastSquad from "../../img/logoLastSquad.png";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logoLastSquad} className="bouttonLogo" alt="Facebook" />
      </Link>
      <nav>
        <a href="" className="index">
          HISTOIRE{" "}
        </a>
        <a href="" className="index">
          {" "}
          VIDÉOS
        </a>
      </nav>
   
    </nav>
  );
}

export default Navbar;
