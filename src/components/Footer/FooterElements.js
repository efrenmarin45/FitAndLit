import styled from 'styled-components';
import { FiMail } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';

export const FooterContainer = styled.div`
    width: 1800px;
    background-color: #8B89E5;
    margin: auto;

    @media screen and (max-width: 1350px){
        width: auto;
    }
`

export const FooterTitle = styled.p`
    color: white;
    text-shadow: 2px 2px 2px #9D0797;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5.5em;
    margin: auto;
    padding-bottom: 100px;
    background-color: #8B89E5;

    @media screen and (max-width: 1350px){
        padding-top: 20px;
    }

    @media screen and (max-width: 800px){
        text-align: center;
        padding-bottom: 100;
    }

    @media screen and (max-width: 700px){
        font-size: 4.5em;
    }

    @media screen and (max-width: 500px){
        font-size: 3.8em;
    }

    @media screen and (max-width: 420px){
        font-size: 3.3em;
    }
`

export const FooterText = styled.p`
    text-align: center;
    background-color: transparent;
    color: white;
    font-size: 2em;
    width: 75%;
    margin: auto;

    @media screen and (max-width: 700px){
        font-size: 1.7em;
        margin-top: 25px;
    }
`

export const FooterContact = styled.div`
    margin: auto;
    display: flex;
    background-color: #8B89E5;
    margin-top: 125px;
    flex-direction: column;
    text-align: center;   
`

export const MeetingInfo = styled.div`
    margin: auto;
    background-color: #8B89E5;
    font-size: 2.2em;
    color: white;

    @media screen and (max-width: 900px){
        margin-top: 75px;   
    }

    @media screen and (max-width: 600px){
        font-size: 1.7em;
    }
`

export const ContactInfo = styled.div`
    margin: auto;
    background-color: #8B89E5;
    font-size: 2.2em;
    color: white;
    margin-bottom: 125px;

    @media screen and (max-width: 600px){
        font-size: 1.7em;
    }
`

export const MailIcon = styled(FiMail)`
    font-size: 1em;
    color: white;
    background-color: inherit;
`

export const MeetingIcon = styled(FaRegCalendarAlt)`
    font-size: 1em;
    color: white;
    background-color: inherit;
`

export const FooterSocial = styled.div`
    margin: auto;
    display: flex;
    background-color: #8B89E5;
    margin-top: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px){
        margin-top: 100px;
    }
`

export const SocialInfo = styled.p`
    margin: auto;
    background-color: inherit;
    font-size: 2em;
    color: white;
    margin-bottom: 25px;

    @media screen and (max-width: 600px){
        font-size: 1.7em;
    }
`

export const SocialIcon = styled(FaInstagram)`
    font-size: 8em;
    background-color: #8B89E5;
    color: #66FBD2;
`

export const Disclaimer = styled.p`
    font-size: 1em;
    color: white;
    background-color: inherit;
    margin: 75px auto;
`

export const Copyright = styled(FaRegCopyright)`
    font-size: 1em;
    color: white;
    background-color: inherit;
`