import React from 'react';
import HeroImg from '../../img/heroMainImg.png';
import { HeroContainer, HeroBG, BGImage, HeroImgBttmCircle,  HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    return(
        <HeroContainer id="home">
            <HeroBG>
                <HeroContent>
                    <HeroH1 id="start">Break Through<br></br> Your Limitations</HeroH1>
                    <HeroP>
                    <br></br>
                    We all need help sometimes. Just like your car needs care and attention so does your body. If your goal is to lose weight, increase your energy, or simply live a healthier life then you need a boost! Break through what's been holding you back and achieve your goals. 
                    </HeroP>
                    <HeroImgBttmCircle />
                    <BGImage src={HeroImg} />
                </HeroContent>
            </HeroBG>
        </HeroContainer>
    )
}

export default HeroSection;