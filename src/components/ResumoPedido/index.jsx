import Router from "next/router";
import { useEffect, useState } from "react";
import { OrderContainer, FontBold } from "../Utils/style";



export const Resumo = () => {
  let [fretePrice, setFretePrice] = useState(0);
  let [totalProducts, setTotalProducts] = useState(0);
  let [totalOrder, setTotalOrder] = useState(0);
  let [totalDiscount, setTotalDiscount] = useState(0);

  //Pegar os endereços do cliente
  useEffect(() => {
    const frete = sessionStorage.getItem("FretePrice");
    const totalProducts = sessionStorage.getItem("TotalProducts");
    const totalOrder = sessionStorage.getItem("TotalOrder");
    const totalDiscount = sessionStorage.getItem("TotalDiscount");
    setFretePrice(frete);
    setTotalProducts(parseFloat(totalProducts));
    setTotalOrder(parseFloat(totalOrder));
    setTotalDiscount(parseFloat(totalDiscount));

    
  }, []);
  
  return (
    <>
      <div onLoad={()=>{Router.reload()}}>
        <br />
        Valor dos produtos: R${totalProducts} <br />
        Frete: R${fretePrice}<br />
        <hr />
        Total a prazo: R$ {totalOrder}<br />
        <OrderContainer>
          Valor a vista:
          <h4>
            <FontBold>&nbsp;R${totalDiscount.toFixed(2)}</FontBold>
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
