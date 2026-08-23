/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// PL-900 Power Platform Fundamentals - Study-mode Questions
// COURSE-DERIVED: each question is written from a specific Microsoft Learn PL-900T00 course unit
// and links to it. correct = 0-based index.

const STUDY_QUESTIONS = [
  // ---- Domain 1 ----
  {
    id: 101, skill: 1, section: "1A", bullet: "val-dataverse",
    topic: "Common Data Model",
    question: "What does the Common Data Model (CDM) provide to Microsoft Dataverse?",
    options: [
      "Standardized, predefined schemas (tables, attributes, relationships) for common business concepts so systems interoperate consistently",
      "A way to build desktop flows",
      "A Power Pages theme",
      "A connector for Twitter/X"
    ],
    correct: 0,
    explanation: "The Common Data Model is a standardized schema at the core of Dataverse. It provides predefined schemas for common business concepts (accounts, contacts, etc.), so data is organized consistently and different systems and apps interoperate easily.",
    source: { title: "Differences between traditional databases and Dataverse (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-dataverse/2-describe-differences-between-traditional-databases-microsoft-dataverse" }
  },
  {
    id: 102, skill: 1, section: "1A", bullet: "val-connectors",
    topic: "Connectors at Scale",
    question: "Approximately how many prebuilt connectors does Power Platform offer to integrate with other services?",
    options: ["About 10", "More than 1,400", "Exactly 50", "None — you must build them all"],
    correct: 1,
    explanation: "Power Platform provides more than 1,400 prebuilt connectors (Salesforce, Office 365, Dropbox, Google services, and more), used by Power Apps, Power Automate, and logic apps to integrate data and actions seamlessly.",
    source: { title: "Explore Microsoft Power Platform (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/2-explore-microsoft-power-platform" }
  },
  {
    id: 103, skill: 1, section: "1A", bullet: "val-power-fx",
    topic: "Power Fx Familiarity",
    question: "Why is Power Fx considered approachable for low-code makers?",
    options: [
      "It uses Excel-like formulas that are easy to learn",
      "It requires C# expertise",
      "It is only usable by administrators",
      "It can only run on desktop flows"
    ],
    correct: 0,
    explanation: "Power Fx is the low-code language across Power Platform and uses Excel-like formulas, making it easy for makers familiar with spreadsheets to learn and use when building app logic.",
    source: { title: "Describe the value of Power Fx (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/6-describe-value-power-fx-low-code-solution" }
  },
  {
    id: 104, skill: 1, section: "1B", bullet: "services-work-together",
    topic: "Democratizing Development",
    question: "What does it mean that Power Platform 'democratizes' technology?",
    options: [
      "It lowers the barrier to entry so users across departments can build apps and workflows with low-code, not just professional developers",
      "It removes all security controls",
      "It only allows IT administrators to build apps",
      "It requires every user to learn to code"
    ],
    correct: 0,
    explanation: "A transformative aspect of Power Platform is democratizing technology: its low-code environment lowers the barrier to entry, empowering business users across departments to build applications and workflows while maintaining enterprise governance.",
    source: { title: "Describe how Power Platform services work together (Training)", url: "https://learn.microsoft.com/training/modules/describe-business-value-microsoft-power-platform-services/7-describe-how-power-platform-services-work-together" }
  },

  // ---- Domain 2 ----
  {
    id: 105, skill: 2, section: "2A", bullet: "dv-tables-relationships",
    topic: "Many-to-many Relationships",
    question: "Students can enroll in many courses, and each course can have many students. Which Dataverse relationship models this, and how is it implemented?",
    options: [
      "Many-to-many (N:N), implemented through an intersect table",
      "One-to-many (1:N), implemented with a single lookup",
      "One-to-one (1:1), implemented with a primary key",
      "No relationship is possible"
    ],
    correct: 0,
    explanation: "A many-to-many (N:N) relationship lets rows in each table relate to multiple rows in the other. It's managed through an intersect table that maps the relationships between the two tables.",
    source: { title: "Tables, columns, and relationships in Dataverse (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-dataverse/3-describe-tables-columns-relationships-microsoft-dataverse" }
  },
  {
    id: 106, skill: 2, section: "2A", bullet: "dv-tables-relationships",
    topic: "Lookup Columns & Keys",
    question: "Which statements about Dataverse tables are correct?",
    options: [
      "Relationships are created using lookup columns, and each row's primary key is a GUID",
      "Tables can't relate to each other",
      "The primary key must be a person's name",
      "Lookup columns store images only"
    ],
    correct: 0,
    explanation: "In Dataverse, lookup columns reference rows in another table to create relationships, and each row's primary key is a Globally Unique Identifier (GUID) that uniquely identifies it.",
    source: { title: "Tables, columns, and relationships in Dataverse (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-dataverse/3-describe-tables-columns-relationships-microsoft-dataverse" }
  },
  {
    id: 107, skill: 2, section: "2B", bullet: "pp-environments",
    topic: "Environment Types",
    question: "Which Power Platform environment is automatically created for a tenant and shared by all licensed users?",
    options: ["Sandbox environment", "Default environment", "Trial environment", "Developer environment"],
    correct: 1,
    explanation: "The Default environment is automatically created for each tenant and is shared by all users (all licensed users get the Environment Maker role). Production and Sandbox environments give full control; Trial environments expire after 30 days.",
    source: { title: "Describe Power Platform environments (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-power-platform-administration-governance/3-describe-environments" }
  },
  {
    id: 108, skill: 2, section: "2B", bullet: "pp-environments",
    topic: "Managed Environments",
    question: "What do Managed Environments add to standard Power Platform environments?",
    options: [
      "Enhanced governance — e.g., limiting how broadly apps are shared, weekly usage insights, data policies, and solution checker",
      "The ability to store more rows only",
      "A new programming language",
      "Nothing different from a default environment"
    ],
    correct: 0,
    explanation: "Managed Environments add enhanced administrative and governance capabilities — limiting app sharing, weekly usage insights, data policies, pipelines, and solution checker — so admins keep control and compliance as adoption scales.",
    source: { title: "Describe Power Platform environments (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-power-platform-administration-governance/3-describe-environments" }
  },
  {
    id: 109, skill: 2, section: "2B", bullet: "pp-security-model",
    topic: "Encryption & Identity",
    question: "Which statements describe Power Platform's built-in data protection?",
    options: [
      "Microsoft Entra ID handles identity (with MFA and Conditional Access), and data is encrypted at rest (AES-256) and in transit (TLS)",
      "Data is never encrypted",
      "Authentication is optional and off by default",
      "Encryption only applies to Power Pages"
    ],
    correct: 0,
    explanation: "Power Platform's security model uses Microsoft Entra ID for identity (supporting MFA and Conditional Access) and encrypts data at rest with AES 256-bit and in transit with TLS — helping meet compliance standards like GDPR and HIPAA.",
    source: { title: "Describe the Power Platform security model (Training)", url: "https://learn.microsoft.com/training/modules/describe-microsoft-power-platform-administration-governance/2-describe-microsoft-power-platform-security-model" }
  },

  // ---- Domain 3 ----
  {
    id: 110, skill: 3, section: "3A", bullet: "model-driven-use-cases",
    topic: "When to Use Model-driven",
    question: "Which need points toward a model-driven app rather than a canvas app?",
    options: [
      "A back-office, process-focused solution over Dataverse needing consistent UI, data-relationship navigation, and security trimming",
      "A highly custom, pixel-perfect UI connected to non-Dataverse data",
      "A site for external anonymous customers",
      "A desktop RPA automation"
    ],
    correct: 0,
    explanation: "Model-driven apps suit back-office, process-focused work on Dataverse, where a responsive consistent UI, data-relationship navigation, and security-trimmed UI matter more than pixel-perfect custom design.",
    source: { title: "Differences between canvas and model-driven apps (Training)", url: "https://learn.microsoft.com/training/modules/identify-basic-microsoft-power-apps-capabilities/6-describe-differences-between-canvas-apps-model-driven-apps" }
  },
  {
    id: 111, skill: 3, section: "3B", bullet: "canvas-connectors",
    topic: "Canvas App Data Flexibility",
    question: "Which statement about canvas app data sources is correct?",
    options: [
      "A canvas app can connect to Dataverse and to many non-Dataverse sources (SharePoint, SQL, Excel, third-party services) via connectors",
      "A canvas app can only use Dataverse",
      "A canvas app cannot connect to any data",
      "A canvas app can only use one data source ever"
    ],
    correct: 0,
    explanation: "Canvas apps are flexible on data: they connect via connectors to Dataverse and many other sources (SharePoint, SQL, Excel, Google services, and more), and can even combine multiple sources in one app.",
    source: { title: "Build a canvas app: Connect to data sources (Training)", url: "https://learn.microsoft.com/training/modules/build-canvas-app/2-connect-data-sources-use-connectors" }
  },
  {
    id: 112, skill: 3, section: "3C", bullet: "md-views-share",
    topic: "Forms vs Views",
    question: "In a model-driven app, what is the difference between a form and a view?",
    options: [
      "A form shows one record's fields for viewing/editing; a view shows a filterable, sortable list of many records",
      "They are the same thing",
      "A form lists many records; a view shows one record",
      "Neither relates to Dataverse data"
    ],
    correct: 0,
    explanation: "A form lays out a single record's columns for viewing and editing, while a view presents a list of records (with selected columns, filtering, and sorting). Makers configure both, then share the app via security roles.",
    source: { title: "Build a model-driven app (Training)", url: "https://learn.microsoft.com/training/modules/build-model-driven-app/" }
  },

  // ---- Domain 4 ----
  {
    id: 113, skill: 4, section: "4A", bullet: "cloud-vs-desktop",
    topic: "Cloud Flow Types",
    question: "Which set correctly lists the three types of Power Automate cloud flows?",
    options: [
      "Automated, instant, and scheduled",
      "Canvas, model-driven, and portal",
      "Bronze, silver, and gold",
      "Block, page, and append"
    ],
    correct: 0,
    explanation: "Cloud flows come in three types: automated (triggered by an event), instant (triggered manually, e.g., a button), and scheduled (run at set times/intervals).",
    source: { title: "Describe use cases for cloud and desktop flows (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/3-describe-use-cases-cloud-desktop-flows" }
  },
  {
    id: 114, skill: 4, section: "4A", bullet: "pa-apps",
    topic: "Maker Portal",
    question: "Where can a maker browse templates and build cloud flows in a web browser?",
    options: [
      "The Power Automate maker portal (make.powerautomate.com)",
      "Power Automate for desktop only",
      "The Power Pages design studio",
      "The Power BI service"
    ],
    correct: 0,
    explanation: "The Power Automate maker portal is the web-based home for creating and managing cloud flows and browsing templates. The Power Automate family also includes Power Automate for desktop (RPA) and the mobile app.",
    source: { title: "Describe the Power Automate apps (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/8-describe-power-automate-apps" }
  },
  {
    id: 115, skill: 4, section: "4A", bullet: "triggers-actions-connectors",
    topic: "Combining Connectors",
    question: "A flow triggers when an Outlook email arrives, saves the attachment to OneDrive, and notifies a channel in Teams. What makes this cross-app flow possible?",
    options: [
      "Connectors for Outlook, OneDrive, and Teams provide the trigger and actions",
      "A single Dataverse table",
      "A Power Pages theme",
      "A desktop flow recording"
    ],
    correct: 0,
    explanation: "Connectors are the bridges to each service: the Outlook connector provides the trigger, and the OneDrive and Teams connectors provide actions. Combining connectors lets one flow automate work across multiple apps.",
    source: { title: "How cloud flows use connector triggers and actions (Training)", url: "https://learn.microsoft.com/training/modules/identify-microsoft-power-automate-components/5-describe-how-power-automate-cloud-flows-use-connector-triggers-actions" }
  },

  // ---- Domain 5 ----
  {
    id: 116, skill: 5, section: "5A", bullet: "pages-security",
    topic: "Authenticated vs Anonymous Access",
    question: "How can a Power Pages site differentiate what anonymous visitors versus signed-in users can access?",
    options: [
      "By configuring authentication and permissions/roles that control access to pages and Dataverse tables",
      "By making everything public",
      "By using DLP connector groups",
      "Power Pages has no way to differentiate access"
    ],
    correct: 0,
    explanation: "Power Pages security lets you require authentication and assign permissions/roles that govern which pages and Dataverse table data each audience (anonymous or authenticated) can access — exposing only the appropriate content.",
    source: { title: "Describe Power Pages security concepts (Training)", url: "https://learn.microsoft.com/training/modules/describe-capabilities-microsoft-power-pages/4-describe-power-pages-security-concepts" }
  },
  {
    id: 117, skill: 5, section: "5A", bullet: "pages-create-methods",
    topic: "Templates Accelerate Sites",
    question: "What is the benefit of starting a Power Pages site from a template?",
    options: [
      "Templates are pre-configured solutions that accelerate deployment for specific scenarios and audiences",
      "Templates lock the site so it can't be edited",
      "Templates remove all security",
      "Templates only work for internal apps"
    ],
    correct: 0,
    explanation: "Power Pages templates are pre-configured solutions that accelerate deployment, giving you an environment immediately suited to specific scenarios and audiences that you can then customize in the design studio.",
    source: { title: "Describe methods for creating sites (Training)", url: "https://learn.microsoft.com/training/modules/describe-capabilities-microsoft-power-pages/3-describe-methods-create-sites" }
  }
];
