import Navbar from "../Navbar";
import Footer from "../Footer";
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
} from "./AdminElements";

import {
  FormContent,
  FormInput,
  FormLabel,
  Form
} from "./AdminForm";

export default function EditarProdutos(props) {
  return (
    <>
      <ListaContainer>
        <Title>Editar Produto</Title>
        <WrapColumn>
          <ListaWrap>
            <Row height="auto" padding="0 0 4rem 0">
              <Column align="center">
                <ImgWrap width="50%">
                  <Img
                    src={props.image}
                    height={200}
                    width={200}
                  />
                </ImgWrap>
                <EditButton margin="2.5rem 0 0 0">
                  Alterar foto
                </EditButton>
              </Column>
              <Column>
                <FormContent>
                  <p>Id: {props.id}</p>
                  <Form method="post">
                    <FormLabel htmlFor="for">Nome</FormLabel>
                    <FormInput name="name" type="text" value={props.name} />
                    <FormLabel htmlFor="for">Estoque</FormLabel>
                    <FormInput name="stock" type="number" value={props.stock} />
                    <FormLabel htmlFor="for">Slug</FormLabel>
                    <FormInput name="slug" type="text" value={props.slug} />
                    <FormLabel htmlFor="for">Preço</FormLabel>
                    <FormInput name="price" type="number" value={props.price} />
                    <FormLabel htmlFor="for">Descrição</FormLabel>
                    <FormInput name="description" type="text" value={props.description} />
                    {/* <FormLabel htmlFor="for">Tags</FormLabel>
                    <FormInput name="tags" type="text" value={props.tags}/> */}
                    <FormLabel htmlFor="for">Active</FormLabel>
                    <FormInput name="active" type="checkbox" value={props.active}/>
                  </Form>
                </FormContent>
              </Column>
            </Row>
            <Row height="auto">
                <Column align="center">
                    <EditButton>Salvar</EditButton>
                </Column>
            </Row>
          </ListaWrap>
        </WrapColumn>
      </ListaContainer>
    </>
  );
}
