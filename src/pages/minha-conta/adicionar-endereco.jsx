import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AddEndereco from '../../components/AdicionarEndereco'

import  {ContainerRow, Div80} from '../../components/Utils/pagesStyles'
import  {Title} from '../../components/Utils/blankStyles'
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
      <ContainerRow>
        <Div80>
          <AddEndereco/>
        </Div80>        
      </ContainerRow>
      <Footer/>
    </>

  )
}