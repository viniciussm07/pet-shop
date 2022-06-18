import Head from 'next/head'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import Pedido from '/components/PedidoDetails'
import  {ContainerColumn,InfoContainer, Div90} from '/style/pagesStyles.jsx'
import { FontBold } from '/components/style'


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