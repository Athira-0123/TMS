const express = require("express"); 
const trainerRouter = express.Router();
const enrollment_data = require("../model/EnrollmentModel");




//api to get trainer details

trainerRouter.get('/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    
    try {
        const enrollmentId = req.params.id;
        enrollment_data.findOne({ _id: enrollmentId })
            .then(function (enrollment) {
                res.status(200).json(enrollment);
            })
    }
    catch (error) {
        res.status(500).json({ message: 'Error', error });
    }

})

module.exports = trainerRouter;