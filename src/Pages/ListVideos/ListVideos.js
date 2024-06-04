import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ListVideos.css";

function ListVideos() {
  const [listeMvt, setListeMvt] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFamille, setSelectedFamille] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (famille) => {
    setSelectedFamille(famille);
    setFilterVisible(false);
  };

  const filteredMvt = listeMvt.filter((mvt) => {
    return (
      (mvt.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === "") &&
      (mvt.famille === selectedFamille || selectedFamille === "")
    );
  });

  return (
    <div>
      <Navbar />
      <main>
        <div className="search-filter-container">
          <button
            className="filter-toggle-button"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            Filtres
          </button>
          <input
            type="text"
            placeholder="Rechercher une vidéo..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          <div className={`filter-buttons ${filterVisible ? "visible" : ""}`}>
            <button onClick={() => handleFilter("")}>Tout</button>
            <button onClick={() => handleFilter("TopRock")}>TopRock</button>
            <button onClick={() => handleFilter("Footwork")}>Footwork</button>
            <button onClick={() => handleFilter("Freeze")}>Freeze</button>
            <button onClick={() => handleFilter("Powermoves")}>
              Powermoves
            </button>
          </div>
        </div>
        <ul className="video-list">
          {filteredMvt.map((mvt) => (
            <li key={mvt.id} className="video-item">
              <Link to={`/affichVideo/${mvt.id}`}>
                <img
                  src={`http://localhost:5000/image/${mvt.id}`}
                  alt={`${mvt.nom} image`}
                  className="video-image"
                />
                <p>{mvt.nom}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default ListVideos;
