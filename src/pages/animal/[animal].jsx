import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import api from '../../services/api';

// Gera uma rota dinâmica para cada produto pertencente a uma tag para gerar uma página estática de cada um
export const getStaticPaths = async () => {
  const tags = await api.get('/products/tags')
  const paths = tags.map(({ tag }) => ({
    params: {
      tag
    },
  }));

  return { paths, fallback: false };
};

// Retorna um produto que corresponde ao id passado no path
export async function getStaticProps ({ params }) {
  const resp = await api.get(`/products/tags/${params.produtoSlug}`);
  const produto = resp.data
  
  return {
      props: {
          produto
      },
  }
}

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
