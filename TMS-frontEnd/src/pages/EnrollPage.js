import React, {useState} from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import CreateEnrollment from "../components/enrollment/CreateEnrollment";
import Footer from "../components/footer";

const EnrollPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CreateEnrollment />
      <Footer />
    </>
  );
};

export default EnrollPage;
