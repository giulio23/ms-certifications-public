/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-410 Study Guide Taxonomy
// Maps to the official Microsoft AB-410 study guide
// (Building Intelligent Applications with Microsoft Power Platform)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Create a foundation for intelligent applications",
    weight: "25–30%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Design Power Platform solutions with AI-enabled tools",
        bullets: [
          { slug: "requirements-built-in-agents", label: "Analyze requirements; evaluate built-in agents & Copilot capabilities" },
          { slug: "environments-alm", label: "Environment types and solution & ALM strategy (managed vs unmanaged)" }
        ]
      },
      {
        code: "1B",
        title: "Build data models in Dataverse",
        bullets: [
          { slug: "tables-columns", label: "Standard & custom tables, columns, and table properties (data workspace)" },
          { slug: "relationships", label: "Table relationships (1:N, N:1, N:N)" },
          { slug: "prompt-columns", label: "Prompt columns and AI-generated values" },
          { slug: "row-summaries", label: "Copilot row summaries" },
          { slug: "views-forms", label: "Public views and main forms" },
          { slug: "dataverse-security", label: "Security: roles, business units, teams, column-level security" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Create intelligent applications",
    weight: "25–30%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Create model-driven apps",
        bullets: [
          { slug: "mda-forms-views", label: "Forms, views, and the app designer" },
          { slug: "generative-pages", label: "Generative pages via natural language" },
          { slug: "charts-dashboards", label: "Charts and dashboards" }
        ]
      },
      {
        code: "2B",
        title: "Create canvas apps",
        bullets: [
          { slug: "canvas-from-data", label: "Build an app from data; responsiveness & accessibility" },
          { slug: "reusable-components", label: "Reusable components: named formulas, UDFs, component libraries" },
          { slug: "variables-collections", label: "Variables, collections, and error handling (OnError)" },
          { slug: "testing-monitor", label: "Testing and troubleshooting with Monitor" },
          { slug: "copilot-from-canvas", label: "Create a Copilot Studio agent from a canvas app" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Build business application logic and automation",
    weight: "40–45%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Create cloud flows",
        bullets: [
          { slug: "flow-triggers-conditions", label: "Triggers, connectors, trigger conditions, actions, conditions & loops" },
          { slug: "flow-approvals", label: "Approvals (Start and wait for an approval)" },
          { slug: "flow-test-troubleshoot", label: "Test and troubleshoot cloud flows" }
        ]
      },
      {
        code: "3B",
        title: "Create prompts and models in AI Hub",
        bullets: [
          { slug: "build-prompts", label: "Build prompts from templates/blank; inputs & model settings" },
          { slug: "consume-prompts", label: "Consume a prompt in apps (Predict) and flows (Run a prompt)" },
          { slug: "add-knowledge", label: "Add knowledge (RAG) to a prompt" },
          { slug: "consume-ai-model", label: "Consume an AI model / prebuilt model in apps & flows" }
        ]
      },
      {
        code: "3C",
        title: "Implement business and process logic",
        bullets: [
          { slug: "business-rules", label: "Business rules and recommendations" },
          { slug: "business-process-flows", label: "Business process flows (stages, steps, branches)" },
          { slug: "calc-rollup-formula", label: "Calculated, rollup, and formula columns" }
        ]
      }
    ]
  }
];
