import styled from 'styled-components';

export const Gradient = styled.div`
    width: 1800px;
    margin: auto;
    height: 300px;
    background: rgb(255,218,240);
    background: linear-gradient(0deg, rgba(255,218,240,1) 0%, rgba(255,243,250,1) 100%);

    @media screen and (max-width: 1350px){
        width: auto;
    }
`

export const TransformationContainer = styled.div`
    width: 1800px;
    background-color: #FFDAF0;
    margin: auto;
    height: 950px;

    @media screen and (max-width: 1350px){
        width: auto;
    }
`

export const TopTitle = styled.p`
    color: #9D0797;
    text-shadow: 2px 2px 2px white;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.5em;
    margin: auto;
    padding-bottom: 100px;
    background-color: #FFDAF0;

    @media screen and (max-width: 800px){
        text-align: center;
        padding-bottom: 0;
    }

    @media screen and (max-width: 500px){
        font-size: 3.8em;
    }

    @media screen and (max-width: 420px){
        font-size: 3.3em;
    }
`

export const TransformWrapper = styled.div`
    margin: auto;
    height: 950px;
    background-color: #FFDAF0;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 1350px){
        width: auto;
        flex-direction: column;
        height: 1700px;
    }
`

export const TransformOne = styled.div`
    background-color: #FFDAF0;
    margin: auto;
    margin-bottom: 75px;
`

export const TransformTwo = styled.div`
    background-color: #FFDAF0;
    margin: auto;
`

export const TransformText = styled.p`
    background-color: #FFDAF0;
    width: 600px;
    font-size: 1.8em;
    margin: 10px auto;

    @media screen and (max-width: 1350px){
        font-size: 1.5em;
    }

    @media screen and (max-width: 700px){
        width: 500px;
    }

    @media screen and (max-width: 550px){
        width: 400px;
        font-size: 1.5em;
    }

    @media screen and (max-width: 500px){
        width: 350px;
        font-size: 1.3em;
    }

    @media screen and (max-width: 400px){
        width: 300px;
        font-size: 1.2em;
    }
`