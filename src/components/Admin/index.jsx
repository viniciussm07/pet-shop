import {
  ListaContainer,
  Title,
  WrapColumn,
  Column,
  ListaWrap,
  EditButton,
} from "./AdminElements";
import { FormContent, Form, FormLabel, FormInput } from "./AdminForm";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "../../services/api";
import { getIdUser } from "../../services/auth";

function HomeAdmin() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthday, setBirthday] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");

  const [user, setUser] = useState("");

  useEffect(() => {
    const id = getIdUser();
    const fetchCustomer = async () => {
      const { data } = await api.get("/customer/" + id);
      setName(data.name);
      setCpf(data.cpf);
      setBirthday(data.birthday);
      setCelular(data.celular);
      setTelefone(data.telefone);
      setEmail(data.email);
      setPassword(data.password);
      setUser(data);
    };
    fetchCustomer();
  }, [])

  const updateHandler = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      cpf: cpf,
      birthday: birthday,
      telefone: telefone,
      celular: celular,
      email: email,
      password: password,
    };

    const response = await api.put("/customer/" + user._id, data);

    if (response.status === 201) {
      alert("Dados atualizados!");
      setTimeout(() => {
        router.push("/admin/");
      }, 1000);
    } else {
      alert("Erro ao atualizar dados");
    }
  };
  return (
    <>
      <ListaContainer>
        <Title>Meus Dados</Title>
        <WrapColumn>
          <ListaWrap>
              <Column width="80%" align="center">
                <FormContent>
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
          </ListaWrap>
        </WrapColumn>
      </ListaContainer>
    </>
  );
}

export default HomeAdmin;