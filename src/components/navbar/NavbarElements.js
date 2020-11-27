import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #FFFCFE;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((75vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #9D0797;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 30px;

    &.active {
        color: #99A4FF;
    }

    @media screen and (max-width: 1024px){
        font-size: 25px;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #9D0797;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 1;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #99A4FF;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

// export const NavBtn = styled.nav`
//     display: flex;
//     align-items: center;
//     margin-right: 24px;

//     @media screen (max-width: 768px){
//         display: none;
//     }
// `

// export const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: #256;
//     padding: 10px 22px;
//     color: #fff;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover{
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #010606;
//     }
// `