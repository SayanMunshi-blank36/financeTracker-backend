const asyncHandler = require("express-async-handler");
const Finance = require("../models/financeModel");

const getFinances = asyncHandler(async (req, res) => {
  const finances = await Finance.find({ user: req.user.id });

  res.status(200).json(finances);
});

const setFinances = asyncHandler(async (req, res) => {
  const { month, day, finType, finAmt } = req.body;

  if (!month || !day || !finType || !finAmt) {
    res.status(400);
    throw new Error("Please add all the relevant fields");
  }

  const finance = await Finance.create({
    month,
    day,
    finType,
    finAmt: finAmt.toFixed(2),
    user: req.user.id,
  });

  res.status(200).json(finance);
});

module.exports = { getFinances, setFinances };
