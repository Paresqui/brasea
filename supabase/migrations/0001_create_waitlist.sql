-- Tabela de lista de espera (waitlist) do Brasea
-- Executar no SQL Editor do Supabase ou via CLI.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  sobrenome text not null,
  email text not null,
  whatsapp text,
  perfil text not null,
  created_at timestamptz not null default now()
);

-- Evita o mesmo e-mail duas vezes (case-insensitive).
create unique index if not exists waitlist_email_lower_unique
  on public.waitlist (lower(email));

-- Habilita Row Level Security (a Service Role Key usada no servidor ignora RLS).
alter table public.waitlist enable row level security;

-- Por padrão, sem políticas: apenas a Service Role Key consegue ler/escrever.
-- Se quiser permitir INSERT público da anon key, descomente:
-- create policy "waitlist_public_insert"
--   on public.waitlist for insert
--   to anon
--   with check (true);
