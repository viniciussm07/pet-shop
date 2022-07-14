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
import { useEffect, useState } from "react";
import { getIdUser, getToken } from "../../services/auth";
import api from "../../services/api";
import { useRouter } from "next/router";

const FinalizarCompras = () => {
  const router = useRouter();

  let [metodoPagamento, setMetodoPagamento] = useState("");
  let [freteOption, setFreteOption] = useState("");
  let [fretePrice, setFretePrice] = useState("");
  let [addressId, setAddressId] = useState("");
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const getPayment = sessionStorage.getItem("Payment")
    const getAddress = sessionStorage.getItem("Address");
    const getFreteOption = sessionStorage.getItem("Frete Option");
    const getFretePrice = sessionStorage.getItem("Frete Price");
    const addressId = sessionStorage.getItem("Address");

      setMetodoPagamento(getPayment);
      setFreteOption(getFreteOption);
      setFretePrice(getFretePrice);
      setAddressId(addressId);

      const id = getIdUser();
      const fetchCustomer = async () => {
        const { data } = await api.get("/customer/" + id);
        setUser(data);
      };

      const fetchAddress = async () => {
        const { data } = await api.get("/customer/addresses/" + id);
        const address = data.filter((address) => address._id === addressId);
        setAddress(address[0]);
      };
      fetchAddress();
      fetchCustomer();
    
  }, []);

  

  const confirmarPedido = async () =>{
    console.log("pagmento:", metodoPagamento);
    console.log("freteOption:", freteOption);
    console.log("fretePrice:", fretePrice);
    console.log("addressId:", address._id);
    const token = getToken();
    const data = {
      token:token,
      payment: metodoPagamento,
      address: address._id,
      frete:{
        option: freteOption,
        price: fretePrice
      },
      items: [],
    };
    if (window.confirm("Deseja realizar pedido?")) {
      const response = await api.post("/orders/", data);
      console.log(response);
      if (response.status === 201) {
        alert("Pedido Realizado");
      } else {
        alert("Erro ao processar pedido!");
      }
    }
  }

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

  if (cartItems != "") {
    return (
      <>
        <div>
          <InfoContainer>
            <h5>
              <FontBold>MEUS DADOS</FontBold>
            </h5>
            <OrderContainer>
              {user.name} ({user.email})
              <br />
              CPF: {user.cpf}
            </OrderContainer>
            <h5>
              <FontBold>ENTREGA</FontBold>
            </h5>
            <OrderContainer>
              Destinatário: {user.name} <br />
              Rua: {address.logradouro}, Número: {address.numero}
              <br />
              CEP: {address.CEP} - {address.cidade}/{address.estado}
              <br />
              <br />
              Frete: {freteOption} <br />
              Custo: R${fretePrice}
            </OrderContainer>
            <h5>
              <FontBold>PAGAMENTO</FontBold>
            </h5>
            <OrderContainer>{metodoPagamento}</OrderContainer>
          </InfoContainer>

          <InfoContainer>
            <h5>
              <FontBold>PRODUTOS</FontBold>
            </h5>
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
                              min={1}
                              max={produto.estoque}
                              disabled
                            />
                            <br />
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
                <Button onClick={confirmarPedido}>CONFIRMAR PEDIDO</Button>
            </ButtonContainer>
            <ButtonContainer>
              <Link href={"/pagamento"}>
                <ButtonInverted>VOLTAR PARA PAGAMENTO</ButtonInverted>
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

export default FinalizarCompras;
