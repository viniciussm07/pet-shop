import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getIdUser } from "../../services/auth";
import {
  bold,
  OrderContainer,
  OrderTable,
  InfoContainer,
} from "../Utils/style";

export const Pedido = () => {
  let pedido;
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

  const { query } = useRouter();

  //Obter os dados do cliente logado
  useEffect(() => {
    const path = window.location.pathname.substr(26, 32);
    console.log(path);
    const id = getIdUser();
    const fetchOrder = async () => {
      const { data } = await api.get("/orders/one/" + path);
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
      //const dataAddress = response.data;
      const dataAddress = response.data.filter((address) => address._id == data[0].address);
      setAddress(dataAddress[0]);
      console.log("data address:", dataAddress[0]);
      response.data.forEach((address) => {
        if(address._id===data[0].address){
            setAddress(address);
        }
      });
    }; 

    fetchOrder();
  }, []);

  console.log("name:", pedidoCustomerName);
  console.log(pedidoNumber);
  console.log(pedidoStatus);
  console.log(pedidoPayment);
  console.log(pedidoAddress);
  console.log("frete",pedidoFrete);
  console.log(pedidoItems);
  console.log(pedidoTotal);
  console.log(address);

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

  const endereco = {
    identificacao: "Endereço Principal",
    logradouro: "Rua daqui",
    numero: "250",
    CEP: "1111-1111",
    bairro: "bairro",
    cidade: "cidade",
    uf: "ET",
    complemento: "",
    referencia: "",
  };
  return (
    <>
      <div>
        <InfoContainer>
          <h4>
            <bold>DATA DO PEDIDO:</bold> {pedidoDate.substr(0,10)}
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
                  <OrderTable>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <bold>{produto.nome}</bold>
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
          <h4>
            <bold>TOTAL DO PEDIDO:</bold> R${pedidoTotal}
          </h4>
        </InfoContainer>
      </div>
    </>
  );
};

export default Pedido;
