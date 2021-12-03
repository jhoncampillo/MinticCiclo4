import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../pages/public/Home";
import { Auth } from "../pages/public/Auth";
import { Clientes } from "../pages/public/Clientes";
//import Dashboard from "../pages/private/Dashboard";
import { ContactoM } from "../pages/public/ContactoM";
import { Login2 } from "../pages/public/Login2";

//import { BrowserRouter } from "react-router-dom";
//import { Navvar } from "../pages/public/ui/Navvar";
import { Register } from "../components/Register";
export const UnauthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<Login2 />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="clientes" element={<Clientes />}></Route>
      <Route path="contacto" element={<ContactoM />}></Route>
      <Route path="auth/*" element={<Auth />}></Route>
    </Routes>
  );
};
