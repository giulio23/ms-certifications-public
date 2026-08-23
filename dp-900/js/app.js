/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * Microsoft-Learn questions are original work by Giulio Stefanica.
 * SkillCertPro questions are PURCHASED, COPYRIGHTED material — private training use only.
 */
// DP-900 Practice Exam — MERGED (Microsoft Learn + SkillCertPro), source switch + multi-answer.
let questions = [];
let currentIndex = 0;
let answers = {};          // index -> sorted array of selected option indices
let flagged = new Set();
let timerInterval = null;
let timeRemaining = 100 * 60;
let examStartTime = null;
let useTimer = true;
let instantFeedback = false;

const SOURCE_META = {
  'microsoft-learn': { label: 'Microsoft Learn', badge: 'bg-blue-100 text-blue-700', bar: 'bg-blue-500' },
  'skillcertpro':    { label: 'Tests',    badge: 'bg-rose-100 text-rose-700', bar: 'bg-rose-500' },
};

// Study-guide sub-skills (bullet points). domain = first digit.
const SUBSKILLS = {
  '1.1': 'Represent data',
  '1.2': 'Data storage options',
  '1.3': 'Data workloads (OLTP/OLAP)',
  '1.4': 'Roles & responsibilities',
  '2.1': 'Relational concepts',
  '2.2': 'Relational Azure services',
  '3.1': 'Azure storage',
  '3.2': 'Azure Cosmos DB',
  '4.1': 'Large-scale analytics',
  '4.2': 'Real-time analytics',
  '4.3': 'Power BI visualization',
};

// ---------- helpers ----------
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function arraysEqual(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}
function isCorrect(q, ans) { return !!ans && arraysEqual([...ans].sort((x, y) => x - y), q.correct); }
function isAnswered(i) { return answers[i] !== undefined && answers[i].length > 0; }
function badgeFor(q) {
  const m = SOURCE_META[q.sourceBank] || SOURCE_META['microsoft-learn'];
  let sub = '';
  if (q.sourceBank === 'skillcertpro' && q.set) sub += ' · Set ' + q.set + (q.setQuestion ? ' · Q' + q.setQuestion : '');
  if (q.sub) sub += ' · ' + q.sub + ' ' + (SUBSKILLS[q.sub] || '');
  else if (q.skill) sub += ' · D' + q.skill;
  const low = q.confidence === 'low' ? ' ⚠' : '';
  return { cls: m.badge, text: m.label + sub + low };
}

// Copy the current question (+options, answer, explanation) as clean text.
function copyCurrentQuestion(btn) {
  const q = questions[currentIndex];
  if (q) copyText(questionToText(q), btn);
}

// Filtering pipeline: source + set + area (domain OR sub-skill) + low-confidence
function filteredPool() {
  const source = document.getElementById('opt-source').value;
  const setVal = document.getElementById('opt-set').value;
  const area   = document.getElementById('opt-area').value;   // 'all' | '2' (domain) | '2.2' (sub-skill)
  const hideLow = document.getElementById('opt-hidelow').checked;
  return COMBINED_QUESTIONS.filter(q => {
    if (source !== 'all' && q.sourceBank !== source) return false;
    if (setVal !== 'all' && q.set !== parseInt(setVal, 10)) return false;   // ML has set=null -> excluded when a set is chosen
    if (area !== 'all') {                                                    // untagged -> excluded when an area is chosen
      if (area.includes('.')) { if (q.sub !== area) return false; }         // sub-skill match
      else if (q.skill !== parseInt(area, 10)) return false;                // whole-domain match
    }
    if (hideLow && q.confidence === 'low') return false;
    return true;
  });
}
function updatePoolNote() {
  const el = document.getElementById('pool-note');
  if (!el) return;
  const n = filteredPool().length;
  el.textContent = n + ' question' + (n === 1 ? '' : 's') + ' match your current filters.';
}
function initStart() {
  ['opt-source', 'opt-set', 'opt-area', 'opt-hidelow'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updatePoolNote);
  });
  // Deep-link from the Learn pages: exam.html?area=1.1 (&source=…) preselects the filter.
  const params = new URLSearchParams(location.search);
  ['area', 'source'].forEach(key => {
    const val = params.get(key);
    const el = document.getElementById('opt-' + key);
    if (val && el && [...el.options].some(o => o.value === val)) el.value = val;
  });
  updatePoolNote();
}
if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') initStart();
  else document.addEventListener('DOMContentLoaded', initStart);
}

// ---------- start ----------
function startExam() {
  useTimer = document.getElementById('opt-timer').checked;
  const shuffle = document.getElementById('opt-shuffle').checked;
  instantFeedback = document.getElementById('opt-instant').checked;
  const count = parseInt(document.getElementById('opt-count').value, 10); // 0 = all

  let pool = filteredPool();
  if (pool.length === 0) {
    alert('No questions match those filters.\n\nTip: some combinations are empty — e.g. Microsoft Learn has no set numbers, and a specific set + a non-matching sub-skill can yield nothing. Widen the source, set, or area.');
    return;
  }
  pool = shuffle ? shuffleArray(pool) : [...pool];
  if (count > 0 && pool.length > count) pool = pool.slice(0, count);
  questions = pool;

  answers = {};
  flagged = new Set();
  currentIndex = 0;
  examStartTime = Date.now();

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('exam-area').classList.remove('hidden');
  document.getElementById('nav-total').textContent = questions.length;

  buildQuestionMap();
  renderQuestion();

  if (useTimer) {
    timeRemaining = 100 * 60;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();
      if (timeRemaining <= 0) { clearInterval(timerInterval); finishExam(); }
    }, 1000);
  } else {
    document.getElementById('timer').textContent = '--:--';
  }
}

function updateTimerDisplay() {
  const m = Math.floor(timeRemaining / 60), s = timeRemaining % 60;
  const el = document.getElementById('timer');
  el.textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  if (timeRemaining <= 300) el.classList.add('text-red-500', 'font-bold');
}

function buildQuestionMap() {
  const map = document.getElementById('question-map');
  map.innerHTML = '';
  questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'w-7 h-7 text-xs rounded flex items-center justify-center transition';
    btn.textContent = i + 1;
    btn.onclick = () => { currentIndex = i; renderQuestion(); };
    map.appendChild(btn);
  });
  updateQuestionMap();
}
function updateQuestionMap() {
  const btns = document.getElementById('question-map').children;
  for (let i = 0; i < btns.length; i++) {
    btns[i].className = 'w-7 h-7 text-xs rounded flex items-center justify-center transition cursor-pointer ';
    if (i === currentIndex) btns[i].className += 'ring-2 ring-blue-500 ring-offset-1 ';
    if (flagged.has(i)) btns[i].className += 'bg-amber-400 text-white';
    else if (isAnswered(i)) btns[i].className += 'bg-blue-500 text-white';
    else btns[i].className += 'bg-gray-200 text-gray-600 hover:bg-gray-300';
  }
}

// ---------- render ----------
function renderQuestion() {
  const q = questions[currentIndex];
  const isMulti = q.type === 'multiple';
  document.getElementById('nav-current').textContent = currentIndex + 1;
  document.getElementById('progress-bar').style.width = ((currentIndex + 1) / questions.length) * 100 + '%';

  // Source badge (replaces domain-only badge)
  const b = badgeFor(q);
  const skillEl = document.getElementById('q-skill');
  skillEl.className = 'text-xs font-semibold px-2 py-1 rounded-full ' + b.cls;
  skillEl.textContent = b.text;
  document.getElementById('q-topic').textContent = q.topic || '';

  document.getElementById('q-text').textContent = q.question;
  document.getElementById('q-multi-hint').classList.toggle('hidden', !isMulti);

  const optContainer = document.getElementById('q-options');
  optContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const ans = answers[currentIndex] || [];
  const answered = isAnswered(currentIndex);

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'w-full text-left p-4 rounded-xl border transition flex items-start gap-3 ';
    const selected = ans.includes(i);
    const correctOpt = q.correct.includes(i);

    if (instantFeedback && answered) {
      if (correctOpt) btn.className += 'border-emerald-300 bg-emerald-50 text-emerald-800';
      else if (selected) btn.className += 'border-red-300 bg-red-50 text-red-800';
      else btn.className += 'border-gray-100 bg-gray-50 text-gray-400';
    } else if (selected) {
      btn.className += 'border-blue-300 bg-blue-50 text-blue-800';
    } else {
      btn.className += 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 text-gray-700';
    }

    const marker = isMulti
      ? `<span class="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-xs font-semibold ${selected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500 border border-gray-300'}">${selected ? '✓' : ''}</span>`
      : `<span class="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-semibold ${selected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'}">${letters[i]}</span>`;
    btn.innerHTML = `${marker}<span class="text-sm leading-relaxed">${opt}</span>`;

    if (!instantFeedback || !answered) btn.onclick = () => selectAnswer(i);
    optContainer.appendChild(btn);
  });

  // Explanation / feedback (ML has explanation; SkillCertPro shows correctness only)
  const explEl = document.getElementById('q-explanation');
  const srcEl = document.getElementById('q-source');
  const srcLink = document.getElementById('q-source-link');
  if (instantFeedback && answered) {
    explEl.classList.remove('hidden');
    const ok = isCorrect(q, ans);
    explEl.className = 'mt-6 p-4 rounded-xl border text-sm leading-relaxed ' +
      (ok ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800');
    const correctLetters = q.correct.map(ci => letters[ci]).join(', ');
    const attribution = q.sourceBank === 'microsoft-learn'
      ? '<br><span style="font-size:10px;color:#999;margin-top:4px;display:inline-block">© Giulio Stefanica — giulio.dk</span>'
      : '';
    const body = q.explanation
      ? `${q.explanation}${attribution}`
      : `Correct answer: <strong>${correctLetters}</strong>`;
    explEl.innerHTML = `<strong>${ok ? 'Correct!' : 'Incorrect.'}</strong> ${body}`;
    if (q.source && q.source.url) {
      srcEl.classList.remove('hidden');
      srcLink.textContent = q.source.title || q.source.url;
      srcLink.href = q.source.url;
    } else { srcEl.classList.add('hidden'); }
  } else {
    explEl.classList.add('hidden');
    srcEl.classList.add('hidden');
  }

  document.getElementById('btn-prev').disabled = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;
  const nextBtn = document.getElementById('btn-next');
  if (isLast) { nextBtn.textContent = 'Finish Exam'; nextBtn.onclick = () => confirmFinish(); }
  else { nextBtn.textContent = 'Next'; nextBtn.onclick = () => nextQuestion(); }

  const flagBtn = document.getElementById('btn-flag');
  flagBtn.classList.toggle('text-amber-500', flagged.has(currentIndex));
  flagBtn.classList.toggle('text-gray-400', !flagged.has(currentIndex));
  updateQuestionMap();
}

function selectAnswer(i) {
  const q = questions[currentIndex];
  const cur = answers[currentIndex] || [];
  if (q.type === 'multiple') {
    const idx = cur.indexOf(i);
    if (idx >= 0) cur.splice(idx, 1); else cur.push(i);
    answers[currentIndex] = cur.sort((a, b) => a - b);
    if (answers[currentIndex].length === 0) delete answers[currentIndex];
    if (!instantFeedback) { renderQuestion(); return; }  // multi: let user toggle freely
  } else {
    answers[currentIndex] = [i];
  }
  renderQuestion();
}

function nextQuestion() { if (currentIndex < questions.length - 1) { currentIndex++; renderQuestion(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }
function prevQuestion() { if (currentIndex > 0) { currentIndex--; renderQuestion(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }
function flagQuestion() { flagged.has(currentIndex) ? flagged.delete(currentIndex) : flagged.add(currentIndex); renderQuestion(); }

function confirmFinish() {
  const unanswered = questions.length - Object.keys(answers).length;
  let msg = 'Submit your exam?';
  if (unanswered > 0) msg += `\n\n${unanswered} question(s) unanswered.`;
  if (flagged.size > 0) msg += `\n${flagged.size} question(s) flagged for review.`;
  if (confirm(msg)) finishExam();
}

// ---------- results ----------
function finishExam() {
  if (timerInterval) clearInterval(timerInterval);
  const elapsed = Math.floor((Date.now() - examStartTime) / 1000);
  const elapsedMin = Math.floor(elapsed / 60), elapsedSec = elapsed % 60;

  let correct = 0;
  const bySource = {}; // sourceBank -> {correct,total}
  const byDomain = {}; // skill(1-3) -> {correct,total}
  const bySub = {};    // '2.2' -> {correct,total}
  questions.forEach((q, i) => {
    const s = q.sourceBank;
    bySource[s] = bySource[s] || { correct: 0, total: 0 };
    bySource[s].total++;
    const ok = isCorrect(q, answers[i]);
    if (ok) { correct++; bySource[s].correct++; }
    if (q.skill) {
      byDomain[q.skill] = byDomain[q.skill] || { correct: 0, total: 0 };
      byDomain[q.skill].total++;
      if (ok) byDomain[q.skill].correct++;
    }
    if (q.sub) {
      bySub[q.sub] = bySub[q.sub] || { correct: 0, total: 0 };
      bySub[q.sub].total++;
      if (ok) bySub[q.sub].correct++;
    }
  });

  const score = Math.round((correct / questions.length) * 1000);
  const passed = score >= 700;

  document.getElementById('exam-area').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');

  const icon = document.getElementById('result-icon');
  if (passed) {
    icon.className = 'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl bg-emerald-100';
    icon.textContent = '🎉';
    document.getElementById('result-subtitle').textContent = 'Congratulations! You passed!';
    document.getElementById('result-subtitle').className = 'text-emerald-600 font-medium';
  } else {
    icon.className = 'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl bg-red-100';
    icon.textContent = '📚';
    document.getElementById('result-subtitle').textContent = 'You need 700 to pass. Keep studying!';
    document.getElementById('result-subtitle').className = 'text-red-500 font-medium';
  }

  document.getElementById('result-score').textContent = score;
  document.getElementById('result-correct').textContent = `${correct}/${questions.length}`;
  document.getElementById('result-time').textContent = `${elapsedMin}:${elapsedSec.toString().padStart(2, '0')}`;

  // Breakdown by source, then by domain (where tagged)
  const bd = document.getElementById('result-breakdown');
  bd.innerHTML = '';
  const DOMAIN_META = {
    1: { label: 'D1 — Core data concepts', bar: 'bg-blue-500' },
    2: { label: 'D2 — Relational data on Azure', bar: 'bg-emerald-500' },
    3: { label: 'D3 — Non-relational data on Azure', bar: 'bg-amber-500' },
    4: { label: 'D4 — Analytics workload', bar: 'bg-violet-500' },
  };
  function row(label, c, t, bar, indent) {
    const pct = t > 0 ? Math.round((c / t) * 100) : 0;
    bd.insertAdjacentHTML('beforeend', `
      <div${indent ? ' class="ml-4"' : ''}>
        <div class="flex justify-between text-sm mb-1">
          <span class="text-gray-600">${label}</span>
          <span class="font-medium">${c}/${t} (${pct}%)</span>
        </div>
        <div class="h-2 bg-gray-100 rounded-full"><div class="h-full ${bar} rounded-full transition-all" style="width:${pct}%"></div></div>
      </div>`);
  }
  bd.insertAdjacentHTML('beforeend', '<div class="text-xs font-semibold text-gray-400 uppercase tracking-wide">By source</div>');
  Object.keys(bySource).forEach(s => {
    const m = SOURCE_META[s] || SOURCE_META['microsoft-learn'];
    row(m.label, bySource[s].correct, bySource[s].total, m.bar);
  });
  const domainKeys = Object.keys(byDomain);
  if (domainKeys.length) {
    bd.insertAdjacentHTML('beforeend', '<div class="text-xs font-semibold text-gray-400 uppercase tracking-wide pt-2">By exam area</div>');
    [1, 2, 3].filter(k => byDomain[k]).forEach(k => {
      row(DOMAIN_META[k].label, byDomain[k].correct, byDomain[k].total, DOMAIN_META[k].bar);
      // nested sub-skill rows for this domain, where present
      Object.keys(bySub).filter(s => s[0] === String(k)).sort().forEach(s =>
        row(s + ' ' + (SUBSKILLS[s] || ''), bySub[s].correct, bySub[s].total, DOMAIN_META[k].bar, true));
    });
  }

  window.scrollTo({ top: 0 });
}

function showReview() {
  const section = document.getElementById('review-section');
  section.classList.remove('hidden');
  section.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  questions.forEach((q, i) => {
    const ans = answers[i];
    const ok = isCorrect(q, ans);
    const wasAnswered = isAnswered(i);
    const b = badgeFor(q);

    const card = document.createElement('div');
    card.className = `bg-white rounded-2xl border p-6 ${ok ? 'border-emerald-200' : 'border-red-200'}`;

    const optionsHtml = q.options.map((opt, oi) => {
      let cls = 'text-gray-600', marker = '';
      const correctOpt = q.correct.includes(oi);
      const picked = wasAnswered && ans.includes(oi);
      if (correctOpt) { cls = 'text-emerald-700 font-medium'; marker = ' ✓'; }
      if (picked && !correctOpt) { cls = 'text-red-600 line-through'; marker = ' ✗'; }
      return `<div class="${cls} text-sm">${letters[oi]}. ${opt}${marker}</div>`;
    }).join('');

    const explHtml = q.explanation
      ? `<div class="ml-10 text-sm text-gray-500 bg-gray-50 rounded-lg p-3">${q.explanation}</div>`
      : `<div class="ml-10 text-xs text-gray-400">Correct: ${q.correct.map(ci => letters[ci]).join(', ')}</div>`;
    const srcHtml = (q.source && q.source.url)
      ? `<div class="ml-10 mt-2 text-xs text-gray-400">Source: <a href="${q.source.url}" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-600 underline">${q.source.title || q.source.url}</a></div>`
      : '';

    card.innerHTML = `
      <div class="flex items-start gap-3 mb-2">
        <span class="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold ${ok ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}">${i + 1}</span>
        <div class="flex-1">
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${b.cls}">${b.text}</span>${q.type === 'multiple' ? ' <span class="text-[10px] text-violet-600 font-semibold">multi</span>' : ''}
          <div class="text-sm font-medium leading-relaxed mt-1">${q.question}</div>
        </div>
      </div>
      <div class="ml-10 space-y-1 mb-3">${optionsHtml}</div>
      ${explHtml}
      ${srcHtml}
    `;
    section.appendChild(card);
  });

  section.scrollIntoView({ behavior: 'smooth' });
}
