import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import mainLogo from '../../img/fitandlit.png'
import '../../App.css';

const Navbar = () => {
    return(
        <>
        <Nav>
            <NavLink to="/">
                <img className="logo" src={mainLogo} alt="logo image"/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/solutions" activeStyle>
                    Solutions
                </NavLink>
                <NavLink to="/transformations" activeStyle>
                    Transformations
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}


export default Navbar;