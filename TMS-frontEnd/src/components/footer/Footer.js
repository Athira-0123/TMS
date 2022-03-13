import React from "react";
import {
Box,
Container,
Row,
Column,
Heading,
FooterLink
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			
            <Heading>ICT ACADEMY HQ</Heading>
                
                    <FooterLink>G1,Ground Floor, Thejaswini Building,</FooterLink>
                    <FooterLink>Technopark, Thiruvananthapuram,</FooterLink>
                    <FooterLink>Kerala, India.</FooterLink>
                    <FooterLink>Mobile: 7594051437</FooterLink>
                    <FooterLink>Phone: +91-471-2700811</FooterLink> 
                
		</Column>
		<Column>
        <Heading>ICT ACADEMY-CENTRAL REGION</Heading>
                
                    <FooterLink>Ground Floor,Rajamally Building,</FooterLink>
                    <FooterLink>Infopark, Koratty,</FooterLink>
                    <FooterLink>Thrissur, Kerala, India.</FooterLink>
                    <FooterLink>Phone: 7594051437 /+91-481-2731050</FooterLink>
                
		</Column>
		<Column>
        <Heading>ICT ACADEMY-NORTH REGION</Heading>
                
                    <FooterLink>2nd Floor, Ul Cyberpark Building</FooterLink>
                    <FooterLink>Nellikode PO, Kozhikode,</FooterLink>
                    <FooterLink>Kerala, India.</FooterLink>
                    <FooterLink>Phone: 7594051437 /+91-495-2431432</FooterLink>
                
		</Column>
		
		</Row>
        
	</Container>
    <div>
            <p className="col-sm" style={{color:'black'}}>
                &copy;{new Date().getFullYear()} ICT Academy|All rights reserved| Terms of Service |Privacy
            </p>
        </div>
	</Box>
);
};
export default Footer;


/*
import React from "react";
import "./footer.css";

const Footer = ()=> {
    return (
        <div className="main-footer">
            <div className="containrer">
            
            <div className="row">
                <div className="col">
                <Heading>ICT ACADEMY HQ</Heading>
                <FooterLink className="list unstyled">
                    <FooterLink>G1,Ground Floor, Thejaswini Building,</FooterLink>
                    <FooterLink>Technopark, Thiruvananthapuram,</FooterLink>
                    <FooterLink>Kerala, India.</FooterLink>
                    <FooterLink>Mobile: 7594051437</FooterLink>
                    <FooterLink>Phone: +91-471-2700811</FooterLink> 
                </FooterLink>
            </div>
            <div className="col">
                <Heading>ICT ACADEMY-CENTRAL REGION</Heading>
                <FooterLink className="list unstyled">
                    <FooterLink>Ground Floor,Rajamally Building,</FooterLink>
                    <FooterLink>Infopark, Koratty,</FooterLink>
                    <FooterLink>Thrissur, Kerala, India.</FooterLink>
                    <FooterLink>Phone: 7594051437 /+91-481-2731050</FooterLink>
                </FooterLink>
            </div>
            
            <div className="col">
                <Heading>ICT ACADEMY-NORTH REGION</Heading>
                <FooterLink className="list unstyled">
                    <FooterLink>2nd Floor, FooterLink Cyberpark Building,</FooterLink>
                    <FooterLink>Nellikode PO, Kozhikode,</FooterLink>
                    <FooterLink>Kerala, India.</FooterLink>
                    <FooterLink>Phone: 7594051437 /+91-495-2431432</FooterLink>
                </FooterLink>
            </div>
            </div>
            <br/>
            <div className="row">
                <p className="col-sm">
                   &copy;{new Date().getFFooterLinklYear()} ICT Academy|All rights reserved| Terms of Service |Privacy
                </p>
            </div>
            </div>
       </div>
    );
};
export defaFooterLinkt Footer*/
 