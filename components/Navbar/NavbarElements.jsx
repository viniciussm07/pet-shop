import styled from 'styled-components'
import Link from 'next/link';
import { Link as LinkS } from 'react-scroll'
import Image from 'next/image'

export const Nav = styled.nav`
    background: #18A999;
    height: 100px;
    margin-top:-80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;

    @media screen and (max-width:1000px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

`



export const ImgWrap = styled.div`
    max-width:270px;
    height:100%;
`

export const NavLogo = styled(Image)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    width: 100%;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width:900px){

    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color: #fff;
}`

export const NavMenu = styled.ul`
display: flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;

@media screen and (max-width:900px){
    display:none;
}
`

export const NavItems = styled.li`
    margin: 30px;
    height: 70px;
`

export const NavLinks = styled.a`
    color:#fff;
    background-color: blue;
    margin: 10px;
    display: flex;
    text-decoration:none;
    padding: 2rem 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 900px){
        display: none;
    }
 `

export const NavBtnLink = styled.a`
    border-radius:5px;
    background-color: ${props => props.theme.main};
    white-space:nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606; 
    }
 `

NavBtnLink.defaultProps = {
    theme: {
      main: "#FFA10A"
    }
  }
