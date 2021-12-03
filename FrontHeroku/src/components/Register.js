import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./Components.css";

export const Register = () => {
  //Utilizo el Contexto - creo contexto de tipo AuthContext- utiliso el handleRegister
  const { handleRegister } = useContext(AuthContext);

  //objeto para inicializar el formulario
  const objForm = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };
  //creo el estado - inicializo el from - creo primero la estrututa de arriba
  const [form, setForm] = useState(objForm);
  //creo el metod y capturo el evento
  const handleForm = (e) => {
    //desestructuro el el objeto, capturo el value y se lo asigno al name y lluego al objeto mayor
    let array = { ...form, [e.target.name]: e.target.value };
    setForm(array);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Al dar click en registrar-LLamo el {handleRegister} importado del contexto
    //llamar la funcion del contexto y le envio el formulario
    //al contexto
    handleRegister(form);
    //limpio el formulario
    setForm(objForm);
  };

  return (
    <>
      <div className="register">
        {/* Creo dos filas y y 4 columnas dentro del FORM PARA DAR ESTRUCTURA AL FORMULARIO
         */}
        <h1> Registrarse </h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3 my-5">
                <Form.Label htmlFor="name">
                  {" "}
                  <h2>Name </h2>
                </Form.Label>
                <Form.Control
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  //defino los capruradores
                  value={form.name}
                  onChange={handleForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-5">
                <Form.Label htmlFor="lastname">
                  {" "}
                  <h2>Lastname </h2>
                </Form.Label>
                <Form.Control
                  name="lastname"
                  id="lastname"
                  type="text"
                  placeholder="Enter lastname"
                  //defino los capruradores
                  value={form.lastname}
                  onChange={handleForm}
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
                  <h2>Email address </h2>
                </Form.Label>
                <Form.Control
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  //defino los capruradores
                  value={form.email}
                  onChange={handleForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-3">
                <Form.Label htmlFor="password">
                  {" "}
                  <h2>Password </h2>
                </Form.Label>
                <Form.Control
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  //defino los capruradores
                  value={form.password}
                  onChange={handleForm}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            className=" form-control btn btn-secondary L btn-block mt-2"
            type="submit"
          >
            <h2>Register</h2>
          </Button>
        </Form>
      </div>
    </>
  );
};
