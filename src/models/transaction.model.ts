import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface ITransaction {
  fromAddress: string,
  toAddress: string,
  txHash: string,
  action: string
}

const transactionSchema = new Schema<ITransaction>(
  {
    fromAddress: {
      type: String,
      required: true,
      trim: true,
    },
    toAddress: {
      type: String,
      required: true,
      trim: true,
    },
    txHash: {
      type: String,
      required: true,
      trim: true,
    },
    action: {
      type: String,
      required: true,
      trim: true,
    }
  },
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;