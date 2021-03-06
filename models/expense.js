const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  store: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  postalCode: { type: String, required: true },
  day: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  fullDate: { type: Number, required: true },
  item: { type: String, required: true },
  cost: { type: Number, required: true },
  category: { type: String, required: true },
  userId: { type: String, required: true},
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
