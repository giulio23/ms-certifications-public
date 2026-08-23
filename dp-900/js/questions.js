/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// DP-900 Azure Data Fundamentals - Practice Exam Questions
// COURSE-DERIVED: every question is written from the text of a specific Microsoft Learn
// DP-900T00 course unit and its `source` links to that unit (or the matching Azure product
// docs where the course points to them). correct = 0-based index.
// Mapped to the official DP-900 study guide (Skills measured as of November 1, 2024).

const QUESTIONS = [
  // ============================================================
  // DOMAIN 1: Core data concepts (25–30%)
  // ============================================================
  {
    id: 1, skill: 1, section: "1A", bullet: "structured-data",
    topic: "Structured Data",
    question: "A dataset adheres to a fixed schema in which every record has the same columns, represented as rows and columns in tables. How is this data best described?",
    options: ["Unstructured data", "Structured data", "Semi-structured data", "Binary data"],
    correct: 1,
    explanation: "Structured data adheres to a fixed schema so all data has the same fields. Most commonly the schema is tabular — rows representing each instance of an entity and columns representing its attributes — and is often stored in a relational database.",
    source: { title: "Explore core data concepts: Identify data formats (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/2-data-formats" }
  },
  {
    id: 2, skill: 1, section: "1A", bullet: "semi-structured-data",
    topic: "Semi-structured Data",
    question: "Customer records are stored as JSON documents where most customers have an email address, some have several, and a few have none. Which type of data is this?",
    options: ["Structured data", "Semi-structured data", "Unstructured data", "Relational data"],
    correct: 1,
    explanation: "Semi-structured data has some structure but allows variation between entity instances. JSON (JavaScript Object Notation) is a common format for semi-structured data, where the specific fields can vary from one record to another.",
    source: { title: "Explore core data concepts: Identify data formats (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/2-data-formats" }
  },
  {
    id: 3, skill: 1, section: "1A", bullet: "unstructured-data",
    topic: "Unstructured Data",
    question: "Which of the following is an example of unstructured data?",
    options: [
      "A table of customers with fixed columns",
      "A set of JSON documents with varying fields",
      "Documents, images, audio, and video files",
      "A CSV file with a header row"
    ],
    correct: 2,
    explanation: "Unstructured data has no specific structure. Documents, images, audio, video, and binary files are examples — they don't fit a tabular or even a semi-structured schema.",
    source: { title: "Explore core data concepts: Identify data formats (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/2-data-formats" }
  },
  {
    id: 4, skill: 1, section: "1B", bullet: "file-formats",
    topic: "Delimited Text & JSON",
    question: "Which file format stores structured data as plain text with fields separated by commas and is good for data that must be read by a wide range of applications in a human-readable form?",
    options: ["Parquet", "Avro", "CSV (comma-separated values)", "BLOB"],
    correct: 2,
    explanation: "Comma-separated values (CSV) is the most common delimited text format — fields separated by commas, rows terminated by a new line. Delimited text is a good choice for structured data that needs to be accessed by many applications in a human-readable format.",
    source: { title: "Explore core data concepts: Explore file storage (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/3-file-storage" }
  },
  {
    id: 5, skill: 1, section: "1B", bullet: "file-formats",
    topic: "Optimized File Formats",
    question: "Which file format is a columnar format that is the de facto standard for modern data lakehouses and supports efficient compression and encoding?",
    options: ["CSV", "XML", "Parquet", "JSON"],
    correct: 2,
    explanation: "Parquet is a columnar data format optimized for storage and processing — the de facto standard for modern data lakehouses. Data for each column is stored together in row groups, with metadata that helps locate data quickly. Avro, by contrast, is a row-based format.",
    source: { title: "Explore core data concepts: Explore file storage (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/3-file-storage" }
  },
  {
    id: 6, skill: 1, section: "1B", bullet: "database-types",
    topic: "Non-relational Database Types",
    question: "A database stores each record as a unique key with an associated value that can be in any format. Which type of non-relational (NoSQL) database is this?",
    options: ["Document database", "Key-value database", "Graph database", "Column family database"],
    correct: 1,
    explanation: "A key-value database stores each record as a unique key with an associated value in any format. A document database is a specific form of key-value store where the value is a JSON document; graph databases store nodes and relationships; column family databases group columns into families.",
    source: { title: "Explore core data concepts: Explore databases (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/4-databases" }
  },
  {
    id: 7, skill: 1, section: "1B", bullet: "database-types",
    topic: "Graph Databases",
    question: "Which type of non-relational database stores entities as nodes with links that define the relationships between them?",
    options: ["Key-value database", "Document database", "Column family database", "Graph database"],
    correct: 3,
    explanation: "A graph database stores entities as nodes with links (edges) to define relationships between them. This is useful when the connections between data are as important as the data itself.",
    source: { title: "Explore core data concepts: Explore databases (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/4-databases" }
  },
  {
    id: 8, skill: 1, section: "1C", bullet: "transactional-workloads",
    topic: "Transactional Workloads (OLTP)",
    question: "A system records many small, discrete units of work such as payments, optimizing storage for fast create, retrieve, update, and delete (CRUD) operations. What is this type of processing called?",
    options: [
      "Online Analytical Processing (OLAP)",
      "Online Transactional Processing (OLTP)",
      "Batch processing",
      "Stream processing"
    ],
    correct: 1,
    explanation: "Transactional systems record transactions (small discrete units of work) and are often high-volume. This work is referred to as Online Transactional Processing (OLTP); storage is optimized for both reads and writes to support CRUD operations.",
    source: { title: "Explore core data concepts: Transactional data processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/5-transactional-data-processing" }
  },
  {
    id: 9, skill: 1, section: "1C", bullet: "transactional-workloads",
    topic: "ACID Semantics",
    question: "In the ACID properties of a transaction, which property ensures that a transaction is treated as a single unit that either succeeds completely or fails completely?",
    options: ["Consistency", "Isolation", "Atomicity", "Durability"],
    correct: 2,
    explanation: "Atomicity means each transaction is treated as a single unit that succeeds completely or fails completely — e.g., a funds transfer must both debit one account and credit the other, or neither.",
    source: { title: "Explore core data concepts: Transactional data processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/5-transactional-data-processing" }
  },
  {
    id: 10, skill: 1, section: "1C", bullet: "analytical-workloads",
    topic: "Analytical Workloads (OLAP)",
    question: "Which statement best describes an analytical data processing workload?",
    options: [
      "It is optimized for high-volume read/write of individual records in real time",
      "It typically uses read-only (or read-mostly) systems storing large volumes of historical data for reporting and analysis",
      "It only processes streaming data as it arrives",
      "It stores each record as a key-value pair"
    ],
    correct: 1,
    explanation: "Analytical data processing typically uses read-only or read-mostly systems that store vast volumes of historical data or business metrics, supporting reporting, visualization, and analysis — often through data warehouses, data lakes, and OLAP/semantic models.",
    source: { title: "Explore core data concepts: Analytical data processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/6-analytical-processing" }
  },
  {
    id: 11, skill: 1, section: "1C", bullet: "analytical-workloads",
    topic: "ETL vs ELT",
    question: "In an analytics pipeline, data is copied into the analytical store first and transformed afterward. Which pattern is this?",
    options: [
      "ETL (extract, transform, load)",
      "ELT (extract, load, transform)",
      "OLTP",
      "CRUD"
    ],
    correct: 1,
    explanation: "In ELT (extract, load, transform), data is copied to the store and then transformed — a pattern common in modern lakehouses. In ETL the data is transformed before being loaded into the analytical store.",
    source: { title: "Explore core data concepts: Analytical data processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/6-analytical-processing" }
  },
  {
    id: 12, skill: 1, section: "1D", bullet: "role-dba",
    topic: "Database Administrator",
    question: "Which data professional is responsible for the design, implementation, and operation of databases — including backup/recovery plans, performance, and managing security by granting or denying access?",
    options: ["Data analyst", "Data engineer", "Database administrator", "Data scientist"],
    correct: 2,
    explanation: "A database administrator manages databases — overall availability, performance, and optimization — and is responsible for backup and recovery plans and for managing data security by granting or denying access to users.",
    source: { title: "Explore data roles and services: Explore job roles (Training)", url: "https://learn.microsoft.com/training/modules/explore-roles-responsibilities-world-of-data/2-explore-job-roles" }
  },
  {
    id: 13, skill: 1, section: "1D", bullet: "role-data-engineer",
    topic: "Data Engineer",
    question: "Which role manages infrastructure and processes for data integration — building pipelines to ingest, cleanse, and transform data between systems, and ensuring data privacy?",
    options: ["Database administrator", "Data engineer", "Data analyst", "Business user"],
    correct: 1,
    explanation: "A data engineer designs and implements data-related workloads including ingestion pipelines and cleansing/transformation activities across relational and non-relational stores, and owns the management and monitoring of data pipelines.",
    source: { title: "Explore data roles and services: Explore job roles (Training)", url: "https://learn.microsoft.com/training/modules/explore-roles-responsibilities-world-of-data/2-explore-job-roles" }
  },
  {
    id: 14, skill: 1, section: "1D", bullet: "role-data-analyst",
    topic: "Data Analyst",
    question: "Which role explores and analyzes data to identify trends, builds analytical models, and creates reports and visualizations so a business can make informed decisions?",
    options: ["Data engineer", "Database administrator", "Data analyst", "Solution architect"],
    correct: 2,
    explanation: "A data analyst enables businesses to maximize the value of their data by exploring data to identify trends and relationships, designing analytical models, and delivering insights through reports and visualizations.",
    source: { title: "Explore data roles and services: Explore job roles (Training)", url: "https://learn.microsoft.com/training/modules/explore-roles-responsibilities-world-of-data/2-explore-job-roles" }
  },

  // ============================================================
  // DOMAIN 2: Relational data on Azure (20–25%)
  // ============================================================
  {
    id: 15, skill: 2, section: "2A", bullet: "relational-features",
    topic: "Relational Data Features",
    question: "In a relational database, what uniquely identifies each row (instance of an entity) in a table and can be referenced by other tables?",
    options: ["A foreign key only", "A primary key", "An index", "A view"],
    correct: 1,
    explanation: "Each instance of an entity is assigned a primary key that uniquely identifies it, and these keys are used to reference the entity in other tables (as foreign keys). Relational tables store structured data where each row has the same columns.",
    source: { title: "Explore relational data: Understand relational data (Training)", url: "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/2-understand-relational-data" }
  },
  {
    id: 16, skill: 2, section: "2A", bullet: "normalization",
    topic: "Normalization",
    question: "What is the main purpose of normalization in a relational database?",
    options: [
      "To duplicate data across tables for faster reads",
      "To eliminate duplicate data values so that, for example, a customer's details are stored only once",
      "To convert tables into JSON documents",
      "To encrypt the data at rest"
    ],
    correct: 1,
    explanation: "Normalization in part means the elimination of duplicate data values, so that (for example) the details of an individual customer are stored only once rather than for each sales order they place. Keys are used to reference data across tables.",
    source: { title: "Explore core data concepts: Explore databases (Training)", url: "https://learn.microsoft.com/training/modules/explore-core-data-concepts/4-databases" }
  },
  {
    id: 17, skill: 2, section: "2A", bullet: "sql-statements",
    topic: "SQL Statement Groups (DDL/DCL/DML)",
    question: "You need to create and modify tables and other database objects. Which group of SQL statements do you use?",
    options: [
      "Data Manipulation Language (DML)",
      "Data Control Language (DCL)",
      "Data Definition Language (DDL)",
      "Transact-SQL only"
    ],
    correct: 2,
    explanation: "DDL (Data Definition Language) statements — such as CREATE, ALTER, DROP, and RENAME — are used to create, modify, and remove tables and other objects. DML manipulates rows; DCL manages permissions.",
    source: { title: "Explore relational data: Explore SQL (Training)", url: "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/4-query-with-sql" }
  },
  {
    id: 18, skill: 2, section: "2A", bullet: "sql-statements",
    topic: "DML Statements",
    question: "Which SQL statement is used to read (retrieve) rows from a table?",
    options: ["INSERT", "SELECT", "GRANT", "CREATE"],
    correct: 1,
    explanation: "SELECT is the DML statement used to read rows from a table. INSERT adds rows, UPDATE modifies rows, and DELETE removes rows; GRANT is a DCL statement and CREATE is a DDL statement.",
    source: { title: "Explore relational data: Explore SQL (Training)", url: "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/4-query-with-sql" }
  },
  {
    id: 19, skill: 2, section: "2A", bullet: "sql-statements",
    topic: "SQL Dialects",
    question: "Which SQL dialect is used by Microsoft SQL Server, Azure SQL Database, and Azure SQL Managed Instance?",
    options: ["PL/SQL", "pgSQL", "Transact-SQL (T-SQL)", "MQL"],
    correct: 2,
    explanation: "Transact-SQL (T-SQL) is the dialect used by Microsoft SQL Server and the Azure SQL services based on the SQL Server engine. PL/SQL is Oracle's dialect and pgSQL is PostgreSQL's.",
    source: { title: "Explore relational data: Explore SQL (Training)", url: "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/4-query-with-sql" }
  },
  {
    id: 20, skill: 2, section: "2A", bullet: "database-objects",
    topic: "Database Objects — Views",
    question: "What is a view in a relational database?",
    options: [
      "A physical copy of a table stored on disk",
      "A virtual table based on the results of a SELECT query",
      "A stored set of SQL statements that run on command",
      "A sorted copy of a column used to speed up searches"
    ],
    correct: 1,
    explanation: "A view is a virtual table based on the results of a SELECT query — a window onto rows in one or more underlying tables. A stored procedure encapsulates SQL that runs on command; an index speeds up searches.",
    source: { title: "Explore relational data: Describe database objects (Training)", url: "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/5-database-objects" }
  },
  {
    id: 21, skill: 2, section: "2A", bullet: "database-objects",
    topic: "Database Objects — Index",
    question: "Which database object helps the database engine find rows faster by keeping a sorted copy of one or more columns with pointers to the corresponding rows?",
    options: ["A view", "A stored procedure", "An index", "A trigger"],
    correct: 2,
    explanation: "An index keeps a sorted copy of a column with pointers to the matching rows, like the index at the back of a book — letting the query optimizer fetch data faster than scanning the whole table. Indexes consume storage and add overhead to writes.",
    source: { title: "Explore relational data: Describe database objects (Training)", url: "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/5-database-objects" }
  },
  {
    id: 22, skill: 2, section: "2B", bullet: "azure-sql-family",
    topic: "Azure SQL — IaaS vs PaaS",
    question: "A team wants full administrative control over the operating system and the SQL Server instance for a lift-and-shift migration. Which Azure SQL option should they choose?",
    options: [
      "Azure SQL Database (single database)",
      "Azure SQL Managed Instance",
      "SQL Server on Azure Virtual Machines",
      "Azure SQL Database elastic pool"
    ],
    correct: 2,
    explanation: "SQL Server on Azure Virtual Machines is the IaaS option — it gives full control over the OS and SQL Server engine and is best for migrations and applications that require OS-level access. SQL Database and Managed Instance are PaaS and don't expose the OS.",
    source: { title: "What is Azure SQL? (IaaS vs PaaS)", url: "https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview" }
  },
  {
    id: 23, skill: 2, section: "2B", bullet: "azure-sql-family",
    topic: "Azure SQL Managed Instance",
    question: "Which Azure SQL option is a PaaS service offering near 100% compatibility with the SQL Server engine, designed for migrating many on-premises databases with minimal changes?",
    options: [
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "SQL Server on Azure VMs",
      "Azure Database for PostgreSQL"
    ],
    correct: 1,
    explanation: "Azure SQL Managed Instance is a PaaS service with near 100% compatibility with the latest SQL Server engine and native VNet support — best for lift-and-shift migrations of many databases with minimal changes while still getting PaaS benefits like automated patching and backups.",
    source: { title: "What is Azure SQL Managed Instance?", url: "https://learn.microsoft.com/azure/azure-sql/managed-instance/sql-managed-instance-paas-overview" }
  },
  {
    id: 24, skill: 2, section: "2B", bullet: "azure-sql-family",
    topic: "Azure SQL Database",
    question: "Which Azure SQL deployment is a fully managed PaaS option optimized for modern cloud-born applications, available as a single database or an elastic pool?",
    options: [
      "SQL Server on Azure VMs",
      "Azure SQL Database",
      "Azure Database for MySQL",
      "Azure Cosmos DB"
    ],
    correct: 1,
    explanation: "Azure SQL Database is a fully managed PaaS option optimized for modern cloud applications, offered as a single database (its own resources via a logical server) or an elastic pool (databases sharing resources). It minimizes administration — no OS or engine to manage.",
    source: { title: "What is Azure SQL? (service comparison)", url: "https://learn.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview" }
  },
  {
    id: 25, skill: 2, section: "2B", bullet: "open-source-services",
    topic: "Open-source Database Services",
    question: "An organization runs an existing PostgreSQL application and wants a fully managed Azure service for it without managing servers. Which service fits?",
    options: [
      "Azure Database for PostgreSQL",
      "Azure SQL Managed Instance",
      "Azure Cosmos DB for Table",
      "SQL Server on Azure VMs"
    ],
    correct: 0,
    explanation: "Azure provides managed services for popular open-source database engines — Azure Database for PostgreSQL and Azure Database for MySQL — so you can run those open-source systems as fully managed PaaS offerings without managing the underlying infrastructure.",
    source: { title: "Azure Database for PostgreSQL overview", url: "https://learn.microsoft.com/azure/postgresql/flexible-server/service-overview" }
  },

  // ============================================================
  // DOMAIN 3: Non-relational data on Azure (15–20%)
  // ============================================================
  {
    id: 26, skill: 3, section: "3A", bullet: "blob-storage",
    topic: "Azure Blob Storage",
    question: "Which Azure Storage service is designed to store massive amounts of unstructured data as binary large objects, organized in containers?",
    options: ["Azure Files", "Azure Table storage", "Azure Blob storage", "Azure Cosmos DB"],
    correct: 2,
    explanation: "Azure Blob Storage stores massive amounts of unstructured data as blobs (binary large objects). Blobs live in containers within a storage account, and access is controlled at the container level.",
    source: { title: "Explore Azure Storage: Azure blob storage (Training)", url: "https://learn.microsoft.com/training/modules/explore-provision-deploy-non-relational-data-services-azure/2-azure-blob-storage" }
  },
  {
    id: 27, skill: 3, section: "3A", bullet: "blob-storage",
    topic: "Blob Access Tiers",
    question: "Which Azure Blob Storage access tier offers the lowest storage cost but stores data offline, so retrieval can take hours while the blob is rehydrated?",
    options: ["Hot tier", "Cool tier", "Cold tier", "Archive tier"],
    correct: 3,
    explanation: "The Archive tier provides the lowest storage cost but the highest latency — blobs are stored offline and must be rehydrated (changed to Hot, Cool, or Cold) before reading, which can take hours. Hot/Cool/Cold tiers have millisecond read latency.",
    source: { title: "Explore Azure Storage: Azure blob storage (Training)", url: "https://learn.microsoft.com/training/modules/explore-provision-deploy-non-relational-data-services-azure/2-azure-blob-storage" }
  },
  {
    id: 28, skill: 3, section: "3A", bullet: "blob-storage",
    topic: "Storage Redundancy",
    question: "Which Azure Storage redundancy option asynchronously replicates your data to a secondary region hundreds of miles away to protect against a regional disaster?",
    options: [
      "Locally redundant storage (LRS)",
      "Zone-redundant storage (ZRS)",
      "Geo-redundant storage (GRS)",
      "Block blob storage"
    ],
    correct: 2,
    explanation: "Geo-redundant storage (GRS) — and geo-zone-redundant storage (GZRS) — asynchronously replicate data to a secondary region for protection against regional disasters. LRS keeps three copies in one datacenter; ZRS spreads copies across zones in the primary region.",
    source: { title: "Explore Azure Storage: Azure blob storage (Training)", url: "https://learn.microsoft.com/training/modules/explore-provision-deploy-non-relational-data-services-azure/2-azure-blob-storage" }
  },
  {
    id: 29, skill: 3, section: "3A", bullet: "file-storage",
    topic: "Azure Files",
    question: "Which Azure Storage service provides cloud-based network file shares accessible over the SMB and NFS protocols?",
    options: ["Azure Blob storage", "Azure Files", "Azure Table storage", "Azure Cosmos DB"],
    correct: 1,
    explanation: "Azure Files provides cloud-based network shares (like on-premises file shares) that can be mounted by multiple users and applications. It supports the Server Message Block (SMB) and Network File System (NFS) protocols.",
    source: { title: "Explore Azure Storage: Azure Files (Training)", url: "https://learn.microsoft.com/training/modules/explore-provision-deploy-non-relational-data-services-azure/4-azure-files" }
  },
  {
    id: 30, skill: 3, section: "3A", bullet: "table-storage",
    topic: "Azure Table Storage",
    question: "In Azure Table storage, which combination uniquely identifies a row and is used to group and quickly locate related rows?",
    options: [
      "Primary key and foreign key",
      "PartitionKey and RowKey",
      "ContainerKey and BlobKey",
      "DatabaseKey and TableKey"
    ],
    correct: 1,
    explanation: "Azure Table storage is a NoSQL key/value store. Each row's key has two parts: a PartitionKey (groups related rows into a partition) and a RowKey (unique within the partition). Including the partition key in a query narrows the data scanned and improves performance.",
    source: { title: "Explore Azure Storage: Azure Tables (Training)", url: "https://learn.microsoft.com/training/modules/explore-provision-deploy-non-relational-data-services-azure/5-azure-tables" }
  },
  {
    id: 31, skill: 3, section: "3B", bullet: "cosmos-use-cases",
    topic: "Azure Cosmos DB Use Cases",
    question: "Which scenario is the best fit for Azure Cosmos DB?",
    options: [
      "An application needing complex multi-table joins over highly structured relational data",
      "A globally distributed IoT or gaming app needing flexible schema and single-digit millisecond latency",
      "Large-scale historical data warehousing for BI reporting",
      "Storing network file shares for office documents"
    ],
    correct: 1,
    explanation: "Cosmos DB is a strong fit for apps needing flexible schema, global reach, and consistent low latency — IoT/telemetry, gaming, retail/e-commerce, and web/mobile apps. For complex multi-table joins use Azure SQL Database; for large-scale historical analytics use Fabric or Synapse.",
    source: { title: "Explore Cosmos DB: Describe Azure Cosmos DB (Training)", url: "https://learn.microsoft.com/training/modules/explore-non-relational-data-stores-azure/2-describe-azure-cosmos-db" }
  },
  {
    id: 32, skill: 3, section: "3B", bullet: "cosmos-use-cases",
    topic: "Cosmos DB Characteristics",
    question: "Which statement about Azure Cosmos DB is correct?",
    options: [
      "It is an on-premises-only relational database",
      "It is a fully managed (PaaS) NoSQL database that is globally distributed and schema-agnostic",
      "It requires you to define a fixed schema before storing data",
      "It can only be deployed in a single Azure region"
    ],
    correct: 1,
    explanation: "Cosmos DB is a fully managed (PaaS) NoSQL database service that is schema-agnostic (items in a container can have different structures) and built for global distribution — you can add regions and Cosmos DB replicates data automatically for low-latency access.",
    source: { title: "Explore Cosmos DB: Describe Azure Cosmos DB (Training)", url: "https://learn.microsoft.com/training/modules/explore-non-relational-data-stores-azure/2-describe-azure-cosmos-db" }
  },
  {
    id: 33, skill: 3, section: "3B", bullet: "cosmos-apis",
    topic: "Cosmos DB APIs — NoSQL",
    question: "Which Azure Cosmos DB API is the native API, stores data as JSON documents, supports a SQL-like query syntax, and is recommended for new applications?",
    options: [
      "API for MongoDB",
      "API for Apache Cassandra",
      "API for NoSQL",
      "API for Apache Gremlin"
    ],
    correct: 2,
    explanation: "The API for NoSQL is the native Cosmos DB API. It stores data as JSON documents, supports a SQL-like query syntax, and is recommended for new applications. (It was previously called the SQL API.)",
    source: { title: "Explore Cosmos DB: Identify Cosmos DB APIs (Training)", url: "https://learn.microsoft.com/training/modules/explore-non-relational-data-stores-azure/3-cosmos-db-apis" }
  },
  {
    id: 34, skill: 3, section: "3B", bullet: "cosmos-apis",
    topic: "Cosmos DB APIs — Gremlin",
    question: "Your data is a network of entities and relationships (a social network). Which Azure Cosmos DB API is designed for graph data using vertices and edges?",
    options: [
      "API for Table",
      "API for Apache Gremlin",
      "API for MongoDB",
      "API for NoSQL"
    ],
    correct: 1,
    explanation: "The API for Apache Gremlin is designed for graph data, where entities are vertices (nodes) and relationships are edges. It suits scenarios like social networks, recommendation engines, and fraud detection.",
    source: { title: "Explore Cosmos DB: Identify Cosmos DB APIs (Training)", url: "https://learn.microsoft.com/training/modules/explore-non-relational-data-stores-azure/3-cosmos-db-apis" }
  },

  // ============================================================
  // DOMAIN 4: Analytics workload on Azure (25–30%)
  // ============================================================
  {
    id: 35, skill: 4, section: "4A", bullet: "ingestion-processing",
    topic: "Data Ingestion Pipelines",
    question: "Which Azure/Fabric service is used to build pipelines that orchestrate multi-step data movement and transformation for ingesting data into an analytical store?",
    options: [
      "Power BI Desktop",
      "Fabric Data Factory / Azure Data Factory",
      "Azure Blob storage",
      "Azure Table storage"
    ],
    correct: 1,
    explanation: "Fabric Data Factory (and standalone Azure Data Factory) builds pipelines made up of activities that move and transform data, using linked services to connect to sources and destinations. It's the recommended starting point for pipeline-based ingestion.",
    source: { title: "Large-scale analytics: Data ingestion pipelines (Training)", url: "https://learn.microsoft.com/training/modules/examine-components-of-modern-data-warehouse/3-data-ingestion-pipelines" }
  },
  {
    id: 36, skill: 4, section: "4A", bullet: "analytical-stores",
    topic: "Data Warehouse — Star Schema",
    question: "In a relational data warehouse, numeric values are stored in central tables related to tables that represent the entities by which data is aggregated. What are these two table types called?",
    options: [
      "Block tables and page tables",
      "Fact tables and dimension tables",
      "Partition tables and row tables",
      "Bronze tables and gold tables"
    ],
    correct: 1,
    explanation: "A data warehouse commonly uses a star schema: numeric measures are stored in central fact tables related to dimension tables (e.g., customer, product, store, time) by which the data can be aggregated. Extending dimensions into further tables creates a snowflake schema.",
    source: { title: "Large-scale analytics: Analytical data stores (Training)", url: "https://learn.microsoft.com/training/modules/examine-components-of-modern-data-warehouse/4-analytical-data-stores" }
  },
  {
    id: 37, skill: 4, section: "4A", bullet: "analytical-stores",
    topic: "Data Lake vs Lakehouse",
    question: "Which analytical store combines the flexible file storage of a data lake with the relational SQL querying semantics of a data warehouse, enabled by Delta Lake?",
    options: ["A data lakehouse", "A key-value store", "An OLTP database", "A blob container"],
    correct: 0,
    explanation: "A data lakehouse is a hybrid approach: raw data is stored as files in a data lake, and a SQL analytics endpoint exposes those files as queryable tables. It's enabled by Delta Lake, which adds relational/transactional capabilities on top of Parquet files.",
    source: { title: "Large-scale analytics: Analytical data stores (Training)", url: "https://learn.microsoft.com/training/modules/examine-components-of-modern-data-warehouse/4-analytical-data-stores" }
  },
  {
    id: 38, skill: 4, section: "4A", bullet: "analytics-cloud-services",
    topic: "Microsoft Fabric",
    question: "Which Microsoft service is a unified SaaS analytics platform whose workloads all share a single tenant-wide data lake called OneLake?",
    options: ["Azure Databricks", "Microsoft Fabric", "Azure Cosmos DB", "Azure Files"],
    correct: 1,
    explanation: "Microsoft Fabric is a unified SaaS analytics platform that brings storage, data engineering, data warehousing, and reporting into a single workspace, all backed by OneLake — a tenant-wide data lake shared across every Fabric workload, using Delta Lake as the standard format.",
    source: { title: "Large-scale analytics: Data warehousing architecture (Training)", url: "https://learn.microsoft.com/training/modules/examine-components-of-modern-data-warehouse/2-describe-warehousing" }
  },
  {
    id: 39, skill: 4, section: "4A", bullet: "analytics-cloud-services",
    topic: "Azure Databricks",
    question: "Which Microsoft cloud analytics platform is built on Apache Spark and optimized for large-scale data engineering, data science, and SQL analytics, using Delta Lake as its native storage format?",
    options: ["Microsoft Fabric", "Azure Databricks", "Power BI", "Azure Table storage"],
    correct: 1,
    explanation: "Azure Databricks is a cloud analytics platform built on Apache Spark, optimized for large-scale data engineering, data science, and SQL analytics. It runs inside your Azure subscription and uses Delta Lake as its native open storage format.",
    source: { title: "Large-scale analytics: Data warehousing architecture (Training)", url: "https://learn.microsoft.com/training/modules/examine-components-of-modern-data-warehouse/2-describe-warehousing" }
  },
  {
    id: 40, skill: 4, section: "4B", bullet: "batch-vs-streaming",
    topic: "Batch Processing",
    question: "Which characteristic best describes batch processing?",
    options: [
      "Each event is processed individually the moment it arrives",
      "Data is collected and stored, then the whole group is processed together, often on a schedule",
      "It always has latency measured in milliseconds",
      "It can only access the most recent data within a rolling time window"
    ],
    correct: 1,
    explanation: "In batch processing, newly arriving data is collected and stored, and the whole group is processed together as a batch — often on a schedule or when a volume threshold is reached. Latency is typically hours, and it can process the full dataset.",
    source: { title: "Real-time analytics: Batch and stream processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-stream-processing/2-batch-stream" }
  },
  {
    id: 41, skill: 4, section: "4B", bullet: "batch-vs-streaming",
    topic: "Stream Processing",
    question: "Which statement is true of stream processing compared with batch processing?",
    options: [
      "It waits for all data to be collected before processing",
      "It processes each new piece of data in real time as it arrives, typically with latency of seconds or milliseconds",
      "It is only suitable for complex analytics over the full dataset",
      "It always has latency of several hours"
    ],
    correct: 1,
    explanation: "In stream processing, each new piece of data is processed in real time as it arrives, with latency in the order of seconds or milliseconds. It typically works on the most recent data or a rolling time window, ideal for time-critical operations.",
    source: { title: "Real-time analytics: Batch and stream processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-stream-processing/2-batch-stream" }
  },
  {
    id: 42, skill: 4, section: "4B", bullet: "realtime-services",
    topic: "Real-time Analytics Services",
    question: "Which Azure service is commonly used as an ingestion source that manages a queue of event data, ensuring each event is processed in order and exactly once?",
    options: ["Azure Event Hubs", "Power BI Desktop", "Azure Files", "Azure SQL Database"],
    correct: 0,
    explanation: "Azure Event Hubs is a data ingestion service used to manage queues of event data so each event is processed in order, exactly once. Azure IoT Hub is similar but optimized for IoT devices; Apache Kafka is an open-source alternative.",
    source: { title: "Real-time analytics: Common elements of stream processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-stream-processing/3-explore-common-elements" }
  },
  {
    id: 43, skill: 4, section: "4B", bullet: "realtime-services",
    topic: "Fabric Real-Time Intelligence",
    question: "Which Microsoft Fabric capability is an integrated toolset for real-time data, including Eventstreams and an Eventhouse queried with KQL?",
    options: [
      "Power BI Desktop",
      "Microsoft Fabric Real-Time Intelligence",
      "Azure Data Lake Storage Gen2",
      "Azure SQL Managed Instance"
    ],
    correct: 1,
    explanation: "Microsoft Fabric Real-Time Intelligence is a complete toolset for real-time data, including Eventstreams (ingest/route/transform streams), Eventhouse (a store optimized for time-series/event data queried with KQL), Real-Time Dashboards, and Activator.",
    source: { title: "Real-time analytics: Common elements of stream processing (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-stream-processing/3-explore-common-elements" }
  },
  {
    id: 44, skill: 4, section: "4C", bullet: "powerbi-capabilities",
    topic: "Power BI Tools & Workflow",
    question: "In a typical Power BI workflow, where do you import data, build the data model, and create reports before publishing them for business users to consume?",
    options: [
      "The Power BI phone app",
      "Power BI Desktop",
      "Azure Data Factory",
      "Azure Cosmos DB"
    ],
    correct: 1,
    explanation: "A typical Power BI workflow starts in Power BI Desktop, where you import data from many sources, build an analytics data model, and create reports with interactive visualizations. You then publish to the Power BI service for business users to consume.",
    source: { title: "Data visualization: Power BI tools and workflow (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-data-visualization/2-power-bi" }
  },
  {
    id: 45, skill: 4, section: "4C", bullet: "powerbi-data-models",
    topic: "Power BI Data Models",
    question: "In a Power BI semantic (analytical) model, what are the numeric values you want to analyze, and the entities you aggregate them by, respectively called?",
    options: [
      "Measures and dimensions",
      "Rows and columns",
      "Blobs and containers",
      "Keys and indexes"
    ],
    correct: 0,
    explanation: "An analytical/semantic model defines measures (the numeric values to analyze, stored in fact tables) and dimensions (the entities to aggregate by, stored in dimension tables). A fact table related to dimension tables forms a star schema.",
    source: { title: "Data visualization: Core concepts of data modeling (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-data-visualization/3-data-modeling" }
  },
  {
    id: 46, skill: 4, section: "4C", bullet: "powerbi-visualizations",
    topic: "Choosing Visualizations",
    question: "You want to examine a trend in revenue over time. Which Power BI visualization is most appropriate?",
    options: ["Pie chart", "Line chart", "Map", "Table"],
    correct: 1,
    explanation: "Line charts are useful when you need to examine trends, often over time. Bar/column charts compare values across discrete categories; pie charts show proportions of a total; maps compare values across geographic areas.",
    source: { title: "Data visualization: Considerations for data visualization (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-data-visualization/4-data-visualizations" }
  },
  {
    id: 47, skill: 4, section: "4C", bullet: "powerbi-visualizations",
    topic: "Choosing Visualizations — Proportions",
    question: "Which visualization is most appropriate for comparing categorized values as proportions of a total?",
    options: ["Scatter plot", "Line chart", "Pie chart", "Map"],
    correct: 2,
    explanation: "Pie charts are often used to compare categorized values as proportions of a total. Scatter plots compare two numeric measures to find relationships; line charts show trends; maps compare values by location.",
    source: { title: "Data visualization: Considerations for data visualization (Training)", url: "https://learn.microsoft.com/training/modules/explore-fundamentals-data-visualization/4-data-visualizations" }
  },
  {
    id: 48, skill: 4, section: "4A", bullet: "ingestion-processing",
    topic: "OneLake Shortcuts & Mirroring",
    question: "In Microsoft Fabric, which feature creates a live reference to external storage so the data appears in your Lakehouse without copying or moving it?",
    options: [
      "A OneLake shortcut",
      "A batch pipeline copy activity",
      "An Archive tier blob",
      "A stored procedure"
    ],
    correct: 0,
    explanation: "A OneLake shortcut is a live reference to external storage (ADLS Gen2, Amazon S3, Google Cloud Storage, or another OneLake location) that makes external data appear in your Lakehouse with no copying or movement — useful when data must stay in place for compliance or cost reasons.",
    source: { title: "Large-scale analytics: Data ingestion pipelines (Training)", url: "https://learn.microsoft.com/training/modules/examine-components-of-modern-data-warehouse/3-data-ingestion-pipelines" }
  }
];
