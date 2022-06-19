import React from "react"
import {
    LayoutContainer,
    ImgWrap,
    Img,
    Content,
    Title,
    Avaliacao,
    Avaliacoes,
    Linha,
    ProductPrice,
    Description,
    Star,
    LayoutButton
} from "./ProdutoLayoutElements"
import img from '../../../images/produtos/brinquedo-1.webp'

const Layout = (props) => {
    return(
        <>
            <LayoutContainer>
                    <ImgWrap>
                        <Img src={img}/>
                    </ImgWrap>
                    <Content>
                        <Title>Nome do produto</Title>
                        <Avaliacao>
                            <Star color2="#FFA10A" edit={false} value={3.5} size={30}/>
                            <Avaliacoes>(x avaliações)</Avaliacoes>
                        </Avaliacao>
                        <Linha/>
                        <ProductPrice>R$30,00</ProductPrice>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a quae quo ex exercitationem, perferendis atque voluptas veniam labore, eveniet odio quos officia commodi aliquam vitae deserunt? Facere, ex saepe!</Description>
                        <LayoutButton>Adicionar ao Carrinho</LayoutButton>
                    </Content>
            </LayoutContainer>
        </>
    )
}

export default Layout