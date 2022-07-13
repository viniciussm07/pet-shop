import {
  Button,
  ButtonInverted,
  ButtonContainer,
  Input,
  H5,
  Errors,
} from "../Utils/style";
import { Div, Form, Label, BR } from "../Utils/blankStyles";
import { useEffect, useState } from "react";
import { getIdUser } from "../../services/auth";
import api from "../../services/api";
import { useRouter } from "next/router";
import Link from "next/link.js";

const AddEndereco = () => {
  const router = useRouter();

  const [cep, setCEP] = useState("");
  const [identificacao, setIdentificacao] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");
  const [referencia, setReferencia] = useState("");

  const [idUser, setId] = useState("");

  //Obter os dados do cliente logado
  useEffect(() => {
    const id = getIdUser();
    setId(id);
    const fetchCustomer = async () => {
      const { data } = await api.get("/customer/" + id);
      if (data.addresses.length >= 5) {
        alert("Número máximo de endereços cadastrados!");
        router.push("/minha-conta/meus-dados");
      }
    };
    fetchCustomer();
  }, []);

  const [formErrors, setFormErrors] = useState([]);

  //Funcao que realiza a inserção de um novo endereço
  const addEnderecoHandler = async (event) => {
    event.preventDefault();

    const data = {
      cep: cep,
      identificacao: identificacao,
      logradouro: logradouro,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      complemento: complemento,
      referencia: referencia,
    };

    const response = await api.post("/customer/address/" + idUser, data);

    if (response.status === 201) {
      alert("Endereço Adicionado!");
      router.push("/minha-conta/meus-dados");
    } else if (response.status === 200) {
      //Verificar se houve erros ao adicionar endereço
      const errors = {};
      if (response.data.status === 1) {
        errors.cep = response.data.message;
      }
      if (response.data.status === 2) {
        errors.identificacao = response.data.message;
      }
      setFormErrors(errors);
    } else {
      alert("Erro ao adicionar endereço!");
    }
  };

  return (
    <>
      <Form action="/" method="POST" onSubmit={addEnderecoHandler}>
        <Div>
          <H5>Adicionar Endereço</H5>
          <BR />
          <Label>CEP*</Label>
          <Input
            type="number"
            placeholder="CEP"
            name="cep"
            maxLength={8}
            value={cep}
            onChange={(e) => setCEP(e.target.value)}
            required
          />
          <BR />
          <Errors>{formErrors.cep}</Errors>
          <Label>Identificação*</Label>
          <Input
            type="text"
            placeholder="Identificação"
            name="id"
            value={identificacao}
            onChange={(e) => setIdentificacao(e.target.value)}
            required
          />
          <BR />
          <Errors>{formErrors.identificacao}</Errors>
          <Label>Logradouro*</Label>
          <Input
            type="text"
            placeholder="Logradouro"
            name="logradouro"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            required
          />
          <BR />
          <Label>Número*</Label>
          <BR />
          <Input
            type="number"
            placeholder="Número"
            name="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
          <BR />
          <Label>Bairro*</Label>
          <BR />
          <Input
            type="text"
            placeholder="Bairro"
            name="bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
          />
          <BR />
          <Label>Cidade*</Label>
          <BR />
          <Input
            type="text"
            placeholder="Cidade"
            name="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
          <BR />
          <Label>Estado*</Label>
          <BR />
          <Input
            type="text"
            placeholder="Estado"
            name="uf"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
          <BR />
          <Label>Complemento</Label>
          <BR />
          <Input
            type="text"
            placeholder="Complemento"
            name="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
          <BR />
          <Label>Referencia</Label>
          <BR />
          <Input
            type="text"
            placeholder="Referencia"
            name="referencia"
            value={referencia}
            onChange={(e) => setReferencia(e.target.value)}
          />
          <BR />

          <ButtonContainer>
            <Button type="submit">Salvar Endereço</Button>
          </ButtonContainer>
        </Div>
      </Form>
      <ButtonContainer>
        <Link href={"/minha-conta/meus-dados"}>
          <ButtonInverted>Voltar</ButtonInverted>
        </Link>
      </ButtonContainer>
    </>
  );
};

export default AddEndereco;
