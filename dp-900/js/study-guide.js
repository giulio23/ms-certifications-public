/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// DP-900 Study Guide Taxonomy
// Maps to the official Microsoft DP-900 study guide (Skills measured as of November 1, 2024)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Describe core data concepts",
    weight: "25–30%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Describe ways to represent data",
        bullets: [
          { slug: "structured-data", label: "Describe features of structured data" },
          { slug: "semi-structured-data", label: "Describe features of semi-structured data" },
          { slug: "unstructured-data", label: "Describe features of unstructured data" }
        ]
      },
      {
        code: "1B",
        title: "Identify options for data storage",
        bullets: [
          { slug: "file-formats", label: "Describe common formats for data files" },
          { slug: "database-types", label: "Describe types of databases" }
        ]
      },
      {
        code: "1C",
        title: "Describe common data workloads",
        bullets: [
          { slug: "transactional-workloads", label: "Describe features of transactional workloads" },
          { slug: "analytical-workloads", label: "Describe features of analytical workloads" }
        ]
      },
      {
        code: "1D",
        title: "Identify roles and responsibilities for data workloads",
        bullets: [
          { slug: "role-dba", label: "Describe responsibilities for database administrators" },
          { slug: "role-data-engineer", label: "Describe responsibilities for data engineers" },
          { slug: "role-data-analyst", label: "Describe responsibilities for data analysts" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Identify considerations for relational data on Azure",
    weight: "20–25%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Describe relational concepts",
        bullets: [
          { slug: "relational-features", label: "Identify features of relational data" },
          { slug: "normalization", label: "Describe normalization and why it is used" },
          { slug: "sql-statements", label: "Identify common SQL statements" },
          { slug: "database-objects", label: "Identify common database objects" }
        ]
      },
      {
        code: "2B",
        title: "Describe relational Azure data services",
        bullets: [
          { slug: "azure-sql-family", label: "Describe the Azure SQL family (SQL Database, SQL Managed Instance, SQL Server on Azure VMs)" },
          { slug: "open-source-services", label: "Identify Azure database services for open-source systems" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Describe considerations for working with non-relational data on Azure",
    weight: "15–20%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Describe capabilities of Azure storage",
        bullets: [
          { slug: "blob-storage", label: "Describe Azure Blob storage" },
          { slug: "file-storage", label: "Describe Azure File storage" },
          { slug: "table-storage", label: "Describe Azure Table storage" }
        ]
      },
      {
        code: "3B",
        title: "Describe capabilities and features of Azure Cosmos DB",
        bullets: [
          { slug: "cosmos-use-cases", label: "Identify use cases for Azure Cosmos DB" },
          { slug: "cosmos-apis", label: "Describe Azure Cosmos DB APIs" }
        ]
      }
    ]
  },
  {
    skill: 4,
    title: "Describe an analytics workload on Azure",
    weight: "25–30%",
    color: "violet",
    sections: [
      {
        code: "4A",
        title: "Describe common elements of large-scale analytics",
        bullets: [
          { slug: "ingestion-processing", label: "Describe considerations for data ingestion and processing" },
          { slug: "analytical-stores", label: "Describe options for analytical data stores" },
          { slug: "analytics-cloud-services", label: "Describe Microsoft cloud services for large-scale analytics (Azure Databricks & Microsoft Fabric)" }
        ]
      },
      {
        code: "4B",
        title: "Describe consideration for real-time data analytics",
        bullets: [
          { slug: "batch-vs-streaming", label: "Describe the difference between batch and streaming data" },
          { slug: "realtime-services", label: "Identify Microsoft cloud services for real-time analytics" }
        ]
      },
      {
        code: "4C",
        title: "Describe data visualization in Microsoft Power BI",
        bullets: [
          { slug: "powerbi-capabilities", label: "Identify capabilities of Power BI" },
          { slug: "powerbi-data-models", label: "Describe features of data models in Power BI" },
          { slug: "powerbi-visualizations", label: "Identify appropriate visualizations for data" }
        ]
      }
    ]
  }
];
