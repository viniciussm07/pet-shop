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
import { FormContent, FormInput, FormLabel, Form } from "../AdminForm";
import api from "../../../services/api";

export default function AddProduto() {

  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addHandler = async (event) => {
    event.preventDefault();
    const response = await api.post("products/admin");

    if (response.status === 201) {
      alert("Produto adicionado!");
    } else {
      alert("erro ao adicionar produto");
    }
  }

  return (
    <>
      <ListaContainer>
        <Title>Editar Produto</Title>
        <WrapColumn>
          <ListaWrap>
            <Row height="auto" padding="0 0 4rem 0">
              <Column align="center">
                <ImgWrap width="50%">
                  <Img src="/images/wthout-image.png" height={200} width={200} />
                </ImgWrap>
                <EditButton margin="2.5rem 0 0 0">Alterar foto</EditButton>
              </Column>
              <Column>
                <FormContent>
                  <Form method="POST" onSubmit={addHandler}>
                    <FormLabel htmlFor="for">Nome</FormLabel>
                    <FormInput
                      name="name"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <FormLabel htmlFor="for">Estoque</FormLabel>
                    <FormInput
                      name="stock"
                      type="number"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                    />
                    <FormLabel htmlFor="for">Slug</FormLabel>
                    <FormInput
                      name="slug"
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                    <FormLabel htmlFor="for">Preço</FormLabel>
                    <FormInput
                      name="price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <FormLabel htmlFor="for">Descrição</FormLabel>
                    <FormInput
                      name="description"
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    {/* <FormLabel htmlFor="for">Tags</FormLabel>
                    <FormInput name="tags" type="text" value={props.tags}/> */}
                    <EditButton margin="1rem">Adicionar</EditButton>
                  </Form>
                </FormContent>
              </Column>
            </Row>
          </ListaWrap>
        </WrapColumn>
      </ListaContainer>
    </>
  );
}
