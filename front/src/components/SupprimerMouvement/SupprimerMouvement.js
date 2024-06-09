import React, { useState, useEffect } from "react";
import "./SupprimerMouvement.css";

function SupprimerMouvement() {
  const [listeMvt, setListeMvt] = useState([]);
  const [selectedMvt, setSelectedMvt] = useState(null);

  useEffect(() => {
    const ListeMvt = async () => {
      try {
        const response = await fetch("http://breakdance.edufalc.fr:5500/mouvements");
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

  const supprMouvement = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5500/supprimerMouvement/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        console.log(response);
        throw new Error("Erreur lors de la suppression du mouvement");
      }
      alert("Mouvement supprimé avec succès");
      // Mettre à jour la liste des mouvements après suppression
      setListeMvt(listeMvt.filter((mvt) => mvt.id !== id));
      setSelectedMvt(null); // Réinitialiser la sélection
    } catch (error) {
      console.error("Erreur lors de la suppression du mouvement:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedMvt !== null) {
      supprMouvement(selectedMvt);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="modifBDD">
        <ul className="video-list">
          {listeMvt.map((mvt) => (
            <li
              key={mvt.id}
              className={`eltImageSuppr ${
                selectedMvt === mvt.id ? "selected" : ""
              }`}
              onClick={() => setSelectedMvt(mvt.id)}
            >
              <img
                src={`http://breakdance.edufalc.fr:5500/image/${mvt.id}`}
                alt={`${mvt.nom} image`}
                className="imageSuppr"
              />
              <p>{mvt.nom}</p>
            </li>
          ))}
        </ul>
        <button type="submit">Supprimer la video</button>
      </form>
    </div>
  );
}

export default SupprimerMouvement;
