import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Identifiants codés en dur
    const validUsername = "lastsquad";
    const validPassword = "20L@&19qd";

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/admin");
    } else {
      alert("Identifiant ou mot de passe incorrect");
    }
    // ajout expiration au bout de 5 min
    if (username === validUsername && password === validPassword) {
      const expirationTime = new Date().getTime() + 30000; // 1 heure
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("expirationTime", expirationTime);
      navigate("/admin");
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <h2>Page de connexion</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Se connecter</button>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
