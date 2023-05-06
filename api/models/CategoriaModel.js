import db from "../database/db.js";
import { DataTypes } from "sequelize";

//defino el modelo para la tabla categoria
const CategoriaModels = db.define("Categoria", {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nom_categoria: {
    type: DataTypes.STRING,
  },
});

export default CategoriaModels;
