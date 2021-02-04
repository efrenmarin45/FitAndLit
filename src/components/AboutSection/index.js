import { AboutContainer, TopTitle, AboutWrapper, AboutText } from './AboutElements';
import aboutImg from '../../img/aboutImg.png';

const AboutSection = () => {
    return(
        <>
            <AboutContainer id="about">
                <TopTitle>
                    About Fit&Lit
                </TopTitle>
                <AboutWrapper>
                    <a href='#'><img className='aboutImg' src={aboutImg} alt="Picture of Nora"/></a>
                    <AboutText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci molestie, elementum sapien placerat, fringilla orci. Fusce id ipsum suscipit enim commodo commodo. Sed quis erat nibh. Sed egestas augue sed nisl tempus auctor. Fusce a metus vitae erat molestie gravida. 
                    </AboutText>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection;