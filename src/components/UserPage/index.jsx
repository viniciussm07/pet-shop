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
      const { order } = await api.get("/orders/last/" + id);
      console.log("order", order);
      setPedido(order);
    };
    fetchLastOrder();
  }, []);

  const pedidos = [];
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
            {pedidos.length > 1 && (
              <Link href="/minha-conta/meus-pedidos">
                <Button>Ver todos</Button>
              </Link>
            )}
          </StyledDiv>

          {pedidos.length < 1 && (
            <ButtonContainer>
              <h6>
                <FontBold>
                  <p>Você ainda não fez nenhum pedido.</p>
                </FontBold>
              </h6>
              <h6>Aproveite nossas ofertas!</h6>
            </ButtonContainer>
          )}

          {pedidos.map((pedido, index) => {
            return (
              <OrderContainer key={index}>
                <div>
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
                        <td>#{pedido.numero}</td>
                        <td>{pedido.data}</td>
                        <td>{pedido.valor}</td>
                        <td>{pedido.pagamento}</td>
                        <td>{pedido.status}</td>
                      </tr>
                    </tbody>
                  </OrderTable>
                </div>

                <Link href={"/minha-conta/meus-pedidos/" + pedido.numero}>
                  <Button>Detalhes</Button>
                </Link>
              </OrderContainer>
            );
          })}
        </InfoContainer>
      </ContainerColumn>
    </>
  );
};

export default UserPage;
