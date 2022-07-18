import { useState, useEffect } from "react";
import {
  ListaContainer,
  Title,
  Title2,
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
import { FormContent, FormInput, FormLabel, Form } from "../AdminForm";
import api from "../../../services/api";

export default function EditarProdutos(props) {
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(props.produto.title);
    setStock(props.produto.stock);
    setSlug(props.produto.slug);
    setPrice(props.produto.price);
    setDescription(props.produto.description);
  }, []);

  const updateHandler = async (event) => {
    event.preventDefault();
    const data = {
      title: title,
      stock: stock,
      slug: slug,
      price: price,
      description: description,
    };

    const response = await api.put(
      "/products/admin/" + props.produto._id,
      data
    );

    if (response.status === 201) {
      alert("Dados atualizados");
    } else {
      alert("erro ao atualizar os dados");
    }
  };

  return (
    <>
      <ListaContainer>
        <Title>Editar Produto</Title>
        <WrapColumn>
          <ListaWrap>
            <Row height="auto" padding="0 0 4rem 0">
              <Column align="center">
                <ImgWrap width="50%">
                  <Img src={props.image} height={200} width={200} />
                </ImgWrap>
              </Column>
              <Column>
                <FormContent>
                  <Title2>Id: {props.id}</Title2>
                  <Form method="POST" onSubmit={updateHandler}>
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
                    <EditButton margin="1rem">Salvar</EditButton>
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
