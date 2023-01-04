const mongoose = require("mongoose");

const financeSchema = mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    finType: {
      type: String,
      required: true,
    },
    finAmt: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      default: new Date().getFullYear(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Finance", financeSchema);
