import React, { useState, useEffect } from "react";
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
  WrapButtons,
} from "./NavbarElements.jsx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getIsLoggedIn } from "../../services/auth.js";

const Navbar = () => {
  const [loggedNav, setLoggedNav] = useState(false);
  let isLoggedIn;

  const changeNav = () => {
    isLoggedIn = getIsLoggedIn();
    if (isLoggedIn === "true") {
      setLoggedNav(true);
    } else {
      setLoggedNav(false);
    }
  };

  useEffect(() => {
    changeNav();
  }, [isLoggedIn]);

  return (
    <>
      <Nav>
        <NavbarContainer1>
          <NavLogoWrap href="/">
            <Logo>Pet Shop</Logo>
          </NavLogoWrap>
          <Search>
            <Label />
            <InputWrap>
              <Input placeholder="Pesquisar" />
            </InputWrap>
          </Search>
          <WrapButtons>
            <LoginButton loggedNav={loggedNav} href="/login">
              Entre ou Cadastre-se
            </LoginButton>
            <CartButton loggedNav={loggedNav} href="/carrinho">
              <AiOutlineShoppingCart />
            </CartButton>
            <MyAccountButton loggedNav={loggedNav} href="/minha-conta">
              Minha Conta
            </MyAccountButton>
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
  );
};

export default Navbar;
