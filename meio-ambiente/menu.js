// Menu do site meio ambiente: um botão por arquivo da pasta + as 4 páginas de pegadinhas.
(function () {
  var PEG = [['/prazos', 'prazos máx/mín'], ['/modais', 'deve/pode/vedado'], ['/absolutos', 'absolutos indevidos'], ['/marcos', 'data-base']];
  var atual = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  if (atual === '/index') atual = '/';
  var css = document.createElement('style');
  css.textContent =
    '.menu-san{background:#0F172A;border:1px solid #1E293B;border-radius:10px;padding:10px 12px;margin-bottom:18px;display:grid;gap:8px}' +
    '.menu-san .t{font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:#64748B;font-weight:700}' +
    '.menu-san .bts{display:flex;flex-wrap:wrap;gap:8px}' +
    '.menu-san a.bt{background:#10264A;border:1px solid #2563EB;color:#BFDBFE;padding:7px 12px;border-radius:8px;font-size:13px;font-family:ui-monospace,Consolas,monospace;text-decoration:none}' +
    '.menu-san a.bt:hover{background:#1E3A8A;color:#F8FAFC}' +
    '.menu-san a.bt.on{background:#2563EB;color:#F8FAFC;font-weight:800}' +
    '.menu-san a.bt.peg{border-color:#7C3AED;background:#22124A;color:#DDD6FE}' +
    '.menu-san a.bt.peg.on{background:#7C3AED;color:#fff}';
  document.head.appendChild(css);
  function bt(href, txt, cls) { return '<a href="' + href + '" class="bt ' + (cls || '') + (href === atual ? ' on' : '') + '">' + txt + '</a>'; }
  function monta(indice) {
    document.querySelectorAll('.nav, .menu-jev, #menu').forEach(function (n) { n.remove(); });
    var m = document.createElement('nav');
    m.className = 'menu-san';
    m.innerHTML =
      '<div class="t">Meio Ambiente · um botão por arquivo da pasta</div><div class="bts">' +
      '<a href="https://jev-ranker.vercel.app/" class="bt">← jev-ranker</a><a href="https://covsaneamentomeioambiente.vercel.app/" class="bt peg">correlação san × MA</a><a href="https://covsaneamentomeioambiente.vercel.app/pegadinhas" class="bt peg">pegadinhas san × MA</a>' + bt('/', 'início') +
      indice.map(function (f) { return bt('/' + f.slug, f.arquivo.replace(/\.json$/, '')); }).join('') + '</div>' +
      '<div class="t">Pegadinhas das 3 normas (CONAMA 237 · 9.605 · 6.938)</div><div class="bts">' +
      PEG.map(function (p) { return bt(p[0], p[1], 'peg'); }).join('') + '</div>';
    var alvo = document.querySelector('main') || document.body;
    alvo.insertBefore(m, alvo.firstChild);
  }
  fetch('/dados/indice.json').then(function (r) { return r.json(); }).then(monta).catch(function () { monta([]); });
})();
