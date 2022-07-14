import React, { useState, useEffect } from 'react'
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
    LoginButton,
    CartButton,
    MyAccountButton,
    WrapButtons
} from './NavbarElements.jsx'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { getIsLoggedIn } from '../../services/auth.js'
import { LOGGEDIN } from '../../services/auth.js'

const Navbar = () => {
    const [loggedNav, setLoggedNav] = useState(false);

    const changeNav = () => {
        if(getIsLoggedIn() == 'true'){
            setLoggedNav(true);
        } else{
            setLoggedNav(false);
        }
    }

    useEffect(() => {
        changeNav();
    }, [LOGGEDIN])

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
                    <WrapButtons>
                        { loggedNav ? null : <LoginButton href="/login">Entre ou Cadastre-se</LoginButton>}
                        {loggedNav ? <CartButton href="/carrinho"><AiOutlineShoppingCart size={30} color="#FFA10A"/></CartButton> : null}
                        {loggedNav ? <MyAccountButton href="/minha-conta">Minha Conta</MyAccountButton> : null}
                    </WrapButtons>
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