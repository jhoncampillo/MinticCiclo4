import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login2 } from "../../login/Login";
export const RouterLogin = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/Login" element={Login2} />
      </Routes>
    </div>
  );
};
