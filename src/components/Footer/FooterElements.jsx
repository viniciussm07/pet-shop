import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #18A999;
`

export const FooterWrap = styled.div`
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width:820px)
    {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width:820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:16px;
    text-align: left;
    width: 270px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
`

export const FooterLink = styled.a`
    color: #fff;
    text-decoration:none;
    margin-bottom: 0.5rem;
    font-size: 12px;
    cursor: pointer;

    &:hover{
        color: #117469;
        transition: 0.3s ease-out;
    }
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled.a`
    color:#fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color:#fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
`

export const SocialIconLink = styled.a`
    color:#fff;
    font-size:24px;
    &:hover{
        color: #117469;
        transition: 0.3s ease-out;
    }
`