import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    ImgWrap,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements.jsx'
import Logo from "../../images/home/example-logo.png"

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const theme = {
        main: "#B6DECF"
      }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <ImgWrap>
                        <NavLogo to='/' onClick={toggleHome} src={Logo} alt="Logo Sustento" />
                    </ImgWrap>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavBtn>
                                <NavBtnLink theme={theme} href='/'>Cachorro</NavBtnLink>
                            </NavBtn>
                        </NavItems>
                        <NavItems>
                            <NavBtn>
                                <NavBtnLink theme={theme} href='/'>Gato</NavBtnLink>
                            </NavBtn>
                        </NavItems>
                        <NavItems>
                            <NavBtn>
                                <NavBtnLink theme={theme} href='/'>Pássaro</NavBtnLink>
                            </NavBtn>
                        </NavItems>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href='/'>Entre ou Cadastre-se</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar