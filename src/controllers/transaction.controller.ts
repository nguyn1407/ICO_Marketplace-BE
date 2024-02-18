import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { transactionService } from '../services';

const saveTransaction = catchAsync(async (req: any, res: any) => {
  const transaction = await transactionService.saveTransaction(req.body);
  res.status(httpStatus.CREATED).send(transaction);
});

const getTransactions = catchAsync(async (req: any, res: any) => {
  const result = await transactionService.getAllTransactions();
  res.send(result);
});

const getTransaction = catchAsync(async (req: any, res: any) => {
  const transaction = await transactionService.getTransactionById(req.params.transactionId);
  if (!transaction) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Transaction not found');
  }
  res.send(transaction);
});

const deleteTransaction = catchAsync(async (req: any, res: any) => {
  await transactionService.deleteTransactionById(req.params.transactionId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  saveTransaction,
  getTransactions,
  getTransaction,
  deleteTransaction,
};