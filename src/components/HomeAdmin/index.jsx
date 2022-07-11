import {
  InfoContainer,
  ContainerColumn,
  Div60
} from "../../components/Utils";
import Dados from "../../components/DadosBasicos";

export default function admin() {
  return (
    <>
        <ContainerColumn>
          <h2>Meus Dados</h2>
          <InfoContainer>
            <Div60>
                <Dados />
            </Div60>
          </InfoContainer>
        </ContainerColumn>
    </>
  );
}
