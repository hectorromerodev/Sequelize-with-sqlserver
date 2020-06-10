if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
module.exports = {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_SERVER_NAME: process.env.DB_SERVER_NAME,
  DB_INTANCE_NAME: process.env.DB_INTANCE_NAME,
  SERVER_PORT: process.env.SERVER_PORT,
  SERVER_HOST: process.env.SERVER_HOST,
  APP_NAME: process.env.APP_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  CACHE_KEY: process.env.CACHE_KEY,
  db: require("./database")
};