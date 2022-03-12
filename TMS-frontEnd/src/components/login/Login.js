
import { useState } from 'react';
import { useNavigate } from 'react-router';
import React from 'react';
import {Link} from 'react-router-dom';
import validateLogin from './validateLogin';



import '../enrollment/Enrollment.css';

function Login() {
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
        //console.log(formValues);
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
        const response = await fetch("http://localhost:5001/api/user/login", {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        console.log(body)
        alert(body.message)
        if (body.message === 'Authentication success.') {
            localStorage.setItem("hornbill",body.token);
            navigate(`/trainer/${body.id}`, { replace: true });
            
            
        }
        if(body.message==='You are now logged in as admin'){
            navigate('/admin',{replace:true})
        } 
        
    };

    
   


    return (

        <div className='wrapper' >
            
                <form onSubmit={handleSubmit} className='inner'>
                <h3 >Login</h3> <br/>
                <label className="form-group">
                    <input type="email" name='username'  className="form-control" required="" value={formValues.username} onChange={handleChange} />
					<span>   Email address *</span>
                    <p className='error'>{formErrorValues.username}</p>
					<span className="border"></span>
				</label>
                <label className="form-group">
                    <input type="password" name='password'  className="form-control"  required="" value={formValues.password} onChange={handleChange} /> 
					<span>   Password *</span>
                    <p className='error'>{formErrorValues.password}</p>
					<span className="border"></span>
				</label>
                
                <div className="btns">
                    <button className='alink' type='submit' value="Submit application"> Submit </button>
                </div>
                <br/>
                
                <Link to='/enroll' className='next'>Not enrolled?SignUp</Link><br/><br/>
                <Link to='/' className='next'>Go back to home</Link>
            
                </form>
            
        </div>
    );
}

export default Login;

