import express from "express";
//importamos los metodos de AlumnoController.js
import {
  createAlumno,
  getAllAlumno,
  getAlumno,
  updateAlumno,
  deleteteAlumno,
} from "../controllers/AlumnoController.js";

const router = express.Router();

//rutas para la tabla alumno
router.get("/", getAllAlumno);
router.get("/:id_alumno", getAlumno);
router.post("/", createAlumno);
router.put("/:id_alumno", updateAlumno);
router.delete("/:id_alumno", deleteteAlumno);

export default router;
