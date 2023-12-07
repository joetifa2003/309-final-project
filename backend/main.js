const express = require("express");
const mongoose = require("mongoose");

const products = require("./routers/products/products");
const cart=require("./routers/cart/cart);
const { router: auth } = require("./routers/auth/auth");

const app = express();
const port = 2000;

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
app.use("/auth", auth);
app.use("/cart",cart);
app.listen(port);
