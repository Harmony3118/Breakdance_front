import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Videos() {
  const [listeMvt, setListeMvt] = useState([]);

  useEffect(() => {
    const fetchListeMvt = async () => {
      try {
        const response = await fetch("http://localhost:5000/mouvements");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des mouvements");
        }
        const data = await response.json();
        setListeMvt(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des mouvements:", error);
      }
    };

    fetchListeMvt();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <h2>Liste des Mouvements</h2>
        <ul>
          {listeMvt.map((listeMvt) => (
            <li key={listeMvt.id}>
              Video 1 :{" "}
              <Link to={`/affichVideo/${listeMvt.id}`}>{listeMvt.nom}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Videos;
