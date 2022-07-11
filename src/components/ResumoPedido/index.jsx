import {OrderContainer, bold} from '../Utils/style'


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
                <h4><bold>&nbsp;R$</bold></h4>

            </OrderContainer>
        </div>
    </>
        
    )
}

export default Resumo;