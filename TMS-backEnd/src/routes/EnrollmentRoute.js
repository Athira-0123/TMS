const express = require("express");
const enrollmentRouter = express.Router();
const enrollment_data = require("../model/EnrollmentModel");
var multer = require("multer");
var fs = require("fs");
var path = require("path");
const bcrypt = require("bcrypt");
var mongoose = require("mongoose");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = "./uploads";
    if (!fs.existsSync(path)) {
      console.log("Creating directory");
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

//api to populate admin request table

enrollmentRouter.get("/", function (req, res) {
  enrollment_data.find({ isApproved: false }).then(function (enrollments) {
    res.status(200).json(enrollments);
  });
});

//api to post enrollment data

enrollmentRouter.post("/", upload.single("image"), (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

  enrollment_data.find(
    { email_address: req.body.email_address },
    (err, data) => {
      if (data.length == 0) {
        var new_enrollment = {
          isApproved: false,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          gender: req.body.gender,
          date_of_birth: req.body.date_of_birth,
          address_line_1: req.body.address_line_1,
          address_line_2: req.body.address_line_2,
          city: req.body.city,
          district: req.body.district,
          state: req.body.state,
          zip_Code: req.body.zip_Code,
          phone: req.body.phone,
          email_address: req.body.email_address,
          password: bcrypt.hashSync(req.body.password, 10),
          confirmpassword: req.body.confirmpassword,
          highest_qualification: req.body.highest_qualification,
          skill_set: req.body.skill_set,
          current_company_name: req.body.current_company_name,
          current_designation: req.body.current_designation,
          ictak_course_handling: req.body.ictak_course_handling,
          image: {
            data: fs.readFileSync(
              path.join(__dirname + "/../../uploads/" + req.file.filename)
            ),
            contentType: "image/png",
          },
        };

        const enrollment = new enrollment_data(new_enrollment);
        enrollment.save();
        res
          .status(200)
          .json(
            "Your request sent to admin.Please wait for approval mail from admin "
          );
      } else {
        res.json("Email already exists");
      }
    }
  );
});

enrollmentRouter.put("/:id", upload.single("image"), (req, res, next) => {
  console.log("Updating profile");
  const _id = mongoose.Types.ObjectId(req.params.id);

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  var enrollment = req.body;
  if (req.file !== undefined) {
    enrollment.image = {
      data: fs.readFileSync(
        path.join(__dirname + "/../../uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    };
  }

  enrollment_data.findByIdAndUpdate({ _id }, req.body, (err, data) => {
    if (err) {
      res.json("Failed to update profile" + err);
    } else {
      res.status(200).json("Your profile has been updated");
    }
  });
});

module.exports = enrollmentRouter;
