import React from "react";
//import "./Login.css"
import { useState, Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Routes, Route, Link } from "react-router-dom";

const Register = () => {
  //creo el Hook
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  //evento para onchange
  const handleInputChange = (event) => {
    console.log(event.target.value);

    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  //event for send data
  const sendData = (event) => {
    event.preventDefault();
    console.log(datos.nombre + " " + datos.apellido);
  };
  return (
    <Fragment>
      <div className="mt-5">
        <h3 className="text-center">Acceso o registro de Usuarios</h3>
        <hr />

        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form onSubmit={sendData}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingrese tu nombre"
                name="nombre"
                autoComplete="off"
                value={datos.nombre}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingrese tu apellido"
                name="apellido"
                autoComplete="off"
                value={datos.apellido}
                onChange={handleInputChange}
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Ingrese tu email"
                name="email"
                autoComplete="off"
                value={datos.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Ingrese tu Password"
                name="password"
                autoComplete="off"
                value={datos.password}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="form-control btn btn-dark btn-lg btn-block "
              >
                Registrate
              </button>
              <button className="form-control btn btn-info btn-sm btn-block mt-2">
                <div className="mt-2 mx-5">
                  <Routes>
                    <Route
                      exact
                      path="/"
                      element={
                        <Link className="registerUser" to="/">
                          Volver al Home..
                        </Link>
                      }
                    ></Route>
                  </Routes>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
