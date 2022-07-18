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
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthday, setBirthday] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(props.cliente.name);
    setCpf(props.cliente.cpf);
    setBirthday(props.cliente.birthday);
    setTelefone(props.cliente.telefone);
    setCelular(props.cliente.celular);
    setEmail(props.cliente.email)
  }, []);

  const updateHandler = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      cpf: cpf,
      birthday: birthday,
      telefone: telefone,
      celular: celular,
      email: email
    };

    const response = await api.put(
      "/customer/" + props.cliente._id,
      data
    );

    if (response.status === 201) {
      alert("Dados atualizados");
      setTimeout(() => {
        router.push("/admin/lista-clientes");
      }, 1000);
    } else {
      alert("erro ao atualizar os dados");
    }
  };

  return (
    <>
      <ListaContainer>
        <Title>Editar Cliente</Title>
        <WrapColumn>
          <ListaWrap>
            <Row height="auto" padding="0 0 4rem 0">
              <Column align="center">
                <FormContent>
                  <Title2>Id: {props.id}</Title2>
                  <Form method="POST" onSubmit={updateHandler}>
                    <FormLabel htmlFor="for">Nome</FormLabel>
                    <FormInput
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput
                      name="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormLabel htmlFor="for">cpf</FormLabel>
                    <FormInput
                      name="cpf"
                      type="text"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                    />
                    <FormLabel htmlFor="for">Aniversário</FormLabel>
                    <FormInput
                      name="birthday"
                      type="text"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                    <FormLabel htmlFor="for">Telefone</FormLabel>
                    <FormInput
                      name="telefone"
                      type="text"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                    <FormLabel htmlFor="for">Celular</FormLabel>
                    <FormInput
                      name="celular"
                      type="text"
                      value={celular}
                      onChange={(e) => setCelular(e.target.value)}
                    />
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
