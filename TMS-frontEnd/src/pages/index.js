import React, {useState} from "react";
import HeroSection from "../components/HeroSection";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import CourseCards from "../components/CourseCards";
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = ()=>{
            setIsOpen(!isOpen)
    }
    

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection/>
        <Services/>
        <CourseCards/>
        <Footer/>
        </>

    );
};
export default Home;
