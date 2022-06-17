import Head from 'next/head'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import Dados from '/components/DadosBasicos'
import Enderecos from '/components/Enderecos'


import  {ContainerColumn, InfoContainer, Div45} from '/style/pagesStyles.jsx'
import { FontBold } from '/components/style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      
      <ContainerColumn>
        <h3><FontBold>MEUS DADOS</FontBold></h3>
        <InfoContainer>
            <Div45>
                <Dados />
            </Div45>
            <Div45>
                <Enderecos />
            </Div45>
        </InfoContainer>
        
      </ContainerColumn>

      <Footer/>
    </>
  )
}