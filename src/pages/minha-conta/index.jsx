import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MinhaConta from '../../components/UserPage/costumer'
import  {ContainerColumn, InfoContainer} from '../../components/Utils/pagesStyles'
import { FontBold } from '../../components/Utils/style'


export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      <ContainerColumn>
        <h3><FontBold>MINHA CONTA</FontBold></h3>
        <InfoContainer>

          <MinhaConta />

        </InfoContainer>
        
      </ContainerColumn>
      <Footer/>
    </>
  )
}
