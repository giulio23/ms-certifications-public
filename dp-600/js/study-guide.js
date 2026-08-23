/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// DP-600 Study Guide Taxonomy
// Maps to the official Microsoft DP-600 study guide
// (Implementing Analytics Solutions Using Microsoft Fabric)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Maintain a data analytics solution",
    weight: "25–30%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Implement security and governance",
        bullets: [
          { slug: "workspace-item-access", label: "Workspace- and item-level access controls" },
          { slug: "granular-access", label: "Row-, column-, object-, and file-level access" },
          { slug: "sensitivity-labels", label: "Apply sensitivity labels to items" },
          { slug: "endorsement", label: "Endorse items (promote, certify, master data)" }
        ]
      },
      {
        code: "1B",
        title: "Maintain the analytics development lifecycle",
        bullets: [
          { slug: "version-control", label: "Version control / Git integration for a workspace" },
          { slug: "pbip-project", label: "Power BI Desktop project (.pbip) developer mode" },
          { slug: "deployment-pipelines", label: "Deployment pipelines (dev/test/prod stages)" },
          { slug: "impact-analysis", label: "Impact analysis of downstream dependencies" },
          { slug: "xmla-deploy", label: "Deploy/manage semantic models via the XMLA endpoint" },
          { slug: "reusable-assets", label: "Reusable assets (.pbit, .pbids, shared semantic models)" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Prepare data",
    weight: "45–50%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Get data",
        bullets: [
          { slug: "data-connections", label: "Create connections; discover via OneLake catalog & Real-Time hub" },
          { slug: "ingest-access", label: "Ingest or access data (shortcuts, pipelines, dataflows)" },
          { slug: "choose-data-store", label: "Choose a data store (lakehouse vs warehouse vs eventhouse)" },
          { slug: "onelake-integration", label: "OneLake integration for Eventhouse & semantic models" }
        ]
      },
      {
        code: "2B",
        title: "Transform data",
        bullets: [
          { slug: "views-functions-procs", label: "Create views, functions, and stored procedures" },
          { slug: "star-schema-build", label: "Build a star schema (fact & dimension tables, SCDs)" },
          { slug: "denormalize-aggregate", label: "Denormalize, aggregate, and enrich data" },
          { slug: "merge-join", label: "Merge or join data" },
          { slug: "clean-data", label: "Handle duplicates, missing values, nulls; convert types; filter" }
        ]
      },
      {
        code: "2C",
        title: "Query and analyze data",
        bullets: [
          { slug: "visual-query-sql", label: "Visual Query Editor and SQL over lakehouse/warehouse" },
          { slug: "kql-query", label: "KQL over an eventhouse / KQL database" },
          { slug: "dax-query", label: "DAX to query and analyze a semantic model" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Implement and manage semantic models",
    weight: "25–30%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Design and build semantic models",
        bullets: [
          { slug: "storage-mode", label: "Choose a storage mode (Import, DirectQuery, Direct Lake)" },
          { slug: "relationships", label: "Relationships incl. bridge tables & many-to-many" },
          { slug: "dax-functions", label: "DAX variables & functions (iterators, table-filtering, windowing, information)" },
          { slug: "calc-groups-params", label: "Calculation groups, dynamic format strings, field parameters" },
          { slug: "large-model-composite", label: "Large semantic model storage format & composite models" }
        ]
      },
      {
        code: "3B",
        title: "Optimize enterprise-scale semantic models",
        bullets: [
          { slug: "query-visual-perf", label: "Improve query, visual, and DAX performance" },
          { slug: "direct-lake-optimize", label: "Direct Lake incl. fallback, refresh, OneLake vs SQL endpoints" },
          { slug: "incremental-refresh", label: "Implement incremental refresh" }
        ]
      }
    ]
  }
];
