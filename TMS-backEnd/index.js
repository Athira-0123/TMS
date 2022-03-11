const express = require('express');
const cors = require('cors');
const enrollment = require('./src/model/EnrollmentModel');
const enrollmentRouter = require('./src/routes/EnrollmentRoute');
const adminRouter = require('./src/routes/AdminRoute');
const accountsRouter = require("./src/routes/userRouter");
const trainerRouter=require('./src/routes/TrainerRoute')
const auth = require ("./src/utility/auth");

const path = require('path');



const app = express();
app.use(cors());
// Post Method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('./build/'));




app.use('/api/enrollments',enrollmentRouter);
app.use('/api/admin',adminRouter) 
app.use("/api/user", accountsRouter);
app.use('/api/trainer',auth,trainerRouter)







// app.get('/*',function(req,res){
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// });





app.listen(process.env.PORT || 5001,()=>{
    console.log("Server Ready on 5001"); 
});