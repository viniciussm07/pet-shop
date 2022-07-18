import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Editar from "../../../components/Admin/Editar";
import api from "../../../services/api"
import { useState, useEffect } from "react";

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
  console.log(produto)

  return {
    props: {
      produto,
    },
  };
}

export default function EditarProdutos({produto}) {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const updateHandler = async (event) => {
    event.preventDefault();
    const data ={
      name: name,
      stock: stock,
      slug, slug,
      price: price,
      description: description
    }

    const response = await api.put("/products/admin/" + produto._id, data)

    if (response.status === 201){
      alert("Dados atualizados");
    } else {
      alert("erro ao atualizar os dados");
    }
  }
  return (
    <>
      <Navbar />
      <Editar
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
