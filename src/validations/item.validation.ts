import Joi from 'joi';

const createItem = {
  body: Joi.object().keys({
    key: Joi.string().required(),
    name: Joi.string().required(),
    amount: Joi.number().required(),
    icon: Joi.string().required(),
    bg: Joi.string().required(),
    token: Joi.string().required(),
  }),
};

const getItems = {
  query: Joi.object().keys({
    username: Joi.string(),
    role: Joi.string(),
  }),
};

const getItem = {
  params: Joi.object().keys({
    itemId: Joi.string(),
  }),
};

const updateItem = {
  params: Joi.object().keys({
    itemId: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      key: Joi.string().required(),
      name: Joi.string().required(),
      amount: Joi.number().required(),
      icon: Joi.string().required(),
      bg: Joi.string().required(),
      token: Joi.string().required(),
    })
};

const deleteItem = {
  params: Joi.object().keys({
    itemId: Joi.string(),
  }),
};

export default {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
};