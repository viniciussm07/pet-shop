import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements'
import {FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

const Footer = () => {


    const toggleHome = ()=>{
        scroll.scrollToTop()
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Endereços</FooterLinkTitle>
                        <FooterLink>Rua , Nº Centro, São Carlos/SP - CEP 00.000-000</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contato</FooterLinkTitle>
                        <FooterLink href="mailto:petshop@petshop.com.br"><GrMail/> contato@sustentoenergiasolar.com.br</FooterLink>
                        <FooterLink href="/"><FaWhatsapp/> (16) 99999-9999</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'
                    onClick={toggleHome}
                    >
                        Pet-Shop
                    </SocialLogo>
                    <WebsiteRights>
                        Pet-Shop © {new Date().getFullYear()} Todos os direitos reservados.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer