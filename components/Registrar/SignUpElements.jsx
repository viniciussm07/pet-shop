
import { Button, ButtonContainer,Input, FontBold } from '../style'

export const SignUp = () => {


    const signUpHandler = async (event) => {
        event.preventDefault();
        alert("Cadastro Realizado!");
      };

    return (<>
        
        <form action="/" method='POST' onSubmit={signUpHandler}>
            <div>
                <h5><FontBold>Crie sua conta</FontBold></h5><br/>
                <label>Nome e Sobrenome*</label>
                <Input type="text" placeholder="Nome" name="name" required/><br/>
                <label>CPF*</label>
                <Input type="number" placeholder="CPF" name="cpf" maxLength={11} required/><br/>
                <label>Data de nascimento</label>
                <Input type="date" placeholder="Data de Nascimento" name="date-nasc"/><br/>
                <label>Sexo</label><br/>
                <input type="radio" id="feminino" name="sexo" value="Feminino"/>
                <label htmlFor ="feminino"> Feminino</label><br/>
                <input type="radio" id="masculino" name="sexo" value="Masculino"/>
                <label htmlFor ="masculino"> Masculino</label><br/>
                <input type="radio" id="nao-informar" name="sexo" value="Nao-Informar"/>
                <label htmlFor ="nao-informar"> Não Informar</label><br/>
                <label>Telefone</label>
                <Input type="text" placeholder="Telefone" name="text"/><br/>
                <label>Email*</label>
                <Input type="email" placeholder="Email*" name="email" required/>
                <label>Senha*</label>
                <Input type="password" placeholder="Senha*" name="psw" required/><br/>
                <label>Confirmar Senha*</label>
                <Input type="password" placeholder="Confirmar Senha*" name="psw-repeat" required/><br/>

                <ButtonContainer >
                    <Button type="submit">Cadastrar</Button>
                </ButtonContainer>
            </div>
        </form>
    </>)
}