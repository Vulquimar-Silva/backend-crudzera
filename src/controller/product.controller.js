const dbRequest = require('../db/db.request');

class ProductController {
  async getAll(req, res) {
    const response = await dbRequest.getAll()
    return res.status(200).json(response);
  }

  async getById(req, res) {
    const { id } = req.params;
    const response = await dbRequest.getById(id);
    return response[0] != null ? res.status(200).json(response) : res.status(404).json({ menssage: "Produto não encontrado." });
  }

  async save(req, res) {
    const product = req.body;
    const response = await dbRequest.save(product);
    return res.status(200).json(response);
  }
}

module.exports = new ProductController();