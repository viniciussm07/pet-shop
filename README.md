# pet-shop

## Grupo 22

Vinicius Soares Martins - 11794907

Érica Ribeiro Filgueira dos Santos - 11836351

Júlia do Nascimento - 11794758

## Navigation Diagram

```mermaid
  graph TD;
      Home---Cachorro;
      Cachorro---produto1[Produto];
      
      Home---Gato;
      Gato---produto2[Produto];
      
      Home---Pássaro;
      Pássaro---produto3[Produto];
      Home---login[Login];
      login---homeCliente[<a href='https://github.com/viniciussm07/pet-shop/blob/main/mockups/mockupHomeClient.png?raw=true'>Home Cliente</a>]
      login---register[Sign up]
      login---esqueciASenha[Esqueceu sua Senha?];
      register---homeCliente
      homeCliente---dadosPessoais[Dados Pessoais]
      homeCliente---Pedidos
      
      produto1---carrinho[Carrinho]
      produto2---carrinho
      produto3---carrinho
      
      carrinho---metodoDePagamento[Metodo de Pagamento]
      metodoDePagamento---finalizarCompra[Finalizar Compra]
```

## Project Report

### Requirements

- The system must have 2 types of users: Clients and Administrators
    - Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.

    - Customers are users who access the system to buy products/services.
  
- The admin record includes, at least: name, id, phone, email.

- Each customer's record includes, at least: name, id, address, phone, email
Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.

- Your store may sell products, services or both (you decide)

- Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.

- Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.

- Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.

- The system must provide accessibility requirements and provide good usability. The system must be responsive.

### Project Description

- O projeto consiste no desenvolvimento de uma loja online para um pet shop.
Nessa loja, o cliente é levado primeiramente a uma homepage que mostra alguns produtos disponíveis para compra, e de onde ele pode ser levado às páginas de produtos para cachorro, gato ou pássaros; além disso, ao escolher um brinquedo para comprar, o cliente pode ouvir os barulhos que ele faz para saber como o seu pet irá reagir a ele.


### Test Plan

### Test Results

### Build Procedures

### Problems

### Comments
