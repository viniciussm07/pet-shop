import React from 'react'
import { 
HeroContainer,
HeroWrapper,
ImgWrap,
Img
} from './HeroElements'

import Produto from '../Produto'

const Hero = () => {
  return (
        <HeroContainer>
            <HeroWrapper>
              <Produto/>
              <Produto/>
              <Produto/>
              <Produto/>
            </HeroWrapper>
        </HeroContainer>
  )
}

export default Hero