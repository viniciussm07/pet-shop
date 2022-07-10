import { useState } from 'react';
import { useRouter } from 'next/router.js'
import { Button, ButtonContainer,Input, FontBold } from '../Utils/style'

import api from '../../pages/api/api'

import {Errors} from './SignUpElements';

const SignUp = () => {
    const router = useRouter();
    const [values, setValues] = useState({
        name: "",
        cpf: "",
        dateNasc: "",
        sexo: "",
        telefone: "",
        email: "",
        psw: "",
        pswRepeat: "",
      });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    let errorsNum = 0;
    
    const addUser = async () => {
        // Criando objeto com dados dos inputs
        const data = {
            name: values.name,
            cpf:  values.cpf,
            birthday:  values.dateNasc,
            telefone:  values.telefone,
            email:  values.email,
            password:  values.psw,
            isAdmin: false,
        }

        console.log(data);

        const response = await api.post('/customer/', data);

        if(response.status===201){
            setTimeout(()=>{
                router.push('/login');
            },2000)
        }
        else{
            alert("Erro ao cadastrar");
        }


        return 0;
    }

    const signUpHandler = (event) => {
        event.preventDefault();
        setFormErrors(validate(values));
        setIsSubmit(true);
        if(errorsNum === 0){
            addUser();
        }
      };

    
      const validate = (values) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if(Object.keys(values.cpf).length!=11){
            errors.cpf = "CPF inválido!";
            errorsNum++;
        }
        if (!regexEmail.test(values.email)) {
          errors.email = "Formato de email inválido!";
          errorsNum++;
        }
        if (values.pswRepeat != values.psw) {
          errors.senha = "Senhas não correspondem!";
          errorsNum++;
        }        
        return errors;
      };


    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (<>
        
        <form action="/" method='POST' onSubmit={signUpHandler}>
            <div>
                <h5><FontBold>Crie sua conta</FontBold></h5><br/>
                <label>Nome e Sobrenome*</label>
                <Input type="text" placeholder="Nome" name="name" required onChange={onChange}/><br/>
                <label>CPF*</label>
                <Input type="number" placeholder="CPF" name="cpf" maxLength={11} required onChange={onChange}/><br/>
                <Errors>{formErrors.cpf}</Errors>
                <label>Data de nascimento</label>
                <Input type="date" placeholder="Data de Nascimento" name="dateNasc" onChange={onChange}/><br/>
                <label>Sexo</label><br/>
                <input type="radio" id="feminino" name="sexo" value="Feminino" onChange={onChange}/>
                <label htmlFor ="feminino"> Feminino</label><br/>
                <input type="radio" id="masculino" name="sexo" value="Masculino" onChange={onChange}/>
                <label htmlFor ="masculino"> Masculino</label><br/>
                <input type="radio" id="nao-informar" name="sexo" value="Nao-Informar" onChange={onChange}/>
                <label htmlFor ="nao-informar"> Não Informar</label><br/>
                <label>Telefone</label>
                <Input type="text" placeholder="Telefone" name="telefone" onChange={onChange}/><br/>
                <label>Email*</label>
                <Input type="email" placeholder="Email*" name="email" required onChange={onChange}/>
                <Errors>{formErrors.email}</Errors>
                <label>Senha*</label>
                <Input type="password" placeholder="Senha*" name="psw" required onChange={onChange}/><br/>
                <label>Confirmar Senha*</label>
                <Input type="password" placeholder="Confirmar Senha*" name="pswRepeat" required onChange={onChange}/><br/>
                <Errors>{formErrors.senha}</Errors>

                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div>Cadastro com sucesso!</div>
                    
                ) 
                : (
                    <></>
                )}
                <ButtonContainer >
                    <Button type="submit">Cadastrar</Button>
                </ButtonContainer>
            </div>
        </form>
    </>)
}

export default SignUp;