import React from "react";
import ReactImg from "../Imgs/react.png";
import JS from "../Imgs/java-script.png";
import htmlImg from "../Imgs/html-5.png";
import cssImg from "../Imgs/css-3.png";
import gitImg from "../Imgs/git.png";

const Skills = () => {
  return (
    <div className="skillsContainer" id="Skills">
      <h1>Habilidades</h1>

      <div className="skills_section ">
        <figure className="apps app_grid1 javascriptMessage">
          <img src={JS} className="app_img" />
        </figure>
        <figure className="apps app_grid2 reactMessage">
          <img src={ReactImg} className="app_img" />
        </figure>
        <figure className="apps app_grid3 htmlMessage">
          <img src={htmlImg} className="app_img" />
        </figure>
        <figure className="apps app_grid4 cssMessage">
          <img src={cssImg} className="app_img" />
        </figure>
        <figure className="apps app_grid5 gitMessage">
          <img src={gitImg} className="app_img" />
        </figure>
      </div>
    </div>
  );
};

export default Skills;
