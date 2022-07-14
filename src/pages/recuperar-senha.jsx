import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import RecuperarSenha from '../components/RecuperarSenha'

import  {ContainerRow, Div40} from '../components/Utils/pagesStyles'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      <ContainerRow>
        <Div40>
          <RecuperarSenha/>
        </Div40>       
      </ContainerRow>
      <Footer/>
      </>
  )

}