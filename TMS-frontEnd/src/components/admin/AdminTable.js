import React, { useEffect, useState } from 'react';
import './admintable.css';


import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button  from '@mui/material/Button';
import { Table,TableContainer,Paper,TableCell,TableRow,TableHead,TableBody, Container } from '@mui/material';






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
    console.log(body)
    
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
    
    <div className='container'>
    <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 650 }} aria-label="a dense table" className='table'>
        <TableHead >
          <TableRow  className='thead'>
            <TableCell id='id' align="right">Name</TableCell>
            <TableCell id='id' align="right">Email</TableCell>
            <TableCell id='id' align="right">Phone</TableCell>
            <TableCell id='id' align="right">Qualification</TableCell>
            <TableCell id='id' align="right">Skills</TableCell>
            <TableCell id='id' align="right">Current Company</TableCell>
            <TableCell id='id' align="right">Designation</TableCell>
            <TableCell id='id' align="right">Course</TableCell>
            <TableCell id='id' align="right">Employment</TableCell>
            <TableCell id='id' align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tbody'>
          {tableContent.length===0?<p className='text-pending'>No pending requests</p>:
          tableContent.map((row,key) => (
            
            <TableRow key={row.name} className='tablerow' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
              <TableCell id='id_name' align="right">{row.first_name} {row.last_name}</TableCell>
              <TableCell id='id_person' align="right">{row.email_address}</TableCell>
              <TableCell id='id_person' align="right">{row.phone}</TableCell>
              <TableCell id='id_person' align="right">{row.highest_qualification}</TableCell>
              <TableCell id='id_person' align="right">{row.skill_set}</TableCell>
              <TableCell id='id_person' align="right">{row.current_company_name}</TableCell>
              <TableCell id='id_person' align="right">{row.current_designation}</TableCell>
              <TableCell id='id_person' align="right">{row.ictak_course_handling}</TableCell>
              <TableCell id='id_person' align="right">
                  <FormControl required sx={{ m:1,minWidth: 160 }}>
                  
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
              </TableCell>
              <TableCell  id='id_person' align="right">
                <Button variant="outlined" id='approve' onClick={approveTrainer}>Approve</Button>
                <Button variant="outlined" id='reject' onClick={deleteData}>Reject</Button>
                
            
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    
  </div>
    
  );
}

export default AdminTable;

