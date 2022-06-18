import Head from 'next/head'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import Pagamento from '/components/Pagamento'
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
        <h3><FontBold>MÉTODO DE PAGAMENTO</FontBold></h3>
        <InfoContainer>

          <Pagamento />
        </InfoContainer>
        
      </ContainerColumn>
      <Footer/>
    </>
  )
}