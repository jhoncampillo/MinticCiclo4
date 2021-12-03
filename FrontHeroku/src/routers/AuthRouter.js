import React from "react";
import { Route, Routes } from "react-router";
//import Product from "../components/Product";
//import Dashboard from "../pages/private/Dashboard";
//mport Catalogue from "../components/Catalogue";
import { Propietarios } from "../components/Propietarios";
//import { Auth } from "../pages/public/Auth";
import { GrupoFamiliar } from "../components/GrupoFamiliar";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Propietarios />}></Route>
        <Route path="grupofamiliar" element={<GrupoFamiliar />}></Route>
      </Route>
    </Routes>
  );
};

export default AuthRouter;
