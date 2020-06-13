class BaseReadService {
  constructor(repository) {
    this.repository = repository;
  }
  async getAll(params) {
    return await this.repository.getAll(params);
  }
}

module.exports = BaseReadService;
