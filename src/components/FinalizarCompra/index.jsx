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
  Add,
  AddSubtractCart,
  Row,
  Subtract,
} from "../Produto/ProdutoLayout/ProdutoLayoutElements";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { useEffect, useState } from "react";
import { getIdUser, getToken } from "../../services/auth";
import api from "../../services/api";
import Router, { useRouter } from "next/router";

const FinalizarCompras = () => {
  const router = useRouter();

  const [metodoPagamento, setMetodoPagamento] = useState("");
  const [freteOption, setFreteOption] = useState("");
  const [fretePrice, setFretePrice] = useState("");
  const [addressId, setAddressId] = useState("");
  const [totalOrder, setTotalOrder] = useState("");
  const [totalDiscount, setTotalDiscount] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getPayment = sessionStorage.getItem("Payment");
    const getAddress = sessionStorage.getItem("Address");
    const getFreteOption = sessionStorage.getItem("FreteOption");
    const getFretePrice = sessionStorage.getItem("FretePrice");
    const getTotalOrder = sessionStorage.getItem("TotalOrder");
    const getTotalDiscount = sessionStorage.getItem("TotalDiscount");

    const addressId = sessionStorage.getItem("Address");

    setMetodoPagamento(getPayment);
    setFreteOption(getFreteOption);
    setFretePrice(getFretePrice);
    setTotalOrder(getTotalOrder);
    setTotalDiscount(getTotalDiscount);
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

    //Pegar os items do carrinho
    const items = JSON.parse(localStorage.getItem("items"));
    if (items != null) {
      setCartItems(items);
    }
  }, []);

  const confirmarPedido = async () => {
    if (metodoPagamento != "Cartão") {
      setValorTotal(totalDiscount);
    } else {
      setValorTotal(totalOrder);
    }

    const token = getToken();
    const data = {
      token: token,
      payment: metodoPagamento,
      address: address._id,
      frete: {
        option: freteOption,
        price: fretePrice,
      },
      total: valorTotal,
      items: cartItems,
    };
    if (window.confirm("Deseja realizar pedido?")) {
      const response = await api.post("/orders/", data);
      console.log(response);
      if (response.status === 201) {
        alert("Pedido Realizado");
        sessionStorage.removeItem("Payment");
        sessionStorage.removeItem("Address");
        sessionStorage.removeItem("FreteOption");
        sessionStorage.removeItem("FretePrice");
        sessionStorage.removeItem("TotalOrder");
        sessionStorage.removeItem("TotalDiscount");
        sessionStorage.removeItem("TotalProducts");
        localStorage.removeItem("items");
      } else {
        alert("Erro ao processar pedido!");
      }
      Router.reload();
    }
  };

  if (cartItems != "") {
    return (
      <>
        <div>
          <InfoContainer>
            <h4>
              <FontBold>MEUS DADOS</FontBold>
            </h4>
            <OrderContainer>
              {user.name} ({user.email})
              <br />
              CPF: {user.cpf}
            </OrderContainer>
            <h4>
              <FontBold>ENTREGA</FontBold>
            </h4>
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
            <h4>
              <FontBold>PAGAMENTO</FontBold>
            </h4>
            <OrderContainer>{metodoPagamento}</OrderContainer>
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
                                <Subtract>
                                  <HiMinusSm />
                                </Subtract>
                                {produto.quantity}
                                <Add>
                                  <HiPlusSm />
                                </Add>
                              </AddSubtractCart>
                            </Row>
                            <br />
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
