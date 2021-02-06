const mongoose = require("mongoose");
const config = require("config");
const { json } = require("express");
const db = config.get("mongoURI");
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    //exit process
    process.exit(1);
  }
};

module.exports = connectDB;