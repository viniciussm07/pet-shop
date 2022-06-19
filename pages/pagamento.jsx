import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import Pagamento from '/components/Pagamento'

import  {ContainerColumn, InfoContainer} from '/components/Utils/pagesStyles'
import { FontBold } from '/components/Utils/style'

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
        <h3><FontBold>MÉTODO DE PAGAMENTO</FontBold></h3>
        <InfoContainer>

          <Pagamento />
        </InfoContainer>
        
      </ContainerColumn>
      <Footer/>
    </>
  )
}