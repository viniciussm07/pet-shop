
import { useRouter } from 'next/router';
import { Button, ButtonContainer, Input } from '../Utils/style'




const RecuperarSenha = () => {
    const router = useRouter();
    const submitHandler = (event) => {
        event.preventDefault();
        alert("Email de recuperação enviado!");
        router.push('/login');
        
    }
    return (<>
        
        <form method="post" onSubmit={submitHandler}>
            <div >
            <h5>Recuperação de Senha</h5>
            <p>Para recuperar a senha, informe o seu email que enviaremos
                um link para alteração de senha.
            </p>
                <Input type="email" placeholder="Email*" name="email" required/><br/>
                <ButtonContainer>
                    <Button type="submit">Enviar</Button> 
                </ButtonContainer>
                
            </div>

        </form>
    
    </>)
}

export default RecuperarSenha;