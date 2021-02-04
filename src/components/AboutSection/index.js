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
                    My average day can be summed up with one word, busy. My kids take a lot of my time in the morning making sure they're ready for the day. My work then takes up most of my time with meetings, trainings, presentations, and paperwork. Finally, at the end of the day I have to figure out how to make something nutritious and healthy to eat for us.
                    <br></br>
                    <br></br> 
                    This is where TLC (Total Life Changes) benefits me. With their solutions I've can focus on my health while still keeping up with my day. I've enjoyed it so much that I decided to share with others how it may help them too. From my Instagram, where I share my progress, to this site where people can look more into the products. Some of my go to's are listed below. Also, feel free to ask for a sample!
                    </AboutText>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection;