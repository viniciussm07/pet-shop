import { useRouter } from "next/router.js";
import { useEffect } from "react";

import Head from "next/head";
import Navbar from "../components/Navbar";
import SignUp from "../components/Registrar";

import { ContainerRow, Div80 } from "../components/Utils/pagesStyles";
import Footer from "../components/Footer";

import { getIsLoggedIn } from "../services/auth";

export default function Home() {
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = getIsLoggedIn();
    if (isLoggedIn == "true") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar />
      <ContainerRow>
        <Div80>
          <SignUp />
        </Div80>
      </ContainerRow>
      <Footer />
    </>
  );
}
