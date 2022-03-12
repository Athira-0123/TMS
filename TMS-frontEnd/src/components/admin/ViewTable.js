import React, { useEffect } from 'react';

function ViewTable(props) {

  useEffect(()=>{
    fetchAPI();
  },[])

  

  async function fetchAPI(){
    const response=await fetch(`http://localhost:5001/api/admin/table`)
    const body=await response.json()
    console.log(body)
    
    
  }

  
  return (
    <div>
      
    </div>
  );
}

export default ViewTable;