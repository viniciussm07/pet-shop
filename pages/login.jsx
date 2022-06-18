import Head from 'next/head'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Link from 'next/link'

import  {ContainerRow, Div40} from '/style/pagesStyles.jsx'
import { Button, ButtonContainer, FontBold, InfoContainer } from '../components/style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      <ContainerRow>
        <Div40>
          <Login/>
        </Div40>
        <Div40>
          <h5><FontBold>Ainda não é cliente?</FontBold></h5>
          <h6>Venha fazer parte da nossa comunidade!</h6>
          <ButtonContainer><Link href='/registrar'><Button>Fazer cadastro</Button></Link></ButtonContainer>
        </Div40>
        
      </ContainerRow>
      </>
  )

}