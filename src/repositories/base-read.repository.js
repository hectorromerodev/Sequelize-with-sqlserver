class BaseReadRepository {
  constructor(model) {
    this.model = model;
  }
  async get(id) {
    return await this.model.findByPk(id);
  }
  async getAll() {
    return await this.model.findAll();
  }
}

module.exports = BaseReadRepository;