const asyncHandler = require("express-async-handler");
const Finance = require("../models/financeModel");

const getFinances = asyncHandler(async (req, res) => {
  const finances = await Finance.find();

  res.status(200).json(finances);
});

const setFinances = asyncHandler(async (req, res) => {
  const { month, day, finType, finAmt } = req.body;

  if (!month || !day || !finType || !finAmt) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const finance = await Finance.create({
    month,
    day,
    finType,
    finAmt,
  });

  res.status(200).json(finance);
});

module.exports = { getFinances, setFinances };
