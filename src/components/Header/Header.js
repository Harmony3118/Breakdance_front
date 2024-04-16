import React from "react";
import "./Header.css";
// Pour l'instant, il n'y a pas de .css

function Header() {
  return (
    <header>
      <img src="/img/logoLastSquad.png" id="logoLS" alt="Logo de LastSquad" />
      <div id="contact">
        <a href="https://www.facebook.com/Lastsquadcrew/?locale=fr_FR">
          <img
            src="/img/logoFacebook.png"
            className="bouttonLogo"
            alt="Facebook"
          />
        </a>
        <a>
          <img
            src="/img/logoYoutube.png"
            className="bouttonLogo"
            alt="Youtube"
          />
        </a>
        <a href="https://www.instagram.com/lastsquad_crew/">
          <img
            src="/img/logoInstagram.png"
            className="bouttonLogo"
            alt="Instagram"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
