import express from "express";
//importamos los metodos de GradoController.js
import {
  createGrado,
  getAllGrado,
  getGrado,
  updateGrado,
  deleteteGrado,
} from "../controllers/GradoController.js";

const router = express.Router();

//rutas para la tabla grados
router.get("/", getAllGrado);
router.get("/:id_grado", getGrado);
router.post("/", createGrado);
router.put("/:id_grado", updateGrado);
router.delete("/:id_grado", deleteteGrado);

export default router;
