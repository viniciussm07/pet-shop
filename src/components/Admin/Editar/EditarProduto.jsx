import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  ListaContainer,
  Title,
  Title2,
  WrapColumn,
  Column,
  Row,
  ListaWrap,
  EditButton,
  ImgWrap,
  Img,
} from "../AdminElements";
import { FormContent, FormInput, FormLabel, Form } from "../AdminForm";
import api from "../../../services/api";

export default function EditarProdutos(props) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTitle(props.produto.title);
    setStock(props.produto.stock);
    setSlug(props.produto.slug);
    setPrice(props.produto.price);
    setDescription(props.produto.description);
  }, []);

  const tagsHandler = (t) => {
    const auxTags1 = t.split(" ");
    const auxTags2 = []
    let resp = []

    for (let i = 0; i < auxTags1.length; i++) {
      if (auxTags1[i].length > 3){
        auxTags2.push(auxTags1[i].toLowerCase());
      }
    }
    for (let i = 0; i < auxTags2.length; i++){
      resp.push(auxTags2[i].normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    }
    setTags(resp);
  }

  const stockHandler = (s) => {
    if (s < 0){
      setStock(0)
    } else {
      setStock(s)
    }
  }

  const activeHandler = (s) => {
    if (s == 0){
      setActive(false)
    }
  }

  const updateHandler = async (event) => {
    event.preventDefault();
    activeHandler(stock);
    tagsHandler(title);
    const data = {
      title: title,
      stock: stock,
      slug: slug,
      price: price,
      description: description,
      tags: tags,
      active: active
    };

    const response = await api.put(
      "/products/admin/" + props.produto._id,
      data
    );

    if (response.status === 201) {
      alert("Dados atualizados");
      setTimeout(() => {
        router.push("/admin/lista-produtos");
      }, 1000);
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
                  <Img src={props.image ? props.image : "/images/wthout-image.png"} height={200} width={200} />
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
                      onChange={(e) => stockHandler(e.target.value)}
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
