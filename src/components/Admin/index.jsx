import Dados from "../DadosBasicos";
import {
  ListaContainer,
  Title,
  WrapColumn,
  Column,
  ListaWrap
} from "./AdminElements";

function HomeAdmin() {
  return (
    <>
      <ListaContainer>
        <Title>Meus Dados</Title>
        <WrapColumn>
          <ListaWrap>
              <Column align="center">
                <Dados />
              </Column>
          </ListaWrap>
        </WrapColumn>
      </ListaContainer>
    </>
  );
}

export default HomeAdmin;