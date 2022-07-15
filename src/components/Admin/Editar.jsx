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

export default function EditarProdutos() {
  return (
    <>
      <ListaContainer>
        <Title>Editar Produto</Title>
        <WrapColumn>
          <ListaWrap>
            <Row>
              <Column align="center">
                <ImgWrap>
                  <Img
                    src={"/images/produtos/brinquedo-1.webp"}
                    height={100}
                    width={100}
                  />
                </ImgWrap>
                <Title2>Teste</Title2>
              </Column>
              <Column>
                <FormContent>
                  <Form method="post">
                    <FormLabel htmlFor="for">Nome</FormLabel>
                    <FormInput name="name" type="name" required />
                    <FormLabel htmlFor="for">Estoque</FormLabel>
                    <FormInput name="stock" type="stock" required />
                    <FormLabel htmlFor="for">Preço</FormLabel>
                    <FormInput name="preco" type="number" required />
                    <FormLabel htmlFor="for">Descrição</FormLabel>
                    <FormInput name="descricao" type="text" required />
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