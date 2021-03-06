import Head from "next/head";
import Navbar from "../../components/Navbar";
import { HeroWrapper } from "../../components/HeroSection/HeroElements";
import Produto from "../../components/Produto/ProdutoElement";
import { Container } from "../../components/Utils";
import Footer from "../../components/Footer";

import api from "../../services/api";

// Gera uma rota dinâmica para cada produto na lista de produtos para gerar uma página estática de cada um
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          tag: "cachorro",
        },
      },
      {
        params: {
          tag: "gato",
        },
      },
      {
        params: {
          tag: "passaro",
        },
      },
    ],
    fallback: false,
  };
}

// Retorna uma lista de produtos que possuem a tag passada no path
export async function getStaticProps({ params }) {
  const resp = await api.get(`/products/tags/${params.tag}`);
  const produtos = resp.data;

  return {
    props: {
      produtos,
    },
  };
}

export default function Animal({ produtos }) {
  return (
    <>
      <Head>
        <title>Pet Shop</title>
      </Head>
      <Navbar />
      <Container>
        <HeroWrapper>
          {produtos?.map((produto) => (
            <Produto
              name={produto.title}
              image={produto.image}
              key={produto.slug}
              id={produto._id}
              price={produto.price}
              destiny={`/produto/${produto.slug}`}
            />
          ))}
        </HeroWrapper>
      </Container>
      <Footer />
    </>
  );
}
