import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AddMouvement from "../../components/AddMouvement/AddMouvement";

function Admin() {
  return (
    <div>
      <Navbar />
      <main>
        <AddMouvement />
      </main>
      <Footer />
    </div>
  );
}

export default Admin;
