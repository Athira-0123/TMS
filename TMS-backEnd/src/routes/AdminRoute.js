const express = require("express");
const adminRouter = express.Router();
const enrollment_data = require("../model/EnrollmentModel");
const nodemailer=require('nodemailer')


//function to send approval mail to trainer

function approvemail(id){
    enrollment_data.findOne({"_id":id})
      
  
   .then((profile)=>{
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      host:'smtp.gmail,com',
      secure:true,
      auth: {
             user: 'tmsa36467@gmail.com',
             pass: 'fsdnorka2021b3'
         },
         tls:{
             rejectUnauthorized: false
           }
     })
    
    
    var mailOptions = {
      from: 'tmsa36467@gmail.com',
      to: profile.email_address,
      subject: 'Welcome to ICTAK-'+ profile.first_name,
      html:`<h2>Greetings from ICTAK</h2>
      
      <p>Hello <b>${profile.first_name}</b> ,your request to join as ICTAK trainer is approved.
      Login into your profile using below credintials</p>
      <ul>
      <li>ICTAK ID : ${profile._id}</li> 
      <li>Email :${profile.email_address}</li>  
      <li>Password :${profile.confirmpassword}</li>   
      <li>EmploymentType :${profile.emptype}</li>  
      </ul>
      `
  
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.json('Email not sent.Check again');

                      
      } else {       
        res.json('Email sent');
      }
    });
   
   });
}


//allocation mail
function allocatemail(id,data){

  enrollment_data.findOne({"_id":id})
    

 .then((profile)=>{

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail,com',
    secure:true,
    auth: {
           user: 'tmsa36467@gmail.com',
           pass: 'fsdnorka2021b3'
       },
       tls:{
           rejectUnauthorized: false
         }
   })
  
  
  var mailOptions = {
    from: '	tmsa36467@gmail.com',
    to: profile.email_address,
    subject: 'Course Assigned-'+ profile.first_name,
    html:`<h2>New Course Added By Admin</h2>
    
    <p>Hello <b>${profile.first_name+" "+profile.last_name}</b>, New Course is assigned in your profile.Login into your Profile and check it </p>
    <ul>
    <li>BatchID : ${data.batchid}</li> 
    <li>CourseID : ${data.courseid}</li> 
    <li>StartDate : ${data.startdate}</li> 
    <li>EndDate :  ${data.enddate} </p> 
    <li>ScheduleTime :  ${data.starttime+'-'+data.endtime}</li> 
    <li>Venue :  ${data.venue} </li> 
    </ul> 
    <p>If you are facing any issues ,kindly contact the administrator</p>`

    
    
    

  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('Email not sent.Check again');

                    
    } else {       
      console.log('Email sent');
    }
   
  });
 
 });
}


// api to approve trainer
adminRouter.put('/approve',(req,res)=>{   
    try {
      const email=req.body.email;
      emptype=req.body.employment;
      
      enrollment_data.findOneAndUpdate({email_address:email},{$set:{
          isApproved:"true",
          emptype:emptype
        }})
        .then(function(data){
          //console.log(data)
          const id=data._id
          approvemail(id)
          res.status(200).json("Email sent")
        })
      
    } catch (error) {
      console.log(error)
      res.json('Email not sent.Check again')
      
    }
    
})

//api to reject trainer

adminRouter.delete('/deleteData',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    const mail=req.body.entry
    //console.log(mail)
    enrollment_data.findOneAndDelete({email_address:mail})
    .then(function(){
      res.status(200).json('Entry rejected')
    })
  })

  //api to get allocation table populated

adminRouter.get('/table',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  enrollment_data.find({isApproved:true})
  .then(function (enrollments) {
    res.status(200).json(enrollments);


  })
})


//api to get trainer allocation form prefilled

adminRouter.get(`/:id`,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  const id=req.params.id
  enrollment_data.find({ _id:id })
  .then(function(article){
    res.json(article)
  })
})


//api to post allocation data to database
adminRouter.post('/allocate/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  
    const id = req.params.id;
    
    const data=req.body
    
    enrollment_data.find({_id:id})
      .then(function(trainer){
        const results=trainer[0].allocations
        if(results.length==0){
          const filter = { _id: id };
          const update = { $push: { allocations: data} };
          enrollment_data.findOneAndUpdate(filter, update, { new: true })
            .then(function (article) {
              allocatemail(id,data)
              console.log('allocation mail sent')
                res.json({message:'Work allocated and email sent'});
              })

        }
          results.forEach(result => {
            if(result.startdate==data.startdate&&result.starttime==data.starttime){
              res.json({message:'Work already allocated for this period'})
            }else{
              const filter = { _id: id };
              const update = { $push: { allocations:data} };
              enrollment_data.findOneAndUpdate(filter, update, { new: true })
                .then(function (article) {
                  allocatemail(id,data)
                  console.log('allocation mail sent')
                    res.json({message:'Work allocated and email sent'});
                  })
              
            }
          });
      
      })
  

  
})

//api to view all allocations

adminRouter.get('/viewalloocation',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  enrollment_data.find({isApproved:true})
  .then(function(body){
    res.json(body)
  })
})


module.exports = adminRouter;

