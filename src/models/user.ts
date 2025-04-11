import mongoose, { Schema, models, model } from 'mongoose';
import bcrypt from 'bcryptjs'; // or 'bcrypt'

const userSchema = new Schema({
  name: {
    type: String,
    // required: [true, 'User must have a name'],
  },
  email: {
    type: String,
    required: [true, 'User must have an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 🔐 Pre-save middleware to hash password before saving
userSchema.pre('save', async function (next) {
  // Only hash the password if it's new or modified
  if (!this.isModified('password')) return next();

  // Hash the password with salt
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// Prevent re-compiling model if already compiled
export default models.UserModel || model('UserModel', userSchema);
