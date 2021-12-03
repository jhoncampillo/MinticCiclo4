const { Router } = require("express");
const ContactoController = require("../controllers/contactoControllers");

class ContactoRouter {
  constructor() {
    this.router = Router();
    this.#config();
  }
  //#- crea ruta privada #config() y el this.#copnfig()

  #config() {
    const contactoC = new ContactoController();
    this.router.get("/contacto", contactoC.getAll);
    this.router.post("/contacto", contactoC.create);
    //ruta de update
    this.router.put("/contacto/:id", contactoC.update);
    //rutas del get
    this.router.get("/contacto/:id", contactoC.getByUser);
    //ruta delete
    this.router.delete("/contacto/:id", contactoC.delete);
  }

  saluda() {
    console.log("HOLA router");
  }
}
module.exports = ContactoRouter;
