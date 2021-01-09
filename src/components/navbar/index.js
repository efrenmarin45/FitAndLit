import React from 'react';
import {Nav, NavLink, Bars, NavbarContainer, NavMenu} from './NavbarElements';
import mainLogo from '../../img/fitandlit.png'
import '../../App.css';

const Navbar = ({ toggle }) => {
    return(
        <>
        <Nav>
            <NavbarContainer>
                <a href="/"><img className="logo" src={mainLogo} alt="logo image"/></a>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
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
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;