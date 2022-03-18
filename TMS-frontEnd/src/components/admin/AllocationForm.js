// Allocation form
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./form.css";

function AllocationForm(props) {
  const { id } = useParams();

  const [formData, setFormData] = useState([]);
// Storing allocated details
  const [allocate, setAllocate] = useState({
    courseid: "",
    batchid: "",
    startdate: "",
    enddate: "",
    starttime: "",
    endtime: "",
    venue: "",
    title:""
  });

  const navigation = useNavigate();

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllocate({ ...allocate, [name]: value });
    
  };

  async function fetchAPI() {
    const response = await fetch(`/api/admin/${id}`);
    const body = await response.json();
    
    const result = Object.values(body)[0];
    setFormData(result);
  }

  async function handleSubmit() {
   

    const response = await fetch(
      `/api/admin/allocate/${id}`,
      {
        method: "post",
        body: JSON.stringify(allocate),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const result = await response.json();

    alert(result.message);
    if(result.message==='Work allocated and email sent'){
      navigation('/admin/view-allocations')
    }
  }

  return (
    <>
      <h2>ALLOCATE TRAINER</h2>

      <form
        className="cbp-mc-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="cbp-mc-column">
          <label htmlFor="id">Trainer ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData._id}
            disabled
            style={{ backgroundColor: "rgb(115, 143, 143)" }}
          />

          <label htmlFor="name">Trainer name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.first_name + " " + formData.last_name}
            disabled
            style={{ backgroundColor: "rgb(115, 143, 143)" }}
          />

          <label htmlFor="employment">Employed As</label>
          <input
            type="text"
            id="employment"
            name="employment"
            value={formData.emptype}
            disabled
            style={{ backgroundColor: "rgb(115, 143, 143)" }}
          />

          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.ictak_course_handling}
            disabled
            style={{ backgroundColor: "rgb(115, 143, 143)" }}
          />
        </div>


        <div className="cbp-mc-column">
          <label htmlFor="courseid">Course ID</label>
          <select id="courseid" name="courseid" onChange={handleChange} value={formData.courseid}>
            <option className="courseselect"></option>
            <option className="courseselect">01_DSA</option>
            <option className="courseselect">02_FSD</option>
            <option className="courseselect">03_RPA</option>
            <option className="courseselect">04_CSA</option>
          </select>

          <label htmlFor="batchid">Batch ID</label>
          <select id="batchid" name="batchid" onChange={handleChange} value={formData.batchid}>
            <option className="courseselect"></option>
            <option className="courseselect">DSA001</option>
            <option className="courseselect">DSA002</option>
            <option className="courseselect">DSA003</option>
            <option className="courseselect">FSD001</option>
            <option className="courseselect">FSD002</option>
            <option className="courseselect">FSD003</option>
            <option className="courseselect">CSA001</option>
            <option className="courseselect">CSA002</option>
            <option className="courseselect">CSA003</option>
            <option className="courseselect">RPA001</option>
            <option className="courseselect">RPA002</option>
            <option className="courseselect">RPA003</option>
          </select>

          <label htmlFor="start">Start date</label>
          <input
            type="date"
            id="start"
            name="startdate"
            onChange={handleChange}
            value={formData.startdate}
          />

          <label htmlFor="end">End date</label>
          <input type="date" id="end" name="enddate" onChange={handleChange} value={formData.enddate} />

        </div>


        <div className="cbp-mc-column">
          <label htmlFor="s-time">Start Time</label>
          <input
            type="time"
            id="s-time"
            name="starttime"
            onChange={handleChange}
            value={formData.starttime}
          />

          <label htmlFor="e-time">End Time</label>
          <input
            type="time"
            id="e-time"
            name="endtime"
            onChange={handleChange}
            value={formData.endtime}
          />

          <label htmlFor="venue">Meeting/venue link</label>
          <input type="text" id="venue" name="venue" onChange={handleChange} value={formData.venue} />

          <label htmlFor="title">Meeting title</label>
          <input type="text" id="title" name="title" onChange={handleChange} value={formData.title} />


        </div>


        <div>
          <div className="cbp-mc-submit-wrap">
            <input className="cbp-mc-submit" value="Allocate" type="submit" />
            <input
              className="cbp-mc-submit"
              value="Close"
              onClick={() => navigation("/admin/allocate")}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default AllocationForm;
