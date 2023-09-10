import { Sequelize } from "sequelize";
import 'dotenv/config';

// importar variables de entorno
const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_database = process.env.DB_DATABASE;

// configurar conexión a database con sequelize
export const sequelize = new Sequelize(db_database, db_user, db_pass, {
  host: db_host,
  dialect: "mysql",
});

// conexión a database
export const startDb = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true }); // sólo usar para reiniciar database
    await sequelize.sync();
    console.log("Connection to the database successful.");
  } catch (error) {
    console.error("Connection to database not available.", error);
  }
};
