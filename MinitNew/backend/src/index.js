//importo express
const express = require("express");
//manejo de variables de entorno
const cors = require('cors')
const dotenv = require('dotenv');
const UserRouter = require("./routers/userRouter");
const ProductRouter = require("./routers/productRouter");
const ContactoRouter = require("./routers/contactoRouter");
//puede ser asi
//require('dotenv'). dotenv.config()
//const ConnDb = require("./database/connDb");

//vamos a trabajar con clases-
class Server {
    constructor() {
            //Configuro las Variables de entorono
            dotenv.config()
            const ConnDb = require("./database/connDb");
            //llamo el objeto connDB que tine la coinexion a la BD
            this.objConn = new ConnDb();
            //crear aplicacion express
            this.app = express();
            //llamo el tetodo config
            this.config()

        }
        //creo este metodo config
    config() {
        //datos formato json
        this.app.use(express.json());
        //permitir las conexiones origen cruzado Serv pto 3000- front pto 3001
        this.app.use(cors());
        //selecciono el puerto- por el cual va a correr el Server
        //si hay un puero tomelo con PORT  o use el 3000
        this.app.set("PORT", process.env.PORT || 3000);
        //--------------CREAR RUTAS--------------------
        //Creo la ruta raiz
        const router = express.Router();
        //proceso la solictudes con el metodo GET a la raiz del servidor
        router.get("/", (req, res) => {
            res.status(200).send();
        });
        //creo  la ruta del User
        const userR = new UserRouter();
        const productR = new ProductRouter();
        const contacto = new ContactoRouter();
        //------------ANNADE RUTAS A EXPRESS
        //anadira ruta a express
        this.app.use(router);
        //annado la ruta User
        this.app.use(userR.router)
            //annado ruta Product
        this.app.use(productR.router)
            //annado ruta Contacto
        this.app.use(contacto.router)
            //pone el servidor a escuchar
        this.app.listen(this.app.get('PORT'), () => {
            console.log('Servidor Conectado Cloud Corriendo por el PORT ===>', this.app.get('PORT'));
        })
    }
}
//contiene toda la configuracion
new Server();