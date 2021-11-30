import React from "react";
import { Route, Routes } from "react-router";
//import Product from "../components/Product";
//import Dashboard from "../pages/private/Dashboard";
import Catalogue from "../components/Catalogue";
import { Propietarios } from "../components/Propietarios";
//import { Auth } from "../pages/public/Auth";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Propietarios />}></Route>
        <Route path="catalogue" element={<Catalogue />}></Route>
      </Route>
    </Routes>
  );
};

export default AuthRouter;
