import Head from 'next/head'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import Carrinho from '/components/Carrinho'
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
        <h3><FontBold>CARRINHO DE COMPRAS</FontBold></h3>
        <InfoContainer>
          <Carrinho />
        </InfoContainer>
        
      </ContainerColumn>
      <Footer/>
    </>
  )
}