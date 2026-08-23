/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// DP-600 Implementing Analytics Solutions Using Microsoft Fabric - Practice Exam Questions
// COURSE-DERIVED: every question is written from the text of a specific Microsoft Learn unit
// (DP-600T00 / Microsoft Fabric training modules) or the official Microsoft Fabric / Power BI
// product doc the course and study guide point to, and its `source` links to that unit/doc.
// correct = 0-based index.

const QUESTIONS = [
  // ============================================================
  // DOMAIN 1: Maintain a data analytics solution (25–30%)
  // ============================================================
  {
    id: 1, skill: 1, section: "1A", bullet: "workspace-item-access",
    topic: "Workspace & Item Access",
    question: "In a Fabric lakehouse, which mechanism controls who can open the lakehouse and read its data through paths other than the SQL analytics endpoint?",
    options: [
      "Only DAX row-level security roles",
      "Workspace roles and item permissions",
      "Power BI report filters",
      "Sensitivity labels alone"
    ],
    correct: 1,
    explanation: "Access to a lakehouse and its data through paths such as Spark is governed by workspace roles and item permissions. SQL granular permissions on the SQL analytics endpoint only apply when data is accessed through that endpoint, not through Spark or other tools.",
    source: { title: "What is the SQL analytics endpoint for a lakehouse? (Security)", url: "https://learn.microsoft.com/fabric/data-engineering/lakehouse-sql-analytics-endpoint#security" }
  },
  {
    id: 2, skill: 1, section: "1A", bullet: "granular-access",
    topic: "Granular Security (RLS/CLS/OLS)",
    question: "Which feature lets you restrict access to specific tables, columns, or rows when data is queried through the SQL analytics endpoint of a lakehouse?",
    options: [
      "SQL granular permissions",
      "Power BI deployment pipelines",
      "OneLake shortcuts",
      "The Real-Time hub"
    ],
    correct: 0,
    explanation: "SQL granular permissions on the SQL analytics endpoint control access to specific tables, columns (column-level), or rows (row-level). These rules only apply when data is accessed through the endpoint — not through Spark.",
    source: { title: "What is the SQL analytics endpoint for a lakehouse? (Security)", url: "https://learn.microsoft.com/fabric/data-engineering/lakehouse-sql-analytics-endpoint#security" }
  },
  {
    id: 3, skill: 1, section: "1A", bullet: "granular-access",
    topic: "Semantic Model RLS",
    question: "When you define row-level security (RLS) roles on a Power BI semantic model, which users does the row filtering actually restrict?",
    options: [
      "Admins, Members, and Contributors",
      "Only users with Viewer permissions",
      "Every user including the model author",
      "Only external guest users"
    ],
    correct: 1,
    explanation: "RLS filters restrict data only for users with Viewer permissions on the workspace. It doesn't apply to Admins, Members, or Contributors. You define filters as DAX expressions within roles in Power BI Desktop, then add members to the roles in the service.",
    source: { title: "Row-level security (RLS) with Power BI", url: "https://learn.microsoft.com/fabric/security/service-admin-row-level-security" }
  },
  {
    id: 4, skill: 1, section: "1A", bullet: "sensitivity-labels",
    topic: "Sensitivity Labels",
    question: "What do sensitivity labels from Microsoft Purview Information Protection provide when applied to Fabric items?",
    options: [
      "They speed up Direct Lake queries",
      "They guard sensitive content against unauthorized data access and leakage, supporting governance and compliance",
      "They convert tables to Delta format",
      "They create deployment pipeline stages"
    ],
    correct: 1,
    explanation: "Sensitivity labels from Microsoft Purview Information Protection on items help guard sensitive content against unauthorized data access and leakage. They are a key component in helping an organization meet governance and compliance requirements; labeling data correctly ensures only authorized people can access it.",
    source: { title: "Microsoft Fabric Workload Publishing Requirements (Sensitivity Labels)", url: "https://learn.microsoft.com/fabric/extensibility-toolkit/publishing-requirements-workload#6-fabric-features" }
  },
  {
    id: 5, skill: 1, section: "1A", bullet: "endorsement",
    topic: "Endorsement",
    question: "Which statement about endorsing Fabric and Power BI items is correct?",
    options: [
      "Any user can certify any item",
      "Promotion can be done by anyone with write permissions, but only authorized reviewers (set by the Fabric admin) can certify items",
      "Certification is applied automatically to all new semantic models",
      "Only dashboards can be endorsed"
    ],
    correct: 1,
    explanation: "Fabric provides three endorsement badges: Promoted, Certified, and Master data. Any item owner or user with write permissions can promote an item, but only authorized reviewers defined by the Fabric administrator can certify items or label them as master data.",
    source: { title: "Endorse Fabric and Power BI items", url: "https://learn.microsoft.com/fabric/fundamentals/endorsement-promote-certify" }
  },
  {
    id: 6, skill: 1, section: "1A", bullet: "endorsement",
    topic: "Master Data Endorsement",
    question: "Which endorsement badge indicates that a data item is the authoritative, single-source-of-truth data (such as product codes or customer lists) and can only be applied to items that contain data?",
    options: ["Promoted", "Certified", "Master data", "Featured"],
    correct: 2,
    explanation: "The Master data badge indicates the data is a core, single-source-of-truth for the organization. It can only be applied to items that contain data, such as lakehouses and semantic models, and only by users authorized by the Fabric administrator.",
    source: { title: "Endorsement overview", url: "https://learn.microsoft.com/fabric/governance/endorsement-overview" }
  },
  {
    id: 7, skill: 1, section: "1B", bullet: "version-control",
    topic: "Git Integration (CI)",
    question: "In Fabric CI/CD, what is the role of Git integration?",
    options: [
      "It promotes content between development, test, and production stages",
      "It synchronizes workspace items with a version control repository (Azure DevOps or GitHub) for change tracking and collaboration",
      "It refreshes Direct Lake semantic models",
      "It applies sensitivity labels"
    ],
    correct: 1,
    explanation: "Git integration (continuous integration) synchronizes workspace items with version control repositories such as Azure DevOps or GitHub, enabling version control, branching, pull requests, and change tracking. Deployment pipelines handle the continuous deployment side.",
    source: { title: "CI/CD for pipelines in Data Factory in Microsoft Fabric", url: "https://learn.microsoft.com/fabric/data-factory/cicd-pipelines" }
  },
  {
    id: 8, skill: 1, section: "1B", bullet: "pbip-project",
    topic: "Power BI Project (.pbip)",
    question: "What is a key advantage of using a Power BI project (.pbip) file in Power BI Desktop developer mode over a .pbix file?",
    options: [
      "It stores the data in the file so reports work offline",
      "It separates the semantic model and report items as text files, enabling source control and concurrent collaboration",
      "It only works with Direct Lake models",
      "It automatically certifies the model"
    ],
    correct: 1,
    explanation: "A .pbip project file (unlike .pbix or .pbit) purposefully separates the semantic model and report items, enabling advanced editing in a code editor, multiple creators working concurrently, source control integration (Fabric Git), and CI/CD. Project files don't contain data.",
    source: { title: "Microsoft Fabric adoption roadmap: Power BI project files", url: "https://learn.microsoft.com/power-bi/guidance/fabric-adoption-roadmap-mentoring-and-user-enablement#power-bi-project-files" }
  },
  {
    id: 9, skill: 1, section: "1B", bullet: "deployment-pipelines",
    topic: "Deployment Pipelines",
    question: "When you deploy content from one stage to the next in a Fabric deployment pipeline, what is copied?",
    options: [
      "Only the data in the tables",
      "Only metadata (item definitions); data isn't copied",
      "Both the metadata and all of the underlying data",
      "Nothing — deployment only validates content"
    ],
    correct: 1,
    explanation: "Deployment pipelines (continuous deployment) promote content across Development, Test, and Production stages. Only metadata is copied during deployment; data isn't copied. Each stage is linked to its own workspace.",
    source: { title: "Source control and deployment pipelines (Overview)", url: "https://learn.microsoft.com/fabric/data-engineering/graphql-source-control-and-deployment#overview" }
  },
  {
    id: 10, skill: 1, section: "1B", bullet: "deployment-pipelines",
    topic: "Pipeline Stages",
    question: "A team wants an automated release flow that promotes tested semantic models from a development workspace to a test workspace and then to a production workspace. Which Fabric capability fits this directly?",
    options: [
      "Git integration alone",
      "Deployment pipelines with Development, Test, and Production stages",
      "OneLake shortcuts",
      "Incremental refresh policies"
    ],
    correct: 1,
    explanation: "Deployment pipelines let you create stages (typically Development, Test, Production) each linked to a workspace, and promote items from one stage to the next in a controlled manner. This is the continuous deployment mechanism in Fabric.",
    source: { title: "CI/CD for pipelines in Data Factory in Microsoft Fabric (Deployment pipelines)", url: "https://learn.microsoft.com/fabric/data-factory/cicd-pipelines#deployment-pipelines" }
  },
  {
    id: 11, skill: 1, section: "1B", bullet: "impact-analysis",
    topic: "Downstream Impact Analysis",
    question: "Before deploying changes to a semantic model, a Fabric deployment pipeline shows an orange 'X' between two stages. What does the Review Changes / Change Review screen help you understand?",
    options: [
      "The capacity cost of the deployment",
      "The difference between the items (e.g., semantic models) in the two stages so you can review the downstream impact before deploying",
      "Which users have Viewer access",
      "The sensitivity label applied to each item"
    ],
    correct: 1,
    explanation: "When content differs between stages, the pipeline shows an indicator and lets you Review Changes. The Change Review screen shows the difference between the semantic models in the two stages so you can assess the impact of downstream dependencies before promoting the change.",
    source: { title: "Tutorial: Application lifecycle management in Fabric (Compare stages)", url: "https://learn.microsoft.com/fabric/cicd/cicd-tutorial#step-11-compare-stages-in-deployment-pipeline" }
  },
  {
    id: 12, skill: 1, section: "1B", bullet: "xmla-deploy",
    topic: "XMLA Endpoint Deployment",
    question: "Which tool connects to the read-write XMLA endpoint to perform schema compare and deploy semantic model metadata across environments while retaining incremental refresh history?",
    options: [
      "ALM Toolkit",
      "The SharePoint admin center",
      "Microsoft Defender XDR",
      "Power Query Online"
    ],
    correct: 0,
    explanation: "ALM Toolkit is an open-source schema compare tool for Power BI semantic models. It connects through the XMLA endpoint to deploy metadata across environments and retain incremental refresh historical data, and to diff/merge metadata. Write operations require the read-write XMLA endpoint.",
    source: { title: "Semantic model connectivity with the XMLA endpoint", url: "https://learn.microsoft.com/fabric/enterprise/powerbi/service-premium-connect-tools#client-applications-and-tools" }
  },
  {
    id: 13, skill: 1, section: "1B", bullet: "reusable-assets",
    topic: "Reusable Templates (.pbit)",
    question: "What does a Power BI template (.pbit) file contain?",
    options: [
      "The full report data plus the model",
      "Report pages, the data model definition (schema, relationships, measures), and all query definitions — but no data",
      "Only a connection string",
      "Only DAX measures"
    ],
    correct: 1,
    explanation: "A .pbit template file contains report pages and visuals, the data model definition (schema, relationships, measures), and all query definitions — but not the report data. This makes it smaller and safe to share for promoting consistency and reuse.",
    source: { title: "Create and use report templates in Power BI Desktop", url: "https://learn.microsoft.com/power-bi/create-reports/desktop-templates#creating-report-templates" }
  },
  {
    id: 14, skill: 1, section: "1B", bullet: "reusable-assets",
    topic: "Reusable Connections (.pbids)",
    question: "A BI lead wants to give new report authors a file that, when opened, prompts only for credentials and a table selection against a predefined data source. Which reusable asset fits?",
    options: [
      "A .pbids (Power BI data source) file",
      "A .pbit template file",
      "A .pbip project file",
      "A deployment pipeline"
    ],
    correct: 0,
    explanation: "A .pbids file is a Power BI data source file that specifies a single data source. When an author opens it, Power BI Desktop prompts for credentials and shows the Navigator to pick tables — streamlining the Get Data experience without including authentication or schema details.",
    source: { title: "Get data in Power BI Desktop (Use PBIDS files)", url: "https://learn.microsoft.com/power-bi/connect-data/desktop-data-sources#use-pbids-files-to-get-data" }
  },

  // ============================================================
  // DOMAIN 2: Prepare data (45–50% — largest)
  // ============================================================
  {
    id: 15, skill: 2, section: "2A", bullet: "data-connections",
    topic: "OneLake Catalog Discovery",
    question: "Which Fabric experience makes it easy to find, explore, and use the Fabric data items in your organization that you have access to?",
    options: [
      "The OneLake catalog",
      "The Exchange admin center",
      "Power Query Editor",
      "The DAX query view"
    ],
    correct: 0,
    explanation: "The OneLake catalog makes it easy to find, explore, and use the Fabric data items you have access to, with filtering and search to surface relevant data. Endorsed items are given priority in catalog discovery.",
    source: { title: "Governance overview and guidance (OneLake catalog)", url: "https://learn.microsoft.com/fabric/governance/governance-compliance-overview#encourage-data-discovery,-trust,-and-use" }
  },
  {
    id: 16, skill: 2, section: "2A", bullet: "data-connections",
    topic: "Real-Time Hub Discovery",
    question: "Where in Fabric can you discover all streaming data — eventstreams and KQL tables — across the organization in one tenant-wide place?",
    options: [
      "The Real-Time hub",
      "The SQL analytics endpoint",
      "The deployment pipeline view",
      "Power BI Desktop"
    ],
    correct: 0,
    explanation: "The Real-Time hub is a single, tenant-wide place for streaming data. Every Fabric tenant is automatically provisioned with it. It lists all the streams (from eventstreams) and KQL tables you can access, so you can discover, ingest, and act on streaming data.",
    source: { title: "Introduction to Fabric Real-Time hub", url: "https://learn.microsoft.com/fabric/real-time-hub/real-time-hub-overview" }
  },
  {
    id: 17, skill: 2, section: "2A", bullet: "ingest-access",
    topic: "OneLake Shortcuts",
    question: "You need lakehouse tables to reference data in an Azure Data Lake Storage Gen2 account without copying the data into OneLake. What should you create?",
    options: [
      "A deployment pipeline",
      "An external OneLake shortcut to ADLS Gen2",
      "A calculation group",
      "A sensitivity label"
    ],
    correct: 1,
    explanation: "OneLake shortcuts let you reference data in place. External shortcuts point to sources such as ADLS Gen2, Amazon S3, and others using a cloud connection with stored credentials, making the data accessible in OneLake without copying it.",
    source: { title: "OneLake shortcuts (Types of shortcuts)", url: "https://learn.microsoft.com/fabric/onelake/onelake-shortcuts#types-of-shortcuts" }
  },
  {
    id: 18, skill: 2, section: "2A", bullet: "ingest-access",
    topic: "Internal Shortcut Authorization",
    question: "When a user accesses data through an internal OneLake shortcut (for example, to another lakehouse), whose identity is used to authorize access to the target data?",
    options: [
      "The identity of the calling user",
      "Always the workspace admin's identity",
      "A fixed service principal",
      "No authorization is performed"
    ],
    correct: 0,
    explanation: "For internal OneLake shortcuts, OneLake uses the identity of the calling user to authorize access to the target data, so that user must have read permission on the target location. External shortcuts instead use a cloud connection with stored credentials.",
    source: { title: "OneLake shortcuts (Internal OneLake shortcuts)", url: "https://learn.microsoft.com/fabric/onelake/onelake-shortcuts#types-of-shortcuts" }
  },
  {
    id: 19, skill: 2, section: "2A", bullet: "ingest-access",
    topic: "Low-code Ingestion",
    question: "Which low-code Fabric tool uses the familiar Power Query experience to ingest and transform data from hundreds of sources and load it into a lakehouse or warehouse?",
    options: [
      "Dataflow Gen2",
      "A KQL queryset",
      "The XMLA endpoint",
      "A calculation group"
    ],
    correct: 0,
    explanation: "Dataflow Gen2 provides a low-code Power Query interface to ingest data from hundreds of sources, apply 300+ transformations, and load results into destinations such as a lakehouse or warehouse. It can run standalone or as a pipeline activity.",
    source: { title: "What is Dataflow Gen2?", url: "https://learn.microsoft.com/fabric/data-factory/dataflows-gen2-overview" }
  },
  {
    id: 20, skill: 2, section: "2A", bullet: "choose-data-store",
    topic: "Lakehouse vs Warehouse",
    question: "A team needs full transactional T-SQL support — DDL and DML including INSERT, UPDATE, and DELETE — on data in OneLake. Which Fabric store should they choose?",
    options: [
      "The SQL analytics endpoint of a lakehouse",
      "A Fabric Data Warehouse",
      "A KQL database",
      "A Power BI semantic model"
    ],
    correct: 1,
    explanation: "The Fabric Data Warehouse provides full transactional T-SQL with multi-table ACID transactions (DDL and DML query support). The SQL analytics endpoint of a lakehouse is read-only — you can create views/functions/procedures and run SELECT, but to modify data you must use Spark in the lakehouse.",
    source: { title: "What is Fabric Data Warehouse? (Data warehousing items)", url: "https://learn.microsoft.com/fabric/data-warehouse/data-warehousing#data-warehousing-items" }
  },
  {
    id: 21, skill: 2, section: "2A", bullet: "choose-data-store",
    topic: "Eventhouse for Streaming",
    question: "Which Fabric store is the ideal analytics engine for time-based, streaming events of structured, semi-structured, and unstructured data, automatically indexed and partitioned by ingestion time?",
    options: [
      "A Fabric Data Warehouse",
      "An Eventhouse (KQL databases)",
      "A Power BI .pbit template",
      "A deployment pipeline"
    ],
    correct: 1,
    explanation: "An eventhouse is a collection of KQL databases tailored to time-based, streaming events. Data is automatically indexed and partitioned based on ingestion time for fast, complex analytic querying — even during real-time ingestion.",
    source: { title: "What is Real-Time Intelligence? (Store and analyze data)", url: "https://learn.microsoft.com/fabric/real-time-intelligence/overview#how-do-i-interact-with-the-components-of-real-time-intelligence" }
  },
  {
    id: 22, skill: 2, section: "2A", bullet: "onelake-integration",
    topic: "Eventhouse OneLake Availability",
    question: "How is eventhouse data made available to other Fabric experiences for analytics?",
    options: [
      "It is exported to email",
      "Data stored in eventhouses can be made available in OneLake, and can be queried via KQL or a managed SQL analytics endpoint for T-SQL",
      "It can only be queried inside the eventhouse itself",
      "It must be copied into a warehouse first"
    ],
    correct: 1,
    explanation: "Fabric makes data stored in eventhouses available in OneLake for other Fabric processes. You can query it with native KQL and through a managed SQL analytics endpoint for T-SQL analytics, aligned with the eventhouse data model.",
    source: { title: "What is Real-Time Intelligence? (Store and analyze data)", url: "https://learn.microsoft.com/fabric/real-time-intelligence/overview#how-do-i-interact-with-the-components-of-real-time-intelligence" }
  },
  {
    id: 23, skill: 2, section: "2A", bullet: "onelake-integration",
    topic: "Direct Lake on OneLake",
    question: "Which semantic-model capability lets Power BI query Delta tables stored in OneLake directly, without importing data or running a dedicated refresh cycle?",
    options: [
      "Import mode",
      "Direct Lake mode",
      "A .pbids connection file",
      "A KQL queryset"
    ],
    correct: 1,
    explanation: "Direct Lake mode consumes Delta/parquet files directly from OneLake into the Power BI engine, without importing or duplicating data and without a dedicated semantic model refresh cycle. This OneLake integration combines the performance of Import with the freshness of DirectQuery.",
    source: { title: "Power BI semantic models in Microsoft Fabric (Direct Lake mode)", url: "https://learn.microsoft.com/fabric/data-warehouse/semantic-models#direct-lake-mode" }
  },
  {
    id: 24, skill: 2, section: "2B", bullet: "views-functions-procs",
    topic: "Stored Procedures for Transformation",
    question: "In a Fabric warehouse, what is a recommended way to encapsulate a transformation that creates an aggregated table by joining a fact table to a dimension table?",
    options: [
      "A Power BI report visual",
      "A T-SQL stored procedure",
      "A sensitivity label",
      "A deployment pipeline stage"
    ],
    correct: 1,
    explanation: "Fabric Data Warehouse supports T-SQL stored procedures. A common pattern is to create a stored procedure (for example, populate_aggregate_sale_by_city) that creates an aggregate table and inserts data via a group-by query joining the fact and dimension tables.",
    source: { title: "Tutorial: Transform data with a stored procedure in a Warehouse", url: "https://learn.microsoft.com/fabric/data-warehouse/tutorial-transform-data" }
  },
  {
    id: 25, skill: 2, section: "2B", bullet: "views-functions-procs",
    topic: "T-SQL Surface (Views/Functions/Procs)",
    question: "Which objects can you create on top of Delta tables in the SQL analytics endpoint of a lakehouse?",
    options: [
      "Views, functions, and stored procedures (but you can't INSERT/UPDATE/DELETE the underlying data)",
      "Nothing — the endpoint only allows SELECT",
      "Tables with full DML support",
      "Only Power BI measures"
    ],
    correct: 0,
    explanation: "In the SQL analytics endpoint you can create T-SQL views, functions, and stored procedures over the Delta tables, but creating/altering/dropping tables and INSERT/UPDATE/DELETE are only supported in the Warehouse, not the lakehouse SQL analytics endpoint.",
    source: { title: "T-SQL surface area in Fabric Data Warehouse", url: "https://learn.microsoft.com/fabric/data-warehouse/tsql-surface-area#t-sql-surface-area" }
  },
  {
    id: 26, skill: 2, section: "2B", bullet: "star-schema-build",
    topic: "Star Schema",
    question: "Which design is the recommended approach for a Fabric warehouse and a prerequisite for enterprise Power BI semantic models?",
    options: [
      "A fully normalized OLTP schema",
      "A star schema of fact tables and dimension tables",
      "A single wide flat table only",
      "A graph database"
    ],
    correct: 1,
    explanation: "A star schema — fact tables surrounded by dimension tables — is the recommended dimensional modeling approach for a Fabric Warehouse and is considered a prerequisite for enterprise Power BI semantic models. It delivers high-performance analytic queries with fewer joins.",
    source: { title: "Dimensional modeling in Fabric Data Warehouse (Star schema design)", url: "https://learn.microsoft.com/fabric/data-warehouse/dimensional-modeling-overview#star-schema-design" }
  },
  {
    id: 27, skill: 2, section: "2B", bullet: "star-schema-build",
    topic: "Fact vs Dimension Tables",
    question: "In a star schema, which table type stores the quantitative measurements (such as sales amounts) together with dimension keys?",
    options: [
      "Dimension tables",
      "Fact tables",
      "Bridge tables",
      "Integration/staging tables"
    ],
    correct: 1,
    explanation: "Fact tables store measurements associated with observations or events (for example, sales orders), containing dimension keys plus granular values that can be aggregated. Dimension tables describe the entities (products, customers, dates) used to filter and group the facts.",
    source: { title: "Dimensional modeling in Fabric Data Warehouse (Star schema design)", url: "https://learn.microsoft.com/fabric/data-warehouse/dimensional-modeling-overview#star-schema-design" }
  },
  {
    id: 28, skill: 2, section: "2B", bullet: "star-schema-build",
    topic: "Slowly Changing Dimensions",
    question: "A dimension table must preserve historical versions of a member when an attribute changes (e.g., a salesperson moves region). Which SCD type should you implement?",
    options: [
      "SCD type 1 (overwrite)",
      "SCD type 2 (insert a new versioned member)",
      "No SCD — truncate and full reload",
      "SCD type 0 (delete the row)"
    ],
    correct: 1,
    explanation: "SCD type 2 inserts a new time-based versioned dimension member, expiring the prior version (end-date + IsCurrent flag) so history is preserved. SCD type 1 simply overwrites the existing row, losing history. You should never truncate-and-reload a dimension that uses surrogate keys.",
    source: { title: "Dimensional modeling in Fabric Warehouse: Dimension tables", url: "https://learn.microsoft.com/fabric/data-warehouse/dimensional-modeling-dimension-tables#dimension-design-concepts" }
  },
  {
    id: 29, skill: 2, section: "2B", bullet: "denormalize-aggregate",
    topic: "Aggregate & Enrich",
    question: "After ingesting raw sales data into a lakehouse, a team wants to remove duplicates, standardize names, apply business rules, and write cleaned results to curated Gold-layer tables without writing code. What should they use?",
    options: [
      "A Dataflow Gen2 (Power Query)",
      "A calculation group",
      "A deployment pipeline",
      "A sensitivity label"
    ],
    correct: 0,
    explanation: "Dataflow Gen2 uses Power Query to apply filters, derive columns, aggregate, merge queries, remove duplicates, and apply business rules through a visual workflow, then write the cleaned results to curated lakehouse (Gold) or warehouse tables — all low-code.",
    source: { title: "Prepare and transform data in Microsoft Fabric", url: "https://learn.microsoft.com/fabric/fundamentals/prepare-transform-data" }
  },
  {
    id: 30, skill: 2, section: "2B", bullet: "denormalize-aggregate",
    topic: "Rapidly Changing Attributes",
    question: "You anticipate a dimension attribute (such as product price) that changes very frequently. What does Microsoft guidance recommend?",
    options: [
      "Implement SCD type 2 with thousands of versions",
      "Move the frequently changing attribute to the fact table (e.g., as a measure if numeric)",
      "Delete the dimension entirely",
      "Store it only in a Power BI report"
    ],
    correct: 1,
    explanation: "For a rapidly changing dimension attribute, guidance recommends adding that attribute to the fact table instead of generating an overwhelming number of SCD type 2 versions. If the attribute is numeric (like price), it can be added as a measure in the fact table.",
    source: { title: "Dimensional modeling in Fabric Warehouse: Dimension tables", url: "https://learn.microsoft.com/fabric/data-warehouse/dimensional-modeling-dimension-tables#dimension-design-concepts" }
  },
  {
    id: 31, skill: 2, section: "2B", bullet: "merge-join",
    topic: "Cross-Database Joins via Shortcuts",
    question: "Using only the SQL analytics endpoint, how can you join a Delta table in one lakehouse to a Delta table in a different workspace in a single query?",
    options: [
      "Export both to CSV first",
      "Use OneLake shortcuts to reference the external Delta tables, then join them in one T-SQL query",
      "It isn't possible without a warehouse",
      "Use a calculation group"
    ],
    correct: 1,
    explanation: "The SQL analytics endpoint can query across workspaces by using OneLake shortcuts to reference Delta tables in other lakehouses or warehouses, then joining them in a single T-SQL query.",
    source: { title: "What is the SQL analytics endpoint for a lakehouse? (What you can do)", url: "https://learn.microsoft.com/fabric/data-engineering/lakehouse-sql-analytics-endpoint#what-you-can-do" }
  },
  {
    id: 32, skill: 2, section: "2B", bullet: "clean-data",
    topic: "Handle Nulls / Filter",
    question: "In a Dataflow Gen2 heavy-shaping scenario, a team filters numeric columns to keep positive values, replaces nulls in a passenger_count column with 1, and maps payment codes. Which engine option can significantly speed up these non-foldable transformations while keeping no-code authoring?",
    options: [
      "Modern Evaluator",
      "DirectQuery fallback",
      "Calculation groups",
      "The XMLA endpoint"
    ],
    correct: 0,
    explanation: "Enabling the Modern Evaluator high-performance execution engine in Dataflow Gen2 can run heavy data-shaping workloads (filtering, null replacement, code mapping) significantly faster — about 1.6x faster than the Gen1 baseline in Microsoft's example — while preserving the no-code Power Query experience.",
    source: { title: "Microsoft Fabric decision guide: Choose a dataflow strategy", url: "https://learn.microsoft.com/fabric/data-factory/decision-guide-data-transformation#scenario-2-heavy-data-shaping" }
  },
  {
    id: 33, skill: 2, section: "2B", bullet: "clean-data",
    topic: "Surrogate Keys",
    question: "What is the recommended approach for the surrogate key of a dimension table in a Fabric warehouse?",
    options: [
      "Reuse the source business key directly",
      "Use the smallest possible integer data type, typically created with an IDENTITY column",
      "Use a GUID string for every row",
      "Avoid keys entirely"
    ],
    correct: 1,
    explanation: "Each dimension table should have a surrogate key using the smallest possible integer data type, typically created with an IDENTITY column (available in Fabric Data Warehouse with some limitations). Surrogate keys decouple the dimension from source business keys and support SCD type 2 versioning.",
    source: { title: "Dimensional modeling in Fabric Warehouse: Load tables (Surrogate keys)", url: "https://learn.microsoft.com/fabric/data-warehouse/dimensional-modeling-load-tables#process-dimension-tables" }
  },
  {
    id: 34, skill: 2, section: "2C", bullet: "visual-query-sql",
    topic: "Visual Query / SQL Endpoint",
    question: "Which statement about the lakehouse SQL analytics endpoint query surface is correct?",
    options: [
      "It supports full INSERT/UPDATE/DELETE on Delta tables",
      "It is read-only over Delta tables — you can run T-SQL SELECT queries but must use Spark to modify data",
      "It only supports KQL",
      "It requires a separate warehouse to query"
    ],
    correct: 1,
    explanation: "The SQL analytics endpoint operates in read-only mode over Delta tables. You can run T-SQL SELECT statements (and the visual query editor), create views/functions/procedures, and apply SQL security, but to modify data you switch to the lakehouse and use Spark.",
    source: { title: "What is the SQL analytics endpoint for a lakehouse?", url: "https://learn.microsoft.com/fabric/data-engineering/lakehouse-sql-analytics-endpoint" }
  },
  {
    id: 35, skill: 2, section: "2C", bullet: "visual-query-sql",
    topic: "Delta Table Visibility",
    question: "A user created an external Delta table with Spark code, but it doesn't appear in the SQL analytics endpoint. What is the recommended fix?",
    options: [
      "Convert the table to CSV",
      "Create a shortcut in the Tables section to make the external Delta table visible to the SQL analytics endpoint",
      "Recreate it as a Power BI measure",
      "Disable the SQL analytics endpoint"
    ],
    correct: 1,
    explanation: "External Delta tables created with Spark code aren't automatically visible to the SQL analytics endpoint. Creating a shortcut in the Tables section makes those external Delta tables visible and queryable through the endpoint. Only tables in the /Tables folder are exposed.",
    source: { title: "Shortcuts in a lakehouse (Supported shortcut sources)", url: "https://learn.microsoft.com/fabric/data-engineering/lakehouse-shortcuts#supported-shortcut-sources" }
  },
  {
    id: 36, skill: 2, section: "2C", bullet: "kql-query",
    topic: "KQL Queryset",
    question: "Which Fabric item is used to run KQL queries, view results, and save or share those queries against data in a KQL database?",
    options: [
      "A KQL queryset",
      "A .pbit template",
      "A deployment pipeline",
      "A Power BI report"
    ],
    correct: 0,
    explanation: "A KQL queryset is the item used to run queries, view and manipulate results on data from a KQL database, and to save, export, or share queries. KQL databases live under an eventhouse.",
    source: { title: "Fabric terminology (Real-Time Intelligence)", url: "https://learn.microsoft.com/fabric/fundamentals/fabric-terminology#real-time-intelligence" }
  },
  {
    id: 37, skill: 2, section: "2C", bullet: "kql-query",
    topic: "Querying Eventhouse Data",
    question: "Which two query languages can you use to analyze data stored in a Fabric eventhouse?",
    options: [
      "Only DAX",
      "Native KQL and T-SQL (through the managed SQL analytics endpoint)",
      "Only Spark SQL",
      "Only Power Query M"
    ],
    correct: 1,
    explanation: "Eventhouse data can be queried in native KQL (Kusto Query Language) and through a managed SQL analytics endpoint for T-SQL analytics. KQL is optimized for structured, semi-structured, and unstructured streaming data.",
    source: { title: "What is Real-Time Intelligence? (Store and analyze data)", url: "https://learn.microsoft.com/fabric/real-time-intelligence/overview#how-do-i-interact-with-the-components-of-real-time-intelligence" }
  },
  {
    id: 38, skill: 2, section: "2C", bullet: "dax-query",
    topic: "DAX Iterator (SUMX)",
    question: "Which DAX function evaluates an expression for each row of a table and sums the result, making it an iterator function?",
    options: ["SUM", "SUMX", "CALCULATE", "RELATED"],
    correct: 1,
    explanation: "SUMX is an iterator function: it takes a table as its first argument and an expression evaluated for each row, then sums the results. Use SUM when you only need to sum a single column without per-row evaluation.",
    source: { title: "SUMX (DAX)", url: "https://learn.microsoft.com/dax/sumx-function-dax" }
  },
  {
    id: 39, skill: 2, section: "2C", bullet: "dax-query",
    topic: "DAX Analysis",
    question: "You need a measure that returns the running sum of Total Sales by month, restarting for every fiscal year. Which DAX window function is appropriate?",
    options: [
      "WINDOW with PARTITIONBY",
      "RELATED",
      "USERNAME",
      "FORMAT"
    ],
    correct: 0,
    explanation: "The WINDOW function (a DAX window function) returns multiple rows within a given interval and, combined with ORDERBY/PARTITIONBY, computes results like a running sum that restarts per partition (for example, per fiscal year).",
    source: { title: "WINDOW (DAX)", url: "https://learn.microsoft.com/dax/window-function-dax#example-2---measure" }
  },

  // ============================================================
  // DOMAIN 3: Implement and manage semantic models (25–30%)
  // ============================================================
  {
    id: 40, skill: 3, section: "3A", bullet: "storage-mode",
    topic: "Storage Modes",
    question: "Which semantic model storage mode copies data into an in-memory cache at refresh time, giving the fastest query performance but introducing latency between source updates and report visibility?",
    options: ["Import mode", "DirectQuery mode", "Direct Lake mode", "Dual mode only"],
    correct: 0,
    explanation: "Import mode copies data into the model's in-memory cache at refresh time, so query performance is fastest but there's latency until the next refresh. DirectQuery queries the source at runtime (fresh but slower); Direct Lake reads Delta files in OneLake directly.",
    source: { title: "Store data in Microsoft Fabric (Semantic model)", url: "https://learn.microsoft.com/fabric/fundamentals/store-data#semantic-model-for-business-logic-and-reporting" }
  },
  {
    id: 41, skill: 3, section: "3A", bullet: "storage-mode",
    topic: "Choosing Direct Lake",
    question: "For analyzing very large datasets with frequent source updates while avoiding data duplication, which storage mode is recommended?",
    options: [
      "Import mode",
      "DirectQuery mode",
      "Direct Lake mode",
      "Push semantic models"
    ],
    correct: 2,
    explanation: "Direct Lake combines the advantages of DirectQuery and Import while avoiding their disadvantages — it eliminates the import copy by consuming data files directly, picking up source changes, and is the ideal choice for very large datasets and datasets with frequent updates.",
    source: { title: "Power BI semantic models in Microsoft Fabric (Direct Lake mode)", url: "https://learn.microsoft.com/fabric/data-warehouse/semantic-models#direct-lake-mode" }
  },
  {
    id: 42, skill: 3, section: "3A", bullet: "relationships",
    topic: "Many-to-Many via Bridge Table",
    question: "To model a many-to-many relationship between Customers and Accounts (joint account holders), what should you add?",
    options: [
      "A bridging table that stores one row per customer-account association, related one-to-many to each table",
      "A single calculation group",
      "A composite key on the fact table only",
      "A sensitivity label"
    ],
    correct: 0,
    explanation: "The classic many-to-many scenario is modeled with a bridging table (a factless fact table) storing each customer-account association. Create one-to-many relationships from each dimension to the bridge, and set one bi-directional relationship so filters propagate to the fact table.",
    source: { title: "Many-to-many relationship guidance", url: "https://learn.microsoft.com/power-bi/guidance/relationships-many-to-many#relate-many-to-many-dimensions" }
  },
  {
    id: 43, skill: 3, section: "3A", bullet: "relationships",
    topic: "Cross-Source Relationships",
    question: "In a composite model, what cardinality is assigned by default to a relationship that goes across two different data sources?",
    options: [
      "One-to-one",
      "Many-to-many",
      "One-to-many",
      "No relationship is allowed"
    ],
    correct: 1,
    explanation: "In composite models, any relationship that crosses sources is created with many-to-many cardinality regardless of the actual cardinality (you can change it afterward). Cross-source relationships are limited relationships and behave differently from intra-source ones.",
    source: { title: "Use composite models in Power BI", url: "https://learn.microsoft.com/power-bi/transform-model/desktop-composite-models#use-composite-models" }
  },
  {
    id: 44, skill: 3, section: "3A", bullet: "dax-functions",
    topic: "Window Function Helpers",
    question: "Which DAX functions are designed specifically to be used together with window functions like INDEX, OFFSET, and WINDOW to control ordering and partitioning?",
    options: [
      "ORDERBY, PARTITIONBY, and MATCHBY",
      "SUM, AVERAGE, and COUNT",
      "RELATED and RELATEDTABLE",
      "FORMAT and BLANK"
    ],
    correct: 0,
    explanation: "ORDERBY, PARTITIONBY, and MATCHBY are special functions used only with DAX window functions (INDEX, OFFSET, WINDOW, RANK, ROWNUMBER). They define the sort order, partitioning, and row-matching that the window functions rely on.",
    source: { title: "Understanding ORDERBY, PARTITIONBY, and MATCHBY functions", url: "https://learn.microsoft.com/dax/best-practices/dax-understand-orderby" }
  },
  {
    id: 45, skill: 3, section: "3A", bullet: "calc-groups-params",
    topic: "Calculation Groups",
    question: "Which DAX function references the measure currently in context inside a calculation item (for example, to wrap it in a time-intelligence calculation like YTD)?",
    options: ["SELECTEDMEASURE()", "RELATED()", "USERNAME()", "BLANK()"],
    correct: 0,
    explanation: "SELECTEDMEASURE() is used in calculation item expressions to reference the measure currently in context. Calculation groups apply a set of calculation items (Current, MTD, QTD, YTD, etc.) to whatever measure is selected, avoiding the need to author each variant separately.",
    source: { title: "Calculation groups (How they work)", url: "https://learn.microsoft.com/analysis-services/tabular-models/calculation-groups?view=sql-analysis-services-2025#how-they-work" }
  },
  {
    id: 46, skill: 3, section: "3A", bullet: "calc-groups-params",
    topic: "Dynamic Format Strings",
    question: "Why use a dynamic format string (via a calculation group or per-measure) rather than the DAX FORMAT function to conditionally format a measure?",
    options: [
      "FORMAT is faster",
      "FORMAT returns a string, forcing an otherwise-numeric measure to become text and breaking visuals like charts; dynamic format strings keep the numeric data type",
      "FORMAT can't be used in measures",
      "Dynamic format strings require no DAX at all"
    ],
    correct: 1,
    explanation: "The FORMAT function returns a string, which forces a numeric measure to be returned as text and can break charts and other visuals that need numeric values. Dynamic format strings conditionally apply a format string while the measure keeps its numeric data type.",
    source: { title: "Create dynamic format strings for measures", url: "https://learn.microsoft.com/power-bi/create-reports/desktop-dynamic-format-strings" }
  },
  {
    id: 47, skill: 3, section: "3A", bullet: "calc-groups-params",
    topic: "Calculation Group Side Effect",
    question: "What happens to all measures in a semantic model as soon as a calculation group is added?",
    options: [
      "They are deleted",
      "Power BI reports use the variant data type for all measures",
      "They become DirectQuery-only",
      "Their format strings are removed"
    ],
    correct: 1,
    explanation: "As soon as a calculation group is added, Power BI reports use the variant data type for all measures. If all calculation groups are later removed, the measures revert to their original data types. This can affect dynamic format strings that reuse a measure (use FORMAT to coerce back to string).",
    source: { title: "Calculation groups (Considerations)", url: "https://learn.microsoft.com/analysis-services/tabular-models/calculation-groups?view=sql-analysis-services-2025#considerations" }
  },
  {
    id: 48, skill: 3, section: "3A", bullet: "large-model-composite",
    topic: "Large Semantic Model Storage Format",
    question: "A semantic model needs to grow beyond the default 1 GB in-memory limit on a Fabric capacity. What must be enabled?",
    options: [
      "Large semantic model storage format",
      "DirectQuery fallback",
      "A sensitivity label",
      "Automatic page refresh"
    ],
    correct: 0,
    explanation: "The Large semantic model storage format setting lets a model exceed the default 1 GB limit (up to the capacity size or admin-set maximum). It's required for models beyond 10 GB and also improves XMLA-based write performance. The Desktop upload size remains limited to 10 GB.",
    source: { title: "Large semantic models in Power BI Premium", url: "https://learn.microsoft.com/fabric/enterprise/powerbi/service-premium-large-models" }
  },
  {
    id: 49, skill: 3, section: "3A", bullet: "large-model-composite",
    topic: "Composite Model on Direct Lake",
    question: "How can you extend a Direct Lake semantic model with additional tables from other sources (Import or DirectQuery)?",
    options: [
      "It is impossible — Direct Lake models can't be extended",
      "Use Power BI Desktop to build a composite model on the Direct Lake semantic model, adding new Import/DirectQuery/Dual tables or calculations",
      "Only by re-importing all data",
      "By converting it to a KQL database"
    ],
    correct: 1,
    explanation: "Although you can't mix Direct Lake on SQL endpoint tables with DirectQuery/Dual tables in the same model directly, you can use Power BI Desktop to build a composite model on top of a Direct Lake semantic model and extend it with new Import, DirectQuery, or Dual tables and calculations.",
    source: { title: "Direct Lake overview (Comparison of storage modes)", url: "https://learn.microsoft.com/fabric/fundamentals/direct-lake-overview#comparison-of-storage-modes" }
  },
  {
    id: 50, skill: 3, section: "3B", bullet: "query-visual-perf",
    topic: "Direct Lake Query Performance",
    question: "Which factor most directly improves Direct Lake query performance by letting the VertiScan engine compute results on top of compressed data?",
    options: [
      "V-Order compression of the Delta tables",
      "Using string data types for keys",
      "Maximizing column cardinality",
      "Disabling all relationships"
    ],
    correct: 0,
    explanation: "V-Order compression boosts Direct Lake performance because VertiScan can compute results directly on top of V-Order compressed data, skipping decompression. Using appropriate (integer) data types, larger segment sizes, and lower cardinality also help.",
    source: { title: "Understand Direct Lake query performance", url: "https://learn.microsoft.com/fabric/fundamentals/direct-lake-understand-storage#what-affects-direct-lake-query-performance" }
  },
  {
    id: 51, skill: 3, section: "3B", bullet: "direct-lake-optimize",
    topic: "DirectQuery Fallback",
    question: "For a Direct Lake on SQL endpoint semantic model, which situation causes a query to fall back to DirectQuery mode?",
    options: [
      "Using V-Order compression",
      "Querying a table in the SQL analytics endpoint that enforces row-level security, or exceeding the capacity guardrails",
      "Adding a measure",
      "Enabling automatic updates"
    ],
    correct: 1,
    explanation: "With Direct Lake on SQL endpoints, queries fall back to DirectQuery mode when the model queries a view in the SQL analytics endpoint, a table that enforces RLS, or when a Delta table exceeds the capacity guardrails. Fallback can be slower, so design to avoid it.",
    source: { title: "How Direct Lake works (DirectQuery fallback)", url: "https://learn.microsoft.com/fabric/fundamentals/direct-lake-how-it-works#automatic-updates" }
  },
  {
    id: 52, skill: 3, section: "3B", bullet: "direct-lake-optimize",
    topic: "Direct Lake on OneLake vs SQL",
    question: "Which statement correctly contrasts Direct Lake on OneLake with Direct Lake on SQL endpoints regarding DirectQuery fallback?",
    options: [
      "Both support DirectQuery fallback",
      "Direct Lake on OneLake does NOT support DirectQuery fallback (refresh fails / queries error when guardrails are exceeded), while Direct Lake on SQL can fall back",
      "Neither supports fallback",
      "Only Direct Lake on OneLake supports fallback"
    ],
    correct: 1,
    explanation: "Direct Lake on OneLake doesn't support DirectQuery fallback — if guardrails are exceeded, refresh fails (like Import) and the model can't be queried until the Delta tables are optimized. Direct Lake on SQL falls back to DirectQuery (if enabled) and refresh succeeds with a warning.",
    source: { title: "Direct Lake overview (Fabric capacity requirements)", url: "https://learn.microsoft.com/fabric/fundamentals/direct-lake-overview#fabric-capacity-requirements" }
  },
  {
    id: 53, skill: 3, section: "3B", bullet: "incremental-refresh",
    topic: "Incremental Refresh",
    question: "Which two reserved, case-sensitive Power Query parameters must you create to configure incremental refresh in Power BI Desktop?",
    options: [
      "StartDate and EndDate",
      "RangeStart and RangeEnd",
      "MinDate and MaxDate",
      "From and To"
    ],
    correct: 1,
    explanation: "To configure incremental refresh you first create two Power Query date/time parameters with the reserved, case-sensitive names RangeStart and RangeEnd, then filter the table on its date column using them. After publishing, the service overrides these to refresh only recent partitions.",
    source: { title: "Configure incremental refresh and real-time data for Power BI semantic models", url: "https://learn.microsoft.com/power-bi/connect-data/incremental-refresh-overview" }
  }
];
