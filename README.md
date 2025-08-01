# App AI Agents

## Pré-requisitos
- Node.js 18+
- pnpm
- PostgreSQL rodando

## Setup Inicial

1. **Clone e instale dependências:**
   ```bash
   git clone <repo>
   cd app-ai-agents
   pnpm install
   ```

2. **Configure o banco de dados:**
   - Crie um banco PostgreSQL
   - Copie `.env.example` para `.env`
   - Configure a `DATABASE_URL` no `.env`

3. **Setup do banco e build:**
   ```bash
   pnpm run setup
   ```

4. **Execute o projeto:**
   ```bash
   pnpm run dev
   ```

## Estrutura
- `apps/api` - API NestJS
- `packages/database` - Configuração Prisma compartilhada

## Comandos Úteis
- `pnpm run dev` - Roda todos os projetos em modo desenvolvimento
- `pnpm run build` - Build de todos os projetos
- `pnpm run db:setup` - Setup do banco de dados