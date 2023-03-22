const dbRequest = require('../db/db.request');

class ProductController {
  async getAll(req, res) {
    const response = await dbRequest.getAll()
    return res.status(200).json(response);
  }

  async getById(req, res) {
    const { id } = req.params;
    const response = await dbRequest.getById(id);
    return response[0] != null ? res.status(200).json(response) : res.status(404).json({ mensagem: "Produto não encontrado." });
  }

  async save(req, res) {
    const product = req.body;
    const response = await dbRequest.save(product);
    return res.status(201).json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const product = req.body;
    const response = await dbRequest.update(id, product);
    return response[0] != null ? res.status(202).json(response) : res.status(404).json({ mensagem: "Produto não encontrado." });
  }

  async delete(req, res) {
    const { id } = req.params;
    const product = await dbRequest.getById(id);
    if (product[0] != null) {
      await dbRequest.delete(id);
      return res.status(202).json({ mensagem: 'Produto deletado com sucesso.' });
    } else {
      return res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }
  }

}

module.exports = new ProductController();