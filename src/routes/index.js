const express = require('express');
const cors = require("cors");
const helmet = require('helmet');
const compression = require('compression');
const { OrdenDeCompraRoutes } = require('./index.routes');
require('express-async-errors');

module.exports = function ({
  HomeRoutes,
  OrdenDeCompraRoutes
}) {
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes
    .use(express.json())
    .use(cors()) // [FIX] Needed to config cors to one client can use the api
    .use(helmet())
    .use(compression());

  apiRoutes
    .use("/home", HomeRoutes)
    .use("/orden-de-compra", OrdenDeCompraRoutes);

  router
    .use("/api/v1", apiRoutes);

  return router;
};
