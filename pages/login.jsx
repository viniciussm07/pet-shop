import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Link from 'next/link'
import styled from 'styled-components'

import  {ContainerRow} from '/style/pagesStyles.jsx'
import { Button, ButtonContainer, FontBold } from '../components/style'

const Div40 = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  width:40%;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align:center;
`

export default function Home() {
  const router = useRouter();
    let isLoggedIn = false;

    if(isLoggedIn==true){
        useEffect(() => {
            router.push('/');
        }, []);
    }

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