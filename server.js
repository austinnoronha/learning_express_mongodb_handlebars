/* @file    server.js
 * @desc    Node Server File
 */

const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

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

//Middleware - Body Parse
app.use(express.json());

//Middleware - URL Encoded
app.use(express.urlencoded({ extended: false }));

//Middleware - Express Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//App set static folder - with middleware
//app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("App runngin on ", PORT);
});
