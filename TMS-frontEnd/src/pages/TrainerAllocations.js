import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import Logo from "../components/images/ictak-logo.png";
import './editprofile.css'

function TrainerAllocations(props) {
    const { id } = useParams();
    const [tableContent, settableContent] = useState([]);

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
    settableContent(body.allocations)
    
  }
    return (
        <div className='editpage'>
            <div id="appbar">
                <img src={Logo} alt='' id="ict"/>
                
                <Link to={'/'} id='log'>Logout</Link>
                <Link to={`/trainer/${id}`} id='viewallo'>View Profile</Link>
    
            </div>

            <table>
            <thead>
                <tr id='thead'>
                
                <th>Course ID</th>
                <th>Batch ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>Meeting Title</th>
                <th>Venue</th>
                
                </tr>
            </thead>
            <tbody>
            {tableContent.map((i) =>
                <tr>
                
                <td data-column="Course ID">{i.courseid}</td>
                <td data-column="Batch ID">{i.batchid}</td>
                <td data-column="Date">
                {i.startdate} to {i.enddate}
                </td>
                <td data-column="Time">
                {i.starttime} to {i.endtime}
                </td>
                <td data-column='Meeting Title'>{i.title}</td>
                <td data-column="Venue">{i.venue}</td>
                <td>
                
                </td>
            </tr>
                )}
                
            </tbody>
    </table>
            
        </div>
    );
}

export default TrainerAllocations;