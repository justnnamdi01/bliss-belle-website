# Deployment Guide - Bliss Belle Website

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `bliss-belle-website` (or any name you prefer)
   - **Description**: "Bliss Belle E-commerce Website"
   - **Visibility**: Choose **Private** or **Public**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
cd "C:\Users\richa\Downloads\code (2)"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with the repository name you created

If you're asked for credentials:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)
  - To create one: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
  - Give it `repo` permissions

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (use GitHub to sign in)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository:
   - Find your `bliss-belle-website` repository
   - Click **"Import"**
4. Configure the project:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
5. **Environment Variables** (if using Supabase):
   - Click **"Environment Variables"**
   - Add:
     - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
6. Click **"Deploy"**
7. Wait for deployment to complete (usually 2-3 minutes)
8. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd "C:\Users\richa\Downloads\code (2)"
vercel
```

4. Follow the prompts:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

## Step 5: Set Up Environment Variables in Vercel

If you need Supabase:

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **"Save"**
5. Redeploy your project for changes to take effect

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### Environment Variables Not Working
- Make sure variable names start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding environment variables

### Images Not Loading
- Check that image URLs are accessible
- Verify external image domains in `next.config.mjs` if needed

## Next Steps

- ✅ Your site is now live on Vercel!
- 🔄 Every push to the `main` branch will automatically deploy
- 📊 Monitor deployments in the Vercel dashboard
- 🎨 Customize your domain and settings as needed

## Support

For issues:
- Check Vercel documentation: https://vercel.com/docs
- Check Next.js documentation: https://nextjs.org/docs

