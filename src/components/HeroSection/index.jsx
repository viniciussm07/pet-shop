import React, { useEffect, useState } from 'react'
import { Container } from '../Utils'
import {
  HeroWrapper
} from './HeroElements'
import Produto from '../Produto/ProdutoElement'
import api from '../../services/api'

const Hero = () => {
  const [produtos, setProdutos] = useState([]);
  

  useEffect(() => {
    api.get("/products").then(({data}) => {
      console.log(data);
      setProdutos(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
        <Container>
            <HeroWrapper>
              {/* <Produto destiny="/produto/0" image = {produto1} category = {"Cachorro"} name ={"Ração Golden 1kg"} price = {30.00}/> */}
              {produtos?.map((produto) => (
                <Produto
                  name={produto.title}
                  image={produto.image}
                  key={produto.slug}
                  id={produto._id}
                  price = {produto.price}
                  destiny = {`/produto/${produto.slug}`}
                />
              ))}
            </HeroWrapper>
        </Container>
  )
}

export default Hero