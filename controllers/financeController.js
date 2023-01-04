const asyncHandler = require("express-async-handler");

const getFinances = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Finances" });
});

const setFinances = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  console.log(req.body);

  res.status(200).json({ message: "Set Finances" });
});

module.exports = { getFinances, setFinances };
