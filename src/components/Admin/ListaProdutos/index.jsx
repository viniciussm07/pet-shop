import { useState, useEffect } from "react";
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
  Title2
} from "../AdminElements";
import { FaPlus, FaTrash } from "react-icons/fa";
import Produto1 from "../../../../images/produtos/caes/brinquedo-1.webp";

import api from "../../../services/api";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get("/products/admin/list").then(({ data }) => {
      setProdutos(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <WrapFixedButton>
        <FixedButton >
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
            {produtos?.map((produto) => (
              <Row padding="3rem">
                <ImgWrap>
                  <Img src={Produto1} />
                </ImgWrap>
                <Column width="40%">
                  <Row height="0.5rem"><Title2>{produto.title}</Title2></Row>
                  <Row height="0.5rem">
                    <Column>Preço: </Column>
                    <Column>{produto.price}</Column>
                  </Row>
                  <Row height="0.5rem">
                    <Column>Estoque: </Column>
                    <Column>{produto.stock}</Column>
                  </Row>
                </Column>
                <WrapButton>
                  <EditButton  >Editar</EditButton>
                </WrapButton>
                <Trash>
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
