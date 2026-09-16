# Deployment guide — Git + cPanel

This project is a static Next.js site (`output: "export"` in `next.config.js`) — it builds down
to plain HTML/CSS/JS with **no Node.js runtime required on the server**. That means it can be
hosted on almost any cPanel plan, even the cheapest shared-hosting ones that don't offer
"Setup Node.js App".

Repo: **https://github.com/waseemabbssgujjarr-create/adlabsllc**

\---

## Part 1 — Git: pushing this project and pulling updates

### One-time setup (first push to an empty repo)

Run these from the `adera-nextjs/` project folder, in a terminal on your own machine:

```bash
cd adera-nextjs

# If this folder isn't a git repo yet:
git init
git add .
git commit -m "Initial commit: AdEra Labs AI LLC site"

# Point it at the GitHub repo and push:
git branch -M main
git remote add origin https://github.com/waseemabbssgujjarr-create/adlabsllc.git
git push -u origin main
```

If GitHub asks for a password, use a **Personal Access Token** instead (GitHub removed password
auth for git operations) — create one at
[github.com/settings/tokens](https://github.com/settings/tokens) with the `repo` scope, and paste
it in place of your password when prompted.

If the repo already has commits (e.g. a README created on GitHub) and the push is rejected:

```bash
git pull origin main --allow-unrelated-histories
# resolve any conflicts if prompted, then:
git push -u origin main
```

### Everyday workflow — pushing new changes

```bash
git add .
git commit -m "Describe what changed"
git push
```

### Getting the latest version onto another machine (or onto the server)

```bash
# first time on a new machine/server:
git clone https://github.com/waseemabbssgujjarr-create/adlabsllc.git

# after that, to update it:
cd adlabsllc
git pull
```

### Typical day-to-day loop

```bash
git pull            # get anyone else's latest changes first
# ...make your edits...
git add .
git commit -m "Add pricing add-ons"
git push
```

\---

## Part 2 — Deploying to cPanel

You have two options. **Option A (static export) works on every cPanel plan** and is what this
project is configured for. Option B is only relevant if your host specifically offers a Node.js
runtime and you later add server features (API routes, server actions) that need one.

### Option A — Static export (recommended, works on any shared hosting)

**1. Build the static site locally**

```bash
npm install
npm run build
```

This produces an `out/` folder containing plain `.html`, `.css`, and `.js` files — no server
required.

**2. Upload `out/` to cPanel**

Pick whichever of these you have access to:

* **File Manager (no terminal needed):**

  1. Zip the *contents* of the `out/` folder (not the folder itself) into `site.zip`.
  2. In cPanel, open **File Manager** → navigate to `public\_html` (or the subfolder for your
domain/subdomain).
  3. Upload `site.zip`, then right-click it → **Extract**.
  4. Delete `site.zip` afterward to keep things tidy.
* **SSH / terminal (if your host enables SSH access):**

```bash
  # from your local machine, inside adera-nextjs/
  scp -r out/\* username@yourserver.com:\~/public\_html/
  ```

  Replace `username@yourserver.com` with your cPanel SSH login (find the exact host/port under
cPanel → **SSH Access**).

* **cPanel's Git Version Control feature** (if enabled on your plan): point it at
`https://github.com/waseemabbssgujjarr-create/adlabsllc.git`, pull the repo onto the server,
then run `npm install \&\& npm run build` on the server via **Terminal** (cPanel → **Terminal**)
and symlink or copy `out/` into `public\_html`. This keeps the server in sync with `git pull`
going forward, at the cost of needing Node available on the server just for the build step.

**3. Confirm the document root**

Make sure the *contents* of `out/` (not a wrapping `out` folder) sit directly inside
`public\_html` (or your domain's document root), so `index.html` is at the top level. Visiting
`https://yourdomain.com/about` should load `about.html` automatically — Apache (which cPanel
uses) serves `.html` files matching the URL path by default, no extra config needed.

**4. Re-deploying after changes**

Every time you update the site:

```bash
npm run build          # regenerate out/
# then re-upload out/ via whichever method you used above
```

### Option B — Node.js app via cPanel's "Setup Node.js App"

Only needed if you remove `output: "export"` from `next.config.js` later to add server-side
features. Rough outline, since exact menus vary by host:

1. In cPanel, open **Setup Node.js App** → **Create Application**.
2. Set the Node version (18+), application root (e.g. `adlabsllc`), and application URL.
3. Either `git clone` the repo into that folder via **Terminal**, or upload it, then in the app's
terminal:

```bash
   npm install
   npm run build
   ```

4. Remove `output: "export"` from `next.config.js` first, since a Node-hosted app should run
`next start`, not serve a static `out/` folder.
5. Set the app's startup file/command to run `npm start` (which runs `next start`), and use
cPanel's **Restart** button after each deploy.

For this project as it stands today, **Option A is simpler, cheaper, and all you need.**

\---

## Quick reference

|Task|Command|
|-|-|
|Install dependencies|`npm install`|
|Run locally|`npm run dev` → http://localhost:3000|
|Build static site|`npm run build` → outputs to `out/`|
|Push changes to GitHub|`git add . \&\& git commit -m "..." \&\& git push`|
|Pull latest from GitHub|`git pull`|
|Deploy to cPanel|Build, then upload contents of `out/` to `public\_html`|



