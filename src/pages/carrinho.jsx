import { useRouter } from "next/router.js";
import { useEffect } from "react";

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carrinho from '../components/Carrinho'
import  {ContainerColumn, InfoContainer} from '../components/Utils/pagesStyles'
import { FontBold } from '../components/Utils/style'
import {getIsLoggedIn } from '../services/auth'

export default function Home() {
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = getIsLoggedIn();
    if(isLoggedIn!="true"){
          router.push('/login');
    }
  }, [])

export default function () {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar />
      <ContainerColumn>
        <h3>
          <bold>CARRINHO DE COMPRAS</bold>
        </h3>
        <InfoContainer>
          <Carrinho />
        </InfoContainer>
      </ContainerColumn>
      <Footer />
    </>
  );
}
