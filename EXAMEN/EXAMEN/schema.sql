-- Pega esto en Supabase > SQL Editor > Run
create table public.comentarios (
  id bigint generated always as identity primary key,
  nombre text not null check (char_length(nombre) between 1 and 60),
  valoracion int not null check (valoracion between 1 and 5),
  comentario text not null check (char_length(comentario) between 1 and 500),
  created_at timestamptz not null default now()
);
alter table public.comentarios enable row level security;
create policy "leer comentarios"   on public.comentarios for select using (true);
create policy "enviar comentarios" on public.comentarios for insert with check (true);
