import styled from 'styled-components'
import Image from 'next/image'

export const HeroContainer = styled.section`
    width: 100%;
    padding: 6rem 1.25rem;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 640px) {
        max-width: 640px;
    }
    @media (min-width: 768px) {
        max-width: 768px;
    }
    @media (min-width: 1024px) {
        max-width: 1024px;
    }
    @media (min-width: 1280px) {
        max-width: 1280px;
    }
    @media (min-width: 1536px) {
        max-width: 1536px;
    }
`

export const HeroWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -1rem;
`

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
`

export const Img = styled(Image)`
    width:100%;
    margin:0 0 0 10px;
    padding-left:0;
`
