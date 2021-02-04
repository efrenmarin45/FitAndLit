import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 900px;
    position: relative;
    z-index: 1;
    margin: auto;
    width: 1800px;

    @media screen and (max-width: 1800px){
        padding: 0;
    }

    @media screen and (max-width: 1350px){
        height: 700px;
        width: auto;
        padding-top: 75px;
    }
    
    @media screen and (max-width: 700px){
        padding-top: 0px;
    }
`


export const HeroBG = styled.div`
    position: abosolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #9D0797;
    margin: auto;
`


export const BGImage = styled.img`
    position: relative;
    top: -700px;
    right: -83%;
    width: 65%;
    height: 65%;
    -o-object-fit: cover;
    object-fit: cover;
    background: transparent;

    @media screen and (max-width: 1560px){
        width: 65%;
        height: 65%;
        top: -685px;
        right: -75%;
    }

    @media screen and (max-width: 1465px){
        right: -65%;
    }

    @media screen and (max-width: 1350px){
        display: none;
    }
`


export const HeroImgBttmCircle = styled.div`
    position: relative;
    top: 200px;
    left: 100%;
    width: 400px;
    height: 80px;
    border-radius: 50%;
    background-color: #D9C0D9;
    z-index: 0;
    opacity: 0.5;

    @media screen and (max-width: 1560px){
        width: 375px;
        height: 80px;
        left: 93%;
    }

    @media screen and (max-width: 1465px){
        left: 83%;
    }

    @media screen and (max-width: 1350px){
        display: none;
    }
`


export const HeroContent = styled.div`
    max-width: 1100px;
    z-index: 5;
    position: abosolute;
    display: flex;
    flex-direction: column;
    justify-contents: flex-start;
    background-color: #9D0797;
`


export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 110px;
    line-height: 115px;
    text-align: left;
    background-color: #9D0797;
    margin: 45px 0 15px 45px;

    @media screen and (max-width: 960px){
        font-size: 90px;
        margin: 35px 0 15px 35px;
        line-height: 95px;
    }

    @media screen and (max-width: 768px){
        font-size: 80px;
        margin: 35px 0 15px 25px;
        line-height: 85px;
    }

    @media screen and (max-width: 570px){
        font-size: 60px;
        margin: 35px 0 15px 25px;
        line-height: 65px;
    }

    @media screen and (max-width: 480px){
        font-size: 48px;
        margin: 25px 0 15px 25px;
        line-height: 55px;
    }

    @media screen and (max-width: 350px){
        font-size: 32px;
        margin: 35px 0 5px 15px;
        line-height: 30px;
    }
`


export const HeroP = styled.p`
    font-size: 30px;
    color: #fff;
    text-align: left;
    max-width: 750px;
    background-color: #9D0797;
    margin-left: 55px;

    @media screen and (max-width: 960px){
        font-size: 28px;
        margin: 15px 35px 0 35px;
        line-height: 45px;
    }

    @media screen and (max-width: 768px){
        font-size: 26px;
        margin: 15px 35px 0 25px;
        line-height: 40px;
    }

    @media screen and (max-width: 570px){
        font-size: 24px;
        margin: 15px 35px 0 25px;
        line-height: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 22px;
        margin: 0 25px 0 25px;
        line-height: 40px;
    }

    @media screen and (max-width: 350px){
        font-size: 18px;
        margin: 15px 15px 0 15px;
        line-height: 30px;
    }
`