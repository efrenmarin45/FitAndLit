import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: auto;
    max-width: 1800px;
    margin: auto;

    @media screen and (max-width: 1350px){
        width: auto;
    }
`

export const TopTitle = styled.p`
    color: black;
    text-shadow: 1px 1px 2px #9D0797;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    margin-top: 125px;

    @media screen and (max-width: 1302px){
        font-size: 3em;
        text-shadow: none;
        margin-top: 75px;
    }

    @media screen and (max-width: 700px){
        margin-bottom: 75px;
    }
`

export const AboutWrapper = styled.div`
    height: 800px;
    margin: 0 auto 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    
    @media screen and (max-width: 1350px){
        flex-wrap: wrap;
        height: 900px;
    }

    @media screen and (max-width: 800px){
        height: 900px;
    }
`

export const AboutText = styled.div`
    font-size: 1.5em;
    color: purple;
    margin: 20px 5px 5px 75px;
    width: 800px;

    @media screen and (max-width: 1350px){
        margin: 50px 25px 5px 25px;
        font-size: 1.5em;
    }

    @media screen and (max-width: 700px){
        font-size: 1.2em;
    }
`