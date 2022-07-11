import { useState } from 'react'

import Link from 'next/link'
import Resumo from '../ResumoPedido'

import {Button, ButtonContainer, OrderContainer, OrderTable, InfoContainer, bold, ButtonInverted} from '../Utils/style'
import {
    EnderecoContainer,
    EnderecoOption,
    FreteContainer,
    Frete
} from "./Carrinho"


const Carrinho = () => {
    const [frete, setFrete] = useState('');

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

    const submitHandler = (event) => {
        if(frete == ''){
            event.preventDefault();
            alert('Escolha um frete');
        }
        localStorage.setItem('Frete', frete);
    };


    const onChange = (e) => {
        let frete = e.target.value;
        setFrete(frete);
    };
   
    if(carrinhoCompras.length > 0){
    return (
        <>
            <div>
                <InfoContainer>
                    <h5><bold>SELECIONE O ENDEREÇO</bold></h5>
                    <OrderContainer>
                        <EnderecoContainer>
                        <div>
                    <p><bold>{endereco.identificacao}</bold></p>
                    
                        {endereco.logradouro}<br/>
                        Número: {endereco.numero}, {endereco.complemento}<br/>
                        CEP: {endereco.CEP} - {endereco.cidade}, {endereco.uf}<br/>
                        
                        </div>
                        <EnderecoOption>
                            <a href='#'>Selecionar outro </a>
                        </EnderecoOption>
                        </EnderecoContainer>
                    </OrderContainer>
                </InfoContainer>

                <InfoContainer> 
                    <h5><bold>FRETE</bold></h5>
                    <OrderContainer>
                        <FreteContainer>
                            <Frete>
                                <input type="radio" id="correio" name="frete" value="Correios" required onChange={onChange}/>
                                <label htmlFor ="correio">&nbsp;Correios - x a y dias úteis</label>
                            </Frete>
                            

                            <div>Preço: R$</div>
                        </FreteContainer>
                    
                    </OrderContainer>
                </InfoContainer>

                <InfoContainer> 
                    <h5><bold>PRODUTOS</bold></h5>
                    {carrinhoCompras.map((produto, index) => {
                    return(
                    <OrderContainer key = {index}> 
                        <div>
                        <OrderTable >
                            <tbody> 
                            <tr>
                                <td></td>
                                <td ><bold>{produto.nome}</bold><br/>{produto.descricao}</td>
                                <td>Quantidade<br/>
                                <input type="number" name="quantidade" id="quant" placeholder={1} min={1} max={produto.estoque}/><br/>
                                <a  href='#'>Remover</a>
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
                    <h5><bold>RESUMO</bold></h5>
                    
                        <Resumo/>
                    
                    
                    <ButtonContainer >
                        <Link href={'/pagamento'}><Button type='submit' onClick={submitHandler}>IR PARA O PAGAMENTO</Button></Link>
                    </ButtonContainer>
                    <ButtonContainer >
                        <Link href={'/'}><ButtonInverted>CONTINUAR COMPRANDO</ButtonInverted></Link>
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
                    <h5><bold>Seu carrinho está vazio!</bold></h5>
                </div>
            </>
        )
    }
}


export default Carrinho;