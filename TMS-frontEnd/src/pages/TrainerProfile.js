import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './profile.css'

function TrainerProfile(props) {
    const {id}=useParams()
    const [trainerData, setTrainerData] = useState([])

    useEffect(() => {
      fetchAPI()
    
      
    }, []);

    async function fetchAPI(){
        const response=await fetch(`http://localhost:5001/api/trainer/${id}`,{
            headers:{
                'x-access-token':localStorage.getItem('hornbill')
            }
        })
        const body=await response.json()
        console.log(body)
        
        //const result=Object.entries(body)
        //console.log(result)
        //setTrainerData(result)
        


}    
    return (
        <div className='profile'>
            <h1>Trainer profile</h1>
            
            
            
            
            
        </div>
    );
}

export default TrainerProfile;

