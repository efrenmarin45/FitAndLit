import styled from 'styled-components';
import { Link as LinkScroll} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';


export const MobileNav = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
` 

export const CloseNav = styled(FaTimes)`
    color: #9D0797;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarContainer = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    font-family: 'Oswald', sans-serif;
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #9D0797;
    cursor: pointer;
    font-size: 3.5rem;
    

    &:hover{
        color: #00C9C8;
        transition: 0.2s ease-in-out;
    }
`