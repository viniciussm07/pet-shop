import { useRouter } from "next/router.js";
import { useEffect } from "react";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalizarCompras from "../components/FinalizarCompra";

import {
  ContainerColumn,
  InfoContainer,
} from "../components/Utils/pagesStyles";
import { FontBold } from "../components/Utils/style";
import { getIsLoggedIn } from "../services/auth";

export default function Home() {
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
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
          <FontBold>FINALIZAR COMPRA</FontBold>
        </h3>
        <InfoContainer>
          <FinalizarCompras />
        </InfoContainer>
      </ContainerColumn>
      <Footer />
    </>
  );
}
