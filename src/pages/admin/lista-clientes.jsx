import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  InfoContainer,
  ContainerColumn
} from "../../components/Utils";
import { Div60 } from "../../components/Utils/pagesStyles";

export default function EditarClientes() {
  return (
    <>
      <Navbar />
        <ContainerColumn>
          <h2>Lista Clientes</h2>
          <InfoContainer>
            <Div60>
            </Div60>
          </InfoContainer>
        </ContainerColumn>
      <Footer />
    </>
  );
}
