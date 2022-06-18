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
import produto1 from '../../images/home/racao-golden-caes.webp'

const Produto = () => {
  return (
    <ProdutoWrap>
        <ImgWrap>
            <Img src={produto1}/>
        </ImgWrap>
        <Description>
            <Category>Cachorro</Category>
            <ProductName>Ração Golden</ProductName>
            <ProductPrice>$30,00</ProductPrice>
        </Description>
    </ProdutoWrap>
  )
}

export default Produto