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
  const confirmarSair = async () => {
    if (window.confirm("Deseja realmente sair?")) {
      const response = await api.get("/customer/auth/destroyToken", {
        headers: { token: getToken() },
      });
      if (response.status === 200) {
        logout();
        window.location.href = "/";
      }
    }
  };
  return (
    <>
      <ListaContainer>
        <Title margin="0 0 0 0">Minha Conta</Title>
        <EditButton align="flex-start" onClick={confirmarSair}>Logout</EditButton>
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