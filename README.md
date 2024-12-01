<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Biblioteca Online</title>
</head>
<body>
  <h1>Biblioteca Online</h1>

  <h2>Descrição</h2>
  <p>
    Este projeto implementa uma aplicação de biblioteca online, permitindo que os usuários cadastrem livros, visualizem e busquem livros, além de gerenciar reservas e usuários.
  </p>

  <h2>Requisitos para Rodar o Projeto</h2>
  <ul>
    <li><strong>Node.js</strong> (versão 14 ou superior)</li>
    <li><strong>Angular CLI</strong> (versão 12 ou superior)</li>
    <li><strong>Git</strong> (para clonar o repositório)</li>
  </ul>

  <h2>Requisitos para Rodar Junto ao Backend + Banco de Dados</h2>
  <ul>
    <li><strong>DBeaver</strong>: Ferramenta para gerenciar o banco de dados MySQL.</li>
    <li><strong>Java JDK 21</strong>: O projeto utiliza o Java 21.</li>
    <li><strong>IntelliJ IDEA</strong>: IDE recomendada para o desenvolvimento do projeto.</li>
    <li><strong>MySQL</strong>: Banco de dados utilizado para armazenar os dados da biblioteca.</li>
  </ul>

  <h3>Configuração do Banco de Dados:</h3>
  <ul>
    <li><strong>Host</strong>: localhost</li>
    <li><strong>Login</strong>: admin</li>
    <li><strong>Senha</strong>: admin</li>
  </ul>

  <h2>Funcionalidades</h2>
  <ul>
    <li>
      <strong>Adicionar Livro</strong>: Permite que o usuário cadastre novos livros, fornecendo informações como título, autor, gênero, ano de publicação e quantidade disponível.<br>
      <strong>Classe responsável</strong>: <code>BookFormComponent</code><br>
      <strong>Método responsável</strong>: <code>onSubmit()</code>
    </li>
    <li>
      <strong>Visualizar Livros</strong>: Exibe a lista de livros cadastrados na biblioteca.<br>
      <strong>Classe responsável</strong>: <code>BookListComponent</code><br>
      <strong>Método responsável</strong>: <code>ngOnInit()</code> (responsável por buscar os livros ao carregar o componente e exibi-los)
    </li>
    <li>
      <strong>Buscar Livro</strong>: Permite que o usuário busque um livro pelo título e visualize o resultado com o título e autor.<br>
      <strong>Classe responsável</strong>: <code>BookSearchComponent</code><br>
      <strong>Método responsável</strong>: <code>handleSearch()</code> (realiza a busca pelo título do livro e exibe o resultado com o título e autor)
    </li>
    <li>
      <strong>Fila de Reservas</strong>: Exibe a fila de reservas dos livros, mostrando a reserva do livro, quem fez a reserva e a data de devolução. Também permite ver a próxima reserva.<br>
      <strong>Classe responsável</strong>: <code>ReservationQueueComponent</code><br>
      <strong>Métodos responsáveis</strong>: 
      <ul>
        <li><code>ngOnInit()</code> (responsável por obter e exibir todas as reservas)</li>
        <li><code>handleNextReservation()</code> (exibe a próxima reserva na fila)</li>
      </ul>
    </li>
    <li>
      <strong>Cadastro de Usuário</strong>: Permite que o usuário registre-se no sistema fornecendo seu nome e informações relacionadas.<br>
      <strong>Classe responsável</strong>: <code>UserFormComponent</code><br>
      <strong>Método responsável</strong>: <code>onSubmit()</code> (cadastra um novo usuário no sistema)
    </li>
    <li>
      <strong>Visualizar Usuários</strong>: Exibe a lista de usuários registrados no sistema.<br>
      <strong>Classe responsável</strong>: <code>UserListComponent</code><br>
      <strong>Método responsável</strong>: (No momento, este componente não possui métodos implementados para buscar usuários, mas espera-se que ele exiba a lista de usuários a partir de algum serviço ou lógica adicional).
    </li>
    <li>
      <strong>Remover Livro</strong>: Permite excluir livros da biblioteca.<br>
      <strong>Classe responsável</strong>: <code>BookService</code><br>
      <strong>Método responsável</strong>: <code>deleteBook(id: number)</code>
    </li>
  </ul>

  <h2>Endpoints da API</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Funcionalidade</th>
        <th>Método HTTP</th>
        <th>Endpoint</th>
        <th>Classe Responsável</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Adicionar Livro</strong></td>
        <td>POST</td>
        <td>/api/books</td>
        <td><code>BookFormComponent</code></td>
      </tr>
      <tr>
        <td><strong>Visualizar Livros</strong></td>
        <td>GET</td>
        <td>/api/books</td>
        <td><code>BookListComponent</code></td>
      </tr>
      <tr>
        <td><strong>Buscar Livro</strong></td>
        <td>GET</td>
        <td>/api/books/search?title={title}</td>
        <td><code>BookSearchComponent</code></td>
      </tr>
      <tr>
        <td><strong>Remover Livro</strong></td>
        <td>DELETE</td>
        <td>/api/books/{id}</td>
        <td><code>BookService</code></td>
      </tr>
      <tr>
        <td><strong>Fila de Reservas</strong></td>
        <td>GET</td>
        <td>/api/reservations</td>
        <td><code>ReservationQueueComponent</code></td>
      </tr>
      <tr>
        <td><strong>Próxima Reserva</strong></td>
        <td>GET</td>
        <td>/api/reservations/next</td>
        <td><code>ReservationQueueComponent</code></td>
      </tr>
      <tr>
        <td><strong>Adicionar Usuário</strong></td>
        <td>POST</td>
        <td>/api/users</td>
        <td><code>UserFormComponent</code></td>
      </tr>
      <tr>
        <td><strong>Visualizar Usuários</strong></td>
        <td>GET</td>
        <td>/api/users</td>
        <td><code>UserListComponent</code></td>
      </tr>
      <tr>
        <td><strong>Remover Usuário</strong></td>
        <td>DELETE</td>
        <td>/api/users/{id}</td>
        <td><code>UserService</code></td>
      </tr>
    </tbody>
  </table>
</body>
</html>
