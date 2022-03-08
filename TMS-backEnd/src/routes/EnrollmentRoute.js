const express = require("express");
const enrollmentRouter = express.Router();
const enrollment_data = require("../model/EnrollmentModel");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
const bcrypt=require('bcrypt');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const path = "./uploads";
     if(! fs.existsSync(path)){
       console.log("Creating directory")
      fs.mkdirSync(path, { recursive: true })
    }
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

enrollmentRouter.get('/',function(req,res){

  enrollment_data.find() 
  .then(function (enrollments) {
    res.status(200).json(enrollments);


  })
})
enrollmentRouter.get('/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  try {
      const enrollmentId = req.params.id;
      enrollment_data.findOne({ id: enrollmentId })
          .then(function (enrollment) {
              res.status(200).json(enrollment);
          })
  }
  catch (error) {
      res.status(500).json({ message: 'Error', error });
  }
});

enrollmentRouter.post("/",  upload.single('image') ,(req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  //console.log("Recieved request with body : " + JSON.stringify(req.body))
  enrollment_data.find({email_address : req.body.email_address},(err,data)=>{
    if(data.length==0){
      var new_enrollment = {
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
        phone : req.body.phone,
        email_address : req.body.email_address,
        password:bcrypt.hashSync(req.body.password,10),
        confirmpassword:req.body.confirmpassword,
        highest_qualification : req.body.highest_qualification,
        skill_set : req.body.skill_set,
        current_company_name : req.body.current_company_name,
        current_designation : req.body.current_designation,
        ictak_course_handling : req.body.ictak_course_handling,
        image: {
          data: fs.readFileSync(path.join(__dirname + '/../../uploads/' + req.file.filename)),
          contentType: 'image/png'
      }
      };
    
      const enrollment = new enrollment_data(new_enrollment);
      enrollment.save();
      res.status(200).json("Your request sent to admin.Please wait for approval mail from admin ")
    }else{
      res.json("Email already exists")
    }
  })
  
});

enrollmentRouter.put("/:id", upload.single('image') , function (req, res) {
  enrollment_data.findByIdAndUpdate(req.params.id, { $set: req.body },  { new: true },function (err, data) {

    if (err) {
      res.status(500).json({ status: "Failed to update the enrollment" });
    }
    else if (null === data) {
      res.status(404).json({ status: "ID not found" });
    }
    else {
      console.log(
        " A new enrollment has been updated to the database successfully : " + data
      );
      res.status(200).json(data);
    }
})
});

enrollmentRouter.delete("/", function (req, res) {
  const id = req.body.id;  
  console.log("Request recieved for deleting " +id);

  enrollment_data.findOneAndDelete({ id: id })
  .then(function () {

    console.log(
      " A new enrollment has been deleted from the database" 
    );
    res.status(200).json("{\"status\":\"enrollment has been deleted.\"");

  })  

});


module.exports = enrollmentRouter;
