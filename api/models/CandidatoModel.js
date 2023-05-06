import db from "../database/db.js";
import { DataTypes } from "sequelize";

//defino el modelo para la tabla candidato
const GradoModels = db.define("Candidato", {
  id_candidato: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_grado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nom_candidato: {
    type: DataTypes.STRING,
  },
  ape_candidato: {
    type: DataTypes.STRING,
  },
});

export default GradoModels;
