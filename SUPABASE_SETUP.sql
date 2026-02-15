-- 1. Create the contact_messages table
create table if not exists contact_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  company text,
  message text not null
);

-- 2. Enable Row Level Security (RLS)
alter table contact_messages enable row level security;

-- 3. Create a policy to allow anyone (anon or auth) to insert messages
create policy "Anyone can insert messages"
  on contact_messages
  for insert
  with check (true);

-- 4. Create a policy to allow only authenticated users (admins) to view messages
-- (You can adjust this based on your auth implementation)
create policy "Authenticated users can view messages"
  on contact_messages
  for select
  using (auth.role() = 'authenticated');
