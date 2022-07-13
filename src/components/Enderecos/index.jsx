import Link from "next/link.js";
import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getIdUser } from "../../services/auth";

import {
  Button,
  ButtonContainer,
  OrderContainer,
  FontBold,
  ButtonInverted,
  Input,
  Errors,
} from "../Utils/style";
import { EnderecoContainer } from "./EnderecosElements";
import { Label, BR } from "../Utils/blankStyles";

const Enderecos = () => {
  const router = useRouter();
  const [addresses, setAddresses] = useState([]);
  const [userId, setUserID] = useState("");
  const [edit, setEdit] = useState(0);

  var [indice, setIndice] = useState("");
  var [idAddress, setIdAddress] = useState("");

  const [cep, setCEP] = useState("");
  const [identificacao, setIdentificacao] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");
  const [referencia, setReferencia] = useState("");

  //Pegar os endereços do cliente
  useEffect(() => {
    const id = getIdUser();
    const fetchCustomer = async () => {
      const { data } = await api.get("/customer/address/" + id);
      setAddresses(data);
      setUserID(id);
    };
    fetchCustomer();
  }, []);

  //Verificar a quantidade de endereços para verificar se pode ir para a página de adicionar endereços
  const adicionarEndereco = () => {
    if (addresses.length >= 5) {
      alert("Número máximo de endereços cadastrados!");
    } else {
      router.push("/minha-conta/adicionar-endereco");
    }
  };

  //Função que deleta um endereço
  const confirmarDelete = async (event, idAddress) => {
    const data = {
      _id: idAddress,
    };
    if (window.confirm("Deseja realmente deletar?")) {
      const response = await api.put("/customer/address/" + userId, data);
      if (response.status === 200) {
        Router.reload(window.location.pathname);
      } else {
        alert("Erro ao deletar o endereço");
      }
    }
  };

  const [formErrors, setFormErrors] = useState([]);

  //Função que verifica se a opção de editar endereço foi clicada
  const editarEndereco = (event, id, index) => {
    setEdit(1);
    setIndice(index);
    setIdAddress(id);

    setCEP(addresses[index].cep);
    setIdentificacao(addresses[index].identificacao);
    setLogradouro(addresses[index].logradouro);
    setNumero(addresses[index].numero);
    setBairro(addresses[index].bairro);
    setCidade(addresses[index].cidade);
    setEstado(addresses[index].estado);
    setComplemento(addresses[index].complemento);
    setReferencia(addresses[index].referencia);
  };

  //Função que atualiza o endereço
  const atualizarEndereco = async (event) => {
    console.log(idAddress);
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
      _id: idAddress,
    };

    const response = await api.put("/customer/address/update/" + userId, data);
    if (response.status === 201) {
      alert("Dados Atualizados com sucesso!");
      console.log(response);
      Router.reload(window.location.pathname);
    } else if (response.status === 200) {
      //Verificar se houve erros ao atualizar endereço
      const errors = {};
      if (response.data.status === 1) {
        errors.identificacao = response.data.message;
      }
      setFormErrors(errors);
    } else {
      alert("Erro ao atualizar o endereço");
      console.log(response);
    }
  };

  return (
    <>
      <div>
        <h3>
          <FontBold>Endereços</FontBold>
        </h3>
        {edit === 0 ? (
          addresses.map((endereco, index) => {
            return (
              <OrderContainer key={index}>
                <EnderecoContainer>
                  <div>
                    <p>
                      <FontBold>{endereco.identificacao}</FontBold>
                    </p>
                    <br />
                    {endereco.logradouro}
                    <br />
                    Número: {endereco.numero}, {endereco.complemento}
                    <br />
                    CEP: {endereco.cep} - {endereco.cidade}, {endereco.estado}
                    <br />
                  </div>
                  <ButtonContainer>
                    <ButtonInverted
                      onClick={(event) =>
                        editarEndereco(event, endereco._id, index)
                      }
                    >
                      Editar
                    </ButtonInverted>
                    <Button
                      onClick={(event) => confirmarDelete(event, endereco._id)}
                    >
                      Excluir{" "}
                    </Button>
                  </ButtonContainer>
                </EnderecoContainer>
              </OrderContainer>
            );
          })
        ) : (
          <>
            <BR />
            <h4>Editar Endereço</h4>

            <BR />
            <Label>CEP*</Label>
            <Input
              type="number"
              name="cep"
              maxLength={8}
              placeholder={cep}
              disabled
              required
            />
            <BR />
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
              name="logradouro"
              placeholder={logradouro}
              disabled
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
              name="bairro"
              placeholder={bairro}
              disabled
              required
            />
            <BR />
            <Label>Cidade*</Label>
            <BR />
            <Input
              type="text"
              name="cidade"
              placeholder={cidade}
              disabled
              required
            />
            <BR />
            <Label>Estado*</Label>
            <BR />
            <Input
              type="text"
              name="uf"
              placeholder={estado}
              disabled
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
              <ButtonInverted onClick={atualizarEndereco}>
                Salvar Endereço
              </ButtonInverted>
              <ButtonInverted
                onClick={() => {
                  setEdit(0);
                }}
              >
                x
              </ButtonInverted>
            </ButtonContainer>
          </>
        )}
        <ButtonContainer>
          <Button onClick={adicionarEndereco}>Adicionar Endereço</Button>
        </ButtonContainer>
      </div>
    </>
  );
};

export default Enderecos;
