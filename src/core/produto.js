export default class Produto{
    constructor(id, nome, preco, avaliacoes, comentarios){
        this.#id = id
        this.#nome = nome
        this.#preco = preco
        this.#avaliacoes = avaliacoes
        this.#comentarios = comentarios
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get preco(){
        return this.#preco
    }
    get avaliacoes(){
        return this.#avaliacoes
    }
    get comentarios(){
        return this.#comentarios
    }
}