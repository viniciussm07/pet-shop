import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalizarCompras from '../components/FinalizarCompra'

import  {ContainerColumn, InfoContainer} from '../components/Utils/pagesStyles'
import { bold } from '../components/Utils/style'



export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      <ContainerColumn>
        <h3><bold>FINALIZAR COMPRA</bold></h3>
        <InfoContainer>

          <FinalizarCompras />
        </InfoContainer>
        
      </ContainerColumn>
      <Footer/>
    </>
  )
}