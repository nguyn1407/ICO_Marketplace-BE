import Joi from 'joi';

const saveTransaction = {
  body: Joi.object().keys({
    fromAddress: Joi.string().required(),
    toAddress: Joi.string().required(),
    txHash: Joi.string().required(),
    action: Joi.string().required(),
  }),
};

const getTransaction = {
  params: Joi.object().keys({
    transactionId: Joi.string(),
  }),
};

const deleteTransaction = {
  params: Joi.object().keys({
    transactionId: Joi.string(),
  }),
};


export default { saveTransaction, getTransaction, deleteTransaction };