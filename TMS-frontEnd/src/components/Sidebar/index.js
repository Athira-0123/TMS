import React from 'react';
import {SidebarContainer,Icon,CloseIcon, SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements';

const Sidebar= ({isOpen,toggle})=> {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home"  onClick={toggle}>Home </SidebarLink>
                    <SidebarLink to="login"  onClick={toggle}>Login</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to="/enroll">Enroll</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
}

export default Sidebar;