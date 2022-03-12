const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@fsdfiles.ltrsv.mongodb.net/tms?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var enrollments = new Schema({
    first_name: String,
    last_name: String,
    gender: String,
    date_of_birth: String,
    address_line_1: String,
    address_line_2: String,
    city: String,
    district: String,
    state: String,
    zip_Code: String,
    phone : String,
    email_address :{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:String,
    highest_qualification : String,
    skill_set : String,
    current_company_name : String,
    current_designation : String,
    ictak_course_handling : String,
    isApproved:Boolean,
    emptype:String,
    allocations:Array,
    image: {
        data: Buffer,
        contentType: String
    }
},{timestamps:true});


        //to compare login password

        enrollments.methods.matchPassword = async function (enteredpassword) {
            try {
            return await bcrypt.compareSync(enteredpassword, this.password)
            } catch (error) {
            throw error
            //console.log('error')
            }
            }

var enrollments = mongoose.model('enrollments', enrollments);

module.exports = enrollments;