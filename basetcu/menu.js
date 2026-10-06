// Menu do site Base: só as páginas de estudo.
(function () {
  var GRUPOS = [
    ['Estudo', [['/estudar', 'Estudar hoje'], ['/edital', 'Edital por tópicos'], ['/', 'início']]],
    ['Resumos', [['/rodovias', 'Obras rodoviárias: o que mais cai']]],
    ['Teoria passo a passo', [['/lei12305', 'Lei 12305 de resíduos sólidos'], ['/lei14133', 'Lei 14133 licitações e contratos']]],
    ['Pegadinhas', [['/pegadinhas-lei14133', 'Lei 14133'], ['/pegadinhas-lei12305', 'Lei 12305'], ['/pegadinhas-lei11445', 'Lei 11445 saneamento']]]
  ];
  var atual = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  if (atual === '/index') atual = '/';
  var css = document.createElement('style');
  css.textContent =
    '.menu-san{background:#0F172A;border:1px solid #1E293B;border-radius:10px;padding:10px 12px;margin-bottom:18px;display:grid;gap:8px}' +
    '.menu-san .t{font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:#64748B;font-weight:700}' +
    '.menu-san .bts{display:flex;flex-wrap:wrap;gap:8px}' +
    '.menu-san a.bt{background:#22124A;border:1px solid #7C3AED;color:#DDD6FE;padding:7px 12px;border-radius:8px;font-size:13px;font-family:ui-monospace,Consolas,monospace;text-decoration:none}' +
    '.menu-san a.bt:hover{background:#4C1D95;color:#F8FAFC}' +
    '.menu-san a.bt.on{background:#7C3AED;color:#fff;font-weight:800}';
  document.head.appendChild(css);
  document.querySelectorAll('.nav, .menu-jev, #menu').forEach(function (n) { n.remove(); });
  var m = document.createElement('nav');
  m.className = 'menu-san';
  m.innerHTML = GRUPOS.map(function (g) {
    return '<div class="t">' + g[0] + '</div><div class="bts">' + g[1].map(function (l) {
      return '<a href="' + l[0] + '" class="bt' + (l[0] === atual ? ' on' : '') + '">' + l[1] + '</a>';
    }).join('') + '</div>';
  }).join('');
  var alvo = document.querySelector('main') || document.body;
  alvo.insertBefore(m, alvo.firstChild);
})();
