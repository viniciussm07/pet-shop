import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getIdUser } from "../../services/auth";
import {
  bold,
  OrderContainer,
  OrderTableMaior,
  InfoContainer,
  FontBold,
} from "../Utils/style";
import {
  Add,
  AddSubtractCart,
  Row,
  Subtract,
} from "../Produto/ProdutoLayout/ProdutoLayoutElements";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

export const Pedido = () => {
  const [pedidoEncontrado, setPedidoEncontrado] = useState(false);
  const [pedidoCustomerName, setPedidoCustomerName] = useState("");
  const [pedidoNumber, setPedidoNumer] = useState("");
  const [pedidoStatus, setPedidoStatus] = useState("");
  const [pedidoPayment, setPedidoPayment] = useState("");
  const [pedidoDate, setPedidoDate] = useState("");
  const [pedidoAddress, setPedidoAddress] = useState("");
  const [pedidoItems, setPedidoItems] = useState([]);
  const [pedidoFrete, setPedidoFrete] = useState({});
  const [pedidoTotal, setPedidoTotal] = useState("");
  const [address, setAddress] = useState("");

  //Obter os dados do cliente logado
  useEffect(() => {
    const path = window.location.pathname.substr(26, 32);
    console.log(path);
    const id = getIdUser();
    const fetchOrder = async () => {
      const { data } = await api.get("/orders/one/" + path);
      if (data != "") {
        setPedidoEncontrado(true);
        setPedidoCustomerName(data[0].customer.name);
        setPedidoNumer(data[0].number);
        setPedidoStatus(data[0].status);
        setPedidoPayment(data[0].payment);
        setPedidoAddress(data[0].address);
        setPedidoDate(data[0].createDate);
        setPedidoFrete(data[0].frete);
        setPedidoItems(data[0].items);
        setPedidoTotal(data[0].total);

        const response = await api.get(
          "/customer/addresses/" + data[0].customer._id
        );
        const dataAddress = response.data.filter(
          (address) => address._id == data[0].address
        );
        setAddress(dataAddress[0]);
        console.log("data address:", dataAddress[0]);

        response.data.forEach((address) => {
          if (address._id === data[0].address) {
            setAddress(address);
          }
        });
      }
    };

    fetchOrder();
  }, []);

  console.log(pedidoItems);
  return (
    <>
      <div>
        {pedidoEncontrado == true ? (
          <InfoContainer>
            <h4>
              <bold>DATA DO PEDIDO:</bold> {pedidoDate.substr(0, 10)}
            </h4>
            <h4>
              <bold>STATUS:</bold> {pedidoStatus}
            </h4>
            <br />
            <h5>
              <bold>ENTREGA</bold>
            </h5>
            <OrderContainer>
              Destinatário: {pedidoCustomerName} <br />
              Rua: {address.logradouro}, Número: {address.numero}
              <br />
              CEP: {address.cep} - {address.cidade}/{address.estado}
              <br />
              <br />
              Frete: {pedidoFrete.option} <br />
              Custo: R${pedidoFrete.price}
            </OrderContainer>
            <h5>
              <bold>PAGAMENTO</bold>
            </h5>
            <OrderContainer>{pedidoPayment}</OrderContainer>

            <h5>
              <bold>PRODUTOS</bold>
            </h5>
            {pedidoItems.map((produto, index) => {
              return (
                <OrderContainer key={index}>
                  <div>
                    <OrderTableMaior>
                      <tbody>
                        <tr>
                          <td>
                            <img src={produto.product.image} width="75px"></img>
                          </td>
                          <td>
                            <FontBold>{produto.product.title}</FontBold>
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
                            <p>Preço</p>

                            <br />
                            <FontBold>
                              R${(produto.quantity * produto.price).toFixed(2)}
                            </FontBold>
                          </td>
                        </tr>
                      </tbody>
                    </OrderTableMaior>
                  </div>
                </OrderContainer>
              );
            })}
            <h4>
              <bold>TOTAL DO PEDIDO:</bold> R${(pedidoTotal).toFixed(2)}
            </h4>
          </InfoContainer>
        ) : (
          <InfoContainer>
            <h5>
              <FontBold>Pedido não endontrado!</FontBold>
            </h5>
          </InfoContainer>
        )}
      </div>
    </>
  );
};

export default Pedido;
