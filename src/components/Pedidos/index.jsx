import Link from 'next/link'

import {Button, OrderContainer, OrderTable, InfoContainer, bold} from '../Utils/style'


export const Pedidos = () => {
    const pedidos = [
        {
            numero: '000000',
            data:'27/03/2022',
            valor: 300.50,
            pagamento: 'boleto',
            status: 'entregue'
        },
        {
            numero: '111111',
            data:'26/03/2022',
            valor: 30.50,
            pagamento: 'boleto',
            status: 'enviado'
        },
        {
            numero: '222222',
            data:'26/08/2022',
            valor: 350.00,
            pagamento: 'boleto',
            status: 'enviado'
        }

    ]
    if(pedidos.length > 0){
        return (
            <>
                <div>
                    <InfoContainer> 
                        {pedidos.map((pedido, index) => {
                        return(
                        <OrderContainer key = {index}> 
                            <div>
                            <OrderTable >
                                <tbody>
                                <tr>
                                    <th>NUMERO</th>
                                    <th>DATA</th>
                                    <th>VALOR</th>
                                    <th>PAGAMENTO</th>
                                    <th>STATUS</th>
                                </tr>  
                                <tr>
                                    <td>#{pedido.numero}</td>
                                    <td>{pedido.data}</td>
                                    <td>{pedido.valor}</td>
                                    <td>{pedido.pagamento}</td>
                                    <td>{pedido.status}</td>
                                </tr>
                                </tbody>
                            </OrderTable> 
                            </div>
                            
                            <Link href={"/minha-conta/meus-pedidos/"+pedido.numero}><Button >Detalhes</Button></Link>
                        </OrderContainer>
                        );
                        }
        
                        )}
                    </InfoContainer>
                </div>
            </>
                
        )
    }
    else{
        return (
            <>
                <div>
                    <h5><bold><p>Você ainda não fez nenhum pedido.</p></bold></h5>
                    <h5>Aproveite nossas ofertas!</h5>
                </div>
            </>
        )
    }
    
}

export default Pedidos;