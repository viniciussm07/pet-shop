import styled from 'styled-components'
import { FontBold } from '../style'

const Button = styled.button`

    color: white;
    display:inline-block;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background-color:rgb(255,161,10);

`
const Input = styled.input`
    margin: 5px 0px;
    border-radius: 10px;
    padding: 7px;
    outline: none;
    border: none;
    background-color: rgb(182,222,207);
    width: 100%;
`

const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 20px;

    
`

export const Dados = () => {

    const dados = {
        nomecompleto:"Meu nome",
        email:"meuemail@gmail.com",
        cpf:"06895712548",
        datanascimento:"31/05/1998",
        telefone:"77984512253",
    }


    const updateHandler = async (event) => {
        event.preventDefault();
        alert("Dados atualizados");
      };

    return (<>
        
        <form action="/" method='POST' onSubmit={updateHandler}>
            <div>
                <h5><FontBold>Dados Básicos</FontBold></h5><br/>
                <label>Nome completo*</label>
                <Input type="text" placeholder={dados.nomecompleto} name="name" value={dados.nomecompleto} required/><br/>
                <label>Email*</label>
                <Input type="email" placeholder={dados.email} name="email" required disabled/>
                <label>CPF*</label>
                <Input type="number" placeholder={dados.cpf} name="cpf" maxLength="11" required disabled/><br/>
                <label>Sexo</label><br/>
                <input type="radio" id="feminino" name="sexo" value="Feminino"/>
                <label htmlFor ="feminino"> Feminino</label><br/>
                <input type="radio" id="masculino" name="sexo" value="Masculino"/>
                <label htmlFor ="masculino"> Masculino</label><br/>
                <input type="radio" id="nao-informar" name="sexo" value="Nao-Informar" />
                <label htmlFor ="nao-informar"> Não Informar</label><br/>
                <label>Data de nascimento</label>
                <Input type="text" placeholder={dados.datanascimento} name="date-nasc" disabled/><br/>
                <label>Telefone Celular</label>
                <Input type="text" placeholder={dados.telefone} name="telefonecel" value={dados.telefone}/><br/>
                <label>Telefone Contato</label>
                <Input type="text" placeholder={dados.telefone} name="telefonecont" value={dados.telefone}/><br/>
                

                <ButtonContainer >
                    <Button type="submit">Salvar</Button>
                </ButtonContainer>
            </div>
        </form>
    </>)
}