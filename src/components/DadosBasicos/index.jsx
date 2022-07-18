import { useState, useEffect } from "react";
import api from "../../services/api";
import { getIdUser, setIdName } from "../../services/auth";
import { Input, FontBold, Button, ButtonContainer } from "../Utils/style";

const Dados = () => {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [dateNasc, setDateNasc] = useState("");
  const [celular, setCelular] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] = useState("");

  //Obter as informações do cliente logado
  useEffect(() => {
    const id = getIdUser();
    const fetchCustomer = async () => {
      const { data } = await api.get("/customer/" + id);
      setName(data.name);
      setCPF(data.cpf);
      setDateNasc(data.birthday);
      setCelular(data.celular);
      setTelefone(data.telefone);
      setEmail(data.email);
      setUser(data);
    };
    fetchCustomer();
  }, []);

  //Função para realizar a atualização dos dados
  const updateHandler = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      cpf: cpf,
      birthday: dateNasc,
      telefone: telefone,
      celular: celular,
      email: email,
      password: user.password,
      isAdmin: user.isAdmin,
    };

    const response = await api.put("/customer/" + user._id, data);

    if (response.status === 201) {
      setIdName(data.name);
      alert("Dados atualizados");
    } else {
      alert("erro ao atualizar os dados");
    }
  };

  return (
    <>
      <form action="/" method="POST" onSubmit={updateHandler}>
        <div>
          <h3>
            <FontBold>Dados Básicos</FontBold>
          </h3>
          <br />
          <label>Nome completo*</label>
          <Input
            type="text"
            placeholder={name}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label>Email*</label>
          <Input
            type="email"
            placeholder={email}
            name="email"
            required
            disabled
          />
          <label>CPF*</label>
          <Input
            type="number"
            placeholder={cpf}
            name="cpf"
            maxLength="11"
            required
            disabled
          />
          <br />
          <label>Data de nascimento</label>
          <Input
            type="date"
            placeholder={dateNasc}
            name="date-nasc"
            value={dateNasc}
            disabled
          />
          <br />
          <label>Telefone Celular</label>
          <Input
            type="text"
            placeholder={celular}
            name="telefonecel"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
          <br />
          <label>Telefone Contato</label>
          <Input
            type="text"
            placeholder={telefone}
            name="telefonecont"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <br />

          <ButtonContainer>
            <Button type="submit">Salvar</Button>
          </ButtonContainer>
        </div>
      </form>
    </>
  );
};

export default Dados;
