import React from "react";

const Footer = () => {
  return (
    <div className="footerContainer">

      <div className="footerSection">
        <div className="myNameFooter">
          <p style={{ color: "#fff" }}>@Jeanpol Giraldo - 2022</p>
        </div>
        <div className="iconsRedes">
          <div className="redes centerIcons">
            <a href="https://www.linkedin.com/in/jeanpol-giraldo-82b000243/">
              <i
                class="fa-brands fa-linkedin"
                style={{ fontSize: "3rem", color: "#fff" }}
              ></i>
            </a>
            <a href="https://github.com/Jeean1">
              <i
                class="fa-brands fa-github"
                style={{ fontSize: "3rem", color: "#fff" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
