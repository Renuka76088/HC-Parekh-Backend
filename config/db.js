const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.error("CRITICAL ERROR: MONGO_URI is not defined in environment variables!");
      console.log("Current process.env keys:", Object.keys(process.env).filter(k => !k.includes('SESSION') && !k.includes('PATH')));
      process.exit(1);
    }
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
