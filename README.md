# 🔗 Projeto URL Shortener - Node.js & TypeScript

Este é um projeto de encurtador de URLs desenvolvido com **Node.js** e **TypeScript**. O objetivo do sistema é gerar URLs curtas a partir de URLs longas e redirecionar corretamente os usuários.

## 🛠 Tecnologias Utilizadas

- 🟢 **Node.js** - Plataforma para execução do JavaScript no backend
- 📜 **TypeScript** - Superset tipado do JavaScript
- ⚡ **Express.js** - Framework web para Node.js
- 🍃 **MongoDB** - Banco de dados NoSQL
- 🎯 **Typegoose** - Modelagem de dados para MongoDB usando classes TypeScript
- 🔑 **ShortID** - Biblioteca para gerar identificadores curtos

## 📂 Estrutura do Projeto

```
/src/
 ├── config/         # Configurações globais do sistema
 ├── controller/     # Controlador responsável pelas requisições HTTP
 ├── database/       # Modelos e conexão com o MongoDB
 ├── index.ts        # Arquivo principal da aplicação
```

## 🚀 Como Executar o Projeto

### 🎲 Pré-requisitos
- Ter o **Node.js** instalado (versão LTS recomendada)
- Ter o **MongoDB** rodando (local ou via Atlas)

### 📦 Instalação
```bash
# Clone este repositório
git clone https://github.com/seu-usuario/urlshortener-node-typescript.git

# Acesse o diretório do projeto
cd urlshortener-node-typescript

# Instale as dependências
npm install
```

### ▶️ Executando o Servidor
```bash
npm run dev
```

## 📌 Funcionalidades
✅ Encurtamento de URLs
✅ Redirecionamento de URLs encurtadas
✅ Armazenamento em banco de dados MongoDB
✅ Tratamento de URLs duplicadas

## 📡 Rotas da API

### 🔹 Encurtar URL
**POST** `/shorten`
#### 🔽 Body (JSON)
```json
{
  "originURL": "https://exemplo.com/meu-link-grande"
}
```
#### 🔼 Resposta
```json
{
  "hash": "abc123",
  "originURL": "https://exemplo.com/meu-link-grande",
  "shortURL": "http://localhost:5000/abc123"
}
```

### 🔹 Redirecionar URL encurtada
**GET** `/{hash}`
- Redireciona o usuário para a URL original.

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo! 🎉

---

Feito com ❤️ por [João Batista] 🚀
