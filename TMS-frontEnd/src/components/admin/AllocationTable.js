// Allocation table
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllocationForm from "./AllocationForm";
import "./allocations.css";

function AllocationTable(props) {
  const [tableContent, settableContent] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  async function fetchAPI() {
    const response = await fetch(`/api/admin/table`);
    const body = await response.json();

    settableContent(body);
  }

  async function deleteData(e) {
    const entry = e.target.parentElement.parentElement.cells[1].innerText;

    const response = await fetch(`/api/admin/deleteData`, {
      method: "delete",
      body: JSON.stringify({ entry }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    alert(result);
    window.location.href = "/admin/allocate";
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Qualification</th>
            <th>Skills</th>
            <th>Current Company</th>
            <th>Designation</th>
            <th>Course</th>
            <th>Employment</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableContent.length === 0
            ? "No approvals"
            : tableContent.map((row, key) => (
                <tr key={key}>
                  <td data-column="Name">
                    {row.first_name} {row.last_name}
                  </td>
                  <td data-column="Email">{row.email_address}</td>
                  <td data-column="Phone">{row.phone}</td>
                  <td data-column="Qualification">
                    {row.highest_qualification}
                  </td>
                  <td data-column="Skills">{row.skill_set}</td>
                  <td data-column="Curent Company">
                    {row.current_company_name}
                  </td>
                  <td data-column="Designation">{row.current_designation}</td>
                  <td data-column="Course">{row.ictak_course_handling}</td>
                  <td data-column="Employment">{row.emptype}</td>
                  <td data-column="">
                    <Button variant="contained" id="allocate">
                      <Link
                        to={`/admin/allocate/${row._id}`}
                        element={<AllocationForm />}
                        id="form"
                      >
                        Allocate
                      </Link>
                    </Button>
                    
                  </td>
                  <td>
                  <Button variant="outlined" id="reject" onClick={deleteData}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}

export default AllocationTable;