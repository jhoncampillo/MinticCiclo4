/**
  * File: grupoFamiliar.js
  *
  * @version: 0.1
  *
  * Fecha de Creación: 28/11/2021
  *
  * Fecha de Modificación: 
  *
  * @author: 
  *
  * Copyright: @autor
  *
  */

/**
 * There is model's struct
 */

import moongose from "mongoose";
const Schema = moongose.Schema;

//creo el Schema
const gFamiliarSchema = new Schema(
  {
    nombre: { type: String, required: [true, "Nombre Obligatorio"] },
    // si no es requeried no necesita typado  solo el tipo de dato
    apellidos: { type: String, required: [true, "Apellidos Obligatorio"] },
    cedulaf: { type: String, required: [true, "Cedula Obligatoriop"] },
    parentesco: { type: String, required: [true, "parentesco Obligatorio"] },
    date: { type: Date, default: Date.now },
    propietario: { type: Schema.ObjectId, ref: "Propietarios_Arr" },
  },
  { collection: "GrupoFamiliar" }
);

//Ahora lo combierto a MODELO para luego utilizarllo en
//las rutas
//seguido lo exporto
const gFamiliarModel = moongose.model("GrupoFamiliar", gFamiliarSchema);
export default gFamiliarModel;
