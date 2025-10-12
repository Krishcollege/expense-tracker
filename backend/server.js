const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

// Middleware to handle CORS

app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);

app.use(express.json());

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));