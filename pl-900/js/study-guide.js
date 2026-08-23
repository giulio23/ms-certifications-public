/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// PL-900 Study Guide Taxonomy
// Maps to the official Microsoft PL-900 study guide (Skills measured as of June 20, 2025)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Describe the business value of Microsoft Power Platform",
    weight: "15–20%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Describe the business value of Power Platform services",
        bullets: [
          { slug: "val-power-apps", label: "Value of Power Apps to build applications" },
          { slug: "val-power-automate", label: "Value of Power Automate to automate processes" },
          { slug: "val-power-pages", label: "Value of Power Pages to build websites" },
          { slug: "val-connectors", label: "Value of connectors to integrate services and data" },
          { slug: "val-dataverse", label: "Value of Dataverse to organize business data" },
          { slug: "val-copilots", label: "Value of Copilots, generative AI, and Copilot Studio" },
          { slug: "val-power-fx", label: "Value of Power Fx as a low-code solution" }
        ]
      },
      {
        code: "1B",
        title: "Describe the business value of extending solutions",
        bullets: [
          { slug: "extend-m365-teams", label: "How Power Platform works with Microsoft 365 (incl. Teams)" },
          { slug: "services-work-together", label: "How the Power Platform services work together" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Manage the Microsoft Power Platform environment",
    weight: "15–20%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Describe Microsoft Dataverse",
        bullets: [
          { slug: "dv-vs-traditional", label: "Differences between traditional databases and Dataverse" },
          { slug: "dv-tables-relationships", label: "Tables, columns, and relationships in Dataverse" },
          { slug: "dv-business-logic", label: "Options for business logic in Dataverse" },
          { slug: "dv-import-export", label: "Options for importing and exporting data" }
        ]
      },
      {
        code: "2B",
        title: "Describe administration and governance",
        bullets: [
          { slug: "pp-security-model", label: "Power Platform security model (RBAC, DLP, encryption)" },
          { slug: "pp-environments", label: "Power Platform environments and Managed Environments" },
          { slug: "pp-admin-centers", label: "Power Platform admin centers and portals" },
          { slug: "pp-privacy-accessibility", label: "Data privacy and accessibility guidelines" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Demonstrate the capabilities of Power Apps",
    weight: "25–30%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Identify Power Apps capabilities",
        bullets: [
          { slug: "canvas-use-cases", label: "Use cases and capabilities of canvas apps" },
          { slug: "model-driven-use-cases", label: "Use cases and capabilities of model-driven apps" },
          { slug: "model-driven-features", label: "Model-driven app features" }
        ]
      },
      {
        code: "3B",
        title: "Build a canvas app",
        bullets: [
          { slug: "canvas-connectors", label: "Connect to data sources by using connectors" },
          { slug: "canvas-controls-containers", label: "Common controls and responsive containers" },
          { slug: "canvas-copilot-share", label: "Copilot controls and sharing a canvas app" }
        ]
      },
      {
        code: "3C",
        title: "Build a model-driven app",
        bullets: [
          { slug: "md-create-tables", label: "Create a model-driven app from tables" },
          { slug: "md-forms", label: "Modify forms" },
          { slug: "md-views-share", label: "Create/modify views and share a model-driven app" }
        ]
      }
    ]
  },
  {
    skill: 4,
    title: "Demonstrate the capabilities of Power Automate",
    weight: "15–20%",
    color: "violet",
    sections: [
      {
        code: "4A",
        title: "Identify Power Automate components",
        bullets: [
          { slug: "cloud-vs-desktop", label: "Use cases for cloud and desktop flows" },
          { slug: "cloud-flow-templates", label: "Use cases for cloud flow templates" },
          { slug: "triggers-actions-connectors", label: "Connector triggers and actions in cloud flows" },
          { slug: "loops-branching", label: "Loops and branching in cloud flows" },
          { slug: "approvals-usecases", label: "Use cases (approvals, Teams, Outlook, SharePoint, Forms, document automation)" },
          { slug: "pa-apps", label: "Power Automate apps (Desktop, mobile, maker portal)" },
          { slug: "process-mining", label: "Process Mining" }
        ]
      },
      {
        code: "4B",
        title: "Build a Power Automate flow",
        bullets: [
          { slug: "build-cloud-flow", label: "Create with instant/automated/scheduled triggers; run, test, and share a flow" }
        ]
      }
    ]
  },
  {
    skill: 5,
    title: "Demonstrate the capabilities of Power Pages",
    weight: "10–15%",
    color: "rose",
    sections: [
      {
        code: "5A",
        title: "Describe the capabilities of Power Pages",
        bullets: [
          { slug: "pages-use-cases", label: "Use cases for Power Pages" },
          { slug: "pages-create-methods", label: "Methods for creating sites" },
          { slug: "pages-security", label: "Power Pages security concepts" }
        ]
      },
      {
        code: "5B",
        title: "Create a Power Pages site",
        bullets: [
          { slug: "pages-copilot", label: "Create/modify sites by using Copilot" },
          { slug: "pages-design-studio", label: "Design studio workspaces" },
          { slug: "pages-components-theme", label: "Pages, components, and themes" }
        ]
      }
    ]
  }
];
