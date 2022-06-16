import React from 'react'
import img from "../../images/home/example-logo.png"
import img2 from "../../images/home/example-logo.png"
import { 
Column2,
ImgWrap,
HeroContainer,
HeroWrapper,
HeroRow,
Column1,
TextWrapper,
ImgWrapLogo,
Subtitle,
BtnWrap,
Img,
Heading
} from './HeroElements'

const Hero = () => {
  return (
        <HeroContainer id={"Hero Container"}>
            <HeroWrapper>
                <HeroRow>
                    <Column1>
                    <TextWrapper>
                            <Heading>Adicionar produtos</Heading>
                            <BtnWrap>
                            </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt="Logo pet shop"/>
                        </ImgWrap>
                    </Column2>
                </HeroRow>
            </HeroWrapper>
        </HeroContainer>
  )
}

export default Hero