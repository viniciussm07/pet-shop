import { Button, ButtonContainer,Input, FontBold } from '/components/Utils/style'

export const AddEndereco = () => {

    const addEnderecoHandler = async (event) => {
        event.preventDefault();
        alert("Endereço Adicionado!");
      };

    return (<>
        
        <form action="/" method='POST' onSubmit={addEnderecoHandler}>
            <div>
                <h5><FontBold>Adicionar Endereço</FontBold></h5><br/>
                <label>CEP*</label>
                <Input type="number" placeholder="CEP" name="cep" maxLength={8} required/><br/>
                <label>Identificação*</label>
                <Input type="text" placeholder="Identificação" name="id" required/><br/>
                <label>Logradouro*</label>
                <Input type="text" placeholder="Logradouro" name="logradouro" required/><br/>
                <label>Número*</label><br/>
                <Input type="text" placeholder="Número" name="numero" required/><br/>
                <label>Bairro*</label><br/>
                <Input type="text" placeholder="Bairro" name="bairro" required/><br/>
                <label>Cidade*</label><br/>
                <Input type="text" placeholder="Cidade" name="cidade" required/><br/>
                <label>Estado*</label><br/>
                <Input type="text" placeholder="Estado" name="uf" required/><br/>
                <label>Complemento</label><br/>
                <Input type="text" placeholder="Complemento" name="complemento"/><br/>
                <label>Referencia</label><br/>
                <Input type="text" placeholder="Referencia" name="referencia"/><br/>
                

                <ButtonContainer >
                    <Button type="submit">Salvar Endereço</Button>
                </ButtonContainer>
            </div>
        </form>
    </>)
}
