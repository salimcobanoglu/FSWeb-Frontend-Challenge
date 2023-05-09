import React from "react";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerCol">
          <h2 className="lets">
            Let’s work together on <br /> your next product.
          </h2>
          <div className="footerInfo">
            <a href="mailto:salimcobanoglu@yahoo.com" className="mail">
              👉 salimcobanoglu@yahoo.com
            </a>

            <div className="links-footer">
              <p>Personal Blog</p>
              <a
                href="https://github.com/salimcobanoglu/"
                className="githubFooter"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/salimcobanoglu/"
                className="linkedinFooter"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
