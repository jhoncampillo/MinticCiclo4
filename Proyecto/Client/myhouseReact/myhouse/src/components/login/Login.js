import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

export const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-5">
      <h3 className="text-center">Acceso o registro de Usuarios</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Ingrese un email"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Ingrese Password"
            />
            <button className="form-control btn btn-dark btn-lg btn-block ">
              Login
            </button>
            <button className="form-control btn btn-info btn-sm btn-block mt-2">
              <div className="mt-2 mx-5">
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={
                      <Link className="registerUser" to="/Register">
                        Si no tienes Cuenta. Crea una Aqui!
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
  );
};

export default Login2;
