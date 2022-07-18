import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Editar from "../../../components/Admin/Editar";
import api from "../../../services/api"

// Gera uma rota dinâmica para cada produto na lista de produtos para gerar uma página estática de cada um
export async function getStaticPaths() {
  const produtos = await api.get("/products/admin/list");
  const paths = produtos.data.map((produto) => {
    const { _id } = produto;
    return {
      params: {
        produtoId: _id.toString(),
      },
    };
  });
  return { paths, fallback: false };
}

// Retorna um produto que corresponde ao id passado no path
export async function getStaticProps({ params }) {
  const resp = await api.get(`/products/admin/${params.produtoId}`);
  const produto = resp.data;

  return {
    props: {
      produto,
    },
  };
}

export default function EditarProdutos({produto}) {
  
  return (
    <>
      <Navbar />
      <Editar
        produto = {produto}
        id={produto._id}
        image={produto.image}
        name={produto.title}
        stock={produto.stock}
        slug={produto.slug}
        price={produto.price}
        description={produto.description}
        active={produto.active}
      />
      <Footer />
    </>
  );
}
