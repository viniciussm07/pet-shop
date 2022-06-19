import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import Pedido from '/components/PedidoDetails'

import  {ContainerColumn,InfoContainer, Div90} from '/components/Utils/pagesStyles'
import { FontBold } from '/components/Utils/style'


export default function Home() {
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn!="true"){
          router.push('/login');
    }
  }, [])

  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      
      <ContainerColumn>
        <h3><FontBold>PEDIDO #</FontBold></h3>
        <InfoContainer>
          <Div90>
            <Pedido/>
          </Div90>

        </InfoContainer>
        
      </ContainerColumn>

      <Footer/>
    </>
  )
}