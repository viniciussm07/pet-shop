import {
  ListaContainer,
  Title,
  WrapColumn,
  Column,
  Content,
  Row,
  ListaWrap,
  FixedButton,
  WrapButton,
  EditButton,
} from "../ListaElements";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function ListaClientes() {
  return (
    <>
      <WrapButton>
        <FixedButton>
          <FaPlus
            size={40}
            style={{
              padding: "0 0 0 0",
            }}
          />
        </FixedButton>
      </WrapButton>
      <ListaContainer>
        <Title>Lista Clientes</Title>
        <WrapColumn>
          <ListaWrap>
            <Row>
              <Column>
                <Row height="0.5rem">Nome do Cliente</Row>
                <Row height="0.5rem">
                    <Column align="flex-start">Id: </Column>
                    <Column align="flex-start">123456789</Column>
                </Row>
              </Column>
              <Column align="flex-end"><EditButton>Editar</EditButton></Column>
              <Column align="flex-end"><FaTrash/></Column>
            </Row>
          </ListaWrap>
        </WrapColumn>
      </ListaContainer>
    </>
  );
}
