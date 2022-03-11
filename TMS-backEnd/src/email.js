//email

function approvemail(id){
  

    enrollment_data.findOne({"_id":id})
      
  
   .then((profile)=>{
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: 'Admin TMS',
             pass: 'fsdnorka2021b3'
         }
     })
    
    
    var mailOptions = {
      from: '	tmsa36467@gmail.com',
      to: profile.email,
      subject: 'Welcome to ICTAK-'+ profile.name,
      html:`<h2>Greetings from ICTAK</h2>
      
      <p>Hello <b>${profile.name}</b> ,your request to join as ICTAK trainer is approved .Login into your profile using below credintials</p>
      
      <br><br>
      <p>ICTAK ID : ${profile.Unique_ID}</p>  <br><br>
      <p>Email :${profile.email}</p>   <br><br>
      <p>Password :${profile.password}</p>    <br><br>
      <p>EmploymentType :${profile.emptype}</p>  <br><br> `
  
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
                      
      } else {       
  
      }
    });
   
   });
  }


  function allocatemail(id){

    trainerData.findOne({"_id":id})
      
  
   .then((profile)=>{
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: 'Admin TMS',
             pass: 'fsdnorka2021b3'
         }
     })
    
    
    var mailOptions = {
      from: '	tmsa36467@gmail.com',
      to: profile.email,
      subject: 'Course Assigned-'+ profile.name,
      html:`<h2>New Course Added By Admin</h2>
      
      <p>Hello <b>${profile.name}</b>, New Course is assigned in your profile.Login into your Profile and check it </p>
      
      <p>BatchID : ${profile.batchid}</p> <br>
      <p>CourseID : ${profile.courseid}</p>  <br>
      <p>StartDate : ${profile.startdate}</p>  <br>
      <p>EndDate :  ${profile.enddate} </p>  <br>
      <p>ScheduleTime :  ${profile.scheduletime}</p>  <br>
      <p>Venue :  ${profile.venue} </p>  `
  
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
                      
      } else {       
  
      }
    });
   
   });
  }

//app.listen(port,()=>{console.log("Server ready at "+port);})

module.exports={approvemail,allocatemail}