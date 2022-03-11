function Enrollvalidation(enrollmentValues) {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneno = /^\d{10}$/;

    if (!enrollmentValues.first_name) {
        errors.first_name = "First name is required";
    }
    if (!enrollmentValues.last_name) {
        errors.last_name = "Last name is required";
    }
    if(!enrollmentValues.phone){
        errors.phone = "Phone number is required";
    }
    else if(!phoneno.test(enrollmentValues.phone)){
        errors.phone="Phone number is invalid"
    }
    if(!enrollmentValues.email_address){
        errors.email_address="Email address is required"

    }
    else if (!regex.test(enrollmentValues.email_address)) {
        errors.email_address = "Email address is invalid";
    }
    if (!enrollmentValues.password) {
        errors.password = "Password is required";
    }
    else if (enrollmentValues.password.length < 5) {
        errors.password = "Password length must be atleast 5";
    }
    else if (enrollmentValues.password.length > 15) {
        errors.password = "Password length should not exceed 15";
    }
    if(enrollmentValues.confirmpassword!==enrollmentValues.password){
        errors.confirmpassword = "Password doesn't match";
    }
    if(!enrollmentValues.ictak_course_handling){
        errors.ictak_course_handling = "Select a suitable course";
    }
    if(!enrollmentValues.highest_qualification){
        errors.highest_qualification = "Qualification required";
    }
    if(!enrollmentValues.skill_set){
        errors.skill_set = "Enter your skills";
    }
    if(!enrollmentValues.current_company_name){
        errors.current_company_name = "Current work place required";
    }
    if(!enrollmentValues.current_designation){
        errors.current_designation = "Your designation required";
    }

    return errors;
}

export default Enrollvalidation;