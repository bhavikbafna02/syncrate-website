-- Run this SQL in your Supabase SQL Editor to create the contacts table

create table if not exists contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  company text,
  message text not null
);

-- Enable Row Level Security
alter table contacts enable row level security;

-- Allow anyone (authenticated or anonymous) to insert data
create policy "Anyone can insert contacts"
  on contacts for insert
  with check (true);

-- Optional: Allow only authenticated users to read (e.g., admins)
-- You might restrict reading to a specific role or user ID later.
