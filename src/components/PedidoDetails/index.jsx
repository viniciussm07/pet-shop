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
  let pedido = useState();
  const [address, setAddress] = useState("");

  const {query} = useRouter();
  
  //Obter os dados do cliente logado
  useEffect(() => {
    const path = window.location.pathname.substr(26, 32)
    console.log(path)
    const id = getIdUser();
    const fetchOrder = async () => {
      const { data } = await api.get("/orders/one/" + path);
      pedido = data[0];
    };
    fetchOrder();

    const fetchAddress = async () => {
        const { data } = await api.get("/customer/addresses/" + pedido.customer);
        const address = data.filter((address) => address._id === pedido.address);
        setAddress(address[0]);
      };
      fetchAddress();
  }, []);

  console.log("aa",pedido);


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
            <bold>DATA DO PEDIDO:</bold> XX/XX/XXXX
          </h4>
          <h4>
            <bold>STATUS:</bold> STATUS
          </h4>
          <br />
          <h5>
            <bold>ENTREGA</bold>
          </h5>
          <OrderContainer>
            Destinatário: {pedido.customer} <br />
            Rua: {endereco.logradouro}, Número: {endereco.numero}
            <br />
            CEP: {endereco.CEP} - {endereco.cidade}/{endereco.uf}
            <br />
            <br />
            Frete - {pedido.frete} <br />
            Custo: R$
          </OrderContainer>
          <h5>
            <bold>PAGAMENTO</bold>
          </h5>
          <OrderContainer>{pedido.payment}</OrderContainer>

          <h5>
            <bold>PRODUTOS</bold>
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
          <h6>
            <bold>TOTAL DO PEDIDO:</bold> R$
          </h6>
        </InfoContainer>
      </div>
    </>
  );
};

export default Pedido;
