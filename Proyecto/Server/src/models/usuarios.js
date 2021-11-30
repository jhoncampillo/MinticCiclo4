//Esquema a Modelo
import moongose from "mongoose";
const Schema = moongose.Schema;
//bcrypt
const bcrypt = require("bcrypt");
//creo el Schema
const usuariosSchema = new Schema(
  {
    nombre: { type: String, required: [true, "Nombre Obligatorio"] },
    // si no es requeried no necesita typado  solo el tipo de dato
    apellidos: { type: String, required: [true, "Apellidos Obligatorio"] },
    email: { type: String, required: [true, "Email Obligatorio"] },
    password: { type: String, required: [true, "Password"] },
    date: { type: Date, default: Date.now },
  },
  { collection: "Usuarios" }
);

usuariosSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    console.log(this.password);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    console.log(this.password);
  } catch (error) {
    next(error);
  }
});
//Ahora lo combierto a MODELO para luego utilizarllo en
//las rutas
//seguido lo exporto
const usauriosModel = moongose.model("Usuarios", usuariosSchema);
export default usauriosModel;

//CORS Library: https://www.npmjs.com/package/cors
//Bcrypt Library: https://www.npmjs.com/package/bcrypt
