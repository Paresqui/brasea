# Brasea — Landing Page

Landing page do Brasea construída em [Next.js 16](https://nextjs.org) + Tailwind v4, com formulário de lista de espera integrado ao Supabase.

## Pré-requisitos

- Node.js 20+
- Conta no [Supabase](https://supabase.com)

## 1. Instalar dependências

```bash
npm install
```

## 2. Configurar Supabase

### 2.1 Criar a tabela `waitlist`

No painel do Supabase, abra **SQL Editor** → **New query** e execute o conteúdo de [`supabase/migrations/0001_create_waitlist.sql`](./supabase/migrations/0001_create_waitlist.sql).

Isso cria:
- Tabela `public.waitlist` com colunas: `id`, `nome`, `sobrenome`, `email`, `whatsapp`, `perfil`, `created_at`.
- Índice único em `lower(email)` (evita duplicatas case-insensitive).
- Row Level Security habilitado (sem políticas → só o servidor com Service Role Key pode inserir).

### 2.2 Pegar as chaves da API

No painel do Supabase: **Project Settings** → **API**. Copie:

- **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- **service_role** → `SUPABASE_SERVICE_ROLE_KEY` (**secreta**, nunca comite)

### 2.3 Criar `.env.local`

Duplique `.env.example` como `.env.local` e preencha:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

> `.env.local` já está no `.gitignore`. A Service Role Key só é usada em Server Actions (`app/actions/waitlist.ts` via `lib/supabase/server.ts`) e nunca vai para o browser.

## 3. Rodar em desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Ao enviar o formulário de waitlist, uma linha deve aparecer na tabela `waitlist` do Supabase.

## 4. Build de produção

```bash
npm run build
npm run start
```

## Estrutura relevante

```
my-app/
├── app/
│   ├── actions/waitlist.ts       # Server Action: valida + insere no Supabase
│   └── page.tsx
├── components/lp/                # Seções da landing page
│   ├── WaitlistForm.tsx          # Formulário (client component)
│   └── WaitlistSection.tsx
├── lib/supabase/server.ts        # Cliente Supabase server-only
└── supabase/migrations/          # SQL da tabela waitlist
```

## Próximos passos

- [ ] Integrar [Resend](https://resend.com) para e-mail de confirmação (TODO em `app/actions/waitlist.ts`).
- [ ] Rate limiting / proteção contra spam (Turnstile ou honeypot).
- [ ] Página de política de privacidade (LGPD).
- [ ] Deploy na Vercel com variáveis de ambiente configuradas.
