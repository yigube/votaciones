import CandidatoModels from "../models/CandidatoModel.js";

/*definimos los metodos para el CRUD */

//mostrar todos los registros
export const getAllCandidato = async (req, res) => {
  try {
    //const blogs = await GradoModels.findAll()
    const candidatos = await CandidatoModels.findAll();
    res.json(candidatos);
  } catch (error) {
    res.json({ error: error.message });
  }
};

//mostrar un registro
export const getCandidato = async (req, res) => {
  try {
    const alumno = await CandidatoModels.findAll({
      where: { id_candidato: req.params.id_candidato },
    });
    res.json(alumnocandidato[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

//crear un registro
export const createCandidato = async (req, res) => {
  try {
    await CandidatoModels.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//actualizar un registro
export const updateCandidato = async (req, res) => {
  try {
    await CandidatoModels.update(req.body, {
      where: { id_candidato: req.params.id_candidato },
    });
    res.json({
      message: "Registro actualizado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//eliminar un registro
export const deleteteCandidato = async (req, res) => {
  try {
    await CandidatoModels.destroy({
      where: { id_candidato: req.params.id_candidato },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
