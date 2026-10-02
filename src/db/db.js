const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://yt:1NSeflhSehXlMzr0@yt-complete-backend.yesdpfk.mongodb.net/halley",
    );

    console.log("Connected to DB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

module.exports = connectDB;
 