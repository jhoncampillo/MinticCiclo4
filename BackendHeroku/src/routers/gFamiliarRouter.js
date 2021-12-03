const { Router } = require("express");
const gFamiliarController = require("../controllers/gFamiliarController");
const TokenController = require("../controllers/tokenController");

class gfamiliarRouter {
  constructor() {
    this.router = Router();
    this.#config();
  }
  //#- crea ruta privada #config() y el this.#copnfig()

  #config() {
    let tokenC = new TokenController();
    //contruir objeto
    const gfamiliarC = new gFamiliarController();
    //configuro rutas
    //ruta getAll-Publica
    this.router.get("/gfamiliar", gfamiliarC.getAll);

    //-------------------PONGO RUTAS PRIVADAS MIDELLWARE------
    //SE EJECUTA EN ORDEN DE UBICAXION- next es para que siga si cumple
    // this.router.use(tokenC.verifyAuth);
    //ruta crear Privada
    this.router.post("/gfamiliar", [tokenC.verifyAuth], gfamiliarC.create);
    //ruta de update
    this.router.put("/gfamiliar/:id", [tokenC.verifyAuth], gfamiliarC.update);
    //rutas del get
    this.router.get(
      "/gfamiliar/:id",
      [tokenC.verifyAuth],
      gfamiliarC.getByUser
    );
    //ruta delete
    this.router.delete(
      "/gfamiliar/:id",
      [tokenC.verifyAuth],
      gfamiliarC.delete
    );
  }
}
module.exports = gfamiliarRouter;
