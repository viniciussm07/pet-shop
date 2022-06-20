import React from 'react'
//import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer1,
    NavbarContainer2,
    NavLogoWrap,
    Logo,
    Search,
    Label,
    InputWrap,
    Input,
    NavMenu,
    MenuButton,
    LoginButton
} from './NavbarElements.jsx'
// import Logo from "../../images/home/example-logo.png"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer1>
                    <NavLogoWrap href="/">
                        <Logo>
                            Pet Shop
                        </Logo>
                    </NavLogoWrap>
                    <Search>
                        <Label/>
                        <InputWrap>
                            <Input placeholder='Pesquisar'/>
                        </InputWrap>
                    </Search>
                    <LoginButton href="/login">Entre ou Cadastre-se</LoginButton>
                </NavbarContainer1>
                <NavbarContainer2>
                    <NavMenu>
                        <MenuButton href="/animal/cachorro">Cachorro</MenuButton>
                        <MenuButton href="/animal/gato">Gato</MenuButton>
                        <MenuButton href="/animal/passaro">Pássaro</MenuButton>
                    </NavMenu>
                </NavbarContainer2>
            </Nav>
        </>
    )
}

export default Navbar