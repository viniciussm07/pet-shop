import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import React, { useEffect, useState } from 'react'
import api from "../services/api";
import WrapContent from "../components/WrapContent";


export default function Home() {
  return (

    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <WrapContent/>
      <Footer />
    </>
  );
}
