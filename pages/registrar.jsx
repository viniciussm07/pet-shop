import { useRouter } from 'next/router.js'
import { useEffect } from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import SignUp from '../components/Registrar'
import styled from 'styled-components'


import  {ContainerRow} from '/style/pagesStyles.jsx'

const Div80 = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  width:80%;
  display: flex;
  flex-direction: column;
  align-content: center;
`

export default function Home() {

  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn=="true"){
          router.push('/');
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
          <SignUp/>
        </Div80>        
      </ContainerRow>
    </>

  )
}