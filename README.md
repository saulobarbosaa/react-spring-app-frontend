# Aplicação Fullstack: Cardápio - _Backend_ 🔚

![image](https://user-images.githubusercontent.com/82117471/234935747-4afbe644-63de-4b60-81b5-8d595f4b413b.png)

![image](https://user-images.githubusercontent.com/82117471/234935868-41eb55b6-75f1-43f2-bb56-f98e255204b8.png)

## Sobre o projeto 📚

Esse projeto foi desenvolvido em duas partes, front e backend, este repositório está relacionado com o frontend da aplicação e para conferir o back basta [clicar aqui](https://github.com/saulobarbosaa/react-spring-app-backend).

O projeto se baseia em uma aplicação web em um formato de cardápio, que mostra uma seleção de alimentos com seus nomes e preços.

## Propriedades do projeto ⚙️

Através de uma classe Model declarada no Spring, a entidade relacionada ao cardápio foi declarada com as colunas _id_, _image_, _price_ e _title_.

O projeto possui somente dois endpoints:
 - `findAll()`
 - `create()`
 - `delete()`

Como o próprio nome diz, o findAll() efetua um GET em todos os cadastros/refeições presentes na tabela, o create() efetua um cadastro na tabela e o delete() apaga um registro na tabela de acordo com o Id informado. 

Como modo de segurança e boa prática, foi utilizado o padrão de projeto DTO(Data Transfer Object) e para o mapeamento dos objetos foi utilizada a depedência ModelMapper.

Além do mais, foi escolhido o banco de dados PostgreSQL para a persistência dos dados.

## Conectando com o Backend ⚛️

A conexão com o backend da aplicação foi feita por meio de arquivos em TypeScript utilizando as bibliotecas Axios e React Query.

## Obrigado pela atenção!

![Asta gif](https://media.tenor.com/Iy3Wtz2pCaAAAAAC/black-clover-asta.gif)
