import express from "express";
import cors from "cors";
import db from "./database/db.js";
import GradoRoutes from "./routes/routesgrado.js";
import CategoriaRoutes from "./routes/routescategoria.js";
import AlumnoRoutes from "./routes/routesalumno.js";
import CandidatoRoutes from "./routes/routescandidato.js";
const port = process.env.PORT || 3030;

const app = express();

/***********************************
// Middlewa que verifica si el usuario es un administrador.
function isAdmin(req, res, next) {
  if (req.body.isAdmin) {
    next();
  } else {
    res.status(403).send(`Sorry but you are not an admin and you do not have access to route ${req.url}`);
  }
}
**************************************/

app.use(cors()); //habilitar otras aplicaciones para realizar solicitudes a nuestra app
app.use(express.json()); //recibir informacion

//app.use(isAdmin);

//defino la ruta paara grados, categorias, alumnos, candidatos
app.use("/grados", GradoRoutes);
app.use("/categorias", CategoriaRoutes);
app.use("/alumnos", AlumnoRoutes);
app.use("/candidatos", CandidatoRoutes);

(async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log("Conectado a la base de datos");
  } catch (error) {
    throw new Error(error.message);
  }
})();

app.listen(port, () => {
  console.log("Servidor ejecutandose en el puerto: ", port);
});
