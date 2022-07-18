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
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";
import { getIsLoggedIn, getToken, getUserType, logout } from "../../services/auth.js";
import { LOGGEDIN } from "../../services/auth.js";
import api from "../../services/api.js";

const Navbar = () => {
  const [loggedNav, setLoggedNav] = useState(false);
  const [meusDados, setMeusDados] = useState("");
  const [numItems, setNumItems] = useState("");

  const changeNav = () => {
    if (getIsLoggedIn() == "true") {
      setLoggedNav(true);
      const userType = getUserType();
      if(userType === "1"){
        setMeusDados("/admin");
      }
      else if (userType ==="2"){
        setMeusDados("/minha-conta");
      }
    } else {
      setLoggedNav(false);
    }
  };

  useEffect(() => {
    const getItems = localStorage.getItem("items");
    console.log("items", getItems);
    if (getItems == "") {
      localStorage.removeItem("items");
    } else {
      const items = JSON.parse(localStorage.getItem("items"));
      if (items != null) {
        console.log(items.length);
        setNumItems(items.length);
      }
    }
    changeNav();
  }, [LOGGEDIN]);

  const confirmarSair = async () => {
    if (window.confirm("Deseja realmente sair?")) {
      const response = await api.get("/customer/auth/destroyToken", {
        headers: { token: getToken() },
      });
      if (response.status === 200) {
        logout();
        window.location.href = "/";
      }
    }
  };

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
            {loggedNav ? null : (
              <LoginButton href="/login">Entre ou Cadastre-se</LoginButton>
            )}
            <CartButton href="/carrinho">
              <AiOutlineShoppingCart size={30} color="#FFA10A" />
              {numItems}
            </CartButton>
            {loggedNav ? (
              <>
              <MyAccountButton href={meusDados}>Minha Conta</MyAccountButton>
              <LoginButton onClick={confirmarSair}><AiOutlineLogout size={25}/> &nbsp; Sair </LoginButton>
              </>
            ) : null}
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
