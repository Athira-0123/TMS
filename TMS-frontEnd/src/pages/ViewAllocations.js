import React from 'react';
import Footer from '../components/footer/Footer';
import AdminNav from '../components/navbar/AdminNav';

function ViewAllocations(props) {
    return (
        <div>
            <AdminNav/>
            <h1 style={{color:'#1976d2',marginTop:'200px',textAlign:'center'}} >VIEW ALLOCATIONS PAGE</h1>
            <Footer/>
        </div>
    );
}

export default ViewAllocations;