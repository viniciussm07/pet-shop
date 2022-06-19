import React from "react"
import {
    LayoutContainer,
    LayoutWraper,
    ImgWrap,
    Img,
    Content,
    Title,
    Avaliacao,
    Description
} from "./ProdutoLayoutElements"
import img from '../../../images/produtos/brinquedo-1.webp'
import { Button } from "../../style"
import ReactStars from 'react-stars'

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
                            <ReactStars edit={false} value={3.5} size={30}/>
                        </Avaliacao>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a quae quo ex exercitationem, perferendis atque voluptas veniam labore, eveniet odio quos officia commodi aliquam vitae deserunt? Facere, ex saepe!</Description>
                        <Button></Button>
                    </Content>
            </LayoutContainer>
        </>
    )
}

export default Layout