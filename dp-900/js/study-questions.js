/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// DP-900 Azure Data Fundamentals - Study-mode Questions
// COURSE-DERIVED: each question is written from a specific Microsoft Learn DP-900T00 course unit
// and links to it. These reinforce the study-guide bullets (correct = 0-based index).

const STUDY_QUESTIONS = [
  // ---- Domain 1 ----
  {
    id: 101, skill: 1, section: "1A", bullet: "structured-data",
    topic: "Data Entities and Attributes",
    question: "In data terms, what does an 'entity' typically represent and what are its 'attributes'?",
    options: [
      "A file format; its compression settings",
      "Something important to an organization (e.g., a customer); its characteristics (e.g., name, address)",
      "A database server; its CPU and memory",
      "A SQL statement; its parameters"
    ],
    correct: 1,
    explanation: "Data structures often represent entities important to an organization (such as customers, products, or sales orders), and each entity typically has one or more attributes — characteristics like a customer's name, address, or phone number.",
    source: { title: "Explore core data concepts: Identify data formats (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/2-data-formats" }
  },
  {
    id: 102, skill: 1, section: "1B", bullet: "file-formats",
    topic: "Delta Lake Format",
    question: "Which open-source storage format builds on Parquet by adding a transaction log to enable ACID transactions, data versioning, and reliable updates on files in a data lake?",
    options: ["CSV", "Avro", "Delta Lake", "XML"],
    correct: 2,
    explanation: "Delta Lake is an open-source storage format that builds on Parquet by adding a transaction log, which enables ACID transactions, data versioning, and reliable updates on top of files stored in a data lake.",
    source: { title: "Explore core data concepts: Explore file storage (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/3-file-storage" }
  },
  {
    id: 103, skill: 1, section: "1B", bullet: "database-types",
    topic: "Relational vs Non-relational",
    question: "Which statement about relational and non-relational databases is correct?",
    options: [
      "Relational databases store structured data in tables using keys; non-relational (NoSQL) databases don't apply a relational schema",
      "Non-relational databases always enforce a fixed schema",
      "Relational databases cannot use SQL",
      "Document databases store data as fixed-size binary pages"
    ],
    correct: 0,
    explanation: "Relational databases store structured data in tables that reference one another by keys and are queried with SQL. Non-relational (NoSQL) databases don't apply a relational schema — common types are key-value, document, column family, and graph.",
    source: { title: "Explore core data concepts: Explore databases (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/4-databases" }
  },
  {
    id: 104, skill: 1, section: "1C", bullet: "analytical-workloads",
    topic: "Medallion Architecture",
    question: "In the medallion architecture used to organize data in a lakehouse, which layer holds raw data ingested as-is with no transformations applied?",
    options: ["Gold", "Silver", "Bronze", "Platinum"],
    correct: 2,
    explanation: "The medallion architecture uses three layers: Bronze (raw data ingested as-is, preserving original records), Silver (cleansed and conformed data), and Gold (aggregated, business-ready data modeled for reporting).",
    source: { title: "Explore core data concepts: Analytical data processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/6-analytical-processing" }
  },
  {
    id: 105, skill: 1, section: "1D", bullet: "role-dba",
    topic: "One Person, Multiple Roles",
    question: "According to the course, how do data job roles relate to individual people?",
    options: [
      "Each person can only ever perform one role",
      "Roles define differentiated tasks; the same person might perform multiple roles in an organization",
      "Roles are assigned automatically by Azure",
      "Only large enterprises have any of these roles"
    ],
    correct: 1,
    explanation: "The job roles define differentiated tasks and responsibilities, but in some organizations the same person might perform multiple roles — for example, acting as a database administrator and also as a data engineer.",
    source: { title: "Explore data roles and services: Explore job roles (Training)", url: "https://learn.microsoft.com/training/modules/explore-roles-responsibilities-world-of-data/2-explore-job-roles" }
  },

  // ---- Domain 2 ----
  {
    id: 106, skill: 2, section: "2A", bullet: "sql-statements",
    topic: "DCL Statements",
    question: "A database administrator needs to grant a user permission to read and modify data in a table. Which group of SQL statements is used?",
    options: [
      "Data Definition Language (DDL)",
      "Data Manipulation Language (DML)",
      "Data Control Language (DCL)",
      "Query Optimization Language"
    ],
    correct: 2,
    explanation: "DCL (Data Control Language) statements — GRANT, DENY, and REVOKE — manage access to objects by granting, denying, or revoking permissions. DBAs generally use DCL to control who can do what.",
    source: { title: "Explore relational data: Explore SQL (Training)", url: "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/4-query-with-sql" }
  },
  {
    id: 107, skill: 2, section: "2A", bullet: "database-objects",
    topic: "Stored Procedures",
    question: "Which database object encapsulates SQL statements that run on command and can accept parameters to perform common actions on data?",
    options: ["A view", "A stored procedure", "An index", "A primary key"],
    correct: 1,
    explanation: "A stored procedure defines SQL statements that can be run on command, and can take parameters — encapsulating programmatic logic for actions applications need to perform, such as renaming a product by ID.",
    source: { title: "Explore relational data: Describe database objects (Training)", url: "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/5-database-objects" }
  },
  {
    id: 108, skill: 2, section: "2A", bullet: "sql-statements",
    topic: "JOIN Clause",
    question: "Which SQL clause is used in a SELECT statement to combine rows from two tables based on a related column, typically matching a foreign key to a primary key?",
    options: ["WHERE", "ORDER BY", "JOIN", "GROUP BY"],
    correct: 2,
    explanation: "A JOIN clause indicates how rows in one table connect to rows in another to determine what data to return. A typical join condition matches a foreign key in one table to its associated primary key in the other.",
    source: { title: "Explore relational data: Explore SQL (Training)", url: "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/4-query-with-sql" }
  },
  {
    id: 109, skill: 2, section: "2B", bullet: "azure-sql-family",
    topic: "PaaS vs IaaS Responsibility",
    question: "Which is an advantage of choosing a PaaS option (Azure SQL Database or SQL Managed Instance) over SQL Server on Azure VMs?",
    options: [
      "You get full OS-level control",
      "Microsoft handles patching, backups, and high availability, reducing administration overhead",
      "It is the only option that can run SQL queries",
      "It requires you to manage the virtual machine"
    ],
    correct: 1,
    explanation: "With the PaaS options (SQL Database and SQL Managed Instance) you no longer manage the OS, hardware, or database engine — Microsoft handles patching, backups, and high availability — reducing administration overhead. SQL on VMs (IaaS) gives full control but adds responsibility.",
    source: { title: "What is Azure SQL? (administration)", url: "https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview" }
  },

  // ---- Domain 3 ----
  {
    id: 110, skill: 3, section: "3A", bullet: "blob-storage",
    topic: "Blob Types",
    question: "Which type of Azure blob is optimized for append operations, where you can only add blocks to the end (useful for logging)?",
    options: ["Block blob", "Page blob", "Append blob", "Archive blob"],
    correct: 2,
    explanation: "An append blob is a block blob optimized to support append operations — you can only add blocks to the end; updating or deleting existing blocks isn't supported. Block blobs store discrete large objects; page blobs support random read/write (e.g., VM disks).",
    source: { title: "Explore Azure Storage: Azure blob storage (Training)", url: "https://learn.microsoft.com/training/modules/explore-provision-deploy-non-relational-data-services-azure/2-azure-blob-storage" }
  },
  {
    id: 111, skill: 3, section: "3A", bullet: "table-storage",
    topic: "Table Storage — Denormalization",
    question: "How is data typically organized in an Azure Table storage table compared to a relational database?",
    options: [
      "It is highly normalized with foreign keys and joins",
      "It is usually denormalized, with each row holding the entire data for a logical entity and columns that can vary per row",
      "It must use a fixed schema identical for every row",
      "It supports stored procedures and views like a relational database"
    ],
    correct: 1,
    explanation: "Azure Table storage data is usually denormalized — each row holds all the data for a logical entity, and the columns can vary between rows. Tables have no foreign keys, relationships, stored procedures, or views.",
    source: { title: "Explore Azure Storage: Azure Tables (Training)", url: "https://learn.microsoft.com/training/modules/explore-provision-deploy-non-relational-data-services-azure/5-azure-tables" }
  },
  {
    id: 112, skill: 3, section: "3B", bullet: "cosmos-apis",
    topic: "Cosmos DB APIs — MongoDB",
    question: "A team is migrating an existing MongoDB application to a fully managed Azure database with minimal code changes. Which Cosmos DB API should they use?",
    options: [
      "API for NoSQL",
      "API for MongoDB",
      "API for Apache Gremlin",
      "API for Table"
    ],
    correct: 1,
    explanation: "The API for MongoDB is compatible with MongoDB drivers and client libraries, so existing MongoDB applications can connect to Cosmos DB without significant code changes — a natural choice when migrating a MongoDB workload.",
    source: { title: "Explore Cosmos DB: Identify Cosmos DB APIs (Training)", url: "https://learn.microsoft.com/training/modules/explore-non-relational-data-stores-azure/3-cosmos-db-apis" }
  },
  {
    id: 113, skill: 3, section: "3B", bullet: "cosmos-use-cases",
    topic: "Cosmos DB — Request Units",
    question: "In Azure Cosmos DB, what does the metric Request Units per second (RU/s) represent?",
    options: [
      "The number of regions the data is replicated to",
      "A measure of throughput/capacity, where every operation consumes some RU/s",
      "The maximum size of a single document",
      "The number of APIs enabled on the account"
    ],
    correct: 1,
    explanation: "Cosmos DB measures capacity in Request Units per second (RU/s) — roughly the cost of reading a 1-KB item. Every operation (read, write, query, delete) consumes RU/s, giving a single metric to reason about both performance and cost.",
    source: { title: "Explore Cosmos DB: Describe Azure Cosmos DB (Training)", url: "https://learn.microsoft.com/training/modules/explore-non-relational-data-stores-azure/2-describe-azure-cosmos-db" }
  },

  // ---- Domain 4 ----
  {
    id: 114, skill: 4, section: "4A", bullet: "analytics-cloud-services",
    topic: "OneLake & Direct Lake",
    question: "In Microsoft Fabric, what is OneLake?",
    options: [
      "A relational OLTP database engine",
      "A single, tenant-wide data lake that every Fabric workload shares, using Delta Lake as the standard format",
      "A Power BI visualization type",
      "A real-time event ingestion queue"
    ],
    correct: 1,
    explanation: "OneLake is the single, tenant-wide data lake shared across every Fabric workload. Instead of copying data between silos, every Fabric service reads from and writes to OneLake directly, using Delta Lake as the standard open format.",
    source: { title: "Large-scale analytics: Analytical data stores (Training)", url: "https://learn.microsoft.com/training/modules/examine-components-of-modern-data-warehouse/4-analytical-data-stores" }
  },
  {
    id: 115, skill: 4, section: "4B", bullet: "batch-vs-streaming",
    topic: "Combining Batch and Stream",
    question: "Which architecture is a common pattern for combining batch and stream processing in a large-scale analytics solution?",
    options: ["Star schema", "Lambda architecture", "Medallion tiers", "Snowflake schema"],
    correct: 1,
    explanation: "The lambda architecture is a common pattern that combines a real-time (stream) path and a batch path — capturing streaming data for immediate analysis while also persisting data for later batch processing and historical analysis.",
    source: { title: "Real-time analytics: Batch and stream processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-stream-processing/2-batch-stream" }
  },
  {
    id: 116, skill: 4, section: "4C", bullet: "powerbi-capabilities",
    topic: "Power BI Service vs Desktop",
    question: "After building reports in Power BI Desktop, where do you publish them so business users can interact with them, schedule data refreshes, and share dashboards?",
    options: [
      "Azure Blob storage",
      "The Power BI service (cloud)",
      "Azure Data Factory",
      "A Cosmos DB container"
    ],
    correct: 1,
    explanation: "After creating models and reports in Power BI Desktop, you publish them to the Power BI service — a cloud service where reports can be consumed, data refreshes scheduled, and dashboards and apps shared with other users.",
    source: { title: "Data visualization: Power BI tools and workflow (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-data-visualization/2-power-bi" }
  },
  {
    id: 117, skill: 4, section: "4C", bullet: "powerbi-visualizations",
    topic: "Scatter Plots",
    question: "Which Power BI visualization is most useful for comparing two numeric measures to identify a relationship or correlation between them?",
    options: ["Pie chart", "Scatter plot", "Table", "Map"],
    correct: 1,
    explanation: "Scatter plots are useful when you want to compare two numeric measures and identify a relationship or correlation between them — for example, marketing spend versus revenue.",
    source: { title: "Data visualization: Considerations for data visualization (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-data-visualization/4-data-visualizations" }
  }
];
