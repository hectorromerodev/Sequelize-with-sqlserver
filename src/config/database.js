const Sequelize = require('sequelize');
const { DB_NAME, DB_USER, DB_PASS, DB_SERVER_NAME, DB_INTANCE_NAME } = require('./index');

const sequelize = new Sequelize(
  DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mssql',
  options: {
    enableArithAbort: false,
    trustServerCertificate: false,
  },
  serverName: DB_SERVER_NAME,
  instanceName: DB_INTANCE_NAME
});
module.exports = {
  sequelize,
  Sequelize
};