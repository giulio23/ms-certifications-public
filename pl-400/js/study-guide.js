/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// PL-400 Study Guide Taxonomy
// Maps to the official Microsoft PL-400 study guide (Skills measured as of March 19, 2026)
// 6 domains; "Extend the platform" (skill 5) is the largest.

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Create a technical design",
    weight: "10–15%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Design technical architecture",
        bullets: [
          { slug: "td-oob-vs-custom", label: "Out-of-the-box vs custom; identify solution components" },
          { slug: "td-business-logic-placement", label: "Where to implement business logic (rules, plug-ins, flows, client, cloud)" },
          { slug: "td-table-types", label: "When to use standard, virtual, elastic tables, or connectors" },
          { slug: "td-security-impact", label: "Impact of DLP, security roles, teams, business units, row sharing" },
          { slug: "td-auth-strategy", label: "Authentication and authorization strategy" }
        ]
      },
      {
        code: "1B",
        title: "Design solution components",
        bullets: [
          { slug: "td-design-components", label: "Design reusable components, custom connectors, Dataverse code, automations & integrations" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Build Power Platform solutions",
    weight: "10–15%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Configure and troubleshoot",
        bullets: [
          { slug: "bld-security-roles", label: "Configure Dataverse security roles for code components (least privilege)" },
          { slug: "bld-dev-environments", label: "Manage Power Platform environments for development" }
        ]
      },
      {
        code: "2B",
        title: "Implement ALM",
        bullets: [
          { slug: "alm-managed-unmanaged", label: "Managed vs unmanaged solutions and dependencies" },
          { slug: "alm-solution-layers", label: "Solution layers" },
          { slug: "alm-env-variables", label: "Environment variables" },
          { slug: "alm-pipelines-buildtools", label: "Power Platform Pipelines and CI/CD with Build Tools" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Implement Power Apps improvements",
    weight: "10–15%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Advanced canvas app features",
        bullets: [
          { slug: "pa-power-fx", label: "Complex Power Fx formulas and functions" },
          { slug: "pa-component-libraries", label: "Reusable component libraries" },
          { slug: "pa-flows-from-canvas", label: "Call Power Automate cloud flows from a canvas app" }
        ]
      },
      {
        code: "3B",
        title: "Optimize and troubleshoot",
        bullets: [
          { slug: "pa-monitor-debug", label: "Troubleshoot with Monitor and browser debugging tools" },
          { slug: "pa-canvas-perf", label: "Optimize canvas performance (pre-load data, delegation)" },
          { slug: "pa-model-driven-perf", label: "Optimize model-driven performance (forms, views)" }
        ]
      }
    ]
  },
  {
    skill: 4,
    title: "Extend the user experience",
    weight: "10–15%",
    color: "violet",
    sections: [
      {
        code: "4A",
        title: "Client scripting in model-driven apps",
        bullets: [
          { slug: "ux-client-api", label: "Client API object model and form/grid events" },
          { slug: "ux-event-registration", label: "Event handler registration; script web resources" },
          { slug: "ux-client-webapi", label: "Call the Dataverse Web API from client script (Xrm.WebApi)" },
          { slug: "ux-commands-navigation", label: "Configure commands/buttons (Power Fx & JS) and navigation via Client API" }
        ]
      },
      {
        code: "4B",
        title: "Power Apps component framework (PCF)",
        bullets: [
          { slug: "pcf-lifecycle-manifest", label: "PCF lifecycle events and the component manifest" },
          { slug: "pcf-features-deploy", label: "Device/Utility/Web API features; package, deploy, and consume" }
        ]
      }
    ]
  },
  {
    skill: 5,
    title: "Extend the platform",
    weight: "30–35%",
    color: "rose",
    sections: [
      {
        code: "5A",
        title: "Create a Dataverse plug-in",
        bullets: [
          { slug: "plugin-pipeline-stages", label: "Event execution pipeline stages (PreValidation/PreOperation/PostOperation)" },
          { slug: "plugin-context-images", label: "Execution context, Pre/Post Images, IPlugin" },
          { slug: "plugin-orgservice-perf", label: "Organization service operations; sync vs async; optimize performance" },
          { slug: "plugin-custom-api", label: "Custom API message; Plug-in Registration Tool" }
        ]
      },
      {
        code: "5B",
        title: "Create custom connectors",
        bullets: [
          { slug: "connector-openapi-auth", label: "OpenAPI definition and authentication for custom connectors" },
          { slug: "connector-azure-policy", label: "Azure Functions for connectors; policy templates; transform data" }
        ]
      },
      {
        code: "5C",
        title: "Use platform APIs",
        bullets: [
          { slug: "webapi-operations", label: "Dataverse Web API (OData v4) and the Organization service" },
          { slug: "webapi-perf-oauth", label: "Retry policies, bulk/concurrency/transactions, OAuth" }
        ]
      },
      {
        code: "5D",
        title: "Azure Functions & advanced flows",
        bullets: [
          { slug: "azure-functions", label: "Azure Functions for long-running/triggered work; managed identities" },
          { slug: "adv-flows-expressions", label: "Advanced cloud flows: expressions, error handling, trigger filters/retry" },
          { slug: "adv-flows-childflows-sp", label: "Child flows, Azure Key Vault, Microsoft Entra service principals" }
        ]
      }
    ]
  },
  {
    skill: 6,
    title: "Develop integrations",
    weight: "10–15%",
    color: "cyan",
    sections: [
      {
        code: "6A",
        title: "Publish and consume Dataverse events",
        bullets: [
          { slug: "int-publish-events", label: "Publish Dataverse events (IServiceEndpointNotificationService, Plug-in Registration Tool)" },
          { slug: "int-service-endpoints", label: "Service endpoints: webhooks, Azure Service Bus, Azure Event Hub" }
        ]
      },
      {
        code: "6B",
        title: "Data synchronization with Dataverse",
        bullets: [
          { slug: "int-change-tracking", label: "Data synchronization using change tracking" },
          { slug: "int-alternate-keys-upsert", label: "Alternate keys and the UpsertRequest message" }
        ]
      }
    ]
  }
];
