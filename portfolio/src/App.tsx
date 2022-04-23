import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Project from "./Components/Project/Project";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

//Styles
import "./Styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Project />} />
            <Route path="about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
