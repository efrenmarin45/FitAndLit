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
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="solutions" onClick={toggle}>
                        Solutions
                    </SidebarLink>
                    <SidebarLink to="transformations" onClick={toggle}>
                        Transformations
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarContainer>
        </MobileNav>
    )
}

export default Sidebar;