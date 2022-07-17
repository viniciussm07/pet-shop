import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Router from "next/router";

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

// Retorna um produto que corresponde ao slug passado no path
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
    const [message, setMessage] = useState('');

    function addQuantidade() {
        if(quantidade < produto.stock){
            setQuantidade(quantidade + 1);
        }
        
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

    function addToCart(){
        console.log(produto._id);
        console.log(quantidade);
        // Criando objeto com dados dos inputs
        const quantity = quantidade;
        const price = produto.price;
        const product = produto._id;
        const title = produto.title;
        const slug = produto.slug;
        const image=produto.image;
        const stock=produto.stock;

        
        const dataObj = { quantity, price, product,title , slug,image, stock};

        
        const items = JSON.parse(localStorage.getItem('items'));
        if ( items === null) {
            // Adicionando um array com um objeto no localstorage
            localStorage.setItem('items', JSON.stringify([dataObj]));
            setMessage("Produto inserido no carrinho!");
        } else {
            let index = items.findIndex(items => items.product === produto._id);
            if(index === -1){
                // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
                localStorage.setItem(
                'items',
                // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem('items')),
                    dataObj
                ])
                );
                setMessage("Produto inserido no carrinho!");
            }
            else{
                setMessage("Produto já está no carrinho!");
            }
            
        }
        Router.reload();
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
                            <AddCart onClick={addToCart}>Adicionar ao Carrinho</AddCart>
                        </Row>
                        <br/>
                        <p>{message}</p>
                    </Content>
                </LayoutWrap>
            </LayoutContainer>
            <Footer />
        </>
    )
}