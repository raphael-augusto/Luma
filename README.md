<p align="center">
   <img src="./web/src/images/logo.svg" {width=120px height=120px}>
</p>

# Projeto LUMA




## Índice
- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Baixar e Rodar o Projeto](#-Baixar-e-Rodar-o-Projeto)




## ✂ Sobre
Projeto para cadastramento de ongs de animais resgatados.
Cada ong vai ter todos os dados tanto bancários e dados referênte aos animais(fotos)


## 🛠 Tecnologias Utilizadas

### Stack:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React JS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node JS](https://nodejs.org/en/)
- [Styled Components](https://styled-components.com/)
- [SQLITE](https://www.sqlite.org/index.html)
- [TYPEORM](https://typeorm.io/#/)


## 💻 Baixar e Codar 

### Instale as dependências

```bash
# Clonar Repositório
$ git clone https://github.com/raphael-augusto/Luma.git

# Entrar no Diretório
$ cd Luma

# Instalar Dependências no back e no front
$ yarn

# Iniciando o Backend e criação do banco
$ yarn typeorm migrations:run
$ yarn dev  

# Iniciando o frontend
$ yarn start

