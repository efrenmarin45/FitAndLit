import styled from 'styled-components';

export const SolutionsContainer = styled.div`
    width: 1800px;
    margin: auto;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1350px){
        width: auto;
    }
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

export const ProductTitleTwo = styled.p`
    background-color: #FFF3FA;
    color: black;
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

export const SolutionBladeLeft = styled.div`
    position: absolute;
    bottom: 0;
	width: 0;
	height: 0;
	border-right: 1800px solid transparent;
	border-left: 0px solid transparent;
	border-bottom: 125px solid #FFF3FA;
    background-color: #E89CED;

    @media screen and (max-width: 1350px){
        display: none;
    }
`

export const SolutionBladeRight = styled.div`
    position: absolute;
    bottom: 0;
	width: 0;
	height: 0;
	border-left: 1800px solid transparent;
	border-right: 0px solid transparent;
	border-bottom: 125px solid #E89CED;
    background-color: #FFF3FA;

    @media screen and (max-width: 1350px){
        display: none;
    }
`

export const SolutionTextOne = styled.p`
    font-size: 3em;
    background-color: #E89CED;

    @media screen and (max-width: 1350px){
        font-size: 1.5em;
        margin: 0 30px 50px 30px;
    }
`

export const SolutionTextTwo = styled.p`
    font-size: 3em;
    background-color: #FFF3FA;
    margin: 0 25px 100px 100px; 

    @media screen and (max-width: 1350px){
        font-size: 1.5em;
        margin: 0 30px 25px 30px;
    }
`

export const SolutionOne = styled.div`
    background-color: #E89CED;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 200px;

    @media screen and (max-width: 1350px){
        flex-wrap: wrap;
        height: 950px;
    }
`

export const SolutionTwo = styled.div`
    background-color: #FFF3FA;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    position: relative;
    padding: 200px 0px;

    @media screen and (max-width: 1350px){
        flex-wrap: wrap;
        height: 950px;
        padding: 0;
    }
`

export const SolutionThree = styled.div`
    background-color: #E89CED;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 200px;

    @media screen and (max-width: 1350px){
        flex-wrap: wrap;
        height: 950px;
    }
`

export const SolutionFour = styled.div`
    background-color: #FFF3FA;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    position: relative;
    padding-bottom: 200px;

    @media screen and (max-width: 1350px){
        flex-wrap: wrap;
        height: 950px;
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
    right: 5%;
    color: white;
    font-size: 2.5em;
    font-weight: bold;
    z-index: 1;
    text-align: center;

    @media screen and (max-width: 1350px){
        position: static;
        width: 200px;
        height: 75px;
        font-size: 1.8em;
        top: 85%;
        right: 40%;
        border: 3px solid white;
        margin: 75px auto 0 auto;
    }
`

export const SolutionButtonTwo = styled.button`
    background-color: #99A4FF;
    width: 300px;
    height: 100px;
    border: 5px solid white;
    border-radius: 65px;
    position: absolute;
    top: 70%;
    left: 5%;
    color: white;
    font-size: 2.5em;
    font-weight: bold;
    z-index: 1;

    @media screen and (max-width: 1350px){
        position: static;
        width: 200px;
        height: 75px;
        font-size: 1.8em;
        top: 85%;
        left: 40%;
        border: 3px solid white;
        margin: 0 auto 100px auto;
    }
`