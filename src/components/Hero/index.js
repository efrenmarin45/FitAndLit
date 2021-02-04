import React from 'react';
import HeroImg from '../../img/heroMainImg.png';
import { HeroContainer, HeroBG, BGImage, HeroImgBttmCircle,  HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    return(
        <HeroContainer id="home">
            <HeroBG>
                <HeroContent>
                    <HeroH1 id="start">Break Through<br></br> Your Limitations</HeroH1>
                    <HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. </HeroP>
                    <HeroImgBttmCircle />
                    <BGImage src={HeroImg} />
                    {/* <BGCircles /> */}
                    {/* <BGCirclesSecond /> */}
                </HeroContent>
            </HeroBG>
        </HeroContainer>
    )
}

export default HeroSection;