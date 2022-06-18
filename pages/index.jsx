import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    if(localStorage.getItem('isLoggedIn') == null){
      localStorage.setItem('isLoggedIn',''); 
    }
  }, []);

  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar />
      <HeroSection />
    </>
  )
}
