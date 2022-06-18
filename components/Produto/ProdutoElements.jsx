import styled from 'styled-components'
import Image from 'next/image'

export const ProdutoWrap = styled.div`
    padding: 1rem;
    width: 18rem;
    border-radius: 1rem;

    @media (min-width: 768px) {
        width: 50%;
    }
    @media (min-width: 1024px) {
        width: 25%;
    }
`

export const ImgWrap = styled.a`
    display: block;
    position: relative;
    height: 16rem;
    border-radius: 0.5rem;
    overflow: hidden;
`

export const Img = styled(Image)`
    display: block;
    object-fit: cover;
    object-position: center;
    width:100%;
    height: 100%;
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