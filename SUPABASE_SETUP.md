# Supabase Database Setup Guide

This guide will help you set up Supabase for your Bliss Belles website.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in (or create an account)
2. Click **"New Project"**
3. Fill in the details:
   - **Name**: `bliss-belles-website` (or any name you prefer)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest region to your users
   - **Pricing Plan**: Free tier is fine for development
4. Click **"Create new project"**
5. Wait 2-3 minutes for the project to be created

## Step 2: Get Your API Credentials

1. Once your project is ready, go to **Settings** → **API**
2. You'll find two important values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (a long string starting with `eyJ...`)

## Step 3: Set Up Environment Variables

### For Local Development:

1. In your project root, create a file named `.env.local`
2. Copy the contents from `.env.local.example`
3. Fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

4. **Important**: Never commit `.env.local` to Git (it's already in `.gitignore`)

### For Vercel Deployment:

1. Go to your project in [Vercel Dashboard](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Add these two variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
4. Select **Production**, **Preview**, and **Development** environments
5. Click **"Save"**
6. Redeploy your project for the changes to take effect

## Step 4: Create Database Tables

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **"New query"**
3. Open the file `scripts/001_create_orders_tables.sql` from your project
4. Copy the entire contents of that file
5. Paste it into the SQL Editor in Supabase
6. Click **"Run"** (or press Ctrl+Enter)
7. You should see "Success. No rows returned" - this means the tables were created!

### What This Script Creates:

- **customers** table - Stores customer information
- **orders** table - Stores order details
- **order_items** table - Stores individual items in each order
- **notifications** table - Stores discount notifications/banners
- **Row Level Security (RLS) policies** - Controls who can access what data
- **Order number generator function** - Automatically generates unique order numbers

## Step 5: Verify Setup

1. In Supabase dashboard, go to **Table Editor**
2. You should see these tables:
   - `customers`
   - `orders`
   - `order_items`
   - `notifications`
3. Check the `notifications` table - it should have one default notification

## Step 6: Test the Connection

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to your website and try:
   - Adding products to cart
   - Going through checkout
   - Checking the admin page (orders should appear if Supabase is working)

3. Check the browser console (F12) - you should NOT see the Supabase warning message

## Troubleshooting

### "Supabase environment variables are not set" warning

- Make sure `.env.local` exists in your project root
- Make sure the variable names are exactly: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Restart your development server after creating/updating `.env.local`

### Database connection errors

- Verify your Supabase project is active (not paused)
- Check that your API keys are correct
- Make sure you're using the **anon/public** key, not the service role key

### RLS (Row Level Security) errors

- The SQL script sets up RLS policies that allow public access
- If you need stricter security, you can modify the policies in Supabase dashboard

### Orders not appearing in admin

- Check that the tables were created successfully
- Verify the RLS policies allow SELECT operations
- Check the browser console for any error messages

## Security Notes

- The **anon key** is safe to use in client-side code (it's public)
- Never expose your **service_role key** in client-side code
- The RLS policies protect your data even with the anon key
- For production, consider implementing proper authentication

## Next Steps

Once Supabase is set up:
- ✅ Orders will be saved to the database
- ✅ Admin page will show real orders
- ✅ Notifications can be managed from the admin panel
- ✅ Customer data will be stored securely

## Need Help?

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord Community](https://discord.supabase.com)
- Check the Supabase dashboard logs for detailed error messages

