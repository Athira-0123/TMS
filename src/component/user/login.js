import { Button } from '@mui/material';
import { useState,useEffect } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import validateLogin from './validateLogin';
import './login.css';

function Login() {
    // Storing Form Field Values
    const [formValues, setFormValues] = useState({ username: "", password: "" });

    // Manage Form Error Values
    const [formErrorValues, setFormErrorValues] = useState({});

    // Flag for Form Submission Status
    const [isSubmit, setIsSubmit] = useState(false); 

    // Manage Field Change
    const handleChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target; //destructuring
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    // Manage Form Refresh
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrorValues(validateLogin(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrorValues).length === 0 && isSubmit) {
            alert("success");
        }
    }, []);


    return (

        <div >
            
                <form onSubmit={handleSubmit} className='Login'>
                <h1 className='head1'>Login</h1> <br/>
                <input type="email" name='username' placeholder='Enter Username' required="" value={formValues.username} onChange={handleChange} />
                <br/><br/>
                <p className='ErrorWarning'>{formErrorValues.username}</p>
                <br/>
                <input type="password" name='password' placeholder='Enter password'  required="" value={formValues.password} onChange={handleChange} /> 
                <br/><br/>
                <p className='ErrorWarning'>{formErrorValues.password}</p> 
                <br/>
                <Link to='/signup' className='newSignup'>SignUp</Link>
                <br/>
                <br/>
                <Button variant='contained' color='primary'>Submit</Button>
            
                </form>
            
        </div>
    );
}

export default Login;