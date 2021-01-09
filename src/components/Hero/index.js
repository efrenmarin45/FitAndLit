import React from 'react';
// import MobileImage from './../../img/testImage.jpg';
import { HeroContainer, HeroBG, BGImage, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    return(
        <HeroContainer id="home">
            <HeroBG>
                <HeroContent>
                    <HeroH1>Break Through<br></br> Your Limitations</HeroH1>
                    <HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. </HeroP>
                </HeroContent>
            </HeroBG>
        </HeroContainer>
    )
}

export default HeroSection;