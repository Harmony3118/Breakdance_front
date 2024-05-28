import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Videos() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/");
  //       if (!response.ok) {
  //         throw new Error("Erreur lors de la récupération des données");
  //       }
  //       const data = await response.text();
  //       setMessage(data);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des données:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch("http://localhost:5000/video");
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

    fetchVideo();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <h2>Test vidéos</h2>
        <p>
          Vidéo 1 : <Link to="/affichVideo"> Video 1 </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Videos;
