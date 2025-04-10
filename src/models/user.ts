import mongoose, { Schema, models, model } from 'mongoose';

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
  password:{
     type:String,
     required:[true,'password is required']
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent re-compiling model if already compiled
export default models.UserModel || model('UserModel', userSchema);
