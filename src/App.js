import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Navigateur from "./components/Navigateur/Navigateur";

function App() {
  return (
    <div>
      <Header />
      <Navigateur />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
