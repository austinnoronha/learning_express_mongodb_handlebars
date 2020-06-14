/* @file    server.js
 * @desc    Node Server File
 */

const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const connection = require("./model/connection");
const CourseControler = require("./controllers/course");
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware - Body Parse
app.use(express.json());

//Middleware - URL Encoded
app.use(express.urlencoded({ extended: false }));

//Middleware - Express Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//App set static folder - with middleware
app.use(express.static(path.join(__dirname, "public")));

app.use("/course", CourseControler);

app.listen(PORT, () => {
  console.log("App runngin on ", PORT);
});
