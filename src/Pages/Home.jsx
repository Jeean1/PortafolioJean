import React from "react";
import img from "../Imgs/mePnt.png";
import { Navigate } from "react-router-dom";
const Home = () => {
  return (
    <div className="HomeContainer" id="home">
      <div className="cardPresentation">
        <div className="imageContainer">
          <img src={img} className="imgStyle" />
        </div>

        <div className="textPresentation">
          <h1>Heey, mi nombre es Jean</h1>
          <div className="redes">
            <a href="https://www.linkedin.com/in/jeanpol-giraldo-82b000243/">
              <i class="fa-brands fa-linkedin" style={{ fontSize: "3rem" }}></i>
            </a>
            <a href="https://github.com/Jeean1">
              <i class="fa-brands fa-github" style={{ fontSize: "3rem" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
