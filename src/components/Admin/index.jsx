import {
  InfoContainer,
  ContainerColumn,
  Div60
} from "../Utils";
import Dados from "../DadosBasicos";

export default function Admin() {
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
