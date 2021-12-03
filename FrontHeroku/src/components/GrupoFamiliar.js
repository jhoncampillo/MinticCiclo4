import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./Components.css";

export const GrupoFamiliar = () => {
  return (
    <>
      <div className="register">
        {/* Creo dos filas y y 4 columnas dentro del FORM PARA DAR ESTRUCTURA AL FORMULARIO
         */}
        <h1> Grpo Familiar Asociado </h1>
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
                  name="apellidos"
                  id="apellidos"
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
                <Form.Label htmlFor="parentesco">
                  {" "}
                  <h2>Parenteso </h2>
                </Form.Label>
                <Form.Control
                  name="parentesco"
                  id="parentesco"
                  type="text"
                  placeholder="Parentesco"
                  //defino los capruradores

                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-3">
                <Form.Label htmlFor="cedula">
                  {" "}
                  <h2>Cedula</h2>
                </Form.Label>
                <Form.Control
                  name="cedula"
                  id="cedula"
                  type="text"
                  placeholder="Cedula"
                  //defino los capruradores

                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3  my-3">
                <Form.Label htmlFor="propietario">
                  {" "}
                  <h2>Propietario </h2>
                </Form.Label>
                <Form.Control
                  name="propietario"
                  id="propietario"
                  type="text"
                  placeholder="Propietario"
                  //defino los capruradores

                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-3">
                <Form.Label htmlFor="celular">
                  {" "}
                  <h2>No.Celular</h2>
                </Form.Label>
                <Form.Control
                  name="apartamento"
                  id="apartamento"
                  type="text"
                  placeholder="celular"
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
