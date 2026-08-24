/* Learn / Mastery page — renders MASTERY guides + a per-bullet skills index. Generic across certs. */
const DCOLOR = {
  1: { dot: 'bg-blue-500', chip: 'bg-blue-100 text-blue-700' },
  2: { dot: 'bg-emerald-500', chip: 'bg-emerald-100 text-emerald-700' },
  3: { dot: 'bg-amber-500', chip: 'bg-amber-100 text-amber-700' },
  4: { dot: 'bg-violet-500', chip: 'bg-violet-100 text-violet-700' },
  5: { dot: 'bg-rose-500', chip: 'bg-rose-100 text-rose-700' },
  6: { dot: 'bg-cyan-500', chip: 'bg-cyan-100 text-cyan-700' },
};

// Question counts per study-guide bullet (sub-skill), from the combined bank.
let QCOUNTS = {};
function computeCounts() {
  QCOUNTS = {};
  if (typeof COMBINED_QUESTIONS !== 'undefined') {
    COMBINED_QUESTIONS.forEach(q => { if (q.sub) QCOUNTS[q.sub] = (QCOUNTS[q.sub] || 0) + 1; });
  }
}
const countFor = id => QCOUNTS[id] || 0;

function buildSidebar() {
  const el = document.getElementById('guide-list');
  el.innerHTML = '';
  // Overview link
  const ov = document.createElement('button');
  ov.id = 'nav-index'; ov.dataset.id = 'index';
  ov.className = 'w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition hover:bg-gray-100 mb-3';
  ov.innerHTML = '<span class="text-gray-400">▤</span><span class="flex-1 text-gray-700">All skills &amp; questions</span>';
  ov.onclick = () => { location.hash = 'index'; };
  el.appendChild(ov);

  MASTERY_DOMAINS.forEach(d => {
    const c = DCOLOR[d.n];
    const wrap = document.createElement('div');
    wrap.className = 'mb-4';
    wrap.innerHTML = `<div class="flex items-center gap-2 px-2 mb-1">
        <span class="w-2 h-2 rounded-full ${c.dot}"></span>
        <span class="text-xs font-semibold uppercase tracking-wide text-gray-500">D${d.n} · ${d.title}</span>
      </div>`;
    MASTERY.filter(g => g.domain === d.n).forEach(g => {
      const b = document.createElement('button');
      b.id = 'nav-' + g.id; b.dataset.id = g.id;
      b.className = 'w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition hover:bg-gray-100';
      b.innerHTML = `<span class="font-mono text-xs text-gray-400 w-7">${g.id}</span>
        <span class="flex-1 ${g.ready ? 'text-gray-700' : 'text-gray-400'}">${g.title}</span>
        <span class="text-[11px] text-gray-400 tabular-nums">${countFor(g.id)}</span>`;
      b.onclick = () => { location.hash = g.id; };
      wrap.appendChild(b);
    });
    el.appendChild(wrap);
  });
}

function setActive(id) {
  document.querySelectorAll('#guide-list button').forEach(b => {
    const on = b.dataset.id === id;
    b.classList.toggle('bg-gray-100', on);
    b.classList.toggle('font-semibold', on);
  });
}

function renderIndex() {
  setActive('index');
  const pane = document.getElementById('guide-content');
  const total = Object.values(QCOUNTS).reduce((a, b) => a + b, 0);
  let html = `<div class="mb-6">
      <h1 class="text-2xl font-bold tracking-tight">Skills &amp; questions</h1>
      <p class="text-gray-500 text-sm mt-1">Every study-guide bullet, the questions tagged to it, and a link straight into filtered practice. <b>${total}</b> questions across ${MASTERY.length} bullets.</p>
    </div>`;
  MASTERY_DOMAINS.forEach(d => {
    const c = DCOLOR[d.n];
    html += `<div class="mb-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2 h-2 rounded-full ${c.dot}"></span>
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-600">Domain ${d.n} · ${d.title} <span class="text-gray-400 normal-case font-normal">(${d.weight})</span></h2>
      </div>
      <div class="space-y-2">`;
    MASTERY.filter(g => g.domain === d.n).forEach(g => {
      const n = countFor(g.id);
      html += `<div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
          <span class="font-mono text-sm text-gray-400 w-9">${g.id}</span>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-800 truncate">${g.title}</div>
            <div class="text-xs text-gray-400">${n} question${n === 1 ? '' : 's'}${g.ready ? ' · guide available' : ''}</div>
          </div>
          ${g.ready ? `<a href="#${g.id}" class="text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded-lg px-3 py-1.5 transition whitespace-nowrap">Guide</a>` : ''}
          <a href="exam.html?area=${g.id}" class="text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-3 py-1.5 transition whitespace-nowrap">Practice ${n} →</a>
        </div>`;
    });
    html += `</div></div>`;
  });
  pane.innerHTML = html;
  const sel = document.getElementById('guide-select');
  if (sel) sel.value = 'index';
  window.scrollTo({ top: 0 });
}

function renderGuide(id) {
  const g = MASTERY.find(x => x.id === id);
  if (!g) return renderIndex();
  const d = MASTERY_DOMAINS.find(x => x.n === g.domain);
  const c = DCOLOR[g.domain];
  const n = countFor(g.id);
  const pane = document.getElementById('guide-content');
  setActive(g.id);

  const header = `
    <div class="mb-6">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-semibold px-2 py-1 rounded-full ${c.chip}">Domain ${g.domain} · ${d.weight}</span>
        <span class="text-xs text-gray-400">${d.title}</span>
      </div>
      <h1 class="text-2xl md:text-3xl font-bold tracking-tight"><span class="font-mono text-gray-400 mr-2">${g.id}</span>${g.title}</h1>
    </div>`;

  if (!g.ready) {
    pane.innerHTML = header + `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
        <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl">🚧</div>
        <p class="font-medium text-gray-700 mb-1">Guide coming soon</p>
        <p class="text-sm text-gray-500 max-w-md mx-auto">Notes, a hands-on lab, and a self-check for <b>${g.title}</b> are on the way. Meanwhile, drill the <b>${n}</b> questions tagged to this bullet.</p>
        <a href="exam.html?area=${g.id}" class="inline-block mt-5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition">Practice ${n} questions →</a>
      </div>`;
    window.scrollTo({ top: 0 });
    return;
  }

  pane.innerHTML = header +
    `<p class="lead text-gray-600 leading-relaxed mb-6">${g.intro}</p>` +
    `<div class="guide">${g.html}</div>` +
    `<div class="mt-8 bg-gradient-to-br from-blue-500 to-sky-600 rounded-2xl p-6 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
       <div>
         <h3 class="font-semibold mb-1">Ready to test yourself?</h3>
         <p class="text-sm text-white/80">${n} questions are tagged to bullet ${g.id} — jump into filtered practice.</p>
       </div>
       <a href="exam.html?area=${g.id}" class="bg-white text-blue-600 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition whitespace-nowrap">Practice ${n} →</a>
     </div>`;
  const sel = document.getElementById('guide-select');
  if (sel) sel.value = g.id;
  window.scrollTo({ top: 0 });
}

function buildMobileSelect() {
  const sel = document.getElementById('guide-select');
  if (!sel) return;
  sel.innerHTML = '<option value="index">All skills &amp; questions</option>';
  MASTERY_DOMAINS.forEach(d => {
    const og = document.createElement('optgroup');
    og.label = `D${d.n} — ${d.title} (${d.weight})`;
    MASTERY.filter(g => g.domain === d.n).forEach(g => {
      const o = document.createElement('option');
      o.value = g.id;
      o.textContent = `${g.id} — ${g.title} (${countFor(g.id)})${g.ready ? '' : ' · soon'}`;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });
  sel.onchange = () => { location.hash = sel.value; };
}

function route() {
  const id = location.hash.replace('#', '');
  if (!id || id === 'index') return renderIndex();
  renderGuide(id);
}

document.addEventListener('DOMContentLoaded', () => {
  computeCounts();
  buildSidebar();
  buildMobileSelect();
  route();
  window.addEventListener('hashchange', route);
});
