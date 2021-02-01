import styled from 'styled-components';

export const TransformationContainer = styled.div`
    width: 1800px;
    display: flex;
    background-color: #FFDAF0;
    justify-content: center;
    margin: auto;
`

export const TopTitle = styled.p`
    color: #9D0797;
    text-shadow: 2px 2px 2px white;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    margin-top: 125px;
    background-color: #FFDAF0;

    @media screen and (max-width: 1302px){
        font-size: 3em;
        text-shadow: none;
    }
`