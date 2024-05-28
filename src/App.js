import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home/Home"));
const Histoire = lazy(() => import("./Pages/Histoire/Histoire"));
const Videos = lazy(() => import("./Pages/Videos/Videos"));
const AffichageVideo = lazy(() =>
  import("./Pages/AffichageVideo/AffichageVideo")
);

const App = () => (
  <Router>
    <Suspense fallback={<div>Chargement...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/affichVideo" element={<AffichageVideo />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
