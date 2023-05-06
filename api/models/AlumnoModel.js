import db from "../database/db.js";
import { DataTypes } from "sequelize";

//defino el modelo para la tabla alumno
const GradoModels = db.define("Alumno", {
  id_alumno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_grado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nom_alumno: {
    type: DataTypes.STRING,
  },
  ape_alumno: {
    type: DataTypes.STRING,
  },
});

export default GradoModels;
