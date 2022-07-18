import Dados from "../DadosBasicos";
import {
  ListaContainer,
  Title,
  WrapColumn,
  Column,
  ListaWrap,
  EditButton
} from "./AdminElements";
import { logout, getToken, getIsLoggedIn } from "../../services/auth";
import api from "../../services/api";

function HomeAdmin() {
  return (
    <>
      <ListaContainer>
        <Title margin="0 0 0 0">Minha Conta</Title>
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