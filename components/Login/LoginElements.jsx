import Link from 'next/link.js';

import {Button, Input, ButtonContainer, FontBold} from '../style.jsx'



export const Login = () => {

    const loginHandler = async (event) => {
        event.preventDefault();
        alert("Usuário Logado!");
      };

    return (<>
        
        <form method="post" onSubmit={loginHandler}>
            <div >
            <h5><FontBold>Já é nosso cliente?</FontBold></h5><br/>
                <Input type="email" placeholder="Email*" name="email" required/><br/>

                <Input type="password" placeholder="Senha*" name="senha" required/><br/>
                
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
