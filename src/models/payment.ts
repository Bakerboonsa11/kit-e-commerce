import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  email: String,
  amount: String,
  tx_ref: String,
  status: { type: String, default: 'pending' },
 
});

export default mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
