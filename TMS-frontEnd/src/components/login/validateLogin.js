const validateLogin = (formValues) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.username) {
        errors.username = "Username is required";
    }
    else if (!regex.test(formValues.username)) {
        errors.username = "Email address is invalid";
    }
    if (!formValues.password) {
        errors.password = "Password is required";
    }
    else if (formValues.password.length < 5) {
        errors.password = "Password length must be atleast 5";
    }
    else if (formValues.password.length > 15) {
        errors.password = "Password length should not exceed 15";
    }

    return errors;
}
export default validateLogin;