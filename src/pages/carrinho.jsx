import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carrinho from '../components/Carrinho'
import  {ContainerColumn, InfoContainer} from '../components/Utils/pagesStyles'
import { FontBold } from '../components/Utils/style'

export default function Carrinho() {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      <ContainerColumn>
        <h3><FontBold>CARRINHO DE COMPRAS</FontBold></h3>
        <InfoContainer>
          <Carrinho />
        </InfoContainer>
        
      </ContainerColumn>
      <Footer/>
    </>
  )
}