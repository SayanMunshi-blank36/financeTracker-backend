const express = require("express");
const router = express.Router();
const {
  getFinances,
  setFinances,
} = require("../controllers/financeController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getFinances).post(protect, setFinances);

module.exports = router;
