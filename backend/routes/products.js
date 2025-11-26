const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let products = [
    {
        id: "1",
        title: "Sample Product",
        shortDesc: "Demo short description",
        fullDesc: "Full description of product",
        price: 100,
        date: "2025-01-01",
        image: "https://via.placeholder.com/300"
    }
];

// GET all products
router.get("/", (req, res) => {
    res.json(products);
});

// GET single product
router.get("/:id", (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
});

// ADD product
router.post("/", (req, res) => {
    const newProduct = {
        id: uuidv4(),
        ...req.body
    };
    products.push(newProduct);
    res.json(newProduct);
});

// DELETE product
router.delete("/:id", (req, res) => {
    products = products.filter(p => p.id !== req.params.id);
    res.json({ success: true });
});

module.exports = router;
