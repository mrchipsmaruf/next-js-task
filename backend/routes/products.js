const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../products.json");

// Read products from file
function loadProducts() {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

// Save products to file
function saveProducts(products) {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
}

// GET all products
router.get("/", (req, res) => {
  const products = loadProducts();
  res.json(products);
});

// GET single product
router.get("/:id", (req, res) => {
  const products = loadProducts();
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// ADD new product
router.post("/", (req, res) => {
  const products = loadProducts();

  const newProduct = {
    id: uuidv4(),
    ...req.body
  };

  products.push(newProduct);
  saveProducts(products);

  res.json(newProduct);
});

// DELETE product
router.delete("/:id", (req, res) => {
  let products = loadProducts();
  products = products.filter((p) => p.id !== req.params.id);
  saveProducts(products);
  res.json({ success: true });
});

module.exports = router;
