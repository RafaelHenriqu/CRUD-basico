# ⚠️ PROJETO DE ESTUDO (LEIA PRIMEIRO)

Este projeto foi desenvolvido exclusivamente com fins de aprendizado.

Ele NÃO representa um projeto em nível de produção, nem segue todas as boas práticas avançadas de arquitetura.

Projetos reais (produção) possuem:
- Melhor organização de código (Controller / Service / Repository)
- Melhor tratamento de erros
- Validações mais completas
- Segurança aprimorada
- Escalabilidade

Este projeto tem como foco principal demonstrar entendimento básico de APIs REST, CRUD e integração com banco de dados.

---

# 📌 API de Piadas (CRUD Básico)

Este projeto é uma API simples desenvolvida com o objetivo de aprendizado em backend, incluindo operações básicas de CRUD utilizando Node.js e MySQL.

---

## 🚀 Tecnologias utilizadas

- Node.js  
- Express  
- MySQL  
- dotenv  
- mysql2  

---

## 🎯 Objetivo

O principal objetivo deste projeto foi praticar:

- Criação de APIs REST  
- Integração com banco de dados MySQL  
- Operações CRUD (Create, Read, Update, Delete)  
- Manipulação de rotas com Express  
- Uso de variáveis de ambiente  

---

## 📦 Funcionalidades

- 📥 Criar uma piada  
- 📄 Listar todas as piadas  
- 🔍 Buscar piadas pelo ID (via listagem geral)  
- ✏️ Atualizar uma piada existente  
- ❌ Deletar uma piada  

---

## 📁 Estrutura (simplificada)

O projeto atualmente está organizado de forma direta em um único arquivo principal, contendo:

- Configuração do servidor  
- Conexão com o banco de dados  
- Definição das rotas  
- Lógica das operações CRUD  

> Observação: A estrutura não segue uma arquitetura em camadas (Controller / Service / Repository), pois o foco foi aprendizado inicial e implementação funcional.

---

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <URL>
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Criar um arquivo `.env` na raiz do projeto:

```env
host=localhost
user=root
password=sua_senha
port=3306
database=nome_do_banco
```

### 4. Criar banco e tabela no MySQL

Execute o seguinte SQL:

```sql
CREATE DATABASE nome_do_banco;

USE nome_do_banco;

CREATE TABLE main (
    id INT AUTO_INCREMENT PRIMARY KEY,
    piada VARCHAR(255) NOT NULL
);
```

### 5. Executar o servidor

```bash
node index.js
```

O servidor irá rodar em:

```
http://localhost:5000
```

---

## 📌 Rotas disponíveis

### GET /
Retorna todas as piadas cadastradas.

---

### POST /post/:Piada
Cria uma nova piada.

Exemplo:
```
/post/Minha piada aqui
```

---

### PUT /Update/:id/:value
Atualiza uma piada existente pelo ID.

Exemplo:
```
/Update/1/Nova piada
```

---

### DELETE /Delete/:id
Remove uma piada pelo ID.

Exemplo:
```
/Delete/1
```

---

## ⚠️ Observações

- Este projeto foi desenvolvido com foco educacional.
- Não possui validações avançadas nem arquitetura em camadas.
- Pode conter melhorias estruturais futuras (refatoração, separação em controllers/services/repositories, etc).

---

## 📚 Aprendizados

Durante o desenvolvimento, foram praticados:

- Estrutura básica de APIs REST  
- Integração com banco de dados  
- Manipulação de rotas com Express  
- Uso de parâmetros de requisição  
- Operações CRUD  

---

## 🏁 Status

✔ Projeto concluído como exercício de aprendizado  
📌 Próximos passos: projetos mais estruturados e com arquitetura em camadas  