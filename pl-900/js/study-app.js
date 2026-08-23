/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// PL-900 Study Mode Engine

let studyQuestions = [];
let studyIndex = 0;
let studyAnswers = {};          // index -> array of selected option indices (submitted)
let selectedBullets = new Set();
let studyAnswered = false;
let pendingSel = new Set();      // in-progress selection for the current question

const SKILL_BADGE_COLORS = {
  1: 'bg-blue-100 text-blue-700',
  2: 'bg-emerald-100 text-emerald-700',
  3: 'bg-amber-100 text-amber-700',
  4: 'bg-violet-100 text-violet-700',
  5: 'bg-rose-100 text-rose-700'
};

// study-guide section code (e.g. "2B") <-> our sub-skill code (e.g. "2.2")
const SUB_TO_SECTION = { '1.1':'1A','1.2':'1B','2.1':'2A','2.2':'2B','3.1':'3A','3.2':'3B','3.3':'3C','4.1':'4A','4.2':'4B','5.1':'5A','5.2':'5B' };

// uniform answer helpers (ML `correct` is a number; combined/SkillCertPro `correct` is an array)
function correctSet(q) { return (Array.isArray(q.correct) ? q.correct : [q.correct]).slice().sort((a, b) => a - b); }
function isMultiQ(q)   { return q.type === 'multiple' || correctSet(q).length > 1; }
function arrEq(a, b)   { if (a.length !== b.length) return false; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false; return true; }
function isRight(i)    { return studyAnswers[i] !== undefined && arrEq(studyAnswers[i].slice().sort((a,b)=>a-b), correctSet(studyQuestions[i])); }
function sectionByCode(code) {
  for (const s of STUDY_GUIDE) { const sec = s.sections.find(x => x.code === code); if (sec) return { skill: s.skill, section: sec }; }
  return null;
}

// ─── INIT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildStudyGuide();
});

// ─── SELECTION SCREEN ──────────────────────────────────

function buildStudyGuide() {
  const container = document.getElementById('study-guide-container');
  container.innerHTML = '';
  const progress = loadProgress();
  const allQuestions = getAllQuestions();

  STUDY_GUIDE.forEach(skill => {
    const colorMap = { blue: 'blue', emerald: 'emerald', amber: 'amber', violet: 'violet', rose: 'rose' };
    const c = colorMap[skill.color] || 'blue';

    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden';

    // Header
    const header = document.createElement('button');
    header.className = 'w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition';
    header.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-${c}-100 rounded-xl flex items-center justify-center text-${c}-600 font-bold text-sm">${skill.skill}</div>
        <div>
          <div class="font-semibold text-sm">${skill.title}</div>
          <div class="text-xs text-gray-400 mt-0.5">${skill.weight}</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="event.stopPropagation(); selectAllSkill(${skill.skill})" class="text-xs text-${c}-500 hover:text-${c}-700 font-medium px-2 py-1 rounded hover:bg-${c}-50 transition">Select All</button>
        <svg class="w-4 h-4 text-gray-400 transition-transform skill-chevron-${skill.skill}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </div>
    `;
    header.onclick = () => toggleSkillAccordion(skill.skill);

    // Body
    const body = document.createElement('div');
    body.id = `skill-body-${skill.skill}`;
    body.className = 'hidden border-t border-gray-100';

    skill.sections.forEach(section => {
      const sectionDiv = document.createElement('div');
      sectionDiv.className = 'px-5 py-3';
      sectionDiv.innerHTML = `<div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">${section.code}. ${section.title}</div>`;

      section.bullets.forEach(bullet => {
        const count = allQuestions.filter(q => q.bullet === bullet.slug).length;
        const prog = progress[bullet.slug];
        const progText = prog ? `${prog.correct}/${prog.total}` : '';
        const progColor = prog ? (prog.correct / prog.total >= 0.8 ? 'text-emerald-500' : prog.correct / prog.total >= 0.5 ? 'text-amber-500' : 'text-red-500') : '';

        const row = document.createElement('label');
        row.className = 'flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 cursor-pointer transition';
        row.innerHTML = `
          <input type="checkbox" data-bullet="${bullet.slug}" class="bullet-checkbox w-4 h-4 text-${c}-500 rounded border-gray-300 focus:ring-${c}-500" onchange="updateSelection()">
          <span class="flex-1 text-sm text-gray-700">${bullet.label}</span>
          ${progText ? `<span class="text-xs font-medium ${progColor}">${progText}</span>` : ''}
          <span class="text-xs text-gray-300">${count}q</span>
        `;
        sectionDiv.appendChild(row);
      });

      // SkillCertPro row for this section (tagged at sub-skill level, not per-bullet)
      const scpSlug = 'scp:' + section.code;
      const scpCount = allQuestions.filter(q => q.bullet === scpSlug).length;
      if (scpCount) {
        const prog = progress[scpSlug];
        const progText = prog ? `${prog.correct}/${prog.total}` : '';
        const progColor = prog ? (prog.correct / prog.total >= 0.8 ? 'text-emerald-500' : prog.correct / prog.total >= 0.5 ? 'text-amber-500' : 'text-red-500') : '';
        const scpRow = document.createElement('label');
        scpRow.className = 'flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-rose-50/60 cursor-pointer transition';
        scpRow.innerHTML = `
          <input type="checkbox" data-bullet="${scpSlug}" class="bullet-checkbox w-4 h-4 text-rose-500 rounded border-gray-300 focus:ring-rose-500" onchange="updateSelection()">
          <span class="flex-1 text-sm text-gray-700">All Tests — ${section.title}
            <span class="ml-1 align-middle text-[10px] font-semibold bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded">Tests</span>
          </span>
          ${progText ? `<span class="text-xs font-medium ${progColor}">${progText}</span>` : ''}
          <span class="text-xs text-gray-300">${scpCount}q</span>
        `;
        sectionDiv.appendChild(scpRow);
      }

      body.appendChild(sectionDiv);
    });

    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function toggleSkillAccordion(skillNum) {
  const body = document.getElementById(`skill-body-${skillNum}`);
  const chevron = document.querySelector(`.skill-chevron-${skillNum}`);
  body.classList.toggle('hidden');
  chevron.classList.toggle('rotate-180');
}

function selectAllSkill(skillNum) {
  const skill = STUDY_GUIDE.find(s => s.skill === skillNum);
  const slugs = skill.sections.flatMap(s => [...s.bullets.map(b => b.slug), 'scp:' + s.code]);
  const checkboxes = document.querySelectorAll('.bullet-checkbox');
  const allSelected = slugs.every(slug => {
    const cb = [...checkboxes].find(c => c.dataset.bullet === slug);
    return cb && cb.checked;
  });
  checkboxes.forEach(cb => {
    if (slugs.includes(cb.dataset.bullet)) cb.checked = !allSelected;
  });
  // Expand if not already
  const body = document.getElementById(`skill-body-${skillNum}`);
  if (body.classList.contains('hidden')) toggleSkillAccordion(skillNum);
  updateSelection();
}

function updateSelection() {
  selectedBullets.clear();
  document.querySelectorAll('.bullet-checkbox:checked').forEach(cb => {
    selectedBullets.add(cb.dataset.bullet);
  });
  const allQ = getAllQuestions();
  const filtered = allQ.filter(q => selectedBullets.has(q.bullet));

  document.getElementById('selected-count').textContent = selectedBullets.size;
  document.getElementById('question-count').textContent = filtered.length;

  const bar = document.getElementById('action-bar');
  const btn = document.getElementById('btn-start-study');
  if (selectedBullets.size > 0) {
    bar.classList.remove('translate-y-full');
    btn.disabled = false;
  } else {
    bar.classList.add('translate-y-full');
    btn.disabled = true;
  }
}

// ─── PRACTICE ENGINE ───────────────────────────────────

function getAllQuestions() {
  const all = [...QUESTIONS];
  if (typeof STUDY_QUESTIONS !== 'undefined') all.push(...STUDY_QUESTIONS);
  // SkillCertPro (from the combined bank) — tagged only to the sub-skill/section level,
  // so each gets a synthetic section-level bullet: "scp:2B".
  if (typeof COMBINED_QUESTIONS !== 'undefined') {
    COMBINED_QUESTIONS.forEach(q => {
      if (q.sourceBank === 'skillcertpro' && q.sub && SUB_TO_SECTION[q.sub]) {
        all.push(Object.assign({}, q, { bullet: 'scp:' + SUB_TO_SECTION[q.sub] }));
      }
    });
  }
  return all;
}

function startStudy() {
  const allQ = getAllQuestions();
  const pool = allQ.filter(q => selectedBullets.has(q.bullet));
  // Default: keep original order (SkillCertPro set → question). Shuffle only if opted in.
  const shuffleEl = document.getElementById('opt-study-shuffle');
  studyQuestions = (shuffleEl && shuffleEl.checked) ? shuffleArr(pool) : pool;
  studyIndex = 0;
  studyAnswers = {};
  studyAnswered = false;
  pendingSel = new Set();

  document.getElementById('select-screen').classList.add('hidden');
  document.getElementById('practice-screen').classList.remove('hidden');
  document.getElementById('study-total').textContent = studyQuestions.length;

  renderStudyQuestion();
}

function renderStudyQuestion() {
  const q = studyQuestions[studyIndex];
  studyAnswered = studyAnswers[studyIndex] !== undefined;
  if (!studyAnswered) pendingSel = new Set(pendingSel); // keep pending across re-renders of the same question
  const multi = isMultiQ(q);
  const cset = correctSet(q);

  document.getElementById('study-current').textContent = studyIndex + 1;
  document.getElementById('study-progress-bar').style.width = ((studyIndex + 1) / studyQuestions.length * 100) + '%';

  // Breadcrumb + topic label (SkillCertPro has no per-bullet tag)
  const isScp = q.sourceBank === 'skillcertpro';
  const bulletLabel = findBulletLabel(q.bullet);
  const crumb = isScp
    ? `Domain ${q.skill} › Tests › ${bulletLabel || (q.sub || '')}`
    : `Domain ${q.skill} › ${q.section} › ${bulletLabel || q.topic}`;
  document.getElementById('study-breadcrumb').textContent = crumb;

  // Skill badge
  const skillEl = document.getElementById('sq-skill');
  skillEl.className = 'text-xs font-semibold px-2 py-1 rounded-full ' + (SKILL_BADGE_COLORS[q.skill] || SKILL_BADGE_COLORS[1]);
  skillEl.textContent = 'Domain ' + q.skill;
  document.getElementById('sq-topic').textContent = isScp
    ? 'Tests' + (q.set ? ' · Set ' + q.set + (q.setQuestion ? ' · Q' + q.setQuestion : '') : '')
    : (q.topic || '');
  document.getElementById('sq-text').textContent = q.question;
  document.getElementById('sq-multi-hint').classList.toggle('hidden', !multi);

  // Correct count so far
  const correctSoFar = Object.keys(studyAnswers).filter(i => isRight(i)).length;
  document.getElementById('study-correct-count').textContent = correctSoFar + ' correct';

  // Options
  const container = document.getElementById('sq-options');
  container.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const submitted = studyAnswers[studyIndex] || [];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'w-full text-left p-4 rounded-xl border transition flex items-start gap-3 ';
    const isCorrectOpt = cset.includes(i);
    const chosen = studyAnswered ? submitted.includes(i) : pendingSel.has(i);

    if (studyAnswered) {
      if (isCorrectOpt) btn.className += 'border-emerald-300 bg-emerald-50 text-emerald-800';
      else if (chosen) btn.className += 'border-red-300 bg-red-50 text-red-800';
      else btn.className += 'border-gray-100 bg-gray-50 text-gray-400';
    } else if (chosen) {
      btn.className += 'border-violet-300 bg-violet-50 text-violet-800';
    } else {
      btn.className += 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 text-gray-700';
    }

    const marker = multi
      ? `<span class="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-xs ${chosen ? 'bg-violet-500 text-white' : 'bg-gray-100 text-gray-400'} ${studyAnswered && isCorrectOpt ? 'bg-emerald-500 text-white' : ''}">${chosen || (studyAnswered && isCorrectOpt) ? '✓' : ''}</span>`
      : `<span class="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-semibold ${chosen ? (studyAnswered ? (isCorrectOpt ? 'bg-emerald-500' : 'bg-red-500') : 'bg-violet-500') + ' text-white' : isCorrectOpt && studyAnswered ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500'}">${letters[i]}</span>`;

    btn.innerHTML = `${marker}<span class="text-sm leading-relaxed">${opt}</span>`;
    if (!studyAnswered) btn.onclick = () => toggleSel(i, multi);
    container.appendChild(btn);
  });

  // Explanation & source
  const explEl = document.getElementById('sq-explanation');
  const srcEl = document.getElementById('sq-source');
  if (studyAnswered) {
    const ok = isRight(studyIndex);
    explEl.classList.remove('hidden');
    explEl.className = 'mt-6 p-4 rounded-xl border text-sm leading-relaxed ' +
      (ok ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800');
    // Attribution only on original (Microsoft Learn) content — never on SkillCertPro.
    const attribution = isScp ? '' : '<br><span style="font-size:10px;color:#999;margin-top:4px;display:inline-block">© Giulio Stefanica — giulio.dk</span>';
    explEl.innerHTML = `<strong>${ok ? 'Correct!' : 'Incorrect.'}</strong> ${q.explanation || ''}${attribution}`;
    if (q.source) {
      srcEl.classList.remove('hidden');
      document.getElementById('sq-source-link').textContent = q.source.title;
      document.getElementById('sq-source-link').href = q.source.url;
    } else {
      srcEl.classList.add('hidden');
    }
  } else {
    explEl.classList.add('hidden');
    srcEl.classList.add('hidden');
  }

  // Nav: Skip (only before answering), Check (multi, before answering), Next (after)
  document.getElementById('btn-skip').classList.toggle('hidden', studyAnswered);
  const checkBtn = document.getElementById('btn-check');
  checkBtn.classList.toggle('hidden', studyAnswered || !multi);
  checkBtn.disabled = pendingSel.size === 0;
  document.getElementById('btn-study-next').classList.toggle('hidden', !studyAnswered);

  const isLast = studyIndex === studyQuestions.length - 1;
  document.getElementById('btn-study-next').textContent = isLast ? 'See Results' : 'Next';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// toggle an option. Single-answer: pick + reveal immediately. Multi: accumulate, reveal on Check.
function toggleSel(i, multi) {
  if (studyAnswered) return;
  if (multi) {
    if (pendingSel.has(i)) pendingSel.delete(i); else pendingSel.add(i);
    renderStudyQuestion();
  } else {
    studyAnswers[studyIndex] = [i];
    studyAnswered = true;
    pendingSel = new Set();
    renderStudyQuestion();
  }
}

// Copy the current study question (+options, answer, explanation) as clean text.
function copyStudyQuestion(btn) {
  const q = studyQuestions[studyIndex];
  if (q) copyText(questionToText(q), btn);
}

function checkStudyAnswer() {
  if (studyAnswered || pendingSel.size === 0) return;
  studyAnswers[studyIndex] = [...pendingSel].sort((a, b) => a - b);
  studyAnswered = true;
  pendingSel = new Set();
  renderStudyQuestion();
}

function skipStudyQuestion() {
  if (studyIndex < studyQuestions.length - 1) {
    studyIndex++;
    studyAnswered = false;
    pendingSel = new Set();
    renderStudyQuestion();
  } else {
    showStudyResults();
  }
}

function nextStudyQuestion() {
  if (studyIndex < studyQuestions.length - 1) {
    studyIndex++;
    studyAnswered = false;
    pendingSel = new Set();
    renderStudyQuestion();
  } else {
    showStudyResults();
  }
}

// ─── RESULTS ───────────────────────────────────────────

function showStudyResults() {
  document.getElementById('practice-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');

  // Calculate per-bullet results
  const bulletResults = {};
  studyQuestions.forEach((q, i) => {
    if (!bulletResults[q.bullet]) bulletResults[q.bullet] = { correct: 0, total: 0, label: findBulletLabel(q.bullet) || q.topic || q.sub };
    if (studyAnswers[i] !== undefined) {
      bulletResults[q.bullet].total++;
      if (isRight(i)) bulletResults[q.bullet].correct++;
    }
  });

  // Save progress
  const progress = loadProgress();
  Object.entries(bulletResults).forEach(([slug, data]) => {
    progress[slug] = { correct: data.correct, total: data.total, lastAttempt: new Date().toISOString().slice(0, 10) };
  });
  saveProgress(progress);

  // Totals
  const totalCorrect = Object.values(bulletResults).reduce((s, b) => s + b.correct, 0);
  const totalAnswered = Object.values(bulletResults).reduce((s, b) => s + b.total, 0);
  document.getElementById('study-final-correct').textContent = totalCorrect;
  document.getElementById('study-final-total').textContent = totalAnswered;

  // Icon
  const pct = totalAnswered > 0 ? totalCorrect / totalAnswered : 0;
  const icon = document.getElementById('study-result-icon');
  if (pct >= 0.8) { icon.textContent = '🎉'; icon.className = 'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl bg-emerald-100'; }
  else if (pct >= 0.5) { icon.textContent = '📝'; icon.className = 'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl bg-amber-100'; }
  else { icon.textContent = '📚'; icon.className = 'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl bg-red-100'; }

  // Per-bullet breakdown
  const breakdown = document.getElementById('bullet-breakdown');
  breakdown.innerHTML = '<h3 class="font-semibold mb-4">Results by Topic</h3>';
  let hasWeak = false;

  Object.entries(bulletResults).sort((a, b) => {
    const pa = a[1].total > 0 ? a[1].correct / a[1].total : 0;
    const pb = b[1].total > 0 ? b[1].correct / b[1].total : 0;
    return pa - pb;
  }).forEach(([slug, data]) => {
    const p = data.total > 0 ? Math.round(data.correct / data.total * 100) : 0;
    let barColor = 'bg-emerald-500';
    if (p < 80) { barColor = 'bg-amber-500'; hasWeak = true; }
    if (p < 50) barColor = 'bg-red-500';

    const row = document.createElement('div');
    row.className = 'mb-3';
    row.innerHTML = `
      <div class="flex justify-between text-sm mb-1">
        <span class="text-gray-600 truncate mr-2">${data.label}</span>
        <span class="font-medium flex-shrink-0">${data.correct}/${data.total} (${p}%)</span>
      </div>
      <div class="h-2 bg-gray-100 rounded-full"><div class="h-full ${barColor} rounded-full" style="width:${p}%"></div></div>
    `;
    breakdown.appendChild(row);
  });

  // Show retry weak button if applicable
  const retryBtn = document.getElementById('btn-retry-weak');
  if (hasWeak) {
    retryBtn.classList.remove('hidden');
    retryBtn.textContent = 'Retry Weak Areas (<80%)';
  }

  window.scrollTo({ top: 0 });
}

function retryWeak() {
  const progress = loadProgress();
  selectedBullets.clear();
  Object.entries(progress).forEach(([slug, data]) => {
    if (data.total > 0 && data.correct / data.total < 0.8) selectedBullets.add(slug);
  });
  document.getElementById('results-screen').classList.add('hidden');
  startStudy();
}

function backToGuide() {
  document.getElementById('results-screen').classList.add('hidden');
  document.getElementById('practice-screen').classList.add('hidden');
  document.getElementById('select-screen').classList.remove('hidden');
  buildStudyGuide(); // Refresh to show updated progress
  updateSelection();
}

// ─── HELPERS ───────────────────────────────────────────

function findBulletLabel(slug) {
  if (typeof slug === 'string' && slug.startsWith('scp:')) {
    const hit = sectionByCode(slug.slice(4));
    return hit ? 'Tests — ' + hit.section.title : 'Tests';
  }
  for (const skill of STUDY_GUIDE) {
    for (const section of skill.sections) {
      const bullet = section.bullets.find(b => b.slug === slug);
      if (bullet) return bullet.label;
    }
  }
  return null;
}

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('pl900-study-progress') || '{}');
  } catch { return {}; }
}

function saveProgress(data) {
  localStorage.setItem('pl900-study-progress', JSON.stringify(data));
}
