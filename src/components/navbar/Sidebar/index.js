import React from 'react';
import {
    MobileNav, 
    Icon, 
    CloseNav, 
    SidebarContainer, 
    SidebarLink,
    SidebarMenu} from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <MobileNav isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseNav />
            </Icon>
            <SidebarContainer>
                <SidebarMenu>
                    <SidebarLink 
                        activeClass="active"
                        onClick={toggle}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-185}
                        duration={500}
                        activeStyle>
                        Home
                    </SidebarLink>
                    <SidebarLink 
                        activeClass="active"
                        onClick={toggle}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-185}
                        duration={500}
                        activeStyle>
                        About
                    </SidebarLink>
                    <SidebarLink 
                        activeClass="active"
                        onClick={toggle}
                        to="solutions"
                        spy={true}
                        smooth={true}
                        offset={-130}
                        duration={500}
                        activeStyle>
                        Solutions
                    </SidebarLink>
                    <SidebarLink 
                        activeClass="active"
                        onClick={toggle}
                        to="transformations"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                        activeStyle>
                        Transformations
                    </SidebarLink>
                    <SidebarLink 
                        activeClass="active"
                        onClick={toggle}
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                        activeStyle>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarContainer>
        </MobileNav>
    )
}

export default Sidebar;