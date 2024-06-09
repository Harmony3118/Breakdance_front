import React, { useState } from "react";
import "./AddMouvement.css";

function AddMouvement() {
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    famille: "1",
    limiteAge: "",
  });
  const [videoFile, setVideoFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.name === "video") {
      setVideoFile(e.target.files[0]);
    } else if (e.target.name === "image") {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nom", formData.nom);
    data.append("description", formData.description);
    data.append("famille", formData.famille);
    data.append("limiteAge", formData.limiteAge);
    data.append("video", videoFile);
    data.append("image", imageFile);

    try {
      const response = await fetch("http://breakdance.edufalc.fr:5500/addMouvement", {
        method: "POST",
        body: data,
      });
      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du mouvement");
      }
      alert("Mouvement ajouté avec succès");
    } catch (error) {
      console.error("Erreur lors de l'ajout du mouvement:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="modifBDD">
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="famille">Famille</label>
          <select
            id="famille"
            name="famille"
            value={formData.famille}
            onChange={handleChange}
            required
          >
            <option value="0">TopRock</option>
            <option value="1">Footwork</option>
            <option value="2">Freeze</option>
            <option value="3">Powermoves</option>
          </select>
        </div>
        <div>
          <label htmlFor="limiteAge">Limite d'âge</label>
          <input
            type="number"
            id="limiteAge"
            name="limiteAge"
            value={formData.limiteAge}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div>
          <label htmlFor="video">Vidéo</label>
          <input
            type="file"
            id="video"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddMouvement;
