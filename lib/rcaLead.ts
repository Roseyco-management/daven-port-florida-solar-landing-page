/**
 * Mirrors each estimate request into RoseyCo Analytics (RCA) so it counts on
 * the client dashboard and the showcase. Contract:
 * RoseyCo-Analytics-Dashboard/docs/leads-api.md.
 *
 * Only non-personal fields leave this site: first name, the form name and
 * where the visitor came from (window.rcAttribution(), see
 * marketing-ide/docs/ATTRIBUTION-STANDARD.md). Email, phone and address stay
 * in the client's email. The key lives only in the server env var
 * RCA_LEADS_API_KEY. Never throws, 5s timeout, never logs the key.
 */
const RCA_URL = 'https://analytics.roseyco.com/api/clients/davenport-florida-solar/leads';

const ATTR_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'gclid', 'gbraid', 'wbraid',
  'fbclid', 'msclkid', 'ttclid', 'referrer', 'landing_page', 'page_url', 'ga_client_id', 'fbp', 'fbc', 'ts'];

const str = (v: unknown, max = 200) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : undefined);
const stripQuery = (v?: string) => (v ? v.split('?')[0].split('#')[0] : v);

function cleanAttribution(a: unknown): Record<string, unknown> {
  if (!a || typeof a !== 'object') return {};
  const src = a as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const k of ATTR_KEYS) {
    let v = str(src[k]);
    if (v && (k === 'page_url' || k === 'landing_page' || k === 'referrer')) v = stripQuery(v);
    if (v) out[k] = v;
  }
  if (src.first_touch && typeof src.first_touch === 'object') {
    const ft = cleanAttribution({ ...(src.first_touch as Record<string, unknown>), first_touch: undefined });
    if (Object.keys(ft).length) out.first_touch = ft;
  }
  return out;
}

export async function postLeadToRca(o: { firstName?: unknown; service: string; externalId?: string; attribution?: unknown }) {
  const key = process.env.RCA_LEADS_API_KEY;
  if (!key) {
    console.error('[rca-lead] skipped: RCA_LEADS_API_KEY not set');
    return;
  }
  try {
    const res = await fetch(RCA_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'website form',
        service: o.service,
        first_name: str(o.firstName, 60),
        external_id: o.externalId ? `resend:${o.externalId}` : `web:${crypto.randomUUID()}`,
        attribution: cleanAttribution(o.attribution),
      }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) console.error(`[rca-lead] RCA rejected the lead: ${res.status}`);
  } catch (err) {
    console.error('[rca-lead] RCA unreachable:', err instanceof Error ? err.message : 'unknown error');
  }
}
