import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined. Check your .env file.");
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI.trim());
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    throw new Error(`Error while connecting to the database: ${error.message}`);
  }
};

export default connectDB;
