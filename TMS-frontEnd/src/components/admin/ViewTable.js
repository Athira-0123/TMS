
import React, { useEffect, useState } from 'react';



import './allocations.css'


function ViewTable(props) {


  const [view, setView] = useState([])
 

  useEffect(()=>{
    fetchAPI();
  },[])

  

  async function fetchAPI(){
    const response=await fetch(`/api/admin/table`)
    const body=await response.json()
    console.log(body)
    setView(body)

    
    
  }

  
  return(
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
          <th>Venue</th>
          
        </tr>
      </thead>
      <tbody>
        {view.map(i=>
          (i.allocations).length>1?
          (i.allocations).map(j=>
            <tr>
            <td data-column='Name'>{i.first_name} {i.last_name}</td>
            <td data-column='Email'>{i.email_address}</td>
            <td data-column='Employment'>{i.emptype}</td>
            <td data-column='Course ID'>{j.courseid}</td>
            <td data-column='Batch ID'>{j.batchid}</td>
            <td data-column='Date'>{j.startdate} to {j.enddate}</td>
            <td data-column='Time'>{j.starttime} to {j.endtime}</td>
            <td data-column='Venue'>{j.venue}</td>
          </tr>
            )
          :(i.allocations).map(j=>
            <tr>
            <td data-column='Name'>{i.first_name} {i.last_name}</td>
            <td data-column='Email'>{i.email_address}</td>
            <td data-column='Employment'>{i.emptype}</td>
            <td data-column='Course ID'>{j.courseid}</td>
            <td data-column='Batch ID'>{j.batchid}</td>
            <td data-column='Date'>{j.startdate} to {j.enddate}</td>
            <td data-column='Time'>{j.starttime} to {j.endtime}</td>
            <td data-column='Venue'>{j.venue}</td>
          </tr>
            )
        )}
      </tbody>
    </table>
    
   
    
      
      
    
    
    
  );
}

export default ViewTable;

/**
 * <div className='cardholder'>
    {view.map((i,key)=> 
        <div className='card' key={key}>
          <p className='p'>Name:<span>{i.first_name} {i.last_name}</span></p>
          <p className='p'>Email:<span>{i.email_address}</span></p>
          <p className='p'>Employed As:<span>{i.emptype}</span></p>
          <p className='p'>No of allocations:<span>{(i.allocations).length}</span></p>
          {(i.allocations).length===0?<p className='p'>No work allocated </p>:
          (i.allocations).map((j,key)=>(
            <div>
              
              <h4>Allocation {key+1}</h4>
              <p className='p'>Course ID:<span>{j.courseid}</span></p>
              <p className='p'>Batch ID:<span>{j.batchid}</span></p>
              <p className='p'>Date:<span>{j.startdate} to {j.enddate}</span></p>
              <p className='p'>Time:<span>{j.starttime} to {j.endtime}</span></p>
              <p className='p'>Venue:<span>{j.venue}</span></p>
            </div>
          ))}

        </div>
        )}
    </div>
 */