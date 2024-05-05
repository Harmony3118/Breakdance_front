import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Home = lazy(() => import("./Pages/Home/Home"));
const Histoire = lazy(() => import("./Pages/Histoire/Histoire"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Chargement...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/histoire" element={<Histoire />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
