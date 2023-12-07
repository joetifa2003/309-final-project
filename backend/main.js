const express = require("express");
const products = require("./products/products");
const mongoose = require("mongoose");
const app = express();
const port = 8080;

app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/309-db")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/products", products);

app.listen(port);
