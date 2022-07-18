import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getToken, getIsLoggedIn, getIdUser } from "../../services/auth";

import {
  FontBold,
  Button,
  OrderContainer,
  OrderTable,
  InfoContainer,
  StyledDiv,
  H4,
  ButtonContainer,
  ContainerColumn,
} from "../Utils/style";

const UserPage = () => {
  const [user, setUser] = useState("");
  const [pedido, setPedido] = useState("");

  //Obter os dados do cliente logado
  useEffect(() => {
    const id = getIdUser();
    const fetchCustomer = async () => {
      const { data } = await api.get("/customer/" + id);
      console.log(data);
      setUser(data);
    };
    fetchCustomer();

    const fetchLastOrder = async () => {
      const { data } = await api.get("/orders/last/" + id);
      console.log("order", data);
      setPedido(data[0]);
    };
    fetchLastOrder();
  }, []);


  return (
    <>
      <ContainerColumn>
        <InfoContainer>
          <StyledDiv>
            <h4>
              <FontBold>Informações de Acesso</FontBold>
            </h4>
            <Link href="/minha-conta/meus-dados">
              <Button>Meus Dados</Button>
            </Link>
          </StyledDiv>
          <span>{user.name}</span>
          <br />
          <span>{user.email}</span>
        </InfoContainer>

        <InfoContainer>
          <StyledDiv>
            <h4>
              <FontBold>Meus Pedidos</FontBold>
            </h4>
            {pedido != "" && (
              <Link href="/minha-conta/meus-pedidos">
                <Button>Ver todos</Button>
              </Link>
            )}
          </StyledDiv>

          {pedido == "" ? (
            <ButtonContainer>
              <h6>
                <FontBold>
                  <p>Você ainda não fez nenhum pedido.</p>
                </FontBold>
              </h6>
              <h6>Aproveite nossas ofertas!</h6>
            </ButtonContainer>
          ) : (
            <OrderContainer>
              <OrderTable>
                <tbody>
                  <tr>
                    <th>NUMERO</th>
                    <th>DATA</th>
                    <th>VALOR</th>
                    <th>PAGAMENTO</th>
                    <th>STATUS</th>
                  </tr>
                  <tr>
                    <td>#{pedido.number}</td>
                    <td>{pedido.createDate.substr(0, 10)}</td>
                    <td>{pedido.total}</td>
                    <td>{pedido.payment}</td>
                    <td>{pedido.status}</td>
                  </tr>
                </tbody>
              </OrderTable>
              <Link href={"/minha-conta/meus-pedidos/" + pedido.number}>
                <Button>Detalhes</Button>
              </Link>
            </OrderContainer>
          )}
        </InfoContainer>
      </ContainerColumn>
    </>
  );
};

export default UserPage;
