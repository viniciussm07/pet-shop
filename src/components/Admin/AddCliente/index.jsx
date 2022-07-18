import { useState, useEffect } from "react";
import {
  ListaContainer,
  Title,
  WrapColumn,
  Column,
  Row,
  ListaWrap,
  EditButton,
} from "../AdminElements";
import { FormContent, FormInput, FormLabel, Form } from "../AdminForm";
import api from "../../../services/api";

export default function AddProduto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthday, setBirthday] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");

  const addHandler = async (event) => {
    event.preventDefault();
    const response = await api.post("/customer/auth/register");

    if (response.status === 201) {
      alert("Cliente adicionado!");
    } else {
      alert("Erro ao adicionar cliente");
    }
  };

  return (
    <>
      <ListaContainer>
        <Title>Adicionar Cliente</Title>
        <WrapColumn>
          <ListaWrap>
            <Row height="auto" padding="0 0 4rem 0">
              <Column align="center">
                <FormContent>
                  <Form method="POST" onSubmit={addHandler}>
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
                    <FormLabel htmlFor="for">Senha</FormLabel>
                    <FormInput
                      name="password"
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormLabel htmlFor="for">Cpf</FormLabel>
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
