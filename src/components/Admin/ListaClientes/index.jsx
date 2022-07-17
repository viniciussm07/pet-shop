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
import api from "../../../services/api"

export default function ListaClientes() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get("/customer/").then(({ data }) => {
      setProdutos(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Row>
              <Column>
                <Row height="0.5rem">Nome do Cliente</Row>
                <Row height="0.5rem">
                  <Column>Id: </Column>
                  <Column>123456789</Column>
                </Row>
              </Column>
              <WrapButton>
                <EditButton>Editar</EditButton>
              </WrapButton>
              <Trash>
                <FaTrash color="red" size={20}/>
              </Trash>
            </Row>
          </ListaWrap>
        </WrapColumn>
      </ListaContainer>
    </>
  );
}
