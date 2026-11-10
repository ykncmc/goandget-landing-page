# Go&Get App Download Landing Page

A responsive static website for promoting the Go&Get Customer App. Built with HTML, CSS and vanilla JavaScript; no build step or backend is required.

## Included
- Mobile-first responsive layout in Go&Get blue and white branding
- Actual Go&Get app imagery extracted from the previously supplied product presentation
- Google Play and Apple App Store links
- Android/iPhone device detection (both store buttons remain available)
- UTM query-string preservation for campaign-aware analytics events
- Vercel static deployment configuration

## App links
- Google Play: https://play.google.com/store/apps/details?id=com.inquisyx.goandget
- Apple App Store: https://apps.apple.com/in/app/go-and-get/id6761760686

## Preview locally
Open `index.html` in a browser, or run a local static server from this folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Deploy to Vercel (free Hobby plan)

### Option A — Vercel dashboard
1. Extract this ZIP on your computer.
2. Sign in at https://vercel.com/.
3. Create a new project and import a GitHub repository containing these files, or use the Vercel CLI instructions below.
4. For this static site, leave the framework preset as **Other** and leave Build Command and Output Directory empty. The project root is the folder containing `index.html` and `vercel.json`.
5. Deploy. Vercel will provide a `*.vercel.app` URL.

### Option B — Vercel CLI
Install Node.js, then run:

```bash
npm install -g vercel
cd goandget-site
vercel
```

Follow the prompts. When ready to publish production:

```bash
vercel --prod
```

## Campaign links
Use the deployed URL with UTM parameters, for example:

`https://YOUR-PROJECT.vercel.app/?utm_source=instagram&utm_medium=paid_social&utm_campaign=kochi_launch`

The site keeps the campaign query parameters available when the visitor clicks a store button. To report events in GA4, add your Google tag to `index.html`; the JavaScript already emits a `store_click` event when `gtag` is configured. No analytics IDs or Meta Pixel IDs have been fabricated or embedded.

## Before advertising
- Open the deployed page on a real Android phone and an iPhone.
- Test both store buttons and confirm the listings are publicly accessible.
- Replace/add screenshots if the app UI changes.
- Add your GA4 Measurement ID and Meta Pixel ID only if/when you have them and have configured the relevant privacy disclosures/consent for your use case.
