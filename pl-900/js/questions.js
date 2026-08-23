/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// PL-900 Power Platform Fundamentals - Practice Exam Questions
// COURSE-DERIVED: every question is written from the text of a specific Microsoft Learn PL-900T00
// course unit and its `source` links to that unit (module root where a section spans several units).
// Mapped to the official PL-900 study guide (Skills measured as of June 20, 2025). correct = 0-based.

const QUESTIONS = [
  // ============================================================
  // DOMAIN 1: Business value of Microsoft Power Platform (15–20%)
  // ============================================================
  {
    id: 1, skill: 1, section: "1A", bullet: "val-power-apps",
    topic: "Value of Power Apps",
    question: "What is the primary business value of Microsoft Power Apps?",
    options: [
      "It provides a rapid low-code/no-code environment to build custom web and mobile business apps",
      "It is a relational database engine",
      "It is only used to create dashboards and reports",
      "It hosts external-facing public websites"
    ],
    correct: 0,
    explanation: "Power Apps provides a rapid low-code development environment for building custom apps (web and mobile) that meet business needs, so business users and professional developers alike can build apps without extensive coding.",
    source: { title: "Explore Microsoft Power Platform (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/2-explore-microsoft-power-platform" }
  },
  {
    id: 2, skill: 1, section: "1A", bullet: "val-power-automate",
    topic: "Value of Power Automate",
    question: "What does Microsoft Power Automate help organizations do?",
    options: [
      "Build external websites",
      "Create automated workflows between apps and services to automate repetitive business processes",
      "Store relational data",
      "Visualize data in dashboards"
    ],
    correct: 1,
    explanation: "Power Automate lets users create automated workflows between applications and services, automating repetitive processes such as communication, data collection, and approvals — for users of all technical skill levels.",
    source: { title: "Explore Microsoft Power Platform (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/2-explore-microsoft-power-platform" }
  },
  {
    id: 3, skill: 1, section: "1A", bullet: "val-power-pages",
    topic: "Value of Power Pages",
    question: "Which Power Platform service is a low-code SaaS platform for creating secure, external-facing business websites?",
    options: ["Power Apps", "Power Automate", "Power Pages", "Dataverse"],
    correct: 2,
    explanation: "Power Pages is a secure, enterprise-grade, low-code SaaS platform for creating, hosting, and managing modern external-facing business websites, using the same Dataverse business data as other Power Platform components.",
    source: { title: "Explore Microsoft Power Platform (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/2-explore-microsoft-power-platform" }
  },
  {
    id: 4, skill: 1, section: "1A", bullet: "val-connectors",
    topic: "Value of Connectors",
    question: "What is the role of connectors in Power Platform?",
    options: [
      "They store data in tables",
      "They act as bridges that link apps, data, and services — with 1,400+ prebuilt connectors used by Power Apps and Power Automate",
      "They are used only to build websites",
      "They replace the need for Dataverse"
    ],
    correct: 1,
    explanation: "Connectors link apps, data, and devices in the cloud — bridges for information and commands. There are more than 1,400 prebuilt connectors (Salesforce, Office 365, Dropbox, Google, etc.) used by Power Apps, Power Automate flows, and logic apps.",
    source: { title: "Describe the value of connectors (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/4-describe-value-connectors-integrate-services-data" }
  },
  {
    id: 5, skill: 1, section: "1A", bullet: "val-dataverse",
    topic: "Value of Dataverse",
    question: "What is the business value of Microsoft Dataverse in Power Platform?",
    options: [
      "It is a charting tool",
      "It is a scalable, secure data service and app platform that is the foundation enabling Power Platform components to work together with a common data model",
      "It only stores files",
      "It is a desktop automation tool"
    ],
    correct: 1,
    explanation: "Dataverse is a scalable data service and app platform that lets users securely store and manage data from multiple sources using a common data model — the foundation that enables Power Platform components to work together.",
    source: { title: "Describe the value of Microsoft Dataverse (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/5-describe-value-microsoft-dataverse-organize-business-data" }
  },
  {
    id: 6, skill: 1, section: "1A", bullet: "val-copilots",
    topic: "Value of Copilots & Copilot Studio",
    question: "What is Microsoft Copilot Studio in the Power Platform?",
    options: [
      "A relational database",
      "A low-code tool for building copilots/agents and configuring generative AI, including customizing Microsoft 365 Copilot and building standalone agents",
      "A data visualization service",
      "A connector for SharePoint"
    ],
    correct: 1,
    explanation: "Microsoft Copilot Studio is a low-code tool that combines conversational capabilities (custom GPTs, generative AI plugins, and manual topics) to customize Microsoft 365 Copilot and build standalone agents — part of Power Platform's generative AI value.",
    source: { title: "Describe the value of Copilots and generative AI (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/8-describe-value-copilots-generative-ai-features-microsoft-power-platform" }
  },
  {
    id: 7, skill: 1, section: "1A", bullet: "val-power-fx",
    topic: "Value of Power Fx",
    question: "What is Power Fx?",
    options: [
      "A cloud database",
      "The low-code programming language used across Power Platform, using Excel-like formulas",
      "A type of connector",
      "A Power Automate trigger"
    ],
    correct: 1,
    explanation: "Power Fx is the low-code programming language used across Power Platform. It is easy to learn and uses Excel-like formulas to create application logic.",
    source: { title: "Describe the value of Power Fx (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/6-describe-value-power-fx-low-code-solution" }
  },
  {
    id: 8, skill: 1, section: "1B", bullet: "extend-m365-teams",
    topic: "Power Platform with Microsoft 365 / Teams",
    question: "How does Power Platform extend Microsoft 365, including Teams?",
    options: [
      "It replaces Microsoft 365 entirely",
      "It integrates with Microsoft 365 apps and Teams — e.g., embedding apps and automating processes across Teams, Outlook, and SharePoint — to deliver solutions where users already work",
      "It only works as a standalone product with no Microsoft 365 integration",
      "It can only connect to non-Microsoft services"
    ],
    correct: 1,
    explanation: "Power Platform business solutions work together with Microsoft 365 apps and services, including Microsoft Teams — for example, building and embedding apps in Teams and automating cross-app processes (Outlook, SharePoint) — so solutions reach users where they already work.",
    source: { title: "Describe how Power Platform services work together (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/7-describe-how-power-platform-services-work-together" }
  },
  {
    id: 9, skill: 1, section: "1B", bullet: "services-work-together",
    topic: "Services Working Together",
    question: "In an employee-onboarding solution, how might Power Platform services work together?",
    options: [
      "Only Power BI is used end to end",
      "Power Apps provides the app, Power Automate handles notifications/approvals, and Dataverse securely stores the employee data",
      "Each service runs in isolation with no shared data",
      "Power Pages stores all the relational data"
    ],
    correct: 1,
    explanation: "Power Platform is an interconnected ecosystem. For onboarding, a Power Apps app lets new hires upload documents and track progress, Power Automate handles notifications and approvals, and Dataverse securely stores the data — with Power BI for insights.",
    source: { title: "Describe how Power Platform services work together (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/7-describe-how-power-platform-services-work-together" }
  },

  // ============================================================
  // DOMAIN 2: Manage the Power Platform environment (15–20%)
  // ============================================================
  {
    id: 10, skill: 2, section: "2A", bullet: "dv-vs-traditional",
    topic: "Dataverse vs Traditional Databases",
    question: "Which is an advantage of Microsoft Dataverse over a traditional database?",
    options: [
      "It requires more manual coding to secure",
      "It provides built-in features out of the box — rich metadata, defined relationships, integrated business logic, and role-based security",
      "It cannot store relational data",
      "It only supports a single table"
    ],
    correct: 1,
    explanation: "While both use tables, Dataverse enhances them with built-in rich metadata, defined relationships, integrated business logic, and out-of-the-box security (role-based, row-level, column-level encryption) — and supports low-code/no-code development, unlike traditional databases that need manual setup and coding.",
    source: { title: "Differences between traditional databases and Dataverse (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-dataverse/2-describe-differences-between-traditional-databases-microsoft-dataverse" }
  },
  {
    id: 11, skill: 2, section: "2A", bullet: "dv-tables-relationships",
    topic: "Dataverse Relationships",
    question: "In Dataverse, a single customer can have many orders. Which relationship type models this?",
    options: ["Many-to-many (N:N)", "One-to-many (1:N)", "One-to-one (1:1)", "No relationship is needed"],
    correct: 1,
    explanation: "A one-to-many (1:N) relationship lets a single row in the primary table relate to multiple rows in the related table (e.g., a customer with many orders), commonly used for parent-child associations. Many-to-many (N:N) uses an intersect table.",
    source: { title: "Tables, columns, and relationships in Dataverse (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-dataverse/3-describe-tables-columns-relationships-microsoft-dataverse" }
  },
  {
    id: 12, skill: 2, section: "2A", bullet: "dv-business-logic",
    topic: "Dataverse Business Logic",
    question: "Which Dataverse feature lets you validate data or automate actions directly at the data layer without writing code?",
    options: [
      "Business rules",
      "Power Pages themes",
      "Connectors",
      "Desktop flows"
    ],
    correct: 0,
    explanation: "Dataverse offers options for business logic — such as business rules — that enforce validation and automate actions at the data layer (applied across any app using the table), along with related components like keys, forms, views, and dashboards.",
    source: { title: "Options for business logic in Dataverse (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-dataverse/4-describe-options-business-logic-microsoft-dataverse" }
  },
  {
    id: 13, skill: 2, section: "2A", bullet: "dv-import-export",
    topic: "Importing & Exporting Data",
    question: "Which statement about getting data into Dataverse is correct?",
    options: [
      "Data can only be entered manually one row at a time",
      "Dataverse supports importing and exporting data (for example, from Excel/CSV and other sources)",
      "Dataverse cannot exchange data with other systems",
      "Only developers using code can import data"
    ],
    correct: 1,
    explanation: "Dataverse provides options for importing and exporting data — for example bringing data in from Excel/CSV and other sources and exporting it — so makers can populate and integrate tables without writing code.",
    source: { title: "Options for importing and exporting data (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-dataverse/6-describe-options-importing-exporting-data" }
  },
  {
    id: 14, skill: 2, section: "2B", bullet: "pp-security-model",
    topic: "Security Model — RBAC",
    question: "How does Power Platform control what actions a user can perform and what data they can access?",
    options: [
      "Through role-based access control (RBAC) using security roles at environment, app, and record levels",
      "By giving every user full administrator rights",
      "Only through Power Pages themes",
      "By disabling Microsoft Entra ID"
    ],
    correct: 0,
    explanation: "The Power Platform security model uses role-based access control (RBAC): administrators assign security roles that define allowed actions and data access at the environment, app, and record levels, following least-privilege access.",
    source: { title: "Describe the Power Platform security model (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-power-platform-administration-governance/2-describe-microsoft-power-platform-security-model" }
  },
  {
    id: 15, skill: 2, section: "2B", bullet: "pp-security-model",
    topic: "Data Loss Prevention (DLP)",
    question: "What do Data Loss Prevention (DLP) policies do in Power Platform?",
    options: [
      "Encrypt Power Pages themes",
      "Categorize connectors as business vs non-business and block data from flowing between the two groups",
      "Create model-driven apps",
      "Schedule cloud flows"
    ],
    correct: 1,
    explanation: "DLP policies categorize connectors into business and non-business groups and block data transfers between the groups, keeping sensitive data within trusted connectors. They can be applied at environment or tenant level.",
    source: { title: "Describe the Power Platform security model (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-power-platform-administration-governance/2-describe-microsoft-power-platform-security-model" }
  },
  {
    id: 16, skill: 2, section: "2B", bullet: "pp-environments",
    topic: "Environments",
    question: "What is a Power Platform environment?",
    options: [
      "A type of connector",
      "A container that holds an organization's apps, flows, and data, tied to a Microsoft Entra tenant and a geographic location",
      "A Power Fx formula",
      "A Power BI dashboard"
    ],
    correct: 1,
    explanation: "Environments are containers that hold business data, apps, and flows. Each is created under a Microsoft Entra tenant and tied to a geographic location, letting you separate resources by team, purpose (dev/test/prod), or region for security and compliance.",
    source: { title: "Describe Power Platform environments (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-power-platform-administration-governance/3-describe-environments" }
  },
  {
    id: 17, skill: 2, section: "2B", bullet: "pp-admin-centers",
    topic: "Admin Centers & Portals",
    question: "Where do administrators manage Power Platform environments, DLP policies, and tenant settings?",
    options: [
      "The Power Platform admin center",
      "Power Apps Studio only",
      "The Power Pages design studio",
      "Microsoft Word"
    ],
    correct: 0,
    explanation: "The Power Platform admin center is the primary portal where administrators manage environments, data policies (DLP), analytics, and other governance settings across the tenant.",
    source: { title: "Power Platform admin centers and portals (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-power-platform-administration-governance/4-describe-different-microsoft-power-platform-admin-centers-portals" }
  },
  {
    id: 18, skill: 2, section: "2B", bullet: "pp-privacy-accessibility",
    topic: "Data Privacy & Accessibility",
    question: "How does Power Platform support compliance and inclusive design?",
    options: [
      "It ignores regional regulations",
      "It supports data privacy (e.g., region-bound environments, governance) and accessibility guidelines so solutions are compliant and usable by everyone",
      "It only works in one country",
      "Accessibility is not a consideration in Power Platform"
    ],
    correct: 1,
    explanation: "Power Platform supports data privacy and accessibility guidelines — for example geographically bound environments to meet data-residency/compliance needs, governance via the Trust Center/compliance offerings, and accessibility guidance so apps are usable by everyone.",
    source: { title: "Data privacy and accessibility guidelines (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-power-platform-administration-governance/5-describe-power-platform-data-privacy-accessibility-guidelines" }
  },

  // ============================================================
  // DOMAIN 3: Power Apps (25–30%)
  // ============================================================
  {
    id: 19, skill: 3, section: "3A", bullet: "canvas-use-cases",
    topic: "Canvas App Use Cases",
    question: "Which scenario is best suited to a canvas app?",
    options: [
      "A field app with a custom, pixel-perfect UI that connects to multiple data sources and uses the device camera",
      "A back-office records-management app driven entirely by a Dataverse data model",
      "A relational database engine",
      "An external public website"
    ],
    correct: 0,
    explanation: "Canvas apps give you a custom, pixel-perfect UI, can connect to many data sources (Dataverse or not), are easily embeddable, and integrate with device features (like the camera) — ideal for task/screen-focused apps such as a field worker app.",
    source: { title: "Describe use cases of canvas apps (Training)", url: "https://learn.microsoft.com/training/modules/identify-basic-microsoft-power-apps-capabilities/3-describe-use-cases-canvas-apps" }
  },
  {
    id: 20, skill: 3, section: "3A", bullet: "model-driven-use-cases",
    topic: "Model-driven App Use Cases",
    question: "Which statement about model-driven apps is true?",
    options: [
      "They can be built on any data source without Dataverse",
      "They are built on top of Microsoft Dataverse and generate a responsive, consistent UI from the underlying data model",
      "They require pixel-by-pixel UI design for every screen",
      "They cannot use security roles"
    ],
    correct: 1,
    explanation: "Model-driven apps can only be built on top of Dataverse. The UI is largely generated from the data model and is responsive/consistent, with data-relationship navigation and security trimming — ideal for back-office, process-focused solutions.",
    source: { title: "Describe use cases of model-driven apps (Training)", url: "https://learn.microsoft.com/training/modules/identify-basic-microsoft-power-apps-capabilities/4-describe-use-cases-model-driven-apps" }
  },
  {
    id: 21, skill: 3, section: "3A", bullet: "model-driven-features",
    topic: "Model-driven App Features",
    question: "Which components are central to a model-driven app's structure?",
    options: [
      "Forms, views, and the Dataverse tables/relationships they surface",
      "Power Pages themes",
      "Desktop flow recordings",
      "Connectors only, with no data model"
    ],
    correct: 0,
    explanation: "Model-driven apps surface Dataverse data through components like forms, views, charts, and dashboards, and use the data model's relationships for navigation — letting makers compose apps from tables without custom-coding the UI.",
    source: { title: "Explore model-driven app features (Training)", url: "https://learn.microsoft.com/training/modules/identify-basic-microsoft-power-apps-capabilities/5-explore-model-driven-app-features" }
  },
  {
    id: 22, skill: 3, section: "3A", bullet: "canvas-use-cases",
    topic: "Choosing Canvas vs Model-driven",
    question: "Your app will NOT use a Dataverse database. Which Power Apps type must you use?",
    options: ["Model-driven app", "Canvas app", "Either works equally", "Neither — you need Power Pages"],
    correct: 1,
    explanation: "If the app isn't connected to a Dataverse database, you must build a canvas app, because model-driven apps can only be built on top of Dataverse. Many real solutions combine both types.",
    source: { title: "Differences between canvas and model-driven apps (Training)", url: "https://learn.microsoft.com/training/modules/identify-basic-microsoft-power-apps-capabilities/6-describe-differences-between-canvas-apps-model-driven-apps" }
  },
  {
    id: 23, skill: 3, section: "3B", bullet: "canvas-connectors",
    topic: "Connecting Canvas Apps to Data",
    question: "How does a canvas app get data from systems like SharePoint, SQL, or Dataverse?",
    options: [
      "By using connectors to connect to those data sources",
      "Only by manual data entry",
      "Through Power Pages themes",
      "It cannot connect to external data"
    ],
    correct: 0,
    explanation: "Canvas apps connect to data sources by using connectors — Dataverse, SharePoint, SQL, Excel, and 1,400+ others — letting makers read and write business data from within the app.",
    source: { title: "Build a canvas app: Connect to data sources (Training)", url: "https://learn.microsoft.com/training/modules/build-canvas-app/2-connect-data-sources-use-connectors" }
  },
  {
    id: 24, skill: 3, section: "3B", bullet: "canvas-controls-containers",
    topic: "Canvas Controls",
    question: "In a canvas app, what are controls such as text input boxes, buttons, galleries, and forms used for?",
    options: [
      "Building the app's user interface and interactions on a screen",
      "Defining Dataverse relationships",
      "Creating DLP policies",
      "Scheduling cloud flows"
    ],
    correct: 0,
    explanation: "Controls (labels, text inputs, buttons, galleries, forms, etc.) are the building blocks of a canvas app screen — makers add and configure them to build the UI and user interactions.",
    source: { title: "Build a canvas app: Describe common controls (Training)", url: "https://learn.microsoft.com/training/modules/build-canvas-app/4-describe-common-controls" }
  },
  {
    id: 25, skill: 3, section: "3B", bullet: "canvas-controls-containers",
    topic: "Responsive Containers",
    question: "Which canvas app feature helps build layouts that adapt to different screen sizes?",
    options: ["Containers", "Desktop flows", "Process Mining", "Sensitivity labels"],
    correct: 0,
    explanation: "Containers let makers build responsive pages in a canvas app, grouping and arranging controls so the layout adapts across device and screen sizes.",
    source: { title: "Build a canvas app: Build responsive pages using containers (Training)", url: "https://learn.microsoft.com/training/modules/build-canvas-app/5-build-responsive-pages-use-containers" }
  },
  {
    id: 26, skill: 3, section: "3B", bullet: "canvas-copilot-share",
    topic: "Copilot Controls",
    question: "What do Copilot controls add to a canvas app?",
    options: [
      "AI-assisted, conversational experiences for end users within the app",
      "A new Dataverse table",
      "A DLP policy",
      "A desktop flow"
    ],
    correct: 0,
    explanation: "Copilot controls let makers add AI-assisted, conversational capabilities into a canvas app so end users can interact with their app data using natural language.",
    source: { title: "Build a canvas app: Copilot controls (Training)", url: "https://learn.microsoft.com/training/modules/build-canvas-app/8-describe-capabilities-copilot-controls" }
  },
  {
    id: 27, skill: 3, section: "3B", bullet: "canvas-copilot-share",
    topic: "Sharing a Canvas App",
    question: "After building a canvas app, how do you make it available to colleagues?",
    options: [
      "Share the app with users or groups (assigning appropriate access)",
      "Email the source code",
      "Publish it as a public website automatically",
      "Apps cannot be shared"
    ],
    correct: 0,
    explanation: "You share a canvas app with specific users or security groups, granting them access to run (and optionally co-edit) it. Managed Environments can restrict how broadly apps may be shared.",
    source: { title: "Build a canvas app: Share a canvas app (Training)", url: "https://learn.microsoft.com/training/modules/build-canvas-app/11-share-canvas-app" }
  },
  {
    id: 28, skill: 3, section: "3C", bullet: "md-create-tables",
    topic: "Building Model-driven Apps",
    question: "What is the starting point for building a model-driven app?",
    options: [
      "Designing each screen pixel by pixel",
      "The Dataverse tables (and their relationships) that the app will surface",
      "A Power Pages template",
      "A desktop flow recording"
    ],
    correct: 1,
    explanation: "Model-driven apps are built data-first: you create the app from Dataverse tables, and the app surfaces those tables through forms and views — the UI is driven by the data model rather than designed screen by screen.",
    source: { title: "Build a model-driven app (Training)", url: "https://learn.microsoft.com/training/modules/build-model-driven-app/" }
  },
  {
    id: 29, skill: 3, section: "3C", bullet: "md-forms",
    topic: "Modifying Forms",
    question: "In a model-driven app, what does a form define?",
    options: [
      "How an individual record's fields are laid out for viewing and editing",
      "A scheduled cloud flow",
      "A connector group for DLP",
      "The site theme"
    ],
    correct: 0,
    explanation: "Forms in a model-driven app define how a single record's columns are arranged for viewing and data entry. Makers can modify forms to control which fields appear and how they're organized.",
    source: { title: "Build a model-driven app (Training)", url: "https://learn.microsoft.com/training/modules/build-model-driven-app/" }
  },
  {
    id: 30, skill: 3, section: "3C", bullet: "md-views-share",
    topic: "Views & Sharing",
    question: "In a model-driven app, what does a view provide?",
    options: [
      "A configurable list of records (with columns, filters, and sort) for a table",
      "A single record's edit screen",
      "A Power Automate trigger",
      "A Power Pages theme"
    ],
    correct: 0,
    explanation: "A view defines a list of records for a table — which columns appear, plus filtering and sorting. Makers create and modify views, and then share the model-driven app with users via security roles.",
    source: { title: "Build a model-driven app (Training)", url: "https://learn.microsoft.com/training/modules/build-model-driven-app/" }
  },
  {
    id: 31, skill: 3, section: "3A", bullet: "model-driven-use-cases",
    topic: "Model-driven UI Generation",
    question: "Why is a model-driven app described as 'data-first'?",
    options: [
      "Because its UI and structure are generated from the Dataverse data model rather than custom-designed per screen",
      "Because it can't display any data",
      "Because it only works offline",
      "Because it requires Power Fx for every control"
    ],
    correct: 0,
    explanation: "Model-driven apps are data-first: the layout and components are largely generated from the underlying Dataverse tables, relationships, forms, and views — giving a consistent, responsive UI with less manual design than canvas apps.",
    source: { title: "Differences between canvas and model-driven apps (Training)", url: "https://learn.microsoft.com/training/modules/identify-basic-microsoft-power-apps-capabilities/6-describe-differences-between-canvas-apps-model-driven-apps" }
  },
  {
    id: 32, skill: 3, section: "3A", bullet: "canvas-use-cases",
    topic: "Embedding & Device Integration",
    question: "Which capability is characteristic of canvas apps?",
    options: [
      "They can be easily embedded (e.g., in Teams or a model-driven form) and use device features like the camera and GPS",
      "They can never be embedded anywhere",
      "They can only run on desktop browsers",
      "They cannot connect to Dataverse"
    ],
    correct: 0,
    explanation: "Canvas apps offer a custom UI, easy embeddability (e.g., embedded in a model-driven form or Teams), and device integration such as camera and location — strengths for task-focused mobile/field scenarios.",
    source: { title: "Differences between canvas and model-driven apps (Training)", url: "https://learn.microsoft.com/training/modules/identify-basic-microsoft-power-apps-capabilities/6-describe-differences-between-canvas-apps-model-driven-apps" }
  },

  // ============================================================
  // DOMAIN 4: Power Automate (15–20%)
  // ============================================================
  {
    id: 33, skill: 4, section: "4A", bullet: "cloud-vs-desktop",
    topic: "Cloud vs Desktop Flows",
    question: "Which type of Power Automate flow is best for automating a legacy desktop application that has no API, by simulating clicks and keystrokes?",
    options: ["Cloud flow", "Desktop flow", "Scheduled cloud flow", "Instant cloud flow"],
    correct: 1,
    explanation: "Desktop flows (robotic process automation) automate tasks on the local machine — including legacy apps without APIs — by simulating UI actions like clicking buttons and entering text. Cloud flows automate across online services.",
    source: { title: "Describe use cases for cloud and desktop flows (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/3-describe-use-cases-cloud-desktop-flows" }
  },
  {
    id: 34, skill: 4, section: "4A", bullet: "cloud-flow-templates",
    topic: "Cloud Flow Templates",
    question: "What is the benefit of using a cloud flow template in Power Automate?",
    options: [
      "It provides a prebuilt starting point you can customize, instead of building a flow from scratch",
      "It is a relational database",
      "It permanently locks the flow from editing",
      "It only works for desktop flows"
    ],
    correct: 0,
    explanation: "Power Automate offers prebuilt cloud flow templates for common scenarios that you can use as a starting point and customize — accelerating flow creation versus building from a blank flow.",
    source: { title: "Describe use cases for cloud flow templates (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/4-describe-use-cases-cloud-flow-templates" }
  },
  {
    id: 35, skill: 4, section: "4A", bullet: "triggers-actions-connectors",
    topic: "Triggers, Actions & Connectors",
    question: "In a Power Automate cloud flow, what starts the flow and what does the work after it starts?",
    options: [
      "A trigger starts the flow; actions perform the tasks that follow",
      "An action starts the flow; triggers perform the tasks",
      "A connector starts the flow; a theme performs the tasks",
      "A view starts the flow; a form performs the tasks"
    ],
    correct: 0,
    explanation: "A trigger is the event that initiates a cloud flow (e.g., 'when a new email arrives'); actions are the tasks the flow then performs (e.g., save attachment, post a Teams message). Connectors are the bridges to the services these triggers and actions use.",
    source: { title: "How cloud flows use connector triggers and actions (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/5-describe-how-power-automate-cloud-flows-use-connector-triggers-actions" }
  },
  {
    id: 36, skill: 4, section: "4A", bullet: "triggers-actions-connectors",
    topic: "Trigger Types",
    question: "A flow needs to run automatically every Monday at 8 AM. Which trigger type is appropriate?",
    options: ["Instant (manual) trigger", "Automated trigger", "Scheduled trigger", "Desktop trigger"],
    correct: 2,
    explanation: "A scheduled trigger runs a flow at specific times or recurring intervals (e.g., every Monday at 8 AM). Instant triggers run on demand (button press); automated triggers fire when an external event occurs.",
    source: { title: "How cloud flows use connector triggers and actions (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/5-describe-how-power-automate-cloud-flows-use-connector-triggers-actions" }
  },
  {
    id: 37, skill: 4, section: "4A", bullet: "loops-branching",
    topic: "Loops & Branching",
    question: "Which control capability lets a cloud flow take different paths based on a condition, or repeat actions over a set of items?",
    options: [
      "Branching (conditions) and loops",
      "Sensitivity labels",
      "Power Pages themes",
      "Dataverse views"
    ],
    correct: 0,
    explanation: "Cloud flows support control logic — branching with conditions (take different paths based on a test) and loops (repeat actions over each item in a collection) — to handle more complex automation.",
    source: { title: "Describe loops and branching in cloud flows (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/6-describe-loops-branching-cloud-flows" }
  },
  {
    id: 38, skill: 4, section: "4A", bullet: "approvals-usecases",
    topic: "Approvals & Common Use Cases",
    question: "Which is a common Power Automate use case?",
    options: [
      "Routing a document or request through an approval process and notifying approvers in Teams or Outlook",
      "Designing a Power Pages theme",
      "Creating a Dataverse relationship",
      "Building a Power BI semantic model"
    ],
    correct: 0,
    explanation: "Power Automate is commonly used for approvals — routing requests to approvers with notifications in Teams or Outlook — as well as scenarios across SharePoint, Forms, and document automation.",
    source: { title: "Power Automate use cases for approvals (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/7-describe-power-automate-use-cases-approvals" }
  },
  {
    id: 39, skill: 4, section: "4A", bullet: "pa-apps",
    topic: "Power Automate Apps",
    question: "Which app is used to build and run desktop (RPA) automations on a Windows machine?",
    options: ["Power Automate for desktop", "Power BI Desktop", "Power Apps Studio", "Power Pages design studio"],
    correct: 0,
    explanation: "Power Automate for desktop is the application for building and running desktop flows (RPA). The Power Automate family also includes the Power Automate mobile app and the web-based maker portal.",
    source: { title: "Describe the Power Automate apps (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/8-describe-power-automate-apps" }
  },
  {
    id: 40, skill: 4, section: "4A", bullet: "process-mining",
    topic: "Process Mining",
    question: "What is the purpose of Process Mining in Power Automate?",
    options: [
      "To analyze how business processes actually run and identify bottlenecks and automation opportunities",
      "To store relational data",
      "To design website themes",
      "To assign security roles"
    ],
    correct: 0,
    explanation: "Process Mining analyzes an organization's real process data to reveal how processes actually flow, surfacing bottlenecks and opportunities to automate or optimize — helping decide where to apply Power Automate.",
    source: { title: "Describe process mining (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/2-describe-process-mining" }
  },
  {
    id: 41, skill: 4, section: "4B", bullet: "build-cloud-flow",
    topic: "Building & Testing a Flow",
    question: "After building a cloud flow, which step lets you confirm it works correctly before relying on it?",
    options: [
      "Run/test the flow and review its run history",
      "Delete the trigger",
      "Convert it to a Power Pages site",
      "Assign it a sensitivity label"
    ],
    correct: 0,
    explanation: "When you build a cloud flow you choose an instant, automated, or scheduled trigger, then run and test it and review the run history to confirm it behaves correctly. You can also create/modify flows through conversation (Copilot) and share them.",
    source: { title: "Build a Microsoft Power Automate flow (Training)", url: "https://learn.microsoft.com/training/modules/build-microsoft-power-automate-flow/" }
  },

  // ============================================================
  // DOMAIN 5: Power Pages (10–15%)
  // ============================================================
  {
    id: 42, skill: 5, section: "5A", bullet: "pages-use-cases",
    topic: "Power Pages Use Cases",
    question: "Which scenario is a good fit for Power Pages?",
    options: [
      "An external customer self-service portal where customers submit support tickets and track orders against Dataverse data",
      "An internal back-office records app for staff",
      "A desktop RPA automation",
      "A Power BI dashboard"
    ],
    correct: 0,
    explanation: "Power Pages is ideal for secure external-facing websites — like customer self-service portals where external users view and interact with Dataverse business data (submit tickets, track orders). For internal apps, Power Apps is the better fit.",
    source: { title: "Describe use cases for Power Pages (Training)", url: "https://learn.microsoft.com/training/modules/describe-capabilities-microsoft-power-pages/2-describe-use-cases-power-pages" }
  },
  {
    id: 43, skill: 5, section: "5A", bullet: "pages-create-methods",
    topic: "Methods for Creating Sites",
    question: "Which are valid ways to start creating a Power Pages site?",
    options: [
      "Start from a template, from a blank site, or use Copilot to generate a site by describing it",
      "Only by writing HTML from scratch",
      "Only by importing an Excel file",
      "Only through a desktop flow"
    ],
    correct: 0,
    explanation: "Power Pages sites can be created from prebuilt templates, from a blank starting point, or by using Copilot to generate a site from a natural-language description — then customized in the design studio.",
    source: { title: "Describe methods for creating sites (Training)", url: "https://learn.microsoft.com/training/modules/describe-capabilities-microsoft-power-pages/3-describe-methods-create-sites" }
  },
  {
    id: 44, skill: 5, section: "5A", bullet: "pages-security",
    topic: "Power Pages Security",
    question: "How does Power Pages control what anonymous and authenticated visitors can see or do?",
    options: [
      "Through security features such as authentication and table/web-page permissions and roles",
      "By making all data public to everyone",
      "Through DLP connector groups only",
      "It has no security model"
    ],
    correct: 0,
    explanation: "Power Pages includes a security model — authentication for external users plus permissions/roles that control access to pages and to the underlying Dataverse tables — so you expose only the right data to the right audience.",
    source: { title: "Describe Power Pages security concepts (Training)", url: "https://learn.microsoft.com/training/modules/describe-capabilities-microsoft-power-pages/4-describe-power-pages-security-concepts" }
  },
  {
    id: 45, skill: 5, section: "5B", bullet: "pages-copilot",
    topic: "Creating Sites with Copilot",
    question: "How can Copilot speed up building a Power Pages site?",
    options: [
      "By generating pages, text, and even Dataverse tables/forms from a natural-language description of the site",
      "By writing the site's server firmware",
      "By replacing the design studio entirely with code",
      "Copilot cannot be used with Power Pages"
    ],
    correct: 0,
    explanation: "Power Pages Copilot lets makers describe the site they want in natural language; Copilot helps generate pages, content, and supporting Dataverse structures — streamlining site creation before refining in the design studio.",
    source: { title: "Create a Microsoft Power Pages site (Training)", url: "https://learn.microsoft.com/training/modules/create-microsoft-power-pages-site/" }
  },
  {
    id: 46, skill: 5, section: "5B", bullet: "pages-design-studio",
    topic: "Design Studio Workspaces",
    question: "Where do Power Pages makers spend most of their time building and customizing a site?",
    options: [
      "The Power Pages design studio (with workspaces such as Pages, Styling, Data, and Set up)",
      "The Power BI service",
      "Power Automate for desktop",
      "The Exchange admin center"
    ],
    correct: 0,
    explanation: "Makers build sites in the Power Pages design studio, which organizes work into workspaces — for example Pages, Styling, Data, and Set up — to add pages, style the site, connect Dataverse data, and configure security/behavior.",
    source: { title: "Create a Microsoft Power Pages site (Training)", url: "https://learn.microsoft.com/training/modules/create-microsoft-power-pages-site/" }
  },
  {
    id: 47, skill: 5, section: "5B", bullet: "pages-components-theme",
    topic: "Pages, Components & Themes",
    question: "In the Power Pages design studio, what can a maker do to customize a site's look and content?",
    options: [
      "Add and configure pages and components, and modify the site's theme (colors, fonts, styling)",
      "Only change the database schema",
      "Only schedule cloud flows",
      "Nothing — sites cannot be customized"
    ],
    correct: 0,
    explanation: "Makers create and modify pages, add and configure components (text, forms, lists, etc.), and modify the site theme (colors, fonts, and styling) to tailor the look and content of the Power Pages site.",
    source: { title: "Create a Microsoft Power Pages site (Training)", url: "https://learn.microsoft.com/training/modules/create-microsoft-power-pages-site/" }
  },
  {
    id: 48, skill: 5, section: "5A", bullet: "pages-use-cases",
    topic: "Power Pages & Dataverse",
    question: "What data does a Power Pages site typically surface to its external audience?",
    options: [
      "Shared business data stored in Microsoft Dataverse",
      "Only static text with no data",
      "Data that can never be secured",
      "Only data from desktop flows"
    ],
    correct: 0,
    explanation: "Power Pages builds sites on the same shared business data stored in Microsoft Dataverse used by other Power Platform components, letting external audiences securely view and interact with that data.",
    source: { title: "Describe use cases for Power Pages (Training)", url: "https://learn.microsoft.com/training/modules/describe-capabilities-microsoft-power-pages/2-describe-use-cases-power-pages" }
  }
];
