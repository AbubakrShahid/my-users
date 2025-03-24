const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbName = process.env.DATABASE_NAME;
    const connectionString = `${process.env.MONGO_URI}`;

    await mongoose.connect(connectionString, {
      dbName: dbName,
      ssl: true,
      retryWrites: true,
    });

    console.log("MongoDB connected successfully to database:", dbName);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
