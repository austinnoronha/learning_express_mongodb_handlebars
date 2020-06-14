/* @file    connection.js
 * @desc    Mongoose Connection File
 */

const mongoose = require("mongoose");

//Connect to mongoose
mongoose.connect(
  "mongodb://127.0.0.1:27017/local",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log("[APP_LOG] Connection error...", err);
    } else {
      console.log("[APP_LOG] Connection successful...");
    }
  }
);

const Course = require("./course.model");
