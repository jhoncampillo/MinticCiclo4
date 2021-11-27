import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../assets/img/bg.jpg";
import carousel2 from "../assets/img/carousel2.jpg";
import carousel3 from "../assets/img/carousel3.jpg";
import sigIN from "../assets/img/login.png";
import myHouseLogo from "../assets/img/logo.jpg";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./carouselStyle.css";
import { Login2 } from "../login/Login";
//import { RouterLogin } from "../routers/RouterLogin";
import { Route, Routes, Link } from "react-router-dom";

export const CarouselMain = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="Nav">
        <Container>
          <Navbar.Brand href="#home" className="singIn">
            <img
              alt=""
              src={sigIN}
              width="40"
              height="50"
              className="d-inline-block align-center"
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Link to="/Login">
                    <h2>Login</h2>
                  </Link>
                }
              ></Route>
            </Routes>
          </Navbar.Brand>
          <div>
            <img
              className="imgLogo"
              alt="Logo myHouse"
              src={myHouseLogo}
              width="160"
              height="120"
            />
          </div>
          <Routes>
            <Route path="login" element={<Login2 />} />
          </Routes>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "800px" }}
            className="d-block w-100 "
            src={logo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Condominios Campestres</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "800px" }}
            className="d-block w-100 "
            src={carousel2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Administracion Disruptiva</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "800px" }}
            className="d-block w-100  "
            src={carousel3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Urbanos Y Rurales</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
