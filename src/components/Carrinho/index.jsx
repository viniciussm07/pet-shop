import { useState, useEffect } from "react";
import api from "../../services/api";
import { getIdUser } from "../../services/auth";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Resumo from "../ResumoPedido";

import {
  Button,
  ButtonContainer,
  OrderContainer,
  OrderTable,
  InfoContainer,
  FontBold,
  ButtonInverted,
} from "../Utils/style";
import {
  FreteContainer,
  Radio,
} from "./Carrinho";
import {
  Add,
  AddSubtractCart,
  Row,
  Subtract,
} from "../Produto/ProdutoLayout/ProdutoLayoutElements";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

const Carrinho = () => {
  const router = useRouter();
  const [freteOption, setFreteOption] = useState("");
  const [address, setAddress] = useState("");
  const fretePrice = 13.75;
  const [addresses, setAddresses] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //Pegar os endereços do cliente
  useEffect(() => {
    const id = getIdUser();
    const fetchAdresses = async () => {
      const { data } = await api.get("/customer/addresses/" + id);
      setAddresses(data);
    };
    fetchAdresses();

    const items = JSON.parse(localStorage.getItem("items"));
    if (items != null) {
      setCartItems(items);
    }
  }, []);

  const submitHandler = (event) => {
    if (freteOption == "") {
      event.preventDefault();
      alert("Escolha um frete!");
    }
    if (address == "") {
      event.preventDefault();
      alert("Escolha um endereço!");
    }
  };

  const onChange = (e) => {
    let freteOption = e.target.value;
    setFreteOption(freteOption);
    sessionStorage.setItem("Frete Option", freteOption);
    sessionStorage.setItem("Frete Price", fretePrice);
  };

  const changeAdress = (e) => {
    let address = e.target.value;
    setAddress(address);
    sessionStorage.setItem("Address", address);
  };

  const removerItem = (e, param) => {
    e.preventDefault();
    console.log("a ser removido:", cartItems[param]);
    //cartItems.splice(param, 1);
    console.log("removido:", cartItems);

    if (cartItems[1] == undefined) {
      localStorage.removeItem("items");
      Router.reload();
    } else if (cartItems[2] == undefined) {
      console.log("só tem dois elementos");
      cartItems.splice(param, 1);
      console.log("sobrou:", cartItems[0]);

      console.log(cartItems[0]);
      localStorage.setItem("items", JSON.stringify([cartItems[0]]));
      Router.reload();
    } else {
      cartItems.splice(param, 1);
      localStorage.removeItem("items");
      localStorage.setItem("items", JSON.stringify([cartItems[0]]));
      cartItems.splice(0, 1);

      cartItems.map((item) => {
        // Copiando o array existente no localstorage e readicionando os objetos.
        localStorage.setItem(
          "items",
          // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
          JSON.stringify([...JSON.parse(localStorage.getItem("items")), item])
        );
      });
      Router.reload();
    }
    //localStorage.setItem("items",  JSON.stringify(cartItems));
  };

  function addQuantidade(e, param) {
    const quantidade = cartItems[param].quantity + 1;
    console.log("quantidade", quantidade);
    if (quantidade <= cartItems[param].stock) {
      cartItems[param].quantity = quantidade;
    }
    setCartItems(cartItems);
    atualizarQuant();
  }

  function subQuantidade(e, param) {
    const quantidade = cartItems[param].quantity - 1;
    if (quantidade >= 1) {
      cartItems[param].quantity = quantidade;
    }
    setCartItems(cartItems);
    atualizarQuant();
  }

  const atualizarQuant = () => {
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify([cartItems[0]]));
    cartItems.splice(0, 1);

    cartItems.map((item) => {
      // Copiando o array existente no localstorage e readicionando os objetos.
      localStorage.setItem(
        "items",
        // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        JSON.stringify([...JSON.parse(localStorage.getItem("items")), item])
      );
    });
    Router.reload();
  };

  const style = {
    cursor: "default",
    color: "transparent",
    textShadow: "0px 0px black",
  };

  console.log(cartItems);

  if (cartItems != "") {
    return (
      <>
        <div>
          <InfoContainer>
            <h4>
              <FontBold>SELECIONE O ENDEREÇO</FontBold>
            </h4>
            {addresses != "" &&
              addresses.map((endereco, index) => {
                return (
                  <OrderContainer key={index}>
                    <Radio>
                      <input
                        type="radio"
                        id={endereco.identificacao}
                        name="endereco"
                        value={endereco._id}
                        required
                        onChange={changeAdress}
                      />
                      <label htmlFor={endereco.identificacao}>
                        &nbsp;<FontBold>{endereco.identificacao}</FontBold>
                      </label>
                      {address == `${endereco._id}` && (
                        <div>
                          <br />
                          {endereco.logradouro}
                          <br />
                          Número: {endereco.numero}, {endereco.complemento}
                          <br />
                          CEP: {endereco.cep} - {endereco.cidade},{" "}
                          {endereco.estado}
                          <br />
                        </div>
                      )}
                    </Radio>
                  </OrderContainer>
                );
              })}

            <ButtonContainer>
              <Link href={"/minha-conta/adicionar-endereco"}>
                <Button>Adicionar Endereço</Button>
              </Link>
            </ButtonContainer>
          </InfoContainer>

          <InfoContainer>
            <h4>
              <FontBold>FRETE</FontBold>
            </h4>
            <OrderContainer>
              <FreteContainer>
                <Radio>
                  <input
                    type="radio"
                    id="correio"
                    name="frete"
                    value="Correios - 7 a 10 dias úteis"
                    required
                    onChange={onChange}
                  />
                  <label htmlFor="correio">
                    &nbsp;Correios - 7 a 10 dias úteis
                  </label>
                </Radio>

                <div>Preço: R${fretePrice}</div>
              </FreteContainer>
            </OrderContainer>
          </InfoContainer>

          <InfoContainer>
            <h4>
              <FontBold>PRODUTOS</FontBold>
            </h4>
            {cartItems.map((produto, index) => {
              return (
                <OrderContainer key={index}>
                  <div>
                    <OrderTable>
                      <tbody>
                        <tr>
                          <td>
                            <img src={produto.image} width="50px"></img>
                          </td>
                          <td>
                            <a href={"/produto/" + produto.slug}>
                              <FontBold>{produto.title}</FontBold>
                            </a>
                            <br />
                          </td>
                          <td>
                            Quantidade
                            <Row>
                              <AddSubtractCart>
                                <Subtract
                                  onClick={(event) => {
                                    subQuantidade(event, index);
                                  }}
                                >
                                  <HiMinusSm />
                                </Subtract>
                                {produto.quantity}
                                <Add
                                  onClick={(event) => {
                                    addQuantidade(event, index);
                                  }}
                                >
                                  <HiPlusSm />
                                </Add>
                              </AddSubtractCart>
                            </Row>
                            <br />
                            <a
                              href=""
                              onClick={(event) => {
                                removerItem(event, index);
                              }}
                            >
                              Remover
                            </a>
                          </td>
                          <td>
                            Preço
                            <br />
                            R${produto.quantity * produto.price}
                          </td>
                        </tr>
                      </tbody>
                    </OrderTable>
                  </div>
                </OrderContainer>
              );
            })}
          </InfoContainer>
        </div>
        <div>
          <InfoContainer>
            <h4>
              <FontBold>RESUMO</FontBold>
            </h4>

            <Resumo />

            <ButtonContainer>
              <Link href={"/pagamento"}>
                <Button type="submit" onClick={submitHandler}>
                  IR PARA O PAGAMENTO
                </Button>
              </Link>
            </ButtonContainer>
            <ButtonContainer>
              <Link href={"/"}>
                <ButtonInverted>CONTINUAR COMPRANDO</ButtonInverted>
              </Link>
            </ButtonContainer>
          </InfoContainer>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h5>
            <FontBold>Seu carrinho está vazio!</FontBold>
          </h5>
        </div>
      </>
    );
  }
};

export default Carrinho;
