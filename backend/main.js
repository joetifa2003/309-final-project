const express = require("express");
const products = require("./products/products");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/products", products);
