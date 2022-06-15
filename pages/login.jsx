import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Login from '../components/Login'
import SignUp from '../components/Registrar'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar/>
        <Login/>
        <SignUp/>
    </Container>
  )
}