import CategoriaModels from "../models/CategoriaModel.js";

/*definimos los metodos para el CRUD */

//mostrar todos los registros
export const getAllCategoria = async (req, res) => {
  try {
    //const blogs = await CategoriaModels.findAll()
    const categorias = await CategoriaModels.findAll();
    res.json(categorias);
  } catch (error) {
    res.json({ error: error.message });
  }
};

//mostrar un registro
export const getCategoria = async (req, res) => {
  try {
    const categoria = await CategoriaModels.findAll({
      where: { id_categoria: req.params.id_categoria },
    });
    res.json(categoria[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

//crear un registro
export const createCategoria = async (req, res) => {
  try {
    await CategoriaModels.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//actualizar un registro
export const updateCategoria = async (req, res) => {
  try {
    await CategoriaModels.update(req.body, {
      where: { id_categoria: req.params.id_categoria },
    });
    res.json({
      message: "Registro actualizado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//eliminar un registro
export const deleteteCategoria = async (req, res) => {
  try {
    await CategoriaModels.destroy({
      where: { id_categoria: req.params.id_categoria },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
