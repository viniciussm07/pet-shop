import React from 'react'
import { Container } from '../Utils'
import {
  HeroWrapper
} from './HeroElements'
import Produto from '../Produto/ProdutoElement'
import produto1 from '/images/produtos/racao-golden-caes.webp'
import produto2 from '/images/produtos/petisco-caes.webp'
import produto3 from '/images/produtos/brinquedo-1.webp'
import produto4 from '/images/produtos/racao-gatos.webp'

const Hero = () => {
  return (
        <Container>
            <HeroWrapper>
              <Produto image = {produto1} category = {"Cachorro"} name ={"Ração Golden 1kg"} price = {30.00}/>
              <Produto image = {produto2} category = {"Cachorro"} name ={"Petisco Doguitos"} price = {15.00}/>
              <Produto image = {produto3} category = {"Cachorro"} name ={"Bolinha LCM Cravinho"} price = {10.00}/>
              <Produto image = {produto4} category = {"Gato"} name ={"Ração Gran Plus 10,1kg"} price = {150.00}/>
              <Produto image = {produto1} category = {"Cachorro"} name ={"Ração Golden 1kg"} price = {30.00}/>
              <Produto image = {produto2} category = {"Cachorro"} name ={"Petisco Doguitos"} price = {15.00}/>
              <Produto image = {produto1} category = {"Cachorro"} name ={"Ração Golden 1kg"} price = {30.00}/>
              <Produto image = {produto2} category = {"Cachorro"} name ={"Petisco Doguitos"} price = {15.00}/>
              <Produto image = {produto3} category = {"Cachorro"} name ={"Bolinha LCM Cravinho"} price = {10.00}/>
              <Produto image = {produto4} category = {"Gato"} name ={"Ração Gran Plus 10,1kg"} price = {150.00}/>
              <Produto image = {produto1} category = {"Cachorro"} name ={"Ração Golden 1kg"} price = {30.00}/>
              <Produto image = {produto2} category = {"Cachorro"} name ={"Petisco Doguitos"} price = {15.00}/>
            </HeroWrapper>
        </Container>
  )
}

export default Hero