import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Dados from '../../components/DadosBasicos'
import Enderecos from '../../components/Enderecos'

import  {ContainerColumn, InfoContainer, Div45} from '../../components/Utils/pagesStyles'
import { FontBold } from '../../components/Utils/style'
import {getIsLoggedIn } from '../../services/auth'

export default function Home() {
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = getIsLoggedIn();
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
        <h3><bold>MEUS DADOS</bold></h3>
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