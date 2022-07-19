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
  SearchButton,
  Img
} from "./NavbarElements.jsx";
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";
import {
  getIsLoggedIn,
  getToken,
  getUserType,
  logout,
} from "../../services/auth.js";
import { LOGGEDIN, USER_TYPE } from "../../services/auth.js";
import api from "../../services/api.js";

const Navbar = (props) => {
  const [loggedNav, setLoggedNav] = useState(false);
  const [meusDados, setMeusDados] = useState("");
  const [numItems, setNumItems] = useState("");
  const [loggedAdmin, setLoggedAdmin] = useState(false);

  const changeNav = () => {
    if (getIsLoggedIn() == "true") {
      setLoggedNav(true);
      const userType = getUserType();
      if (userType === "1") {
        setLoggedAdmin(true);
        setMeusDados("/admin");
      } else if (userType === "2") {
        setMeusDados("/minha-conta");
        setLoggedAdmin(false);
      }
    } else {
      setLoggedNav(false);
    }
  };

  useEffect(() => {
    const getItems = localStorage.getItem("items");
    // console.log("items", getItems);
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
  }, [LOGGEDIN, USER_TYPE]);

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
          {props.children}
          <WrapButtons>
            <CartButton href="/carrinho">
              <AiOutlineShoppingCart size={30} color="#FFA10A" />
              {numItems}
            </CartButton>
            {loggedNav ? (
              <>
                <MyAccountButton href={meusDados}>Minha Conta</MyAccountButton>
                <LoginButton backgroundColor="transparent" onClick={confirmarSair} color="#ffa10a">
                  <AiOutlineLogout size={25} /> &nbsp; Sair{" "}
                </LoginButton>
              </>
            ) : <LoginButton href="/login">Entre ou Cadastre-se</LoginButton>}
          </WrapButtons>
        </NavbarContainer1>
        {loggedAdmin ? (
          <NavbarContainer2>
            <NavMenu>
              <MenuButton href="/admin/lista-clientes">Clientes</MenuButton>
              <MenuButton href="/admin/lista-produtos">Produtos</MenuButton>
            </NavMenu>
          </NavbarContainer2>
        ) : (
          <NavbarContainer2>
            <NavMenu>
              <MenuButton href="/animal/cachorro">Cachorro</MenuButton>
              <MenuButton href="/animal/gato">Gato</MenuButton>
              <MenuButton href="/animal/passaro">Pássaro</MenuButton>
            </NavMenu>
          </NavbarContainer2>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
