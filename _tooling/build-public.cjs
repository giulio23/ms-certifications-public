/* Build a PUBLIC cert app from its private merged app.
 * PUBLIC = Microsoft-Learn-only: strips ALL skillcertpro content. Publishable.
 * Usage: node build-public.cjs <cert>       e.g.  node build-public.cjs ab-730
 * Handles the JS bank + shared engines + study.html/learn.html. exam.html and index.html
 * are hand-maintained per cert in the public repo (public branding, no Tests source).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CERT = (process.argv[2] || 'ab-731').toLowerCase();
const PRIV = `D:/Projects/ms-certifications/${CERT}/practice-exam-merged`;
const PUBROOT = 'D:/Projects/ms-certifications-public';
const PUB = path.join(PUBROOT, CERT);

if (!fs.existsSync(PRIV)) { console.error('No private merged app at', PRIV); process.exit(1); }
fs.mkdirSync(path.join(PUB, 'js'), { recursive: true });
fs.mkdirSync(path.join(PUB, 'css'), { recursive: true });

// 1. questions.combined.js = COMBINED_QUESTIONS filtered to microsoft-learn only
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(PRIV, 'js/questions.combined.js'), 'utf8') + '\nthis.Q=COMBINED_QUESTIONS;', ctx);
const pub = ctx.Q.filter(q => q.sourceBank === 'microsoft-learn');
if (pub.some(q => q.sourceBank === 'skillcertpro')) throw new Error('SKILLCERTPRO LEAK');
const CU = CERT.toUpperCase();
const header = `/*\n * ${CU} PUBLIC bank — Microsoft-Learn-derived, original & publishable. No third-party content.\n */\n`;
fs.writeFileSync(path.join(PUB, 'js/questions.combined.js'), header + 'const COMBINED_QUESTIONS = ' + JSON.stringify(pub) + ';\n');

// 2. copy shared engines + ML study assets; strip personal Medium links from JS headers
const stripMedium = (s) => s.split('\n').filter(l => !/medium\.com\/@giulio_91720/.test(l)).join('\n');
for (const f of ['app.js', 'study-app.js', 'learn-app.js', 'copy-util.js', 'mastery.js', 'study-guide.js', 'questions.js', 'study-questions.js']) {
  fs.writeFileSync(path.join(PUB, 'js', f), stripMedium(fs.readFileSync(path.join(PRIV, 'js', f), 'utf8')));
}
fs.copyFileSync(path.join(PRIV, 'css/styles.css'), path.join(PUB, 'css/styles.css'));

// 3. copy study.html + learn.html, then apply public transforms (idempotent across all public HTML):
//    remove the private noindex, and point hub-home at the project-pages parent ("/" -> "../").
for (const f of ['study.html', 'learn.html']) {
  fs.copyFileSync(path.join(PRIV, f), path.join(PUB, f));
}
function publicizeHtml(file) {
  let h = fs.readFileSync(file, 'utf8');
  h = h.replace(/\s*<meta name="robots" content="noindex, nofollow">/g, '');
  h = h.replace(/(<a id="hub-home" href=)"\/"/g, '$1"../"');
  fs.writeFileSync(file, h);
}
for (const f of fs.readdirSync(PUB)) { if (f.endsWith('.html')) publicizeHtml(path.join(PUB, f)); }

console.log(`${CU} PUBLIC bank:`, pub.length, 'questions (', pub.filter(q => q.generated).length, 'generated,', pub.filter(q => !q.generated).length, 'hand-authored )');
console.log('skillcertpro in public bank:', pub.filter(q => q.sourceBank === 'skillcertpro').length);
console.log('wrote', PUB, '(exam.html + index.html are hand-maintained — verify they exist)');
