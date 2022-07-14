import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";

import Head from "next/head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Pedido from "../../../components/PedidoDetails";

import {
  ContainerColumn,
  InfoContainer,
  Div90,
} from "../../../components/Utils/pagesStyles";
import { FontBold } from "../../../components/Utils/style";
import { getIsLoggedIn } from "../../../services/auth";

export default function Home() {
  const [numPedido, setNumPedido] = useState();
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    const path = window.location.pathname.substr(26, 32);
    setNumPedido(path);
    isLoggedIn = getIsLoggedIn();
    if (isLoggedIn != "true") {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar />

      <ContainerColumn>
        <h3>
          <FontBold>PEDIDO #{numPedido}</FontBold>
        </h3>
        <InfoContainer>
          <Div90>
            <Pedido />
          </Div90>
        </InfoContainer>
      </ContainerColumn>

      <Footer />
    </>
  );
}
