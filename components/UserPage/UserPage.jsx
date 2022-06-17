import Link from 'next/link'

import {FontBold, Button, OrderContainer, OrderTable, InfoContainer, StyledDiv, H4, ButtonContainer, ContainerColumn} from '../style.jsx'



export const UserPage = () => {
    const pedidos = [
        {
            numero: '000000',
            data:'27/03/2022',
            valor: 300.50,
            pagamento: 'boleto',
            status: 'entregue'
        },

    ]
    return (
    <>
        <ContainerColumn>
            <InfoContainer>
                <StyledDiv>
                    <h4><FontBold>Informações de Acesso</FontBold></h4>
                    <Link href="/minha-conta/meus-dados"><Button>Meus Dados</Button></Link>
                </StyledDiv>
                <span>Nome do cliente</span><br/>
                <span>emaildocliente@gmail.com</span>
            </InfoContainer>

            <InfoContainer> 
                <StyledDiv>
                    <h4><FontBold>Meus Pedidos</FontBold></h4>
                    <Link href="/minha-conta/meus-pedidos"><Button>Ver todos</Button></Link>
                </StyledDiv>

                {pedidos.length< 1 &&
                    <ButtonContainer>
                        <h6><FontBold><p>Você ainda não fez nenhum pedido.</p></FontBold></h6>
                        <h6>Aproveite nossas ofertas!</h6>
                    </ButtonContainer>
                }

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
        </ContainerColumn>
    </>
        
    )
}