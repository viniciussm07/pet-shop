import React from 'react'
import { 
ProdutoWrap,
ImgWrap,
Img,
Description,
Category,
ProductName,
ProductPrice
} from './ProdutoElements'

const Produto = (props) => {
  return (
    <ProdutoWrap href={props.destiny}>
        <ImgWrap>
            <Img src={props.image ? props.image : "/images/wthout-image.png"} height="200px" width="200px"/>
        </ImgWrap>
        <Description>
            <Category>{props.category}</Category>
            <ProductName>{props.name}</ProductName>
            <ProductPrice>${props.price.toFixed(2).toString()}</ProductPrice>
        </Description>
    </ProdutoWrap>
  )
}

export default Produto