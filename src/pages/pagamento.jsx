import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagamento from '../components/Pagamento'

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
        <h3><bold>MÉTODO DE PAGAMENTO</bold></h3>
        <InfoContainer>

          <Pagamento />
        </InfoContainer>
        
      </ContainerColumn>
      <Footer/>
    </>
  )
}