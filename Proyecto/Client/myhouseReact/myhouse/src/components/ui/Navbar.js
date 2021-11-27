import React from "react";
import { Link } from "react-router-dom";
import "./StyleNav.css";
export default function Navbar() {
  return (
    <div class="sidebar ">
      <header>My House</header>
      <ul>
        <li>
          <Link to="/login">
            <i class="fas  fa-2x fa-user-lock"></i>Login
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fas fa-1x fa-home"></i>Home
          </Link>
        </li>
        <li>
          <Link to="/qsomos/">
            <i class="fas fa-1x fa-id-card"></i>Quienes Somos
          </Link>
        </li>
        <li>
          <Link to="/exito">
            <i class="fas fa-1x fas fa-medal"></i>Exito
          </Link>
        </li>
        <li>
          <Link to="/contacto">
            <i class="fas fa-1x fa-envelope"></i>Contacto
          </Link>
        </li>

        <li>
          <Link to="/propietarios">
            <i class="fas fa-1x fa-chess-king"></i>Propietarios
          </Link>
        </li>
        <li>
          <Link to="/grupoFamiliar">
            <i class="fa fa-1x fa-users"></i>Grupo Familiar
          </Link>
        </li>
        <li>
          <Link to="/temporales">
            <i class="fas fa-1x fa-hourglass-half"></i>Temporales
          </Link>
        </li>
        <li>
          <Link to="/vehiculos">
            <i class="fas fa-1x fa-car"></i>Vehiculos
          </Link>
        </li>
      </ul>
    </div>
  );
}
