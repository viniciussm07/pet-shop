import Head from 'next/head'
import Navbar from '/components/Navbar'
import HeroSection from '/components/HeroSection'
import Footer from '/components/Footer'
import MinhaConta from '/components/UserPage'
import styled from 'styled-components'
import  {ContainerColumn, InfoContainer} from '/style/pagesStyles.jsx'
import { FontBold } from '/components/style'



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
