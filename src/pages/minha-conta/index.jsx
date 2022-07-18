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
import { logout, getToken, getIsLoggedIn, getUserType } from "../../services/auth";

export default function Home() {
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = getIsLoggedIn();
    if (isLoggedIn != "true") {
      router.push("/login");
    }
    else{
      const userType = getUserType();
      if(userType === "1"){
        router.push("/admin");
      }
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
          <FontBold>MINHA CONTA</FontBold>
        </h3>
        <InfoContainer>
          <UserPage />
        </InfoContainer>
      </ContainerColumn>
      <Footer />
    </>
  );
}
