const { sequelize, Sequelize } = require('../config').db;

class BaseReadRepository {
  async getAll(params) {
    return await sequelize
      .query(
        `SELECT ${params.attributes || '*'}
        FROM ${params.viewName}`, {
          type: Sequelize.QueryTypes.SELECT,
          raw: false,
      });
  }
}
module.exports = BaseReadRepository;
