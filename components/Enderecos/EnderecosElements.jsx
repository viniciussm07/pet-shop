import Link from 'next/link.js';


import {Button, ButtonContainer, OrderContainer, EnderecoContainer, EnderecoOption, FontBold} from '../style.jsx'

const EnderecoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const EnderecoOption = styled.div`
    margin-top: 10px;
    align-self: flex-end;
`

export const Enderecos = () => {
    
    const enderecos = [
        {
            identificacao: 'Endereço Principal',
            logradouro:'Rua daqui',
            numero: '250',
            CEP: '1111-1111',
            bairro:'bairro',
            cidade: 'cidade',
            uf: 'ET',
            complemento: '',
            referencia: '',

        },
        {
            identificacao: 'Casa',
            logradouro:'Rua de lá',
            numero: '60',
            CEP: '2222-1111',
            bairro:'bairro',
            cidade: 'cidade',
            uf: 'ET',
            complemento: 'AP20A',
            referencia:''

        }
    ]

    const enderecoHandler = async (event) => {
        event.preventDefault();
        alert("Endereço salvo");
      };

    return (<>
            <div>
                <h5><FontBold>Endereços</FontBold></h5>
                {enderecos.map((endereco, index) => {
                    return(
                        <OrderContainer key = {index}> 
                        <EnderecoContainer>
                        <div>
                            <p><FontBold>{endereco.identificacao}</FontBold></p>
                        
                            {endereco.logradouro}<br/>
                            Número: {endereco.numero}, {endereco.complemento}<br/>
                            CEP: {endereco.CEP} - {endereco.cidade}, {endereco.uf}<br/>
                            
                        </div>
                            <EnderecoOption>
                                <a href='#'>Editar | </a>
                                <a href='#'>Excluir </a>
                            </EnderecoOption>
                        </EnderecoContainer>
                    </OrderContainer>
                    );
                }
        
                )}
                <ButtonContainer >
                    <Link href={'/minha-conta/adicionar-endereco'}><Button type="submit">Adicionar Endereço</Button></Link>
                </ButtonContainer>
            </div>
    </>)
}