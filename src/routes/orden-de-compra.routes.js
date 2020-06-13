const { Router } = require('express');

module.exports = function ({ OrdenDeCompraController }) {
  const router = Router();
  router.get('/', OrdenDeCompraController.getAll);
  return router;
};
