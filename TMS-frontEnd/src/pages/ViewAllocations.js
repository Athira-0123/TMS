import React from 'react';
import ViewTable from '../components/admin/ViewTable';
import Footer from '../components/footer';
import AdminNav from '../components/navbar/AdminNav';

function ViewAllocations(props) {
    return (
        <div>
            <AdminNav/>
            <ViewTable/>
            <Footer/>
        </div>
    );
}

export default ViewAllocations;
