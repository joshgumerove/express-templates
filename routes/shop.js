const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  const hasProducts = products.length > 0;
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    pageTitle: "Shop",
    hasProducts,
    activeShop: true,
    productCSS: true,
  });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
