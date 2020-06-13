let _OrdenDeCompraService = null;

class OrdenDeCompraController {
  constructor({ OrdenDeCompraService }) {
    _OrdenDeCompraService = OrdenDeCompraService;
  }
  // async get(req, res) {
  //   const { userId } = req.params;
  //   const user = await _userService.get(userId);
  //   return res.send(user);
  // }
  async getAll(req, res) {
    const { params } = req.params;
    const all = await _OrdenDeCompraService.getAll(params);
    return res.send(all);
  }
}

module.exports = OrdenDeCompraController;
