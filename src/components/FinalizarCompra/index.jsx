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
import { getIdUser } from "../../services/auth";
import api from "../../services/api";
import { useRouter } from "next/router";

const FinalizarCompras = () => {
  const router = useRouter();

  const [metodoPagamento, setMetodoPagamento] = useState("");
  const [freteOption, setFreteOption] = useState("");
  const [fretePrice, setFretePrice] = useState("");
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const getAddress = sessionStorage.getItem("Address");
    const getFreteOption = sessionStorage.getItem("Frete Option");
    const addressId = sessionStorage.getItem("Address");

    if (getAddress == null || getFreteOption == null || addressId == null) {
      alert("Dados inválidos!");
      router.push("/carrinho");
    } else {
      setMetodoPagamento(sessionStorage.getItem("Payment"));
      setFreteOption(sessionStorage.getItem("Frete Option"));
      setFretePrice(sessionStorage.getItem("Frete Price"));

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
    }
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

  if (carrinhoCompras.length > 0) {
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
              <Link href={"#"}>
                <Button>CONFIRMAR PEDIDO</Button>
              </Link>
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
