import { useState } from "react";
import { useRouter } from "next/router.js";
import {
  Button,
  ButtonContainer,
  Input,
  FontBold,
  Errors,
} from "../Utils/style";

import api from "../../services/api";

const SignUp = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    cpf: "",
    dateNasc: "",
    telefone: "",
    email: "",
    psw: "",
    pswRepeat: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let errorsNum = 0;

  //Função que adiciona os dados cadastrados no banco de dados
  const addUser = async () => {
    // Criando objeto com dados dos inputs
    const data = {
      name: values.name,
      cpf: values.cpf,
      birthday: values.dateNasc,
      telefone: values.telefone,
      email: values.email,
      password: values.psw,
      isAdmin: false,
    };

    const response = await api.post("/customer/auth/register", data);

    console.log(response);

    if (response.status === 201) {
      setIsSubmit(true);
      alert("cadastrado com sucesso!")
      setTimeout(() => {
        router.push("/login");
      }, 800);
    } else if (response.status === 200) {
      const errors = {};
      if (response.data.status === 2) {
        errors.email = "Email já cadastrado!";
        setFormErrors(errors);
      }
    }

    return 0;
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(values));
    if (errorsNum === 0) {
      addUser();
    }
  };

  //Função para validação dos dados de cadastro
  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const dateNasc = values.dateNasc.split("-");
    const anoNasc = parseInt(dateNasc[0]);
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    if (Object.keys(values.cpf).length != 11) {
      errors.cpf = "CPF inválido!";
      errorsNum++;
    }
    if (!regexEmail.test(values.email)) {
      errors.email = "Formato de email inválido!";
      errorsNum++;
    }
    if (Object.keys(values.psw).length < 8) {
      errors.senha = "Senha muito curta!";
      errorsNum++;
    }
    if (values.pswRepeat != values.psw) {
      errors.senha = "Senhas não correspondem!";
      errorsNum++;
    }
    if (anoAtual - anoNasc < 13) {
      errors.date = "Informe uma data válida";
      errorsNum++;
    }
    return errors;
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setFormErrors("");
    errorsNum = 0;
  };

  return (
    <>
      <form action="/" method="POST" onSubmit={signUpHandler}>
        <div>
          <h5>
            <FontBold>Crie sua conta</FontBold>
          </h5>
          <br />
          <label>Nome e Sobrenome*</label>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            required
            onChange={onChange}
          />
          <br />
          <label>CPF*</label>
          <Input
            type="text"
            placeholder="CPF"
            name="cpf"
            maxLength={11}
            required
            onChange={onChange}
          />
          <br />
          <Errors>{formErrors.cpf}</Errors>
          <label>Data de nascimento</label>
          <Input
            type="date"
            placeholder="Data de Nascimento"
            name="dateNasc"
            required
            onChange={onChange}
          />
          <br />
          <Errors>{formErrors.date}</Errors>
          <label>Telefone</label>
          <Input
            type="text"
            placeholder="Telefone"
            name="telefone"
            onChange={onChange}
          />
          <br />
          <label>Email*</label>
          <Input
            type="email"
            placeholder="Email*"
            name="email"
            required
            onChange={onChange}
          />
          <Errors>{formErrors.email}</Errors>
          <label>Senha*</label>
          <Input
            type="password"
            placeholder="Senha*"
            name="psw"
            required
            onChange={onChange}
          />
          <br />
          <label>Confirmar Senha*</label>
          <Input
            type="password"
            placeholder="Confirmar Senha*"
            name="pswRepeat"
            required
            onChange={onChange}
          />
          <br />
          <Errors>{formErrors.senha}</Errors>

          {errorsNum === 0 && isSubmit ? (
            <div>Cadastro com sucesso!</div>
          ) : (
            <></>
          )}
          <ButtonContainer>
            <Button type="submit">Cadastrar</Button>
          </ButtonContainer>
        </div>
      </form>
    </>
  );
};

export default SignUp;
