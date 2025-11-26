const express = require("express");
const cors = require("cors");
const app = express();

const productsRoute = require("./routes/products");

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Backend API Running");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
