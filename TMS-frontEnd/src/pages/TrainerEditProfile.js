
// Edit the trainer profile
import React, { useState, useEffect } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";

import Logo from "../components/images/ictak-logo.png";
import './editprofile.css';

function TrainerProfile(props) {
  const { id } = useParams();

  useEffect(() => {
    fetchAPI();
  }, []);
  async function fetchAPI() {
    const response = await fetch(`/api/trainer/${id}`, {
      headers: {
        "x-access-token": localStorage.getItem("hornbill"),
      },
    });
    const body = await response.json();
    
    setTrainerValues(body);
  }
  // Storing  enrolled details
  const [trainerValues, setTrainerValues] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    district: "",
    state: "",
    zip_Code: "",
    phone: "",
    email_address: "",
    password: "",
    confirmpassword: "",
    highest_qualification: "",
    skill_set: "",
    current_company_name: "",
    current_designation: "",
    ictak_course_handling: "",
  });
  // Manage Form Error Values
  const [formErrorValues, setFormErrorValues] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigation = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setTrainerValues({ ...trainerValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);

    updateTrainer();
  };

  async function updateTrainer() {
    
    const formData = new FormData();
    const fileInput = document.querySelector("#imageInput");
    formData.append("first_name", trainerValues.first_name);
    formData.append("last_name", trainerValues.last_name);
    formData.append("gender", trainerValues.gender);
    formData.append("date_of_birth", trainerValues.date_of_birth);
    formData.append("address_line_1", trainerValues.address_line_1);
    formData.append("address_line_2", trainerValues.address_line_2);
    formData.append("city", trainerValues.city);
    formData.append("district", trainerValues.district);
    formData.append("state", trainerValues.state);
    formData.append("zip_Code", trainerValues.zip_Code);
    formData.append("phone", trainerValues.phone);
    formData.append("email_address", trainerValues.email_address);
    formData.append("password", trainerValues.password);
    formData.append("confirmpassword", trainerValues.confirmpassword);
    formData.append(
      "highest_qualification",
      trainerValues.highest_qualification
    );
    formData.append("skill_set", trainerValues.skill_set);
    formData.append("current_company_name", trainerValues.current_company_name);
    formData.append("current_designation", trainerValues.current_designation);
    formData.append(
      "ictak_course_handling",
      trainerValues.ictak_course_handling
    );
    formData.append("image", fileInput.files[0]);

    const response = await fetch(
      `http://localhost:5001/api/enrollments/${id}`,
      {
        method: "put",
        body: formData,
      }
    );
    const respBody = await response.json().then(navigation(`/trainer/${id}`));
    alert(respBody);
  }

  return (
    <>
      <div className="wrapperedit">
      <div id="appbar">
          <img src={Logo} alt='' id="ict"/>
          
          <Link to={'/'} id='log'>Logout</Link>
          <Link to={`/trainer/${id}/view-allocations`} id='viewallo'>View Allocations</Link>
        

        </div>
        <div className="inner">
          <form onSubmit={handleSubmit}>
            <h3>Edit Profile</h3>

            <label className="form-group">
              <input
                type="text"
                className="form-control"
                name="first_name"
                value={trainerValues.first_name}
                onChange={handleChange}
              />
              <span> First name </span>
              <p className="error">{formErrorValues.first_name}</p>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                className="form-control"
                name="last_name"
                value={trainerValues.last_name}
                onChange={handleChange}
              />
              <span> Last name </span>
              <p className="error">{formErrorValues.last_name}</p>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <select
                name="gender"
                className="form-control course_selection"
                defaultValue={""}
                value={trainerValues.gender}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span> Gender</span>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="date"
                className="form-control"
                value={trainerValues.date_of_birth}
                onChange={handleChange}
                name="date_of_birth"
              />
              <span> Date of birth</span>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                className="form-control"
                value={trainerValues.address_line_1}
                onChange={handleChange}
                name="address_line_1"
              />
              <span> Address Line 1</span>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                className="form-control"
                value={trainerValues.address_line_2}
                onChange={handleChange}
                name="address_line_2"
              />
              <span> Address Line 2</span>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                className="form-control"
                value={trainerValues.city}
                onChange={handleChange}
                name="city"
              />
              <span> City</span>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                className="form-control"
                value={trainerValues.district}
                onChange={handleChange}
                name="district"
              />
              <span> District</span>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                className="form-control"
                value={trainerValues.state}
                onChange={handleChange}
                name="state"
              />
              <span> State</span>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                className="form-control"
                value={trainerValues.zip_Code}
                onChange={handleChange}
                name="zip_Code"
              />
              <span> ZIP Code</span>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="phone"
                className="form-control"
                value={trainerValues.phone}
                onChange={handleChange}
                name="phone"
              />
              <span> Phone </span>
              <p className="error">{formErrorValues.phone}</p>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="email"
                name="email_address"
                className="form-control"
                value={trainerValues.email_address}
                onChange={handleChange}
              />
              <span> Email address </span>
              <p className="error">{formErrorValues.email_address}</p>
              <span className="border"></span>
            </label>
            <label className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                value={trainerValues.password}
                onChange={handleChange}
              />
              <span> Password</span>
              <p className="error">{formErrorValues.password}</p>
              <span className="border"></span>
            </label>
            <label className="form-group">
              <input
                type="password"
                name="confirmpassword"
                className="form-control"
                value={trainerValues.confirmpassword}
                onChange={handleChange}
              />
              <span> Confirm Password</span>
              <p className="error">{formErrorValues.confirmpassword}</p>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                name="highest_qualification"
                className="form-control"
                value={trainerValues.highest_qualification}
                onChange={handleChange}
              />
              <span> Highest Qualification </span>
              <p className="error">{formErrorValues.highest_qualification}</p>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                name="skill_set"
                className="form-control"
                value={trainerValues.skill_set}
                onChange={handleChange}
              />
              <span> Skill set </span>
              <p className="error">{formErrorValues.skill_set}</p>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                name="current_company_name"
                className="form-control"
                value={trainerValues.current_company_name}
                onChange={handleChange}
              />
              <span> Current company Name</span>
              <p className="error">{formErrorValues.current_company_name}</p>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="text"
                name="current_designation"
                className="form-control"
                value={trainerValues.current_designation}
                onChange={handleChange}
              />
              <span> Current Designation </span>
              <p className="error">{formErrorValues.current_designation}</p>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <select
                name="ictak_course_handling"
                className="form-control course_selection"
                defaultValue={""}
                value={trainerValues.ictak_course_handling}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="FSD">FSD</option>
                <option value="RPA">RPA</option>
                <option value="DSA">DSA</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
              <span> ICTAK Course Handling</span>
              <p className="error">{formErrorValues.ictak_course_handling}</p>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="file"
                id="imageInput"
                className="form-control"
                name="image"
                accept=".jpg,.png"
                required
              />

              <span> Photo *</span>

              <p>Possible file types: JPG,PNG. Maximum file size: 10 MB.</p>

              <span className="border"></span>
            </label>

            <div className="btns">
              <button
                className="alink"
                type="submit"
                value="Submit application"
              >
                {" "}
                Submit{" "}
              </button>
              <br />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default TrainerProfile;

