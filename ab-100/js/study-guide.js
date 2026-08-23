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
// AB-100 Study Guide Taxonomy
// Maps to the official Microsoft AB-100 study guide
// (Agentic AI Business Solutions Architect)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Plan AI-powered business solutions",
    weight: "25–30%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Analyze requirements for AI-powered business solutions",
        bullets: [
          { slug: "assess-agent-use", label: "Assess agents for task automation, analytics, and decision-making" },
          { slug: "review-grounding-data", label: "Review data for grounding (accuracy, relevance, timeliness, cleanliness, availability)" },
          { slug: "organize-solution-data", label: "Organize solution data to be available to other AI systems" }
        ]
      },
      {
        code: "1B",
        title: "Design overall AI strategy for business solutions",
        bullets: [
          { slug: "ai-adoption-caf", label: "AI adoption from the Cloud Adoption Framework" },
          { slug: "multi-agent-platforms", label: "Multi-agent solutions across M365 Copilot, Copilot Studio, and Foundry" },
          { slug: "custom-vs-extend", label: "Prebuilt vs custom agents; build custom vs extend M365 Copilot; custom models" },
          { slug: "prompt-library-coe", label: "Prompt library & engineering guidelines; AI Center of Excellence; multi-Dynamics 365 solutions" }
        ]
      },
      {
        code: "1C",
        title: "Evaluate the costs and benefits of an AI-powered business solution",
        bullets: [
          { slug: "roi-tco", label: "ROI criteria and total cost of ownership" },
          { slug: "roi-analysis", label: "Create an ROI analysis for a business process" },
          { slug: "build-buy-extend", label: "Analyze build vs buy vs extend" },
          { slug: "model-router", label: "Implement a model router to route requests to the most suitable model" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Design AI-powered business solutions",
    weight: "25–30%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Design AI and agents for business solutions",
        bullets: [
          { slug: "copilot-d365", label: "Copilot in Dynamics 365 (customer experience/service, Sales connectors, Contact Center)" },
          { slug: "agent-types", label: "Task, autonomous, and prompt-and-response agents; Foundry Tools" },
          { slug: "copilot-studio-design", label: "Copilot Studio topics/fallback, agents & agent flows, prompt actions" },
          { slug: "orchestration-choice", label: "NLP vs conversational language understanding vs generative orchestration; Power Platform Well-Architected" }
        ]
      },
      {
        code: "2B",
        title: "Design extensibility of AI solutions",
        bullets: [
          { slug: "custom-foundry-models", label: "Custom models in Microsoft Foundry" },
          { slug: "m365-copilot-agents", label: "Agents in M365 Copilot (Teams, SharePoint)" },
          { slug: "copilot-studio-extensibility", label: "Copilot Studio extensibility incl. Model Context Protocol and Computer Use" },
          { slug: "agent-behaviors", label: "Agent behaviors incl. reasoning and voice mode" }
        ]
      },
      {
        code: "2C",
        title: "Orchestrate configuration for prebuilt agents and apps",
        bullets: [
          { slug: "d365-fin-scm-ai", label: "AI features in D365 finance & supply chain" },
          { slug: "d365-ce-ai", label: "AI features in D365 customer experience & service" },
          { slug: "m365-copilot-sales-service", label: "M365 agents; Copilot for Sales & for Service" },
          { slug: "power-platform-ai-hub", label: "Power Platform AI features (AI hub); knowledge sources for finance/SCM help" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Deploy AI-powered business solutions",
    weight: "40–45%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Analyze, monitor, and tune AI-powered business solutions",
        bullets: [
          { slug: "monitoring-tools", label: "Recommend monitoring process and tools for agents" },
          { slug: "backlog-feedback", label: "Analyze backlog and user feedback; AI-based tuning" },
          { slug: "agent-metrics-telemetry", label: "Monitor agent performance/metrics; interpret telemetry" }
        ]
      },
      {
        code: "3B",
        title: "Manage the testing of AI-powered business solutions",
        bullets: [
          { slug: "test-process-metrics", label: "Process and metrics to test agents" },
          { slug: "model-validation", label: "Validation criteria for custom AI models; Copilot prompt best practices" },
          { slug: "e2e-test-scenarios", label: "End-to-end test scenarios across multiple D365 apps; test cases with Copilot" }
        ]
      },
      {
        code: "3C",
        title: "Design the ALM process for AI-powered business solutions",
        bullets: [
          { slug: "alm-data-models", label: "ALM for data in AI models and agents" },
          { slug: "alm-copilot-studio", label: "ALM for Copilot Studio agents, connectors, and actions" },
          { slug: "alm-foundry-custom", label: "ALM for Microsoft Foundry Agents service and custom AI models" },
          { slug: "alm-d365-ai", label: "ALM for AI in Dynamics 365 apps" }
        ]
      },
      {
        code: "3D",
        title: "Design responsible AI, security, governance, risk management, and compliance",
        bullets: [
          { slug: "agent-security-governance", label: "Security & governance for agents; model security" },
          { slug: "vulnerabilities-mitigations", label: "Solution/AI vulnerabilities & mitigations incl. prompt manipulation" },
          { slug: "responsible-ai-principles", label: "Adherence to responsible AI principles" },
          { slug: "residency-access-audit", label: "Data residency/compliance; access controls on grounding data & tuning; audit trails" }
        ]
      }
    ]
  }
];
