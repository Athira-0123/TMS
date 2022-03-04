import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import React from 'react';
import {Link} from 'react-router-dom';
import validateLogin from './validateLogin';
import './login.css';

function Login(setToken) {
    // Storing Form Values
    const [formValues, setFormValues] = useState({ username: "", password: "" });

    // Manage Error Values
    const [formErrorValues, setFormErrorValues] = useState({});

    // const [isSubmit, setIsSubmit] = useState(false);

    //Page Navigation
    const navigate = useNavigate();

   
    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target; //destructuring
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    // Form Refresh
    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = validateLogin(formValues);
        setFormErrorValues(validationErrors);
        if(Object.keys(validationErrors).length === 0)
            userLogin()
    }


    const userLogin = async () => {
        const username = formValues.username;
        const password = formValues.password;
        const response = await fetch("http://localhost:5000/api/user/login", {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        
        if (body.username === username) {
            setToken(body);
            navigate("/trainer", { replace: true });
        } else {
            alert("Login Unsuccessful!");
        }
    };


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
                <br/><br/>
                <Button variant='contained' color='primary'>Submit</Button>
            
                </form>
            
        </div>
    );
}

export default Login;