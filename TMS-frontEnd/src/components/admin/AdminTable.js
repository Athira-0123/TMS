import React, { useEffect, useState } from 'react';
import './admintable.css';


import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button  from '@mui/material/Button';






function AdminTable(props) {
  const [tableContent, settableContent] = useState([])
  const [employment,setEmployment]=useState()

  

  useEffect(()=>{
    fetchAPI();
  },[])

  function handleChange(e){
  
    setEmployment(e.target.value)
    
   

  }

  async function fetchAPI(){
    const response=await fetch(`http://localhost:5001/api/enrollments`)
    const body=await response.json()
    //console.log(body)
    
    settableContent(body)
    
  }

  async function approveTrainer(e){
    const emp=(e.target.parentElement).parentElement.cells[8].innerText
    //console.log(emp)
    if(emp==='None'){
      alert("Enter employment")
    }else{
      const email=(e.target.parentElement).parentElement.cells[1].innerText
      const response=await fetch(`http://localhost:5001/api/admin/approve`,{
      method:'put',
      body:JSON.stringify({email,employment}),
      headers:{
        'Content-type':'application/json'
      }
      

    })
    const result=await response.json()
    alert(result)
    window.location.href='/admin'
    
    }
    
   

  }


  async function deleteData(e){
    const entry=(e.target.parentElement).parentElement.cells[1].innerText
    //console.log(entry)
    const response=await fetch(`http://localhost:5001/api/admin/deleteData`,{
      method:'delete',
      body:JSON.stringify({entry}),
      headers:{
        'Content-type':'application/json'
      }
      

    })
    const result=await response.json()
    alert(result)
    window.location.href='/admin'
    
  }


  
  return (
    <>
    
    
    
      <table className='table'>
      
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
        {tableContent.length===0?<p className='text-pending'>No pending requests</p>:
        tableContent.map((row,key)=>
          <tr key={key}>
            <td data-column="Name">{row.first_name} {row.last_name}</td>
            <td data-column="Email">{row.email_address}</td>
            <td data-column="Phone">{row.phone}</td>
            <td data-column="Qualification">{row.highest_qualification}</td>
            <td data-column="Skills">{row.skill_set}</td>
            <td data-column="Curent Company">{row.current_company_name}</td>
            <td data-column="Designation">{row.current_designation}</td>
            <td data-column="Course">{row.ictak_course_handling}</td>
            <td data-column="Employment">
            <FormControl required sx={{ m:1,minWidth: 160 }} size='small'>
                  
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    label="Employment *"
                    className='select'
                    style={{fontSize:'16px'}}
                    defaultValue={'none'}
                    onChange={handleChange}
                    
                  >
                    <MenuItem value='none'>None</MenuItem>
                    <MenuItem value='Internal'>Internal</MenuItem>
                    <MenuItem value='Empanelled'>Empanelled</MenuItem>
                    <MenuItem value='Industry Expert'>Industry Expert</MenuItem>
                  </Select>
                  
                </FormControl>
            </td>
            <td data-column="">
                <Button variant="outlined" id='approve' onClick={approveTrainer}>Approve</Button>
                <Button variant="outlined" id='reject' onClick={deleteData}>Reject</Button>
            
            </td>
        </tr>
        )}
        
        
      </tbody>
    </table>

      
    </>
    
  
    
  );
}

export default AdminTable;
