// Trainer Profile

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../components/images/ictak-logo.png";
import "./editprofile.css";
function TrainerProfile(props) {
  const navigation = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchAPI();
  }, []);
  async function fetchAPI() {
    const response = await fetch(`http://localhost:5001/api/trainer/${id}`, {
      headers: {
        "x-access-token": localStorage.getItem("hornbill"),
      },
    });
    const body = await response.json();
    console.log(body);
    setTrainerValues(body);
  }
  // Storing trainer details
  const [trainerValues, setTrainerValues] = useState({
    _id: "",
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

  var base64String = "";
  if (trainerValues.image !== undefined) {
    try {
      base64String = btoa(
        new Uint8Array(trainerValues.image.data.data).reduce(function (
          data,
          byte
        ) {
          return data + String.fromCharCode(byte);
        },
        "")
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    
      <div className="wrapperedit">
        <div id="appbar">
          <img src={Logo} alt='' id="ict"/>
          
          <Link to={'/'} id='log'>Logout</Link>
          <Link to={`/trainer/${id}/view-allocations`} id='viewallo'>View Allocations</Link>
        

        </div>
        <div className=" inner">
          <form>
            <h3>My Profile</h3>
            

            <img
              className="imageprofile"
              style={{
                width: 200,
                height: 200,
                marginRight:'500px',
                resizeMode: "cover",
                backgroundColor: "white",
                borderRadius:'50%'
              }}
              src={`data:image/png;base64,${base64String}`}
              alt=""
            />

            <label className="form-group profile-form-group">
              <span> First name: </span>
              <p className="errorprofile">{trainerValues.first_name}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Last name: </span>
              <p className="errorprofile">{trainerValues.last_name}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Gender: </span>
              <p className="errorprofile">{trainerValues.gender}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Date of birth: </span>
              <p className="errorprofile">{trainerValues.date_of_birth}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Address Line 1: </span>
              <p className="errorprofile">{trainerValues.address_line_1}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Address Line 2: </span>
              <p className="errorprofile">{trainerValues.address_line_2}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> City: </span>
              <p className="errorprofile">{trainerValues.city}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> District: </span>
              <p className="errorprofile">{trainerValues.district}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> State: </span>
              <p className="errorprofile">{trainerValues.state}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> ZIP Code: </span>
              <p className="errorprofile">{trainerValues.zip_Code}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Phone: </span>
              <p className="errorprofile">{trainerValues.phone}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Email address: </span>
              <p className="errorprofile">{trainerValues.email_address}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Highest Qualification: </span>
              <p className="errorprofile">
                {trainerValues.highest_qualification}
              </p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Skill set:</span>
              <p className="errorprofile">{trainerValues.skill_set}</p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Current company Name: </span>
              <p className="errorprofile">
                {trainerValues.current_company_name}
              </p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> Current Designation: </span>
              <p className="errorprofile">
                {trainerValues.current_designation}
              </p>
              <span className="border"></span>
            </label>

            <label className="form-group profile-form-group">
              <span> ICTAK Course Handling: </span>
              <p className="errorprofile">
                {trainerValues.ictak_course_handling}
              </p>
              <span className="border"></span>
            </label>

            <div className="btns">
              <button className="alink" value="Submit application">
                <Link to={`/trainer/edit/${trainerValues._id}`} id='a-edit'>Edit</Link>
              </button>

            </div>

          </form>
        </div>
      </div>
    </>
  );
}
export default TrainerProfile;