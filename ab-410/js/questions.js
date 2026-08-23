/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-410 Building Intelligent Applications - Practice Exam Questions
// COURSE-DERIVED: every question is written from the text of a specific Microsoft Learn module
// unit or the official Power Platform / Power Apps / Power Automate / AI Builder / Dataverse /
// Copilot Studio product doc the study guide references, and its `source` links to that unit/doc.
// correct = 0-based index.

const QUESTIONS = [
  // ============================================================
  // DOMAIN 1: Create a foundation for intelligent applications (25–30%)
  // ============================================================
  {
    id: 1, skill: 1, section: "1A", bullet: "requirements-built-in-agents",
    topic: "Copilot in Power Apps",
    question: "A maker wants to describe a business need in plain language and have Power Apps generate both an app and a data model with no coding. Which capability should they use?",
    options: [
      "Copilot in Power Apps",
      "A managed solution import",
      "A Dataverse rollup column",
      "The classic solution explorer"
    ],
    correct: 0,
    explanation: "Copilot in Power Apps lets you build apps using natural language: you describe your business needs and the service generates an app and a data model for you, with no coding required. Solutions, rollup columns, and the solution explorer don't generate apps from a description.",
    source: { title: "Copilot in Power Apps overview", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview" }
  },
  {
    id: 2, skill: 1, section: "1A", bullet: "requirements-built-in-agents",
    topic: "Microsoft 365 Copilot in apps",
    question: "Microsoft 365 Copilot for model-driven apps lets users gain insights into their app data through natural-language conversations. What must an administrator do before users can see it?",
    options: [
      "Convert the app to a canvas app",
      "Enable Microsoft 365 Copilot for the environment / app before it becomes visible",
      "Add a business process flow to every table",
      "Publish the app as a managed solution"
    ],
    correct: 1,
    explanation: "An administrator must enable Microsoft 365 Copilot in the application (at the environment and/or app level) before it becomes visible. Users also need both a Power Apps premium license and a Microsoft 365 Copilot license to use it.",
    source: { title: "Add Microsoft 365 Copilot for app users in model-driven apps", url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot" }
  },
  {
    id: 3, skill: 1, section: "1A", bullet: "environments-alm",
    topic: "Environment Types",
    question: "Which Power Platform environment type is a single-user space that can't be used to run or share production apps and is intended for building, testing, and learning?",
    options: [
      "Production",
      "Sandbox",
      "Developer",
      "Default"
    ],
    correct: 2,
    explanation: "A Developer environment (formerly Community) is a single-user environment that can't run or share production apps; it's meant for building, testing, and learning with Power Apps, Power Automate, and Dataverse. Production runs apps for intended use, Sandbox is for safe non-production dev/test, and Default is auto-created and shared by all tenant users.",
    source: { title: "ALM basics with Microsoft Power Platform — Environments", url: "https://learn.microsoft.com/power-platform/alm/basics-alm" }
  },
  {
    id: 4, skill: 1, section: "1A", bullet: "environments-alm",
    topic: "Managed vs Unmanaged Solutions",
    question: "Following healthy ALM, which statement about deploying to a production environment is correct?",
    options: [
      "Unmanaged solutions should be deployed straight to production so they can be edited there",
      "Managed solutions are deployed to non-development environments such as test and production; components can't be edited directly in a managed solution",
      "Managed and unmanaged solutions behave identically once imported",
      "A managed solution can be imported into the same environment that holds its originating unmanaged solution"
    ],
    correct: 1,
    explanation: "Managed solutions are deployed to any environment that isn't a development environment for that solution (test, UAT, production). You can't edit components directly within a managed solution, and you can't import a managed solution into the same environment that contains its originating unmanaged solution. Unmanaged solutions are the development source.",
    source: { title: "Solution concepts — Managed and unmanaged solutions", url: "https://learn.microsoft.com/power-platform/alm/solution-concepts-alm" }
  },
  {
    id: 5, skill: 1, section: "1A", bullet: "environments-alm",
    topic: "Solution Publisher",
    question: "Why is it important to use a custom publisher (not the default) when you create solutions for an application?",
    options: [
      "The publisher sets the customization prefix and is required to be consistent across solutions and environments",
      "The publisher determines the timer length of cloud flows",
      "Each publisher can only contain one table",
      "The publisher encrypts business data inside the solution"
    ],
    correct: 0,
    explanation: "The solution publisher defines the customization prefix applied to new components, and Microsoft guidance is to use the same publisher for all your solutions across environments. Solutions never contain business data, and the publisher has nothing to do with flow timers or encryption.",
    source: { title: "Organize your solutions — Solution publisher", url: "https://learn.microsoft.com/power-platform/alm/organize-solutions" }
  },
  {
    id: 6, skill: 1, section: "1B", bullet: "tables-columns",
    topic: "Standard vs Custom Tables",
    question: "What is the key difference between standard tables and custom tables in Dataverse?",
    options: [
      "Standard tables can't be customized in any way",
      "Standard tables (such as User and Team) ship with Dataverse following Common Data Model best practices and can also be customized; custom tables are ones you create yourself",
      "Custom tables can't store relationships",
      "Standard tables are only available in canvas apps"
    ],
    correct: 1,
    explanation: "Standard tables (e.g., User, Team) are included with Dataverse, follow the Common Data Model, and can be customized (for example by adding columns). You can also create your own custom tables. Both support columns and relationships.",
    source: { title: "Work with any data — Tables and columns", url: "https://learn.microsoft.com/power-apps/maker/data-platform/work-with-any-data" }
  },
  {
    id: 7, skill: 1, section: "1B", bullet: "tables-columns",
    topic: "Column Requirement Level",
    question: "A maker sets a column's requirement level to Business Required. What is the default app behavior?",
    options: [
      "The column is hidden from all forms",
      "Model-driven and canvas apps enforce the requirement, blocking save until the user enters a value (with options to override)",
      "The value is calculated automatically",
      "The column becomes read-only"
    ],
    correct: 1,
    explanation: "Setting a column to Business Required means model-driven and canvas apps enforce it by default: the request isn't sent if the column has no value, and the user is prompted to enter data before saving. There are options to override this behavior if needed.",
    source: { title: "Create and edit columns in Dataverse using Power Apps", url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal" }
  },
  {
    id: 8, skill: 1, section: "1B", bullet: "relationships",
    topic: "Relationship Types",
    question: "Which relationship type requires an intermediate (junction) relationship table, where deleting the relationship loses the connecting data?",
    options: [
      "One-to-many (1:N)",
      "Many-to-one (N:1)",
      "Many-to-many (N:N)",
      "Self-referential lookup"
    ],
    correct: 2,
    explanation: "A many-to-many (N:N) relationship is implemented through an intermediate relationship table. Deleting the relationship deletes that relationship table and all the data connecting the two tables. 1:N and N:1 relationships are defined with a lookup column instead.",
    source: { title: "Create N:N (many-to-many) table relationships in Dataverse", url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-nn-relationships-solution-explorer" }
  },
  {
    id: 9, skill: 1, section: "1B", bullet: "relationships",
    topic: "Creating Relationships",
    question: "A maker adds a Lookup column to the related table in Power Apps. What does this create?",
    options: [
      "A many-to-many relationship",
      "A one-to-many / many-to-one relationship between the two tables",
      "A calculated column",
      "A new security role"
    ],
    correct: 1,
    explanation: "Creating a Lookup column is one of the ways to define a one-to-many (1:N) or many-to-one (N:1) relationship between two tables in Dataverse. A lookup on the 'many' side points to a single row on the 'one' side.",
    source: { title: "Create one-to-many or many-to-one table relationships in Dataverse", url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-1n-relationships" }
  },
  {
    id: 10, skill: 1, section: "1B", bullet: "prompt-columns",
    topic: "Prompt Columns",
    question: "What does a Dataverse prompt column store?",
    options: [
      "A static default value typed by the maker",
      "Generative AI results produced from a natural-language prompt tied to other columns, persisted in the table",
      "A link to an external SharePoint file",
      "A list of security roles"
    ],
    correct: 1,
    explanation: "A prompt column is an AI-powered Dataverse data type. You define a natural-language prompt tied to input columns; the AI model generates a response that is stored persistently in the prompt column, enriching the record so it can be used in apps, flows, and reports.",
    source: { title: "Prompt columns", url: "https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column" }
  },
  {
    id: 11, skill: 1, section: "1B", bullet: "prompt-columns",
    topic: "Prompt Column Behavior",
    question: "When are values in a Dataverse prompt column populated?",
    options: [
      "Only when a user manually presses a Refresh button",
      "When records are created and when the referenced input column values are updated",
      "Once per year by a scheduled job",
      "Only at solution import time"
    ],
    correct: 1,
    explanation: "Prompt column values are populated when records are created and when the input column values referenced in the prompt definition are updated. Existing records aren't backfilled automatically when a prompt column is added to a table that already has rows.",
    source: { title: "Specialized columns using code — Prompt columns", url: "https://learn.microsoft.com/power-apps/developer/data-platform/specialized-columns" }
  },
  {
    id: 12, skill: 1, section: "1B", bullet: "row-summaries",
    topic: "Copilot Row Summary",
    question: "A maker configures a row summary for an Account table. Where do these Copilot-generated summaries appear, and what controls their content?",
    options: [
      "On all tables automatically, with fixed content",
      "On the table's main forms and views, with content controlled by a custom prompt that specifies which columns to include",
      "Only in Power BI reports",
      "Only inside cloud flows"
    ],
    correct: 1,
    explanation: "A row summary is configured with a custom prompt that specifies which columns to include; once applied it appears in a consistent experience on the table's main forms (a collapsible summary bar) and from views. It gives users an at-a-glance view of the most important fields for a record.",
    source: { title: "Configure a row summary for a model-driven app", url: "https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary" }
  },
  {
    id: 13, skill: 1, section: "1B", bullet: "views-forms",
    topic: "Dataverse Views",
    question: "What is a Dataverse view?",
    options: [
      "A query that defines which columns to display, how rows are sorted, and how rows are filtered for a table",
      "A reusable canvas component",
      "A row-level security rule",
      "A type of cloud flow trigger"
    ],
    correct: 0,
    explanation: "A view is a type of query that displays specific rows and columns of data from a table — you specify which columns to show, the sort order, and the filter (row) criteria. Public views can then be surfaced in model-driven apps and lists.",
    source: { title: "Create and modify Dataverse views by using the Data workspace", url: "https://learn.microsoft.com/power-pages/configure/data-workspace-views" }
  },
  {
    id: 14, skill: 1, section: "1B", bullet: "dataverse-security",
    topic: "Dataverse Security Model",
    question: "In the Dataverse role-based security model, how is a user's effective access to a record determined?",
    options: [
      "By the single most restrictive security role assigned",
      "By the least restrictive (accumulative) combination of all their security roles, team roles, business unit, and shared records",
      "Only by the business unit, ignoring roles",
      "By the order in which roles were assigned"
    ],
    correct: 1,
    explanation: "Dataverse security is accumulative: a user's access is the least restrictive (greatest) combination of all directly assigned security roles, roles inherited through teams, their business unit, and any records shared with them. Security roles are collections of privileges and access levels.",
    source: { title: "Security concepts in Microsoft Dataverse", url: "https://learn.microsoft.com/power-platform/admin/wp-security-cds" }
  },
  {
    id: 15, skill: 1, section: "1B", bullet: "dataverse-security",
    topic: "Column-Level Security",
    question: "A specific column holds sensitive PII that only certain users should read. Which Dataverse feature provides this control?",
    options: [
      "A business process flow",
      "Column-level (field) security using a Column Security Profile",
      "A rollup column",
      "A managed solution layer"
    ],
    correct: 1,
    explanation: "Column-level security restricts Create/Read/Update access to an individual column. You enable it on the column and grant access through a Column Security Profile associated with users or teams. The user must already have record-level access; column security further narrows what they can see.",
    source: { title: "Security concepts in Microsoft Dataverse — Column-level security", url: "https://learn.microsoft.com/power-platform/admin/wp-security-cds" }
  },

  // ============================================================
  // DOMAIN 2: Create intelligent applications (25–30%)
  // ============================================================
  {
    id: 16, skill: 2, section: "2A", bullet: "mda-forms-views",
    topic: "Model-Driven App Components",
    question: "Which set of components is added to a model-driven app using the app designer?",
    options: [
      "Screens, galleries, and text-input controls",
      "Tables and their related tables, forms, views, charts, dashboards, and business process flows",
      "Power BI datasets only",
      "Sensitivity labels and DLP policies"
    ],
    correct: 1,
    explanation: "Model-driven app components include tables (and related tables), forms, columns, views, charts, dashboards, and business process flows, all assembled in the app designer. Screens, galleries, and text-input controls are canvas-app concepts.",
    source: { title: "What are model-driven apps in Power Apps?", url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/model-driven-app-overview" }
  },
  {
    id: 17, skill: 2, section: "2A", bullet: "mda-forms-views",
    topic: "Adding Forms to an App",
    question: "In the model-driven app designer, if no forms are selected for a table, what happens at runtime?",
    options: [
      "The app fails to open",
      "All forms for that table are displayed to users",
      "Only the classic form is shown",
      "The table is removed from the app"
    ],
    correct: 1,
    explanation: "If none of the forms for a table are selected in the app designer, all forms for that table are displayed to users (the same applies to views and charts). However, each table must have at least one active form for the app to run.",
    source: { title: "Add or edit model-driven app components in the app designer", url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-edit-app-components" }
  },
  {
    id: 18, skill: 2, section: "2A", bullet: "generative-pages",
    topic: "Generative Pages",
    question: "How does a maker create a generative page in a model-driven app?",
    options: [
      "By writing C# plug-in code",
      "By selecting Add a page > Describe a page and describing the page in natural language, optionally linking Dataverse tables",
      "By importing an Excel file",
      "By configuring a DLP policy"
    ],
    correct: 1,
    explanation: "In the app designer you select Add a page > Describe a page, then describe the page in natural language and link up to six Dataverse tables. The app agent generates the layout and React code, and you refine it conversationally.",
    source: { title: "Generate a page using natural language", url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages" }
  },
  {
    id: 19, skill: 2, section: "2A", bullet: "generative-pages",
    topic: "Generative Page Data",
    question: "When building a generative page, how many Dataverse tables can a maker link to it?",
    options: [
      "Exactly one",
      "Up to six",
      "Up to fifty",
      "Unlimited"
    ],
    correct: 1,
    explanation: "When creating a generative page you can link up to six Dataverse tables via Add data > Add table. The agent uses those tables (and optionally attached images) to generate the page experience and logic.",
    source: { title: "Generate a page using natural language — Add data", url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages" }
  },
  {
    id: 20, skill: 2, section: "2A", bullet: "charts-dashboards",
    topic: "Dashboards",
    question: "What is a key limit of a model-driven app dashboard?",
    options: [
      "It can present data from up to six charts, grids, IFrames, or web resources at once",
      "It can only display one chart",
      "It cannot include any views",
      "It can only be used in canvas apps"
    ],
    correct: 0,
    explanation: "A model-driven dashboard acts as a business-intelligence snapshot and can simultaneously present data from up to six charts, grids, IFrames, or web resources. Charts update automatically as users filter the underlying grid data.",
    source: { title: "Customize visualizations and dashboards", url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/customize-visualizations-dashboards" }
  },
  {
    id: 21, skill: 2, section: "2A", bullet: "charts-dashboards",
    topic: "Charts in Model-Driven Apps",
    question: "How do charts behave relative to the grid (view) they are shown alongside in a model-driven app?",
    options: [
      "They are static images that must be refreshed manually",
      "They are integrated with the grid and update automatically to reflect filtering applied to the grid data",
      "They can only show data from a different table than the grid",
      "They require Power BI Premium"
    ],
    correct: 1,
    explanation: "Charts in model-driven apps are integrated with the grid and display data in context. They update automatically to reflect filtering done on the grid data, and drilling into the chart updates the corresponding grid.",
    source: { title: "Customize visualizations and dashboards", url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/customize-visualizations-dashboards" }
  },
  {
    id: 22, skill: 2, section: "2B", bullet: "canvas-from-data",
    topic: "Create Canvas App from Data",
    question: "A maker wants to quickly generate a lightweight responsive canvas app from an existing Dataverse table. Which option should they choose on the Power Apps home page?",
    options: [
      "Start with data > Dataverse, select a table, then Create app",
      "Create > Blank app > Tablet",
      "Import a managed solution",
      "Add a business process flow"
    ],
    correct: 0,
    explanation: "The Start with data > Dataverse path lets you select an existing table and select Create app, generating a single-page gallery (responsive) app connected to that table. A blank app gives full layout control but isn't generated from data.",
    source: { title: "Create a canvas app using Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/data-platform-create-app-scratch" }
  },
  {
    id: 23, skill: 2, section: "2B", bullet: "canvas-from-data",
    topic: "Generated Canvas App Screens",
    question: "When Power Apps generates a canvas app from a Dataverse table, which three screens does it create?",
    options: [
      "Login, Home, and Logout screens",
      "Browse, Detail, and Edit screens",
      "Chart, Dashboard, and Report screens",
      "Trigger, Action, and Condition screens"
    ],
    correct: 1,
    explanation: "A generated canvas app includes a Browse screen (search/sort/select records), a Detail screen (read-only record details), and an Edit screen (form to create or edit records).",
    source: { title: "How to create a canvas app connected to Dataverse from scratch", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/how-to/build-connected-dataverse" }
  },
  {
    id: 24, skill: 2, section: "2B", bullet: "canvas-from-data",
    topic: "Accessibility Checker",
    question: "The canvas app Accessibility checker flags that an interactive control has its accessible-label property empty. How is this issue classified?",
    options: [
      "Tip",
      "Warning",
      "Error",
      "Information"
    ],
    correct: 2,
    explanation: "A missing accessible label on an interactive control is classified as an Error, because it makes the app difficult or impossible to use for people who can't see the screen. Warnings and Tips are lower-severity classifications.",
    source: { title: "Review a canvas app for accessibility in Power Apps", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker" }
  },
  {
    id: 25, skill: 2, section: "2B", bullet: "reusable-components",
    topic: "Named Formulas",
    question: "Why is replacing variable/collection initialization in App.OnStart with named formulas in App.Formulas recommended for performance?",
    options: [
      "Named formulas run a flow on every keystroke",
      "Each named formula is independent and evaluated only when its value is needed, so the app and Studio load faster",
      "Named formulas disable error checking",
      "Named formulas require a premium connector"
    ],
    correct: 1,
    explanation: "Named formulas in App.Formulas are independent and evaluated only when their value is needed, so Power Apps Studio can analyze them separately and the first screen displays immediately. Microsoft reports load-time drops of up to 80% from this change. Named formulas are immutable, so use Set for mutable state.",
    source: { title: "Build large and complex canvas apps — App.Formulas", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/working-with-large-apps" }
  },
  {
    id: 26, skill: 2, section: "2B", bullet: "reusable-components",
    topic: "User-Defined Functions",
    question: "Where are user-defined functions (UDFs) defined in a canvas app?",
    options: [
      "In the OnStart property of the first screen",
      "In the App.Formulas property, using the FunctionName(Param:Type):OutputType = Formula syntax",
      "In a separate Power Automate flow",
      "In the Dataverse table designer"
    ],
    correct: 1,
    explanation: "User-defined functions are defined alongside named formulas in the App.Formulas property using the syntax FunctionName(Parameter:DataType):OutputDataType = Formula. They let makers create reusable custom functions with parameters.",
    source: { title: "Code optimization — User defined functions", url: "https://learn.microsoft.com/power-apps/guidance/coding-guidelines/code-optimization" }
  },
  {
    id: 27, skill: 2, section: "2B", bullet: "reusable-components",
    topic: "Component Libraries",
    question: "What is the recommended way to reuse the same canvas component across multiple apps in an environment?",
    options: [
      "Copy and paste the control between apps",
      "Use a component library, which maintains dependencies and notifies makers of updates",
      "Re-create the component in each app",
      "Export the app as a managed solution every time"
    ],
    correct: 1,
    explanation: "Component libraries are the recommended way to reuse components across apps. A consuming app maintains a dependency on the library component and the maker is alerted when updates are available. The older import-components-between-apps feature is retired.",
    source: { title: "Component library", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/component-library" }
  },
  {
    id: 28, skill: 2, section: "2B", bullet: "variables-collections",
    topic: "Global Error Handling",
    question: "Which canvas app property gives a global opportunity to intercept and handle an error anywhere in the app before the default error banner is shown?",
    options: [
      "App.OnStart",
      "App.OnError",
      "Screen.OnVisible",
      "Button.OnSelect"
    ],
    correct: 1,
    explanation: "App.OnError is evaluated whenever any formula in the app produces an error, providing a global place to intercept the error banner, log with Trace, or rethrow with the Error function. It controls error reporting only; it can't replace the error value the way IfError can.",
    source: { title: "App object in Power Apps — OnError property", url: "https://learn.microsoft.com/power-platform/power-fx/reference/object-app" }
  },
  {
    id: 29, skill: 2, section: "2B", bullet: "variables-collections",
    topic: "Variables vs Named Formulas",
    question: "A value must change while the app is running (for example, a counter the user updates). Which approach is appropriate?",
    options: [
      "A named formula, because named formulas are mutable",
      "A variable set with Set(), because named formulas are immutable",
      "A rollup column",
      "A component library"
    ],
    correct: 1,
    explanation: "Named formulas are immutable and can't be changed with Set. For mutable state that changes during the session, use a variable with the Set function. Named formulas are best for static values that don't change.",
    source: { title: "Build large and complex canvas apps — App.Formulas vs App.OnStart", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/working-with-large-apps" }
  },
  {
    id: 30, skill: 2, section: "2B", bullet: "testing-monitor",
    topic: "Monitor",
    question: "What is Power Apps Monitor primarily used for?",
    options: [
      "Assigning security roles to users",
      "Streaming and inspecting session events (data operations, control evaluations, errors, timing) to debug and diagnose performance",
      "Designing dashboards",
      "Creating business process flows"
    ],
    correct: 1,
    explanation: "Monitor is a debugging tool that streams events from a session — operations like Select, Load Screen, Navigate, GetRows, with results, durations, and HTTP status codes (e.g., 404, 429) — to diagnose and troubleshoot performance and behavior issues in Studio or in a published app.",
    source: { title: "Monitoring and testing — Monitor", url: "https://learn.microsoft.com/power-apps/guidance/coding-guidelines/monitoring-testing" }
  },
  {
    id: 31, skill: 2, section: "2B", bullet: "testing-monitor",
    topic: "Monitor on Published Apps",
    question: "To see the underlying formula for an event in Monitor while monitoring a published app, what must the maker do?",
    options: [
      "Nothing — formulas always show by default",
      "Enable the 'Debug published app' option in the app settings",
      "Convert the app to a model-driven app",
      "Remove all named formulas"
    ],
    correct: 1,
    explanation: "By default the formula for an event is only shown during authoring. To show formulas for a published app in Monitor, the maker must turn on the 'Debug published app' option under File > Settings.",
    source: { title: "Monitoring and testing — Monitor", url: "https://learn.microsoft.com/power-apps/guidance/coding-guidelines/monitoring-testing" }
  },
  {
    id: 32, skill: 2, section: "2B", bullet: "copilot-from-canvas",
    topic: "Agent Builder from an App",
    question: "Agent builder in Power Apps lets a maker create an AI agent from an existing canvas app. What does it use to generate the agent's step-by-step process, knowledge, and triggers?",
    options: [
      "A Power BI dataset",
      "The app's metadata combined with the desired agent goal",
      "A Dataverse rollup column",
      "An imported managed solution"
    ],
    correct: 1,
    explanation: "Agent builder uses the app's metadata together with the desired agent goal to generate a step-by-step process, extract knowledge, and identify triggers, combining them with skills extracted from the app. The maker can then edit, test, and publish the agent in Microsoft Copilot Studio.",
    source: { title: "Build an AI agent to automate your business process (agent builder)", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/agent-builder" }
  },
  {
    id: 33, skill: 2, section: "2B", bullet: "copilot-from-canvas",
    topic: "Create Agent from App",
    question: "Where can a maker continue to edit, test, and publish an agent that was generated from a Power Apps canvas app?",
    options: [
      "Microsoft Copilot Studio",
      "The Exchange admin center",
      "Power BI Desktop",
      "Microsoft Purview"
    ],
    correct: 0,
    explanation: "After creating an agent from an app with agent builder, makers edit, test, and publish it in Microsoft Copilot Studio, which provides the full agent authoring and management experience.",
    source: { title: "Build an AI agent to automate your business process (agent builder)", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/agent-builder" }
  },

  // ============================================================
  // DOMAIN 3: Build business application logic and automation (40–45%)
  // ============================================================
  {
    id: 34, skill: 3, section: "3A", bullet: "flow-triggers-conditions",
    topic: "Trigger Conditions",
    question: "An invoice flow currently runs on every email received, but should only run for approved invoices. What is the most efficient way to prevent unnecessary runs?",
    options: [
      "Add a Condition action after the trigger",
      "Add a trigger condition so the flow only fires when the invoice is approved",
      "Increase the timeout",
      "Switch to a manual trigger"
    ],
    correct: 1,
    explanation: "A trigger condition is evaluated before the flow runs, so the flow only fires when the condition is met (e.g., invoice approved). Unlike a Condition action — which runs after the flow already triggered and counts as an API request — trigger conditions avoid unnecessary runs and reduce request consumption.",
    source: { title: "Customize your triggers with conditions", url: "https://learn.microsoft.com/power-automate/customize-triggers" }
  },
  {
    id: 35, skill: 3, section: "3A", bullet: "flow-triggers-conditions",
    topic: "Dataverse Trigger Scope",
    question: "In the Dataverse 'When a row is added, modified, or deleted' trigger, which scope causes the flow to run when ANY user in the organization performs the action?",
    options: [
      "User",
      "Business Unit",
      "Parent: Child business unit",
      "Organization"
    ],
    correct: 3,
    explanation: "The Organization scope triggers the flow when the action is taken by anyone within the organization or database. User scope triggers only for rows the flow owner owns; Business Unit and Parent:Child limit to a business unit and its children.",
    source: { title: "Create a cloud flow with Microsoft Dataverse — scopes", url: "https://learn.microsoft.com/power-automate/connection-cds" }
  },
  {
    id: 36, skill: 3, section: "3A", bullet: "flow-triggers-conditions",
    topic: "Filtering Trigger Runs",
    question: "Which technique reduces unnecessary Dataverse 'modified' trigger runs so the flow only fires when specific columns change?",
    options: [
      "Use filter (select) columns on the trigger",
      "Add more approvers",
      "Disable the connector",
      "Use a longer timeout"
    ],
    correct: 0,
    explanation: "Triggers that run when a row is modified can use filtering (select) columns so the flow only runs when one of the defined columns is modified, preventing the flow from running unnecessarily.",
    source: { title: "Create a cloud flow with Microsoft Dataverse — filter columns", url: "https://learn.microsoft.com/power-automate/connection-cds" }
  },
  {
    id: 37, skill: 3, section: "3A", bullet: "flow-approvals",
    topic: "Approval Types",
    question: "A flow uses 'Start and wait for an approval' with the 'Approve/Reject - First to respond' type. When do the actions after the approval step run?",
    options: [
      "Only after every assigned approver responds",
      "After any one approver approves or rejects",
      "After a fixed 24-hour wait",
      "Never — this type doesn't wait"
    ],
    correct: 1,
    explanation: "With 'Approve/Reject - First to respond', approval or rejection by any single approver completes the request, and the actions following the Start and wait for an approval action run after that first response. 'Everyone must approve' instead waits for all approvers.",
    source: { title: "Get started with approvals — Approvals actions", url: "https://learn.microsoft.com/power-automate/get-started-approvals" }
  },
  {
    id: 38, skill: 3, section: "3A", bullet: "flow-approvals",
    topic: "Approval Action",
    question: "Which approval action lets a flow pause and wait for the approvers' response before continuing the run?",
    options: [
      "Create an approval",
      "Start and wait for an approval",
      "Get response details",
      "Post a message"
    ],
    correct: 1,
    explanation: "The 'Start and wait for an approval' action starts the approval and waits for the approvers' response before the flow continues. It's the quickest way to add an approval and capture the response in subsequent conditions.",
    source: { title: "Get started with approvals", url: "https://learn.microsoft.com/power-automate/get-started-approvals" }
  },
  {
    id: 39, skill: 3, section: "3A", bullet: "flow-approvals",
    topic: "Condition After Approval",
    question: "After an approval action, how does a flow typically branch based on the outcome?",
    options: [
      "By adding a Condition that checks whether the Approval response equals 'Approve' and putting actions in the If yes / If no branches",
      "By deleting the trigger",
      "By adding a rollup column",
      "By changing the environment type"
    ],
    correct: 0,
    explanation: "A Condition action checks the approval Response (for example, is equal to 'Approve'); the If yes branch handles approved items and the If no branch handles rejected ones. Note approval response values are case sensitive.",
    source: { title: "Create and test an approval workflow with Power Automate", url: "https://learn.microsoft.com/power-automate/modern-approvals" }
  },
  {
    id: 40, skill: 3, section: "3A", bullet: "flow-test-troubleshoot",
    topic: "Testing a Flow",
    question: "A maker wants to validate a flow without waiting for a real event. What is the correct approach in the designer?",
    options: [
      "Delete and re-create the flow",
      "Select Test, choose Manually / 'I'll perform the trigger action', then fire the trigger to watch the run",
      "Export the flow as a solution",
      "Disable the connector"
    ],
    correct: 1,
    explanation: "In the designer you select Test, choose to run it manually ('I'll perform the trigger action'), then perform the trigger action; the flow runs in test mode so you can monitor each step. Run history then shows success/failure of each action.",
    source: { title: "Create approval flows with attachments — Test your flow", url: "https://learn.microsoft.com/power-automate/approval-attachments" }
  },
  {
    id: 41, skill: 3, section: "3B", bullet: "build-prompts",
    topic: "Build a Prompt",
    question: "Where in Power Apps or Power Automate does a maker go to build a custom AI prompt?",
    options: [
      "AI hub > Prompts > Build your own prompt",
      "Settings > Users",
      "Solutions > Import",
      "Tables > New column"
    ],
    correct: 0,
    explanation: "In Power Apps or Power Automate, makers select AI hub > Prompts > Build your own prompt to open prompt builder, where they can start from a template or blank, define inputs, choose a model, and test the prompt before using it.",
    source: { title: "Create a prompt", url: "https://learn.microsoft.com/microsoft-copilot-studio/create-custom-prompt" }
  },
  {
    id: 42, skill: 3, section: "3B", bullet: "build-prompts",
    topic: "Prompt Inputs",
    question: "What is the purpose of defining inputs on a custom prompt in prompt builder?",
    options: [
      "To pass dynamic values to the prompt at runtime",
      "To assign security roles",
      "To set the environment region",
      "To create a rollup column"
    ],
    correct: 0,
    explanation: "Inputs (text, image, or document) let you incorporate dynamic runtime content into a prompt. You add an input by typing / or selecting Add content, then provide a sample value to test, so the prompt can receive different values each time it's run.",
    source: { title: "Create a prompt — Configure and test your prompt", url: "https://learn.microsoft.com/microsoft-copilot-studio/create-custom-prompt" }
  },
  {
    id: 43, skill: 3, section: "3B", bullet: "consume-prompts",
    topic: "Consume a Prompt in Power Apps",
    question: "After adding a custom prompt as a data source in a canvas app, how is it invoked in a formula?",
    options: [
      "By calling its name with the .Predict function, passing required arguments",
      "By adding it to a business process flow",
      "By creating a rollup column",
      "By importing it as a managed solution"
    ],
    correct: 0,
    explanation: "A custom prompt is added from the Add data menu and used as a Power Fx function by calling .Predict on its name and passing arguments — for example Set(result, 'Task identifier'.Predict(TextInput1.Text)); result.text returns the generated text.",
    source: { title: "Use your prompt in Power Apps", url: "https://learn.microsoft.com/ai-builder/use-a-custom-prompt-in-app" }
  },
  {
    id: 44, skill: 3, section: "3B", bullet: "consume-prompts",
    topic: "Consume a Prompt in a Flow",
    question: "Which Power Automate action runs an existing AI Builder prompt inside a cloud flow (renamed from 'Create text with GPT using a prompt' in May 2025)?",
    options: [
      "Run a prompt",
      "Start and wait for an approval",
      "Compose",
      "Get a row by ID"
    ],
    correct: 0,
    explanation: "The 'Run a prompt' action (formerly 'Create text with GPT using a prompt') adds a prompt to a flow so it can generate text inside an automated process. You select the prompt and fill its inputs with content from previous steps.",
    source: { title: "Use your prompt in Power Automate", url: "https://learn.microsoft.com/ai-builder/use-a-custom-prompt-in-flow" }
  },
  {
    id: 45, skill: 3, section: "3B", bullet: "add-knowledge",
    topic: "Add Knowledge to a Prompt",
    question: "A prompt needs to answer using the organization's own business data instead of only the model's training data. Which technique do you use?",
    options: [
      "Add knowledge (Retrieval Augmented Generation) by selecting a data source such as Dataverse columns",
      "Increase the model temperature to 1",
      "Add a rollup column",
      "Convert the prompt to a business rule"
    ],
    correct: 0,
    explanation: "Adding knowledge implements Retrieval Augmented Generation (RAG): you select a data source object (e.g., Dataverse columns) under the Knowledge section to augment the model with business-specific data, and you can filter the retrieved knowledge by attribute or input.",
    source: { title: "Add knowledge to your prompt", url: "https://learn.microsoft.com/microsoft-copilot-studio/use-your-own-prompt-data" }
  },
  {
    id: 46, skill: 3, section: "3B", bullet: "consume-ai-model",
    topic: "Prebuilt AI Models",
    question: "AI Builder prebuilt prompts and models can be consumed in which of the following?",
    options: [
      "Power Apps, Power Automate flows, and Dataverse low-code plug-ins",
      "Only in Excel",
      "Only in SharePoint pages",
      "Only in the Exchange admin center"
    ],
    correct: 0,
    explanation: "Prebuilt prompts and AI Builder models can be consumed in Power Apps (like custom prompts), in Power Automate flows, and in Dataverse low-code plug-ins (for example, using AISummarize to populate a column). AI Builder is integrated directly into Power Apps and Power Automate.",
    source: { title: "Get started with prebuilt prompts", url: "https://learn.microsoft.com/ai-builder/prebuilt-prompts" }
  },
  {
    id: 47, skill: 3, section: "3B", bullet: "consume-ai-model",
    topic: "AI Builder in Power Automate",
    question: "From where in Power Automate does a maker build AI Builder models to add intelligence to a flow?",
    options: [
      "The AI models option in the left navigation pane",
      "The Exchange admin center",
      "The Dataverse view designer",
      "Power BI Desktop"
    ],
    correct: 0,
    explanation: "In Power Automate, makers build AI Builder models using the AI models option in the left navigation pane, then use those models in flows to add intelligence such as prediction, extraction, or classification.",
    source: { title: "Use AI Builder in Power Automate", url: "https://learn.microsoft.com/power-automate/use-ai-builder" }
  },
  {
    id: 48, skill: 3, section: "3C", bullet: "business-rules",
    topic: "Business Rules Scope",
    question: "A business rule is defined for a Dataverse table (not a specific form). Where does its logic apply?",
    options: [
      "Only in the classic web client",
      "To all the table's forms and at the server level, in both canvas and model-driven apps that use the table",
      "Only inside cloud flows",
      "Only in Power BI"
    ],
    correct: 1,
    explanation: "Business rules defined for a table apply to all the table's forms and at the server level, and they apply to both canvas apps and model-driven apps if the table is used in the app. Business rules let you apply logic and validations without writing code.",
    source: { title: "Apply business logic in Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/maker/data-platform/processes" }
  },
  {
    id: 49, skill: 3, section: "3C", bullet: "business-process-flows",
    topic: "Business Process Flow Limits",
    question: "What are the structural limits for a business process flow in Dataverse?",
    options: [
      "Up to 30 stages, with up to 30 steps per stage",
      "Exactly 1 stage and 1 step",
      "Unlimited stages and steps",
      "Up to 5 stages only"
    ],
    correct: 0,
    explanation: "A business process flow can have up to 30 stages, and each stage can have up to 30 steps. There can be no more than 10 activated business process flows per table, and a multi-table process can span no more than five tables.",
    source: { title: "Create or edit a business process flow", url: "https://learn.microsoft.com/dynamics365/customerengagement/on-premises/customize/create-business-process-flow" }
  },
  {
    id: 50, skill: 3, section: "3C", bullet: "business-process-flows",
    topic: "Activating a Business Process Flow",
    question: "Before users can use a newly created business process flow, what must the maker do?",
    options: [
      "Nothing — drafts are immediately usable",
      "Activate it (and set security roles); while it remains a draft, people can't use it",
      "Convert it to a canvas app",
      "Add it to a Power BI dashboard"
    ],
    correct: 1,
    explanation: "As long as a business process flow is a draft, people can't use it. To make it available you must order it, enable security roles, and Activate it. You can also edit security roles to control who can create/read/update the process instance.",
    source: { title: "Create or edit a business process flow", url: "https://learn.microsoft.com/dynamics365/customerengagement/on-premises/customize/create-business-process-flow" }
  },
  {
    id: 51, skill: 3, section: "3C", bullet: "calc-rollup-formula",
    topic: "Rollup Columns",
    question: "Which aggregate functions can a Dataverse rollup column use over related rows?",
    options: [
      "SUM, COUNT, MIN, MAX, AVG",
      "CONCAT and SPLIT only",
      "Only SUM",
      "Custom JavaScript functions"
    ],
    correct: 0,
    explanation: "Rollup columns aggregate values over related rows using SUM, COUNT, MIN, MAX, and AVG. They support filters, integrate into forms/views/charts, and are recalculated by a recurring system job (default minimum recurrence one hour) or via the online Recalculate button.",
    source: { title: "Define rollup columns that aggregate values", url: "https://learn.microsoft.com/power-apps/maker/data-platform/define-rollup-fields" }
  },
  {
    id: 52, skill: 3, section: "3C", bullet: "calc-rollup-formula",
    topic: "Calculated vs Rollup Columns",
    question: "What best distinguishes a calculated column from a rollup column in Dataverse?",
    options: [
      "A calculated column derives its value from a formula on the current row (computed when used); a rollup column aggregates values from related rows via a periodic job",
      "They are identical",
      "Only rollup columns can use a formula",
      "Calculated columns aggregate related rows; rollup columns don't"
    ],
    correct: 0,
    explanation: "A calculated column assigns a value from a formula based on columns in the same (or related) row and is evaluated when used. A rollup column aggregates (SUM/COUNT/etc.) values across related rows and is computed by a recurring background job, not in real time.",
    source: { title: "Create and edit columns in Dataverse — Calculated or Rollup", url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal" }
  },
  {
    id: 53, skill: 3, section: "3C", bullet: "calc-rollup-formula",
    topic: "Rollup Restrictions",
    question: "Which statement about Dataverse rollup columns is correct?",
    options: [
      "A rollup can aggregate over many-to-many (N:N) relationships",
      "A rollup can only aggregate over one-to-many (1:N) related rows and can't reference another rollup column",
      "A rollup updates instantly on every related-row change",
      "A rollup can trigger a workflow when it updates"
    ],
    correct: 1,
    explanation: "A rollup can only be done over 1:N related rows (not N:N), and a rollup formula can't reference another rollup column or a complex calculated column. Rollups don't raise events, so they can't trigger workflows, and they update via a periodic job rather than instantly.",
    source: { title: "Define rollup columns — considerations", url: "https://learn.microsoft.com/power-apps/maker/data-platform/define-rollup-fields" }
  },
  {
    id: 54, skill: 3, section: "3A", bullet: "flow-triggers-conditions",
    topic: "Cloud Flow Triggers",
    question: "Which trigger type starts a cloud flow automatically in response to an event such as a new SharePoint item or a new Dataverse row?",
    options: [
      "An automated cloud flow trigger (e.g., 'When an item is created')",
      "A manual button trigger only",
      "A business rule",
      "A rollup column"
    ],
    correct: 0,
    explanation: "An automated cloud flow uses an event-based trigger such as 'When an item is created' (SharePoint) or 'When a row is added, modified, or deleted' (Dataverse). The trigger defines when the flow runs; subsequent actions perform the work.",
    source: { title: "Wait for approval in Power Automate — trigger the flow", url: "https://learn.microsoft.com/power-automate/wait-for-approvals" }
  },
  {
    id: 55, skill: 3, section: "3B", bullet: "build-prompts",
    topic: "Model & Temperature Settings",
    question: "In prompt builder, what does adjusting the model's temperature setting control?",
    options: [
      "The randomness and creativity of the generated text",
      "The number of approvers required",
      "The Dataverse row-level security",
      "How many tables the prompt can reference"
    ],
    correct: 0,
    explanation: "When configuring a prompt you can select the chat model and settings such as temperature, which controls the randomness and creativity of the generated text. Lower temperature gives more deterministic output; higher temperature gives more varied output.",
    source: { title: "Use prompts to make your agent perform tasks — prompt editor settings", url: "https://learn.microsoft.com/microsoft-copilot-studio/nlu-prompt-node" }
  },
  {
    id: 56, skill: 3, section: "3C", bullet: "business-rules",
    topic: "Business Rules vs Code",
    question: "What is a primary advantage of using business rules in Dataverse?",
    options: [
      "They apply logic and validations without writing code or creating plug-ins",
      "They replace the need for any security roles",
      "They can only run inside Power BI",
      "They require a pro developer to deploy"
    ],
    correct: 0,
    explanation: "Business rules and recommendations let you apply logic and validations without writing code or creating plug-ins, providing a simple interface to implement and maintain commonly used, fast-changing rules that apply consistently across the table.",
    source: { title: "Apply business logic in Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/maker/data-platform/processes" }
  }
];
