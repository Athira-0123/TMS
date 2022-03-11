import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';
import { FooterContainer,FooterWrap,FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,FooterH5, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'; 



const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

        return (
        
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>ICT ACADEMY HQ</FooterLinkTitle>
                            <FooterH5>G1,Ground Floor, Thejaswini Building,</FooterH5>
                            <FooterH5>Technopark, Thiruvananthapuram,</FooterH5>
                            <FooterH5>Kerala, India.</FooterH5>
                            <FooterH5>Mobile: 7594051437</FooterH5>
                            <FooterH5>Phone: +91-471-2700811</FooterH5>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>ICT ACADEMY-CENTRAL REGION</FooterLinkTitle>
                            <FooterH5>Ground Floor,Rajamally Building,</FooterH5>
                            <FooterH5>Infopark, Koratty</FooterH5>
                            <FooterH5>Thrissur, Kerala, India.</FooterH5>
                            <FooterH5>Mobile: 7594051437</FooterH5>
                            <FooterH5>Phone: +91-481-2731050</FooterH5>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>ICT ACADEMY-NORTH REGION</FooterLinkTitle>
                            <FooterH5>2nd Floor, Ul Cyberpark Building,</FooterH5>
                            <FooterH5>Nellikode PO, Kozhikode,</FooterH5>
                            <FooterH5>Kerala, India.</FooterH5>
                            <FooterH5>Mobile: 7594051437</FooterH5>
                            <FooterH5>Phone: +91-495-2431432</FooterH5>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Contact Us</FooterLink>
                            <FooterLink to="/">Terms & Conditions</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>ICTAK</SocialLogo>
                        <WebsiteRights>ICTAK © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="/" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="/" aria-label="Youtube">
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink href="/" aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink href="/" aria-label="Linkedin">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    
    )
}

export default Footer;