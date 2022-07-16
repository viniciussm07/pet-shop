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
import { FreteContainer, Radio } from "./Carrinho";
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
  const [quantidade, setQuantidade] = useState([]);
  const [stock, setStock] = useState([]);
  var quantidadeAux = [];
  var stockAux = [];

  //Pegar os endereços do cliente
  useEffect(() => {
    const id = getIdUser();
    const fetchAdresses = async () => {
      const { data } = await api.get("/customer/addresses/" + id);
      setAddresses(data);
    };
    fetchAdresses();

    const items = JSON.parse(localStorage.getItem("items"));
    
    if (items != null && items[0] != null) {
      setCartItems(items);
    }

    sessionStorage.setItem("FretePrice", fretePrice);
    sessionStorage.setItem("TotalProducts", 0);
    sessionStorage.setItem("TotalOrder", 0);
    sessionStorage.setItem("TotalDiscount", 0);
  }, []);

  useEffect(() => {
    cartItems.map((item, index )=>{
      quantidadeAux[index] = item.quantity;
      stockAux[index] = item.stock;
    })
    setQuantidade(quantidadeAux);
    setStock(stockAux);
    definirValores();
  }, [cartItems]);

  useEffect(() => {
    cartItems.map((item, index)=>{
      item.quantity = quantidade[index];
    })  
    atualizarQuant();
    definirValores();

  }, [quantidadeAux]);


  const definirValores = () => {
    const total = 0;
    if (cartItems.length === 1) {
      total = cartItems[0].price * cartItems[0].quantity;
    } else {
      cartItems.map((item) => {
        total = total + item.price * item.quantity;
      });
    }


    sessionStorage.setItem("TotalProducts", total);
    const totalOrder = total + fretePrice;
    sessionStorage.setItem("TotalOrder", totalOrder);
    sessionStorage.setItem("TotalDiscount", totalOrder * 0.9);
  };

  const submitHandler = (event) => {
    if (freteOption == "" || address == "") {
      event.preventDefault();
      alert("Preencha as informações!");
    }
      sessionStorage.setItem("FreteOption", freteOption);
      sessionStorage.setItem("FretePrice", fretePrice);
  };


  const changeAdress = (address) => {
    setAddress(address);
    sessionStorage.setItem("Address", address);
  };

  const removerItem = (e, param) => {
    e.preventDefault();

    if (cartItems[1] == undefined) {
      localStorage.removeItem("items");
    } else if (cartItems[2] == undefined) {
      cartItems.splice(param, 1);

      console.log(cartItems[0]);
      localStorage.setItem("items", JSON.stringify([cartItems[0]]));
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
    }
    Router.reload();
  };

  const atualizarQuant = () => {
    cartItems.map((item, index) => {
      if (index == 0){
        localStorage.setItem("items", JSON.stringify([cartItems[0]]));
      }
      else{
        // Copiando o array existente no localstorage e readicionando os objetos.
      localStorage.setItem(
        "items",
        // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        JSON.stringify([...JSON.parse(localStorage.getItem("items")), item])
      );
      }
      
    });
  };

  const addQuantidade = (param) =>{
    if (quantidade[param] < stock[param]){
      const attQuant = quantidade[param] + 1;
      definirQuantidades(param, attQuant);
    }
  }

  const subQuantidade = (param) =>{
    if (quantidade[param] > 1){
      const attQuant = quantidade[param] - 1;
      definirQuantidades(param, attQuant);
    }
  }

  const definirQuantidades = (param, attQuant) =>{
      let newQuant = [];
      quantidade.map((quant, index) =>{
        newQuant[index] = quant;
      })

      newQuant[param] = parseInt(attQuant);
      setQuantidade(newQuant);
      console.log(cartItems);
  }

  if (cartItems != "") {
    return (
      <>
        <div onLoad={definirValores}>
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
                        onChange={e => changeAdress(e.target.value)}
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
                    onChange={e => setFreteOption(e.target.value)}
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
                                <Subtract onClick={() => subQuantidade(index)}>
                                    <HiMinusSm />
                                </Subtract>
                                {quantidade[index]}
                                <Add onClick={() => addQuantidade(index)}>
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
                            R${quantidade[index] * produto.price}
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
