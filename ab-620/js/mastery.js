/*
 * AB-620 mastery guides — notes + hands-on lab + self-check per study-guide sub-skill.
 * Rendered by learn.html / learn-app.js. Content is original study material.
 */
const MASTERY_DOMAINS = [
  { n: 1, title: 'Plan and configure agent solutions', weight: '30–35%', color: 'blue' },
  { n: 2, title: 'Integrate and extend agents', weight: '40–45%', color: 'emerald' },
  { n: 3, title: 'Test and manage agents', weight: '20–25%', color: 'amber' },
];

const MASTERY = [
  {
    id: '1.1', domain: 1, title: 'Plan an agent solution', ready: true,
    intro: 'Planning is a <strong>design</strong> skill: given a business scenario, you choose the right identity model, channels, governance guardrails, and reuse strategy <em>before</em> you build. The exam tests these decisions — so the lab is a guided decision exercise in your real environment plus a worksheet.',
    html: `
<h2>Notes</h2>

<h3>Identity &amp; authentication strategy</h3>
<p>Set at <b>Settings → Security → Authentication</b>. Three options — pick by audience and what the agent needs to reach.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Option</th><th>Use when</th><th>Channels</th><th>Variables</th><th>Key constraints</th></tr></thead>
  <tbody>
    <tr><td><b>No authentication</b></td><td>Public info only; anonymous website FAQ</td><td>Any</td><td>none</td><td>Anyone with the link can chat; <b>can't use tools with user credentials</b>; blocked if a DLP policy requires auth</td></tr>
    <tr><td><b>Authenticate with Microsoft</b></td><td>Internal, Teams/M365-first; zero setup</td><td><b>Teams + M365 Copilot only</b></td><td><code>User.Id</code>, <code>User.DisplayName</code></td><td>Auto Entra ID; no re-prompt in Teams; <b>no <code>User.AccessToken</code> / <code>User.IsLoggedIn</code></b>; "require sign-in" forced on</td></tr>
    <tr><td><b>Authenticate manually</b></td><td>Need auth on non-Teams channels, or a token to call APIs as the user</td><td>Any</td><td><code>User.Id</code>, <code>User.DisplayName</code>, <code>User.AccessToken</code>, <code>User.IsLoggedIn</code></td><td>Providers: <b>Entra ID V2</b> (federated creds / certificates / client secrets) or <b>Generic OAuth2</b> (Google, Facebook…)</td></tr>
  </tbody>
</table></div>
<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Auth changes take effect <b>only after you publish</b>.</li>
    <li>Need a <b>token to call an API as the signed-in user</b> → you must use <b>Authenticate manually</b> (only it exposes <code>User.AccessToken</code>).</li>
    <li><b>Control who can chat</b>: works with <em>Authenticate with Microsoft</em> (via agent <b>sharing</b>) and <em>Authenticate manually + Entra ID</em> (turn on <b>Require users to sign in</b>). <em>No auth</em> and <em>Generic OAuth2</em> can't restrict which org users chat.</li>
  </ul>
</div>

<h3>Channels &amp; deployment</h3>
<ul>
  <li><b>Publish once first</b>, then add channels. Publishing pushes the latest content to <b>all</b> connected channels.</li>
  <li>Channels: <b>Teams + M365 Copilot</b>, <b>SharePoint</b>, <b>WhatsApp</b>, <b>Demo Website</b>, <b>Custom Website</b>, <b>Mobile app</b>, <b>Facebook</b>, and <b>Azure Bot Service</b> channels (Slack, Telegram, Twilio, Line, Kik, GroupMe, Direct Line Speech, Email).</li>
  <li><b>Internal</b> → Teams / M365 / SharePoint + <em>Authenticate with Microsoft</em>. <b>External</b> → Custom website / Facebook / WhatsApp + <em>No auth</em> or <em>Generic OAuth2</em>, with stricter governance.</li>
  <li>Channel UX differs: adaptive cards render on <b>web</b>; Teams caps a question node at <b>6</b> suggested actions; the <b>demo website is test-only</b>, not production.</li>
</ul>

<h3>Enterprise-system integration (plan the surface)</h3>
<p>Decide up front how the agent reaches systems — the <em>how</em> is built in Domain 2, but you plan it here:</p>
<ul>
  <li><b>Knowledge sources</b> (ground answers): SharePoint, websites, Dataverse, Azure AI Search → grounding/RAG.</li>
  <li><b>Tools/actions</b> (take action): connectors, custom connectors, REST/HTTP, MCP tools, computer use.</li>
  <li><b>Other agents</b>: Foundry agent, Fabric data agent, existing agents (multi-agent / A2A).</li>
</ul>

<h3>Responsible AI, security &amp; governance</h3>
<ul>
  <li><b>Data policies (DLP)</b> in the Power Platform admin center govern, per environment: <b>authentication</b>, <b>knowledge sources</b>, <b>actions/connectors/skills</b>, <b>HTTP requests</b>, <b>channel publication</b>, <b>Application Insights</b>, and <b>triggers</b>.</li>
  <li><b>Environments &amp; environment routing</b> give makers a safe build space; admins can <b>disable publishing</b> of generative-AI agents tenant-wide.</li>
  <li><b>Audit &amp; monitor</b>: maker audit logs in <b>Microsoft Purview</b>; alerts via <b>Microsoft Sentinel</b>; <b>Agent 365</b> as a central control plane (agents as Entra identities, Conditional Access).</li>
  <li><b>Data protection</b>: <b>customer-managed keys (CMK)</b>, <b>Customer Lockbox</b>, <b>sensitivity labels</b> from SharePoint knowledge, data-residency controls.</li>
  <li><b>Maker safety</b>: automatic <b>security scan</b> + <b>real-time risk assessment</b> warn before publishing when defaults are weakened.</li>
</ul>

<h3>Reusable components</h3>
<p>Plan for reuse from day one: package <b>topics, flows, connection references, environment variables, and custom connectors</b> in a <b>solution</b> so the agent promotes cleanly dev → test → prod (built out in <b>3.2 ALM</b>).</p>

<h3>Internal vs external — quick decision</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Dimension</th><th>Internal</th><th>External</th></tr></thead>
  <tbody>
    <tr><td>Identity</td><td>Authenticate with Microsoft (Entra)</td><td>No auth or Generic OAuth2</td></tr>
    <tr><td>Channels</td><td>Teams, M365 Copilot, SharePoint</td><td>Custom website, Facebook, WhatsApp</td></tr>
    <tr><td>Access control</td><td>Agent sharing</td><td>Public / provider sign-in</td></tr>
    <tr><td>Governance</td><td>Standard DLP</td><td>Stricter DLP, data-movement + residency care</td></tr>
  </tbody>
</table></div>

<h2>Hands-on lab — plan an internal HR helpdesk agent</h2>
<div class="scenario"><b>Scenario:</b> an internal "HR Helpdesk" agent for employees in Teams that answers from an HR SharePoint site and later looks up the signed-in user's leave balance via an API.</div>
<p class="note-line">Do this in your licensed Copilot Studio env (<code>copilotstudio.microsoft.com</code>), in a <b>dev</b> environment — you're exploring settings, not shipping. Don't save auth changes you don't intend to keep.</p>
<ol class="steps">
  <li>Confirm environment. Top-right picker → select your <b>dev</b> environment (not Default/prod). <span class="check">Checkpoint: correct env shown.</span></li>
  <li>Create the agent. New agent → name it "HR Helpdesk (lab)" → skip knowledge → Create.</li>
  <li>Inspect identity options. Settings → <b>Security → Authentication</b>. Read all three; note the variables each promises. For our scenario (Teams + call an API <em>as the user</em>), choose <b>Authenticate manually + Entra ID V2</b> — we need <code>User.AccessToken</code>. <span class="check">Checkpoint: you can explain why "Authenticate with Microsoft" is insufficient here.</span></li>
  <li>Look at <b>Require users to sign in</b> and how it relates to the chosen option. Don't change production agents. <span class="check">Checkpoint: you know when this toggle is available vs forced.</span></li>
  <li>Explore channels. Top bar → <b>Channels</b>. Identify the one for our audience (<b>Teams + M365 Copilot</b>); note the <b>Demo Website</b> is test-only. <span class="check">Checkpoint: internal vs external channel picked with a reason.</span></li>
  <li>Peek at governance. <b>Power Platform admin center → Environments → your env → Policies / Data policies</b>. See connectors classed Business/Non-business. (View-only.) <span class="check">Checkpoint: you can name 3 things a data policy governs.</span></li>
  <li>Fill the worksheet below for the HR scenario.</li>
</ol>

<h2>Design worksheet</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Decision</th><th>Your answer</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Identity model</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Which channel(s)</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Restrict to employees</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Knowledge source(s)</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Tool + auth implication</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Governance guardrails</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>What goes in the solution</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answer for the scenario</summary>
<p>Authenticate manually + Entra ID V2 → gives <code>User.AccessToken</code> for the leave API; publish to Teams + M365 Copilot; restrict via Require sign-in + sharing; ground on the HR SharePoint site; leave-balance REST tool called with user credentials; DLP business-only connectors + Purview audit + SharePoint sensitivity labels; package topics/flows/connection refs/env vars in one solution.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>You need the agent to call an API <b>as the signed-in user</b>. Which auth option, and which variable proves it?</li>
  <li>True/false: <em>Authenticate with Microsoft</em> lets you publish to a custom website.</li>
  <li>Name three things a Power Platform <b>data policy</b> can govern for an agent.</li>
  <li>Which is production-safe to share with customers — the <b>demo website</b> or a <b>custom website</b> channel?</li>
  <li>You changed the auth option but users still hit the old behavior. What did you forget?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Authenticate manually</b> — exposes <code>User.AccessToken</code>.</li>
  <li><b>False</b> — it's Teams + M365 Copilot only.</li>
  <li>Any of: authentication, knowledge sources, actions/connectors/skills, HTTP requests, channel publication, Application Insights, triggers.</li>
  <li><b>Custom website</b> (demo website is test-only).</li>
  <li><b>Publish</b> the agent — auth changes only apply after publishing.</li>
</ol>
</details>
`,
  },
  {
    id: '1.2', domain: 1, title: 'Create and monitor agent flows', ready: true,
    intro: 'Agent flows are the <b>deterministic</b> automation an agent calls to <em>do work</em> — same input, same output. Where a topic <em>talks</em>, a flow <em>acts</em>: connectors, approvals (human-in-the-loop), loops, and error handling, with run history to monitor. Know the trigger/action model, input/output parameters, and how a flow becomes a tool.',
    html: `
<h2>Notes</h2>

<h3>Flow vs topic vs generative orchestration</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Thing</th><th>Role</th></tr></thead>
  <tbody>
    <tr><td><b>Agent flow</b></td><td><b>Deterministic</b> automation — rule-based, same input → same output</td></tr>
    <tr><td><b>Topic</b></td><td>The <b>conversation</b> (nodes, questions) — see 1.3</td></tr>
    <tr><td><b>Generative orchestration</b></td><td>The agent <b>picks</b> the right topics/tools/knowledge from their descriptions</td></tr>
  </tbody>
</table></div>

<h3>Triggers + actions</h3>
<ul>
  <li>A flow = a <b>trigger</b> + at least one <b>action</b>. Triggers: <b>instant/manual</b>, <b>scheduled</b>, <b>event</b>, or <b>"When an agent calls the flow"</b> — the last makes the flow addable as a <b>tool</b> in an agent.</li>
  <li>Action types: <b>AI capabilities</b> (run a prompt, call an agent, generate a reply), <b>Human-in-the-loop</b> (approvals, request info), <b>Built-in</b> (loops, branches, data ops, date/time, child flows), <b>Connectors</b> (M365, third-party, custom).</li>
</ul>

<h3>Parameters, error handling, monitoring</h3>
<ul>
  <li><b>Input/output parameters</b>: pass values into the flow and return results; a matching agent <b>variable</b> feeds a flow parameter, and action outputs create new variables.</li>
  <li><b>Error handling</b>: use conditions/branches and run-after settings in the designer to catch failures gracefully.</li>
  <li><b>Monitor</b>: run history, status, and performance insights live in Copilot Studio's unified interface. Flows live in <b>solutions</b> (drafts, versioning, export/import) for ALM.</li>
  <li><b>Capacity</b>: every action consumes Copilot Studio capacity — from a topic = <b>Classic answer</b> + actions; via generative orchestration = <b>Autonomous action</b> + actions. <b>Test runs are free.</b></li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Agent flow = <b>deterministic</b>; a topic <em>talks</em>, a flow <em>acts</em>.</li>
    <li><b>Human-in-the-loop</b> = an approval / request-info action inside a flow.</li>
    <li>The <b>"When an agent calls the flow"</b> trigger lets you add the flow as a <b>tool</b>.</li>
    <li>Every action <b>consumes capacity</b> (test runs don't). Converting a Power Automate flow → agent flow is <b>one-way</b>.</li>
  </ul>
</div>

<h2>Hands-on lab — a leave-request flow with approval</h2>
<div class="scenario"><b>Scenario:</b> a flow the agent calls to submit a leave request — it takes employee + days, gets manager <b>approval</b>, and posts a Teams message.</div>
<p class="note-line">Copilot Studio → <b>Workflows → New agent flow</b>, in your dev environment.</p>
<ol class="steps">
  <li>Set the trigger to <b>When an agent calls the flow</b>; add <b>input parameters</b> (employee, days). <span class="check">Checkpoint: flow can be called as a tool.</span></li>
  <li>Add a <b>Human-in-the-loop approval</b> action to the manager. <span class="check">Checkpoint: approval pauses for a human.</span></li>
  <li>Add a <b>Condition</b> on the approval outcome; on approve, add a <b>connector</b> action (post to Teams / create a record). <span class="check">Checkpoint: branch on outcome.</span></li>
  <li>Handle failure (run-after / an else branch) and define <b>output parameters</b> (status). <span class="check">Checkpoint: errors handled + result returned.</span></li>
  <li>In the agent, add the flow as a <b>tool</b> and call it from a topic, passing variables. <span class="check">Checkpoint: topic → flow with inputs.</span></li>
  <li>Run it, then check <b>run history</b> and <b>capacity usage</b> (Power Platform admin center → Licensing → Copilot Studio). <span class="check">Checkpoint: you can monitor runs + spend.</span></li>
</ol>

<h2>Match need → action type (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Action / concept</th></tr></thead>
  <tbody>
    <tr><td>Manager must approve before proceeding</td><td>&nbsp;</td></tr>
    <tr><td>Post a message to a Teams channel</td><td>&nbsp;</td></tr>
    <tr><td>Repeat an action for each item in a list</td><td>&nbsp;</td></tr>
    <tr><td>Let the agent invoke the flow as a tool</td><td>&nbsp;</td></tr>
    <tr><td>Return the request status to the agent</td><td>&nbsp;</td></tr>
    <tr><td>See why a run failed</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Approval → <b>Human-in-the-loop</b> action · Teams message → <b>connector</b> action · repeat → <b>loop</b> (built-in) · invoke as tool → <b>"When an agent calls the flow"</b> trigger · return status → <b>output parameter</b> · why it failed → <b>run history / monitoring</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Agent flow vs topic — which is deterministic, and which handles conversation?</li>
  <li>Which trigger lets a flow be used as a tool by the agent?</li>
  <li>How does an agent get a value <b>into</b> a flow and a result <b>out</b>?</li>
  <li>Where do you monitor flow runs and capacity usage?</li>
  <li>You converted a Power Automate flow to an agent flow — can you convert it back?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>The <b>agent flow</b> is deterministic; the <b>topic</b> handles conversation.</li>
  <li><b>When an agent calls the flow</b>.</li>
  <li><b>Input parameters</b> (fed by variables) and <b>output parameters</b> (become new variables).</li>
  <li>Copilot Studio run history + the <b>Power Platform admin center</b> (Licensing → Copilot Studio).</li>
  <li><b>No</b> — conversion is one-way (billing changes).</li>
</ol>
</details>
`,
  },
  {
    id: '1.3', domain: 1, title: 'Configure topics', ready: true,
    intro: 'Topics are the conversational core of Copilot Studio — and by far the biggest slice of the question bank. Master the <b>authoring canvas</b>: node types, <b>variables</b> and scope, <b>generative answers</b>, calling <b>tools/HTTP</b>, adaptive cards, and how <b>generative vs classic orchestration</b> picks a topic.',
    html: `
<h2>Notes</h2>

<h3>How a topic gets selected</h3>
<ul>
  <li><b>Generative orchestration</b>: the agent chooses the best topic/tool/knowledge from each item's <b>description</b> — write good descriptions.</li>
  <li><b>Classic orchestration</b>: each topic has <b>trigger phrases</b> (aim for <b>5–10</b>); NLU matches user input to the closest topic — no exact match needed.</li>
</ul>

<h3>System vs custom topics</h3>
<ul>
  <li><b>System topics</b> (Greeting, Escalate, End of Conversation, Start over…): you <b>can't create or delete</b> them, but you <b>can disable/edit</b> them. Redirecting to some (End of Conversation, Goodbye, Escalate…) <b>ends the conversation</b>.</li>
  <li><b>Custom topics</b> = everything you build. ⚠ <b>Avoid periods (.) in topic names</b> — it breaks solution export.</li>
</ul>

<h3>Node types (the authoring canvas)</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Node</th><th>Does</th></tr></thead>
  <tbody>
    <tr><td><b>Message</b></td><td>Send text (markdown formatting)</td></tr>
    <tr><td><b>Question</b></td><td>Ask + capture input into a variable via an <b>entity</b> (prebuilt/custom) — slot filling</td></tr>
    <tr><td><b>Adaptive Card</b></td><td>Interactive card with buttons/inputs</td></tr>
    <tr><td><b>Condition</b></td><td>Branch on a variable / Power Fx</td></tr>
    <tr><td><b>Variable management</b></td><td>Set / Parse / Clear variables</td></tr>
    <tr><td><b>Topic management</b></td><td>Redirect, transfer, end topic/conversation</td></tr>
    <tr><td><b>Tool</b></td><td>Call an <b>agent flow</b>, connector, or other tool</td></tr>
    <tr><td><b>Advanced</b></td><td><b>Generative answers</b>, <b>HTTP request</b>, send events</td></tr>
  </tbody>
</table></div>

<h3>Variables &amp; scope</h3>
<ul>
  <li><b>Topic scope</b> (default) vs <b>Global</b> (agent-wide, prefix <code>Global.</code>). Convert topic → global is <b>one-way</b>. There are also <b>system</b> variables.</li>
  <li>Pass between topics on a <b>Redirect</b>: mark a variable <b>Receive values from other topics</b> (input) and/or <b>Return values to original topics</b> (output). Some entity types (Date/time, Duration, Multiple-choice, custom) <b>can't</b> be passed.</li>
  <li><b>Set value</b> node (literal or Power Fx), <b>Parse value</b> node (JSON string → Record). Topic <b>input/output parameters</b> pass info on redirect; generative orchestration can <b>auto-fill</b> topic inputs (slot filling).</li>
</ul>

<h3>Reaching data &amp; AI from a topic</h3>
<ul>
  <li><b>Generative answers</b> node: synthesize a grounded reply from <b>knowledge sources</b> at runtime (RAG) — great as a fallback.</li>
  <li><b>HTTP request</b> node / <b>Send HTTP request</b>: call a REST API; parse the response.</li>
  <li><b>Tool</b> node: call an <b>agent flow</b> or connector action.</li>
  <li><b>Custom prompts</b>: reusable authored AI calls (defined inputs/outputs) used inside a topic.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Generative orchestration uses descriptions</b>; <b>classic uses trigger phrases</b> (5–10).</li>
    <li><b>System topics</b>: can't create/delete, only disable/edit.</li>
    <li><b>Generative answers</b> node = grounded RAG reply · <b>HTTP request</b> node = call an API · <b>Tool</b> node = call a flow/connector.</li>
    <li>Variable scope: <b>topic</b> vs <b>global</b>; topic→global is one-way; some entity types can't pass between topics.</li>
    <li><b>No periods in topic names</b> (breaks export).</li>
  </ul>
</div>

<h2>Hands-on lab — an "Order status" topic</h2>
<div class="scenario"><b>Scenario:</b> capture an order number, call an API, show the result in an adaptive card, and fall back to generative answers for open questions.</div>
<ol class="steps">
  <li>Add a topic <b>From blank</b>; give it 5–10 <b>trigger phrases</b> (and a clear <b>description</b> for generative orchestration). <span class="check">Checkpoint: topic can be selected both ways.</span></li>
  <li>Add a <b>Question</b> node to capture the order number with a prebuilt entity; rename its variable. <span class="check">Checkpoint: input captured into a named variable.</span></li>
  <li>Add an <b>HTTP request</b> (or <b>Tool</b>) node passing the variable; <b>Parse value</b> the JSON response. <span class="check">Checkpoint: API result parsed to a Record.</span></li>
  <li>Show the status in an <b>Adaptive Card</b>; format a <b>Message</b> with markdown. <span class="check">Checkpoint: rich response.</span></li>
  <li>Add a <b>Generative answers</b> node grounded on a knowledge source as a fallback. <span class="check">Checkpoint: open questions still answered.</span></li>
  <li><b>Redirect</b> to another topic, passing the order variable; note topic vs global scope. <span class="check">Checkpoint: variable reused, no re-ask.</span></li>
  <li>Test in the <b>test panel</b>. <span class="check">Checkpoint: end-to-end path works.</span></li>
</ol>

<h2>Match need → node (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Node / concept</th></tr></thead>
  <tbody>
    <tr><td>Answer open questions from a SharePoint site</td><td>&nbsp;</td></tr>
    <tr><td>Call a REST API and use the JSON</td><td>&nbsp;</td></tr>
    <tr><td>Capture a date from the user</td><td>&nbsp;</td></tr>
    <tr><td>Show clickable options / input form</td><td>&nbsp;</td></tr>
    <tr><td>Reuse a value across the whole agent</td><td>&nbsp;</td></tr>
    <tr><td>Let generative orchestration find this topic</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Open questions → <b>Generative answers</b> node · REST API → <b>HTTP request</b> node (+ Parse value) · capture date → <b>Question</b> node with a prebuilt entity · options/form → <b>Adaptive Card</b> · agent-wide value → <b>global variable</b> · findable → a good <b>topic description</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Generative vs classic orchestration — what does each use to pick a topic?</li>
  <li>Can you delete a system topic?</li>
  <li>Which node grounds an answer on knowledge sources at runtime?</li>
  <li>Topic variable vs global variable — and can you convert global back to topic?</li>
  <li>What must you avoid in a topic's name, and why?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>Generative uses the <b>description</b>; classic uses <b>trigger phrases</b> (5–10).</li>
  <li><b>No</b> — you can disable or edit it, but not create or delete.</li>
  <li>The <b>Generative answers</b> node.</li>
  <li>Topic = local scope; global = agent-wide (<code>Global.</code>). Converting topic→global is <b>one-way</b> (can't go back).</li>
  <li>A <b>period (.)</b> — it prevents solution export.</li>
</ol>
</details>
`,
  },
  {
    id: '2.1', domain: 2, title: 'Connect to enterprise knowledge sources', ready: true,
    intro: 'Knowledge <b>grounds</b> the agent — it feeds <b>generative answers</b> (RAG) so replies come from <em>your</em> data, not from the model itself. Know the supported sources, that they use the permissions of the <b>signed-in user</b>, and which sources live only inside a generative-answers node.',
    html: `
<h2>Notes</h2>

<h3>Where knowledge plugs in</h3>
<ul>
  <li>Add at the <b>agent level</b> (Knowledge page) → flows into the <b>Conversational boosting</b> system topic's <b>generative answers</b> node, or add a <b>generative answers node</b> in a specific topic.</li>
  <li>Knowledge = <b>grounding</b> (retrieve + cite). Tools = <b>action</b> (see 2.2). Don't confuse them.</li>
</ul>

<h3>Supported sources</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Source</th><th>Notes</th><th>Auth</th></tr></thead>
  <tbody>
    <tr><td><b>SharePoint</b></td><td>Graph search over site URLs</td><td><b>Agent user's Entra ID</b> (security-trimmed)</td></tr>
    <tr><td><b>Dataverse</b></td><td>RAG over tables</td><td>Agent user's Entra ID</td></tr>
    <tr><td><b>Enterprise data via Copilot connectors</b></td><td>Indexed by <b>Microsoft Search</b></td><td>Agent user's Entra ID</td></tr>
    <tr><td><b>Public website</b></td><td>Bing, restricted to your listed URLs</td><td>None</td></tr>
    <tr><td><b>Documents</b></td><td>Files uploaded to Dataverse</td><td>None</td></tr>
    <tr><td><b>Azure AI Search / Azure OpenAI / Custom data</b></td><td>Only via a generative-answers node's <b>Classic data</b> option</td><td>Configured connection</td></tr>
  </tbody>
</table></div>
<p><b>Agent-user authentication</b> means the agent only surfaces content the <em>asking user</em> can access — critical for enterprise security.</p>

<h3>Grounding behavior &amp; settings (Generative AI page)</h3>
<ul>
  <li><b>Allow ungrounded responses</b>: OFF blocks any answer that didn't use a knowledge source or tool (falls back). ON lets the model use general knowledge.</li>
  <li><b>Use information from the web / Web Search</b>: Bing grounding in parallel with your website sources (generative orchestration only).</li>
  <li><b>Tenant graph grounding with semantic search</b>: better SharePoint/connector retrieval — needs <b>M365 Copilot</b> in the tenant and <b>Authenticate with Microsoft</b>.</li>
  <li><b>Official sources</b>: mark a trusted source so the agent uses it without verification (classic orchestration only).</li>
  <li>Generative orchestration filters sources by <b>description</b> when there are >25; Azure AI Search / Azure OpenAI / Custom data are <b>only</b> usable inside a generative-answers node.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Knowledge <b>grounds</b> (RAG); connect it at the agent level or in a <b>generative answers</b> node.</li>
    <li>SharePoint / Dataverse / Copilot connectors use the <b>signed-in user's</b> permissions (security trimming).</li>
    <li><b>Azure AI Search / Azure OpenAI / Custom data</b> only work inside a generative-answers node (Classic data) — not agent-level generative.</li>
    <li><b>Allow ungrounded responses = OFF</b> blocks answers not backed by a source/tool.</li>
    <li><b>Copilot (graph) connectors</b> index enterprise content via Microsoft Search — knowledge, not an action.</li>
  </ul>
</div>

<h2>Hands-on lab — ground an HR agent</h2>
<div class="scenario"><b>Scenario:</b> ground answers on an HR SharePoint site + a policies website, with security trimming, and add Azure AI Search for a document index.</div>
<ol class="steps">
  <li>On the <b>Knowledge</b> page, add the HR <b>SharePoint</b> site and a <b>public website</b>. <span class="check">Checkpoint: sources feed generative answers.</span></li>
  <li>Set the agent to <b>Authenticate with Microsoft</b> and confirm answers are <b>security-trimmed</b> per user. <span class="check">Checkpoint: users see only what they can access.</span></li>
  <li>Add a <b>generative answers node</b> in a topic and wire <b>Azure AI Search</b> via <b>Classic data</b>. <span class="check">Checkpoint: Azure AI Search only works here.</span></li>
  <li>Toggle <b>Allow ungrounded responses</b> off; ask something off-source and watch it fall back. <span class="check">Checkpoint: only grounded answers returned.</span></li>
  <li>Mark the policy source as an <b>Official source</b> (classic) and observe the distinctive response. <span class="check">Checkpoint: trusted-source behavior.</span></li>
</ol>

<h2>Match need → source (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Source / setting</th></tr></thead>
  <tbody>
    <tr><td>Answer only from what each user can access</td><td>&nbsp;</td></tr>
    <tr><td>Ground on an Azure AI Search index</td><td>&nbsp;</td></tr>
    <tr><td>Never answer from the model's general knowledge</td><td>&nbsp;</td></tr>
    <tr><td>Index enterprise content across systems</td><td>&nbsp;</td></tr>
    <tr><td>Restrict web answers to your own websites</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Per-user → agent-user auth (SharePoint/Dataverse/connectors) · Azure AI Search → <b>generative answers node, Classic data</b> · never general → <b>Allow ungrounded responses OFF</b> · index across systems → <b>Copilot connectors</b> (Microsoft Search) · own websites → <b>public website</b> knowledge source (not open web search).</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Knowledge vs tools — which one grounds answers?</li>
  <li>Where must you add Azure AI Search as a source?</li>
  <li>What does "agent user authentication" guarantee for knowledge?</li>
  <li>What does turning off "Allow ungrounded responses" do?</li>
  <li>How does an agent ground on enterprise content indexed across systems?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Knowledge</b> (RAG grounding); tools take actions.</li>
  <li>Inside a <b>generative answers node</b> (Classic data option).</li>
  <li>The agent only surfaces content the <b>signed-in user</b> is allowed to see.</li>
  <li>Blocks any response that didn't use a knowledge source or tool (fallback triggers).</li>
  <li>Via <b>Copilot (graph) connectors</b> indexed by Microsoft Search.</li>
</ol>
</details>
`,
  },
  {
    id: '2.2', domain: 2, title: 'Add tools to agents', ready: true,
    intro: 'Tools let an agent <b>take action</b> — call an API, run a connector, operate a UI, or reach an MCP server. Where knowledge <em>grounds</em>, a tool <em>acts</em>. Generative orchestration picks the right tool from its <b>description</b>, so descriptions matter.',
    html: `
<h2>Notes</h2>

<h3>Tool types</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Tool</th><th>What it does</th><th>Use when</th></tr></thead>
  <tbody>
    <tr><td><b>Connector action</b></td><td>Prebuilt Power Platform connector operation</td><td>Standard SaaS action (Outlook, SharePoint, SQL…)</td></tr>
    <tr><td><b>Custom connector</b></td><td>Wrap your own <b>REST API</b> as a connector</td><td>Reuse a private/internal API as a tool</td></tr>
    <tr><td><b>REST API / HTTP</b></td><td>Direct call to an endpoint</td><td>One-off API call, no connector needed</td></tr>
    <tr><td><b>Agent flow</b></td><td>Deterministic automation (1.2)</td><td>Multi-step logic, approvals, orchestration</td></tr>
    <tr><td><b>Prompt</b></td><td>Authored AI call (AI Builder / Foundry model)</td><td>Reusable generative step with defined I/O</td></tr>
    <tr><td><b>MCP tools</b></td><td>Tools/resources from an <b>MCP server</b></td><td>Reuse a Model Context Protocol server's capabilities</td></tr>
    <tr><td><b>Computer use</b></td><td>Agent operates a <b>UI/browser</b> to complete a task</td><td>No API exists — automate the app screen</td></tr>
  </tbody>
</table></div>

<h3>MCP (Model Context Protocol)</h3>
<ul>
  <li>Connect to an <b>MCP server</b> and its <b>tools + resources</b> become available automatically — the server supplies name, description, inputs, outputs.</li>
  <li>Changes on the server <b>dynamically sync</b> (new tools appear, removed ones disappear). One server can expose many tools.</li>
  <li><b>Requires generative orchestration.</b> You are responsible for tools you access from a non-Microsoft server.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Tool = <b>act</b>; knowledge = <b>ground</b>. Generative orchestration selects tools by <b>description</b> and fills inputs via <b>slot filling</b>.</li>
    <li><b>MCP requires generative orchestration</b>; its tools auto-sync from the server.</li>
    <li><b>Custom connector</b> wraps a REST API for reuse; <b>REST/HTTP</b> node is a direct call.</li>
    <li><b>Computer use</b> = drive a UI when there is no API.</li>
  </ul>
</div>

<h2>Hands-on lab — give the agent tools</h2>
<div class="scenario"><b>Scenario:</b> add a connector action, wrap a REST API as a custom connector, and connect an MCP server.</div>
<ol class="steps">
  <li>Turn on <b>generative orchestration</b> for the agent. <span class="check">Checkpoint: prerequisite for tool selection + MCP.</span></li>
  <li>Add a <b>connector action</b> (e.g. send an email) as a tool; write a clear <b>description</b>. <span class="check">Checkpoint: agent can choose it.</span></li>
  <li>Create a <b>custom connector</b> for an internal REST API and add it as a tool. <span class="check">Checkpoint: private API reused.</span></li>
  <li>Run the <b>MCP onboarding wizard</b> to connect an MCP server; confirm its tools appear and auto-sync. <span class="check">Checkpoint: MCP tools available.</span></li>
  <li>Test: ask something that requires the tool and watch the agent select it. <span class="check">Checkpoint: right tool chosen by description.</span></li>
</ol>

<h2>Match need → tool (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Tool</th></tr></thead>
  <tbody>
    <tr><td>Reuse tools published by an MCP server</td><td>&nbsp;</td></tr>
    <tr><td>Call a private internal REST API repeatedly</td><td>&nbsp;</td></tr>
    <tr><td>Automate an app that has no API</td><td>&nbsp;</td></tr>
    <tr><td>Multi-step logic with an approval</td><td>&nbsp;</td></tr>
    <tr><td>Standard action in a SaaS app</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>MCP server → <b>MCP tools</b> · private API reused → <b>custom connector</b> · no API → <b>computer use</b> · multi-step + approval → <b>agent flow</b> · SaaS action → <b>connector action</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Tool vs knowledge — which takes an action?</li>
  <li>What orchestration mode does MCP require?</li>
  <li>Custom connector vs REST/HTTP node — which is reusable?</li>
  <li>When would you use "computer use"?</li>
  <li>How does generative orchestration decide which tool to call?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>A <b>tool</b> (knowledge only grounds).</li>
  <li><b>Generative orchestration</b>.</li>
  <li><b>Custom connector</b> (wraps the API for reuse); an HTTP node is a one-off call.</li>
  <li>When there is <b>no API</b> — the agent drives the app UI.</li>
  <li>By each tool's <b>description</b> (then slot-fills inputs).</li>
</ol>
</details>
`,
  },
  {
    id: '2.3', domain: 2, title: 'Configure multi-agent collaboration', ready: true,
    intro: 'Big solutions split into specialized agents that collaborate. The exam wants the <b>child vs connected</b> distinction, <b>when to split</b>, and how to reach external agents (<b>A2A</b>, <b>Foundry</b>, <b>Fabric data agents</b>).',
    html: `
<h2>Notes</h2>

<h3>Ways to add other agents</h3>
<ul>
  <li><b>Child agents</b> — lightweight sub-agents <em>inside</em> your agent.</li>
  <li><b>Connected agents</b> — other Copilot Studio agents in the environment.</li>
  <li><b>External agents</b> — over the <b>A2A (agent-to-agent) protocol</b>, <b>Microsoft Foundry agents</b> (preview), <b>Fabric data agents</b> (preview), and <b>M365 Agents SDK</b> agents (preview).</li>
  <li>All added agents appear on the agent's <b>Agents</b> page.</li>
</ul>

<h3>Child vs connected — the key decision</h3>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Child agent</th><th>Connected agent</th></tr></thead>
  <tbody>
    <tr><td>Scope</td><td>Single use case / task, one small team</td><td>Separate teams, independent solution</td></tr>
    <tr><td>Settings / model</td><td>Shares the parent's</td><td>Its own (model, auth, channels)</td></tr>
    <tr><td>Publish / ALM</td><td>Not separately</td><td>Published + versioned independently</td></tr>
    <tr><td>Reuse</td><td>No</td><td>Reusable by multiple agents</td></tr>
  </tbody>
</table></div>
<p><b>When to split into connected agents</b>: the main agent has more than <b>~30–40 choices</b> (tools + topics + agents) and can no longer tell them apart by name/description, or teams need independent ALM/publish/settings. You can <b>mix</b> child and connected agents.</p>

<h3>Orchestration &amp; wiring</h3>
<ul>
  <li>Generative orchestration <b>delegates</b> to the right agent; you can also <b>redirect to an agent from a topic</b> (with inputs/outputs) or <b>reference an agent in instructions</b> with <code>/</code>.</li>
  <li>Trade-offs: extra orchestration <b>hops → latency</b>; larger testing/governance surface.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Child agent</b> = inside, simple, shares settings, not reusable. <b>Connected agent</b> = separate, own ALM/model, <b>reusable</b>.</li>
    <li>Split when the main agent exceeds <b>~30–40 tools/topics/agents</b> or descriptions blur.</li>
    <li><b>A2A protocol</b> connects external agents; <b>Foundry</b> and <b>Fabric data</b> agents are in preview.</li>
    <li><b>Fabric data agents</b>: can't be redirected to from a topic node, can't be referenced in instructions, and don't work when the main agent is deployed to <b>M365 Copilot</b>.</li>
  </ul>
</div>

<h2>Hands-on lab — split a growing agent</h2>
<div class="scenario"><b>Scenario:</b> an HR agent has grown too big. Break out a specialized Benefits agent and connect a Fabric data agent for analytics.</div>
<ol class="steps">
  <li>On the <b>Agents</b> page, add a <b>child agent</b> for a single task (e.g. "Book leave"). <span class="check">Checkpoint: grouped tools/instructions in a sub-agent.</span></li>
  <li>Create a separate <b>Benefits agent</b> and add it as a <b>connected agent</b>; note it has its own settings. <span class="check">Checkpoint: reusable, independently published.</span></li>
  <li><b>Redirect</b> to the child agent from a topic, passing inputs and reading outputs. <span class="check">Checkpoint: variables flow across agents.</span></li>
  <li>Connect a <b>Fabric data agent</b> (preview); note the redirect/instruction/M365-deploy limitations. <span class="check">Checkpoint: you know its constraints.</span></li>
  <li>Test and watch the <b>activity map</b> show which agent handled each turn. <span class="check">Checkpoint: delegation visible.</span></li>
</ol>

<h2>Match need → choice (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Choice</th></tr></thead>
  <tbody>
    <tr><td>One team, group tools for a single task</td><td>&nbsp;</td></tr>
    <tr><td>Reuse an agent across several agents</td><td>&nbsp;</td></tr>
    <tr><td>Main agent has 50 tools and picks the wrong one</td><td>&nbsp;</td></tr>
    <tr><td>Connect an external, non-Microsoft agent</td><td>&nbsp;</td></tr>
    <tr><td>Query Fabric data conversationally</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Single task, one team → <b>child agent</b> · reuse → <b>connected agent</b> · 50 tools/wrong pick → <b>split into connected agents</b> · external agent → <b>A2A protocol</b> · Fabric data → <b>Fabric data agent</b> (with its limits).</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Child vs connected agent — which is reusable and independently published?</li>
  <li>Roughly when should you split into multiple connected agents?</li>
  <li>Which protocol connects external agents?</li>
  <li>Name a limitation of Fabric data agents in a multi-agent setup.</li>
  <li>What is the main trade-off of multi-agent orchestration?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>The <b>connected agent</b>.</li>
  <li>When the main agent exceeds <b>~30–40 tools/topics/agents</b> or can't differentiate them.</li>
  <li><b>A2A (agent-to-agent) protocol</b>.</li>
  <li>Can't be redirected from a topic / referenced in instructions / used when deployed to M365 Copilot.</li>
  <li>Added <b>latency</b> (extra orchestration hops) and more testing/governance.</li>
</ol>
</details>
`,
  },
  {
    id: '2.4', domain: 2, title: 'Integrate agents with Azure', ready: true,
    intro: 'Reach beyond Copilot Studio into Azure: ground on <b>Azure AI Search</b>, use the <b>Foundry model catalog</b> for custom prompts, connect <b>Foundry agents</b>, and stream telemetry to <b>Application Insights</b>.',
    html: `
<h2>Notes</h2>

<h3>Azure AI Search &amp; Azure OpenAI (grounding)</h3>
<ul>
  <li>Add <b>Azure AI Search</b> or <b>Azure OpenAI</b> as a knowledge source <b>only inside a generative-answers node</b> (the <b>Classic data</b> option) — not at the agent level with generative orchestration.</li>
  <li>Use for enterprise document indexes already served by Azure AI Search.</li>
</ul>

<h3>Microsoft Foundry</h3>
<ul>
  <li><b>Foundry model catalog</b>: pick the model that powers a <b>custom prompt</b> (prompt tool) — choose a model suited to the task/cost.</li>
  <li><b>Foundry agents</b> (preview): connect as a <b>connected/external agent</b> (see 2.3) so your agent can delegate to it.</li>
  <li><b>Generative answers via Azure AI Search + Foundry</b>: combine a Foundry-hosted model with an Azure AI Search index for grounded responses.</li>
</ul>

<h3>Monitor with Application Insights</h3>
<ul>
  <li>Send agent <b>telemetry</b> (conversations, events, errors, performance) to <b>Azure Monitor Application Insights</b> for dashboards and alerting.</li>
  <li>This is <b>governed by data policies</b> (DLP) in the Power Platform admin center — Application Insights is one of the capabilities a policy can allow/block.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Azure AI Search / Azure OpenAI</b> → generative-answers node, <b>Classic data</b> (not agent-level generative).</li>
    <li><b>Foundry model catalog</b> → choose the model for a <b>custom prompt</b>.</li>
    <li><b>Application Insights</b> = agent telemetry/monitoring; enabling it is <b>DLP-governed</b>.</li>
    <li>A <b>Foundry agent</b> plugs in as a connected/external agent (multi-agent).</li>
  </ul>
</div>

<h2>Hands-on lab — wire Azure into the agent</h2>
<div class="scenario"><b>Scenario:</b> ground answers on an Azure AI Search index, build a custom prompt on a Foundry model, and pipe telemetry to Application Insights.</div>
<ol class="steps">
  <li>Add a <b>generative answers node</b>; under <b>Classic data</b> connect <b>Azure AI Search</b>. <span class="check">Checkpoint: Azure grounding works only here.</span></li>
  <li>Create a <b>custom prompt</b> (prompt tool) and pick a model from the <b>Foundry model catalog</b>. <span class="check">Checkpoint: model chosen per task.</span></li>
  <li>Connect a <b>Foundry agent</b> as a connected agent and delegate to it. <span class="check">Checkpoint: cross-platform delegation.</span></li>
  <li>Enable <b>Application Insights</b> telemetry (confirm the data policy allows it). <span class="check">Checkpoint: runs appear in Azure Monitor.</span></li>
</ol>

<h2>Match need → Azure piece (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Azure piece</th></tr></thead>
  <tbody>
    <tr><td>Ground on an existing Azure search index</td><td>&nbsp;</td></tr>
    <tr><td>Pick a specific model for a prompt</td><td>&nbsp;</td></tr>
    <tr><td>Dashboards + alerts on agent activity</td><td>&nbsp;</td></tr>
    <tr><td>Delegate to a Foundry-hosted agent</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Azure index → <b>Azure AI Search</b> (generative-answers node, Classic data) · pick a model → <b>Foundry model catalog</b> (custom prompt) · dashboards/alerts → <b>Application Insights</b> · delegate → <b>Foundry agent</b> (connected).</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Where can you use Azure AI Search as a knowledge source?</li>
  <li>What do you use the Foundry model catalog for?</li>
  <li>Which Azure service captures agent telemetry, and what governs it?</li>
  <li>How does a Foundry agent join your solution?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>Inside a <b>generative-answers node</b> (Classic data).</li>
  <li>To <b>choose the model</b> that powers a custom prompt.</li>
  <li><b>Application Insights</b>; it is governed by <b>data policies (DLP)</b>.</li>
  <li>As a <b>connected/external agent</b> (multi-agent).</li>
</ol>
</details>
`,
  },
  {
    id: '3.1', domain: 3, title: 'Evaluate agent performance', ready: true,
    intro: 'Before you ship, prove the agent works: build a <b>test set</b>, run an <b>evaluation</b>, and <b>review the results</b> against your metrics. Then keep watching the analytics after go-live.',
    html: `
<h2>Notes</h2>

<h3>Test as you build</h3>
<ul>
  <li>The <b>Test agent</b> panel checks conversation flow while authoring; the <b>activity map</b> shows which topic/tool/agent was chosen each turn. <b>Test runs don't consume capacity.</b></li>
</ul>

<h3>Systematic evaluation</h3>
<ul>
  <li><b>Test set</b>: a curated collection of representative inputs (and expected outcomes) to evaluate the agent consistently.</li>
  <li><b>Evaluation method</b>: run the test set and score responses — did it pick the right tool/topic, ground the answer, and produce the expected result?</li>
  <li><b>Review results</b>: inspect pass/fail, wrong tool selection, ungrounded answers, and latency; iterate on descriptions, instructions, knowledge, and tools.</li>
</ul>

<h3>Ongoing analytics</h3>
<ul>
  <li><b>Generated answer rate &amp; quality</b>, <b>knowledge source use</b>, <b>themes</b> (clustered user intents), <b>CSAT</b> (from the end-of-conversation survey), and engagement/session metrics.</li>
  <li>Use these to find gaps (unanswered themes, low-quality sources) and drive the next round of improvements.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Test set</b> = representative inputs (+ expected) used to evaluate systematically — more than ad-hoc test-panel chatting.</li>
    <li>Review for <b>right tool/topic selection</b>, <b>grounding/citation</b>, and correctness.</li>
    <li>Analytics: <b>answer rate &amp; quality</b>, <b>knowledge source use</b>, <b>themes</b>, <b>CSAT</b>.</li>
    <li>Testing does <b>not</b> consume Copilot Studio capacity.</li>
  </ul>
</div>

<h2>Hands-on lab — evaluate before shipping</h2>
<div class="scenario"><b>Scenario:</b> validate the HR agent with a test set and review where it fails.</div>
<ol class="steps">
  <li>Use the <b>Test agent</b> panel; open the <b>activity map</b> for a few questions. <span class="check">Checkpoint: you can see what the agent chose.</span></li>
  <li>Build a <b>test set</b> of ~15–20 representative questions with expected answers/tools. <span class="check">Checkpoint: reusable evaluation input.</span></li>
  <li>Run the evaluation and <b>review results</b>: note wrong tool picks and ungrounded answers. <span class="check">Checkpoint: failures categorized.</span></li>
  <li>Improve <b>descriptions/instructions/knowledge</b> and re-run. <span class="check">Checkpoint: score improves.</span></li>
  <li>After publishing, check <b>answer rate, source use, themes, CSAT</b> on the analytics pages. <span class="check">Checkpoint: live health tracked.</span></li>
</ol>

<h2>Symptom → check (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Question</th><th>Where to look</th></tr></thead>
  <tbody>
    <tr><td>Is the agent picking the right tool?</td><td>&nbsp;</td></tr>
    <tr><td>Are users satisfied?</td><td>&nbsp;</td></tr>
    <tr><td>Which knowledge sources actually get used?</td><td>&nbsp;</td></tr>
    <tr><td>Evaluate consistently across releases</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Right tool → <b>activity map</b> / evaluation results · satisfaction → <b>CSAT</b> · source usage → <b>knowledge source use</b> analytics · consistent evaluation → a <b>test set</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>What is a test set, and why is it better than ad-hoc testing?</li>
  <li>Name three things you review in an evaluation.</li>
  <li>Which metric captures user satisfaction?</li>
  <li>Does testing an agent consume capacity?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>A curated set of representative inputs (+ expected outcomes) to evaluate the agent <b>consistently and repeatably</b>.</li>
  <li>Any of: tool/topic selection, grounding/citation, correctness, latency.</li>
  <li><b>CSAT</b> (end-of-conversation survey).</li>
  <li><b>No</b> — test runs are free.</li>
</ol>
</details>
`,
  },
  {
    id: '3.2', domain: 3, title: 'Implement ALM for agents', ready: true,
    intro: 'Ship agents like real software: package them in <b>solutions</b>, keep config portable with <b>environment variables</b> and <b>connection references</b>, and promote dev → test → prod with <b>Power Platform Pipelines</b>. This is standard Power Platform ALM applied to agents.',
    html: `
<h2>Notes</h2>

<h3>Solutions (managed vs unmanaged)</h3>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Unmanaged</th><th>Managed</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td><b>Dev</b></td><td><b>Test / Prod</b></td></tr>
    <tr><td>Editable</td><td>Yes (author here)</td><td>No (locked)</td></tr>
    <tr><td>Removal</td><td>Components stay if deleted</td><td>Clean <b>uninstall</b></td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Add the agent to a solution</b> along with its dependencies: topics, <b>agent flows</b>, custom connectors, <b>connection references</b>, and <b>environment variables</b>.</li>
</ul>

<h3>Portable configuration</h3>
<ul>
  <li><b>Environment variables</b>: externalize values that differ per environment (URLs, IDs, keys via Key Vault) so you change config <b>without editing the agent</b>.</li>
  <li><b>Connection references</b>: abstract a connector's connection so it <b>rebinds</b> to the right credentials in each environment.</li>
</ul>

<h3>Promote across environments</h3>
<ul>
  <li><b>Power Platform Pipelines</b>: promote the solution <b>dev → test → prod</b> inside the product (the Power Platform equivalent of Fabric deployment pipelines).</li>
  <li>Alternative: <b>export</b> the managed solution from dev and <b>import</b> to test/prod manually.</li>
  <li>Agents also support <b>Git-backed source control</b> / deploy-from-Git for auditable history.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Author in an <b>unmanaged</b> solution (dev); deploy a <b>managed</b> solution to test/prod (locked, cleanly uninstallable).</li>
    <li><b>Environment variables</b> + <b>connection references</b> = config that travels across environments without editing the agent.</li>
    <li><b>Power Platform Pipelines</b> promote solutions dev → test → prod.</li>
    <li>Put the agent <b>and its dependencies</b> in <b>one solution</b>.</li>
  </ul>
</div>

<h2>Hands-on lab — promote an agent to prod</h2>
<div class="scenario"><b>Scenario:</b> move the HR agent from dev to test to prod with portable config.</div>
<ol class="steps">
  <li>Create an <b>unmanaged solution</b> in dev; <b>add the agent</b> and its flows/connectors. <span class="check">Checkpoint: agent + dependencies packaged.</span></li>
  <li>Replace a hard-coded URL/key with an <b>environment variable</b>. <span class="check">Checkpoint: config externalized.</span></li>
  <li>Add a <b>connection reference</b> for a connector so it rebinds per environment. <span class="check">Checkpoint: no baked-in credentials.</span></li>
  <li>Set up a <b>Power Platform Pipeline</b> and deploy dev → test → prod. <span class="check">Checkpoint: managed solution promoted.</span></li>
  <li>In prod, set the environment variable + connection values for that environment. <span class="check">Checkpoint: prod points at prod resources.</span></li>
</ol>

<h2>Match need → ALM piece (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>ALM piece</th></tr></thead>
  <tbody>
    <tr><td>Locked, cleanly removable deployment to prod</td><td>&nbsp;</td></tr>
    <tr><td>Different API URL per environment</td><td>&nbsp;</td></tr>
    <tr><td>Rebind a connector's credentials per env</td><td>&nbsp;</td></tr>
    <tr><td>Promote dev → test → prod in-product</td><td>&nbsp;</td></tr>
    <tr><td>Ship the agent with its flows &amp; connectors</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Locked/removable → <b>managed solution</b> · per-env URL → <b>environment variable</b> · rebind connector → <b>connection reference</b> · promote in-product → <b>Power Platform Pipelines</b> · ship together → one <b>solution</b> with dependencies.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Unmanaged vs managed solution — which do you author in, and which goes to prod?</li>
  <li>How do you keep an API URL portable across environments?</li>
  <li>What abstracts a connector's connection so it rebinds per environment?</li>
  <li>What promotes a solution dev → test → prod inside Power Platform?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>Author in <b>unmanaged</b> (dev); deploy <b>managed</b> to prod.</li>
  <li>An <b>environment variable</b>.</li>
  <li>A <b>connection reference</b>.</li>
  <li><b>Power Platform Pipelines</b>.</li>
</ol>
</details>
`,
  },
];
