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
            <Img src={props.image}/>
        </ImgWrap>
        <Description>
            <Category>{props.category}</Category>
            <ProductName>{props.name}</ProductName>
            <ProductPrice>${props.price}</ProductPrice>
        </Description>
    </ProdutoWrap>
  )
}

export default Produto