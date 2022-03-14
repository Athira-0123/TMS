import React, {useState} from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import Login from "../components/login/Login";
import Footer from "../components/footer";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
