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
  Title2
} from "../AdminElements";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "../../../services/api";
import Router from "next/router";

export default function ListaClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get("/customer/").then(({ data }) => {
      setClientes(data);
    });
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
    api.get("/customer/").then(({ data }) => {
      setClientes(data);
    });
  };

  return (
    <>
      <WrapFixedButton>
        <Link href="/admin/add-cliente">
          <FixedButton>
            <FaPlus
              size={40}
              style={{
                padding: "0 0 0 0",
              }}
            />
          </FixedButton>
        </Link>
      </WrapFixedButton>
      <ListaContainer>
        <Title>Lista Clientes</Title>
        <WrapColumn>
          <ListaWrap>
            {clientes?.map((cliente) => (
              <Row shadow="0px 0px 5px black">
              <Column>
                <Row height="0.5rem"><Title2>Nome: {cliente.name}</Title2></Row>
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
              <Trash onClick={() => deleteCliente(cliente._id)}>
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
