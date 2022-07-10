import React, { useEffect, useState } from 'react'
import { Container } from '../Utils'
import {
  HeroWrapper
} from './HeroElements'
import Produto from '../Produto/ProdutoElement'
import api from '../../service/api'

const Hero = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get("produtos").then(({data}) => {
      setProdutos(data.produtos);
    })
  }, [])
  return (
        <Container>
            <HeroWrapper>
              <Produto destiny="/produto/0" image = {produto1} category = {"Cachorro"} name ={"Ração Golden 1kg"} price = {30.00}/>
              {produtos?.map((produto) => (
                <Produto
                  key={produto._id}
                  id={produto._id}
                  title={produto.title}
                />
              ))}
            </HeroWrapper>
        </Container>
  )
}

export default Hero