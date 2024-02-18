import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { itemService } from '../services';

const createItem = catchAsync(async (req: any, res: any) => {
  const Item = await itemService.createItem(req.body);
  res.status(httpStatus.CREATED).send(Item);
});

const getItems = catchAsync(async (req: any, res: any) => {
  const result = await itemService.getAllItems();
  res.send(result);
});

const getItem = catchAsync(async (req: any, res: any) => {
  const item = await itemService.getItemById(req.params.itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  res.send(item);
});

const updateItem = catchAsync(async (req: any, res: any) => {
  const item = await itemService.updateItemById(req.params.itemId, req.body);
  res.send(item);
});

const deleteItem = catchAsync(async (req: any, res: any) => {
  await itemService.deleteItemById(req.params.itemId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
};