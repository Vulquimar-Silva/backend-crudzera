const db = require('./db.config');

class DbRequest {
  getAll() {
    return "Teste de rotas"
  }
}

module.exports = new DbRequest();