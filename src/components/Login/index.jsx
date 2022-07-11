import { useState } from 'react';
import { router } from 'next/router.js';
import Link from 'next/link.js';

import {Button, Input, ButtonContainer, bold} from '../Utils/style'


const Login = () => {
    const [values, setValues] = useState({
        email: "",
        psw: "",
      });

    const loginHandler = async (event) => {
        event.preventDefault();
        validateLogin();
      };
    
      const validateLogin = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users === null){
            console.log("Não há usuários cadastrados ainda...");
        }
        else{
            let index = users.findIndex(user => user.email == values.email);
            if(index == -1 || (values.psw !== users[index].senha)) {
                alert("Usuário ou senha incorretos");
            }
            else{
                const email = values.email;
                const senha = values.psw;
                const dataObj = { email, senha};
                localStorage.setItem('userLogado', JSON.stringify([dataObj]));
                localStorage.setItem('isLoggedIn', true);
                router.push('/');
            }
        }    
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (<>
        
        <form method="post" onSubmit={loginHandler}>
            <div >
            <h5><bold>Já é nosso cliente?</bold></h5><br/>
                <Input type="email" placeholder="Email*" name="email" required onChange={onChange}/><br/>

                <Input type="password" placeholder="Senha*" name="psw" required onChange={onChange}/><br/>
                
                <p><input type="checkbox" name="remember"/> Lembrar de mim
                <br/></p>
                <Button type="submit">Login</Button> <br/>
                
            </div>

            <ButtonContainer>
                <span><Link href="/recuperar-senha">Esqueceu a senha?</Link></span>
            </ButtonContainer>
        </form>
    
    </>)
}

export default Login;