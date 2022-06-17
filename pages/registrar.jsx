import Head from 'next/head'
import Navbar from '../components/Navbar'
import SignUp from '../components/Registrar'


import  {ContainerRow,  Div80} from '/style/pagesStyles.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      <ContainerRow>
        <Div80>
          <SignUp/>
        </Div80>        
      </ContainerRow>
    </>

  )
}