import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import logo from "../img/logo.jpg";
import "../home.css";

export const Navvar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">
            <img
              alt=""
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-center"
            />{" "}
            <h2>My House</h2>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              <h2>Home</h2>
            </Nav.Link>
            <Nav.Link as={Link} to="/Clientes" href="Clientes">
              <h2>Clientes</h2>
            </Nav.Link>
            <Nav.Link as={Link} to="/Login" href="Login">
              <h2>Login</h2>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
