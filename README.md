# Prince Pandey — Portfolio

A personal-first developer portfolio (recruiters + freelance clients) built with Next.js, TypeScript, and Tailwind CSS. Inspired by the structure and feel of harish.world.

## Features

- Animated hero with rotating roles and dual CTAs (View work / Work with me)
- Technologies & Tools marquee
- Live GitHub contribution graph
- Live LeetCode + Codeforces DSA stat cards
- Featured projects, experience, skills, writing
- Contact form (email via Resend, with a graceful `mailto:` fallback)
- Dark / light theme with no flash on load

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # run production build
```

## Editing your details

All personal info lives in one file: [`lib/config.ts`](lib/config.ts).

- `handles.github` / `handles.leetcode` / `handles.codeforces` — used for the
  contribution graph and DSA stat cards. Update `leetcode` and `codeforces` to
  your real usernames.
- `bookingUrl` — the "Work with me" button target. Swap for a Calendly / Cal.com
  link if you want clients to book calls.
- Projects, experience, skills, and writing content live in [`lib/data.ts`](lib/data.ts).

## Contact form email (optional)

The contact form works out of the box: with no configuration it opens the
visitor's mail client pre-filled to your address. To send email server-side
instead, set these environment variables (e.g. in Vercel):

- `RESEND_API_KEY` — a [Resend](https://resend.com) API key.
- `CONTACT_FROM_EMAIL` — optional verified sender, e.g. `Portfolio <you@yourdomain.com>`.

## Deployment

Deploys on Vercel with zero config — it auto-detects Next.js.
