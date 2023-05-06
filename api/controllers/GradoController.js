import GradoModels from "../models/GradoModel.js";

/*definimos los metodos para el CRUD */

//mostrar todos los registros
export const getAllGrado = async (req, res) => {
  try {
    //const blogs = await GradoModels.findAll()
    const grados = await GradoModels.findAll();
    res.json(grados);
  } catch (error) {
    res.json({ error: error.message });
  }
};

//mostrar un registro
export const getGrado = async (req, res) => {
  try {
    const grado = await GradoModels.findAll({
      where: { id_grado: req.params.id_grado },
    });
    res.json(grado[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

//crear un registro
export const createGrado = async (req, res) => {
  try {
    await GradoModels.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//actualizar un registro
export const updateGrado = async (req, res) => {
  try {
    await GradoModels.update(req.body, {
      where: { id_grado: req.params.id_grado },
    });
    res.json({
      message: "Registro actualizado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//eliminar un registro
export const deleteteGrado = async (req, res) => {
  try {
    await GradoModels.destroy({
      where: { id_grado: req.params.id_grado },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
