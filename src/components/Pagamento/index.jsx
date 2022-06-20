import Link from 'next/link'
import { useState } from 'react'

import Resumo from '../ResumoPedido'

import {Button, ButtonContainer, InfoContainer, FontBold, ButtonInverted, Input} from '../Utils/style'
import {MetodoPagamento, PagamentoCartao} from './Pagamento'



const Pagamento = () => {
    const [metodoPagamento, setMetodoPagamento] = useState('');
    const[infoCartao, setInfoCartao] = useState({
        cvv: "",
        mesValidade: "",
        anoValidade: "",
        name: "",
        cpf: "",
    })

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

    const submitHandler = (event) => {
        if(metodoPagamento == ''){
            event.preventDefault();
            alert('Escolha um metodo de pagamento!');
        }
        else if(metodoPagamento == "Cartão"){
                if(infoCartao.cvv==''||
                    infoCartao.mesValidade==''||
                    infoCartao.anoValidade==''||
                    infoCartao.name==''||
                    infoCartao.cpf==''){
                    event.preventDefault();
                    alert('Preencha as informações do cartão!');
                }
                else{
                    if (localStorage.getItem('Dados Cartao') == null){
                        event.preventDefault();
                        alert('Salve as informações do cartão!');
                    }
                }
        }

        localStorage.setItem('Metodo de Pagamento', metodoPagamento);
    };


    const onChange = (e) => {
        let metodo = e.target.value;
        setMetodoPagamento(metodo);
    };


    const salvarInfoCartao = (e) =>{
        setInfoCartao({ ...infoCartao, [e.target.name]: e.target.value });
       
    }
    console.log(infoCartao);
    const salvarCartao = (event) => {
        event.preventDefault();

        const cvv = infoCartao.cvv;
        const mesValidade = infoCartao.mesValidade;
        const anoValidade = infoCartao.anoValidade;
        const name = infoCartao.name;
        const cpf = infoCartao.cpf;

        const dataObj = { cvv, mesValidade, anoValidade, name, cpf};

        if(infoCartao.cvv==''||
            infoCartao.mesValidade==''||
            infoCartao.anoValidade==''||
            infoCartao.name==''||
            infoCartao.cpf==''){
            event.preventDefault();
            alert('Preencha as informações do cartão!');
        }
        else{
            localStorage.setItem('Dados Cartao', JSON.stringify([dataObj]));
        }
        
        
    };
   
    if(carrinhoCompras.length > 0){
    return (
        <>
            <div>
                <form>
                    <MetodoPagamento>
                        <input type="radio" id="pix" name="pagamento" value="Pix" onChange={onChange}/>
                        <label htmlFor ="pix">&nbsp;Pix</label>
                    </MetodoPagamento>
                    <MetodoPagamento>
                        <input type="radio" id="boleto" name="pagamento" value="Boleto" onChange={onChange}/>
                        <label htmlFor ="boleto">&nbsp;Boleto</label>
                    </MetodoPagamento>
                    <MetodoPagamento>
                        <input type="radio" id="cartao" name="pagamento" value="Cartão" onChange={onChange}/>
                        <label htmlFor ="cartao">&nbsp;Cartão</label>
                        {metodoPagamento == "Cartão" && (
                            <PagamentoCartao>
                                    <label>CVV*</label>
                                    <Input type="number" placeholder="CVV*" name="cvv" maxLength={3} required onChange={salvarInfoCartao}/><br/>
                                    <label>Mês de Validade*</label>
                                    <Input type="number" placeholder="Mês Validade*" name="mesValidade" min={1} max={12} required onChange={salvarInfoCartao}/><br/>
                                    <label>Ano de Validade*</label>
                                    <Input type="number" placeholder="Ano de Validade" name="anoValidade" min={2023} max={2036} required onChange={salvarInfoCartao}/><br/>
                                    <label>Nome do titular*</label>
                                    <Input type="text" placeholder="Nome" name="name" required onChange={salvarInfoCartao}/><br/>
                                    <label>CPF*</label><br/>
                                    <Input type="number" placeholder="CPF*" name="cpf" maxLength={11} required onChange={salvarInfoCartao}/><br/>
                                    <ButtonContainer >
                                        <Button onClick={salvarCartao}>SALVAR INFORMAÇÕES</Button>
                                    </ButtonContainer>
                            </PagamentoCartao>
                        )}
                    </MetodoPagamento>
                </form>
                
            </div>

            <div>
            <InfoContainer>
                    <h5><FontBold>RESUMO</FontBold></h5>
                    
                        <Resumo/>
                    
                    
                    <ButtonContainer >
                        <Link href={'/finalizar-compra'}><Button onClick={submitHandler}>FINALIZAR A COMPRA</Button></Link>
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

export default Pagamento;