import express from 'express';
import auth from '../middleware/auth';
import validate from '../middleware/validate';
import transactionValidation from '../validations/transaction.validation';
import transactionController from '../controllers/transaction.controller';

const router = express.Router();

router
  .route('/')
  .post(validate(transactionValidation.saveTransaction), transactionController.saveTransaction)
  .get(transactionController.getTransactions);

router
  .route('/:transactionId')
  .get(validate(transactionValidation.getTransaction), transactionController.getTransaction)
  .delete(auth('manageUsers'), validate(transactionValidation.deleteTransaction), transactionController.deleteTransaction)

export default router;
