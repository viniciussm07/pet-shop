import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

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
