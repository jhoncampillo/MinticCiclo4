const bcrypt = require("bcrypt");
//requiero el modelo
const User = require("../modells/user");
//trabajo con el jwt
const jwt = require("jsonwebtoken");

class UserController {
  //procesa  peticion http- dirigen peticion del cliente hacia el contolador
  register(req, res) {
    let objUser = req.body;
    if (objUser.name && objUser.lastname && objUser.email && objUser.password) {
      //Creo el usuario en la DB
      // creeleo parametro 1
      User.create(objUser, (error, doc) => {
        if (error) {
          res.status(500).json({ info: error });
        } else {
          //construllo el Token
          console.log(doc);
          let token = jwt.sign({ id: doc._id }, process.env.JWT_PRIVATE_KEY);
          res.status(201).json({ token });
          //  res.status(201).json({ info: "Usuario Creado" });
        }
      });
    } else {
      res.status(400).json({ info: "Datos Incompletos" });
    }
  }

  // }

  //creo el login- hay que crear una ruta al metodo login donde creo un token si el esuario existe
  async login(req, res) {
    let { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    User.findOne({ email, hashedPassword }, (error, doc) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        console.log(doc);
        if (doc != null && doc != undefined) {
          let token = jwt.sign({ id: doc._id }, process.env.JWT_PRIVATE_KEY);
          console.log("jhon");
          res.status(200).json({ token });
        } else {
          res.status(401).json({ info: "Credenciales Invalidas" });
        }
      }
    });
  }
}
module.exports = UserController;
