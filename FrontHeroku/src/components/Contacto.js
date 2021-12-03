import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import ContactContext from "../context/ContactContext";
import "./Components.css";

export const Contacto = () => {
  //Utilizo el Contexto - creo contexto de tipo AuthContext- utiliso el handleRegister

  const { handleCreateCt } = useContext(ContactContext);
  //objeto para inicializar el formulario

  const objForm = {
    nombre: "",
    apellidos: "",
    correo: "",
    mensaje: "",
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
    handleCreateCt(form);
    // //limpio el formulario
    // setForm(objForm);
  };

  return (
    <>
      <div className="contact">
        {/* Creo dos filas y y 4 columnas dentro del FORM PARA DAR ESTRUCTURA AL FORMULARIO
         */}
        <h1> Contacto </h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3 my-5">
                <Form.Label htmlFor="name">
                  {" "}
                  <h2>Nombre </h2>
                </Form.Label>
                <Form.Control
                  name="nombre"
                  id="nombre"
                  type="text"
                  placeholder="Digite nombre"
                  //defino los capruradores
                  value={form.nombre}
                  onChange={handleForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-5">
                <Form.Label htmlFor="lastname">
                  {" "}
                  <h2>Apellidos </h2>
                </Form.Label>
                <Form.Control
                  name="apellidos"
                  id="lapellidos"
                  type="text"
                  placeholder="Digite apellidos"
                  //defino los capruradores
                  value={form.apellidos}
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
                  <h2>Correo </h2>
                </Form.Label>
                <Form.Control
                  name="correo"
                  id="correo"
                  type="email"
                  placeholder="Digite correo"
                  //defino los capturadores
                  value={form.correo}
                  onChange={handleForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 my-3">
                <Form.Label htmlFor="mensaje">
                  {" "}
                  <h2>Mensaje </h2>
                </Form.Label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  className="form-control"
                  rows="3"
                  placeholder="Mensaje"
                  value={form.mensaje}
                  onChange={handleForm}
                  required
                ></textarea>
                {/* <Form.Control
                  name="mensaje"
                  id="mensaje"
                  type="textarea"
                  placeholder="Mensaje"
                  //defino los capruradores
                  value={form.mensaje}
                  onChange={handleForm}
                  required
                /> */}
              </Form.Group>
            </Col>
          </Row>
          <Button
            className=" form-control btn btn-secondary L btn-block mt-2"
            type="submit"
          >
            <h2>Enviar</h2>
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Contacto;
