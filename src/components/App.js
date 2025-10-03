
import React from "react";
import './../styles/App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
     <Router>
        {/* Navigation links */}
        <Navigation />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
