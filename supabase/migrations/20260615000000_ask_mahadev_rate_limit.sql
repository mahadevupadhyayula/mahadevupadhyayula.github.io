create table if not exists public.ask_mahadev_rate_limits (
  client_key text primary key,
  window_started_at timestamptz not null default now(),
  request_count integer not null default 0 check (request_count >= 0),
  updated_at timestamptz not null default now()
);

alter table public.ask_mahadev_rate_limits enable row level security;

create or replace function public.check_ask_mahadev_rate_limit(p_client_key text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  current_record public.ask_mahadev_rate_limits%rowtype;
begin
  if p_client_key is null or length(p_client_key) < 32 then
    return false;
  end if;

  insert into public.ask_mahadev_rate_limits (client_key, request_count)
  values (p_client_key, 0)
  on conflict (client_key) do nothing;

  select *
  into current_record
  from public.ask_mahadev_rate_limits
  where client_key = p_client_key
  for update;

  if current_record.window_started_at < now() - interval '1 hour' then
    update public.ask_mahadev_rate_limits
    set window_started_at = now(), request_count = 1, updated_at = now()
    where client_key = p_client_key;

    return true;
  end if;

  if current_record.request_count >= 20 then
    return false;
  end if;

  update public.ask_mahadev_rate_limits
  set request_count = request_count + 1, updated_at = now()
  where client_key = p_client_key;

  return true;
end;
$$;

revoke all on table public.ask_mahadev_rate_limits from anon, authenticated;
revoke all on function public.check_ask_mahadev_rate_limit(text) from public, anon, authenticated;
grant execute on function public.check_ask_mahadev_rate_limit(text) to service_role;