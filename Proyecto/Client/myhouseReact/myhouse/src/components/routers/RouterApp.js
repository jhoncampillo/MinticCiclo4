import React from "react";
import { CarouselMain } from "../carousel/CarouselMain";
import { Login2 } from "../login/Login";
import { Routes, Route } from "react-router-dom";
import Register from "../login/Register";

function RouterApp() {
  return (
    <Routes>
      {/* <Route
        exact
        path="/"
        element={<Link to="/">Main</Link>}
      ></Route> */}
      <Route exact path="/" element={<CarouselMain />} />
      <Route exact path="/Login" element={<Login2 />} />
      <Route exact path="/Register" element={<Register />} />
    </Routes>
  );
}
// function Home() {
//   return (
//     <div>
//       <h1>Welcome Home</h1>
//       <nav>
//         <link to="Home">Home</link>
//         <link to="Propietario">Propietario</link>
//         <link to="Gfamiliar">Gfamiliar</link>
//       </nav>
//     </div>
//   );
// }

export default RouterApp;
