const container = require('./src/startup/container');
const server = container.resolve('server');
const { db } = container.resolve('config');

db.sequelize
  .authenticate()
  .then(() => {
    //Start the server with te server injection of awilix
    server.start();
  }).catch(console.log);
