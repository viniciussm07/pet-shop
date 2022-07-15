import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Resumo from "../ResumoPedido";

import {
  Button,
  ButtonContainer,
  InfoContainer,
  FontBold,
  ButtonInverted,
  Input,
  Errors,
} from "../Utils/style";
import { MetodoPagamento, PagamentoCartao } from "./Pagamento";

const Pagamento = () => {
  const router = useRouter();
  const [metodoPagamento, setMetodoPagamento] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const [infoCartao, setInfoCartao] = useState({
    cvv: "",
    mesValidade: "",
    anoValidade: "",
    name: "",
    cpf: "",
  });

   //Pegar os items do cliente
   useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items != null) {
      setCartItems(items);
    }
  }, []);

  const submitHandler = (event) => {
    if (metodoPagamento == "") {
      event.preventDefault();
      alert("Escolha um metodo de pagamento!");
    } else if (metodoPagamento == "Cartão") {
      if (
        infoCartao.cvv == "" ||
        infoCartao.mesValidade == "" ||
        infoCartao.anoValidade == "" ||
        infoCartao.name == "" ||
        infoCartao.cpf == ""
      ) {
        event.preventDefault();
        alert("Preencha as informações do cartão!");
      } else {
        if (localStorage.getItem("Dados Cartao") == null) {
          event.preventDefault();
          alert("Salve as informações do cartão!");
        }
      }
    }

    sessionStorage.setItem("Payment", metodoPagamento);
  };

  const onChange = (e, payment) => {
    let metodo = e.target.value;
    setMetodoPagamento(metodo);
    sessionStorage.setItem("Payment", payment);
    if (payment != "Cartão") {
      sessionStorage.removeItem("Dados Cartao");
    }
  };

  const salvarInfoCartao = (e) => {
    setInfoCartao({ ...infoCartao, [e.target.name]: e.target.value });
    setFormErrors("");
  };

  const [formErrors, setFormErrors] = useState({});

  let errorsNum = 0;

  const salvarCartao = (event) => {
    event.preventDefault();
    setFormErrors(validate(infoCartao));
    if (errorsNum === 0) {
      addCartao();
    }
  };

  const validate = (infoCartao) => {
    const errors = {};
    if (
      infoCartao.cvv == "" ||
      infoCartao.mesValidade == "" ||
      infoCartao.anoValidade == "" ||
      infoCartao.name == "" ||
      infoCartao.cpf == ""
    ) {
      errorsNum++;
      errors.all = "Preencha as informações do cartão!";
    } else {
      const dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();

      if (Object.keys(infoCartao.cvv).length != 3) {
        errors.cvv = "CVV inválido!";
        errorsNum++;
      }
      if (infoCartao.mesValidade < 1 || infoCartao.mesValidade > 12) {
        errors.mes = "Mês inválido!";
        errorsNum++;
      }
      if (
        infoCartao.anoValidade < anoAtual ||
        infoCartao.anoValidade - anoAtual > 5
      ) {
        errors.ano = "Ano inválido!";
        errorsNum++;
      }
      if (Object.keys(infoCartao.cpf).length != 11) {
        errors.cpf = "CPF inválido!";
        errorsNum++;
      }
    }
    return errors;
  };

  console.log(infoCartao);
  const addCartao = () => {
    const cvv = infoCartao.cvv;
    const mesValidade = infoCartao.mesValidade;
    const anoValidade = infoCartao.anoValidade;
    const name = infoCartao.name;
    const cpf = infoCartao.cpf;

    const dataObj = { cvv, mesValidade, anoValidade, name, cpf };

    sessionStorage.setItem("Dados Cartao", JSON.stringify([dataObj]));
    alert("Informações salvas!");
  };

  return (
    <>
      <div>
        {cartItems != "" ? (
          <>
            <form>
              <MetodoPagamento>
                <input
                  type="radio"
                  id="pix"
                  name="pagamento"
                  value="Pix"
                  onChange={(event) => onChange(event, "Pix")}
                />
                <label htmlFor="pix">&nbsp;Pix</label>
              </MetodoPagamento>
              <MetodoPagamento>
                <input
                  type="radio"
                  id="boleto"
                  name="pagamento"
                  value="Boleto"
                  onChange={(event) => onChange(event, "Boleto")}
                />
                <label htmlFor="boleto">&nbsp;Boleto</label>
              </MetodoPagamento>
              <MetodoPagamento>
                <input
                  type="radio"
                  id="cartao"
                  name="pagamento"
                  value="Cartão"
                  onChange={(event) => onChange(event, "Cartão")}
                />
                <label htmlFor="cartao">&nbsp;Cartão</label>
                {metodoPagamento == "Cartão" && (
                  <PagamentoCartao>
                    <label>CVV*</label>
                    <Input
                      type="number"
                      placeholder="CVV*"
                      name="cvv"
                      maxLength={3}
                      required
                      onChange={salvarInfoCartao}
                    />
                    <Errors>{formErrors.cvv}</Errors>
                    <label>Mês de Validade*</label>
                    <Input
                      type="number"
                      placeholder="Mês Validade*"
                      name="mesValidade"
                      min={1}
                      max={12}
                      required
                      onChange={salvarInfoCartao}
                    />
                    <Errors>{formErrors.mes}</Errors>
                    <label>Ano de Validade*</label>
                    <Input
                      type="number"
                      placeholder="Ano de Validade"
                      name="anoValidade"
                      required
                      onChange={salvarInfoCartao}
                    />
                    <Errors>{formErrors.ano}</Errors>
                    <label>Nome do titular*</label>
                    <Input
                      type="text"
                      placeholder="Nome"
                      name="name"
                      required
                      onChange={salvarInfoCartao}
                    />
                    <br />
                    <br />
                    <label>CPF*</label>
                    <Input
                      type="number"
                      placeholder="CPF*"
                      name="cpf"
                      maxLength={11}
                      required
                      onChange={salvarInfoCartao}
                    />
                    <Errors>{formErrors.cpf}</Errors>
                    <ButtonContainer>
                      <Button onClick={salvarCartao}>SALVAR INFORMAÇÕES</Button>
                    </ButtonContainer>
                    <FontBold>
                      <Errors>{formErrors.all}</Errors>
                    </FontBold>
                  </PagamentoCartao>
                )}
              </MetodoPagamento>
            </form>

            <InfoContainer>
              <h4>
                <FontBold>RESUMO</FontBold>
              </h4>

              <Resumo />

              <ButtonContainer>
                <Link href={"/finalizar-compra"}>
                  <Button onClick={submitHandler}>FINALIZAR A COMPRA</Button>
                </Link>
              </ButtonContainer>
              <ButtonContainer>
                <Link href={"/carrinho"}>
                  <ButtonInverted>VOLTAR PARA CARRINHO</ButtonInverted>
                </Link>
              </ButtonContainer>
            </InfoContainer>
          </>
        ) : (
          <>
            <div>
              <h5>
                <FontBold>Seu carrinho está vazio!</FontBold>
              </h5>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Pagamento;
