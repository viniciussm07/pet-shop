import Link from 'next/link.js';

import {Button, ButtonContainer, OrderContainer, bold} from '../Utils/style'
import {EnderecoContainer, EnderecoOption} from './EnderecosElements'

const Enderecos = () => {
    
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

    return (<>
            <div>
                <h5><bold>Endereços</bold></h5>
                {enderecos.map((endereco, index) => {
                    return(
                        <OrderContainer key = {index}> 
                        <EnderecoContainer>
                        <div>
                            <p><bold>{endereco.identificacao}</bold></p>
                        
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


export default Enderecos;