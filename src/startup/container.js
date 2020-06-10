const { createContainer, asClass, asValue, asFunction } = require('awilix');

//Config
const server = require('./');
const Routes = require('../routes');
const config = require('../config');

// //Services
// const { } = require('../services');

// //Controllers
// const { } = require('../controllers');

// //Routes
// const { } = require('../routes/index.routes');

// //Models 
// const { } = require('../repositories');

const container = createContainer();

//Awilix container registrations of injections
container
  .register({// registration of Initial configuration
    server: asClass(server).singleton(),
    // router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({// Registrations of all services

  })
  .register({// Registration of all controllers

  })
  .register({// Registration of all routes

  })
  .register({// Registration of all models

  })
  .register({// egistration of all repositories
    
  });

module.exports = container;