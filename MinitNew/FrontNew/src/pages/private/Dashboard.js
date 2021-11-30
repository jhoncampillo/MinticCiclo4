import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { ProductProvider } from "../../context/ProductContex";
import logo from "../private/assets/logo.jpg";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
const Dashboard = () => {
  const { auth, handleLogout } = useContext(AuthContext);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo Myhouse"
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-center"
            />
          </Navbar.Brand>
          <h1 className="text-light mx-5">My House</h1>
          {!auth && (
            <Nav className="me-auto">
              <Nav.Link
                className={({ isActive }) =>
                  "nav-item nav-link" + (isActive ? "active" : "")
                }
                as={Link}
                to="/"
                href="#home"
              >
                <h2 className="mx-2">Home</h2>
              </Nav.Link>
              <Nav.Link as={Link} to="/auth" href="#auth">
                <h2 className="mx-2">Login</h2>
              </Nav.Link>
              <Nav.Link as={Link} to="/clientes" href="#clientes">
                <h2 className="mx-2">Clientes</h2>
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto" href="#contacto">
                <h2 className="mx-2">Contacto</h2>
              </Nav.Link>
            </Nav>
          )}
          {auth && (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/catalogue" href="#home">
                <h2>Propietarios</h2>
              </Nav.Link>
              <Nav.Link as={Link} to="/products" href="#catalogue">
                <h2>Grupo-Familiar</h2>
              </Nav.Link>
              <button
                className="nav-item nav-link btn mx-5"
                onClick={handleLogout}
              >
                <h2>Cerrar sesion</h2>
              </button>
            </Nav>
          )}
        </Container>
      </Navbar>

      {/**Envuelvo el outles en el contexto del ProviderProvider */}

      <ProductProvider>
        {/**Aqui se mostrara lo componentes al navegar  por el nav */}

        <Outlet></Outlet>
      </ProductProvider>
    </>
  );
};

export default Dashboard;
