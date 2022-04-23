import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

//Pages
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";

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
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
