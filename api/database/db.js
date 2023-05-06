import { Sequelize } from "sequelize";

const db = new Sequelize("votaciones", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
