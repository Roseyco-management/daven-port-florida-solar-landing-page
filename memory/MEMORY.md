# Davenport Florida Solar Landing Page — Memory

## Project
- Next.js 16.1.6, React 19, Tailwind CSS v4, deployed on Vercel
- GitHub: https://github.com/Roseyco-management/daven-port-florida-solar-landing-page
- Vercel project: arnis-projects-94a198eb/daven-port-florida-solar-landing-page
- Next.js 16 uses `proxy.ts` (not `middleware.ts`) — export function must be named `proxy`

## Analytics Dashboard (built Feb 2026)
- Route: `/dashboard` — password-protected via `proxy.ts` + cookie
- Login: `/dashboard/login` (no full auth system, just DASHBOARD_PASSWORD env var)
- Design: TailAdmin Pro components adapted into `components/dashboard/`
- Charts: ApexCharts (react-apexcharts) with `dynamic(() => import(...), { ssr: false })`
- Leads table at `/dashboard/leads`

## Supabase Project
- Project: davenport-florida-solar (id: vqoyaobsdtqtwkpbqrse)
- URL: https://vqoyaobsdtqtwkpbqrse.supabase.co
- Region: us-east-1
- Leads table created via migration

## GA4
- Numeric property ID: 523481139 (measurement ID G-11PD134NJC)
- Uses OAuth credentials (GOOGLE_CLIENT_ID/SECRET/REFRESH_TOKEN) — same as RoseyCo Analytics Dashboard
- No service account needed

## Dashboard Password
- Set in Vercel as DASHBOARD_PASSWORD: solar-admin-2026

## All Env Vars — FULLY CONFIGURED in Vercel
- NEXT_PUBLIC_SUPABASE_URL ✓
- SUPABASE_SERVICE_ROLE_KEY ✓
- GOOGLE_CLIENT_ID ✓
- GOOGLE_CLIENT_SECRET ✓
- GOOGLE_REFRESH_TOKEN ✓
- GA4_PROPERTY_ID ✓ (523481139)
- DASHBOARD_PASSWORD ✓

## Analytics Tracking IDs
- GA4: G-11PD134NJC
- Meta Pixel: 1203368011510821
- Clarity: vcvcof0y8x

## Key Files
- `proxy.ts` — route protection (replaces middleware in Next.js 16)
- `app/(dashboard)/layout.tsx` — dashboard shell with sidebar/header
- `app/(dashboard)/dashboard/page.tsx` — main dashboard Server Component
- `lib/ga4/client.ts` — GA4 Data API wrapper
- `lib/supabase/server.ts` — Supabase server client
- `app/api/estimate/route.ts` — form handler, saves leads to Supabase + emails via Resend
- `app/globals.css` — TailAdmin design tokens merged in (brand colors, gray scale, etc.)
