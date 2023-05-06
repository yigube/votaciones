import AlumnoModels from "../models/AlumnoModel.js";

/*definimos los metodos para el CRUD */

//mostrar todos los registros
export const getAllAlumno = async (req, res) => {
  try {
    //const blogs = await GradoModels.findAll()
    const alumnos = await AlumnoModels.findAll();
    res.json(alumnos);
  } catch (error) {
    res.json({ error: error.message });
  }
};

//mostrar un registro
export const getAlumno = async (req, res) => {
  try {
    const alumno = await AlumnoModels.findAll({
      where: { id_alumno: req.params.id_alumno },
    });
    res.json(alumno[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

//crear un registro
export const createAlumno = async (req, res) => {
  try {
    await AlumnoModels.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//actualizar un registro
export const updateAlumno = async (req, res) => {
  try {
    await AlumnoModels.update(req.body, {
      where: { id_alumno: req.params.id_alumno },
    });
    res.json({
      message: "Registro actualizado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//eliminar un registro
export const deleteteAlumno = async (req, res) => {
  try {
    await AlumnoModels.destroy({
      where: { id_alumno: req.params.id_alumno },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
