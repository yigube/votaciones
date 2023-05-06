import express from "express";
//importamos los metodos de CandidatoController.js
import {
  createCandidato,
  getAllCandidato,
  getCandidato,
  updateCandidato,
  deleteteCandidato,
} from "../controllers/CandidatoController.js";

const router = express.Router();

//rutas para la tabla candidato
router.get("/", getAllCandidato);
router.get("/:id_candidato", getCandidato);
router.post("/", createCandidato);
router.put("/:id_candidato", updateCandidato);
router.delete("/:id_candidato", deleteteCandidato);

export default router;
