import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { CarouselMain } from "./components/carousel/CarouselMain";
import RouterApp from "./components/routers/RouterApp";

ReactDOM.render(
  <BrowserRouter>
    <RouterApp></RouterApp>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
