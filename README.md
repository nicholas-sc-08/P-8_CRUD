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

<p>Instale a biblioteca pg para conseguir executar comandos do SQL no projeto! E não diretamente na IDE.</p>
