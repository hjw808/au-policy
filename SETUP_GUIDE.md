# Setup Guide — Australian Policy Accountability System

Everything you need to do to get this system running, in order.
Each step takes 2-5 minutes. Total time: about 30-45 minutes.

---

## Step 1: Create Free Accounts (10 mins)

### 1a. Supabase (database)
1. Go to https://supabase.com and sign up (free, use your GitHub account)
2. Click "New Project"
3. Name it anything (e.g. `au-policy-tracker`)
4. Choose a strong database password (save it somewhere)
5. Select region: **Southeast Asia (Singapore)** (closest to Australia)
6. Wait for it to provision (~2 mins)
7. Go to **Settings → API** and copy:
   - **Project URL** (looks like `https://xxxx.supabase.co`)
   - **service_role key** (the SECRET one — not the anon key)
   - **anon key** (the public one — used by the frontend)

### 1b. OpenAustralia API Key
1. Go to https://www.openaustralia.org.au/api/key
2. Enter your email address
3. They'll email you an API key instantly (check spam)

### 1c. They Vote For You API Key (optional but recommended)
1. Go to https://theyvoteforyou.org.au/users/sign_up
2. Create a free account
3. Your API key will be on your account page
4. This enables voting record data (which MP voted yes/no on each policy)

### 1d. Vercel (website hosting)
1. Go to https://vercel.com and sign up (free, use your GitHub account)
2. You'll connect it to a GitHub repo later

### 1e. GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g. `au-policy-accountability`)
3. Make it **public** (this is an open-source project)

---

## Step 2: Push Code to GitHub (5 mins)

On your local machine, open a terminal in the `policy-tracker` folder:

```bash
cd policy-tracker
git init
git add .
git commit -m "Initial commit: ingestion pipeline + frontend"
git remote add origin https://github.com/YOUR_USERNAME/au-policy-accountability.git
git branch -M main
git push -u origin main
```

---

## Step 3: Set Up the Database (5 mins)

### 3a. Create the .env file for the backend
```bash
cp .env.example .env
```
Edit `.env` and fill in:
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=eyJ... (the service_role key)
OPENAUSTRALIA_API_KEY=your-key-here
LOG_LEVEL=info
DRY_RUN=false
```

### 3b. Run the schema
```bash
node src/index.js
```
This will print the SQL schema. Copy everything it prints and:
1. Go to your Supabase dashboard
2. Click **SQL Editor** (left sidebar)
3. Click **New query**
4. Paste the SQL
5. Click **Run**
6. You should see "Success. No rows returned."

### 3c. Verify tables exist
```bash
node src/index.js
```
This time it should start ingesting data. It will take a while on first run
(processing dates from 2010 to present). Let it run.

---

## Step 4: Quick Test with Seed Data (2 mins)

Before running the full ingestion (which takes time), you can test everything works
with realistic sample data:

```bash
node src/seed.js
```

This inserts 6 sample MPs, 5 policies (4 with full analysis), 12 donations, 5 companies,
and voting records — enough to see the full website working. You can run the real
ingestion alongside or after this.

---

## Step 5: First Data Ingestion (15 mins)

The first run will process a lot of data. Let it run to completion:
```bash
node src/index.js
```

You should see output like:
```
🇦🇺 Australian Policy Accountability System
==================================================
[INFO] Starting ingestion run
[INFO] [INGEST:OA] Starting OpenAustralia ingestion
[INFO] [INGEST:OA] Upserted 151 members
[INFO] [INGEST:OA] Processing dates from 2010-01-01 to 2026-03-14
... (this takes a while)
[INFO] [RULES] Running rules engine
[INFO] [RULES] Flagged: X | Skipped: Y
==================================================
RUN COMPLETE
```

**Tip**: If it seems slow, that's normal for the first run. Subsequent runs
only process new data since the last run — they'll finish in seconds.

---

## Step 6: Run Claude Analysis (10 mins)

If you have Claude Code (CLI) installed:
```bash
claude "Read ANALYSIS_TASK.md and process all flagged policies"
```

If you're using Cowork mode, you can run this as a scheduled task (see Step 8).

---

## Step 7: Deploy the Frontend to Vercel (5 mins)

### 7a. Create the frontend .env
```bash
cd frontend
cp .env.example .env.local
```
Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... (the anon/public key)
SUPABASE_SERVICE_KEY=eyJ... (the service_role key)
```

### 7b. Test locally
```bash
npm run dev
```
Open http://localhost:3000 — you should see the site with your data.

### 7c. Deploy to Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Set the **Root Directory** to `frontend`
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key
   - `SUPABASE_SERVICE_KEY` = your service_role key
5. Click **Deploy**
6. In ~2 minutes your site is live at `your-project.vercel.app`

---

## Step 8: Set Up Automation (Optional, 5 mins)

In Cowork, you can schedule these tasks:

### Daily Ingestion
```
Task: Run ingestion pipeline
Schedule: Every day at 6am
Command: cd /path/to/policy-tracker && node src/index.js
```

### Weekly Analysis
```
Task: Analyse flagged policies
Schedule: Every Sunday at 8pm
Command: claude "Read ANALYSIS_TASK.md and process all flagged policies"
```

---

## Summary of All Keys You Need

| Key | Where to Get It | Used By |
|-----|----------------|---------|
| `SUPABASE_URL` | Supabase Dashboard → Settings → API | Backend + Frontend |
| `SUPABASE_SERVICE_KEY` | Supabase Dashboard → Settings → API (service_role) | Backend + Frontend (server-side) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Settings → API (anon) | Frontend only |
| `OPENAUSTRALIA_API_KEY` | openaustralia.org.au/api/key | Backend only |
| `TVFY_API_KEY` | theyvoteforyou.org.au (account page) | Backend only (optional) |

---

## Troubleshooting

**"supabaseUrl is required"**
→ Your `.env` file is missing or `SUPABASE_URL` is empty.

**"FIRST RUN — Schema setup required"**
→ You need to paste the SQL into Supabase. See Step 3b.

**"Failed to fetch debates for date X"**
→ Normal — some days have no parliament sessions (weekends, recesses). The ingestor skips them.

**"No member match for [name]"**
→ The MP interests scraper couldn't match a name. This is fine — it's fuzzy matching and some names differ between sources.

**Frontend shows "No policies analysed yet"**
→ You need to run the Claude analysis (Step 6) first. The timeline only shows completed analyses.

**Vercel build fails**
→ Make sure the Root Directory is set to `frontend` in Vercel project settings.

---

## What's Next?

Once the system is running:
- Run the ingestion daily (or set up Cowork automation)
- Run Claude analysis weekly to process flagged policies
- Share the site with journalists, researchers, and the public
- Consider submitting to r/australia and r/AustralianPolitics
- Add more data sources over time (They Vote For You API, GLAM Workbench historical data)
