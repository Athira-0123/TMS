// Trainer Profile
import { borderRadius } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./profile.css";


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

  const handleSubmit = (e, trainerValues) => {
    e.preventDefault();

    navigation(`/trainer/edit/${trainerValues.id}`, { replace: true });
  };

  var base64String = "";
  if (trainerValues.image !== undefined) {
    base64String = btoa(
      String.fromCharCode(...new Uint8Array(trainerValues.image.data.data))
    );
  }
  

  
  return (
    <>
       <div class="wrapper">
        <div class="sidebar">
          <form onSubmit={handleSubmit}>
            <img
              className="imageprofile"
              style={{
                width: 150,
                height: 150,
                resizeMode: "cover",
                backgroundColor: "white",
              }}
              src={`data:image/png;base64,${base64String}`}
              alt=""/>
         
           
            <p className="name">{trainerValues.first_name} &nbsp;
              {trainerValues.last_name}<br></br>
               Course Handling : {trainerValues.ictak_course_handling}</p>
          </form>
        </div>
        </div>

        
        <div class="wrapper">
        <div class="container">
          <div class="header">
            <h3>Details</h3>
          </div>
          <form onSubmit={handleSubmit}>
         
              <p className="errorprofile"> 
                Email : {trainerValues.email_address} &nbsp; &nbsp;   Phone No: {trainerValues.phone}
                &nbsp; &nbsp;  Date of Birth: {trainerValues.date_of_birth}
              <br></br>Skill : {trainerValues.skill_set} &nbsp; &nbsp; 
              Address : {trainerValues.address_line_1} <br></br>
              City : {trainerValues.city} &nbsp; &nbsp; District :{trainerValues.district} &nbsp; &nbsp;
              State : {trainerValues.state} &nbsp; &nbsp; Zip Code : {trainerValues.zip_Code} <br></br>
              Experience : {trainerValues.current_designation} &nbsp; , {trainerValues.current_company_name}
              
              </p>
           
            <div className="btns">
              <button class="alink" value="Submit application">
                <Link to={`/trainer/edit/${trainerValues._id}`}>Edit</Link>
              </button>
              <br />
              
            </div>
          </form>
        </div>
        </div>


        <div class="wrapper">
    <div class="horizontal">
      <div class="header">
        <h4 class="hh">My Allocations</h4>
      </div>
      <form onSubmit={handleSubmit}>
  <div class="column"></div>
          <div className="btns">
              <button class="alink" >
                <Link to="TrainerAllocation">view</Link>
              </button>
            </div>
      </form>
    </div>
    </div>
    </>
  );
}
export default TrainerProfile
;
