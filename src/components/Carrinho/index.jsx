import { useState, useEffect } from "react";

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
  EnderecoContainer,
  EnderecoOption,
  FreteContainer,
  Radio,
} from "./Carrinho";
import api from "../../services/api";
import { getIdUser } from "../../services/auth";

const Carrinho = () => {
  const [frete, setFrete] = useState("");
  const [userID, setUserID] = useState("");
  const [address, setAddress] = useState("");
  const [addresses, setAddresses] = useState([]);

  //Pegar os endereços do cliente
  useEffect(() => {
    const id = getIdUser();
    const fetchCustomer = async () => {
      const { data } = await api.get("/customer/address/" + id);
      setAddresses(data);
      setUserID(id);
    };
    fetchCustomer();
  }, []);
  const carrinhoCompras = [
    {
      nome: "raçao 1kg",
      descricao: "ração para cachorro",
      preco: 10.5,
      estoque: 10,
    },
    {
      nome: "brinquedo",
      descricao: "brinquedo para cachorro",
      preco: 35.0,
      estoque: 10,
    },
  ];

  const submitHandler = (event) => {
    if (frete == "") {
      event.preventDefault();
      alert("Escolha um frete!");
    }
    if (address == "") {
        event.preventDefault();
        alert("Escolha um endereço!");
      }
    
  };

  const onChange = (e) => {
    let frete = e.target.value;
    setFrete(frete);
    sessionStorage.setItem("Frete", frete);
  };

  const changeAdress = (e) => {
    let address= e.target.value;
    setAddress(address);
    sessionStorage.setItem("Address", address);
  };

  console.log(address);
  console.log(frete);
  if (carrinhoCompras.length > 0) {
    return (
      <>
        <div>
          <InfoContainer>
            <h4>
              <FontBold>SELECIONE O ENDEREÇO</FontBold>
            </h4>
            {addresses.length > 0 &&
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
                      {address == `${endereco._id }` &&
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
                      }
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

                <div>Preço: R$13,75</div>
              </FreteContainer>
            </OrderContainer>
          </InfoContainer>

          <InfoContainer>
            <h4>
              <FontBold>PRODUTOS</FontBold>
            </h4>
            {carrinhoCompras.map((produto, index) => {
              return (
                <OrderContainer key={index}>
                  <div>
                    <OrderTable>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>
                            <FontBold>{produto.nome}</FontBold>
                            <br />
                            {produto.descricao}
                          </td>
                          <td>
                            Quantidade
                            <br />
                            <input
                              type="number"
                              name="quantidade"
                              id="quant"
                              placeholder={1}
                              min={1}
                              max={produto.estoque}
                            />
                            <br />
                            <a href="#">Remover</a>
                          </td>
                          <td>
                            Preço
                            <br />
                            R${produto.preco}
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
            <h5>
              <FontBold>RESUMO</FontBold>
            </h5>

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
