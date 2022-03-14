import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import CreateEnrollment from "../components/enrollment/CreateEnrollment";
import Footer from "../components/footer";

const EnrollPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <CreateEnrollment />
      <Footer />
    </>
  );
};

export default EnrollPage;
