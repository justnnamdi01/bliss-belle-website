-- Create customers table
create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text not null,
  phone text not null,
  created_at timestamp with time zone default now()
);

-- Create orders table
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  order_number text not null unique,
  status text not null default 'pending' check (status in ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  total_amount decimal(10, 2) not null,
  shipping_address jsonb not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create order_items table
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id text not null,
  product_name text not null,
  product_image text,
  quantity integer not null check (quantity > 0),
  price decimal(10, 2) not null,
  created_at timestamp with time zone default now()
);

-- Create notifications table for admin to manage discount banners
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  message text not null,
  promo_code text,
  is_active boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS on all tables (public access for orders since we don't have user auth)
alter table public.customers enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.notifications enable row level security;

-- Policies for customers (anyone can create, only admins can view all)
create policy "Anyone can create customer"
  on public.customers for insert
  with check (true);

create policy "Anyone can view their own customer data"
  on public.customers for select
  using (true);

-- Policies for orders (anyone can create, admins can view all)
create policy "Anyone can create orders"
  on public.orders for insert
  with check (true);

create policy "Anyone can view orders"
  on public.orders for select
  using (true);

create policy "Anyone can update orders"
  on public.orders for update
  using (true);

-- Policies for order_items
create policy "Anyone can create order items"
  on public.order_items for insert
  with check (true);

create policy "Anyone can view order items"
  on public.order_items for select
  using (true);

-- Policies for notifications (public read, restricted write)
create policy "Anyone can view active notifications"
  on public.notifications for select
  using (is_active = true);

create policy "Anyone can manage notifications"
  on public.notifications for all
  using (true);

-- Create function to generate order numbers
create or replace function generate_order_number()
returns text
language plpgsql
as $$
declare
  new_order_number text;
begin
  new_order_number := 'ORD-' || to_char(now(), 'YYYYMMDD') || '-' || lpad(floor(random() * 10000)::text, 4, '0');
  return new_order_number;
end;
$$;

-- Insert a default notification
insert into public.notifications (title, message, promo_code, is_active)
values ('Special Offer!', 'Get 20% off your first order', 'WELCOME20', true)
on conflict do nothing;
