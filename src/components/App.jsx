import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import CV from "./CV";
import Examples from "./Examples";
import FXV from "./FXV";
import Character from "./Character";
import Forex from "./Forex";
import Home from "./Home";
import Motivation from "./Motivation";


function App() {

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Motivation" element={<Motivation />} />
          <Route path="/Examples" element={<Examples />} />
          <Route path="/FXV" element={<FXV />} />
          <Route path="/Character" element={<Character />} />
          <Route path="/Forex" element={<Forex />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;