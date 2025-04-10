import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // Return the cached connection if it already exists
  if (cached.conn) {
    console.log('Using cached MongoDB connection');
    return cached.conn;
  }

  // If there is no cached connection, initiate a new one
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
     
    })
      .then((mongooseInstance) => {
        console.log('MongoDB is connected successfully WELL');
        return mongooseInstance;
      })
      .catch((error) => {
        console.error('MongoDB connection error:', error);
        throw new Error('Failed to connect to MongoDB');
      });
  }

  // Await the promise and store the connection in cache
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
