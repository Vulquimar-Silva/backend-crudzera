const db = require('./db.config');

class DbRequest {
  async getAll() {
    const response = await db.query('select * from product');
    return response;
  }

  async getById(id) {
    const response = await db.query('select * from product where id = $1', [id]);
    return response;
  }

  async save(product) {
    const response = await db.query(
      'insert into product (name, price, amount) values ($1, $2, $3) returning *', [product.name, product.price, product.amount]);
    return response;
  }

  async update(id, product) {
    const response = await db.query(
      'update product set name = $1, price = $2, amount = $3 where id = $4 returning *', [product.name, product.price, product.amount, id]
    );
    return response;
  }

  async delete(id) {
    const response = await db.query('delete from product where id = $1', [id]);
    return response;
  }
}

module.exports = new DbRequest();