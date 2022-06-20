import { Button, ButtonContainer,Input, H5 } from '../Utils/style'
import { Div, Form, Label, BR } from '../Utils/blankStyles'

const AddEndereco = () => {

    const addEnderecoHandler = async (event) => {
        event.preventDefault();
        alert("Endereço Adicionado!");
      };

    return (<>
        
        <Form action="/" method='POST' onSubmit={addEnderecoHandler}>
            <Div>
                <H5>Adicionar Endereço</H5><BR/>
                <Label>CEP*</Label>
                <Input type="number" placeholder="CEP" name="cep" maxLength={8} required/><BR/>
                <Label>Identificação*</Label>
                <Input type="text" placeholder="Identificação" name="id" required/><BR/>
                <Label>Logradouro*</Label>
                <Input type="text" placeholder="Logradouro" name="logradouro" required/><BR/>
                <Label>Número*</Label><BR/>
                <Input type="text" placeholder="Número" name="numero" required/><BR/>
                <Label>Bairro*</Label><BR/>
                <Input type="text" placeholder="Bairro" name="bairro" required/><BR/>
                <Label>Cidade*</Label><BR/>
                <Input type="text" placeholder="Cidade" name="cidade" required/><BR/>
                <Label>Estado*</Label><BR/>
                <Input type="text" placeholder="Estado" name="uf" required/><BR/>
                <Label>Complemento</Label><BR/>
                <Input type="text" placeholder="Complemento" name="complemento"/><BR/>
                <Label>Referencia</Label><BR/>
                <Input type="text" placeholder="Referencia" name="referencia"/><BR/>
                

                <ButtonContainer >
                    <Button type="submit">Salvar Endereço</Button>
                </ButtonContainer>
            </Div>
        </Form>
    </>)
}

export default AddEndereco;