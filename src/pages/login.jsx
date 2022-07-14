import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Link from 'next/link'
import Footer from '../components/Footer'

import  {ContainerRow, Div40} from '../components/Utils/pagesStyles'
import { Button, ButtonContainer, bold } from '../components/Utils/style'


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
          <h5><bold>Ainda não é cliente?</bold></h5>
          <h6>Venha fazer parte da nossa comunidade!</h6>
          <ButtonContainer><Link href='/registrar'><Button>Fazer cadastro</Button></Link></ButtonContainer>
        </Div40>
        
      </ContainerRow>
      <Footer/>
      </>
  )

}