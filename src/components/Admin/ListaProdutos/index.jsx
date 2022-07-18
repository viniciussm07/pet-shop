import { useState, useEffect } from "react";
import Link from "next/link";
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
  Title2,
} from "../AdminElements";
import { FaPlus, FaTrash } from "react-icons/fa";

import api from "../../../services/api";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get("/products/admin/list").then(({ data }) => {
      setProdutos(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteProduct = async (id) => {
    if (confirm("Tem certeza que você deseja excluir esse produto?")) {
      const response = await api.delete("products/admin/" + id);
      if (response.status === 200) {
        alert("Dados atualizados");
      } else {
        alert("erro ao atualizar os dados");
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
        <Title>Lista Produtos</Title>
        <WrapColumn>
          <ListaWrap>
            {produtos?.map((produto) => (
              <Row padding="4rem 0 4rem 0">
                <ImgWrap>
                  <Img src={produto.image} width="100px" height="100px" />
                </ImgWrap>
                <Column width="35%">
                  <Row height="2.5rem">
                    <Title2>{produto.title}</Title2>
                  </Row>
                  <Row height="0.25rem" margin="10px 10px">
                    <Column>Preço: </Column>
                    <Column>R$ {produto.price}</Column>
                  </Row>
                  <Row height="0.25rem" margin="10px 10px">
                    <Column>Estoque: </Column>
                    <Column>{produto.stock}</Column>
                  </Row>
                </Column>
                <WrapButton>
                  <Link href={`/admin/lista-produtos/${produto._id}`}>
                    <EditButton>Editar</EditButton>
                  </Link>
                </WrapButton>
                <Trash onClick={() => deleteProduct(produto._id)}>
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
