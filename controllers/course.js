/**
 * @file    course.js
 * @desc    Express Routes - API for Courses
 */
const express = require("express");
const mongoose = require("mongoose");

const CourseModel = mongoose.model("Course");
const router = express.Router();

//App dynamic APIs

router.get("/", (req, res) => {
  //   var newCourse = new CourseModel();
  //   newCourse.courseName = "Nodejs 101";
  //   newCourse.courseId = "2380239";
  //   newCourse.courseDuration = "20hrs";
  //   newCourse.courseFee = "1000rs";
  //   newCourse.save();

  CourseModel.find((err, docs) => {
    if (err) {
      return res.status(400).send("MongoDB List Error");
    } else {
      console.log("docs", docs);
      return res.status(200).send("MongoDB List Success");
    }
  });
});

module.exports = router;
