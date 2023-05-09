import React from "react";

export default function About() {
  return (
    <div className="about-main">
      <div className="about-content">
        <div className="about-left">
          <div className="upper-name">
            <div className="line-name-parent">
              <h5 className="name-line">___________</h5>
              <h5>Salim Cobanoglu</h5>
            </div>
          </div>
          <h1 className="heading">
            Creative thinker <br />
            Minimalism lover
          </h1>
          <p className="intro">
            Hi, I’m Salim. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="buttons">
            <div className="hire-button">
              <p className="whiteText">Hire me</p>
            </div>

            <div className="github-button">
              <img src="github.png" alt="github" />{" "}
              <a href="https://github.com/salimcobanoglu/" target="_blank">
                Github
              </a>
            </div>
            <div className="linkedin-button">
              <img src="LinkedIn.png" alt="linkedin" />
              <a
                href="https://www.linkedin.com/in/salimcobanoglu/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <img className="bio-image" src="Untitled design.png" alt="profile" />
      </div>
    </div>
  );
}
