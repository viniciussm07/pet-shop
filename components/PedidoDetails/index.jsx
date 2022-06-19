import {FontBold, OrderContainer, OrderTable, InfoContainer} from '/components/Utils/style'

export const Pedido = () => {
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
    return (
    <>
        <div>
        <InfoContainer>
            <h6><FontBold>DATA DO PEDIDO:</FontBold> XX/XX/XXXX</h6>
            <h6><FontBold>STATUS:</FontBold> STATUS</h6>
            <br/>
            <h5><FontBold>ENTREGA</FontBold></h5>
                <OrderContainer>
                    Destinatário: Nome Sobrenome <br/>
                    Rua: {endereco.logradouro}, Número: {endereco.numero}<br/>
                    CEP: {endereco.CEP} - {endereco.cidade}/{endereco.uf}<br/>
                        <br/>
                    Frete - de x até y dias úteis <br/>
                    Custo: R$
                </OrderContainer>
                <h5><FontBold>PAGAMENTO</FontBold></h5>
                <OrderContainer>
                    [Método de Pagamento]
                </OrderContainer>

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
                <h6><FontBold>TOTAL DO PEDIDO:</FontBold> R$</h6>
        </InfoContainer>
        </div>
    </>
        
    )
}

export default Pedido;