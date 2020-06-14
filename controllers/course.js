/**
 * @file    course.js
 * @desc    Express Routes - API for Courses
 */
const express = require("express");
const mongoose = require("mongoose");
const uuid = require("uuid");

const CourseModel = mongoose.model("Course");
const router = express.Router();

//App dynamic APIs

router.get("/", (req, res) => {
  CourseModel.find((err, docs) => {
    if (err) {
      return res.status(400).send("MongoDB List Error");
    } else {
      return res.status(200).render("list", { data: docs });
    }
  }).lean() /*Due to some dev dependencies in express handlebars, we need to use lean() to get JSON object*/;
});

router.get("/add", (req, res) => {
  return res.status(200).render("add-course");
});

router.post("/add", (req, res) => {
  var courseBody = req.body;

  if (
    !courseBody.courseName ||
    !courseBody.courseDuration ||
    !courseBody.courseFee
  ) {
    return res.status(400).send("Please enter course name, suration and fees!");
  }

  var newCourse = new CourseModel();
  newCourse.courseName = courseBody.courseName;
  newCourse.courseId = uuid.v1();
  newCourse.courseDuration = courseBody.courseDuration;
  newCourse.courseFee = courseBody.courseFee;

  newCourse.save((err, doc) => {
    if (err) {
      return res.status(400).send("Error in adding data, please try again.");
    } else {
      return res.redirect("/course/");
    }
  });
});

module.exports = router;
