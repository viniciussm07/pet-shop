import { Container } from '../Utils'
import {
  HeroWrapper
} from './HeroElements'
import Produto from '../Produto/ProdutoElement'

const Hero = ({produtos}) => {
  return (
        <Container>
            <HeroWrapper>
              {produtos?.map((produto) => (
                <Produto
                  name={produto.title}
                  image={produto.image}
                  key={produto.slug}
                  id={produto._id}
                  price = {produto.price}
                  stock = {produto.stock}
                  destiny = {`/produto/${produto.slug}`}
                />
              ))}
            </HeroWrapper>
        </Container>
  )
}

export default Hero