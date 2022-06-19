import Link from 'next/link'
import Resumo from '/components/ResumoPedido'

import {Button, ButtonContainer, OrderContainer,  OrderTable, InfoContainer, FontBold, ButtonInverted} from '../style.jsx'
import { useEffect } from 'react'



export const FinalizarCompras = () => {
    
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
    
    let metodoPagamento;
    let frete;

    useEffect(()=>{
        metodoPagamento = localStorage.getItem('Metodo de Pagamento');
        frete = localStorage.getItem('Frete');

    })

    
    if(carrinhoCompras.length > 0){
    return (
        <>
            <div>
                <InfoContainer>
                    <h5><FontBold>MEUS DADOS</FontBold></h5>
                    <OrderContainer>
                        Nome do cliente (emaildocliente@gmail)<br/>
                        CPF: 00000000000
                    </OrderContainer>
                    <h5><FontBold>ENTREGA</FontBold></h5>
                    <OrderContainer>
                        Destinatário: Nome Sobrenome <br/>
                        Rua: {endereco.logradouro}, Número: {endereco.numero}<br/>
                        CEP: {endereco.CEP} - {endereco.cidade}/{endereco.uf}<br/>
                        <br/>
                        Frete: {frete} - de x até y dias úteis <br/>
                        Custo: R$
                    </OrderContainer>
                    <h5><FontBold>PAGAMENTO</FontBold></h5>
                    <OrderContainer>
                        {metodoPagamento}
                    </OrderContainer>
                </InfoContainer>

                <InfoContainer> 
                    <h5><FontBold>PRODUTOS</FontBold></h5>
                    {carrinhoCompras.map((produto, index) => {
                    return(
                    <OrderContainer key = {index}> 
                        <div>
                        <OrderTable >
                            <tbody> 
                            <tr>
                                <td></td>
                                <td ><FontBold>{produto.nome}</FontBold><br/>{produto.descricao}</td>
                                <td>Quantidade<br/>
                                <input type="number" name="quantidade" id="quant" min={1} max={produto.estoque} disabled/><br/>
                                </td>
                                <td>Preço<br/>R${produto.preco}</td>
                                
                            </tr>
                            </tbody>
                        </OrderTable> 
                        </div>
                    </OrderContainer>
                    );
                    }

                    )}
                </InfoContainer>
            </div>
            <div>
            <InfoContainer>
                    <h5><FontBold>RESUMO</FontBold></h5>
                    
                        <Resumo/>
                    
                    
                    <ButtonContainer >
                        <Link href={'#'}><Button>CONFIRMAR PEDIDO</Button></Link>
                    </ButtonContainer>
                    <ButtonContainer >
                        <Link href={'/pagamento'}><ButtonInverted>VOLTAR PARA PAGAMENTO</ButtonInverted></Link>
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
