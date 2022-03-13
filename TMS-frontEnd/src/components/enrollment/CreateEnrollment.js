import React, { useState,useEffect} from 'react';
import { useNavigate ,Link} from "react-router-dom";
import Enrollvalidation from './Enrollvalidation';
import './Enrollment.css';

function CreateEnrollment(props) {

    // Storing comments
    const [enrollmentValues, setEnrollmentValues] = useState({  first_name: "",last_name: "",gender: "",date_of_birth: "",
    address_line_1: "",address_line_2: "",city: "",district: "",state: "",zip_Code: "",phone: "",email_address: "",password:"",
    confirmpassword:"",highest_qualification: "",
    skill_set: "",current_company_name: "",current_designation: "",ictak_course_handling: "",});

    // Manage Form Error Values
    const [formErrorValues, setFormErrorValues] = useState({});
    const [isSubmit,setIsSubmit]=useState(false)

    const navigation = useNavigate()

    function handleChange(event) {
        const { name, value } = event.target;
        setEnrollmentValues({ ...enrollmentValues, [name]: value })
        
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      setFormErrorValues(Enrollvalidation(enrollmentValues));
      setIsSubmit(true)
      }

    useEffect(() => {
        if (Object.keys(formErrorValues).length === 0 && isSubmit) {
           createEnrollment();
           
        }
    }, [formErrorValues]);

    
  

    

    async function createEnrollment() {
        const formData = new FormData();
        const fileInput = document.querySelector("#imageInput");

       formData.append("first_name",enrollmentValues.first_name);
       formData.append("last_name", enrollmentValues.last_name);
       formData.append("gender", enrollmentValues.gender);
       formData.append("date_of_birth", enrollmentValues.date_of_birth);
       formData.append("address_line_1", enrollmentValues.address_line_1);
       formData.append("address_line_2", enrollmentValues.address_line_2);
       formData.append("city", enrollmentValues.city);
       formData.append("district", enrollmentValues.district);
       formData.append("state", enrollmentValues.state);
       formData.append("zip_Code", enrollmentValues.zip_Code);
       formData.append("phone", enrollmentValues.phone);
       formData.append("email_address", enrollmentValues.email_address);
       formData.append("password", enrollmentValues.password);
       formData.append("confirmpassword", enrollmentValues.confirmpassword);
       formData.append("highest_qualification", enrollmentValues.highest_qualification);
       formData.append("skill_set", enrollmentValues.skill_set);
       formData.append("current_company_name", enrollmentValues.current_company_name);
       formData.append("current_designation", enrollmentValues.current_designation);
       formData.append("ictak_course_handling", enrollmentValues.ictak_course_handling);
       formData.append("image", fileInput.files[0]);

      //console.log("Calling create enrollment service with body " + formData)
        const response = await fetch(`/api/enrollments`, {
            method: 'post',
            body: formData,

        })
        const respBody = await response.json().then (navigation("/") );
            alert(respBody)
            
            //console.log(respBody)
    }

    return (

        <>
        <div className="bg">
       <div className="wrapper">
			<div className="inner" >
				<form onSubmit={handleSubmit}>
					<h3>Enrollment</h3>
					<p>Please fill your details to enroll as a trainer</p>

          <label className="form-group">
						<input type="text" className="form-control"  name="first_name"  value={enrollmentValues.first_name} onChange={handleChange}/>
						<span>  First name *</span>
            <p className='error'>{formErrorValues.first_name}</p>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" className="form-control"  name="last_name"  value={enrollmentValues.last_name} onChange={handleChange}/>
						<span>  Last name *</span>
            <p className='error'>{formErrorValues.last_name}</p>
						<span className="border"></span>
					</label>

         
         
          <label className="form-group">
          <select name="gender" className="form-control course_selection" defaultValue={''} value={enrollmentValues.gender} onChange={handleChange} >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
           
              </select>
            	<span> Gender*</span>
						<span className="border"></span>
					</label>

         
          <label className="form-group">
						<input type="date" className="form-control" value={enrollmentValues.date_of_birth} onChange={handleChange} name="date_of_birth" />
						<span> Date of birth</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" className="form-control"  value={enrollmentValues.address_line_1} onChange={handleChange} name="address_line_1" />
						<span> Address Line 1</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" className="form-control"  value={enrollmentValues.address_line_2} onChange={handleChange} name="address_line_2" />
						<span> Address Line 2</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" className="form-control" value={enrollmentValues.city} onChange={handleChange} name="city"/>
						<span>   City</span>
						<span className="border"></span>
					</label>

          
          <label className="form-group">
						<input type="text" className="form-control" value={enrollmentValues.district} onChange={handleChange} name="district"/>
						<span>   District</span>
						<span className="border"></span>
					</label>
 
          <label className="form-group">
						<input type="text" className="form-control"  value={enrollmentValues.state} onChange={handleChange} name="state" />
						<span>    State</span>
						<span className="border"></span>
					</label>
 
          <label className="form-group">
						<input type="text" className="form-control"value={enrollmentValues.zip_Code} onChange={handleChange} name="zip_Code" />
						<span>     ZIP Code</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="phone" className="form-control" value={enrollmentValues.phone} onChange={handleChange} name="phone" />
						<span>   Phone *</span>
            <p className='error'>{formErrorValues.phone}</p>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="email" name="email_address" className="form-control"  value={enrollmentValues.email_address} onChange={handleChange}/>
						<span>   Email address *</span>
            <p className='error'>{formErrorValues.email_address}</p>
						<span className="border"></span>
					</label>
          <label className="form-group">
						<input type="password" name="password" className="form-control"  value={enrollmentValues.password} onChange={handleChange} />
						<span>  Password*</span>
            <p className='error'>{formErrorValues.password}</p>
						<span className="border"></span>
					</label>
          <label className="form-group">
						<input type="password" name="confirmpassword" className="form-control"  value={enrollmentValues.confirmpassword} onChange={handleChange} />
						<span> Confirm Password*</span>
            <p className='error'>{formErrorValues.confirmpassword}</p>
						<span className="border"></span>
					</label>


          <label className="form-group">
						<input type="text" name="highest_qualification" className="form-control" value={enrollmentValues.highest_qualification} onChange={handleChange}  />
						<span>   Highest Qualification *</span>
            <p className='error'>{formErrorValues.highest_qualification}</p>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" name="skill_set" className="form-control" value={enrollmentValues.skill_set} onChange={handleChange} />
						<span>   Skill set *</span>
            <p className='error'>{formErrorValues.skill_set}</p>
						<span className="border"></span>
					</label>


          <label className="form-group">
						<input type="text" name="current_company_name"  className="form-control" value={enrollmentValues.current_company_name} onChange={handleChange}  />
						<span>   Current company Name*</span>
            <p className='error'>{formErrorValues.current_company_name}</p>
						<span className="border"></span>
					</label>


          <label className="form-group">
						<input type="text" name="current_designation" className="form-control" value={enrollmentValues.current_designation} onChange={handleChange} />
						<span>    Current Designation *</span>
            <p className='error'>{formErrorValues.current_designation}</p>
						<span className="border"></span>
					</label>

          <label className="form-group">
          <select name="ictak_course_handling" className="form-control course_selection" defaultValue={''} value={enrollmentValues.ictak_course_handling} onChange={handleChange} >
                <option value=""></option>
                <option value="FSD">FSD</option>
                <option value="RPA">RPA</option>
                <option value="DSA">DSA</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            	<span> ICTAK Course Handling*</span>
              <p className='error'>{formErrorValues.ictak_course_handling}</p>
						<span className="border"></span>
					</label>


         
         
        {/* <fieldset> */}
        <label className="form-group1">
        <input type="file"  id="imageInput"  className="form-control" name="image" accept=".jpg,.png" required />
        
						<span>    Photo *</span>
            
            <small>Possible file types: JPG,PNG. Maximum file size: 10 MB.</small>
            
            <span className="border"></span>
					</label>
        {/* </fieldset> */}
        <div className="btns">
          
          <button className='alink' type='submit' value="Submit application"> Submit </button>
          <br/>
          Already enrolled?<Link to='/login' className='next'> Click Here</Link><br/><br/>
          <Link to='/' className='next'>Go back to home</Link>
        </div>
				</form>
			</div>
		</div>
    </div>
        </>
    );
}

export default CreateEnrollment;