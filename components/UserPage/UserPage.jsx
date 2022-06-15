export const UserPage = () => {
    const pedidos = [
        {
            numero: '#000000',
            data:'27/03/2022',
            valor: 300.50,
            pagamento: 'boleto',
            status: 'entregue'
        },
        {
            numero: '#11111',
            data:'26/03/2022',
            valor: 30.50,
            pagamento: 'boleto',
            status: 'enviado'
        }

    ]
    return (
    <>
        <div>
            <h3>MINHA CONTA</h3>

            <div>
                <div>
                    <h4>Informações de Acesso</h4>
                    <button className="btn btn-primary">Meus dados</button>
                </div>
                <span>Nome do cliente</span><br/>
                <span>emaildocliente@gmail.com</span>
            </div>

            <div className="result-container"> 
                <div>
                    <h4>Meus pedidos</h4>
                    <button className="btn btn-primary">Ver todos</button>
                </div>
                <table>
                    <tr>
                        <th>NUMERO</th>
                        <th>DATA</th>
                        <th>VALOR</th>
                        <th>PAGAMENTO</th>
                        <th>STATUS</th>
                    </tr>
                </table>
                {pedidos.map((pedido, index) => {
                return(
                <div key = {index}> 
                    <table>
                        <tr>
                            <td>{pedido.numero}</td>
                            <td>{pedido.data}</td>
                            <td>{pedido.valor}</td>
                            <td>{pedido.pagamento}</td>
                            <td>{pedido.status}</td>
                        </tr>
                    </table> 
                    <button className="btn btn-primary">Detalhes</button>            
                </div>
                );
                }

                )}
            </div>
        </div>
    </>
        
    )
}