import Head from 'next/head'
import Navbar from '/components/Navbar'
import RecuperarSenha from '/components/RecuperarSenha'

import  {ContainerRow, Div40} from '/style/pagesStyles.jsx'
import { Button, ButtonContainer } from '../components/style'

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
      </>
  )

}