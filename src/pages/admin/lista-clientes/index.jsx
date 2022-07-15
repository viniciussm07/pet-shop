import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ListaClientes from "../../../components/Admin/ListaClientes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getIsLoggedIn, getUserType } from "../../../services/auth";

export default function () {
  const router = useRouter();
  // let isLoggedIn;
  // useEffect(() => {
  //   isLoggedIn = getIsLoggedIn();
  //   if (isLoggedIn != "true") {
  //     router.push("/login");
  //   }
  //   else{
  //     const userType = getUserType();
  //     if(userType === "2"){
  //       router.push("/");
  //     }
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      <ListaClientes/>
      <Footer />
    </>
  );
}
