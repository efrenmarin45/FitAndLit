import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0 10px 25%;
    z-index: 10;
    position: sticky;

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
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
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
        border-bottom: solid 3px #9D0797;
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