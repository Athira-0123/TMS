import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './allocations.css'




function AllocationTable(props) {
    const [tableContent, settableContent] = useState([])
    
  
    
  
    useEffect(()=>{
      fetchAPI();
    },[])
  
    
  
    async function fetchAPI(){
      const response=await fetch(`http://localhost:5001/api/admin/allocationtable`)
      const body=await response.json()
      console.log(body)
      
      settableContent(body)
      
    }
    const navigation = useNavigate()
  
  function gotoform(){
    navigation('/admin/allocate/form')
  }
  
  
    
    return (
      <>
      <form className="form-search" method="get" action="#">
            <input type="search" name="search" placeholder="I am looking for.."/>
            <button type="submit">Search</button>
            <i class="fa fa-search"></i>
    </form>

      
      
      
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
        </tr>
      </thead>
      <tbody>
        {tableContent.map((row,key)=>
          <tr>
            <td data-column="Name">{row.first_name} {row.last_name}</td>
            <td data-column="Email">{row.email_address}</td>
            <td data-column="Phone">{row.phone}</td>
            <td data-column="Qualification">{row.highest_qualification}</td>
            <td data-column="Skills">{row.skill_set}</td>
            <td data-column="Curent Company">{row.current_company_name}</td>
            <td data-column="Designation">{row.current_designation}</td>
            <td data-column="Course">{row.ictak_course_handling}</td>
            <td data-column="Employment">{row.emptype}</td>
            <td data-column="">
            <Button variant="contained" id='allocate' onClick={gotoform}>Allocate</Button>
            
            </td>
        </tr>
        )}
        
        
      </tbody>
</table>
</>
      
      
      

    
      
    );
}

export default AllocationTable;