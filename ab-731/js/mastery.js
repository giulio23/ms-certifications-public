/*
 * AB-731 mastery guides — notes + scenario decisions + self-check per study-guide sub-skill.
 * Grounded in the official Microsoft Learn course AB-731T00 "Drive AI transformation in your
 * organization" and Microsoft product docs. Original, publishable content (no third-party material).
 * Rendered by learn.html / learn-app.js.
 */
const MASTERY_DOMAINS = [
  { n: 1, title: 'Business value of generative AI', weight: '35–40%', color: 'blue' },
  { n: 2, title: "Microsoft's AI apps & services", weight: '35–40%', color: 'emerald' },
  { n: 3, title: 'Implementation & adoption strategy', weight: '20–25%', color: 'amber' },
];

const MASTERY = [
  {
    id: '1.1', domain: 1, title: 'Foundational concepts of generative AI', ready: true,
    intro: 'AB-731 is a <b>leadership</b> exam — you judge where AI fits, not how to code it. Start here: what generative AI is (vs other AI), pretrained vs fine-tuned models, what drives cost, the risks, and when gen AI actually creates business value.',
    html: `
<h2>Notes</h2>

<h3>Generative AI vs other AI</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Type</th><th>Does</th><th>Business fit</th></tr></thead>
  <tbody>
    <tr><td><b>Generative AI</b></td><td>Creates new content (text, images, code, summaries) from a prompt</td><td>Draft, summarize, assist, converse</td></tr>
    <tr><td><b>Classic ML</b></td><td>Predicts / classifies from patterns in data</td><td>Forecasting, fraud, churn, recommendations</td></tr>
    <tr><td><b>Computer vision</b></td><td>Interprets images/video</td><td>Quality inspection, OCR, safety</td></tr>
    <tr><td><b>NLP</b></td><td>Understands language (intent, sentiment, entities)</td><td>Routing, analytics, search</td></tr>
  </tbody>
</table></div>

<h3>Model choices &amp; cost</h3>
<ul>
  <li><b>Pretrained model + good prompts + grounding</b> handles most needs. <b>Fine-tuning</b> is a bigger investment (data, effort, cost) — only when you need consistent domain style/format that prompting + grounding can't deliver.</li>
  <li><b>Cost is driven by tokens</b> (input + output) — longer prompts and responses cost more. Weigh spend against <b>ROI</b> (time saved, revenue, quality).</li>
  <li>Large models are capable but pricier; smaller models can be cheaper/faster for narrow tasks.</li>
</ul>

<h3>Challenges leaders must weigh</h3>
<ul>
  <li><b>Fabrications / hallucinations</b> — plausible but wrong output; <b>grounding</b> is the main mitigation.</li>
  <li><b>Reliability &amp; consistency</b>, <b>bias</b> (from training data), <b>transparency</b>, privacy/security, and <b>cost</b>.</li>
</ul>

<h3>When gen AI creates business value</h3>
<ul>
  <li><b>Scalability</b> (do more without linear headcount), <b>automation</b> of repetitive knowledge work, and <b>augmentation</b> (help people work better/faster).</li>
  <li>Good fit: content generation, summarization, drafting, Q&amp;A over documents, coding assist. Poor fit: precise numeric prediction on structured data (that's classic ML).</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Gen AI = create; classic ML = predict.</b> Match the technique to the task.</li>
    <li>Prefer <b>pretrained + prompt + grounding</b>; <b>fine-tune</b> only when necessary.</li>
    <li>Cost scales with <b>tokens</b>; justify with <b>ROI</b>.</li>
    <li><b>Grounding</b> is the primary defense against fabrications.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>Finance wants to <b>predict</b> which invoices will be paid late from years of history. Gen AI or classic ML? <span class="check">Decide, then check.</span></li>
  <li>An agent gives confident but <b>wrong</b> answers about company policy. What is the first fix — fine-tune, or ground it on the policy documents? <span class="check">Decide.</span></li>
  <li>Costs are climbing on a summarization workload. Name two levers a leader can pull. <span class="check">Decide.</span></li>
  <li>Marketing wants on-brand product descriptions at scale with a very specific tone every time. Prompting isn't consistent enough — what's the next step? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li><b>Classic ML</b> — numeric prediction on structured history, not content generation.</li>
  <li><b>Ground</b> it on the policy documents (RAG) before considering fine-tuning — grounding fixes most accuracy issues at far lower cost.</li>
  <li>Shorten prompts/outputs (fewer <b>tokens</b>); use a smaller/cheaper model for the task; cap/limit usage — and re-check <b>ROI</b>.</li>
  <li>Consider <b>fine-tuning</b> for consistent brand style/format that prompting + examples can't reliably achieve.</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Create content vs predict a number — which AI type for each?</li>
  <li>What is the usual first remedy for hallucinated answers?</li>
  <li>What primarily drives generative AI cost?</li>
  <li>When is fine-tuning worth it over prompting + grounding?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>Create → <b>generative AI</b>; predict a number → <b>classic ML</b>.</li>
  <li><b>Grounding</b> (RAG) on trusted data.</li>
  <li><b>Tokens</b> (input + output).</li>
  <li>When you need consistent domain style/format that prompting + grounding can't deliver.</li>
</ol>
</details>
`,
  },
  {
    id: '1.2', domain: 1, title: 'Benefits & capabilities of generative AI', ready: true,
    intro: 'How to make gen AI <em>reliable</em> and valuable: prompt engineering, grounding data in trusted sources (RAG), data quality, security, and knowing when classic machine learning is the better tool.',
    html: `
<h2>Notes</h2>

<h3>Prompt engineering</h3>
<ul>
  <li>The prompt shapes the answer. Good techniques: <b>clear instructions</b>, <b>context</b>, <b>examples (few-shot)</b>, a <b>persona/role</b>, and specifying the desired <b>format</b>.</li>
  <li>Better prompts = better output at <b>no extra build cost</b> — the cheapest lever leaders can champion.</li>
</ul>

<h3>Grounding &amp; RAG</h3>
<ul>
  <li><b>Grounding</b> gives the model your trusted data <em>at answer time</em> so responses are accurate and <b>cite sources</b>.</li>
  <li><b>RAG (retrieval-augmented generation)</b> is the pattern: retrieve relevant enterprise data, then generate an answer from it — no retraining needed.</li>
  <li>Grounding is the main way to reduce <b>fabrications</b> and keep answers current.</li>
</ul>

<h3>Data quality matters</h3>
<ul>
  <li>Output quality depends on the <b>quality, type, and representativeness</b> of the data. Garbage in → garbage out; unrepresentative data → biased results.</li>
  <li>Leaders should invest in clean, well-governed data before scaling AI.</li>
</ul>

<h3>Secure &amp; responsible by design</h3>
<ul>
  <li>Respect access permissions (users see only what they're allowed to), protect sensitive data, and apply responsible-AI safeguards at the solution level.</li>
</ul>

<h3>When classic ML adds value (and the ML lifecycle)</h3>
<ul>
  <li>For prediction/classification on structured data, <b>classic ML</b> is often better than gen AI.</li>
  <li>ML lifecycle (leader's view): <b>define the problem → prepare data → train → evaluate → deploy → monitor</b> — an ongoing cycle, not one-and-done.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Prompt engineering</b> improves output for free; <b>grounding/RAG</b> makes it accurate on your data.</li>
    <li><b>RAG ≠ fine-tuning</b> — RAG supplies data at runtime; fine-tuning changes the model.</li>
    <li>Data <b>quality/representativeness</b> drives quality and bias.</li>
    <li>Use <b>classic ML</b> for prediction on structured data; know the ML lifecycle is continuous.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>An agent must answer from the company's internal handbook and cite it. What capability do you require? <span class="check">Decide.</span></li>
  <li>A model's answers are biased toward one region. What's the likely root cause a leader should probe? <span class="check">Decide.</span></li>
  <li>Two teams get very different results from the same tool. Cheapest first thing to standardize? <span class="check">Decide.</span></li>
  <li>The business wants a 90-day sales forecast. Gen AI or ML? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li><b>Grounding / RAG</b> on the handbook (with citations).</li>
  <li><b>Unrepresentative / biased training or grounding data</b> — fix the data.</li>
  <li><b>Prompt engineering</b> — shared, well-crafted prompts (free, immediate).</li>
  <li><b>Classic ML</b> — numeric prediction on structured data.</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Name three prompt-engineering techniques.</li>
  <li>What does RAG do, and how does it differ from fine-tuning?</li>
  <li>What most affects bias in AI output?</li>
  <li>Give the leader's-eye stages of the ML lifecycle.</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>Clear instructions, context, examples (few-shot), persona, desired format (any three).</li>
  <li>RAG retrieves trusted data and generates an answer from it <b>at runtime</b>; fine-tuning <b>retrains</b> the model on new data.</li>
  <li>The <b>quality and representativeness of the data</b>.</li>
  <li>Define → prepare data → train → evaluate → deploy → monitor (continuous).</li>
</ol>
</details>
`,
  },
  {
    id: '2.1', domain: 2, title: 'Microsoft 365 Copilot & Microsoft Copilot', ready: true,
    intro: 'The "buy &amp; adopt" side of Microsoft AI: ready-made Copilots that boost everyday productivity, grounded on your Microsoft Graph data — and Copilot Studio to extend them. Know what each Copilot is and when to map a business process to it.',
    html: `
<h2>Notes</h2>

<h3>The Copilot family</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Product</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><b>Microsoft 365 Copilot</b></td><td>AI inside Word, Excel, PowerPoint, Outlook, Teams — grounded on your <b>Microsoft Graph</b> (emails, files, chats, meetings). Licensed add-on.</td></tr>
    <tr><td><b>Microsoft Copilot (Chat)</b></td><td>Web/mobile chat assistant; a free tier plus enterprise data protection for signed-in org users.</td></tr>
    <tr><td><b>Copilot Studio</b></td><td>Low-code tool to <b>build and extend</b> custom agents and connect enterprise data/actions.</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Microsoft Graph</b> grounding is what makes M365 Copilot answers relevant to <em>your</em> organization and <b>security-trimmed</b> to each user.</li>
  <li>Specialized agents: <b>Researcher</b> (deep, multi-step research) vs <b>Analyst</b> (data analysis over your files). Match the agent to the job.</li>
</ul>

<h3>Build / buy / extend</h3>
<ul>
  <li><b>Buy</b> ready-made Copilot for broad productivity. <b>Extend</b> Copilot with agents/connectors (Copilot Studio, extensibility framework) for org-specific needs. <b>Build</b> custom on Azure AI when you need full control (see 2.2).</li>
  <li>Map each process/use case to the lightest option that meets it — usually buy/extend before build.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>M365 Copilot</b> = AI in the M365 apps, grounded on <b>Microsoft Graph</b>, security-trimmed per user (licensed).</li>
    <li><b>Copilot Studio</b> = build/extend agents (low-code).</li>
    <li><b>Researcher</b> (research) vs <b>Analyst</b> (data analysis) agents.</li>
    <li>Prefer <b>buy/extend</b> over <b>build</b> unless the need demands custom.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>Sales reps waste hours drafting follow-up emails and summarizing Teams meetings. Which Microsoft AI? <span class="check">Decide.</span></li>
  <li>HR wants a Q&amp;A agent over policy documents, integrated with a ticketing action. Buy, extend, or build? <span class="check">Decide.</span></li>
  <li>A leader needs a deep, cited market-research brief pulled together from many sources. Which agent? <span class="check">Decide.</span></li>
  <li>Why does M365 Copilot give each employee different, relevant answers? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li><b>Microsoft 365 Copilot</b> (in Outlook/Teams, grounded on Graph).</li>
  <li><b>Extend</b> with a custom agent in <b>Copilot Studio</b> (knowledge + an action).</li>
  <li>The <b>Researcher</b> agent.</li>
  <li>It's grounded on <b>Microsoft Graph</b> and <b>security-trimmed</b> to what each user can access.</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>What grounds Microsoft 365 Copilot, and why does that matter?</li>
  <li>What is Copilot Studio for?</li>
  <li>Researcher vs Analyst — which does data analysis?</li>
  <li>Default order of preference: build, buy, or extend?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Microsoft Graph</b> — makes answers org-relevant and security-trimmed per user.</li>
  <li>Building and <b>extending</b> custom agents (low-code).</li>
  <li><b>Analyst</b>.</li>
  <li><b>Buy/extend</b> first; <b>build</b> only when necessary.</li>
</ol>
</details>
`,
  },
  {
    id: '2.2', domain: 2, title: 'Foundry Tools (Azure AI)', ready: true,
    intro: 'The "build custom" side of Microsoft AI. When ready-made Copilots are not enough, leaders turn to Azure AI services and Microsoft Foundry to build tailored solutions. Know the main services and which one fits a scenario.',
    html: `
<h2>Notes</h2>

<h3>Azure AI services (match the service to the need)</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Service</th><th>Use it for</th></tr></thead>
  <tbody>
    <tr><td><b>Azure AI Vision</b></td><td>Image/video analysis, OCR, object detection</td></tr>
    <tr><td><b>Document Intelligence</b></td><td>Read invoices, receipts, forms → structured data</td></tr>
    <tr><td><b>Azure AI Language</b></td><td>Sentiment, entities, summarization, translation</td></tr>
    <tr><td><b>Azure AI Speech</b></td><td>Speech-to-text, text-to-speech, translation</td></tr>
    <tr><td><b>Azure AI Search</b></td><td>Enterprise search + the retrieval layer for <b>RAG</b> grounding</td></tr>
    <tr><td><b>Azure OpenAI / models</b></td><td>Generative language/vision models for custom apps</td></tr>
  </tbody>
</table></div>

<h3>Microsoft Foundry</h3>
<ul>
  <li>A platform to <b>build, evaluate, and deploy</b> custom AI solutions — the <b>model catalog</b> lets you pick and compare models and <b>match a model to a need</b> (capability vs cost).</li>
  <li>Benefits leaders care about: <b>scalability</b> (enterprise-grade, elastic) and <b>security</b> (your data in your Azure tenant, governance/compliance).</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Invoices/forms → <b>Document Intelligence</b> · images → <b>Vision</b> · enterprise search / RAG retrieval → <b>Azure AI Search</b> · custom generative → <b>Azure OpenAI</b> via <b>Foundry</b>.</li>
    <li><b>Foundry model catalog</b> = choose/compare models (match model to need).</li>
    <li>Azure AI = <b>build custom</b>; M365 Copilot = <b>buy ready-made</b> (2.1).</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>Thousands of scanned supplier invoices need turning into structured data. Which service? <span class="check">Decide.</span></li>
  <li>You need a smart search over millions of internal documents to power a grounded assistant. Which service? <span class="check">Decide.</span></li>
  <li>A call center wants live transcription and sentiment. Which two services? <span class="check">Decide.</span></li>
  <li>The team must choose between a large and a smaller model for a custom app. Where do they compare options? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li><b>Azure AI Document Intelligence</b>.</li>
  <li><b>Azure AI Search</b> (retrieval for RAG).</li>
  <li><b>Azure AI Speech</b> (transcription) + <b>Azure AI Language</b> (sentiment).</li>
  <li>The <b>Microsoft Foundry model catalog</b>.</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Which service extracts data from invoices and forms?</li>
  <li>Which service provides the retrieval layer for RAG?</li>
  <li>What is the Foundry model catalog used for?</li>
  <li>Azure AI vs M365 Copilot — which is "build custom"?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Document Intelligence</b>.</li>
  <li><b>Azure AI Search</b>.</li>
  <li>Choosing/comparing models — matching a model to a need.</li>
  <li><b>Azure AI (Foundry)</b>.</li>
</ol>
</details>
`,
  },
  {
    id: '3.1', domain: 3, title: 'Align with responsible AI policies', ready: true,
    intro: 'Responsible AI is a leadership mandate, not a checkbox. Know why it matters, how Microsoft governs it, and — the exam favorite — which of the six principles a given scenario maps to.',
    html: `
<h2>Notes</h2>

<h3>Why responsible AI</h3>
<ul>
  <li>Builds <b>trust</b>, manages <b>risk</b> (legal, reputational, ethical), and is required to scale AI safely. Leaders set the tone and the guardrails.</li>
</ul>

<h3>The six Microsoft responsible-AI principles</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Principle</th><th>Means</th></tr></thead>
  <tbody>
    <tr><td><b>Fairness</b></td><td>Treat all people equitably; avoid biased outcomes</td></tr>
    <tr><td><b>Reliability &amp; safety</b></td><td>Perform consistently and safely, even in unexpected conditions</td></tr>
    <tr><td><b>Privacy &amp; security</b></td><td>Protect data; respect privacy and consent</td></tr>
    <tr><td><b>Inclusiveness</b></td><td>Work for people of all abilities and backgrounds</td></tr>
    <tr><td><b>Transparency</b></td><td>People understand how the system works and its limits</td></tr>
    <tr><td><b>Accountability</b></td><td>People/organizations remain answerable for AI systems</td></tr>
  </tbody>
</table></div>
<p><b>Transparency</b> and <b>accountability</b> are the two <em>foundational</em> principles that underpin the other four.</p>

<h3>Governance in practice</h3>
<ul>
  <li>A <b>Responsible AI Standard</b> plus <b>governance</b> structures — often an <b>AI council</b> (cross-functional body) — turn principles into policies, reviews, and safeguards.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Memorize the six: <b>fairness, reliability &amp; safety, privacy &amp; security, inclusiveness, transparency, accountability</b>.</li>
    <li><b>Transparency</b> + <b>accountability</b> are foundational.</li>
    <li>Governance = <b>RAI Standard</b> + an <b>AI council</b>.</li>
    <li>Most exam items give a scenario → pick the <b>one principle</b> it violates/upholds.</li>
  </ul>
</div>

<h2>Scenario decisions — which principle?</h2>
<ol class="steps">
  <li>A hiring model favors one demographic over equally qualified others. <span class="check">Which principle?</span></li>
  <li>An AI medical triage tool must behave safely when it sees inputs it wasn't trained on. <span class="check">Which principle?</span></li>
  <li>Users can't tell why a loan was declined or that AI was involved. <span class="check">Which principle?</span></li>
  <li>A voice assistant doesn't work for people with speech differences. <span class="check">Which principle?</span></li>
  <li>No one is clearly responsible when the AI causes harm. <span class="check">Which principle?</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li><b>Fairness</b>.</li>
  <li><b>Reliability &amp; safety</b>.</li>
  <li><b>Transparency</b>.</li>
  <li><b>Inclusiveness</b>.</li>
  <li><b>Accountability</b>.</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>List the six responsible-AI principles.</li>
  <li>Which two are foundational?</li>
  <li>What cross-functional body helps govern responsible AI?</li>
  <li>"The system protects personal data and consent" — which principle?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>Fairness; reliability &amp; safety; privacy &amp; security; inclusiveness; transparency; accountability.</li>
  <li><b>Transparency</b> and <b>accountability</b>.</li>
  <li>An <b>AI council</b>.</li>
  <li><b>Privacy &amp; security</b>.</li>
</ol>
</details>
`,
  },
  {
    id: '3.2', domain: 3, title: 'Plan for AI adoption', ready: true,
    intro: 'Turning AI pilots into organization-wide value is a change-management job. Know the adoption team, the common barriers, the champions program, the impacts to plan for, and the licensing/subscription choices.',
    html: `
<h2>Notes</h2>

<h3>The adoption team &amp; roles</h3>
<ul>
  <li>Adoption is cross-functional: <b>executive sponsorship</b>, IT/security, business owners, and change managers. Assign clear <b>responsibilities</b> and empower <b>business users &amp; subject-matter experts</b> to use AI themselves.</li>
</ul>

<h3>Common barriers (and how leaders clear them)</h3>
<ul>
  <li><b>Skills/fear</b> → training + an <b>AI champions program</b> (enthusiasts who model use and coach peers).</li>
  <li><b>Trust/data concerns</b> → responsible AI, governance, clear policies.</li>
  <li><b>Unclear value</b> → tie initiatives to measurable business outcomes (ROI).</li>
  <li><b>Cost/complexity</b> → start with high-impact use cases; scale what works.</li>
</ul>

<h3>Impacts to plan for</h3>
<ul>
  <li><b>Data</b> (quality, governance, access), <b>security &amp; privacy</b>, and <b>cost</b> — plan these before scaling.</li>
</ul>

<h3>Licensing &amp; subscription choices</h3>
<ul>
  <li><b>Microsoft 365 Copilot</b> is a <b>per-user licensed</b> add-on; <b>Microsoft Copilot Chat</b> has a free/enterprise-protected tier — pick per audience and need.</li>
  <li><b>Azure AI</b> is <b>consumption-based</b> (pay for what you use) — right for custom/variable workloads.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Adoption is <b>change management</b>: sponsor, adoption team, clear roles, empower SMEs.</li>
    <li><b>AI champions program</b> is the go-to answer for driving usage and overcoming skills/fear barriers.</li>
    <li>Plan impacts to <b>data, security/privacy, cost</b>.</li>
    <li><b>M365 Copilot = per-user license</b>; <b>Azure AI = consumption-based</b>.</li>
  </ul>
</div>

<h2>Scenario decisions</h2>
<ol class="steps">
  <li>Copilot licenses were bought but usage is low and employees are hesitant. Best next move? <span class="check">Decide.</span></li>
  <li>A leader wants AI value fast without boiling the ocean. Sequencing strategy? <span class="check">Decide.</span></li>
  <li>Rolling out M365 Copilot to 500 knowledge workers — what licensing model? <span class="check">Decide.</span></li>
  <li>A custom, spiky Azure OpenAI workload — what cost model, and what to plan for? <span class="check">Decide.</span></li>
</ol>
<details class="answers"><summary>Model answers</summary>
<ol>
  <li>Launch an <b>AI champions program</b> + targeted training (change management), not more licenses.</li>
  <li>Start with a few <b>high-impact use cases</b>, prove ROI, then <b>scale</b> what works.</li>
  <li><b>Per-user Microsoft 365 Copilot licenses</b>.</li>
  <li><b>Consumption-based</b> Azure billing; plan for <b>data, security/privacy, and cost</b>.</li>
</ol>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>What's the standard remedy for low adoption / employee hesitancy?</li>
  <li>Name three impacts to plan for when scaling AI.</li>
  <li>M365 Copilot vs Azure AI — licensed per user or consumption-based?</li>
  <li>How should a leader sequence AI initiatives?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>An <b>AI champions program</b> + training (change management).</li>
  <li><b>Data, security/privacy, cost</b> (also skills/change).</li>
  <li>M365 Copilot = <b>per-user license</b>; Azure AI = <b>consumption-based</b>.</li>
  <li>Start with high-impact use cases, prove ROI, then scale.</li>
</ol>
</details>
`,
  },
];

// References to the official Microsoft Learn course (AB-731T00) modules + lessons per sub-skill.
const MASTERY_REFS = (() => {
  const B = 'https://learn.microsoft.com/en-us/training/modules/';
  const mk = (slug, title, units) => ({ module: { title, url: B + slug + '/' }, units: units.map(u => ({ title: u[1], url: B + slug + '/' + u[0] })) });
  return {
    '1.1': mk('understand-foundations-generative-ai-business-leaders', 'Understand the foundations of generative AI', [
      ['2-what-is-generative-ai', 'What is generative AI?'],
      ['3-explore-business-value-generative-ai-solutions', 'Explore the business value of generative AI solutions'],
      ['4-understand-generative-ai-models', 'Understand generative AI models'],
      ['5-understand-cost-drivers-generative-ai', 'Understand cost drivers in generative AI'],
      ['6-identify-challenges-opportunities-generative-ai', 'Identify challenges and opportunities in generative AI'],
    ]),
    '1.2': mk('build-effective-generative-ai-solutions-organization', 'Build effective generative AI solutions', [
      ['2-understand-prompt-engineering', 'Understand prompt engineering'],
      ['3-ground-ai-using-trusted-data', 'Ground AI using trusted data'],
      ['4-build-trustworthy-ai-data-security-considerations', 'Build trustworthy AI — data & security considerations'],
      ['5-understand-business-value-machine-learning', 'Understand the business value of machine learning'],
    ]),
    '2.1': mk('business-value-microsoft-copilot-solutions', 'Drive business value with Microsoft Copilot', [
      ['2-explore-copilot-solutions', 'Explore Copilot solutions'],
      ['3-explore-copilot-experiences', 'Explore Copilot experiences'],
      ['4-map-business-processes-to-copilot-solutions', 'Map business processes to Copilot solutions'],
      ['5-extend-copilot-organization', 'Extend and customize Copilot'],
      ['6-responsible-ai-copilot', 'Explore responsible AI in Copilot'],
      ['7-explore-copilot-licensing-options', 'Explore Copilot licensing'],
    ]),
    '2.2': mk('business-value-microsoft-azure-ai-solutions', 'Drive business value with Foundry Tools', [
      ['2-what-is-azure-ai', 'Why Microsoft Foundry matters'],
      ['3-business-scenarios-azure-ai', 'Connect business scenarios to Foundry solutions'],
      ['4-choose-ai-model-goals', 'Choose the right Foundry model for your goals'],
      ['5-understand-azure-ai-subscriptions', 'Understand Foundry subscription models'],
    ]),
    '3.1': mk('embrace-responsible-ai-principles-practices', 'Embrace responsible AI principles & practices', [
      ['2-prepare-implications-responsible-ai', 'Prepare for responsible AI'],
      ['3-identify-guiding-principles-responsible-ai', 'Identify guiding principles for responsible AI'],
      ['4-design-system-ai-governance', 'Design a system for AI governance'],
      ['5-apply-ai-governance', 'Apply systems for AI governance'],
      ['6-discuss-practices-responsible-ai-microsoft', 'Responsible AI at Microsoft'],
      ['7-put-responsible-ai-frameworks', 'Put responsible AI frameworks in action'],
    ]),
    '3.2': mk('scale-ai', 'Scale AI in your organization', [
      ['2-unlock-ai-value', 'Unlock AI value'],
      ['3-organize-ai-success', 'Organize for AI success'],
      ['4-empower-business-users-ai', 'Empower business users with AI'],
      ['5-empower-subject-matter-experts-ai', 'Empower subject matter experts with AI'],
    ]),
  };
})();
