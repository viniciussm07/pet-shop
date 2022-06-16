import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content='pet-shop is a company that sells pet products' />
        <title>Pet Shop</title>
      </Head>
      <Navbar />
      <HeroSection />
    </>
  )
}
