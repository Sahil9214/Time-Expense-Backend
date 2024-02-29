const mongoose = require("mongoose");
const expenseSchema = mongoose.Schema({
  id: Number,
  name: String,
  status: Boolean,
  money: Number,
  Date: String,
  Description: String,
});
const expenseModel = mongoose.model("expense", expenseSchema);
module.exports = { expenseModel };
