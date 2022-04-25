import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export default function Navbar() {

  return (
    <nav className="Navbar-Wrapper">
      <div className="Logo-Container">
        <div className="Logo-Name">Gabriel Da Silva</div>
        <span>toggle</span>
      </div>
      <div className="Navbar-Items">
        <div className="List">
          <ul>
            <Link to="/" className="Item">
              <li>Home</li>
            </Link>
            <Link to="/projects" className="Item">
              <li>Projects</li>
            </Link>
            <Link to="/projects" className="Item">
              <li>Experience</li>
            </Link>
            <Link to="/about" className="Item">
              <li>About</li>
            </Link>
          </ul>
        </div>

        <Button
          style={"Primary-Style"}
          size={"Large"}
          color={""}
          onClick={undefined}
        >
          Contact Me
        </Button>
      </div>
    </nav>
  );
}
