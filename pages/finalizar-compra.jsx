import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import  {ContainerColumn, InfoContainer} from '/style/pagesStyles.jsx'
import { FontBold } from '/components/style'
import FinalizarCompras from '/components/FinalizarCompra'


export default function Home() {
  const router = useRouter();
  let isLoggedIn = true;

  if(isLoggedIn==false){
    useEffect(() => {
        router.push('/login');
      }, []);
  }
  
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      <ContainerColumn>
        <h3><FontBold>FINALIZAR COMPRA</FontBold></h3>
        <InfoContainer>

          <FinalizarCompras />
        </InfoContainer>
        
      </ContainerColumn>
      <Footer/>
    </>
  )
}