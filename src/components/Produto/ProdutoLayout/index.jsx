import React, { useState } from "react"
import { HiMinusSm, HiPlusSm } from "react-icons/hi"
import {
    LayoutContainer,
    LayoutWrap,
    ImgWrap,
    Img,
    Content,
    Title,
    Row,
    Avaliacoes,
    Linha,
    ProductPrice,
    Description,
    Star,
    AddCart,
    AddSubtractCart,
    Add,
    Subtract
} from "./ProdutoLayoutElements"
import img from '/images/produtos/brinquedo-1.webp'
import { produtos } from "../../../core/produtos"

const Layout = (props) => {
    const [quantidade, setQuantidade] = useState(1);

    function addQuantidade() {
        setQuantidade(quantidade + 1);
    }
    function subQuantidade(){
        if (quantidade == 1){
            return quantidade;
        }
        setQuantidade(quantidade - 1);
    }

    return (
        <>
            <LayoutContainer>
                <LayoutWrap>
                    <ImgWrap>
                        <Img src={img} />
                    </ImgWrap>
                    <Content>
                        <Title>Nome do produto</Title>
                        <Row>
                            <Star color2="#FFA10A" edit={false} value={3.5} size={30} />
                            <Avaliacoes>(x avaliações)</Avaliacoes>
                        </Row>
                        <Linha />
                        <ProductPrice>R$30,00</ProductPrice>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a quae quo ex exercitationem, perferendis atque voluptas veniam labore, eveniet odio quos officia commodi aliquam vitae deserunt? Facere, ex saepe!</Description>
                        <Row>
                            <AddSubtractCart>
                                <Subtract onClick={subQuantidade}>
                                    <HiMinusSm />
                                </Subtract>
                                {quantidade}
                                <Add onClick={addQuantidade}>
                                    <HiPlusSm />
                                </Add>
                            </AddSubtractCart>
                            <AddCart>Adicionar ao Carrinho</AddCart>
                        </Row>
                    </Content>
                </LayoutWrap>
                <LayoutWrap>
                    Teste
                </LayoutWrap>
            </LayoutContainer>
        </>
    )
}

export default Layout