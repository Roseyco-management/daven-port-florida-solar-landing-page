"use client";

// Microsoft Clarity — session recording and heatmaps.
//
// Two things this deliberately does NOT do:
//
//   1. It never loads without NEXT_PUBLIC_CLARITY_ID set. The tag is inert until
//      a Clarity project exists for this site, so this file is safe to ship
//      before anyone has created one. Setting the env var is the whole switch-on.
//
//   2. It never records the logged-in area. Clarity replays the screen, and an
//      admin or client portal has real customer names, emails and messages on
//      it. Recording that ships personal data to a third party that the person
//      on screen never agreed to. Public marketing pages only.
//
// Do not load this through Partytown. It silently fails in the App Router, and
// Clarity is the one tag that survives Partytown elsewhere — which makes a
// working Clarity session a false reassurance that GA4 and Meta are fine too.

import Script from "next/script";
import { usePathname } from "next/navigation";

/** Anything behind a login, or on the way to one. */
const PRIVATE_PREFIXES = [
  "/admin",
  "/dashboard",
  "/portal",
  "/account",
  "/login",
  "/signin",
  "/sign-in",
  "/register",
  "/signup",
  "/sign-up",
  "/reset-password",
  "/forgot-password",
  "/api",
];

export function MicrosoftClarity() {
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
  const pathname = usePathname();

  if (!CLARITY_ID) return null;

  const path = (pathname ?? "").toLowerCase();
  if (PRIVATE_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`))) {
    return null;
  }

  return (
    <Script id="microsoft-clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}
    </Script>
  );
}
