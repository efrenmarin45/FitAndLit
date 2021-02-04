import { FooterContainer, FooterTitle, FooterText, FooterContact, ContactInfo, FooterSocial, SocialInfo, MailIcon, SocialIcon, Disclaimer, Copyright } from './FooterElements';
import Waves from '../../img/waveEnd.png';
import FooterLogo from '../../img/fitandlit.png';

const Footer = () => {
    return(
        <>
            <FooterContainer id="footer">
            <img className="waveBreakEnd" src={Waves} />
                <FooterTitle id='footer'>Contact Fit&Lit</FooterTitle>
                <FooterText>Whether you’re looking for more energy, want to shed pounds, or align yourself with a healthier lifestyle, there is always a solution! If you have any questions or would like a free sample feel free to connect with me below. I am active on Instagram and also via email and I look forward to helping answer any questions.</FooterText>
                <FooterContact>
                    <ContactInfo>Contact<br></br><a className="contactInfo" href="mailto:Fitandlit247@gmail.com"><MailIcon /> Fitandlit247@gmail.com</a>
                    </ContactInfo>
                    <img className="footerLogo" src={FooterLogo} alt="Fit and Lit logo"/>
                </FooterContact>
                <FooterSocial>
                    <SocialInfo>Follow me on Instagram</SocialInfo>
                    <a href="https://www.instagram.com/fitandlitbaybee/?igshid=ky1ukxtj2n0c"><SocialIcon /></a>
                    <Disclaimer>
                        <Copyright />2021 Fit&Lit | Created by Efren Marin
                    </Disclaimer>
                </FooterSocial>
            </FooterContainer>
        </>
    )
}

export default Footer;