const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./data/products.json");

app.use(cors());
app.use(express.json());

app.get("/api/items/:id", (req, res) => {
  const id = req.params.id;
  const item = products.products.filter((product) => {
    return product.id === +id;
  });
  res.send(item).status(200);
});

app.get("/api/items/", (req, res) => {
  const query = req.query.q.toLocaleLowerCase();
  const items = products.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query)
  );
  res.send(items).status(200);
});
module.exports = app;
