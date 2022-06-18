import Head from 'next/head'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import Pedido from '/components/PedidoDetails'
import styled from 'styled-components'

import  {ContainerColumn,InfoContainer} from '/style/pagesStyles.jsx'
import { FontBold } from '/components/style'

const Div90 = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0 30px;
  margin: 10px;
  width:100%;
  display: flex;
  flex-direction: column;
  align-content: center;

`

export default function Home() {
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