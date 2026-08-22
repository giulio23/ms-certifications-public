/*
 * AB-730 mastery guides — notes + scenario decisions + self-check per study-guide sub-skill.
 * Grounded in the official Microsoft Learn AB-730 course ("Transform business workflows with
 * generative AI") and Microsoft 365 Copilot product docs. Original, publishable content
 * (no third-party material). Rendered by learn.html / learn-app.js.
 */
const MASTERY_DOMAINS = [
  { n: 1, title: 'Understand generative AI fundamentals', weight: '25–30%', color: 'blue' },
  { n: 2, title: 'Manage prompts and conversations by using AI', weight: '35–40%', color: 'emerald' },
  { n: 3, title: 'Draft and analyze business content by using AI', weight: '25–30%', color: 'amber' },
];

const MASTERY = [
  {
    id: '1.1', domain: 1, title: 'GenAI capabilities across Microsoft 365 experiences', ready: true,
    intro: 'AB-730 is a <b>no-code, business-user</b> exam about using Microsoft 365 Copilot in the flow of work. Start here: what generative AI is (vs classification), how Copilot is grounded on your own data through Microsoft Graph, how the data flows securely, and how Copilot differs across the apps.',
    html: `
<h2>Notes</h2>

<h3>Generative vs classification models</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Type</th><th>Does</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><b>Generative</b></td><td><b>Creates</b> new content (text, image, audio, video) from a prompt</td><td>Draft an email, summarize a doc</td></tr>
    <tr><td><b>Classification</b></td><td><b>Categorizes</b> existing data into buckets</td><td>Sort spam vs not-spam</td></tr>
  </tbody>
</table></div>
<p>Copilot is built on <b>large language models (LLMs)</b> + <b>natural language processing (NLP)</b> + <b>pre-trained models</b> trained on huge datasets to recognize patterns.</p>

<h3>How Copilot is grounded &amp; secured</h3>
<ul>
  <li><b>Microsoft Graph</b> is the secure intelligence layer that connects your emails, files, meetings, calendar and chats into one context-aware picture.</li>
  <li>Copilot only accesses data <b>the user already has permission to see</b> — it never bypasses permissions and does not pull random internet data (in Work mode).</li>
  <li><b>The data flow (heavily tested):</b> User prompt → Graph <b>pre-processing (grounding)</b> → LLM → LLM response → Graph <b>post-processing (re-grounding)</b> → user. <b>Grounding happens twice.</b></li>
  <li>Data is <b>encrypted in transit</b>; org data is <b>never stored or used to train the LLM</b> — true in both Work and Web mode.</li>
</ul>

<h3>Context, chat vs agent, per-app differences</h3>
<ul>
  <li>More and clearer <b>context</b> → more relevant, grounded answers (ties to prompt quality).</li>
  <li><b>Copilot Chat</b> = a shared, cross-app conversation space. <b>Agents</b> = specialized mini-Copilots for a specific, repeatable task grounded in chosen knowledge sources.</li>
  <li>Each app's Copilot is <b>specialized</b> — a capability in Word may not exist in Excel or Outlook. Match the app to the task.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Generative = create; classification = categorize.</b></li>
    <li>Copilot respects existing <b>permissions</b> and never trains on your data — in <b>every</b> mode.</li>
    <li><b>Grounding is two-step</b>: Graph pre-processing and post-processing around the LLM.</li>
    <li>Web mode changes the <b>sources</b>, not the security.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>A colleague worries the emails Copilot reads will train the AI models. What do you tell them? <span class="check">Decide, then check.</span></li>
  <li>You need Copilot to answer using your team's SharePoint project files, not the public web. Which mode? <span class="check">Decide.</span></li>
  <li>A user says Copilot "can see everything in the company." Is that right? <span class="check">Decide.</span></li>
  <li>You want a reusable helper that always answers HR-policy questions from the HR handbook. Chat or an agent? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li>Prompts, responses and Graph data stay within the Microsoft 365 service boundary and are <b>not used to train</b> the foundation LLMs.</li>
  <li><b>Work mode</b> — it grounds on org data via Microsoft Graph.</li>
  <li>No — Copilot only surfaces content the <b>user already has permission</b> to access.</li>
  <li>Build an <b>agent</b> grounded on the HR handbook — a scoped, repeatable task.</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Which model type creates new content?</li>
  <li>Name the two grounding steps around the LLM.</li>
  <li>Is organizational data ever used to train the LLM?</li>
  <li>What connects your M365 data into a context-aware picture for Copilot?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Generative</b> models.</li>
  <li>Graph <b>pre-processing</b> and <b>post-processing</b> (grounding twice).</li>
  <li><b>No</b> — never, in any mode.</li>
  <li><b>Microsoft Graph.</b></li>
</ol>
</details>
`,
  },
  {
    id: '1.2', domain: 1, title: 'Responsible AI and data protection practices', ready: true,
    intro: 'Know the <b>six responsible-AI principles</b> cold — the exam loves to make you tell Fairness, Inclusiveness, Privacy &amp; Security and Transparency apart. Then know the common risks, the human-in-the-loop rule, and how data protection restricts what Copilot returns.',
    html: `
<h2>Notes</h2>

<h3>The six responsible-AI principles</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Principle</th><th>Means</th></tr></thead>
  <tbody>
    <tr><td><b>Fairness</b></td><td>Unbiased model &amp; training data; fair results for all groups. <em>Internal, about the model.</em></td></tr>
    <tr><td><b>Reliability &amp; Safety</b></td><td>Works as expected, tested for harmful content, consistent responses.</td></tr>
    <tr><td><b>Privacy &amp; Security</b></td><td>Protects user data, prevents unauthorized access / PII leaks. <em>Technical side.</em></td></tr>
    <tr><td><b>Inclusiveness</b></td><td>Accessible to all regardless of disability/background (language, hearing, vision). <em>Not the same as fairness.</em></td></tr>
    <tr><td><b>Transparency</b></td><td>User can see how the AI reached the answer — <b>citations</b>, source visibility.</td></tr>
    <tr><td><b>Accountability</b></td><td>Humans/orgs own the outputs; "the AI told me" is no excuse; needs <b>human-in-the-loop</b>.</td></tr>
  </tbody>
</table></div>

<h3>Common risks &amp; verification</h3>
<ul>
  <li><b>Fabrications / hallucinations</b> — confident but wrong output.</li>
  <li><b>Prompt injection</b> — hidden/malicious instructions trying to make the AI ignore its rules.</li>
  <li><b>Over-reliance</b> — trusting output without checking.</li>
  <li><b>Verification:</b> check <b>citations</b>, apply <b>human review</b>, and confirm accuracy before any customer-facing or professional use. Never "set and forget."</li>
</ul>

<h3>How data protection restricts results</h3>
<ul>
  <li>Copilot honors <b>sensitivity labels</b> and compliance policies; <b>Microsoft Purview</b> enforces compliance and helps prevent oversharing.</li>
  <li>The <b>Enterprise Data Protection</b> framework governs these measures; permissions are never bypassed.</li>
  <li>Data protection can <b>limit what Copilot returns</b> — e.g. labeled/restricted content the user cannot access will not appear.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Fairness</b> (unbiased model) vs <b>Inclusiveness</b> (accessibility) — the #1 trap.</li>
    <li><b>Transparency</b> = citations / how the answer was reached.</li>
    <li><b>Accountability</b> = human-in-the-loop; humans stay responsible.</li>
    <li>Sensitivity labels + Purview + permissions <b>restrict</b> what Copilot can surface.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>A model gives worse results for one demographic group. Which principle is violated? <span class="check">Decide.</span></li>
  <li>A user with low vision cannot use a feature. Which principle? <span class="check">Decide.</span></li>
  <li>Copilot returns a confident figure for a client report. What must happen before it is sent? <span class="check">Decide.</span></li>
  <li>An email contains hidden text telling Copilot to ignore its instructions. What is this called? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li><b>Fairness</b> — biased results across groups.</li>
  <li><b>Inclusiveness</b> — accessibility, not fairness.</li>
  <li><b>Human review</b> — verify against sources/citations before customer-facing use (accountability).</li>
  <li><b>Prompt injection.</b></li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Which principle is about accessibility?</li>
  <li>Which principle is shown by citations?</li>
  <li>Name the three common risks.</li>
  <li>What technology enforces compliance and prevents oversharing?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Inclusiveness.</b></li>
  <li><b>Transparency.</b></li>
  <li><b>Fabrications, prompt injection, over-reliance.</b></li>
  <li><b>Microsoft Purview</b> (part of Enterprise Data Protection).</li>
</ol>
</details>
`,
  },
  {
    id: '2.1', domain: 2, title: 'Create and manage prompts in Microsoft 365 Copilot', ready: true,
    intro: 'This is the largest domain. Master the <b>four prompt elements</b>, the <b>reference symbols</b> (/ # @), and how to save, schedule and share prompts. Remember Copilot cannot read local files — cloud only.',
    html: `
<h2>Notes</h2>

<h3>The four prompt elements</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Element</th><th>Answers</th></tr></thead>
  <tbody>
    <tr><td><b>Context</b></td><td>Who you are and why you need it</td></tr>
    <tr><td><b>Goal</b></td><td>What to achieve (draft / summarize / analyze / plan)</td></tr>
    <tr><td><b>Source</b></td><td>Which documents or data to use</td></tr>
    <tr><td><b>Expectations</b></td><td>Tone, format, length, style</td></tr>
  </tbody>
</table></div>
<p><b>Do:</b> be clear and specific, conversational, give examples, iterate, check accuracy. <b>Don't:</b> be vague, use heavy jargon/slang, give conflicting instructions, or change topic abruptly.</p>

<h3>Reference resources with symbols</h3>
<ul>
  <li><b>/</b> (slash) → files &amp; folders — <b>cloud-stored only (OneDrive / SharePoint); cannot access local files.</b></li>
  <li><b>#</b> (hashtag) → meetings, recurring meetings, topics.</li>
  <li><b>@</b> (at) → people and agents.</li>
  <li>In <b>Word</b> you can reference <b>up to 10 items</b> in a prompt.</li>
</ul>

<h3>Modes, responses &amp; voice</h3>
<ul>
  <li><b>Work mode</b> — org data via Graph, needs a Copilot license, for internal tasks. <b>Web mode</b> — public web via Bing, available by default even unlicensed, for research/brainstorming. Same security either way.</li>
  <li><b>Response modes:</b> Auto (Copilot decides depth), Quick Response (fast/concise), Think Deeper (longer, deeper).</li>
  <li><b>Voice:</b> Dictation, Read Aloud, Voice Chat (two-way, keeps context).</li>
</ul>

<h3>Save, schedule &amp; share</h3>
<ul>
  <li><b>Prompt Gallery</b> — pre-built prompts by task/role, filterable; save your own custom prompts.</li>
  <li><b>Saved prompts cannot be edited directly</b> — run again, adjust wording, save as new.</li>
  <li><b>Scheduled prompts</b> — automate a prompt to run daily/weekly/monthly; Copilot runs it in the background.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Four elements: <b>Context, Goal, Source, Expectations</b> — pick the right ones from a list.</li>
    <li><b>/</b> files (cloud only), <b>#</b> meetings/topics, <b>@</b> people/agents.</li>
    <li>Saved prompts are <b>run-and-save-as-new</b>, not edited in place.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>You want Copilot to draft from a proposal saved on your desktop. Will a <b>/</b> reference work? <span class="check">Decide.</span></li>
  <li>You need the same market-summary prompt to run automatically every Monday. What feature? <span class="check">Decide.</span></li>
  <li>A prompt only says "write something about sales." Which of the four elements are missing? <span class="check">Decide.</span></li>
  <li>You want to pull a specific recurring meeting into a prompt. Which symbol? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li>No — <b>/</b> reaches cloud files only (OneDrive/SharePoint); move it to the cloud first.</li>
  <li><b>Scheduled prompts.</b></li>
  <li>Goal is vague; <b>Context, Source, Expectations</b> are missing.</li>
  <li><b>#</b> (hashtag).</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>List the four prompt elements.</li>
  <li>Which symbol references people and agents?</li>
  <li>Can Copilot reference a file on your local hard drive?</li>
  <li>How do you change a saved prompt?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Context, Goal, Source, Expectations.</b></li>
  <li><b>@</b> (at).</li>
  <li><b>No</b> — cloud-stored files only.</li>
  <li>Run it, adjust the wording, and <b>save as a new</b> prompt.</li>
</ol>
</details>
`,
  },
  {
    id: '2.2', domain: 2, title: 'Manage conversations in Copilot', ready: true,
    intro: 'Short but reliably tested. Know how to find, rename and delete chats, and — most importantly — the difference between <b>Copilot Memory</b> (persistent) and <b>Temporary Chat</b> (bypasses memory, not saved).',
    html: `
<h2>Notes</h2>

<h3>Chat history</h3>
<ul>
  <li>History is <b>searchable</b> by keyword/project/task (except Temporary Chats).</li>
  <li><b>Rename</b> chats to meaningful titles (automatic session titles also exist); <b>delete</b> outdated chats.</li>
  <li>Add chats and files to a <b>Notebook</b> workspace.</li>
</ul>

<h3>Memory vs Temporary Chat</h3>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Copilot Memory</th><th>Temporary Chat</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Settings &gt; Personalization</td><td>Three-dots menu (incognito)</td></tr>
    <tr><td>Behavior</td><td><b>Persistent</b> preferences (role, style, formatting) appended to every prompt</td><td><b>Ignores</b> saved memory</td></tr>
    <tr><td>Saved?</td><td>Yes</td><td><b>No</b> — not kept in history</td></tr>
    <tr><td>Admin</td><td>IT admins can manage org-wide</td><td>—</td></tr>
  </tbody>
</table></div>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Memory = persistent</b> personalization; <b>Temporary Chat = bypasses memory and is not saved.</b></li>
    <li>Temporary Chats are <b>not searchable</b> in history.</li>
    <li>Expect several questions distinguishing the two.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>You want a one-off private brainstorm that leaves no trace and ignores your usual style settings. What do you use? <span class="check">Decide.</span></li>
  <li>You want Copilot to always format answers as bullet lists for you. Which feature? <span class="check">Decide.</span></li>
  <li>You cannot find a chat from last week. Why might it be missing? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li><b>Temporary Chat.</b></li>
  <li><b>Copilot Memory</b> (Personalization).</li>
  <li>It may have been a <b>Temporary Chat</b> — those are not saved to history.</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Which feature persists your preferences across chats?</li>
  <li>Are Temporary Chats saved to history?</li>
  <li>Where do you enable Memory?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Copilot Memory.</b></li>
  <li><b>No.</b></li>
  <li><b>Settings &gt; Personalization.</b></li>
</ol>
</details>
`,
  },
  {
    id: '2.3', domain: 2, title: 'Create and manage Microsoft 365 Copilot agents', ready: true,
    intro: 'Know the <b>Agent Store</b> vs building a <b>new agent</b>, the six configuration parts, the numeric limits, and the difference between the <b>Researcher</b> and <b>Analyst</b> pre-built agents.',
    html: `
<h2>Notes</h2>

<h3>Get an agent: store vs build</h3>
<ul>
  <li><b>Agent Store</b> — curated marketplace of prebuilt, enterprise-validated agents (Microsoft + partners); deploy quickly.</li>
  <li><b>Agent Builder</b> — build a <b>new</b> agent from the Configure tab, or from a <b>template</b>.</li>
</ul>

<h3>The six configuration parts of a custom agent</h3>
<ol>
  <li><b>Name</b></li>
  <li><b>Description</b></li>
  <li><b>Icon</b> (can be AI-generated)</li>
  <li><b>Instructions</b> — purpose, behavior, tone, structure, error handling (<b>most fundamental</b>)</li>
  <li><b>Knowledge Sources</b> — docs, websites, SharePoint sites/folders (<b>max 20 per agent</b>)</li>
  <li><b>Suggested / Starter Prompts</b> — pre-filled bubbles (<b>up to 8</b>)</li>
</ol>
<p><b>Add-on capabilities</b> (not standalone agents): <b>Code Interpreter</b> (Python for calcs/analysis/charts) and <b>Image Generation</b>. <b>Share</b> agents with the team (e.g. via SharePoint).</p>

<h3>Pre-built agents: Researcher vs Analyst</h3>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Researcher</th><th>Analyst</th></tr></thead>
  <tbody>
    <tr><td>Job</td><td><b>Gather &amp; synthesize</b> info from org + web</td><td><b>Analyze structured data</b> (Excel/DB/cloud)</td></tr>
    <tr><td>Output</td><td>Cited reports; asks clarifying questions; multi-step</td><td>Charts, tables, pivots, dashboards (uses Python)</td></tr>
  </tbody>
</table></div>
<p><b>Shared limit: 25 combined queries per month</b> across Researcher + Analyst; both need a Copilot license.</p>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Instructions</b> are the most fundamental config part.</li>
    <li><b>Max 20</b> knowledge sources; <b>up to 8</b> starter prompts; <b>25</b> combined monthly Researcher+Analyst queries.</li>
    <li><b>Researcher = gather/synthesize; Analyst = analyze structured data &amp; visualize.</b></li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>You need a cited market-research report drawing on org docs and the web. Which pre-built agent? <span class="check">Decide.</span></li>
  <li>You need pivot tables and revenue charts from three spreadsheets. Which agent? <span class="check">Decide.</span></li>
  <li>You want an agent to answer only from your team's 25 policy PDFs — but it will not let you add all of them. Why? <span class="check">Decide.</span></li>
  <li>Which single config part most shapes how an agent behaves and responds? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li><b>Researcher.</b></li>
  <li><b>Analyst.</b></li>
  <li>Knowledge sources are capped at <b>20 per agent</b>.</li>
  <li><b>Instructions.</b></li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Where do you get a prebuilt, enterprise-validated agent?</li>
  <li>What is the max number of knowledge sources per agent?</li>
  <li>Researcher or Analyst for visualizing spreadsheet data?</li>
  <li>What is the combined monthly query limit for Researcher + Analyst?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Agent Store.</b></li>
  <li><b>20.</b></li>
  <li><b>Analyst.</b></li>
  <li><b>25.</b></li>
</ol>
</details>
`,
  },
  {
    id: '3.1', domain: 3, title: 'Draft business documents and communications', ready: true,
    intro: 'Know what Copilot can and — just as important — <b>cannot</b> do in each app, the <b>content vs properties</b> rule, and the canonical cross-app workflows for moving data and insights between apps.',
    html: `
<h2>Notes</h2>

<h3>Content vs properties</h3>
<p>Copilot handles document <b>content</b> well; it struggles with <b>properties / metadata</b> (layout settings, margins, orientation, style-master properties).</p>

<h3>Per-app capabilities &amp; the "cannot" gotchas</h3>
<div class="table-wrap"><table>
  <thead><tr><th>App</th><th>Can</th><th>Cannot</th></tr></thead>
  <tbody>
    <tr><td><b>Word</b></td><td>Draft from scratch or a referenced file, rewrite (magic pen), keep writing, Q&amp;A, tables, formatting</td><td>Change margins, ToC settings, or orientation</td></tr>
    <tr><td><b>PowerPoint</b></td><td>Create from prompt or Word file, Designer restyle, AI images, summarize, speaker notes</td><td>Advanced animations, in-slide videos, style-master properties</td></tr>
    <tr><td><b>Outlook</b></td><td>Draft/summarize threads, coaching, tone/length, agendas, schedule meetings</td><td>Schedule emails to send later</td></tr>
    <tr><td><b>Excel</b></td><td><b>Chat mode</b>: insights/trends. <b>App Skill mode</b>: formula columns, charts, PivotTables</td><td>—</td></tr>
  </tbody>
</table></div>
<p><b>Draft from an existing doc:</b> reference a file (up to <b>10 items</b> in Word) to generate new content. <b>Summaries:</b> shorten, change tone, adjust reading level across apps.</p>

<h3>Move data &amp; insights between apps</h3>
<ul>
  <li>Canonical chain: <b>Word (draft report) → PowerPoint (deck from Word) → Outlook (status email from deck)</b>.</li>
  <li>Excel analysis → generate a PowerPoint or email directly; Analyst reports → PDF/PowerPoint/executive email.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Content = yes, properties/metadata = no.</b></li>
    <li>Word cannot change margins/ToC/orientation; Outlook cannot schedule-send; PowerPoint cannot do advanced animations.</li>
    <li>Reference <b>up to 10 items</b> in Word.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>A user asks Copilot in Word to switch the document to landscape. Will it? <span class="check">Decide.</span></li>
  <li>You want a slide deck built from an existing Word report. Which app + source? <span class="check">Decide.</span></li>
  <li>A user asks Outlook Copilot to send an email tomorrow at 8am. Can it? <span class="check">Decide.</span></li>
  <li>You need pivot tables and a chart from a sales workbook. Which Excel mode? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li>No — orientation is a <b>property</b>; Copilot handles content, not orientation.</li>
  <li><b>PowerPoint</b>, create from the <b>Word file</b>.</li>
  <li>No — Outlook Copilot <b>cannot schedule emails</b> to send later.</li>
  <li><b>App Skill mode.</b></li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>What is the content-vs-properties rule?</li>
  <li>Name one thing Word Copilot cannot do.</li>
  <li>How many items can a Word prompt reference?</li>
  <li>Which Excel mode creates formula columns and charts?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>Copilot handles <b>content</b>, not <b>properties/metadata</b>.</li>
  <li>Change margins / ToC / orientation.</li>
  <li><b>Up to 10.</b></li>
  <li><b>App Skill mode.</b></li>
</ol>
</details>
`,
  },
  {
    id: '3.2', domain: 3, title: 'Manage meetings and collaboration', ready: true,
    intro: 'Teams meeting recap has a hard requirement — <b>transcription and recording must be ON before the meeting starts</b>. And you must be able to choose between <b>Copilot Pages</b> (real-time) and <b>Copilot Notebooks</b> (async).',
    html: `
<h2>Notes</h2>

<h3>Copilot in Teams meetings</h3>
<ul>
  <li><b>Before:</b> Outlook summarizes threads, builds agendas, blocks focus time.</li>
  <li><b>During:</b> real-time summaries, speaker attribution, action items, late-joiner catch-up.</li>
  <li><b>After:</b> auto summary from transcript + chat with <b>citations</b>; export to Word/Excel; draft follow-ups; assign action items. Access via meeting chat → <b>Recap</b> tab → <b>Copilot</b>.</li>
  <li><b>Requirement (tested):</b> transcription <b>and</b> recording must be <b>ON</b>, enabled in meeting properties <b>before the meeting starts</b>. Without transcription, Copilot is limited to <b>meeting chat only</b>.</li>
</ul>

<h3>Pages vs Notebooks</h3>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Copilot Pages</th><th>Copilot Notebooks</th></tr></thead>
  <tbody>
    <tr><td>Collaboration</td><td><b>Real-time / synchronous</b></td><td><b>Asynchronous</b></td></tr>
    <tr><td>Best for</td><td>Quick creation, brainstorming, co-editing</td><td>Structured, multi-step, context-rich projects</td></tr>
    <tr><td>Built on</td><td>Microsoft Loop</td><td>Workspace of files/chats/notes + Instructions</td></tr>
    <tr><td>Convert to Word?</td><td><b>Yes</b> (one-click)</td><td><b>No</b></td></tr>
    <tr><td>Requirements</td><td>Available broadly</td><td>Copilot license + SharePoint/OneDrive; <b>not</b> personal accounts</td></tr>
  </tbody>
</table></div>
<p><b>Deciding factor = the collaboration model:</b> real-time → <b>Pages</b>; async/complex → <b>Notebooks</b>. <b>Copilot Memory</b> personalizes responses across these experiences.</p>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Teams recap needs <b>recording + transcription ON before</b> the meeting; else chat-only.</li>
    <li><b>Pages convert to Word; Notebooks do not.</b></li>
    <li>Pages = real-time; Notebooks = async and license-gated.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>A manager wants a full Copilot recap but forgot to turn on transcription. What can Copilot use? <span class="check">Decide.</span></li>
  <li>Two people want to co-write a brief together right now and turn it into a Word doc. Pages or Notebooks? <span class="check">Decide.</span></li>
  <li>A team needs a structured workspace to compare three strategies over a week. Pages or Notebooks? <span class="check">Decide.</span></li>
  <li>Where do you open the meeting summary afterward? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li>Only the <b>meeting chat</b> — no transcript means no full recap.</li>
  <li><b>Pages</b> — real-time and converts to Word.</li>
  <li><b>Notebooks</b> — asynchronous, structured, multi-step.</li>
  <li>Meeting chat → <b>Recap</b> tab → <b>Copilot</b>.</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>What two things must be ON before a meeting for a full recap?</li>
  <li>Which converts to Word — Pages or Notebooks?</li>
  <li>Which is asynchronous?</li>
  <li>Without transcription, what is Copilot limited to?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Recording and transcription.</b></li>
  <li><b>Pages.</b></li>
  <li><b>Notebooks.</b></li>
  <li><b>Meeting chat only.</b></li>
</ol>
</details>
`,
  },
];

// References — Microsoft Learn (per sub-skill): the official training module/product docs used to
// ground each guide. Rendered by learn-app.js under "References — Microsoft Learn".
const MASTERY_REFS = {
  '1.1': {
    module: { title: 'Microsoft 365 Copilot overview', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview' },
    units: [
      { title: 'Data, Privacy, and Security for Microsoft 365 Copilot', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy' },
      { title: 'How Copilot uses your organizational data (grounding)', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy#how-does-microsoft-365-copilot-use-your-proprietary-organizational-data' },
      { title: 'Introduction to agents — Copilot, Chat, and agents', url: 'https://learn.microsoft.com/en-us/agents/design-guidelines/intro-to-agents' },
      { title: 'Copilot features across Microsoft 365 apps', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview#copilot-features-in-microsoft-365-apps' },
    ],
  },
  '1.2': {
    module: { title: 'Responsible AI & enterprise data protection', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection' },
    units: [
      { title: 'Application card: Microsoft 365 Copilot — best practices', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-application-card#best-practices-for-deploying-and-adopting-microsoft-365-copilot' },
      { title: 'Fabrication in AI models (human review)', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/azure-openai-human-review#fabrication-in-ai-models' },
      { title: 'How Copilot protects organizational data (sensitivity labels)', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy#how-does-microsoft-365-copilot-protect-organizational-data' },
    ],
  },
  '2.1': {
    module: { title: 'Write effective prompts to achieve optimal results', url: 'https://learn.microsoft.com/en-us/training/modules/write-effective-prompts-do-more-prompting/' },
    units: [
      { title: 'Write an effective prompt', url: 'https://learn.microsoft.com/en-us/training/modules/write-effective-prompts-do-more-prompting/2-write-effective-prompt' },
      { title: 'Review prompting best practices', url: 'https://learn.microsoft.com/en-us/training/modules/write-effective-prompts-do-more-prompting/3-review-prompting-best-practices' },
      { title: 'Understand Prompt Gallery in Copilot', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-prompt-gallery' },
      { title: 'Scheduled prompts', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/scheduled-prompts' },
    ],
  },
  '2.2': {
    module: { title: 'Manage Copilot personalization and memory', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-personalization-memory' },
    units: [
      { title: 'Manage Copilot memory retention', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-personalization-memory#manage-copilot-memory-retention' },
      { title: 'Data stored about user interactions (delete history)', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy#data-stored-about-user-interactions-with-microsoft-365-copilot' },
      { title: 'Microsoft 365 Copilot release notes (conversations)', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes' },
    ],
  },
  '2.3': {
    module: { title: 'Build agents by using Agent Builder', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-build-agents' },
    units: [
      { title: 'Set up Agent Store in Microsoft 365 Copilot', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-agent-store' },
      { title: 'Build from a template', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-build-agents#build-from-a-template' },
      { title: 'Configure tab — instructions, knowledge, capabilities, starter prompts', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-build-agents#use-the-configure-tab-to-create-your-agent-manually' },
    ],
  },
  '3.1': {
    module: { title: 'Create and draft content with Microsoft 365 Copilot', url: 'https://learn.microsoft.com/en-us/training/modules/create-draft-content-with-microsoft-copilot-microsoft-365/' },
    units: [
      { title: 'Draft content with Copilot in Word', url: 'https://learn.microsoft.com/en-us/training/modules/create-draft-content-with-microsoft-copilot-microsoft-365/2-draft-content-microsoft-copilot-word' },
      { title: 'Draft emails, replies & agendas in Outlook', url: 'https://learn.microsoft.com/en-us/training/modules/create-draft-content-with-microsoft-copilot-microsoft-365/4-draft-emails-replies-meeting-agendas-microsoft-copilot-outlook' },
      { title: 'Summarize and simplify information with Copilot', url: 'https://learn.microsoft.com/en-us/training/modules/summarize-simplify-information-with-microsoft-copilot-microsoft-365/' },
    ],
  },
  '3.2': {
    module: { title: 'Microsoft 365 Copilot — meetings & collaboration', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview#copilot-features-in-microsoft-365-apps' },
    units: [
      { title: 'Intelligent meeting recap (release notes)', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes' },
      { title: 'Manage Copilot personalization and memory', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-personalization-memory' },
    ],
  },
};
