import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import "./Histoire.css";
import Footer from "../../components/Footer/Footer.js";

export default function Histoire() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>L'histoire du Breakdance</h1>
        <div className="history-section">
          <div className="history-content">
            <h2 className="history-title">Origines du Breakdance</h2>
            <p className="history-text">
              Le breakdance, également appelé « b-boying » ou « breaking », a
              émergé dans les années 1970 dans les quartiers urbains de New
              York. Il était associé à la culture hip-hop naissante, incluant le
              graffiti et le rap.
            </p>
          </div>
          <div className="history-content">
            <h2 className="history-title">Évolution</h2>
            <p className="history-text">
              Au fil des années, le breakdance est devenu une forme d'art à part
              entière, avec ses propres techniques et styles. Il a gagné en
              popularité dans le monde entier grâce à des compétitions et des
              films comme "Beat Street" et "Breakin'".
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
