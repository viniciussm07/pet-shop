import Link from 'next/link.js';

import {Button, Input, ButtonContainer, FontBold} from '../style.jsx'

<<<<<<< HEAD

export const Login = () => {

=======

export const Login = () => {

>>>>>>> 0bcc9cc4ab0b107659e9dc2db7edd98d76d0cb48
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
<<<<<<< HEAD
        
            </div>

            <ButtonContainer>
                <span><Link href="/recuperar-senha">Esqueceu a senha?</Link></span>
            </ButtonContainer>
        </form>
=======
                
            </div>
>>>>>>> 0bcc9cc4ab0b107659e9dc2db7edd98d76d0cb48

            <ButtonContainer>
                <span><Link href="/recuperar-senha">Esqueceu a senha?</Link></span>
            </ButtonContainer>
        </form>
    
    </>)
}
