<div align="center">

![placeholder](./public/assets/logo.png)
![placeholder](./public/assets/logo2.png)

![placeholder](./public/assets/chef.png)

---

  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>

Agradecimento especial ao instrutor [Mayk Brito](https://github.com/maykbrito/) e à todos os envolvidos no desenvolvimento desse super bootcamp.

</div>

---

## Descrição do projeto

Este projeto foi desenvolvido como desafio final do Bootcamp Launchbase com o intuito
de colocar em prática os conhecimentos do aluno que foram adquiridos durante o treinamento.
O desenvolvimento iniciou-se pelo frontend e em seguida prosseguiu para o backend, ou seja, todos os conhecimentos transmitidos foram colocados a prova no desafio final.

## Ferramentas utilizadas

- NodeJS v13.2.0
- PostgreSQL
- Nunjucks
- VSCode (O editor de texto vai da escolha do desenvolvedor.)

## Para reproduzir o projeto

- Clone este repositório

```sh
git clone https://github.com/victorradael/Foodfy.git
```

- Com o terminal aberto na pasta do projeto execute

```sh
npm install
```

- Crie o banco de dados de acordo com as instruções no arquivo `foodfydb.sql`.

- Altere as credenciais de acesso ao banco de dados no arquivo `src/app/config/db.js` de acordo com a sua conexão com o banco de dados. O banco desse projeto foi o PostgresSQL.

- Com o banco de dados rodando e conectado com a aplicação, execute o seguinte comando para popular o banco

```nodejs
node seed.js
```

- Por conta do preenchimento automatico do banco de dados a imagem para usuários, receitas e chefes e chefes é a mesma, e esta localizada na pasta `./public/images/eximage.jpg`, ;

**_Muita atenção ao excluir usuários, chefs e receitas, pois estamos utilizando o mesmo placeholder para os avatares e imagens de receitas. Lembre-se de criar um novo arquivo com o nome 'eximage.png' na pasta `./public/images` sempre que excluir um usuário, chef ou receita._**

- Por fim, para iniciar a aplicacao execute

```nodejs
npm start
```

## Detalhes importantes

- Para acessar a área de administrador basta escolher algum usuário na tabela 'users', com 'true' na coluna 'is_admin', copiar o endereço de e-mail e utilizar a senha padrão 'admin'.

- Para utilizar a função de recuperação de senha inclua a configuração do mailtrap no criando um arquivo `.env` na raiz do projeto de acordo com o arquivo `.env.example`.

- Caso o banco de dados já esteja populado e tenha a tabela foodfy criada, execute a rotina de limpeza que se encontra no arquivo `foodfydb.sql` com a tag **--to run seeds**.

- Crie novos chefs e receitas antes de testar as lógicas de remoção e edição, pois os elementos criados pelo seed.js compartilham o mesmo placeholder.

---

<div align="center">

## Licença

Esse projeto está sob a licença MIT. Veja a página [LICENSE](https://opensource.org/licenses/MIT) para mais detalhes.

</div>
