import styled from 'styled-components';

export const SolutionsContainer = styled.div`
    width: 1800px;
    margin: auto;
    display: flex;
    flex-direction: column;
`

export const ProductTitle = styled.p`
    background-color: #E89CED;
    color: white;
    text-shadow: 2px 2px 2px #9D0797;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    padding-top: 25px;

    @media screen and (max-width: 1302px){
        font-size: 3em;
    }
`

export const SolutionButton = styled.button`
    background-color: #99A4FF;
    width: 300px;
    height: 100px;
    border: 5px solid white;
    border-radius: 65px;
    position: absolute;
    top: 75%;
    right: 10%;
    color: white;
    font-size: 2.5em;
    font-weight: bold;
`

export const SolutionOne = styled.div`
    background-color: #E89CED;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const SolutionTextOne = styled.p`
    font-size: 3em;
    background-color: #E89CED;
`

export const SolutionTwo = styled.div`
    background-color: #FFF3FA;
    height: 600px;
`

export const SolutionThree = styled.div`
    background-color: green;
`

export const SolutionFour = styled.div`
    background-color: yellow;
`