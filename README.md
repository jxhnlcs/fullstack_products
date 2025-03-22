
# 🛒 Gerenciador de Produtos

Um sistema completo de cadastro de produtos com funcionalidades de **criação, edição, listagem e exclusão**, desenvolvido com:

- **Angular + Tailwind CSS** no Frontend
- **Spring Boot + MySQL** no Backend

## 💻 Tecnologias Utilizadas

### 🔹 Frontend
- Angular 18
- Tailwind CSS
- Font Awesome (icons)
- Toast customizado com RxJS
- Typescript

### 🔹 Backend
- Java 17
- Spring Boot 3
- Spring Data JPA
- MySQL
- Maven

## 🚀 Como rodar o projeto

### 📦 Backend

1. Acesse a pasta `backend`
2. Execute o Spring Boot:
   - `./mvnw spring-boot:run`
3. Configure o banco no `application.properties`:
   - URL: `jdbc:mysql://localhost:3306/produtos_db`
   - Usuário e senha do seu MySQL
4. Crie o banco no MySQL:
   - `CREATE DATABASE produtos_db;`

---

### 💻 Frontend

1. Acesse a pasta `frontend`
2. Instale as dependências: `npm install`
3. Rode o Angular: `ng serve`
4. Acesse: `http://localhost:4200`

---

## 🧠 Funcionalidades

- [x] Criar produto
- [x] Editar produto
- [x] Excluir produto
- [x] Listar produtos
- [x] Toasts personalizados
- [x] Layout responsivo
- [x] Ícones com Font Awesome

## 📌 Observações

> Esse projeto foi desenvolvido com foco em práticas modernas de desenvolvimento front e back end.  
> Ideal para aplicações CRUD simples, showcases de portfólio e estudos de integração Angular + Spring Boot.
