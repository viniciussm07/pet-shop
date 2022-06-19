import { useEffect, useState } from 'react';
import { Button, ButtonContainer,Input, FontBold } from '../style'
import { router } from 'next/router.js'

import styled from 'styled-components';

const Errors = styled.div`
    color: red;
    padding: 7px 0;
    font-size: 12px;

`

export const SignUp = () => {
    const [values, setValues] = useState({
        name: "",
        cpf: "",
        dateNasc: "",
        sexo: "",
        gender: "",
        telefone: "",
        email: "",
        psw: "",
        pswRepeat: "",
      });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    
    const addUser = () => {
        // Criando objeto com dados dos inputs
        const email = values.email;
        const senha = values.psw;
        const dataObj = { email, senha};

        const users = JSON.parse(localStorage.getItem('users'));
        if ( users === null) {
            // Adicionando um array com um objeto no localstorage
            localStorage.setItem('users', JSON.stringify([dataObj]));
        } else {
            let index = users.findIndex(user => user.email == values.email);
            if(index === -1){
                // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
                localStorage.setItem(
                'users',
                // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem('users')),
                    dataObj
                ])
                );
            }
            else{
                return 1;
            }
            
        }
        setTimeout(()=>{
            router.push('/');
        },2500)
        return 0;
    }

    const signUpHandler = (event) => {
        event.preventDefault();
        setFormErrors(validate(values));
        setIsSubmit(true);
      };

    
      const validate = (values) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if(Object.keys(values.cpf).length>11){
            errors.cpf = "CPF inválido!";
        }
        if (!regexEmail.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (values.pswRepeat != values.psw) {
          errors.senha = "Senhas não correspondem!";
        }
        const users = JSON.parse(localStorage.getItem('users'));
        if(users!=null){
            let index = users.findIndex(user => user.email == values.email);
            if(index != -1){
                errors.email = "Email já cadastrado!";
            }
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
                    <div onLoad={addUser()}>Cadastro com sucesso!</div>
                    
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