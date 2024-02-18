import express from 'express';
import auth from '../middleware/auth';
import validate from '../middleware/validate';
import itemValidation from '../validations/item.validation';
import itemController from '../controllers/item.controller';

const router = express.Router();

// auth(permission) - permission defined at roles.ts
router
  .route('/')
  .post(auth('manageUsers'), validate(itemValidation.createItem), itemController.createItem)
  .get(itemController.getItems);

router
  .route('/:itemId')
  .get(validate(itemValidation.getItem), itemController.getItem)
  .patch(auth('manageUsers'), validate(itemValidation.updateItem), itemController.updateItem)
  .delete(auth('manageUsers'), validate(itemValidation.deleteItem), itemController.deleteItem);

export default router;
