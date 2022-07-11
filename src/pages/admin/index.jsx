import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  InfoContainer,
  ContainerColumn
} from "../../components/Utils";
import { Div60 } from "../../components/Utils/pagesStyles";
import Dados from "../../components/DadosBasicos";

export default function admin() {
  return (
    <>
      <Navbar />
        <ContainerColumn>
          <h2>Meus Dados</h2>
          <InfoContainer>
            <Div60>
                <Dados />
            </Div60>
          </InfoContainer>
        </ContainerColumn>
      <Footer />
    </>
  );
}
