//getting trainers details
app.get('/trainers',verifyToken,function(req,res){      
    trainerData.find({ isApproved:"false"})
    .then(function(trainers){
      console.log("success")
        res.send(trainers);

    });
});


app.get('/trainersd',verifyToken,function(req,res){      
    trainerData.find({isApproved:"true"  })
    .then(function(trainers){
      console.log("success")
        res.send(trainers);

    });
});


app.get('/viewtrainers',verifyToken,function(req,res){     
  allocationData.find()
  .then(function(trainers){
    console.log("success")
      res.send(trainers);

  });
});


// approve
app.put('/approve',verifyToken,(req,res)=>{   
    console.log(req.body)
   let id=req.body._id;
    emptype=req.body.emptype;
    console.log(emptype);


    trainerData.findByIdAndUpdate({"_id":id},{$set:{
        "isApproved":"true",
        "emptype":emptype
      }})
      .then(function(){
        res.send()
        approvemail(id)
      })
})
      
// display into allocation form
      app.get('/:id',(req,res)=>{
        const id=req.params.id;
        console.log(id)
            trainerData.findOne({"_id":id})
            .then((trainer)=>{
                res.send(trainer);
            })
        
      
      });


  // allocation of datas into db 
    app.post('/allocate',verifyToken,function(req,res){     
      console.log(req.file);
      let id=req.body._id;
      var allocationDetails = allocationData({
        Unique_ID:req.body.Unique_ID,
        name:req.body.name,
        courses:req.body.courses,
        skillSet:req.body.skillSet,
        courseid:req.body.courseid,
        courses:req.body.courses,
        skillSet:req.body.skillSet,
        batchid:req.body.batchid,
        scheduletime:req.body.scheduletime,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
        venue:req.body.venue
      })
      try{


        allocationDetails = allocationDetails.save();
        res.send();
        allocatemail(id);
      }
      catch(err){
        console.error("Error (Allocate) = "+err);
      }
 
    });
// getting allocation details of a trainer
    app.get('/allocationDetails/:id',(req,res)=>{
      let Unique_ID = req.params.id;
      res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');

      allocationData.find({"Unique_ID":Unique_ID})
      .then((allocateData)=>{
        res.send(allocateData)
      })
    })


// trainer api rejecting
        app.delete('/reject/:id',(req,res)=>{
            id=req.params.id;
         console.log(id);
            trainerData.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log("success delete");
            res.send();
        })
    })


// trainer profile
app.get('/profile/:id',verifyToken,function(req,res){
    const id= req.params.id;
    
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    trainerData.findOne({"_id":id})
    
          .then(function(trainerData){
              // console.log("Profile = "+trainerData);
              res.send(trainerData);
          });
});

// edit trainer profile
app.put('/editprofile', verifyToken, upload.single('img'), (req, res) => {
  let imgFile = req.file;
  if (imgFile) {
    imgFile = imgFile.filename;
  } else {
    //to keep the image saved during enrollment
    imgFile = req.body.dbImage
  }

  id = req.body._id,
    trainerName = req.body.name,
    email = req.body.email,
    phone = req.body.phone,
    address = req.body.address,
    qualification = req.body.qualification,
    skills = req.body.skills,
    current_company = req.body.current_company,
    designation = req.body.designation,
    img = imgFile

  trainerData.findByIdAndUpdate({ _id: id },
    {
      $set: {
        "name": trainerName,
        "email": email,
        "phone": phone,
        "address": address,
        "qualification": qualification,
        "skills": skills,
        "current_company": current_company,
        "designation": designation,
        "course": course,
        "employment": employment,
        "img": img
      }
    })
    .then(() => {
      res.send();
    })

});