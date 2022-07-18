import {
  ListaContainer,
  Title,
  WrapColumn,
  Column,
  Row,
  ListaWrap,
  FixedButton,
  WrapFixedButton,
  EditButton,
  WrapButton,
  Trash,
} from "../AdminElements";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "../../../services/api";

export default function ListaClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get("/customer/").then(({ data }) => {
      setClientes(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteCliente = async (id) => {
    if (confirm("Tem certeza que você deseja excluir esse cliente?")) {
      const response = await api.delete("customer/" + id);
      if (response.status === 200) {
        alert("Cliente excluído com sucesso");
      } else {
        alert("erro ao excluir cliente");
      }
    }
  };

  return (
    <>
      <WrapFixedButton>
        <FixedButton>
          <FaPlus
            size={40}
            style={{
              padding: "0 0 0 0",
            }}
          />
        </FixedButton>
      </WrapFixedButton>
      <ListaContainer>
        <Title>Lista Clientes</Title>
        <WrapColumn>
          <ListaWrap>
            {clientes?.map((cliente) => (
              <Row>
              <Column>
                <Row height="0.5rem">{cliente.name}</Row>
                <Row height="0.5rem">
                  <Column>Id: </Column>
                  <Column>{cliente._id}</Column>
                </Row>
              </Column>
              <WrapButton>
                <Link href={`/admin/lista-clientes/${cliente._id}`}>
                  <EditButton>Editar</EditButton>
                </Link>
              </WrapButton>
              <Trash onClick={() => deleteCliente(cliente_id)}>
                <FaTrash color="red" size={20} />
              </Trash>
            </Row>
            ))}
          </ListaWrap>
        </WrapColumn>
      </ListaContainer>
    </>
  );
}
