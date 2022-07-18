import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getIdUser } from "../../services/auth";

import {
  Button,
  OrderContainer,
  OrderTable,
  InfoContainer,
  bold,
} from "../Utils/style";

export const Pedidos = () => {
  const [meusPedidos, setMeusPedidos] = useState([]);
  useEffect(() => {
    const id = getIdUser();
    const fetchCustomer = async () => {
      const { data } = await api.get("/orders/" + id);
      console.log(data);
      setMeusPedidos(data);
    };
    fetchCustomer();
  }, []);

  return (
    <>
      <div>
        {meusPedidos != "" ? (
          <InfoContainer>
            {meusPedidos.map((pedido, index) => {
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
                          <td>#{pedido.number}</td>
                          <td>{pedido.createDate.substr(0, 10)}</td>
                          <td>R$ {(pedido.total).toFixed(2)}</td>
                          <td>{pedido.payment}</td>
                          <td>{pedido.status}</td>
                        </tr>
                      </tbody>
                    </OrderTable>
                  </div>

                  <Link href={"/minha-conta/meus-pedidos/" + pedido.number}>
                    <Button>Detalhes</Button>
                  </Link>
                </OrderContainer>
              );
            })}
          </InfoContainer>
        ) : (
          <div>
            <h5>
              <bold>
                <p>Você ainda não fez nenhum pedido.</p>
              </bold>
            </h5>
            <h5>Aproveite nossas ofertas!</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default Pedidos;
