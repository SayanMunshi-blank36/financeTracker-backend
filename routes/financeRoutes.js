const express = require("express");
const router = express.Router();
const {
  getFinances,
  setFinances,
} = require("../controllers/financeController");

router.route("/").get(getFinances).post(setFinances);

module.exports = router;
