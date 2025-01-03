![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Postegree](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

<p>Um projeto bem simples até, um CRUD funcional porém não estilizado 😉</p>

## <img src='https://github.com/nicholas-sc-08/P-8_CRUD/blob/main/Imagens_Readme/Gif_React.gif' width='25px' height='25px'> Instalação do Projeto

<p>Iremos utilizar o Git para fazer a instalação do projeto, escolha qual o caminho no explorador de arquivos você queira colocar o projeto. Então abra o terminal do windows ou prompt de comando. Digite o comando:</p>

```git
  cd 'caminho_do_arquivo'
```

<p>Após realizar o commando, você irá clonar o projeto em sua máquina.</p>

```git
  git clone https://github.com/nicholas-sc-08/P-8_CRUD.git
```

<p>Vamos instalar as depêndencias para o projeto conseguir rodar.</p>

##

## <img src='https://github.com/nicholas-sc-08/P-8_CRUD/blob/main/Imagens_Readme/Gif_Node.gif' width='25px' height='25px'> Instalando Depências

<p>Inicialmente dentro da pasta src do FrontEnd, execute os comandos a seguir:</p>

```git
  npm i
```

<p>O comando 'npm i' ou 'npm install' ele irá instalar as dependências do NodeJS, assim conseguindo rodar seu projeto localmente (neste caso).</p>

```git
  npm i react-router-dom
```

<p>Já o 'npm i react-router-dom' é uma biblioteca do React, que permite você circular dados entre arquivos entre outras funções. Por mais que não necessite devido ao fato de conter somente um arquivo, achei que seria interresante aplicar para futuras alterações!</p>

```git
  npm i axios
```

<p>Executando o commando 'npm i axios', aplicará o axios em seu projeto, uma API que passará os dados do FrontEnd, para o BackEnd, permitindo a circulação de dados! Caso queira saber mais sobre o axios, acesse o link logo abaixo:</p>

<a href='https://axios-http.com/ptbr/docs/intro'>https://axios-http.com/ptbr/docs/intro</a>

<p>Seguindo para instlação de dependências do BackEnd, utilizaremos algumas bibliotecas. Abra o prompt de commando ou windows terminal, certifique-se que no terminal você esteja dentro da pasta 'back'. Caso não esteja, repita o comando executado anteriormente.</p>

```git
  cd 'caminho_para_a_pasta_back'
```

<p>Você instalará as seguintes depêndencias:</p>

```git
  npm i 
```

<p>Novamente instale o NodeJS, porém desta vez dentro da pasta do BackEnd para rodar o BackEnd.</p>

```git
  npm i express
```

<p>Instale a biblioteca do Express. Ela criará rotas do BackEnd para o Banco de Dados, podendo assim ocorrer a navegação desses dados para o Banco, neste caso seria o nome, email e senha.</p>

<p>Seguindo então instale a biblioteca pg.</p>

```git
  npm i pg
```

<p>Feito isso, dentro arquivo 'server.js' localizado dentro da pasta back, você precisa configurar algumas coisas, ou não 😋</p>

```js
  const express = require('express');
  const cors = require('cors');
  const { Pool } = require('pg');
  const app = express();
  const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'crud', 
    password: 'postgres', 
    port: 5432, 
  });
```

<p>Logo no início do código, no caso do arquivo 'server.js', aonde possui a linhas 'user', você deve colocar o nome de usuário no meu caso é 'postgres' assim como a senha. Coloque seu nome de usuário do pgAdmin. Já no host, neste projeto iremos utilizar o localhost então não é necessário alterar. Então no 'database', você irá colocar o nome do seu database aonde você armazenará as informações dos usuários. Já a senha, coloque a senha do seu pgAdmin. E por fim a ultima linha ali, a 'port', coloque o número da porta aonde o seu pgAdmin utiliza no caso o meu/o padrão é 5432.</p>

<p>Caso as informações são as mesmas, só as mantenham.</p>

<p>Instale a biblioteca pg para conseguir executar comandos do SQL no projeto! E não diretamente na IDE.</p>

<p>🔊 Certifique-se que as bibliotecas, express, pg e a do node estajam instaladas dentro da pasta back.</p>

## <img src='https://github.com/nicholas-sc-08/P-8_CRUD/blob/main/Imagens_Readme/PostgreSQL_Logo.png' width='50px' height='50px'> Configurando o Banco de Dados0

<p>Bom, neste projeto para o armazenamendo de informações utilizaremos a plataforma do pgAdmin.</p>

<p>Crie seu database no pgAdmin, criei um chamado 'crud', nele você criará um script. Deixarei disponível o commando para criação de tabela para facilitar!</p>

```sql
  CREATE TABLE usuarios(

    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(12) NOT NULL
  );
```
<p>Após criar a tabela já está tudo configurado! Caso queira fazer alguma alteração fique a vontade!</p>
