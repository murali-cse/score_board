import { Sequelize } from "sequelize";

const config = new Sequelize({
  database: process.env.DEV_DB_NAME,
  username: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PASSWORD,
  host: process.env.DEV_DB_HOST,
  dialect: "mysql",
  timezone: "+05:30",
});

export default config;
