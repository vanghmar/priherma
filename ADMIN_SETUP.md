# Priherma Admin Panel Setup Guide

Your website now has an admin panel at `/admin` where you can add, edit, and remove project photos without touching code. Here's how to set it up.

## Step 1: Create a GitHub OAuth App

1. Go to https://github.com/settings/developers (you need to be logged into your GitHub account)
2. Click **OAuth Apps** (on the left menu)
3. Click **New OAuth App**
4. Fill in the details:
   - **Application name**: `Priherma Admin`
   - **Homepage URL**: `https://priherma.es`
   - **Application description**: `Admin panel for managing project photos`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
5. Click **Register application**

## Step 2: Copy Your Credentials

After registration, you'll see a screen with:
- **Client ID** (a long string of letters/numbers)
- **Client Secret** (another long string) — click "Generate a new client secret"

You need to give these two values to me (copy them carefully).

## Step 3: Done!

Once I add your credentials, you'll be able to:

1. **Go to the admin panel**: `https://priherma.es/admin`
2. **Click "Login with GitHub"**: You'll be redirected to GitHub to approve access
3. **See the project form**: All your projects will appear in a list
4. **Add a new project**: Click "Add item", fill in the details, upload a photo, click Save
5. **Edit a project**: Click on any project to change details or photo
6. **Delete a project**: Click the delete button next to a project

## Field Guide

When adding/editing a project, here's what each field is for:

- **ID**: Format like `p1`, `p2`, etc. (auto-filled for new projects)
- **Category Key**: Choose from: obra, reforma, banos, interiores, rehab, exteriores
- **Category (Name)**: Display name, e.g., "Obra nueva", "Reforma integral"
- **Status**: e.g., "Terminada", "En progreso"
- **Project Name**: e.g., "Vivienda costera"
- **Location**: Where the project is, e.g., "Avileses, Murcia"
- **Year**: Year completed, e.g., "2024"
- **Area**: Size, e.g., "180 m²"
- **Duration**: How long it took, e.g., "10 meses"
- **Cover Image**: The main photo for this project
- **Description**: A paragraph explaining what the project is
- **Features**: List of key features (can add multiple)
- **Has Before/After**: Check this if the project has before/after photos

## Bilingual Content

Each project appears in both Spanish (`gallery.json`) and English (`gallery-en.json`). When you edit a project:

- The form shows both language versions side-by-side
- Make sure to fill in both Spanish and English fields
- The website will show the right language based on visitor's selection

## What Happens When You Save

Every time you save a change in the admin panel:

1. The data is written to a JSON file in the repository
2. GitHub automatically rebuilds and redeploys the website
3. Within 1-2 minutes, your changes appear on `priherma.es`

## Need Help?

If anything doesn't work, message me with:
- What were you trying to do?
- What happened instead?
- Any error messages you saw?

---

**Ready?** Send me your GitHub OAuth Client ID and Secret when you complete Step 1-2.
