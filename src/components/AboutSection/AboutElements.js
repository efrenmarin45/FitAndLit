import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: auto;
`

export const TopTitle = styled.p`
    color: black;
    text-shadow: 1px 1px 2px #9D0797;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    padding: 35px 0;

    @media screen and (max-width: 1302px){
        font-size: 3em;
        text-shadow: none;
    }
`

export const AboutWrapper = styled.div`
    height: 700px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 1350px){
        flex-wrap: wrap;
    }
`

export const AboutText = styled.div`
    font-size: 2em;
    color: purple;
    margin: 20px 5px 5px 75px;
    width: 800px;

    @media screen and (max-width: 1350px){
        margin: 50px 25px 5px 25px;
        font-size: 1.5em;
    }
`