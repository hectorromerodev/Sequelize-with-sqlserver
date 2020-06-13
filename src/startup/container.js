const { createContainer, asClass, asValue, asFunction } = require('awilix');

//Config
const server = require('./');
const Routes = require('../routes');
const config = require('../config');

//Services
const {
  HomeService,
  OrdenDeCompraService

} = require('../services');

//Controllers
const {
  HomeController,
  OrdenDeCompraController
} = require('../controllers');

//Routes
const {
  HomeRoutes,
  OrdenDeCompraRoutes
} = require('../routes/index.routes');

//repositories
const {
  OrdenDeCompraRepository
} = require('../repositories');

const container = createContainer();

//Awilix container registrations of injections
container
  .register({// registration of Initial configuration
    server: asClass(server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({// Registrations of all services
    HomeService: asClass(HomeService).singleton(),
    OrdenDeCompraService: asClass(OrdenDeCompraService).singleton(),

  })
  .register({// Registration of all controllers
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    OrdenDeCompraController: asClass(OrdenDeCompraController.bind(OrdenDeCompraController)).singleton(),

  })
  .register({// Registration of all routes
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    OrdenDeCompraRoutes: asFunction(OrdenDeCompraRoutes).singleton(),


  })
  // .register({// Registration of all models

  // })
  .register({// egistration of all repositories
    OrdenDeCompraRepository: asClass(OrdenDeCompraRepository).singleton(),

  });

module.exports = container;
