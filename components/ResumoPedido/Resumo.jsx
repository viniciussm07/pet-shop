import {Button, OrderContainer, OrderTable, InfoContainer, StyledDiv, H4, FontBold} from '../style.jsx'



export const Resumo = () => {
    const carrinhoCompras = [
        {
            nome: 'raçao 1kg',
            descricao:'ração para cachorro',
            preco: 10.50,
            quantidade: 3,
        },
        {
            nome: 'brinquedo',
            descricao:'brinquedo para cachorro',
            preco: 35.00,
            quantidade: 1,
        },

    ]
    return (
    <>
        <div>
            <br/>
            Valor dos produtos: R$ <br/>
            Frete: R$ <br/>
            <hr/>
            Total a prazo: R$ <br/>
            <OrderContainer>
                Valor a vista: 
                <h4><FontBold>&nbsp;R$</FontBold></h4>

            </OrderContainer>
        </div>
    </>
        
    )
}