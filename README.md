# Processo Seletivo Lawgic

Brevemente falando sobre o projeto, realizei um backend com: NodeJS (Express), Sequelize para modelagem do banco de dados, PostgreSQL como banco de dados e Arquitetura MSC para a estruturação do backend. O frontend desenvolvi com: ReactJS, Axios para chamada de requisições. Também fiz uma estrutura que já estou acostumado a realizar no front com Components (para os componentes que poderão se repetir em outras páginas), Pages (aonde ficam as páginas), Services (aonde ficam as chamadas para a API), Styles (para estilização) e Utils (para as funções que mais serão utilizadas). E para englobar o projeto inteiro e deixar mais flexível as variáveis de inicialização, inseri váriaveis de ambiente com .env para poder inicializar o projeto de forma dinâmica (você verá mais abaixo o que deverá ser preenchido).

## 📦 Instalação

1. **Na raiz do projeto, navegue até o frontend**
```bash
cd frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Na raiz do projeto, navegue até o backend**
```bash
cd backend
```

4. **Instale as dependências**
```bash
npm install
```

---

## ▶️ Como iniciar o projeto

1. **Na raiz do projeto, navegue até o backend**

```bash
cd backend
```
⚠️ Abra o .env.example, renomeie ele para .env, e preencha de acordo com o que indica o arquivo:

2. **Inicie o backend**
```bash
npm run dev
```

O app será iniciado em:
```
http://localhost:4000
```
---

3. **Na raiz do projeto, navegue até o frontend**

```bash
cd frontend
```
⚠️ Abra o .env.example, renomeie ele para .env, e preencha de acordo com o que indica o arquivo:

4. **Inicie o frontend**
```bash
npm start
```

O app será iniciado em:
```
http://localhost:3000
```

---
