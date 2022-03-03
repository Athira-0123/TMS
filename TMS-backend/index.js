const express = require("express");
const app = express();
const auth = require ("./src/utility/auth");
// const cors = require("cors");
const path = require("path");


const PORT = 5000;

const accountsRouter = require("./src/routes/userRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

app.use("/api/user", accountsRouter);




app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)

})