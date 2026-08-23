/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-620 Study Guide Taxonomy
// Maps to the official Microsoft AB-620 study guide
// (Designing and Building Integrated AI Solutions in Copilot Studio)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Plan and configure agent solutions",
    weight: "30–35%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Plan an agent solution",
        bullets: [
          { slug: "plan-integration", label: "Plan enterprise-system integration patterns (connectors, HTTP, agent flows)" },
          { slug: "plan-identity-audience", label: "Plan identity strategy, internal vs external audiences, channels & deployment" },
          { slug: "plan-rai-governance", label: "Plan responsible AI, security & governance, and reusable components" }
        ]
      },
      {
        code: "1B",
        title: "Create and monitor agent flows in Copilot Studio",
        bullets: [
          { slug: "agent-flow-basics", label: "Agent flows: triggers, actions, Respond to the agent, I/O parameters" },
          { slug: "agent-flow-hitl-monitor", label: "Human-in-the-loop, error handling, and monitoring agent flows" }
        ]
      },
      {
        code: "1C",
        title: "Configure topics",
        bullets: [
          { slug: "topic-nodes-cards", label: "Topic nodes, response formatting, adaptive cards, and variables" },
          { slug: "topic-generative-http", label: "Generative answers node, custom prompts, custom knowledge, API & Send HTTP request" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Integrate and extend agents in Copilot Studio",
    weight: "40–45%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Connect to enterprise knowledge sources",
        bullets: [
          { slug: "knowledge-connectors", label: "Copilot connectors and Power Platform connectors as knowledge" },
          { slug: "knowledge-azure-ai-search", label: "Azure AI Search index as a knowledge source" }
        ]
      },
      {
        code: "2B",
        title: "Add tools to agents",
        bullets: [
          { slug: "tool-computer-use", label: "Computer use tool for web and desktop automation" },
          { slug: "tool-mcp", label: "Model Context Protocol (MCP) tools and resources" },
          { slug: "tool-connector-rest", label: "Custom connector tool and REST API tool" }
        ]
      },
      {
        code: "2C",
        title: "Configure multi-agent collaboration",
        bullets: [
          { slug: "multiagent-design", label: "Design multi-agent solutions; integrate an existing agent" },
          { slug: "multiagent-foundry-fabric", label: "Integrate a Foundry agent and a Fabric data agent" },
          { slug: "multiagent-a2a", label: "Connect agents over the Agent2Agent (A2A) protocol" }
        ]
      },
      {
        code: "2D",
        title: "Integrate agents with Azure",
        bullets: [
          { slug: "azure-generative-foundry", label: "Generative answers via Azure AI Search + Foundry; custom prompts via Foundry model catalog" },
          { slug: "azure-app-insights", label: "Monitor agents with Application Insights" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Test and manage agents",
    weight: "20–25%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Evaluate agent performance",
        bullets: [
          { slug: "eval-test-set", label: "Create a test set and choose an evaluation method" },
          { slug: "eval-review-results", label: "Run evaluations and review results" }
        ]
      },
      {
        code: "3B",
        title: "Implement ALM for agents",
        bullets: [
          { slug: "alm-solutions", label: "Use solutions and add existing agents to a solution" },
          { slug: "alm-envvars-pipelines", label: "Environment variables and Power Platform Pipelines" }
        ]
      }
    ]
  }
];
