const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mssql',
    host: process.env.DB_HOST, //This is an IP
    dialectOptions: {
      options: {
        instanceName: process.env.DB_INSTANCE_NAME,
        trustServerCertificate: true
      },
    }
  }
);
module.exports = {
  sequelize,
  Sequelize
};
