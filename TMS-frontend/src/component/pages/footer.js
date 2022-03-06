import React from "react";
import "./footer.css";

const Footer = ()=> {
    return (
        <div className="main-footer">
            <div className="containrer">
            {/* <div className="py-4"> */}
            <div className="row">
                <div className="col">
                <h4>ICT ACADEMY HQ</h4>
                <ul className="list unstyled">
                    <ul>G1,Ground Floor, Thejaswini Building,</ul>
                    <ul>Technopark, Thiruvananthapuram,</ul>
                    <ul>Kerala, India.</ul>
                    <ul>Mobile: 7594051437</ul>
                    <ul>Phone: +91-471-2700811</ul> 
                </ul>
            {/* </div> */}
            </div>
            <div className="col">
                <h4>ICT ACADEMY-CENTRAL REGION</h4>
                <ul className="list unstyled">
                    <ul>Ground Floor,Rajamally Building,</ul>
                    <ul>Infopark, Koratty,</ul>
                    <ul>Thrissur, Kerala, India.</ul>
                    <ul>Phone: 7594051437 /+91-481-2731050</ul>
                </ul>
            </div>
            
            <div className="col">
                <h4>ICT ACADEMY-NORTH REGION</h4>
                <ul className="list unstyled">
                    <ul>2nd Floor, Ul Cyberpark Building,</ul>
                    <ul>Nellikode PO, Kozhikode,</ul>
                    <ul>Kerala, India.</ul>
                    <ul>Phone: 7594051437 /+91-495-2431432</ul>
                </ul>
            </div>
            </div>
            <br/>
            <div className="row">
                <p className="col-sm">
                   &copy;{new Date().getFullYear()} ICT Academy|All rights reserved| Terms of Service |Privacy
                </p>
            </div>
            </div>
       </div>
    );
};
export default Footer