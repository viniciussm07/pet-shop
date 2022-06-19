import styled from 'styled-components'
import { Container } from '../../Utils'
import Image from 'next/image'

export const LayoutContainer = styled(Container)`
    background-color: white;
    width: 80%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    padding-top: 1rem;

    @media (min-width: 768px){
        flex-direction: row;
    }
`

export const ImgWrap = styled.div`
    width: 50%;
    margin-bottom: 2.5rem;

    @media (min-width: 768px){
        width: 30%;
        margin-bottom: 0px;
        padding-left: 20px;
    }
`

export const Img = styled(Image)`
    object-fit: cover;
    object-position: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: 1024){
        flex-grow: 1;
        padding-left: 6rem;
    }
    @media (min-width: 768px){
        width: 70%;
        padding-left: 4rem;
        align-items: flex-start;
        text-align: left;
    }
`

export const Title = styled.h1 `
    font-size: 1.875rem;
    line-height: 2.25rem;
    /* margin: 1rem; */
    font-weight: 500;
    color: black;

    @media (min-width: 640px){
        font-size: 2.25rem;
        line-height: 2.5rem;
    }
`

export const Avaliacao = styled.span`
    
`


export const Description = styled.p`
    margin-bottom: 2rem;
    line-height: 1.625;
`

