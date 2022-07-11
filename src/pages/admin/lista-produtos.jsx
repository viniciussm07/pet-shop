import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  InfoContainer,
  ContainerColumn
} from "../../components/Utils";
import { Div60 } from "../../components/Utils/pagesStyles";

export default function EditarProdutos() {
  return (
    <>
      <Navbar />
        <ContainerColumn> 
          <h2>Lista Produtos</h2>
          <InfoContainer>
            <Div60>
              {/* get produtos */}
            </Div60>
          </InfoContainer>
        </ContainerColumn>
      <Footer />
    </>
  );
}
