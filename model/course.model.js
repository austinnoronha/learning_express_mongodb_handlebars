/* @file    course.model.js
 * @desc    Mongoose Model Course File
 */
const mongoose = require("mongoose");

var CourseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: "Required",
    },
    courseId: {
      type: String,
    },
    courseDuration: {
      type: String,
    },
    courseFee: {
      type: String,
    },
  },
  {
    collection:
      "Course" /* Force the Collection to be called Course or else it will pluralize it to Courses*/,
  }
);

mongoose.model("Course", CourseSchema);
