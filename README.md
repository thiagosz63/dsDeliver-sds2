# Sistema DS Delivery

Url para visualizar o projeto

https://ds-delivery-tsa.netlify.app/

## Sobre o projeto

DS Delivery é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema de delivery, onde o cliente poderá efetuar o pedido atraves do sistema web, e atraves do app mobile o vendedor poderá visualizar os pedidos, indicando quem o fez e onde será entregue.

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/thiagosz63/dsDeliver-sds2

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/thiagosz63/dsDeliver-sds2

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
npm install

# Mapbox
Para ativar a API de mapas localmente é preciso editar o arquivo adicionando o token na variavel 
# .env

# executar o projeto
npm start
```
Url para visualizar o projeto rodando localmente no browser
[http://localhost:3000](http://localhost:3000).

# Autor

Thiago Alcantara


