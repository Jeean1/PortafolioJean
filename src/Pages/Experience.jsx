import React from "react";
import eCommerceImg from "../Imgs/eCommerceImg.png";
import rickMortyData from "../Imgs/rickMortyBaseData.png";
import pokedex from "../Imgs/Pokedex.png";

const Experience = () => {
  return (
    <div id="Experience">
      <h1 className="title">Experiencia</h1>

      <section className="portafolio">
        <figure className="picture_port picture_port_eCommerce">
          <img src={eCommerceImg} className="app_exp_img" />
          <div className="linkProject">
            <p style={{ color: "#fff" }}>
              Consiste de un comercio electrónico, dónde cumple la funcionalidad
              de realizar una compra virtual y al mismo tiempo crear usuarios y
              almacenarlos en una base de datos.
            </p>
            <a
              href="https://e-commerce-tech-jean.netlify.app/"
              style={{ color: "#fff" }}
            >
              Link del proyecto
            </a>
          </div>
        </figure>
        <figure className="picture_port picture_port_rickMortyData">
          <img src={rickMortyData} className="app_exp_img" />
          <div className="linkProject">
            <p style={{ color: "#fff" }}>
              Una wikipedia dónde puedes entrar a consultar datos de los
              diferentes mundos de la serie animada llamada Rick And Morty.
            </p>
            <a
              href="https://database-rickandmorty-jean.netlify.app/"
              style={{ color: "#fff" }}
            >
              Link del proyecto
            </a>
          </div>
        </figure>
        <figure className="picture_port picture_port_pokedex">
          <img src={pokedex} className="app_exp_img" />
          <div className="linkProject">
            <p style={{ color: "#fff" }}>
              Una wikipedia de Pokemon, dónde puedes entrar y colocar tu nombre
              de entrenador simulando una pokedex de la serie animada Pokemon.
            </p>
            <a
              href="https://pokedex-jean.netlify.app/"
              style={{ color: "#fff" }}
            >
              Link del proyecto
            </a>
          </div>
        </figure>
      </section>
    </div>
  );
};

export default Experience;
