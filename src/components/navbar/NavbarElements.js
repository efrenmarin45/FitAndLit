import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import {FaBars} from 'react-icons/fa';


export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto 20px auto;
    padding-top: 25px;
    z-index: 50;
    position: sticky;
    top: 0;

    @media screen and (max-width: 1600px){
        margin: 15px 0 0 0;
    }

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
        margin: 15px 0 0 0;
    }
`


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    z-index: 51;
    width: 100%;
    max-width: 1100px;
    margin: auto;
`


export const NavLink = styled(LinkScroll)`
    color: #9D0797;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin: 50px 0;
    height: 100%;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 28px;

    &.active {
        border-bottom: solid 5px #9D0797;
    }

    &:hover {
        color: #00C9C8;
    }
    
    @media screen and (max-width: 1185px){
        font-size: 25px;
    }

    @media screen and (max-width: 850px){
        font-size: 22px;
    }
`


export const Bars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2.5rem;
        cursor: pointer;
        color: #9D0797;
    }

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #00C9C8;
    }
`


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    font-family: 'Oswald', sans-serif;

    @media screen and (max-width: 768px){
        display: none;
    }
`