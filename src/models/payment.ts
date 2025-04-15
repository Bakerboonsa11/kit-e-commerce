import mongoose from 'mongoose';
import product from './product';
const paymentSchema = new mongoose.Schema({
  email: String,
  amount: String,
  tx_ref: String,
  status: { type: String, default: 'pending' },

  // New field to reference multiple products
  productIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

export default mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
