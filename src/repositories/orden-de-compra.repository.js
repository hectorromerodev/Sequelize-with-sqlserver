const BaseReadRepository = require('./base-read.repository');
let _ordenDeCompraRepository = null;

class OrdenDeCompraRepository extends BaseReadRepository {
  constructor(model) {
    super(model);
    _ordenDeCompraRepository = model;
  }
  //Aqui agregar busquedas mas especificas
}
module.exports = OrdenDeCompraRepository;
