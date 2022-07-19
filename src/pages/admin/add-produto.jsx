import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AddProduto from "../../components/Admin/AddProduto";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getIsLoggedIn, getUserType } from "../../services/auth";

export default function AdicionarProdutos() {
  const router = useRouter();
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = getIsLoggedIn();
    if (isLoggedIn != "true") {
      router.push("/login");
    } else {
      const userType = getUserType();
      if (userType === "2") {
        router.push("/");
      }
    }
  }, []);
  return (
    <>
      <Navbar />
      <AddProduto />
      <Footer />
    </>
  );
}
