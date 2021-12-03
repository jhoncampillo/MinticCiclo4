import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "./img/bg.jpg";
import carousel2 from "../public/img/carousel2.jpg";
import carousel3 from "./img/carousel3.jpg";
import "./home.css";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* <Navvar></Navvar> */}
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
      <Outlet></Outlet>
    </>
  );
};
