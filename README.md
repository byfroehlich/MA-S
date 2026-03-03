# MA:S Landing (DE/EN)

Routes:
- `/de` German landing
- `/en` English landing

Root `/` redirects to `/de` (middleware).

## Configure
Edit `lib/site.ts`:
- `domain`
- `appUrl`
- `bookAmazonUrl`

## Run
```bash
npm install
npm run dev
```

## Deploy
Push to GitHub, import into Vercel.

## Legal
Replace placeholders in:
- `app/[lang]/legal/impressum/page.tsx`
- `app/[lang]/legal/datenschutz/page.tsx`
