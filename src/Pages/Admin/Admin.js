import React, { useState, useEffect } from "react";
import "./Admin.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AddMouvement from "../../components/AddMouvement/AddMouvement";
import SupprimerMouvement from "../../components/SupprimerMouvement/SupprimerMouvement";

function Admin() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div>
          <select id="modifBDD" onChange={handleChange} required>
            <option value="">Modifier la base de données</option>
            <option value="0">Ajouter un élément</option>
            <option value="1">Supprimer un élément</option>
          </select>
        </div>
        {selectedOption === "0" && <AddMouvement />}
        {selectedOption === "1" && <SupprimerMouvement />}
      </main>
      <Footer />
    </div>
  );
}

export default Admin;
