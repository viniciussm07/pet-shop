import styled from 'styled-components'
import Image from 'next/image'

export const ProdutoWrap = styled.a`
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    margin: 5px auto 5px auto;
    width: 30%;
    text-decoration: none;
    color: black;

    @media (min-width: 768px) {
        width: 19%;
    }
    @media (min-width: 1024px) {
        width: 15%;
    }
    &:hover{
        box-shadow: 0px 0px 5px black;
    }
`

export const ImgWrap = styled.div`
    position: relative;
    overflow: hidden;
`

export const Img = styled(Image)`
    /* display: block;
    object-fit: cover;
    object-position: center; */
`

export const Description = styled.div`
    margin-top: 1rem;
`

export const Category = styled.h3`
    color: rgb(107 114 128);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1rem;
    margin-bottom: 0.25;
`

export const ProductName = styled.h2`
    color: rgb(17 24 39);
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
`

export const ProductPrice = styled.p`
    margin-top: 0.25rem;
`