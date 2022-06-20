import styled from 'styled-components'
import Image from 'next/image'

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
