import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '/components/Navbar'
import AddEndereco from '/components/AdicionarEndereco'

import  {ContainerRow, Div80} from '/components/Utils/pagesStyles'


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
      <ContainerRow>
        <Div80>
          <AddEndereco/>
        </Div80>        
      </ContainerRow>
    </>

  )
}