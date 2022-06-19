import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import Dados from '/components/DadosBasicos'
import Enderecos from '/components/Enderecos'
import styled from 'styled-components'

import  {ContainerColumn, InfoContainer} from '/style/pagesStyles.jsx'
import { FontBold } from '/components/style'



const Div45 = styled.div`
 background-color: white;
  border-radius: 10px;
  padding: 30px;
  margin: 10px 20px;
  width:45%;
  display: flex;
  flex-direction: column;
  align-content: center;

`


export default function Home() {
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn!="true"){
          router.push('/login');
    }
  }, [])

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