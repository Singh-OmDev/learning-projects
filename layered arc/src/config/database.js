const mongoose = require('mongoose');

class DatabaseConfig {

  static async connect() {
    try {
      const mongoUri =
        process.env.MONGO_URI || 'mongodb://localhost:27017/layered-arch';

      if (!mongoUri) {
        throw new Error('MongoDB URI is not defined in environment variables');
      }

      const options = {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      };

      await mongoose.connect(mongoUri, options);

      console.log("MongoDB connected ✅");

    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("MongoDB disconnected ❌");
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
      throw error;
    }
  }
}

module.exports = DatabaseConfig;