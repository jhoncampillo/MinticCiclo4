import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Routes, Route, Link } from "react-router-dom";
import "./Components.css";

//defino el objeto
const objForm = {
  email: "",
  password: "",
};
const Login = () => {
  //Contexto
  const { handleLogin } = useContext(AuthContext);

  //creo los estados del login-usestate
  //1 constante representa el form y otra lo setea
  //Estados
  const [form, setForm] = useState(objForm);
  //Navegador para redirigir a donde puede navegar
  const navigate = useNavigate();

  //creo los metodos
  const handleForm = (e) => {
    //obtengo lo del formularios desestructurado
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //al hacer click  en el submit llamanod el for como parametro del hanndleLogig
    handleLogin(form)
      .then(async (resp) => {
        console.log(resp);
        if (resp.status === 200) {
          let json = await resp.json();
          console.log("jhon Jairo", json);
          //capturo el token
          let token = json.token;

          //lo gaurdo en el storage
          localStorage.setItem("token", token);
          //navego a la raiz
          navigate("/");
        } else {
          localStorage.removeItem("token");
          alert("Credenciales Invalidas");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <h2 className="text-center">Acceso o registro de Usuarios</h2>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2 " controlId="loginEmail">
          <Form.Label>
            <h3>Correo</h3>
          </Form.Label>
          <Form.Control
            value={form.email}
            onChange={handleForm}
            name="email"
            type="email"
            placeholder="Digite Correo"
            required
          />
        </Form.Group>

        <Form.Group
          className="mb-2 justify-content-center "
          controlId="loginPassword"
        >
          <Form.Label>
            <h3>Password</h3>
          </Form.Label>
          <Form.Control
            value={form.password}
            onChange={handleForm}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
        <button className="form-control btn btn-dark L btn-lg btn-block mt-3 ">
          <h3>Login</h3>
        </button>
        <button className=" form-control btn btn-secondary L btn-block mt-2">
          <div className="mt-2 mx-5">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Link className="registerUser" to="/Register">
                    <h3>Si no tienes Cuenta. Crea una Aqui!</h3>
                  </Link>
                }
              ></Route>
            </Routes>
          </div>
        </button>
      </Form>
    </div>
  );
};

export default Login;
