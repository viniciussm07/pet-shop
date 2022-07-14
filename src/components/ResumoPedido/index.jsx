import { useEffect, useState } from "react";
import { OrderContainer, bold } from "../Utils/style";



export const Resumo = () => {
  const [cartItems, setCartItems] = useState([]);
  const [fretePrice, setFretePrice] = useState(0);

  //Pegar os endereços do cliente
  useEffect(() => {
    const frete = sessionStorage.getItem("Frete Price");
    setFretePrice(frete);
    const items = JSON.parse(localStorage.getItem("items"));
    if (items != null) {
      setCartItems(items);
    }
  }, []);

  console.log("itens:",cartItems)

  return (
    <>
      <div>
        <br />
        Valor dos produtos: R$ <br />
        Frete: R${fretePrice}<br />
        <hr />
        Total a prazo: R$ <br />
        <OrderContainer>
          Valor a vista:
          <h4>
            <bold>&nbsp;R$</bold>
          </h4>
          <br />
          (10% de desconto <br />
          Pix ou Boleto)
        </OrderContainer>
      </div>
    </>
  );
};

export default Resumo;
