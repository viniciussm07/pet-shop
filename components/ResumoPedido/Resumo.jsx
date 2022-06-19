import {OrderContainer, FontBold} from '/components/Utils/style'



export const Resumo = () => {
    
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