import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./Components.css";

export const Propietarios = () => {
  return (
    <>
      <div className="register">
        {/* Creo dos filas y y 4 columnas dentro del FORM PARA DAR ESTRUCTURA AL FORMULARIO
         */}
        <h1> Propietarios - Arrendatarios - Otros </h1>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3 my-5">
                <Form.Label htmlFor="nombre">
                  {" "}
                  <h2>Nombre </h2>
                </Form.Label>
                <Form.Control
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Nombre"
                  //defino los capruradores
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-5">
                <Form.Label htmlFor="apellidos">
                  {" "}
                  <h2>Apellidos </h2>
                </Form.Label>
                <Form.Control
                  name="lastname"
                  id="lastname"
                  type="text"
                  placeholder="Digita Apellido"
                  //defino los capruradores
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3  my-3">
                <Form.Label htmlFor="Cedula">
                  {" "}
                  <h2>Cedula </h2>
                </Form.Label>
                <Form.Control
                  name="cedula"
                  id="cedula"
                  type="text"
                  placeholder="cedula"
                  //defino los capruradores

                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-3">
                <Form.Label htmlFor="telefono">
                  {" "}
                  <h2>Telefono</h2>
                </Form.Label>
                <Form.Control
                  name="telefono"
                  id="telefono"
                  type="text"
                  placeholder="Telefono"
                  //defino los capruradores

                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3  my-3">
                <Form.Label htmlFor="email">
                  {" "}
                  <h2>Email </h2>
                </Form.Label>
                <Form.Control
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Email"
                  //defino los capruradores

                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-3">
                <Form.Label htmlFor="casa">
                  {" "}
                  <h2>Casa</h2>
                </Form.Label>
                <Form.Control
                  name="password"
                  id="text"
                  type="text"
                  placeholder="Casa"
                  //defino los capruradores

                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3  my-3">
                <Form.Label htmlFor="apartamento">
                  {" "}
                  <h2>Apartamento </h2>
                </Form.Label>
                <Form.Control
                  name="apartamento"
                  id="apartamento"
                  type="text"
                  placeholder="Apartamento"
                  //defino los capruradores

                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-3">
                <Form.Label htmlFor="tipo">
                  {" "}
                  <h2>Tipo r</h2>
                </Form.Label>
                <Form.Control
                  name="tipo"
                  id="tipo"
                  type="text"
                  placeholder="Tipo propietario-Arrendatario- Temporal"
                  //defino los capruradores

                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            className=" form-control btn btn-secondary LL btn-block mt-2"
            type="submit"
          >
            <h2>Register</h2>
          </Button>
        </Form>
      </div>
    </>
  );
};
