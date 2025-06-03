# mii-catalog
Esse projeto é um catálogo de produtos de e-commerce. Utilizando a api [DummyJSON](https://dummyjson.com/).
O projeto é composto pelas tecnologias: Vue.js, Vite e Tailwindcss.

- Na tela inicial vemos os produtos do catálogo (21 produtos), podendo ir para os próximos produtos e retroceder.
- Ao clicar em 'mii catalog' na tela inicial abrirá a barra lateral com as categorias dos produtos, tendo a opção de ir para as próximas categorias e retriceder.
- Ao clicar em uma categoria os produtos do catálogo são atualizados referente a categoria clicada.
- Na barra de pesquisa é possível fazer pesquisas dos produtos em tempo real (os produtos vão aparecendo conforme os digitos, máximo 3 produtos).
- Ao clicar em um produto (tanto do catálogo quanto da sugestão da barra de pesquisa) irá ser redirecionada a uma aba onde mostrará mais detalhes do produto.
- Na tela de detalhes dos produtos, ao clicar em 'mii catalog' será redirecionado para a página inicial.
## Setup do Projeto
```sh
npm install
```
```
npm install axios
```
### Compiilar e Rodar para Desenvolvimento
```sh
npm run dev
```

### Compilar para Produção
```sh
npm run build
```
