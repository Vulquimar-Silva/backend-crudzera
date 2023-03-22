const dbRequest = require('../db/db.request');

class ProductController {
  getAll(req, res) {
    return res.json(dbRequest.getAll())
  }
}

module.exports = new ProductController();