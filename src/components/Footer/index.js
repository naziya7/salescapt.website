import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebsiteRights,
    SocialIconLink
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

// To link outside of the website, use normal a tags

const Footer = () => {

    // Function from react-scroll
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Products </FooterLinkTitle>
                            <FooterLink to="/"> Reviews </FooterLink>
                            <FooterLink to="/"> Listings </FooterLink>
                            <FooterLink to="/"> Marketing </FooterLink>
                            <FooterLink to="/"> Investors </FooterLink>
                            <FooterLink to="/"> WebBoost </FooterLink>
                            <FooterLink to="/"> Referral </FooterLink>
                            <FooterLink to="/"> Payments </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Company </FooterLinkTitle>
                            <FooterLink to="/"> Contact </FooterLink>
                            <FooterLink to="/"> Careers </FooterLink>
                            <FooterLink to="/"> Press </FooterLink>
                            <FooterLink to="/"> Partners</FooterLink>
                            <FooterLink to="/"> Legal</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> US Headquarters </FooterLinkTitle>
                            <FooterLink to="/"> 447 Broadway, 2nd Floor, 
                            <br/>New York 10013</FooterLink>
                            {/* <FooterLink to="/"> Ambassadors </FooterLink>
                            <FooterLink to="/"> Agency </FooterLink>
                            <FooterLink to="/"> Influencers </FooterLink> */}
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> India Office</FooterLinkTitle>
                            <FooterLink to="/">1467 Janani HSR Layout Bengaluru, <br/> Karnataka 560102 </FooterLink>
                            {/* <FooterLink to="/"> Facebook </FooterLink>
                            <FooterLink to="/"> Youtube </FooterLink>
                            <FooterLink to="/"> Twitter </FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            SalesCaptain
                        </SocialLogo>
                        <WebsiteRights> SalesCaptain © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer