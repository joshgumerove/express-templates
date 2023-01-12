const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body); // will appear in the linux terminal (not shown in the browser since we are on the server)
  products.push({ title: req.body.title });
  console.log("look at products: ", products);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
