import httpStatus from 'http-status';
import Transaction from '../models/transaction.model';
import ApiError from '../utils/ApiError';

const saveTransaction = async (transactionBody: any) => {
  return Transaction.create(transactionBody);
};

const getAllTransactions = async () => {
  return Transaction.find();
}

const getTransactionById = async (id: string) => {
  return Transaction.findById(id);
};

const deleteTransactionById = async (transactionId: string) => {
  const transaction = await getTransactionById(transactionId);
  if (!transaction) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Transaction not found');
  }
  await transaction.deleteOne({ transactionId });
  return transaction;
};

export default {
  getAllTransactions,
  saveTransaction,
  getTransactionById,
  deleteTransactionById,
};