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
                
                <th id='th'>Course ID</th>
                <th id='th'>Batch ID</th>
                <th id='th'>Date</th>
                <th id='th'>Time</th>
                <th id='th'>Meeting Title</th>
                <th id='th'>Venue</th>
                
                </tr>
            </thead>
            <tbody>
            {tableContent.map((i) =>
                <tr>
                
                <td id='td' data-column="Course ID">{i.courseid}</td>
                <td id='td' data-column="Batch ID">{i.batchid}</td>
                <td id='td' data-column="Date">
                {i.startdate} to {i.enddate}
                </td>
                <td id='td' data-column="Time">
                {i.starttime} to {i.endtime}
                </td>
                <td id='td' data-column='Meeting Title'>{i.title}</td>
                <td id='td' data-column="Venue">{i.venue}</td>
                <td id='td'>
                
                </td>
            </tr>
                )}
                
            </tbody>
    </table>
            
        </div>
    );
}

export default TrainerAllocations;