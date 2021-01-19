import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Formb, FormInput, FooterLinkscontainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo, SocialIcon, Websiterights, SocialIcons, SocialIconLink } from './Footer.elements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recievethe latest news and trends
                </FooterSubHeading>

                <FooterSubText>
                    You can unsubscribe at any time
                </FooterSubText>
                <Formb>
                    <FormInput name='email' type='email' placeholder='Your Email' />

                    <Button fontBig>Subscribe</Button>
                </Formb>
            </FooterSubscription>
            <FooterLinkscontainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>

                    <FooterLinkItems>
                        <FooterLinkTitle>Video</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Submit Video</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                        <FooterLink to='/'>Live Reports</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinkscontainer>

            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to="/">
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>

                    <Websiterights>ULTRA 2021</Websiterights>

                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label='Youtube' rel="noopenner noreferrer">
                            <FaYoutube />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                            <FaLinkedin />
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
