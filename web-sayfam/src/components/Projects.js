import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

// const data = [
//   {
//     projectName: "Pizza",
//     projectDescription:
//       "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
//     projectProgrammes: ["react", "axios"],
//   },
//   {},
//   {},
// ];

export default function Projects() {
  const { data } = useContext(AppContext);

  return (
    <div className="projectsContainer">
      <div className="projects">
        <div className="projectCol">
          <h1 className="profile-heading">{data.projectsTitle}</h1>
          <div className="cards">
            <div className="card">
              <img src="diary.png" alt="projects" />
              <h3 className="content-heading">Diary</h3>
              <p className="description-project">
                A simple, customizable, minimal setup cookie plugin that allows
                your users to select which cookies to accept or decline. This
                was created with vanilla JS, SCSS and Parcel Bundler and is
                available as a NPM package and the git repository makes any type
                of customization to code and themes possible.
              </p>
              <div className="programs">
                <p>react</p>
                <p>redux</p>
                <p>axios</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/salimcobanoglu/fsweb-s10-challenge"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href="https://fsweb-s10-challenge-abmalms45-salimcobanoglu.vercel.app"
                  target="_blank"
                >
                  View Site
                </a>
              </div>
            </div>
            <div className="card">
              <img src="pizza.png" alt="projects" />
              <h3 className="content-heading">Pizza Order</h3>
              <p className="description-project">
                A simple, customizable, minimal setup cookie plugin that allows
                your users to select which cookies to accept or decline. This
                was created with vanilla JS, SCSS and Parcel Bundler and is
                available as a NPM package and the git repository makes any type
                of customization to code and themes possible.
              </p>
              <div className="programs">
                <p>react</p>
                <p>redux</p>
                <p>axios</p>
              </div>
              <div className="links">
                <a href="https://github.com/salimcobanoglu/fsweb-s7-challenge-pizza">
                  Github
                </a>
                <a href="https://fsweb-s7-challenge-pizza-theta.vercel.app">
                  View Site
                </a>
              </div>
            </div>
            <div className="card">
              <img src="Rectangle 41.png" alt="projects" />
              <h3 className="content-heading">Pizza Order</h3>
              <p className="description-project">
                A simple, customizable, minimal setup cookie plugin that allows
                your users to select which cookies to accept or decline. This
                was created with vanilla JS, SCSS and Parcel Bundler and is
                available as a NPM package and the git repository makes any type
                of customization to code and themes possible.
              </p>
              <div className="programs">
                <p>react</p>
                <p>redux</p>
                <p>axios</p>
              </div>
              <div className="links">
                <a href="#">Github</a>
                <a href="#">View Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
