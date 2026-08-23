/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-410 Building Intelligent Applications - Study-mode Questions
// COURSE-DERIVED: each question is written from a specific Microsoft Learn module unit or the
// official Power Platform / Power Apps / Power Automate / AI Builder / Dataverse / Copilot Studio
// product doc the study guide points to, and links to it. correct = 0-based index.

const STUDY_QUESTIONS = [
  // ---- Domain 1 ----
  {
    id: 101, skill: 1, section: "1A", bullet: "environments-alm",
    topic: "Default Environment",
    question: "What is true of the Default environment in a Power Platform tenant?",
    options: [
      "There is one per tenant, shared by all users, and new users are automatically added to its Environment Maker role",
      "Each user gets their own private default environment",
      "It can't contain a Dataverse database",
      "It is automatically deleted after 30 days"
    ],
    correct: 0,
    explanation: "A single Default environment is automatically created per tenant and shared by all users. Whenever a user signs up for Power Apps they're automatically added to the Environment Maker role of the default environment.",
    source: { title: "ALM basics with Microsoft Power Platform — Environments", url: "https://learn.microsoft.com/power-platform/alm/basics-alm" }
  },
  {
    id: 102, skill: 1, section: "1A", bullet: "environments-alm",
    topic: "What a Solution Contains",
    question: "Which statement about Power Platform solutions is correct?",
    options: [
      "Solutions contain business data such as table rows",
      "Solutions contain components (apps, flows, tables, columns, agents) and metadata but no business data",
      "Solutions can only contain canvas apps",
      "A solution can be any size with no limit"
    ],
    correct: 1,
    explanation: "Solutions package components — model-driven and canvas apps, flows, tables, columns, charts, agents, and more — plus metadata, but they don't contain business data. They're exported/imported to move customizations between environments.",
    source: { title: "ALM basics with Microsoft Power Platform — Solutions", url: "https://learn.microsoft.com/power-platform/alm/basics-alm" }
  },
  {
    id: 103, skill: 1, section: "1B", bullet: "tables-columns",
    topic: "Data Workspace",
    question: "Using the Data workspace table designer, which action lets you add a new field to a table, specifying its name, data type, and format?",
    options: [
      "New row",
      "New column",
      "Show/hide columns",
      "Refresh"
    ],
    correct: 1,
    explanation: "In the Data workspace table designer, New column creates a new data column for the table, where you specify the display name, data type, and format. New row adds data; Show/hide columns toggles visibility; Refresh reloads data.",
    source: { title: "How to create and modify Dataverse tables by using the Data workspace", url: "https://learn.microsoft.com/power-pages/configure/data-workspace-tables" }
  },
  {
    id: 104, skill: 1, section: "1B", bullet: "prompt-columns",
    topic: "Prompt Column Limits",
    question: "How many prompt columns can be created per Dataverse table?",
    options: [
      "Up to 5",
      "Up to 50",
      "Up to 200",
      "Unlimited"
    ],
    correct: 0,
    explanation: "You can create up to five prompt columns per table. When creating one, you select the Prompt data type, then add or write the prompt that ties to input columns and generates the stored AI result.",
    source: { title: "Prompt columns — Create a prompt column", url: "https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column" }
  },
  {
    id: 105, skill: 1, section: "1B", bullet: "dataverse-security",
    topic: "Access Levels",
    question: "In a single business unit (no hierarchy), which access level grants a user access to a record only when they own it, belong to the owning team, or it was shared with them?",
    options: [
      "Global",
      "Deep",
      "Basic",
      "None"
    ],
    correct: 2,
    explanation: "Basic access provides access to records the user owns, records owned by a team they belong to, or records shared with them. Local gives access to all data in the business unit; Global/Deep apply only with a business-unit hierarchy; None blocks access.",
    source: { title: "Security concepts for developers", url: "https://learn.microsoft.com/power-apps/developer/data-platform/security-concepts" }
  },
  {
    id: 106, skill: 1, section: "1B", bullet: "row-summaries",
    topic: "Row Summary Language",
    question: "To make a Copilot row summary respect each user's preferred language, what should the maker include in the summary prompt?",
    options: [
      "Nothing — it always uses the user's language",
      "The LanguageCode input plus an instruction like 'You must respond in language <LanguageCode>'",
      "A rollup column",
      "A separate business rule per language"
    ],
    correct: 1,
    explanation: "By default the summary is generated in the language of the prompt itself. To respect the user's language, include the LanguageCode input and add the instruction 'You must respond in language <LanguageCode>'. If Copilot doesn't support the user's language, English is used.",
    source: { title: "Configure a row summary for a model-driven app — Write a good prompt", url: "https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary" }
  },

  // ---- Domain 2 ----
  {
    id: 107, skill: 2, section: "2A", bullet: "mda-forms-views",
    topic: "Model-Driven Designers",
    question: "Which designer is used to create and edit dashboards that present visualizations such as embedded Power BI reports, charts, and views?",
    options: [
      "Form designer",
      "View designer",
      "Dashboard designer",
      "Chart designer"
    ],
    correct: 2,
    explanation: "The Dashboard designer (accessed via the table designer) creates and edits dashboards that present different visualizations — embedded Power BI reports, data charts, and views. The Form, View, and Chart designers build those individual components.",
    source: { title: "Meet the model-driven app designers", url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/model-driven-designers" }
  },
  {
    id: 108, skill: 2, section: "2B", bullet: "canvas-from-data",
    topic: "Maker Security Role",
    question: "Which security role does a maker need to build canvas apps on Dataverse in an environment?",
    options: [
      "System Administrator only",
      "The Environment Maker role (directly or via a Dataverse team mapped to an Entra security group)",
      "Global Admin in Microsoft 365",
      "No role is required"
    ],
    correct: 1,
    explanation: "A canvas app maker needs the Environment Maker security role, granted either directly or through a Dataverse team that uses the Microsoft Entra ID security group category. Custom security roles aren't currently supported for canvas app maker scenarios.",
    source: { title: "Create a canvas app using Microsoft Dataverse — Prerequisites", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/data-platform-create-app-scratch" }
  },
  {
    id: 109, skill: 2, section: "2B", bullet: "reusable-components",
    topic: "Component Library ALM",
    question: "What happens to the link between a consuming app and a component library if the maker edits the component directly inside the app instead of in the library?",
    options: [
      "Nothing changes — updates still flow automatically",
      "The app becomes self-contained for that component and no longer receives library updates",
      "The component is deleted from the app",
      "The library is converted to a managed solution"
    ],
    correct: 1,
    explanation: "When a component is imported into an app its definition is copied in, and editing it locally makes the app self-contained for that component with no direct link to the library — so no further update prompts are received. To keep the relationship, make changes in the component library instead.",
    source: { title: "Component library application lifecycle management (ALM)", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/component-library-alm" }
  },
  {
    id: 110, skill: 2, section: "2B", bullet: "testing-monitor",
    topic: "Monitor + Trace",
    question: "In which canvas app properties can the Trace function be called to write structured records to Live monitor?",
    options: [
      "Behavior properties such as OnSelect, OnChange, OnVisible, and OnStart",
      "Data properties such as a label's Text",
      "Only in the App.Formulas property",
      "Only inside a cloud flow"
    ],
    correct: 0,
    explanation: "Trace works only in behavior properties (OnSelect, OnChange, OnVisible, OnStart). Because you can't place Trace in data properties like a label's Text, makers use temporary debug buttons to capture those values for Monitor.",
    source: { title: "Debug Canvas apps by using Live monitor and Trace", url: "https://learn.microsoft.com/troubleshoot/power-platform/power-apps/create-and-use-apps/monitor-debugging-canvas-apps" }
  },
  {
    id: 111, skill: 2, section: "2B", bullet: "copilot-from-canvas",
    topic: "Add Custom Copilot to Canvas App",
    question: "Before adding a custom Copilot Studio agent to a canvas app, the agent must be published in the same environment and configured with what?",
    options: [
      "A rollup column",
      "User authentication in Microsoft Entra ID, with makers/users given access",
      "A business process flow",
      "A managed solution export"
    ],
    correct: 1,
    explanation: "To add a custom Copilot to a canvas app, the agent must be created and published in Copilot Studio in the same environment, configured with user authentication in Microsoft Entra ID, and shared so makers and users have access. You then enable App Copilot in the app settings and connect it.",
    source: { title: "Add a custom Copilot to a canvas app", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/add-custom-copilot" }
  },

  // ---- Domain 3 ----
  {
    id: 112, skill: 3, section: "3A", bullet: "flow-approvals",
    topic: "Sequential Approval",
    question: "Which approval type requests approvals one at a time in a specific order, requiring each approver to respond before moving to the next?",
    options: [
      "Approve/Reject - First to respond",
      "Sequential approval",
      "Custom Responses - Wait for one response",
      "Approve/Reject - Everyone must approve"
    ],
    correct: 1,
    explanation: "Sequential approval requests approvals one at a time in a defined order; each approver must respond before the request moves to the next approver, and the following actions run after all approvers in the sequence respond.",
    source: { title: "Get started with approvals — Approvals actions", url: "https://learn.microsoft.com/power-automate/get-started-approvals" }
  },
  {
    id: 113, skill: 3, section: "3A", bullet: "flow-triggers-conditions",
    topic: "Condition Branches",
    question: "In a cloud flow, what do the two branches of a Condition action represent?",
    options: [
      "Two different connectors",
      "Actions to run if the condition is met (True / If yes) and if it isn't met (False / If no)",
      "The start and end of the flow",
      "Two separate environments"
    ],
    correct: 1,
    explanation: "A Condition action has two branches: the True (If yes) branch runs when the condition is met, and the False (If no) branch runs when it isn't. For example, on an approved file the True branch creates and the False branch does nothing further.",
    source: { title: "Trigger approvals from a SharePoint document library — Configure your flow", url: "https://learn.microsoft.com/power-automate/trigger-sharepoint-library" }
  },
  {
    id: 114, skill: 3, section: "3B", bullet: "consume-ai-model",
    topic: "AI Builder Credits",
    question: "In Power Apps and Power Automate, which credits do AI Builder actions consume first?",
    options: [
      "Copilot Credits only",
      "AI Builder credits first, then Copilot Credits if exhausted",
      "Azure subscription credits",
      "No credits are consumed"
    ],
    correct: 1,
    explanation: "In Power Apps or Power Automate, AI Builder actions consume AI Builder credits first; if those are exhausted or unavailable, they consume Copilot Credits instead. In Copilot Studio (agents/agent flows), AI Builder actions consume Copilot Credits only.",
    source: { title: "All AI Builder credits have been consumed — Cause", url: "https://learn.microsoft.com/troubleshoot/power-platform/ai-builder/power-automate/all-ai-builder-credits-have-been-consumed" }
  },
  {
    id: 115, skill: 3, section: "3C", bullet: "business-process-flows",
    topic: "BPF Stage Relationship",
    question: "When a business process flow spans two tables, why should a maker set a Relationship between consecutive stages?",
    options: [
      "It encrypts the data",
      "Relationships carry over mapped column data between rows (minimizing data entry) and list related rows when moving to the next stage",
      "It activates the flow automatically",
      "It is required for rollup columns"
    ],
    correct: 1,
    explanation: "Setting a relationship between stages based on different tables lets defined column maps automatically carry data between rows, minimizing data entry, and surfaces related rows when the user selects Next stage, promoting reuse of records in the process.",
    source: { title: "Tutorial: Create a business process flow — stages", url: "https://learn.microsoft.com/power-automate/create-business-process-flow" }
  },
  {
    id: 116, skill: 3, section: "3C", bullet: "calc-rollup-formula",
    topic: "Formula Columns",
    question: "A formula column in Dataverse is authored with which language?",
    options: [
      "Power Fx",
      "DAX",
      "JavaScript",
      "M (Power Query)"
    ],
    correct: 0,
    explanation: "Dataverse formula columns are authored with Power Fx (the same low-code expression language used in canvas apps). They complement calculated and rollup columns for building business logic that travels with the data regardless of which app accesses it.",
    source: { title: "Power Fx formula reference overview — Dataverse formula columns", url: "https://learn.microsoft.com/power-platform/power-fx/formula-reference-overview" }
  }
];
