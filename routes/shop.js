const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products); // note how data persists until server shuts down (will be shared across all users)/but when server restarts will not persist
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
