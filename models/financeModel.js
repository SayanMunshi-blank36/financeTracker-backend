const mongoose = require("mongoose");

const financeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
