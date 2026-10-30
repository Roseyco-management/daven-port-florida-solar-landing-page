// RoseyCo attribution capture — see docs/ATTRIBUTION-STANDARD.md. Records where a visitor
// came from (UTMs, ad click ids, referrer) so every lead posted to RCA carries `attribution`
// and its channel is known. No personal data: page URLs are stored without their query string.
(function () {
  if (typeof window === 'undefined' || window.__rcAttribution) return;
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id',
    'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid', 'ttclid', 'li_fat_id'];
  var FIRST = 'rc_first_touch', LAST = 'rc_last_touch', TTL = 90 * 864e5;
  var ENGINES = [[/google\./, 'google'], [/bing\.com/, 'bing'], [/yahoo\./, 'yahoo'], [/duckduckgo\.com/, 'duckduckgo'], [/ecosia\.org/, 'ecosia']];
  var SOCIAL = [[/facebook\.com|fb\.com|fb\.me/, 'facebook'], [/instagram\.com/, 'instagram'], [/tiktok\.com/, 'tiktok'],
    [/(^|\.)(x\.com|twitter\.com|t\.co)$/, 'twitter'], [/linkedin\.com|lnkd\.in/, 'linkedin'], [/youtube\.com/, 'youtube'], [/pinterest\./, 'pinterest']];

  function read(k) { try { var v = JSON.parse(localStorage.getItem(k)); return v && v.expiry > Date.now() ? v : null; } catch (e) { return null; } }
  function write(k, v) { try { v.expiry = Date.now() + TTL; localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function cookie(n) { var m = document.cookie.match('(?:^|; )' + n + '=([^;]*)'); return m ? decodeURIComponent(m[1]) : null; }
  function strip(o) { var r = {}; for (var k in o) if (o[k] != null && o[k] !== '' && k !== 'expiry') r[k] = o[k]; return r; }

  function currentTouch() {
    var q = new URLSearchParams(location.search), t = {}, hit = false;
    KEYS.forEach(function (k) { var v = q.get(k); if (v) { t[k] = v.slice(0, 200); hit = true; } });
    var ref = document.referrer, host = '';
    try { host = ref ? new URL(ref).hostname.replace(/^www\./, '') : ''; } catch (e) {}
    if (host && host === location.hostname.replace(/^www\./, '')) host = ''; // internal navigation
    if (!hit && host) {
      var i, s = null, m = 'referral';
      for (i = 0; i < ENGINES.length && !s; i++) if (ENGINES[i][0].test(host)) { s = ENGINES[i][1]; m = 'organic'; }
      for (i = 0; i < SOCIAL.length && !s; i++) if (SOCIAL[i][0].test(host)) { s = SOCIAL[i][1]; m = 'social'; }
      t.utm_source = s || host; t.utm_medium = m; hit = true;
    }
    if (!hit) return null;
    if (host) t.referrer = 'https://' + host + '/'; // host only: a full referrer URL can carry search terms or ids
    t.landing_page = location.pathname; t.ts = new Date().toISOString();
    return t;
  }

  var touch = currentTouch();
  if (touch) { if (!read(FIRST)) write(FIRST, touch); write(LAST, touch); } // direct visits never overwrite a known source

  // The object to send as `attribution` on an RCA lead post (docs/leads-api.md).
  window.rcAttribution = function () {
    var last = read(LAST), first = read(FIRST), out = strip(last || {});
    out.page_url = location.origin + location.pathname;
    if (first && (!last || first.ts !== last.ts)) out.first_touch = strip(first);
    var ga = cookie('_ga'), fbp = cookie('_fbp'), fbc = cookie('_fbc');
    if (ga) out.ga_client_id = ga.split('.').slice(-2).join('.');
    if (fbp) out.fbp = fbp;
    if (fbc || out.fbclid) out.fbc = fbc || 'fb.1.' + Date.parse(last.ts) + '.' + out.fbclid; // Meta's format, stamped at click time
    return out;
  };

  // Plain HTML forms (Netlify, Formspree, Web3Forms…): fill any input named after a key, plus one
  // hidden `rc_attribution` JSON field. Netlify only keeps fields declared at build time, so add
  // <input type="hidden" name="rc_attribution"> to the markup there. Opt out: data-rc-attribution="off".
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || f.tagName !== 'FORM' || f.getAttribute('data-rc-attribution') === 'off') return;
    var a = window.rcAttribution();
    KEYS.concat(['landing_page', 'referrer', 'page_url']).forEach(function (k) {
      var el = f.querySelector('input[name="' + k + '"]'); if (el && !el.value && a[k]) el.value = a[k];
    });
    var h = f.querySelector('input[name="rc_attribution"]');
    if (!h) { h = document.createElement('input'); h.type = 'hidden'; h.name = 'rc_attribution'; f.appendChild(h); }
    h.value = JSON.stringify(a);
  }, true);
  window.__rcAttribution = true;
})();
