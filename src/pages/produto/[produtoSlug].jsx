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
    Title1,
    Row,
    Linha,
    ProductPrice,
    Description,
    AddCart,
    AddSubtractCart,
    Add,
    Subtract
} from "../../components/Produto/ProdutoLayout/ProdutoLayoutElements"
import api from "../../services/api"


// Gera uma rota dinâmica para cada produto na lista de produtos para gerar uma página estática de cada um
export async function getStaticPaths() {
    const produtos = await api.get("/products");
    const paths = produtos.data.map((produto) => {
        const {slug} = produto;
        return {
            params: {
                produtoSlug: slug.toString()
            }
        }
    })
    return { paths, fallback: false }
}

// Retorna um produto que corresponde ao id passado no path
export async function getStaticProps ({ params }) {
    const resp = await api.get(`/products/${params.produtoSlug}`);
    const produto = resp.data
    
    return {
        props: {
            produto
        },
    }
}

export default ({ produto }, props) => {
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
    function formatPreco(s){
        return s.replace('.',',')
    }

    return (
        <>
            <Navbar />
            <LayoutContainer>
                <LayoutWrap bgColor = "#fff" mgTop="2.5rem">
                    <ImgWrap>
                        <Img
                        src={produto.image}
                        width="1000%"
                        height="1000%"
                        />
                    </ImgWrap>
                    <Content>
                        <Title1>{produto.title}</Title1>
                        <Linha />
                        <ProductPrice>R${formatPreco(produto.price.toFixed(2).toString())}</ProductPrice>
                        <Description>{produto.description}</Description>
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
            </LayoutContainer>
            <Footer />
        </>
    )
}