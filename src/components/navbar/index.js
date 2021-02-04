import React from 'react'; 
import {Nav, NavLink, Bars, NavbarContainer, NavMenu} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

import mainLogo from '../../img/fitandlit.png'
import '../../App.css';


const Navbar = ({ toggle }) => {

    const reachHome = () => {
        scroll.scrollToTop(100);
    };


    return(
        <>
        <Nav>
            <NavbarContainer>
                <a href="/"><img className="logo" src={mainLogo} alt="logo image"/></a>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink 
                        activeClass="active" 
                        to="/" 
                        onClick={reachHome}
                        spy={true}
                        activeStyle>
                        Home
                    </NavLink>
                    <NavLink 
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-235}
                        duration={500}
                        activeStyle>
                        About
                    </NavLink>
                    <NavLink 
                        activeClass="active"
                        to="solutions"
                        spy={true}
                        smooth={true}
                        offset={-130}
                        duration={500}
                        activeStyle>
                        Solutions
                    </NavLink>
                    <NavLink 
                        activeClass="active"
                        to="transformations"
                        spy={true}
                        smooth={true}
                        offset={190}
                        duration={500}
                        activeStyle>
                        Transformations
                    </NavLink>
                    <NavLink 
                        activeClass="active"
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={290}
                        duration={500}
                        activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;