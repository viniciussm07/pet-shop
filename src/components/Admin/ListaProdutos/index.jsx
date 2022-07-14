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
  ImgWrap,
  Img,
} from "../AdminElements";
import { FaPlus, FaTrash } from "react-icons/fa";
import Produto1 from "../../../../images/produtos/brinquedo-1.webp";

export default function ListaClientes() {
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
        <Title>Lista Produtos</Title>
        <WrapColumn>
          <ListaWrap>
            <Row>
              <ImgWrap>
                <Img src={Produto1}/>
              </ImgWrap>
              <Column>
                <Row height="0.5rem">Nome do Produto</Row>
                <Row height="0.5rem">
                  <Column>Preço: </Column>
                  <Column>R$30,00</Column>
                </Row>
                <Row height="0.5rem">
                  <Column>Estoque: </Column>
                  <Column>50</Column>
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
