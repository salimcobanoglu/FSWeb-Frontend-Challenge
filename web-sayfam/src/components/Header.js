import React from "react";

export default function Header() {
  return (
    <div className="container">
      <div className="headerContainer">
        <h1 className="logoCircle">S</h1>
        <div className="nav">
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a className="background" href="#">
            <p>Hire me</p>
          </a>
        </div>
      </div>
    </div>
  );
}
