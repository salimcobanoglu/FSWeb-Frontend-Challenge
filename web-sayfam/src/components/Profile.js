import React from "react";

export default function Profile() {
  return (
    <div className="profileContainer">
      <div className="profile">
        <div className="profile-infoCol">
          <h1 className="profile-heading">Profile</h1>
          <div></div>
          <div className="profile-infoText">
            <div className="profile-box">
              <div className="right">
                <h3 className="content-heading">Profile</h3>
                <div className="two-part">
                  <div className="keys">
                    <p>Birth Date</p>
                    <p>Location</p>
                    <p>Education</p>
                    <br /> <br />
                    <p>Position</p>
                  </div>
                  <div className="values">
                    {" "}
                    <p>24.04.1988</p>
                    <p>Luxembourg</p>
                    <p>BOĞAZİÇİ ÜNİVERSİTESİ - Turizm İşletmeciliği</p>
                    <p>Frondend Developer,UI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-box">
              <h3 className="content-heading">About Me</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                aut, odit laborum aliquam voluptatum nisi mollitia. Mnima
                accusamus ratione soluta aperiam sit voluptate? Dicta quod
                deserunt quam temporibus cumque magnam!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
