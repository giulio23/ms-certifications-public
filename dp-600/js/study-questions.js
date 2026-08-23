/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// DP-600 Implementing Analytics Solutions Using Microsoft Fabric - Study-mode Questions
// COURSE-DERIVED: each question is written from a specific Microsoft Learn unit or the official
// Microsoft Fabric / Power BI doc the course points to, and links to it. correct = 0-based index.

const STUDY_QUESTIONS = [
  // ---- Domain 1 ----
  {
    id: 101, skill: 1, section: "1A", bullet: "granular-access",
    topic: "RLS DAX Filter",
    question: "In Power BI Desktop, how do you define which rows a security role can see?",
    options: [
      "By writing a DAX filter expression that returns TRUE/FALSE for each row in a table",
      "By applying a sensitivity label",
      "By creating a deployment pipeline stage",
      "By converting the model to Direct Lake"
    ],
    correct: 0,
    explanation: "RLS roles are defined in Power BI Desktop using DAX filter expressions on a table. The expression evaluates TRUE/FALSE per row; only rows returning TRUE are visible to members of that role. Dynamic rules can use functions like USERNAME() or USERPRINCIPALNAME().",
    source: { title: "Row-level security (RLS) with Power BI (Define roles and rules)", url: "https://learn.microsoft.com/fabric/security/service-admin-row-level-security#define-roles-and-rules-in-power-bi-desktop" }
  },
  {
    id: 102, skill: 1, section: "1A", bullet: "workspace-item-access",
    topic: "Shortcut Permissions",
    question: "What permissions does a user need to create a OneLake shortcut?",
    options: [
      "Write permission on the Fabric item where the shortcut is created, plus Read access to the target data",
      "Only Viewer permission on the workspace",
      "No permissions are required",
      "Admin rights on the entire tenant"
    ],
    correct: 0,
    explanation: "To create a shortcut a user needs Write permission on the item where the shortcut is created, and Read (ReadAll) access to the target data the shortcut points to. Shortcuts to external sources might require additional permissions in the external system.",
    source: { title: "OneLake shortcut security", url: "https://learn.microsoft.com/fabric/onelake/onelake-shortcut-security" }
  },
  {
    id: 103, skill: 1, section: "1B", bullet: "version-control",
    topic: "Git Continuous Integration",
    question: "Which Git workflow concept lets a developer work in isolation before merging changes into the production-ready main branch?",
    options: [
      "Feature branches",
      "Deployment stages",
      "Sensitivity labels",
      "Calculation items"
    ],
    correct: 0,
    explanation: "Feature branches are separate from the main branch and allow isolated development without changing main. Changes are proposed via pull requests, reviewed, and then merged. The main branch holds production-ready code.",
    source: { title: "CI/CD for pipelines in Data Factory in Microsoft Fabric (Git)", url: "https://learn.microsoft.com/fabric/data-factory/cicd-pipelines#why-developers-use-ci-cd" }
  },
  {
    id: 104, skill: 1, section: "1B", bullet: "reusable-assets",
    topic: "Shared Semantic Models",
    question: "Why might an organization promote or certify a shared semantic model and require teams to use it?",
    options: [
      "To make trustworthy, reusable data more discoverable so consumers build reports on a single source of truth",
      "To prevent anyone from building reports",
      "To delete downstream reports automatically",
      "To disable row-level security"
    ],
    correct: 0,
    explanation: "Endorsing (promoting/certifying) a shared semantic model makes trustworthy, quality data more discoverable and given priority in searches. Data consumers are encouraged to reuse certified shared models rather than recreating data, ensuring consistent, trusted reporting.",
    source: { title: "Governance overview and guidance (Endorsement)", url: "https://learn.microsoft.com/fabric/governance/governance-compliance-overview#encourage-data-discovery,-trust,-and-use" }
  },
  {
    id: 105, skill: 1, section: "1B", bullet: "deployment-pipelines",
    topic: "Shortcuts Across Stages",
    question: "In a deployment pipeline, how are OneLake shortcuts with internal (same-workspace) targets handled across stages?",
    options: [
      "They are automatically remapped across stages, but the target tables/files aren't created — you must create them in the target workspace",
      "They are deleted on every deployment",
      "They keep pointing to the development target forever",
      "They cannot be deployed at all"
    ],
    correct: 0,
    explanation: "Shortcuts with internal targets in the same workspace are automatically remapped across deployment-pipeline stages. However, the target tables, folders, and files aren't created automatically — you must create them in the target workspace after deployment. External-target shortcuts keep the same target.",
    source: { title: "Lakehouse git integration and deployment pipelines (OneLake shortcuts)", url: "https://learn.microsoft.com/fabric/data-engineering/lakehouse-git-deployment-pipelines#onelake-shortcuts" }
  },

  // ---- Domain 2 ----
  {
    id: 106, skill: 2, section: "2A", bullet: "choose-data-store",
    topic: "Lakehouse Use Cases",
    question: "Which scenario best fits a Fabric lakehouse rather than a warehouse?",
    options: [
      "Working with structured, semi-structured, and unstructured data using Spark in a medallion (bronze/silver/gold) architecture",
      "Needing full multi-table ACID T-SQL DML transactions",
      "Running KQL over streaming events",
      "Storing only Power BI report definitions"
    ],
    correct: 0,
    explanation: "A lakehouse supports structured, semi-structured, and unstructured data with a Spark compute layer over the open Delta format, commonly using the medallion architecture (bronze/silver/gold). The warehouse is the choice when you need full transactional T-SQL DML.",
    source: { title: "Greenfield lakehouse on Microsoft Fabric (Architecture)", url: "https://learn.microsoft.com/azure/architecture/example-scenario/data/greenfield-lakehouse-fabric#architecture" }
  },
  {
    id: 107, skill: 2, section: "2A", bullet: "ingest-access",
    topic: "Warehouse Ingestion Methods",
    question: "Which T-SQL command is a supported way to bulk load data into a Fabric Data Warehouse?",
    options: [
      "COPY INTO",
      "SELECTEDMEASURE",
      "DATESYTD",
      "WINDOW"
    ],
    correct: 0,
    explanation: "A Fabric warehouse can be populated by COPY INTO, pipelines, dataflows, or cross-database ingestion (CTAS, INSERT..SELECT, SELECT INTO). COPY INTO is the T-SQL bulk-loading command. The other options are DAX functions, not ingestion methods.",
    source: { title: "What is Fabric Data Warehouse? (Data warehousing items)", url: "https://learn.microsoft.com/fabric/data-warehouse/data-warehousing#data-warehousing-items" }
  },
  {
    id: 108, skill: 2, section: "2B", bullet: "star-schema-build",
    topic: "Soft Deletes in Dimensions",
    question: "When a source dimension member is deleted, what is the recommended way to handle it in the warehouse dimension table?",
    options: [
      "Record a soft delete by setting a Boolean column (e.g., IsDeleted) and filter those rows out in reports",
      "Immediately hard-delete the row and all related facts",
      "Truncate the whole dimension table",
      "Ignore it and let the fact table break"
    ],
    correct: 0,
    explanation: "You generally shouldn't synchronize source deletions by removing dimension rows (it can invalidate related facts). The appropriate approach is a soft delete — mark the member with a Boolean (bit) column like IsDeleted = TRUE, and have reports and semantic models filter out soft-deleted records.",
    source: { title: "Dimensional modeling in Fabric Warehouse: Load tables", url: "https://learn.microsoft.com/fabric/data-warehouse/dimensional-modeling-load-tables#process-dimension-tables" }
  },
  {
    id: 109, skill: 2, section: "2B", bullet: "merge-join",
    topic: "Self-Service Quasi-Dimensional Model",
    question: "A self-service analyst wants to build a dimensional-style model directly in Power BI without creating a warehouse. Which tool defines the logic to connect to and transform source data into the model tables?",
    options: [
      "Power Query",
      "KQL queryset",
      "A deployment pipeline",
      "The XMLA endpoint"
    ],
    correct: 0,
    explanation: "Self-service analysts can create a quasi-dimensional model using Power Query, which defines the logic to connect to and transform source data to create and load the semantic model tables — though Power Query can't manage historical change (SCDs) the way a warehouse ETL process can.",
    source: { title: "Dimensional modeling in Fabric Data Warehouse (for Power BI)", url: "https://learn.microsoft.com/fabric/data-warehouse/dimensional-modeling-overview#dimensional-modeling-for-power-bi" }
  },
  {
    id: 110, skill: 2, section: "2C", bullet: "dax-query",
    topic: "OFFSET for Prior Period",
    question: "Which DAX window function returns a single row positioned before or after the current row by a given offset (useful for prior-period comparisons)?",
    options: ["OFFSET", "SUM", "RELATED", "BLANK"],
    correct: 0,
    explanation: "OFFSET returns a single row positioned before or after the current row within the same table by a given offset, commonly used to compare a value to the previous period. It's a DAX window function used with ORDERBY/PARTITIONBY (or MATCHBY).",
    source: { title: "OFFSET (DAX)", url: "https://learn.microsoft.com/dax/offset-function-dax#example-1---calculated-column" }
  },
  {
    id: 111, skill: 2, section: "2C", bullet: "kql-query",
    topic: "Real-Time Hub Metadata",
    question: "On the Real-Time hub All data streams page, which columns help you assess the trustworthiness and classification of each stream or KQL table?",
    options: [
      "Endorsement and Sensitivity",
      "Storage mode and Refresh time",
      "RangeStart and RangeEnd",
      "Precedence and Format string"
    ],
    correct: 0,
    explanation: "The Real-Time hub All data streams list includes Endorsement and Sensitivity columns (alongside Data, Source item, Item owner, and Workspace), reflecting the endorsement status and sensitivity label of the parent item so you can discover trusted streaming data.",
    source: { title: "Explore All data streams in Fabric Real-Time hub", url: "https://learn.microsoft.com/fabric/real-time-hub/explore-all-data-streams" }
  },

  // ---- Domain 3 ----
  {
    id: 112, skill: 3, section: "3A", bullet: "relationships",
    topic: "Bi-directional Filter for M2M",
    question: "In a many-to-many dimension model with a bridge table, why must you set one relationship to bi-directional (Both)?",
    options: [
      "To allow filter propagation to continue all the way to the fact table so measures calculate correctly",
      "To improve compression",
      "To enable Direct Lake fallback",
      "To create a calculation group"
    ],
    correct: 0,
    explanation: "With a bridge table, filters from one dimension stop propagating at the bridge unless one relationship is set to bi-directional (Both). Setting one bi-directional relationship lets the filter continue to the fact table, so customer/account balances calculate correctly (and become non-additive as expected).",
    source: { title: "Many-to-many relationship guidance", url: "https://learn.microsoft.com/power-bi/guidance/relationships-many-to-many#relate-many-to-many-dimensions" }
  },
  {
    id: 113, skill: 3, section: "3B", bullet: "direct-lake-optimize",
    topic: "Direct Lake Automatic Updates",
    question: "What does the Direct Lake semantic model 'automatic updates' setting do, and when might you disable it?",
    options: [
      "It automatically reflects OneLake data changes in the model; disable it when you want to control data changes manually via framing",
      "It deletes the model nightly",
      "It converts the model to Import mode",
      "It applies sensitivity labels automatically"
    ],
    correct: 0,
    explanation: "Automatic updates (enabled by default) ensure data changes in OneLake are automatically reflected in the Direct Lake semantic model. You disable it when you want to control when data changes appear by manually framing (programmatic reframing).",
    source: { title: "How Direct Lake works (Automatic updates)", url: "https://learn.microsoft.com/fabric/fundamentals/direct-lake-how-it-works#automatic-updates" }
  },
  {
    id: 114, skill: 3, section: "3B", bullet: "incremental-refresh",
    topic: "Incremental Refresh Benefits",
    question: "Which benefit does an incremental refresh policy provide for a large fact table?",
    options: [
      "It refreshes only the most recent partitions instead of the whole table, making refreshes faster and reducing resource use",
      "It removes the need for any data source",
      "It guarantees real-time data without DirectQuery",
      "It disables row-level security"
    ],
    correct: 0,
    explanation: "Incremental refresh automatically partitions the table and refreshes only the most recent partitions, so refreshes are faster and more reliable and consume fewer resources. It also enables very large models (billions of rows) to grow without a full refresh each time.",
    source: { title: "Configure incremental refresh and real-time data for Power BI semantic models", url: "https://learn.microsoft.com/power-bi/connect-data/incremental-refresh-overview" }
  }
];
