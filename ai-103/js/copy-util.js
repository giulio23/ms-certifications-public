/*
 * Clean copy helpers — turn a question object into tidy plain text so pasting
 * into notes / Anki / docs keeps its line structure (question, options,
 * correct answer, explanation), instead of the broken layout you get from
 * selecting the rendered buttons + HTML.
 * Private, gated study app — personal use.
 */
const COPY_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

// HTML explanation (SkillCertPro) -> readable multi-line text. ML explanations are already plain.
function explanationToText(html) {
  if (!html) return '';
  if (!/</.test(html)) return String(html).trim();
  let t = String(html);
  t = t.replace(/<\s*br\s*\/?>/gi, '\n');
  t = t.replace(/<\s*li[^>]*>/gi, '\n• ');
  t = t.replace(/<\/(p|div|li|ul|ol|h[1-6])\s*>/gi, '\n');
  t = t.replace(/<[^>]+>/g, '');
  t = t.replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<')
       .replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&#39;/gi, "'");
  t = t.replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return t;
}

// Build the clean copy block for one question (correct may be a number or an array).
function questionToText(q) {
  const correct = (Array.isArray(q.correct) ? q.correct.slice() : [q.correct]).sort((a, b) => a - b);
  const lines = [];
  lines.push((q.question || '').trim());
  lines.push('');
  (q.options || []).forEach((opt, i) => {
    lines.push(COPY_LETTERS[i] + '. ' + String(opt).trim() + (correct.includes(i) ? '  ✓' : ''));
  });
  lines.push('');
  lines.push('Correct answer: ' + correct.map(i => COPY_LETTERS[i]).join(', '));
  const expl = explanationToText(q.explanation);
  if (expl) lines.push('Explanation: ' + expl);
  let label;
  if (q.sourceBank === 'skillcertpro') {
    label = 'Tests' + (q.set ? ' · Set ' + q.set + (q.setQuestion ? ' · Q' + q.setQuestion : '') : '');
  } else {
    label = 'Microsoft Learn' + (q.source && q.source.title ? ' · ' + q.source.title : '');
  }
  lines.push('');
  lines.push('[' + label + ']');
  return lines.join('\n');
}

// Copy text to the clipboard with a brief "Copied!" flash on the button.
function copyText(text, btn) {
  const flash = () => {
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = orig; }, 1200);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(flash).catch(() => fallbackCopy(text, flash));
  } else {
    fallbackCopy(text, flash);
  }
}

function fallbackCopy(text, cb) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.focus(); ta.select();
  try { document.execCommand('copy'); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
  if (cb) cb();
}
