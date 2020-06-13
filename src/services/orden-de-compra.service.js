const BaseReadService = require('./base-read.service');
let _ordenDeCompraRepository = null;

class OrdenDeCompraService extends BaseReadService {
  constructor({ OrdenDeCompraRepository }) {
    super(OrdenDeCompraRepository);
    _ordenDeCompraRepository = OrdenDeCompraRepository;
  }
}

module.exports = OrdenDeCompraService;
