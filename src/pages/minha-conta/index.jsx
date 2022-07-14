import { useRouter } from "next/router.js";
import { useEffect } from "react";

import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserPage from "../../components/UserPage"
import {
  ContainerColumn,
  InfoContainer,
} from "../../components/Utils/pagesStyles";
import { Button, FontBold } from "../../components/Utils/style";
import api from "../../services/api";
import { logout, getToken, getIsLoggedIn } from "../../services/auth";

export default function Home() {
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = getIsLoggedIn();
    if (isLoggedIn != "true") {
      router.push("/login");
    }
  }, []);

  const confirmarSair = async () => {
    if (window.confirm("Deseja realmente sair?")) {
      const response = await api.get("/customer/auth/destroyToken", {
        headers: { token: getToken() },
      });
      if (response.status === 200) {
        logout();
        window.location.href = "/";
      }
    }
  };

  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar />
      <ContainerColumn>
        <h3>
          <FontBold>MINHA CONTA</FontBold>
        </h3>
        <Button onClick={confirmarSair}>Sair</Button>
        <InfoContainer>
          <UserPage />
        </InfoContainer>
      </ContainerColumn>
      <Footer />
    </>
  );
}
