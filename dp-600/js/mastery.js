/*
 * DP-600 mastery guides — notes + hands-on lab + self-check per study-guide sub-skill.
 * Rendered by learn.html / learn-app.js. Content is original study material.
 */
const MASTERY_DOMAINS = [
  { n: 1, title: 'Maintain a data analytics solution', weight: '25–30%', color: 'blue' },
  { n: 2, title: 'Prepare data', weight: '45–50%', color: 'emerald' },
  { n: 3, title: 'Implement & manage semantic models', weight: '25–30%', color: 'amber' },
];

const MASTERY = [
  {
    id: '1.1', domain: 1, title: 'Implement security and governance', ready: true,
    intro: 'Fabric security is <strong>layered</strong> — the exam rarely asks "how", it asks <em>"which control, at which layer?"</em>. The same idea (e.g. row-level security) shows up in the warehouse, the semantic model, and OneLake, each enforced differently. Nail <b>where each control lives</b> and you own this sub-skill.',
    html: `
<h2>Notes</h2>

<h3>Access layers: workspace roles vs item permissions</h3>
<p><b>Workspace roles</b> are coarse — they apply to <b>every item</b> in the workspace and are meant for the dev team. <b>Item permissions</b> are granular — share a single item and grant just what's needed, no workspace role required. Follow least privilege: Viewer + grant specific objects.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Workspace role</th><th>Can do</th></tr></thead>
  <tbody>
    <tr><td><b>Admin</b></td><td>Full control: manage access, delete, all item actions</td></tr>
    <tr><td><b>Member</b></td><td>Share items, most edit actions; can't manage the workspace itself</td></tr>
    <tr><td><b>Contributor</b></td><td>Create/edit items; no sharing of the workspace</td></tr>
    <tr><td><b>Viewer</b></td><td>Read/consume only; pair with granular grants for data access</td></tr>
  </tbody>
</table></div>

<h3>Granular data security — <span style="color:#be185d">where each applies</span> (exam favorite)</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Control</th><th>Enforced at</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><b>Object-level (OLS)</b></td><td>Warehouse / SQL analytics endpoint (T-SQL <code>GRANT</code>/<code>DENY</code>)</td><td>Allow/deny access to whole objects (tables, views, procs)</td></tr>
    <tr><td><b>Row-level (RLS)</b></td><td><b>Three places</b>: Warehouse (security policy + predicate fn) · Semantic model (DAX role) · OneLake (data access role)</td><td>Restrict which <b>rows</b> a user sees via a filter predicate</td></tr>
    <tr><td><b>Column-level (CLS)</b></td><td>Warehouse / SQL endpoint (<code>GRANT</code> on columns) · OneLake</td><td>Hide specific <b>columns</b> entirely</td></tr>
    <tr><td><b>Dynamic data masking (DDM)</b></td><td>Warehouse / SQL endpoint</td><td><b>Masks values</b> in query results; the data isn't changed and rows aren't hidden</td></tr>
    <tr><td><b>File / folder-level</b></td><td><b>OneLake data access roles</b></td><td>RBAC on lakehouse folders/tables; applies across <b>all Fabric engines</b></td></tr>
  </tbody>
</table></div>
<div class="callout callout-key"><b>Distinctions the exam tests</b>
  <ul>
    <li><b>RLS lives in three layers</b> — Warehouse (T-SQL), Semantic model (DAX role), and OneLake (data access role). Match the layer to where the query runs.</li>
    <li><b>DDM ≠ CLS.</b> CLS <em>removes</em> the column; DDM shows a <em>masked value</em>. DDM is obfuscation, not authorization — it can be inferred around, so pair it with real controls.</li>
    <li><b>OneLake security applies to every engine</b> (Spark, SQL endpoint, semantic model). To honour it on the SQL endpoint you must switch it to <b>User's identity access mode</b>.</li>
    <li><b>Watch <code>DefaultReader</code></b>: when you add a user to a OneLake data access role, remove them from DefaultReader or they keep full access.</li>
    <li>Workspace role = access to <b>all</b> items; item permission = <b>one</b> item.</li>
  </ul>
</div>

<h3>Sensitivity labels (Microsoft Purview Information Protection)</h3>
<ul>
  <li>Classify and protect items/data (e.g. <em>Confidential</em>); labels <b>persist on export</b> (to Excel, PBIX…) and can <b>enforce encryption</b>.</li>
  <li>Defined in <b>Microsoft Purview</b>, applied in Fabric; can <b>propagate downstream</b> to derived items.</li>
</ul>

<h3>Endorse items</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Level</th><th>Who can set it</th><th>Signals</th></tr></thead>
  <tbody>
    <tr><td><b>Promoted</b></td><td>Any user with <b>write/edit</b> permission on the item</td><td>"Recommended" by a colleague/team</td></tr>
    <tr><td><b>Certified</b></td><td>Only users <b>authorized by the Fabric admin</b></td><td>Official, trusted, reviewed source of truth</td></tr>
    <tr><td><b>Master data</b></td><td>Authorized users</td><td>Authoritative master/reference data</td></tr>
  </tbody>
</table></div>

<h3>Governance extras</h3>
<ul>
  <li><b>CMK</b> (customer-managed keys) encrypt OneLake data + warehouse metadata with your Azure Key Vault keys.</li>
  <li><b>Audit logs</b> via Microsoft Purview; <b>domains</b> organize items in a data-mesh; <b>lineage</b> traces dependencies.</li>
</ul>

<h2>Hands-on lab — secure a Sales warehouse + lakehouse</h2>
<div class="scenario"><b>Scenario:</b> Analysts may see only <b>their region's</b> rows, must not see the <b>Salary</b> column, and the lakehouse <b>Finance</b> folder is off-limits. Apply the right control at each layer.</div>
<p class="note-line">Use your Fabric workspace (a dev/sandbox capacity). Create a throwaway <code>Sales</code> table if you don't have one. Clean up policies afterward.</p>
<ol class="steps">
  <li>Open the workspace → <b>Manage access</b>. Review the four roles and who has them. <span class="check">Checkpoint: you can state what a Viewer can and can't do.</span></li>
  <li><b>Item permission:</b> share the warehouse to a test user as read-only (Viewer + <code>GRANT SELECT</code> on chosen objects) — <em>without</em> a workspace role. <span class="check">Checkpoint: granular access without workspace membership.</span></li>
  <li><b>Row-level security (warehouse):</b> create a predicate function filtering <code>Sales</code> by region, and a <code>SECURITY POLICY</code> that binds it. Test with <code>EXECUTE AS USER</code>. <span class="check">Checkpoint: filtered rows for a non-privileged user.</span></li>
  <li><b>CLS vs DDM:</b> <code>DENY SELECT ON Sales(Salary)</code> to the analyst (CLS — column disappears). Separately add <code>MASKED WITH</code> on an <code>Email</code> column (DDM — value masked, row still there). Compare the two results. <span class="check">Checkpoint: you can explain CLS-hides vs DDM-masks.</span></li>
  <li><b>OneLake data access role (lakehouse):</b> create a role granting the <b>Sales</b> folder only, excluding <b>Finance</b>; add the user and <b>remove them from DefaultReader</b>. Note it applies to Spark and the SQL endpoint (User's identity mode). <span class="check">Checkpoint: folder-level security across engines.</span></li>
  <li><b>Sensitivity label:</b> apply <b>Confidential</b> to the warehouse; export a table to Excel and confirm the label follows. <span class="check">Checkpoint: label persists on export.</span></li>
  <li><b>Endorse:</b> promote the semantic model; check who is allowed to <b>Certify</b> in your tenant. <span class="check">Checkpoint: Promoted (any editor) vs Certified (admin-authorized).</span></li>
</ol>

<h2>Map requirement → control (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Control</th><th>Layer</th></tr></thead>
  <tbody>
    <tr><td>Analysts see only their region</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Hide the Salary column entirely</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Show only last 4 digits of a card number</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Restrict a lakehouse Finance folder</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Mark the semantic model as the trusted source</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    <tr><td>Ensure the label follows data into Excel</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Region → <b>RLS</b> (warehouse security policy, or semantic-model DAX role if enforced there) · Salary column → <b>CLS</b> (DENY on the column) · Card last 4 → <b>DDM</b> · Finance folder → <b>OneLake data access role</b> · Trusted model → <b>Certified endorsement</b> · Label follows export → <b>Sensitivity label</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Name the <b>three</b> layers where row-level security can be enforced in Fabric.</li>
  <li>A user can still see the row but the value shows as <code>xxxx@xxxx.com</code>. CLS or DDM?</li>
  <li>You set OneLake folder security but a user still sees all data. What did you forget?</li>
  <li>Which endorsement level can <b>only</b> be applied by admin-authorized users?</li>
  <li>A Viewer needs to read one table in a warehouse but nothing else. How do you grant it?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>Warehouse/SQL endpoint (T-SQL security policy), <b>semantic model</b> (DAX role), and <b>OneLake</b> (data access role).</li>
  <li><b>DDM</b> — it masks the value; CLS would remove the column.</li>
  <li>Remove them from the <b>DefaultReader</b> role (and ensure the SQL endpoint uses User's identity mode).</li>
  <li><b>Certified</b>.</li>
  <li>Item permission (Viewer) + <b>GRANT SELECT</b> on that specific object via T-SQL — not a workspace role.</li>
</ol>
</details>
`,
  },
  {
    id: '1.2', domain: 1, title: 'Maintain the analytics development lifecycle', ready: true,
    intro: 'This is Fabric <strong>ALM</strong> — get your work under source control and move it safely dev → test → prod. The exam wants you to keep four things straight: <b>Git</b> (version), <b>deployment pipelines</b> (promote), the <b>XMLA endpoint</b> (programmatic model deploy/manage), and the <b>.pbip</b> file format that makes source control possible — plus impact analysis and reusable assets.',
    html: `
<h2>Notes</h2>

<h3>The four pieces — don't mix them up</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Tool</th><th>Job</th><th>Analogy</th></tr></thead>
  <tbody>
    <tr><td><b>Git integration</b></td><td>Version control — backup, branch, revert, collaborate</td><td>Continuous <b>integration</b> (source)</td></tr>
    <tr><td><b>Deployment pipelines</b></td><td>Promote content between stages in the service</td><td>Continuous <b>deployment</b> (release)</td></tr>
    <tr><td><b>XMLA endpoint</b></td><td>Programmatic <b>semantic-model</b> deploy/manage (SSMS, Tabular Editor, ALM Toolkit)</td><td>The model's API</td></tr>
    <tr><td><b>.pbip</b></td><td>Plain-text project files that make Git/CI possible</td><td>The source-friendly file format</td></tr>
  </tbody>
</table></div>

<h3>Git integration (version control)</h3>
<ul>
  <li>Integration is at the <b>workspace</b> level; providers: <b>Azure DevOps</b> and <b>GitHub</b> (cloud only). A workspace connects to a <b>branch</b>.</li>
  <li>Stores item <b>definitions</b> in source-code format; the workspace folder structure is preserved. Supported items include <b>Report, Semantic model, Notebook, Lakehouse, Warehouse, Pipeline, Dataflow gen2</b>, etc. Unsupported items are <b>ignored</b> — not synced, not deleted.</li>
  <li>Workflow: <b>Commit</b> (workspace → Git) and <b>Update</b> (Git → workspace); resolve conflicts. What you can do depends on permissions in <b>both</b> the workspace and the repo.</li>
</ul>

<h3>Power BI Desktop projects (.pbip)</h3>
<ul>
  <li>Save as a project → plain-text files in folders: <code>Name.Report/</code> (PBIR) + <code>Name.SemanticModel/</code> (TMDL) + a <code>.pbip</code> pointer + <code>.gitignore</code>.</li>
  <li>Human-readable, <b>source-control &amp; CI/CD ready</b>, editable by VS Code / Tabular Editor, programmable via <b>TOM</b>. Enable under <b>Preview features</b>.</li>
  <li><b>.pbix</b> = single binary (with data). <b>.pbip</b> = source files (metadata). Convert either way via <b>Save As</b>. Deploy a .pbip via Git, Fabric APIs, or Desktop publish.</li>
</ul>

<h3>Deployment pipelines (dev → test → prod)</h3>
<ul>
  <li><b>2–10 stages</b>, default <b>3</b> (Development, Test, Production). Deploy = <b>clone</b> content to the next stage; it <b>overwrites the paired item</b>.</li>
  <li><b>Pairing</b>: an item is linked to the same item in the adjacent stage (on workspace assignment or a clean deploy). <b>Unpaired items create a duplicate</b> even if name/type match. Paired items can have <b>different names</b>.</li>
  <li><b>Deployment rules</b> (e.g. data-source / parameter rules) make each stage point at the right data — so prod uses prod data automatically.</li>
</ul>

<h3>Impact analysis of downstream dependencies</h3>
<ul>
  <li>Before you change or republish a semantic model, run <b>Impact analysis</b> to see which downstream <b>reports/dashboards</b> are affected — and notify their owners.</li>
  <li>The <b>Lineage view</b> traces dependencies across items (source → model → report → app).</li>
</ul>

<h3>Deploy via the XMLA endpoint</h3>
<ul>
  <li>Available on <b>Premium / PPU / Fabric-capacity</b> workspaces. <b>Read-only</b> (query) by default; enable <b>Read-write</b> in <b>Capacity settings → Workloads → XMLA Endpoint</b> for management/deploy.</li>
  <li>Tools: <b>SSMS</b> (TMSL scripting), <b>Tabular Editor</b> (metadata), <b>ALM Toolkit</b> (schema compare + deploy across environments, keeps incremental-refresh partitions), <b>Visual Studio/SSDT</b> (deploy tabular projects), <b>DAX Studio</b>/<b>Excel</b> (query). Read-only = query; read-write = metadata/deploy.</li>
  <li>XMLA <b>write</b> on a Desktop-authored model needs <b>Enhanced metadata</b> and <b>blocks downloading it back as PBIX</b> — keep your original .pbix. Also enables <b>fine-grained refresh</b> (no 48/day limit).</li>
</ul>

<h3>Reusable assets</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Asset</th><th>Contains</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td><b>.pbit</b> (template)</td><td>Report + model + queries, <b>no data</b></td><td>Hand someone a ready-to-connect starting point</td></tr>
    <tr><td><b>.pbids</b> (data source)</td><td>Just the <b>connection</b> info</td><td>Jump-start Get Data against a known source</td></tr>
    <tr><td><b>Shared semantic model</b></td><td>Published model consumed <b>live</b></td><td>Single source of truth; consumers need <b>Build</b> permission (endorse/certify it)</td></tr>
  </tbody>
</table></div>
<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>.pbit = no data</b> (template) · <b>.pbix = with data</b> · <b>.pbip = source files</b>. A live connection to a <b>shared semantic model</b> needs <b>Build</b> permission.</li>
    <li><b>Git ≠ deployment pipelines.</b> Git versions the source; pipelines promote content dev→test→prod. They're complementary.</li>
    <li>Deployment: an <b>unpaired</b> item is <b>duplicated</b>, not overwritten. Use <b>deployment rules</b> to swap data sources per stage.</li>
    <li>XMLA is <b>read-only</b> until an admin enables <b>read-write</b> on the capacity; a write op needs <b>enhanced metadata</b> and stops PBIX download.</li>
    <li>Run <b>impact analysis</b> before republishing a model.</li>
  </ul>
</div>

<h2>Hands-on lab — put a report + model through the lifecycle</h2>
<div class="scenario"><b>Scenario:</b> take a Sales report + its semantic model, get them under source control, and promote dev → test → prod cleanly.</div>
<p class="note-line">You need Power BI Desktop, a Fabric workspace on capacity, and a Git repo (Azure DevOps or GitHub). Use a sandbox workspace.</p>
<ol class="steps">
  <li>In Desktop, enable <b>Preview features → Power BI Project (.pbip)</b>, then <b>Save As → .pbip</b>. Inspect the <code>.Report/</code> and <code>.SemanticModel/</code> folders and <code>.gitignore</code>. <span class="check">Checkpoint: you can point to where the model TMDL lives.</span></li>
  <li>In the workspace, <b>Workspace settings → Git integration</b>; connect to your branch and <b>Commit</b> the items. Look at the source-code format in the repo. <span class="check">Checkpoint: items appear as folders in Git.</span></li>
  <li>Change a measure, <b>Commit</b>; then in another workspace/branch, <b>Update</b> to pull it. <span class="check">Checkpoint: commit + update round-trip works.</span></li>
  <li>Create a <b>deployment pipeline</b>; assign the dev workspace to <b>Development</b>; <b>Deploy</b> to Test. Note items now show as <b>paired</b>. <span class="check">Checkpoint: paired items sit on one line.</span></li>
  <li>Add a <b>deployment rule</b> so Test/Prod use their own data source, then deploy to Prod. <span class="check">Checkpoint: prod points at prod data without editing the model.</span></li>
  <li>On the semantic model, open <b>Impact analysis / Lineage</b> to see downstream reports. <span class="check">Checkpoint: you can name what breaks if you delete a column.</span></li>
  <li>Connect to the model via <b>XMLA</b> in Tabular Editor or SSMS (workspace URL <code>powerbi://…</code>), read-only. Note read-write needs the capacity setting. <span class="check">Checkpoint: you connected and can browse the model metadata.</span></li>
</ol>

<h2>Pick the right tool (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Task</th><th>Tool / asset</th></tr></thead>
  <tbody>
    <tr><td>Version and branch your work</td><td>&nbsp;</td></tr>
    <tr><td>Promote content dev → test → prod</td><td>&nbsp;</td></tr>
    <tr><td>Make prod use prod data automatically</td><td>&nbsp;</td></tr>
    <tr><td>Script/deploy a model programmatically</td><td>&nbsp;</td></tr>
    <tr><td>Share a report template with no data</td><td>&nbsp;</td></tr>
    <tr><td>Let many reports reuse one model</td><td>&nbsp;</td></tr>
    <tr><td>See what breaks before republishing</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Version/branch → <b>Git integration</b> (with <b>.pbip</b>) · Promote → <b>deployment pipeline</b> · Prod data → <b>deployment rule</b> · Script/deploy model → <b>XMLA endpoint</b> (Tabular Editor / ALM Toolkit / SSMS) · Template no data → <b>.pbit</b> · One model many reports → <b>shared semantic model</b> (Build permission) · What breaks → <b>impact analysis</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>What's the difference between <b>.pbit</b>, <b>.pbix</b>, and <b>.pbip</b>?</li>
  <li>You deployed to Test but got a <b>duplicate</b> instead of an overwrite. Why?</li>
  <li>Tabular Editor connects but can't save metadata changes. What setting is off?</li>
  <li>A colleague wants to build a report on your model via live connection. What permission do they need?</li>
  <li>Git integration vs a deployment pipeline — one sentence each.</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>.pbit</b> = template, no data · <b>.pbix</b> = report + data (binary) · <b>.pbip</b> = plain-text source files (source-control friendly).</li>
  <li>The item wasn't <b>paired</b> — unpaired items are duplicated, not overwritten.</li>
  <li>XMLA endpoint is <b>read-only</b>; an admin must enable <b>read-write</b> on the capacity (and the model needs enhanced metadata).</li>
  <li><b>Build</b> permission on the shared semantic model.</li>
  <li>Git = version control of the source (branch/commit/revert); deployment pipeline = promote content between dev/test/prod stages in the service.</li>
</ol>
</details>
`,
  },
  {
    id: '2.1', domain: 2, title: 'Get data', ready: true,
    intro: 'Getting data into Fabric is two decisions: <b>which store</b> (lakehouse / warehouse / eventhouse / SQL DB) and <b>how to bring it in</b> — <em>reference it in place</em> with a shortcut, or <em>copy it</em> with a pipeline/dataflow/notebook. The exam leans hard on <b>choose-the-right-store</b> and <b>shortcut vs copy</b>. Everything lands in OneLake as open Delta either way.',
    html: `
<h2>Notes</h2>

<h3>Choose a data store (decision)</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Store</th><th>Best for</th><th>Data</th><th>Language</th></tr></thead>
  <tbody>
    <tr><td><b>Lakehouse</b></td><td>Data engineering &amp; ML, big data</td><td>Un/semi/structured (files + Delta tables)</td><td><b>Spark</b> (PySpark, Spark SQL), notebooks</td></tr>
    <tr><td><b>Warehouse</b></td><td>Enterprise DW, SQL BI, <b>multi-table ACID transactions</b></td><td>Structured</td><td><b>T-SQL</b> (full read/write DML)</td></tr>
    <tr><td><b>Eventhouse (KQL)</b></td><td>Streaming / telemetry, high-granularity interactive analytics</td><td>Event/time-series (JSON/text)</td><td><b>KQL</b>, SQL</td></tr>
    <tr><td><b>SQL database</b></td><td>Operational <b>OLTP</b>, high concurrency, FKs</td><td>Relational</td><td>T-SQL</td></tr>
    <tr><td><b>Cosmos DB</b></td><td>AI, NoSQL, vector search</td><td>Document/NoSQL</td><td>REST/SDKs</td></tr>
  </tbody>
</table></div>
<div class="callout callout-key"><b>How the exam frames the choice</b>
  <ul>
    <li><b>Skillset</b>: Spark team → lakehouse · T-SQL team → warehouse · KQL/real-time → eventhouse.</li>
    <li><b>Transactions</b>: need multi-table ACID DML → <b>warehouse</b> (or SQL DB for OLTP). The lakehouse SQL endpoint is <b>read-only</b> T-SQL.</li>
    <li><b>Data shape</b>: unstructured/files → lakehouse · structured/modeled → warehouse · streaming → eventhouse.</li>
    <li>All stores expose data in <b>OneLake as Delta</b> by default, so any engine can read across them (three-part-name cross-queries).</li>
  </ul>
</div>

<h3>Get data — reference vs copy</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Option</th><th>What</th><th>Use when</th></tr></thead>
  <tbody>
    <tr><td><b>OneLake shortcut</b></td><td><b>References data in place</b> — no copy, auto-syncs with source</td><td>Avoid duplicate/edge copies; unify data across clouds/items</td></tr>
    <tr><td><b>Data pipeline</b> (Copy activity)</td><td>Bulk ingest + orchestration, low/no-code</td><td>Scheduled, large copies; move data between stores</td></tr>
    <tr><td><b>Dataflow Gen2</b></td><td>Power Query ETL — <b>transform on load</b></td><td>Self-service shaping/cleaning during ingest</td></tr>
    <tr><td><b>Spark notebook</b></td><td>Code-first, any scale</td><td>Complex/custom transforms, ML</td></tr>
    <tr><td><b>Eventstream</b></td><td>Streaming ingest</td><td>Continuous event/telemetry data</td></tr>
    <tr><td><b>Mirroring</b></td><td>Near-real-time replica of an external DB</td><td>Keep an operational DB live in Fabric without ETL</td></tr>
  </tbody>
</table></div>

<h3>OneLake shortcuts (reference without copying)</h3>
<ul>
  <li>Behave like <b>symbolic links</b> — an independent object. Delete the shortcut and the <b>target is unaffected</b>; move/rename the target and the shortcut can break.</li>
  <li><b>Internal</b> (other Fabric items: lakehouse, warehouse, KQL DB, SQL DB, semantic model, mirrored DB) + <b>external</b> (ADLS Gen2, Amazon S3, Google Cloud Storage, Dataverse, OneDrive/SharePoint, Iceberg; on-prem via the <b>on-premises data gateway</b>).</li>
  <li>Created in a <b>lakehouse</b> (Tables — <b>top level only</b>, Delta auto-recognized as a table; Files — anywhere) and in <b>KQL databases</b> (queried with <code>external_table()</code>).</li>
  <li><b>Auto schema sync</b>; readable by Spark, the SQL endpoint, KQL, and <b>Direct Lake</b>.</li>
  <li><b>Identity gotcha</b>: an internal shortcut uses the <b>calling user's identity</b>. But Direct Lake over <b>SQL</b> in <em>Delegated identity mode</em> passes the item owner's identity — use <b>Direct Lake over OneLake</b> or <b>User identity mode</b> to pass the caller through.</li>
</ul>

<h3>Discover data</h3>
<ul>
  <li><b>OneLake catalog</b> — one place to <b>browse, explore, and govern</b> every Fabric item (endorsement, lineage, sensitivity surfaced here).</li>
  <li><b>Real-Time hub</b> — tenant-wide, <b>auto-provisioned</b> home for <b>streaming</b> data; lists all streams + KQL tables and offers connectors (Kafka, Event Hubs, IoT Hub, database CDC, Google Pub/Sub, Kinesis, Fabric &amp; Azure events). Discover → connect → process / analyze / act (alerts).</li>
</ul>

<h3>OneLake integration for Eventhouse &amp; semantic models</h3>
<ul>
  <li><b>Eventhouse OneLake availability</b>: exposes KQL data in OneLake as <b>Delta</b>, so Spark / SQL / Direct Lake can read it — no copy.</li>
  <li><b>Semantic model</b>: <b>Direct Lake</b> reads Delta files straight from OneLake (Import speed + DirectQuery freshness, no refresh copy).</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Shortcut = reference</b> (no copy, auto-sync). <b>Pipeline/dataflow/notebook = copy</b>. Prefer a shortcut to eliminate edge copies.</li>
    <li>Lakehouse <b>Tables</b> shortcuts are <b>top-level only</b>; Delta targets are auto-detected as tables.</li>
    <li>Need <b>write DML / multi-table transactions</b> → warehouse, not the lakehouse SQL endpoint (read-only).</li>
    <li><b>Real-Time hub</b> is auto-provisioned per tenant and is the discovery point for streaming sources.</li>
  </ul>
</div>

<h2>Hands-on lab — get data into a lakehouse three ways</h2>
<div class="scenario"><b>Scenario:</b> bring reference data in via a <b>shortcut</b> (no copy), bulk data via a <b>pipeline</b>, and explore <b>streaming</b> via Real-Time hub.</div>
<p class="note-line">Use a Fabric workspace on capacity. A sample lakehouse/warehouse with a Delta table helps for the shortcut step.</p>
<ol class="steps">
  <li>Create a <b>lakehouse</b>; note the <b>Tables</b> (structured/Delta) vs <b>Files</b> (raw) folders. <span class="check">Checkpoint: you know which folder auto-creates tables.</span></li>
  <li>Create an <b>internal OneLake shortcut</b> in <b>Tables</b> to a Delta table in another item; confirm it shows as a table and is queryable from the <b>SQL endpoint</b>. <span class="check">Checkpoint: data appears with no copy.</span></li>
  <li>Create an <b>external shortcut</b> (ADLS Gen2 / S3 sample) in <b>Files</b>; confirm the source wasn't duplicated. <span class="check">Checkpoint: shortcut is a symbolic link.</span></li>
  <li>Build a <b>Data pipeline</b> with a <b>Copy</b> activity to load a CSV into a table; then do the same with a <b>Dataflow Gen2</b> and note when you'd pick each. <span class="check">Checkpoint: pipeline = move/orchestrate; dataflow = transform-on-load.</span></li>
  <li>Open <b>Real-Time hub</b>; browse available streams and connectors. <span class="check">Checkpoint: you can name 3 streaming connectors.</span></li>
  <li>Open the <b>OneLake catalog</b>; find your lakehouse and note endorsement/lineage. <span class="check">Checkpoint: discovery + governance in one place.</span></li>
  <li>Discuss/enable <b>OneLake availability</b> on an eventhouse (or reason about Direct Lake reading Delta from OneLake). <span class="check">Checkpoint: KQL data exposed as Delta, queryable everywhere.</span></li>
</ol>

<h2>Pick the right approach (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Store / method</th></tr></thead>
  <tbody>
    <tr><td>T-SQL team needs multi-table transactions</td><td>&nbsp;</td></tr>
    <tr><td>Spark team, terabytes of files</td><td>&nbsp;</td></tr>
    <tr><td>High-volume IoT telemetry, interactive analytics</td><td>&nbsp;</td></tr>
    <tr><td>Reference an S3 bucket without copying it</td><td>&nbsp;</td></tr>
    <tr><td>Scheduled bulk copy from an external SQL DB</td><td>&nbsp;</td></tr>
    <tr><td>Clean/shape data during ingest, low-code</td><td>&nbsp;</td></tr>
    <tr><td>Discover streaming sources across the tenant</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Multi-table transactions → <b>Warehouse</b> · TB of files/Spark → <b>Lakehouse</b> · IoT telemetry → <b>Eventhouse</b> · Reference S3 → <b>external shortcut</b> · Scheduled bulk copy → <b>Data pipeline (Copy)</b> · Clean during ingest → <b>Dataflow Gen2</b> · Discover streams → <b>Real-Time hub</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>You must reference an ADLS Gen2 folder in a lakehouse <b>without copying</b> it. What do you use?</li>
  <li>A team fluent in T-SQL needs INSERT/UPDATE/DELETE and multi-table transactions. Lakehouse or warehouse?</li>
  <li>Where can a lakehouse <b>Tables</b> shortcut be created — any level, or top level only?</li>
  <li>Which Fabric surface is the tenant-wide place to discover <b>streaming</b> data?</li>
  <li>Shortcut vs pipeline Copy — which one duplicates the data?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>A <b>OneLake shortcut</b> (external, to ADLS Gen2).</li>
  <li><b>Warehouse</b> — the lakehouse SQL endpoint is read-only.</li>
  <li><b>Top level only</b> (Delta targets auto-recognized as tables).</li>
  <li><b>Real-Time hub</b>.</li>
  <li><b>Pipeline Copy</b> duplicates; a <b>shortcut</b> references in place.</li>
</ol>
</details>
`,
  },
  {
    id: '2.2', domain: 2, title: 'Transform data', ready: true,
    intro: 'Transform = shape raw data into a clean <b>star schema</b> ready for analysis. The exam tests two things hard: <b>dimensional modeling</b> (fact vs dimension, SCD, role-playing, many-to-many bridges) and <b>which tool</b> to transform with (dataflow vs notebook vs T-SQL). Build the star <em>upstream</em> in the lakehouse/warehouse so the semantic model connects to clean data.',
    html: `
<h2>Notes</h2>

<h3>Where to transform</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Tool</th><th>Style</th><th>Best for</th></tr></thead>
  <tbody>
    <tr><td><b>Dataflow Gen2</b></td><td>Power Query, low-code</td><td>Self-service shaping, reusable ETL</td></tr>
    <tr><td><b>Notebook (Spark)</b></td><td>PySpark / Spark SQL, code</td><td>Big data, complex/custom logic, ML prep</td></tr>
    <tr><td><b>T-SQL</b> (warehouse)</td><td>Views, functions, stored procedures</td><td>Set-based transforms, CTAS, INSERT…SELECT</td></tr>
    <tr><td><b>Visual Query Editor</b></td><td>No-code drag &amp; drop</td><td>Quick joins/filters over the SQL endpoint</td></tr>
  </tbody>
</table></div>
<p><b>Reusable T-SQL objects</b>: <b>views</b> (saved query / logical layer), <b>functions</b> (reusable scalar/table logic), <b>stored procedures</b> (multi-step ETL). Use these to enrich and standardize.</p>

<h3>Dimensional modeling — the star schema</h3>
<ul>
  <li><b>Dimension</b> tables describe the <em>things</em> (product, customer, <b>date</b>) — used to <b>filter &amp; group</b>. <b>Fact</b> tables store <em>events/observations</em> (sales) with dimension keys + numeric measures — used to <b>summarize</b>.</li>
  <li>The table type is set by <b>relationship cardinality</b>: the <b>"one" side is always a dimension</b>, the <b>"many" side is always a fact</b>. Keep facts at a <b>consistent grain</b>.</li>
  <li><b>Surrogate keys</b>: add a unique key (e.g. Power Query index) when a dimension has no single unique column — needed for the "one" side.</li>
  <li><b>Snowflake → star</b>: prefer <b>denormalizing</b> related dimension tables (Category/Subcategory/Product) into a <b>single</b> dimension table; fewer tables, shorter filter paths, hierarchies possible.</li>
</ul>

<h3>Slowly changing dimensions (SCD)</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Type</th><th>Behavior</th><th>How</th></tr></thead>
  <tbody>
    <tr><td><b>Type 1</b></td><td><b>Overwrite</b> — keep only the latest value</td><td>A normal (non-incremental) refresh achieves this</td></tr>
    <tr><td><b>Type 2</b></td><td><b>Version</b> history over time</td><td><b>Surrogate key</b> + StartDate/EndDate (+ IsCurrent flag); the DW load detects changes — Power Query alone can't build it, load from a pre-built SCD2 table</td></tr>
  </tbody>
</table></div>

<h3>Special dimension patterns</h3>
<ul>
  <li><b>Role-playing dimension</b>: one Date table filtering Order/Ship/Delivery date → multiple relationships, but only <b>one active</b>; use <b>USERELATIONSHIP</b> in a measure, or duplicate the dimension table per role.</li>
  <li><b>Many-to-many</b> (salesperson ↔ region): a <b>bridge table</b> (factless fact of the two keys) is the recommended pattern.</li>
  <li><b>Degenerate dimension</b>: a fact attribute used for filtering (e.g. order number) kept on the fact table. <b>Junk dimension</b>: consolidate several tiny flag dimensions into one.</li>
</ul>

<h3>Common transforms</h3>
<p>Denormalize · aggregate · merge/join · handle <b>duplicates / missing values / nulls</b> · convert data types · filter · enrich. Do the heavy shaping upstream (ETL) so the semantic model stays lean.</p>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>In a relationship, the <b>"one" side is the dimension</b>, the <b>"many" side is the fact</b>.</li>
    <li><b>SCD Type 1 = overwrite</b>; <b>Type 2 = versioned</b> (surrogate key + date range). Power Query can't <em>build</em> SCD2 — load it from a DW.</li>
    <li><b>Role-playing</b> → inactive relationships + <b>USERELATIONSHIP</b> (or duplicate dim tables). <b>Many-to-many</b> → <b>bridge table</b>.</li>
    <li>Prefer <b>denormalized single dimension</b> tables over snowflake.</li>
  </ul>
</div>

<h2>Hands-on lab — build a star schema</h2>
<div class="scenario"><b>Scenario:</b> turn a flat Sales export into a clean star: a Sales fact + Date, Product, and Customer dimensions.</div>
<p class="note-line">Use a Fabric warehouse (T-SQL) or lakehouse (Spark/Power Query). A flat sales export to shape helps.</p>
<ol class="steps">
  <li>Load the flat file; split it into <b>fact</b> (keys + measures) and <b>dimension</b> tables. <span class="check">Checkpoint: you can say which columns are facts vs dimensions.</span></li>
  <li>Add a <b>surrogate key</b> to a dimension that lacks a unique column; confirm it's unique. <span class="check">Checkpoint: valid "one" side.</span></li>
  <li>Handle <b>duplicates, nulls, and data types</b>; create a <b>view</b> that enriches the fact with a lookup. <span class="check">Checkpoint: clean, typed data behind a view.</span></li>
  <li>Build a <b>Date</b> dimension and relate it to Sales; add a second date role (Ship date) and note only one relationship is active. <span class="check">Checkpoint: role-playing understood.</span></li>
  <li>Model a <b>many-to-many</b> (e.g. product ↔ tag) with a <b>bridge table</b>. <span class="check">Checkpoint: bridge resolves the m2m.</span></li>
  <li>Sketch a <b>Type 2 SCD</b> for Customer (surrogate key + Start/End/IsCurrent). <span class="check">Checkpoint: you can version a dimension.</span></li>
</ol>

<h2>Match pattern → technique (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Technique</th></tr></thead>
  <tbody>
    <tr><td>Keep history when a customer changes region</td><td>&nbsp;</td></tr>
    <tr><td>Filter sales by order date and ship date</td><td>&nbsp;</td></tr>
    <tr><td>A student can be in many clubs</td><td>&nbsp;</td></tr>
    <tr><td>Dimension has no unique id column</td><td>&nbsp;</td></tr>
    <tr><td>Category/Subcategory/Product across 3 tables</td><td>&nbsp;</td></tr>
    <tr><td>Reusable, low-code ingest + shape</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Keep history → <b>SCD Type 2</b> · order/ship date → <b>role-playing dimension</b> (USERELATIONSHIP / duplicate date tables) · many clubs → <b>bridge table (m2m)</b> · no unique id → <b>surrogate key</b> · 3-table snowflake → <b>denormalize into one dimension</b> · low-code shape → <b>Dataflow Gen2</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>In a one-to-many relationship, which side is the fact table?</li>
  <li>SCD Type 1 vs Type 2 — which preserves history?</li>
  <li>You need to analyze sales by both order date and ship date from one Date table. What technique?</li>
  <li>Best-practice way to model a many-to-many between two dimensions?</li>
  <li>Snowflake vs denormalized single dimension — which does Power BI generally prefer?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li>The <b>"many"</b> side.</li>
  <li><b>Type 2</b> (versions with surrogate key + date range); Type 1 overwrites.</li>
  <li><b>Role-playing dimension</b> — multiple relationships (one active) with <b>USERELATIONSHIP</b>, or duplicate the Date table.</li>
  <li>A <b>bridge table</b> (factless fact of the two keys).</li>
  <li><b>Denormalized single dimension</b> table.</li>
</ol>
</details>
`,
  },
  {
    id: '2.3', domain: 2, title: 'Query and analyze data', ready: true,
    intro: 'Four ways to ask questions of Fabric data — the exam wants you to pick the <b>right language for the right store</b>: <b>Visual Query</b> (no-code), <b>SQL</b> (warehouse / lakehouse endpoint), <b>KQL</b> (eventhouse / real-time), and <b>DAX</b> (semantic model).',
    html: `
<h2>Notes</h2>

<h3>The four query surfaces</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Language</th><th>Query what</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td><b>Visual Query Editor</b></td><td>Lakehouse / warehouse tables (SQL endpoint)</td><td>No-code Power Query diagram; generates SQL under the hood</td></tr>
    <tr><td><b>T-SQL (SQL)</b></td><td>Warehouse (read/write) &amp; lakehouse SQL analytics endpoint (<b>read-only</b>)</td><td>Cross-database queries with <b>three-part names</b> across warehouses/lakehouses</td></tr>
    <tr><td><b>KQL</b></td><td>Eventhouse / KQL database</td><td>Real-time, log/telemetry, time-series; query a shortcut with <code>external_table()</code></td></tr>
    <tr><td><b>DAX</b></td><td>Semantic model</td><td>Measures + analytical queries; run <code>EVALUATE</code> in the <b>DAX query view</b></td></tr>
  </tbody>
</table></div>

<h3>Pick the language</h3>
<ul>
  <li><b>Tables in a lakehouse/warehouse</b>, SQL skills → <b>T-SQL</b> (or Visual Query for no-code). The lakehouse SQL endpoint is <b>read-only</b>.</li>
  <li><b>Streaming / high-volume event or log data</b> → <b>KQL</b> over an eventhouse.</li>
  <li><b>Analyze the model</b> (measures, relationships, RLS applied) → <b>DAX</b>.</li>
  <li>Cross-store analytics: T-SQL <b>three-part names</b> join a warehouse table to a lakehouse Delta table in one query.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li>Lakehouse SQL analytics endpoint = <b>read-only T-SQL</b>; the warehouse supports full read/write DML.</li>
    <li><b>KQL</b> is the language for the <b>eventhouse / real-time</b> data — not T-SQL.</li>
    <li>Write analytical queries against a semantic model with <b>DAX</b> (<code>EVALUATE</code>) in the DAX query view.</li>
    <li><b>Visual Query</b> is the no-code option; it still runs SQL underneath.</li>
  </ul>
</div>

<h2>Hands-on lab — query one dataset four ways</h2>
<div class="scenario"><b>Scenario:</b> answer "top products by revenue" with Visual Query, T-SQL, DAX — and query an eventhouse with KQL.</div>
<ol class="steps">
  <li>Open a lakehouse/warehouse; use the <b>Visual Query Editor</b> to group + sort with no code; peek at the generated SQL. <span class="check">Checkpoint: no-code → SQL.</span></li>
  <li>In the <b>SQL editor</b>, write the same query in <b>T-SQL</b>; try a <b>three-part name</b> cross-database join. <span class="check">Checkpoint: cross-store query works.</span></li>
  <li>Build a semantic model; in <b>DAX query view</b> run <code>EVALUATE</code> with a measure. <span class="check">Checkpoint: DAX query returns a table.</span></li>
  <li>If you have an eventhouse, run a <b>KQL</b> query (e.g. <code>| summarize by bin(Timestamp, 1h)</code>). <span class="check">Checkpoint: KQL over real-time data.</span></li>
  <li>Note which surface you'd use for a report author vs a data engineer vs a real-time analyst. <span class="check">Checkpoint: right tool per persona.</span></li>
</ol>

<h2>Match question → language (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Task</th><th>Language / tool</th></tr></thead>
  <tbody>
    <tr><td>Ad-hoc join over lakehouse tables, no code</td><td>&nbsp;</td></tr>
    <tr><td>Analyze IoT telemetry by 5-minute buckets</td><td>&nbsp;</td></tr>
    <tr><td>Query a measure with report filter context</td><td>&nbsp;</td></tr>
    <tr><td>Join a warehouse table to a lakehouse table</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>No-code join → <b>Visual Query Editor</b> · IoT buckets → <b>KQL</b> (eventhouse) · measure query → <b>DAX</b> (<code>EVALUATE</code>) · warehouse↔lakehouse join → <b>T-SQL three-part names</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Which language queries an eventhouse / KQL database?</li>
  <li>Is the lakehouse SQL analytics endpoint read-only or read-write?</li>
  <li>How do you run an analytical query against a semantic model?</li>
  <li>How do you join a warehouse table to a lakehouse Delta table in one query?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>KQL</b>.</li>
  <li><b>Read-only</b> (the warehouse is read-write).</li>
  <li><b>DAX</b> — <code>EVALUATE</code> in the DAX query view.</li>
  <li><b>T-SQL with three-part names</b> (cross-database query).</li>
</ol>
</details>
`,
  },
  {
    id: '3.1', domain: 3, title: 'Design and build semantic models', ready: true,
    intro: 'The semantic model is where a clean star schema becomes fast, reusable analytics. Know your <b>storage modes</b>, get <b>relationships</b> right, write <b>DAX</b> that respects filter context, and use the scaling features — <b>calculation groups</b>, <b>field parameters</b>, <b>large-model storage</b>, and <b>composite models</b>.',
    html: `
<h2>Notes</h2>

<h3>Storage modes</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Mode</th><th>How it queries</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td><b>Import</b></td><td>VertiPaq (in-memory copy)</td><td>Fast; self-service; needs refresh</td></tr>
    <tr><td><b>DirectQuery</b></td><td>Federates to the source</td><td>Fresh, no copy; slower</td></tr>
    <tr><td><b>Direct Lake</b></td><td>VertiPaq reads Delta from OneLake</td><td>Import speed + fresh, no copy (Fabric)</td></tr>
    <tr><td><b>Dual</b></td><td>Import <b>or</b> DirectQuery per query</td><td>Shared dimensions in composite models</td></tr>
  </tbody>
</table></div>
<p>A model mixing storage modes is a <b>composite model</b>. You can build a composite model <b>on top of a shared semantic model</b>.</p>

<h3>Relationships</h3>
<ul>
  <li>Cardinality <b>one-to-many</b> (dim→fact) is the norm; the <b>one side must be unique</b>. <b>Cross-filter direction</b>: single (default) or both — use <b>both</b> sparingly.</li>
  <li><b>Many-to-many</b> via a <b>bridge table</b>; multiple relationships → one <b>active</b>, others via <b>USERELATIONSHIP</b>.</li>
</ul>

<h3>DAX essentials</h3>
<ul>
  <li><b>Variables</b> (<code>VAR</code>/<code>RETURN</code>) — readability + performance (evaluate once).</li>
  <li><b>Iterators</b> (<code>SUMX</code>, <code>AVERAGEX</code>) — row-by-row over a table.</li>
  <li><b>Filter/table functions</b> — <code>CALCULATE</code> (change filter context), <code>FILTER</code>, <code>ALL</code>, <code>VALUES</code>.</li>
  <li><b>Windowing</b> — <code>WINDOW</code>, <code>OFFSET</code>, <code>INDEX</code>, <code>RANK</code> for running totals / period-over-period.</li>
  <li><b>Information functions</b> — <code>SELECTEDVALUE</code>, <code>HASONEVALUE</code>, <code>ISBLANK</code>, <code>ISINSCOPE</code>.</li>
</ul>

<h3>Scaling features</h3>
<ul>
  <li><b>Calculation groups</b>: apply one set of items (YTD, MTD, PY…) to <b>any</b> measure via <code>SELECTEDMEASURE()</code> — kills measure explosion. Set <b>precedence</b> when you have several. <b>Dynamic format strings</b> per item. ⚠ Adding a calc group turns all measures into the <b>variant</b> data type.</li>
  <li><b>Field parameters</b>: let report users <b>swap which dimension/measure</b> a visual shows (implicitly a calculated table).</li>
  <li><b>Large semantic model storage format</b>: enable for models expected to exceed <b>1 GB</b> — <b>before</b> the first refresh.</li>
  <li>DAX iterators/table-filtering/windowing/information families are all called out in the study guide — be able to recognize each.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Calculation group</b> replaces N measures × M time calcs with one group; <code>SELECTEDMEASURE()</code> is the placeholder. Adding one makes measures <b>variant</b>.</li>
    <li><b>Field parameters</b> = user switches fields in a visual; different from calc groups (which switch calculations).</li>
    <li>Enable <b>Large semantic model storage format</b> before the first refresh for >1 GB models.</li>
    <li><b>Dual</b> storage mode exists for shared dimensions in composite models.</li>
    <li>Many-to-many → <b>bridge</b>; inactive relationships need <b>USERELATIONSHIP</b>.</li>
  </ul>
</div>

<h2>Hands-on lab — build a scalable model</h2>
<div class="scenario"><b>Scenario:</b> build a Sales semantic model with time-intelligence via a calculation group and a user-switchable field parameter.</div>
<ol class="steps">
  <li>Create relationships (dim→fact, single cross-filter); mark the <b>Date</b> table as a date table. <span class="check">Checkpoint: star relationships in place.</span></li>
  <li>Write a measure using <code>VAR</code> + an iterator (e.g. weighted average with <code>SUMX</code>). <span class="check">Checkpoint: measure uses a variable + iterator.</span></li>
  <li>Add a <b>calculation group</b> with items <code>Current</code>, <code>YTD</code>, <code>PY</code>, <code>YOY%</code> using <code>SELECTEDMEASURE()</code>; give <code>YOY%</code> a <b>dynamic format string</b>. <span class="check">Checkpoint: one group drives all measures.</span></li>
  <li>Note that measures now show as <b>variant</b> type. <span class="check">Checkpoint: you can explain the variant side effect.</span></li>
  <li>Add a <b>field parameter</b> so users switch the visual's dimension (Product/Region/Channel). <span class="check">Checkpoint: user-driven field swap.</span></li>
  <li>If the model may exceed 1 GB, enable <b>Large semantic model storage format</b> before refreshing. <span class="check">Checkpoint: set before first refresh.</span></li>
</ol>

<h2>Feature → job (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Requirement</th><th>Feature</th></tr></thead>
  <tbody>
    <tr><td>Apply YTD/PY/YOY to 20 measures without 60 new measures</td><td>&nbsp;</td></tr>
    <tr><td>Let users pick the axis field in a chart</td><td>&nbsp;</td></tr>
    <tr><td>Running total / rank without complex FILTER</td><td>&nbsp;</td></tr>
    <tr><td>Model will grow past 1 GB</td><td>&nbsp;</td></tr>
    <tr><td>Shared dimension used by Import + DirectQuery facts</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>YTD/PY/YOY across measures → <b>calculation group</b> · pick axis field → <b>field parameter</b> · running total/rank → <b>windowing functions</b> (WINDOW/OFFSET/INDEX/RANK) · &gt;1 GB → <b>Large semantic model storage format</b> · shared dimension → <b>Dual storage mode</b>.</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>What DAX function is the measure placeholder inside a calculation item?</li>
  <li>Side effect of adding a calculation group to a model?</li>
  <li>Calculation group vs field parameter — what does each switch?</li>
  <li>When must you enable Large semantic model storage format?</li>
  <li>Which storage mode gives Import-like speed while reading Delta from OneLake without a copy?</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><code>SELECTEDMEASURE()</code>.</li>
  <li>All measures become the <b>variant</b> data type.</li>
  <li>Calc group switches the <b>calculation</b> applied; field parameter switches the <b>field</b> (dimension/measure) shown.</li>
  <li><b>Before the first refresh</b>, for models expected to exceed 1 GB.</li>
  <li><b>Direct Lake</b>.</li>
</ol>
</details>
`,
  },
  {
    id: '3.2', domain: 3, title: 'Optimize enterprise-scale semantic models', ready: true,
    intro: 'Make big models fast. The exam concentrates on <b>Direct Lake</b> — how it refreshes (framing), and the crucial split between <b>Direct Lake on OneLake</b> (no fallback) vs <b>on SQL endpoint</b> (falls back to DirectQuery) — plus <b>incremental refresh</b>, DAX/visual performance, and Delta optimization.',
    html: `
<h2>Notes</h2>

<h3>Direct Lake — how it refreshes</h3>
<ul>
  <li>Reads <b>Delta/Parquet from OneLake</b> via the <b>VertiPaq</b> engine — Import-class speed, no imported copy.</li>
  <li><b>Framing</b> = a Direct Lake "refresh" copies only <b>metadata</b> (points to the latest Delta files) — seconds, low cost. <b>Transcoding</b> loads columns into memory <b>on demand</b>. <b>Automatic updates</b> keep it in sync.</li>
  <li>Performance depends on well-tuned Delta: <b>V-Order</b>, <b>OPTIMIZE</b> (fewer, larger row groups/Parquet files).</li>
</ul>

<h3>Direct Lake on OneLake vs on SQL endpoint (know this cold)</h3>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Direct Lake on OneLake</th><th>Direct Lake on SQL endpoint</th></tr></thead>
  <tbody>
    <tr><td><b>DirectQuery fallback</b></td><td><b>No fallback</b> — exceeding guardrails <b>fails</b> refresh/queries (like Import)</td><td><b>Falls back to DirectQuery</b> (SQL views, SQL RLS, or guardrails exceeded)</td></tr>
    <tr><td><b>Reads</b></td><td>Delta files directly (needs OneLake file access)</td><td>Via SQL analytics endpoint (discovery + permission checks)</td></tr>
    <tr><td><b>SQL-endpoint RLS/OLS/CLS</b></td><td>Not applied (uses OneLake file access)</td><td>Honored (but RLS causes fallback)</td></tr>
    <tr><td><b>Composite models</b></td><td>Supported (+ Import tables)</td><td>Not supported</td></tr>
    <tr><td><b>Identity</b></td><td>Passes the caller (User identity)</td><td>Delegated mode passes item owner's identity</td></tr>
  </tbody>
</table></div>

<h3>Incremental refresh</h3>
<ul>
  <li>Define two Power Query date/time params — <b>RangeStart</b> and <b>RangeEnd</b> (reserved, case-sensitive) — and filter the fact table by them.</li>
  <li>The service auto-creates <b>partitions</b>; only recent partitions refresh (a <b>rolling window</b>); optional <b>DirectQuery real-time partition</b> (Premium) for the latest data.</li>
  <li>Benefits: faster/cheaper refresh, reliability, enables very large models. <b>Detect data changes</b> refreshes only partitions that actually changed. <b>Query folding</b> must push the filter to the source.</li>
  <li>For >1 GB, enable <b>Large semantic model storage format</b> before the first refresh.</li>
</ul>

<h3>Query, visual &amp; DAX performance</h3>
<ul>
  <li><b>Performance Analyzer</b> — see each visual's DAX + render time; fix the slowest. Fewer visuals per page.</li>
  <li><b>DAX</b>: use <b>variables</b> (evaluate once), avoid needless <b>iterators</b> over huge tables, minimize <b>context transition</b>, prefer measures over calculated columns.</li>
  <li><b>VertiPaq/model</b>: reduce <b>cardinality</b>, remove unused columns, keep a tight <b>star schema</b>, use aggregations for big facts.</li>
</ul>

<div class="callout callout-key"><b>Exam-critical</b>
  <ul>
    <li><b>Direct Lake on OneLake = NO fallback</b> (fails like Import when guardrails exceeded). <b>On SQL endpoint = falls back to DirectQuery</b> (SQL views, SQL RLS, guardrails).</li>
    <li><b>Framing</b> = metadata-only Direct Lake refresh (seconds); Import copies all data.</li>
    <li>Incremental refresh keys off <b>RangeStart/RangeEnd</b>; needs <b>query folding</b>.</li>
    <li>Optimize Delta with <b>V-Order + OPTIMIZE</b>; guardrails (files, row groups, rows, memory) scale by <b>Fabric SKU</b>.</li>
  </ul>
</div>

<h2>Hands-on lab — tune a slow model</h2>
<div class="scenario"><b>Scenario:</b> a report is slow. Diagnose it, speed up a measure, and set up Direct Lake + incremental refresh.</div>
<ol class="steps">
  <li>Run <b>Performance Analyzer</b>; identify the slowest visual and copy its DAX query. <span class="check">Checkpoint: you found the bottleneck.</span></li>
  <li>Rewrite the slow measure with a <b>VAR</b> and remove an unnecessary iterator; re-measure. <span class="check">Checkpoint: query time drops.</span></li>
  <li>Build a <b>Direct Lake</b> model on a lakehouse; make a change to the Delta table and watch <b>framing</b> pick it up. <span class="check">Checkpoint: seconds-fast metadata refresh.</span></li>
  <li>Compare <b>Direct Lake on OneLake</b> vs <b>on SQL</b> and state which one falls back to DirectQuery. <span class="check">Checkpoint: fallback difference clear.</span></li>
  <li>On an Import fact, configure <b>incremental refresh</b> with <b>RangeStart/RangeEnd</b>; verify query folding. <span class="check">Checkpoint: partitions created, folding confirmed.</span></li>
  <li>Run <b>OPTIMIZE</b> / V-Order on the Delta table for Direct Lake. <span class="check">Checkpoint: fewer, larger row groups.</span></li>
</ol>

<h2>Symptom → fix (worksheet)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Situation</th><th>Fix / answer</th></tr></thead>
  <tbody>
    <tr><td>Model must never fall back to DirectQuery</td><td>&nbsp;</td></tr>
    <tr><td>SQL RLS must be honored on a Direct Lake model</td><td>&nbsp;</td></tr>
    <tr><td>Nightly refresh takes hours on a huge fact</td><td>&nbsp;</td></tr>
    <tr><td>One visual is far slower than the rest</td><td>&nbsp;</td></tr>
    <tr><td>Direct Lake queries are slow / paging a lot</td><td>&nbsp;</td></tr>
  </tbody>
</table></div>
<details class="answers"><summary>Model answers</summary>
<p>Never fall back → <b>Direct Lake on OneLake</b> · SQL RLS honored → <b>Direct Lake on SQL endpoint</b> (accepts DirectQuery fallback) · slow nightly refresh → <b>incremental refresh</b> (RangeStart/RangeEnd) · one slow visual → <b>Performance Analyzer</b> + fix its DAX · slow Direct Lake → <b>OPTIMIZE + V-Order</b> the Delta tables (or scale SKU).</p>
</details>

<h2>Self-check</h2>
<ol class="quiz">
  <li>Which Direct Lake variant does <b>not</b> fall back to DirectQuery?</li>
  <li>What is "framing" in a Direct Lake refresh?</li>
  <li>Which two reserved parameters drive incremental refresh?</li>
  <li>Your Direct Lake model must honor SQL-endpoint RLS — which variant, and what's the trade-off?</li>
  <li>Name two ways to optimize Delta tables for Direct Lake.</li>
</ol>
<details class="answers"><summary>Answers</summary>
<ol>
  <li><b>Direct Lake on OneLake</b> (it fails like Import instead).</li>
  <li>A <b>metadata-only</b> refresh that repoints the model to the latest Delta files (seconds) — no data copy.</li>
  <li><code>RangeStart</code> and <code>RangeEnd</code>.</li>
  <li><b>Direct Lake on SQL endpoint</b> — trade-off is it <b>falls back to DirectQuery</b> for RLS queries.</li>
  <li><b>V-Order</b> and <b>OPTIMIZE</b> (fewer, larger row groups/Parquet files).</li>
</ol>
</details>
`,
  },
];
