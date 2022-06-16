import Head from 'next/head'
import Navbar from '/components/Navbar'
import HeroSection from '/components/HeroSection'
import Footer from '/components/Footer'
import MyAccount from '/components/UserPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
      <MyAccount/>
      <Footer/>
    </>
  )
}
