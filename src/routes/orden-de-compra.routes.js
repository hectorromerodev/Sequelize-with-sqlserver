const { Router } = require('express');

//Middlewares

module.exports = function ({ OrdenDeCompraController }) {
  const router = Router();

  router.get('/', OrdenDeCompraController.getAll);

  return router;
};