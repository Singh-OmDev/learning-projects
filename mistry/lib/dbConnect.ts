import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // If already connected, reuse connection
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "");

    connection.isConnected = db.connection.readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
