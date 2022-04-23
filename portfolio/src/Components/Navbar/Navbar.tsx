import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo-Container">Logo</div>
      <div className="Navbar-Items">
        <ul className="List">
          <a href="/">
            <li className="Item">Home</li>
          </a>
          <a href="/projects">
            <li className="Item">Projects</li>
          </a>
          <a href="/about">
            <li className="Item">About</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
