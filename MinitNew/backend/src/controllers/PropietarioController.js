const Product = require("../modells/product");
const jwt = require("jsonwebtoken");
const TokenControler = require("./tokenController");
const product = require("../modells/product");

class PropietarioController {
  //creo el contructoy el atributo token
  constructor() {
    this.tokenC = new TokenControler();
  }

  //metodo para crear porducto- se traja como funcion
  create = (req, res) => {
    //capturar datos del cuerpo de la peticion- ver que usuario sube producto
    let { name, price, url_img } = req.body;
    //obtengo el token
    let token = this.tokenC.getToken(req);
    //let objProduct = req.body;
    //obtener datos del token- split parte la cadena dinde hay un espacio-array
    console.log(req.headers.authorization);

    let decode = jwt.decode(token, process.env.JWT_PRIVATE_TOKEN);
    console.log(decode);
    //despues de capturado el token - creo el producto
    Product.create(
      { name, price, url_img, user_id: decode.id },
      (error, doc) => {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.status(201).json({ info: "Producto Creado" });
        }
      }
    );
  };
  //actauliazar -- solo lo puede modificar el usuario que lo creo
  update = (req, res) => {
    //capturo el id del producto
    let { id, name, price, url_img } = req.body;
    //obtengo el token
    let token = this.tokenC.getToken(req);
    console.log("jhon", token);
    //decodifico el token
    let decode = jwt.decode(token, process.env.JWT_PRIVATE_TOKEN);
    //capturo el id de usuario
    let user_id = decode.id;
    //busco por id del producto y por id de usuario para actualizar la inf
    Product.findOneAndUpdate(
      { _id: id, url_img, user_id },
      { name, price },
      (error, doc) => {
        //evaluo el error
        if (error) {
          res.status(500).json({ error });
        } else {
          res.status(200).json({ info: "Producto Actualizado" });
        }
      }
    );
  };

  //get de productos por usuario
  getByUser = (req, res) => {
    //obtengo los id del usuario por medio del token
    //obtengo el token
    let token = this.tokenC.getToken(req);
    //decodifico el token
    let decode = jwt.decode(token);
    //capturo el id de usuario
    let user_id = decode.id;
    console.log("pppp", user_id);
    //obtener productos creados por el usuario
    Product.find({ user_id }, (error, docs) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(docs);
      }
    });
  };
  //Metodo Delete
  delete = (req, res) => {
    //capturo el id del producto
    let { id } = req.body;
    //obtengo el token
    let token = this.tokenC.getToken(req);
    console.log("jhon", token);
    //decodifico el token
    let decode = jwt.decode(token, process.env.JWT_PRIVATE_TOKEN);
    //capturo el id de usuario
    let user_id = decode.id;
    //eleimino el producto
    Product.findOneAndDelete({ _id: id, user_id }, (error, docs) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json({ info: "Producto Eliminado" });
      }
    });
  };
  // get All
  getAll = (req, res) => {
    Product.find((error, docs) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(docs);
      }
    });
  };
}
module.exports = ProductController;
