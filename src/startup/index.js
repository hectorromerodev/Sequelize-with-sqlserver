const express = require('express');

//Private class variables
let _express = null;
let _config = null;

//Server configuration and start
class Server {
  constructor({ config }) {
    _config = config;
    // _express = express().use(router);
  }
  start() {
    //Promise to start our server
    return new promise(resolve => {
      //start the server
      _express.listen(_config.SERVER_PORT, _config.SERVER_HOST, () => {
        console.log(`${_config.APP_NAME} SERVE ON: ${_config.SERVER_HOST}:${_config.SERVER_PORT}`);
        resolve();// Finishing the promess
      });
    });
  }
}

module.exports = Server;