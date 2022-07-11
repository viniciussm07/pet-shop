import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Pedidos from '../../../components/Pedidos'

import  {ContainerColumn, InfoContainer} from '../../../components/Utils/pagesStyles'
import {FontBold}  from '../../../components/Utils/style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      
      <ContainerColumn>
        <h3><FontBold>MEUS PEDIDOS</FontBold></h3>
        <InfoContainer>
          
            <Pedidos/>
        </InfoContainer>
        
      </ContainerColumn>

      <Footer/>
    </>
  )
}