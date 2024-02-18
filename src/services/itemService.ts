import httpStatus from 'http-status';
import Item from '../models/item.model';
import ApiError from '../utils/ApiError';

const createItem = async (itemBody: any) => {
  const duplicate = await Item.findOne({ name: itemBody.name, amount: itemBody.amount }).exec();
  if (duplicate) {
    throw new ApiError(409, 'Item exited!');
  }

  return Item.create(itemBody);
};

const getAllItems = async () => {
  return Item.find();
}

const getItemById = async (id: string) => {
  return Item.findById(id);
};

const updateItemById = async (itemId: string, updateBody: any) => {
  const item = await getItemById(itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  Object.assign(item, updateBody);
  await item.save();
  return item;
};

const deleteItemById = async (itemId: string) => {
  const item = await getItemById(itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  await item.deleteOne({ itemId });
  return item;
};

export default {
  getAllItems,
  createItem,
  getItemById,
  updateItemById,
  deleteItemById,
};