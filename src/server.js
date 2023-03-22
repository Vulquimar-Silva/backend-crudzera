require('dotenv').config()
const express = require('express');

const routes = require('./routes/product.routes');

const port = process.env.SERVER_PORT || 3333;

const app = express();
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log('API listening on port ' + port);
});