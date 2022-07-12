import Dados from "../DadosBasicos";
import {
  ListaContainer,
  Title,
  WrapColumn,
  Column,
  ListaWrap
} from "./AdminElements";

export default function Admin() {
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
