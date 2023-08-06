import dbConnection from "../../../utils/dbConnection";
import TransactionHistory from "../../../models/TransactionHistory";

// calling database connection
dbConnection();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const transactions = await TransactionHistory.find({});
        res.status(200).json({ success: true, transactions: transactions });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const transaction = await TransactionHistory.create(req.body);
        res.status(201).json({ success: true, transaction: transaction });
      } catch (error) {
        res.status(400).json({ success: false, message: "unable to post" });
      }
      break;
    default:
      res.status(400).json({ success: false, message: "method not found" });
      break;
  }
};
