import { useState } from 'react';
import { router } from 'next/router.js';
import Link from 'next/link.js';

import api from '../../services/api'
import {login, setIdName, setIdUser, setUserType} from '../../services/auth'


import {Button, Input, ButtonContainer, FontBold, Errors} from '../Utils/style'


const Login = () => {
    const [values, setValues] = useState({
        email: "",
        psw: "",
      });

    const [loginError, setLoginError] = useState('');

    const loginHandler = async (event) => {
        event.preventDefault();
        validateLogin();
      };
    

    //Função para validação do login
    const validateLogin = async () => {
        const data = {
            email: values.email,
            password: values.psw
        }

        const response = await api.post('/customer/auth/login', data);

        if(response.status === 200){
            if(response.data.status===1){
                login(response.data.token);
                setIdUser(response.data.id);
                setIdName(response.data.username);
                setUserType(response.data.isAdmin);

                window.location.href('/');
            }
            else if(response.data.status===2){
                setLoginError ("Senha ou email incorretos");
            }
        }
        else{
            alert("Erro no servidor");
        }
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setLoginError('');
    };


    return (<>
        
        <form method="post" onSubmit={loginHandler}>
            <div >
            <h5><bold>Já é nosso cliente?</bold></h5><br/>
                <Input type="email" placeholder="Email*" name="email" required onChange={onChange}/><br/>

                <Input type="password" placeholder="Senha*" name="psw" required onChange={onChange}/><br/>
                
                <p><input type="checkbox" name="remember"/> Lembrar de mim
                <br/></p>

                <Errors>{loginError}</Errors>

                <Button type="submit">Login</Button> <br/>
                
            </div>

            <ButtonContainer>
                <span><Link href="/recuperar-senha">Esqueceu a senha?</Link></span>
            </ButtonContainer>
        </form>
    
    </>)
}

export default Login;