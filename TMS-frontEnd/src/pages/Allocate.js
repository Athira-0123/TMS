
import React from 'react';
import '@fontsource/roboto/300.css';
import AllocationTable from '../components/admin/AllocationTable';
import Footer from '../components/footer';
import AdminNav from '../components/navbar/AdminNav';

function Allocate(props) {
    return (
        <div>
            <AdminNav/>
            
            <AllocationTable/>
            <Footer/>
        </div>
    );
}

export default Allocate;
