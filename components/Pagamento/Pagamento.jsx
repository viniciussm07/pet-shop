import Link from 'next/link'
import Resumo from '/components/ResumoPedido'

import {Button, ButtonContainer, OrderContainer, EnderecoContainer, EnderecoOption, OrderTable, InfoContainer, FontBold, StyledDiv, H4, ButtonInverted, MetodoPagamento} from '../style.jsx'



export const Pagamento = () => {
    const carrinhoCompras = [
        {
            nome: 'raçao 1kg',
            descricao:'ração para cachorro',
            preco: 10.50,
            estoque: 10,
        },
        {
            nome: 'brinquedo',
            descricao:'brinquedo para cachorro',
            preco: 35.00,
            estoque: 10,
        },

    ]

    const endereco =
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

    }
   
    if(carrinhoCompras.length > 0){
    return (
        <>
            <div>
                <MetodoPagamento>
                    MÉTODO 1
                </MetodoPagamento>
                <MetodoPagamento>
                    MÉTODO 2
                </MetodoPagamento>
                <MetodoPagamento>
                    MÉTODO 3
                </MetodoPagamento>
            </div>

            <div>
            <InfoContainer>
                    <h5><FontBold>RESUMO</FontBold></h5>
                    
                        <Resumo/>
                    
                    
                    <ButtonContainer >
                        <Link href={'/finalizar-compra'}><Button>FINALIZAR A COMPRA</Button></Link>
                    </ButtonContainer>
                    <ButtonContainer >
                        <Link href={'/carrinho'}><ButtonInverted>VOLTAR PARA CARRINHO</ButtonInverted></Link>
                    </ButtonContainer>
                </InfoContainer>

            </div>
        </>
            
        )
    }
    else{
        return (
            <>
                <div>
                    <h5><FontBold>Seu carrinho está vazio!</FontBold></h5>
                </div>
            </>
        )
    }
}