const express = require("express");
const products = require("./products/products");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use("/products", products);

app.listen(port);
