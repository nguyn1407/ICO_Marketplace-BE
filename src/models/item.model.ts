import mongoose from 'mongoose';

const Schema = mongoose.Schema;

enum TOKEN {
  BNB = "BNB",
  USDT = "USDT",
}

interface IItem {
  key: string;
  name: string;
  amount: number;
  icon: string;
  bg: string;
  token: string;
}

const itemSchema = new Schema<IItem>(
  {
    key: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
      trim: true,
    },
    bg: {
      type: String,
      required: true,
      trim: true,
    },
    token: {
      type: String,
      enum: TOKEN,
      required: true,
      trim: true,
    },
  },
);

const Item = mongoose.model('Item', itemSchema);

export default Item;