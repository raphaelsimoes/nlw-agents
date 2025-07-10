# NLW Agents 🌐

Monolito completo da trilha intermediária do **NLW Agents** da Rocketseat. Backend e frontend integrados para criar uma solução de IA com salas de chat.

---

## 🔍 Tecnologias utilizadas

### BackEnd
- **Node.js** + **TypeScript** (experimental strip types)
- **Fastify** – servidor HTTP rápido e moderno  
- **Drizzel ORM** – operações de banco type-safe  
- **PostgreSQL** com **pgvector** – suporte a vetores para IA
- **Zod** – validação de dados e variáveis de ambiente  
- **Docker** banco e serviços containerizados  
- **Biome** – linting e formatação

### FrontEnd
- **React** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e servidor de desenvolvimento
- **TailwindCSS** - Framework CSS utility-first
- **React Router Dom** - Biblioteca de roteamento
- **TanStack React Query** - Gerenciamento de estado servidor e cache
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Biblioteca de ícones

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js instalado (versão com suporte a --experimental-strip-types)
- Docker + Docker Compose

### Instruções Backend

1. Clone o repositório
```
git clone https://github.com/raphaelsimoes/nlw-agents
```

2. Confirgure o BD
```
docker-compose up -d
```

3. Acesse a pasta do server e crie o .env na raiz deste pasta
```
cd server

PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4. Isntale as dependências
```
npm install
```

5. Execute as migrações do banco e caso deseje, o popule com dados de exemplo
```
npx drizzle-kit migrate
npm run db:seed
```

6. Execute o projeto
#### Desenvolvimento:
```
npm run dev
```
#### Produção:
```
npm start
```

### Instruções FrontEnd

1. Com o repositório já clonado, instale as dependências
```
npm install
```

2. Execute o servidor
```
npm run dev
```

3. Acesse a aplicação em `http://localhost:5173`

---

## ⚙️ Scripts úteis

### Backend

| Script                      | Descrição                              |
|-----------------------------|----------------------------------------|
| `npm run dev`               | Roda o servidor com hot reload         |
| `npm start`                 | Inicia em modo produção                |
| `npx drizzle-kit migrate`   | Cria e aplica migração no banco        |
| `npm run db:seed`           | Popula o banco com dados iniciais      |

### FrontEnd

| Script                      | Descrição                              |
|-----------------------------|----------------------------------------|
| `npm run dev`               | Inicia o servidor de desenvolvimento   |
| `npx drizzle-kit migrate`   | Gera build de produção                 |
| `npm run db:seed`           | Preview do build de produção           |

---

## 🔌 Endpoints principais

- `GET /health` – status da API  
- `GET /rooms` – lista todas as salas disponíveis

---

## 🛠️ Funcionalidades

- Criação e gerenciamento de salas  
- Envio e recebimento de mensagens  
- Vetores com pgvector para IA semântica  
- Validação robusta com Zod  
- Tipagem segura com TypeScript
