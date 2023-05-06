import express from "express";
//importamos los metodos de CategoriaController.js

import {
  createCategoria,
  getAllCategoria,
  getCategoria,
  updateCategoria,
  deleteteCategoria,
} from "../controllers/CategoriaController.js";

const router = express.Router();

//rutas para la tabla categoria
router.get("/", getAllCategoria);
router.get("/:id_categoria", getCategoria);
router.post("/", createCategoria);
router.put("/:id_categoria", updateCategoria);
router.delete("/:id_categoria", deleteteCategoria);

export default router;
