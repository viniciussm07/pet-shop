import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

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
} from "../../components/Produto/ProdutoLayout/ProdutoLayoutElements"
import { produtos } from "/src/produtos"
import img from "../../../images/produtos/brinquedo-1.webp"

export async function getStaticProps ({ params = {} }) {
    const produto = produtos.find(({id}) => `${id}` === `${params.produtoId}`);
    return {
        props: {
            produto
        },
    }
}

export async function getStaticPaths() {
    const paths = produtos.map((produto) => {
        const {id} = produto;
        return {
            params: {
                produtoId: id.toString()
            }
        }
    })
    return { paths, fallback: false }
}

export default ({ produto }) => {
    const [quantidade, setQuantidade] = useState(1);

    function addQuantidade() {
        setQuantidade(quantidade + 1);
    }
    function subQuantidade() {
        if (quantidade == 1) {
            return quantidade;
        }
        setQuantidade(quantidade - 1);
    }

    return (
        <>
            <Navbar />
            <LayoutContainer>
                <LayoutWrap>
                    <ImgWrap>
                        <Img
                        src={produto.imageUrl}
                        width="1000%"
                        height="1000%"
                        />
                    </ImgWrap>
                    <Content>
                        <Title>{produto.nome}</Title>
                        <Row>
                            <Star color2="#FFA10A" edit={false} value={produto.avaliacao} size={30} />
                            <Avaliacoes>(x avaliações)</Avaliacoes>
                        </Row>
                        <Linha />
                        <ProductPrice>R${produto.preco}</ProductPrice>
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
            <Footer />
        </>
    )
}