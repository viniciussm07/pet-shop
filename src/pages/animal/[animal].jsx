import Head from 'next/head'
import Navbar from '/components/Navbar'
import HeroSection from '/components/HeroSection'
import Footer from '/components/Footer'

export default function Animal() {

  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar />
      <Footer/>
    </>
  )
}