import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AffichageVideo.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function AffichageVideo() {
  const { id_mvt } = useParams();
  const [titre, setTitre] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const [description, setDescription] = useState("");
  const [famille, setFamille] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`http://breakdance.edufalc.fr:5500/video/${id_mvt}`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération de la vidéo");
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoSrc(url);
      } catch (error) {
        console.error("Erreur lors de la récupération de la vidéo:", error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(`http://breakdance.edufalc.fr:5500/data/${id_mvt}`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setTitre(data.titre);
        setDescription(data.description);
        setFamille(data.famille);
        setAge(data.age);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchVideo();
    fetchData();
  }, [id_mvt]);

  return (
    <div>
      <Navbar />
      <main id="AffichageVideo">
        {videoSrc ? (
          <video className="videoPresentation" controls width="600">
            <source src={videoSrc} type="video/mp4" />
            Votre navigateur ne supporte pas le format vidéo.
          </video>
        ) : (
          <p className="pAffichageVideo">Chargement de la vidéo...</p>
        )}

        <div id="descriptionVideo1">
          {titre ? (
            <h2 className="titreVideo">{titre}</h2>
          ) : (
            <h2 className="titreVideo">Description de la vidéo</h2>
          )}
          <div id="descriptionVideo2">
            {famille ? (
              <p className="pAffichageVideo">Famille : {famille}</p>
            ) : (
              <p></p>
            )}
            <hr />
            {description ? (
              <p className="pAffichageVideo">{description}</p>
            ) : (
              <p></p>
            )}
            {age ? (
              <p className="pAffichageVideo" id="limiteAge">
                &#x26A0; Il faut avoir {age} ans pour réaliser ce mouvement !
                &#x26A0;
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <p></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AffichageVideo;
