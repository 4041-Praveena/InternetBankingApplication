const mongoose = require("mongoose");

// let's create user schema
const transactionHistroySchema = new mongoose.Schema({
  transactionId: {
    type: Number,
    required: true,
  },
  senderName: {
    type: String,
    required: [true, "Please add user name"],
    trim: true,
    maxlength: [30, "Name connot be more than 30 characters"],
  },
  receiverName: {
    type: String,
    required: [true, "Please add user name"],
    trim: true,
    maxlength: [30, "Name connot be more than 30 characters"],
  },
  transactionAmount: {
    type: Number,
    required: true,
  },
});

module.exports =
  mongoose.models.TransactionHistory ||
  mongoose.model("TransactionHistory", transactionHistroySchema);
