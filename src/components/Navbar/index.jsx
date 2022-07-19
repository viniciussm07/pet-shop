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

const Navbar = () => {
  const [loggedNav, setLoggedNav] = useState(false);
  const [meusDados, setMeusDados] = useState("");
  const [numItems, setNumItems] = useState("");
  const [loggedAdmin, setLoggedAdmin] = useState(false);

  // Variáveis para pesquisa na searchBar
  const [searchResults, setSearchResults] = useState([]);
  const [tags, setTag] = useState("");

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

  const search = async (event) => {
    event.preventDefault();

    const searchTags = tags.split(" ");
    const produtos = []


    for (let i = 0; i < searchTags.length; i++) {
      const response = await api.get(`/products/tags/${searchTags[i]}`);
      for (let j = 0; j < response.data.length; j++){
        produtos.push(response.data[i]);
      }
    }
    
    console.log(produtos);
    setSearchResults(produtos);
  };

  return (
    <>
      <Nav>
        <NavbarContainer1>
          <NavLogoWrap href="/">
            <Logo>Pet Shop</Logo>
          </NavLogoWrap>
          <Search onSubmit={search}>
            <Label />
            <InputWrap>
              <Input
                  placeholder="Pesquisar" name="tag"
                  value={tags}
                  onChange={(e) => setTag(e.target.value.toLowerCase())}
                  type="text"
                  required />
              <SearchButton>
                <Img src="/images/lupa50x50.webp" alt="" width={20} height={20}/>
              </SearchButton>
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
                <LoginButton backgroundColor="transparent" onClick={confirmarSair} color="#ffa10a">
                  <AiOutlineLogout size={25} /> &nbsp; Sair{" "}
                </LoginButton>
              </>
            ) : null}
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
