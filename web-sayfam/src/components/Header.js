import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Header() {
  const { data } = useContext(AppContext);

  return (
    <div className="container">
      <div className="headerContainer">
        <h1 className="logoCircle">S</h1>
        <div className="nav">
          <a href="#">{data.headerSkills}</a>
          <a href="#">{data.headerProjects}</a>
          <a className="background" href="#">
            <p>{data.headerHireMe}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
