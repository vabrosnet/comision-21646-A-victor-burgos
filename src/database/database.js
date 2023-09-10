import { Sequelize } from "sequelize";

// importar variables de entorno
require('dotenv').config({path:'./.env'});
const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_database = process.env.DB_DATABASE;

export const sequelize = new Sequelize(db_database, db_user, db_pass, {
  host: db_host,
  dialect: "mysql",
});

export const startDb = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
