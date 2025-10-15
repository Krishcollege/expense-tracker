const express = require("express");

const {
    addIncome,
    getAllIncome,
    deleteIncome,
    downloadIncomeExcel
} = require("../controllers/incomeController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

// http://localhost:5000/api/v1/income/

router.post("/add", protect, addIncome);
router.get("/get", protect, getAllIncome);
router.get("/downloadexcel", protect, downloadIncomeExcel);
router.delete("/:id", protect, deleteIncome);

module.exports = router;