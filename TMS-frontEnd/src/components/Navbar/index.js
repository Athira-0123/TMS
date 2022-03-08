import React from 'react';
import ICTLogo from '../../images/ICTlogo1.png';
import{FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavIcon,MobileIcon, NavMenu, NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) =>{
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavIcon src={ICTLogo}/>
            {/* <NavLogo to="/">ICTAK</NavLogo> */}
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
          <NavMenu>
              <NavItem>
                <NavLinks to="home">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="login">Login</NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks to="enroll">Enroll</NavLinks>
              </NavItem> */}
          <NavBtn>
            <NavBtnLink to='/enroll'>Enroll</NavBtnLink>
          </NavBtn>
          </NavMenu>  
        </NavbarContainer>
      </Nav>
    </>
    
  );
};

export default Navbar;
