import db from "../database/db.js";
import { DataTypes } from "sequelize";

//defino el modelo para la tabla grados
const GradoModels = db.define("Grados", {
  id_grado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nom_grado: {
    type: DataTypes.STRING,
  },
});

export default GradoModels;
