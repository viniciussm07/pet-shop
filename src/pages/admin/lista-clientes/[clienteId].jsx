import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Editar from "../../../components/Admin/Editar/EditarCliente";
import api from "../../../services/api"

// Gera uma rota dinâmica para cada cliente na lista de clientes para gerar uma página estática de cada um
export async function getStaticPaths() {
  const clientes = await api.get("/customer");
  const paths = clientes.data.map((cliente) => {
    const { _id } = cliente;
    return {
      params: {
        clienteId: _id.toString(),
      },
    };
  });
  return { paths, fallback: false };
}

// Retorna um produto que corresponde ao id passado no path
export async function getStaticProps({ params }) {
  const resp = await api.get(`/customer/${params.clienteId}`);
  const cliente = resp.data;

  return {
    props: {
      cliente,
    },
  };
}

export default function EditarCliente({cliente}) {
  
  return (
    <>
      <Navbar />
      <Editar
        cliente = {cliente}
        id={cliente._id}
        name={cliente.name}
        email={cliente.email}
        cpf={cliente.cpf}
        birthday={cliente.birthday}
        telefone={cliente.telefone}
        celular={cliente.celular}
      />
      <Footer />
    </>
  );
}
