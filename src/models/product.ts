// models/Kit.ts
import mongoose, { Schema, Document, model } from 'mongoose';

export interface IKit extends Document {
  name: string;
  description: string;
  category: string;
  price: number;
  discount?: number;
  brand: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  createdFor?: mongoose.Types.ObjectId;
}

const kitSchema = new Schema<IKit>(
  {
    name: {
      type: String,
      required: [true, 'A kit must have a name'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'A kit must belong to a category'],
    },
    price: {
      type: Number,
      required: [true, 'A kit must have a price'],
    },
    discount: {
      type: Number,
      min: [0, 'Discount cannot be below 0'],
      max: [100, 'Discount cannot exceed 100%'],
    },
    
    brand: {
      type: String,
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: 1,
      max: 5,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
    }
  
  },
  { timestamps: true }
);

export default mongoose.models.Kit || model<IKit>('Kit', kitSchema);
