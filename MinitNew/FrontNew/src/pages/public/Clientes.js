import React from "react";
import "./home.css";
import img1 from "./img/anuncio1.jpg";
import img2 from "./img/anuncio2.jpg";
import img3 from "./img/anuncio3.jpg";
import img4 from "./img/anuncio4.jpg";
import img5 from "./img/anuncio5.jpg";
import img6 from "./img/anuncio6.jpg";

export const Clientes = () => {
  return (
    <div>
      <main class="seccion contenedor">
        <h1 class="fw-300 centrar-texto">Condominios que Administramos</h1>
        <div class="contenedor-anuncios">
          <div class="anuncio">
            <img src={img1} alt="Condominio el Lago" />
            <div class="contenido-anuncio">
              <h1>Condominio el Lago</h1>
              <h2>Casas Y Apartamentos en el Lago </h2>
              <a href="/" class="boton boton-amarillo d-block">
                Ver Condominio
              </a>
            </div>
          </div>
          <div class="anuncio">
            <img src={img2} alt="Imagen casa Terminado de Lujo " />"
            <div class="contenido-anuncio">
              <h1>Condominio XYZ</h1>
              <h2>Casas Y Apartamentos El Nevado </h2>
              <a href="/" class="boton boton-amarillo d-block">
                Ver Condominio
              </a>
            </div>
          </div>
          <div class="anuncio">
            <img src={img3} alt="Anuncio Casa con Alberca" />
            <div class="contenido-anuncio">
              <h1>Condominio DDDD</h1>
              <h2>Casas Y Apartamentos en Palmiira</h2>
              <a href="/" class="boton boton-amarillo d-block">
                Ver Condominio
              </a>
            </div>
          </div>

          <div class="anuncio">
            <img src={img4} alt="Casa Acabados De lujo" />
            <div class="contenido-anuncio">
              <h1>Condominio LLLLLL</h1>
              <h2>Casas Y Apartamentos en Palmira</h2>
              <a href="/" class="boton boton-amarillo d-block">
                Ver Condominio
              </a>
            </div>
          </div>

          <div class="anuncio">
            <img src={img5} alt="Casa Frente al Bosque" />
            <div class="contenido-anuncio">
              <h1>Condominio WQQQQ</h1>
              <h2>Casas Y Apartamentos en Cali</h2>
              <a href="/" class="boton boton-amarillo d-block">
                Ver Condominio
              </a>
            </div>
          </div>

          <div class="anuncio">
            <img src={img6} alt="Anuncio Casa 2 albercas" />
            <div class="contenido-anuncio">
              <h1>Condominio WWWW</h1>
              <h2>Casas Y Apartamentos en Neiva</h2>
              <a href="/" class="boton boton-amarillo d-block">
                Ver Condominio
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
