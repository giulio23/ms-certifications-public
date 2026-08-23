/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 * https://medium.com/@giulio_91720
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// DP-700 Study Guide Taxonomy
// Maps to the official Microsoft DP-700 study guide
// (Implementing Data Engineering Solutions Using Microsoft Fabric)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Implement and manage an analytics solution",
    weight: "30–35%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Configure Microsoft Fabric workspace settings",
        bullets: [
          { slug: "spark-settings", label: "Spark workspace settings" },
          { slug: "domain-settings", label: "Domain workspace settings" },
          { slug: "onelake-settings", label: "OneLake workspace settings" },
          { slug: "airflow-settings", label: "Apache Airflow workspace settings" }
        ]
      },
      {
        code: "1B",
        title: "Implement lifecycle management in Fabric",
        bullets: [
          { slug: "version-control", label: "Configure version control (Git integration)" },
          { slug: "database-projects", label: "Implement database projects" },
          { slug: "deployment-pipelines", label: "Create & configure deployment pipelines" }
        ]
      },
      {
        code: "1C",
        title: "Configure security and governance",
        bullets: [
          { slug: "workspace-item-access", label: "Workspace- and item-level access controls" },
          { slug: "granular-access", label: "Row-, column-, object-, and file/folder-level access" },
          { slug: "dynamic-masking", label: "Implement dynamic data masking" },
          { slug: "sensitivity-labels", label: "Apply sensitivity labels; endorse items" },
          { slug: "audit-logs", label: "Implement and use Fabric audit logs" },
          { slug: "onelake-security", label: "Configure OneLake security" }
        ]
      },
      {
        code: "1D",
        title: "Orchestrate processes",
        bullets: [
          { slug: "choose-orchestrator", label: "Choose Dataflow Gen2 vs pipeline vs notebook" },
          { slug: "triggers", label: "Schedules and event-based triggers" },
          { slug: "orchestration-patterns", label: "Orchestration patterns (parameters, dynamic expressions)" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Ingest and transform data",
    weight: "30–35%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Design and implement loading patterns",
        bullets: [
          { slug: "full-incremental", label: "Full and incremental data loads" },
          { slug: "dimensional-load", label: "Prepare data for a dimensional model" },
          { slug: "streaming-load", label: "Loading pattern for streaming data" }
        ]
      },
      {
        code: "2B",
        title: "Ingest and transform batch data",
        bullets: [
          { slug: "choose-store", label: "Choose an appropriate data store" },
          { slug: "choose-transform-tool", label: "Dataflows Gen2 vs notebooks vs KQL vs T-SQL" },
          { slug: "shortcuts-mirroring", label: "OneLake shortcuts and mirroring" },
          { slug: "pipelines-ingest", label: "Ingest data by using pipelines" },
          { slug: "transform-code", label: "Transform with PySpark, SQL, and KQL" },
          { slug: "denormalize-aggregate", label: "Denormalize, group, and aggregate data" },
          { slug: "data-quality", label: "Handle duplicate, missing, and late-arriving data" }
        ]
      },
      {
        code: "2C",
        title: "Ingest and transform streaming data",
        bullets: [
          { slug: "choose-streaming-engine", label: "Choose an appropriate streaming engine" },
          { slug: "rti-tables-shortcuts", label: "Native tables vs OneLake shortcuts in Real-Time Intelligence" },
          { slug: "eventstreams", label: "Process data by using Eventstreams" },
          { slug: "spark-streaming", label: "Spark structured streaming" },
          { slug: "kql-windowing", label: "KQL and windowing functions" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Monitor and optimize an analytics solution",
    weight: "30–35%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Monitor Fabric items",
        bullets: [
          { slug: "monitor-ingestion", label: "Monitor data ingestion" },
          { slug: "monitor-transformation", label: "Monitor data transformation" },
          { slug: "monitor-refresh", label: "Monitor semantic model refresh" },
          { slug: "configure-alerts", label: "Configure alerts" }
        ]
      },
      {
        code: "3B",
        title: "Identify and resolve errors",
        bullets: [
          { slug: "pipeline-errors", label: "Pipeline errors" },
          { slug: "dataflow-errors", label: "Dataflow Gen2 errors" },
          { slug: "notebook-errors", label: "Notebook errors" },
          { slug: "eventhouse-eventstream-errors", label: "Eventhouse and Eventstream errors" },
          { slug: "tsql-shortcut-errors", label: "T-SQL and OneLake shortcut errors" }
        ]
      },
      {
        code: "3C",
        title: "Optimize performance",
        bullets: [
          { slug: "optimize-lakehouse", label: "Optimize a lakehouse table" },
          { slug: "optimize-pipeline", label: "Optimize a pipeline" },
          { slug: "optimize-warehouse", label: "Optimize a data warehouse" },
          { slug: "optimize-realtime", label: "Optimize Eventstreams and Eventhouses" },
          { slug: "optimize-spark-query", label: "Optimize Spark and query performance" }
        ]
      }
    ]
  }
];
