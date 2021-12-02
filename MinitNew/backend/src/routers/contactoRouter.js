const { Router } = require("express");
const ContactoController = require("../controllers/contanctoController");


class ContactoRouter {
    constructor() {
            //Crear objeto tipo Router  y asignarlo como atributo de la clase
            this.router = Router();
            //Configurar las Rutas
            this.config();
        }
        //metodo de configuracion para redirigir al controlador

    config() {
        const objUserC = new ContactoController();
        //creo las rutas
        this.router.post("/contacto", objUserC.register);
        //this.router.post("/user", objUserC.decode);
        //ruta para el token
        //this.router.post("/user/auth", objUserC.login)
            //ruta de prodcuto



    }
}
module.exports = ContactoRouter;