
import { Button, ButtonContainer, Input } from '/components/Utils/style'


export const RecuperarSenha = () => {

    return (<>
        
        <form method="post">
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