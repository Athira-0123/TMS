// View allocations
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

import "./allocations.css";

function ViewTable(props) {
  const [view, setView] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  async function fetchAPI() {
    const response = await fetch(`http://localhost:5001/api/admin/table`);
    const body = await response.json();
    console.log(body);
    setView(body);
  }



  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Employment</th>
          
          <th>Course ID</th>
          <th>Batch ID</th>
          <th>Date</th>
          <th>Time</th>
          <th>Meeting Title</th>
          <th>Venue</th>
          
        </tr>
      </thead>
      <tbody>
      {view.map((i) =>
        i.allocations.length > 1? i.allocations.map((j,key) => (
          <tr>
            <td data-column="Name">
              {i.first_name} {i.last_name}
            </td>
            <td data-column="Email">{i.email_address}</td>
            <td data-column="Employment">{i.emptype}</td>
            
            <td data-column="Course ID">{j.courseid}</td>
            <td data-column="Batch ID">{j.batchid}</td>
            <td data-column="Date">
              {j.startdate} to {j.enddate}
            </td>
            <td data-column="Time">
              {j.starttime} to {j.endtime}
            </td>
            <td data-column='Meeting Title'>{j.title}</td>
            <td data-column="Venue">{j.venue}</td>
            <td>
            
            </td>
          </tr>
        ))
      : i.allocations.map((j,key) => (
          <tr>
            <td data-column="Name">
              {i.first_name} {i.last_name}
            </td>
            <td data-column="Email">{i.email_address}</td>
            <td data-column="Employment">{i.emptype}</td>
            
            <td data-column="Course ID">{j.courseid}</td>
            <td data-column="Batch ID">{j.batchid}</td>
            <td data-column="Date">
              {j.startdate} to {j.enddate}
            </td>
            <td data-column="Time">
              {j.starttime} to {j.endtime}
            </td>
            <td data-column='Meeting Title'>{j.title}</td>
            <td data-column="Venue">{j.venue}</td>
            
          </tr>
        ))
          
        )}
        
      </tbody>
    </table>
  );
}

export default ViewTable;


