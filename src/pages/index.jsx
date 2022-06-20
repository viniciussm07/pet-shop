import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import { useEffect } from 'react'

import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem('isLoggedIn') == null){
      localStorage.setItem('isLoggedIn',''); 
    }
    router.push('/');
  }, []);

  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar />
      <HeroSection />
      <Footer/>
    </>
  )
}
