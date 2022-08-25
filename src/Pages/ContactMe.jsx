import React from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";

const ContactMe = () => {
  return (
    <div id="ContactMe">
      <h1 className="title">Contactame!</h1>

      <div className="contactme_Container">
        <div className="contactme_formSection">
          <div className="contactMe_Info">
            No dudes en contactarme sí alguno de mis proyectos y estilo te han
            gustado. Soy Jean, y la verdad encantado colaborar en algún proyecto
            qué plantees. ¡Envíame un mensaje!
          </div>
          <div className="contactMe_EmailPhone">
            <div className="email">
              <i class="fa-solid fa-envelope" style={{ fontSize: "1rem" }}></i>
              <p>Giraldojeanpool@hotmail.com</p>
            </div>
            <div className="phone">
              <i
                class="fa-solid fa-square-phone"
                style={{ fontSize: "1rem" }}
              ></i>
              <p>+57 316 801 4144</p>
            </div>
            <a
              href="/public/Curriculum-JeanpolGiraldo.pdf"
              style={{ color: "#000" }}
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="contactme_formSection ">
          <Form
            className="formContainer"
            action="https://formsubmit.co/giraldojeanpool@hotmail.com"
            method="POST"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="name"
                placeholder="Ingrese su nombre"
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electronico"
                name="email"
              />
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Comentario"
              style={{ marginBottom: "1rem" }}
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                type="comments"
                name="comments"
              />
            </FloatingLabel>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
