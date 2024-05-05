import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoLastSquad from "../../img/logoLastSquad.png";
import "./Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <Link to="/" className="Logo">
        <img
          src={logoLastSquad}
          className="bouttonLogo"
          alt="logo de LastSquad"
        />
      </Link>


      <div className="navbar-links">
        <Link to="/histoire" className="navbar-link">
          HISTOIRE
        </Link>
        <Link to="/videos" className="navbar-link">
          VIDÉOS
        </Link>
      </div>

 
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>

    
      <div className={`navbar-links-mobile ${showLinks ? "show-nav" : ""}`}>
        <Link to="/histoire" className="navbar-link">
          HISTOIRE
        </Link>
        <Link to="/videos" className="navbar-link">
          VIDÉOS
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
