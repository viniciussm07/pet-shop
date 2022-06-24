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

export async function getStaticProps(context) {
    const {params} = context;
    const data = await fetch(`/jsonServer/produtos.json/${params.id}`);

    const produto = await data.json();

    return {
        props: {produto}
    }
}

export async function getStaticPath() {
    const response = await fetch("/jsonServer/produtos.json");
    const data = await response.json();

    const paths = data.map((produto) => {
        return {
            params: {
                produtoId: `${produto.id}`
            }
        }
    })

    return {paths, fallback: false};
}

const Layout = ({produto}) => {
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
                        <Img src={produto.imageUrl} />
                    </ImgWrap>
                    <Content>
                        <Title>{produto.nome}</Title>
                        <Row>
                            <Star color2="#FFA10A" edit={false} value={produto.avaliacao} size={30} />
                            <Avaliacoes>(x avaliações)</Avaliacoes>
                        </Row>
                        <Linha />
                        <ProductPrice>R${produts.preco}</ProductPrice>
                        <Description>{produto.descricao}</Description>
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