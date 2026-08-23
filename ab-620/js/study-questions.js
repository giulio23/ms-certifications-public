/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-620 Designing and Building Integrated AI Solutions in Copilot Studio - Study-mode Questions
// COURSE-DERIVED: each question is written from a specific Microsoft Learn product doc the AB-620
// study guide references, and links to it. correct = 0-based index.

const STUDY_QUESTIONS = [
  // ---- Domain 1 ----
  {
    id: 101, skill: 1, section: "1A", bullet: "plan-integration",
    topic: "Reusable integration",
    question: "Which integration option in Copilot Studio is described as a no-code/low-code wrapper for a REST API that can be created once and used across many agents?",
    options: ["A Send HTTP request node", "A custom connector", "A Bot Framework skill", "A generative answers node"],
    correct: 1,
    explanation: "Custom connectors are no-code/low-code wrappers for REST APIs that can be created once and reused across many agents, with built-in parsing and error handling.",
    source: { title: "Plan and design integration strategies", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/integrations" }
  },
  {
    id: 102, skill: 1, section: "1A", bullet: "plan-identity-audience",
    topic: "Authentication scope",
    question: "Which user variables become available in the authoring canvas when you choose 'Authenticate with Microsoft'?",
    options: ["User.AccessToken and User.IsLoggedIn", "User.ID and User.DisplayName", "User.Email and User.Manager", "No user variables are available"],
    correct: 1,
    explanation: "With 'Authenticate with Microsoft', User.ID and User.DisplayName are available. User.AccessToken and User.IsLoggedIn are only available with the 'Authenticate manually' option.",
    source: { title: "Configure user authentication in Copilot Studio", url: "https://learn.microsoft.com/microsoft-copilot-studio/configuration-end-user-authentication" }
  },
  {
    id: 103, skill: 1, section: "1A", bullet: "plan-rai-governance",
    topic: "Responsible AI governance",
    question: "Which statement about Copilot Studio generative features and customer data is correct?",
    options: [
      "Agents contribute tenant data to model training by default",
      "No customer data trains the language models, and responses go through grounding validation and harmful-content moderation",
      "Moderation only applies to public-website knowledge",
      "Customer Lockbox is unavailable for Copilot Studio"
    ],
    correct: 1,
    explanation: "Agents don't contribute tenant data to model training. Each response goes through automated validation: moderation of harmful/noncompliant/copyrighted content and grounding validation to remove incorrect information.",
    source: { title: "Enhance AI responses by using Retrieval Augmented Generation", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/retrieval-augmented-generation" }
  },
  {
    id: 104, skill: 1, section: "1B", bullet: "agent-flow-basics",
    topic: "Trigger and action",
    question: "An agent flow or workflow consists of at minimum which two elements?",
    options: ["Two connectors", "A trigger and at least one action", "A topic and a variable", "A prompt and a knowledge source"],
    correct: 1,
    explanation: "An agent flow or workflow consists of a trigger (the event that starts it) and at least one action (a task it performs in response).",
    source: { title: "Agent flows and workflows overview", url: "https://learn.microsoft.com/microsoft-copilot-studio/flows-overview" }
  },
  {
    id: 105, skill: 1, section: "1B", bullet: "agent-flow-hitl-monitor",
    topic: "Monitoring agent flows",
    question: "Which capability is true of agent flows that helps with monitoring and governance?",
    options: [
      "Their activity can be monitored separately, and they can hide secrets by retrieving credentials from Azure Key Vault",
      "They cannot be placed inside solutions",
      "They run only on a per-user license model",
      "They expose all keys in plain text"
    ],
    correct: 0,
    explanation: "Agent flows can have their activity monitored separately and can hide sensitive values such as keys and secrets, getting credentials from Azure Key Vault for authentication.",
    source: { title: "Plan and design integration strategies", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/integrations" }
  },
  {
    id: 106, skill: 1, section: "1C", bullet: "topic-nodes-cards",
    topic: "Adaptive Card schema",
    question: "Copilot Studio supports Adaptive Cards schema up to which version, and what is a host limitation to remember?",
    options: [
      "Up to 1.6, but Teams and the live chat widget are limited to 1.5",
      "Up to 2.0 everywhere",
      "Only 1.0 in all channels",
      "There is no version limit"
    ],
    correct: 0,
    explanation: "Copilot Studio supports Adaptive Cards schema 1.6 and earlier, but the targeted host matters: Teams and the live chat widget are limited to 1.5, and the default Web Chat supports 1.6 but not Action.Execute.",
    source: { title: "Using Adaptive Cards in Copilot Studio", url: "https://learn.microsoft.com/microsoft-copilot-studio/adaptive-cards-overview" }
  },
  {
    id: 107, skill: 1, section: "1C", bullet: "topic-generative-http",
    topic: "HTTP request body",
    question: "In a Send HTTP request node, how can you build a JSON body that includes dynamic values from variables?",
    options: [
      "JSON bodies must be static literals",
      "Select Edit JSON, choose Formula, and enter a Power Fx object that is converted to JSON when the request is made",
      "Use a desktop flow",
      "Reference an Azure AI Search index"
    ],
    correct: 1,
    explanation: "For JSON content you can switch to a Power Fx formula (Edit JSON > Formula). Any existing JSON is converted to a Power Fx object, letting you include dynamic values and reference variables; it's converted back to JSON when the request runs.",
    source: { title: "Make HTTP requests", url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-http-node" }
  },

  // ---- Domain 2 ----
  {
    id: 108, skill: 2, section: "2A", bullet: "knowledge-connectors",
    topic: "Copilot connectors and Graph",
    question: "What do Copilot connectors do with external enterprise data so it can be used as agent knowledge?",
    options: [
      "They copy data into Dataverse tables",
      "They ingest and index data into Microsoft Graph while respecting source-level permissions",
      "They expose data only through HTTP request nodes",
      "They store data in Application Insights"
    ],
    correct: 1,
    explanation: "Copilot connectors ingest and index data from external sources into Microsoft Graph, adding knowledge to Copilot. They fully respect source-level permissions so users only access content they're authorized to view.",
    source: { title: "Add Copilot connectors as a knowledge source", url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-connectors" }
  },
  {
    id: 109, skill: 2, section: "2A", bullet: "knowledge-azure-ai-search",
    topic: "Azure AI Search index limit",
    question: "When adding an Azure AI Search knowledge source, how many vector indexes can be added per connection?",
    options: ["Unlimited", "Exactly one vector index", "Up to 15", "Up to 100"],
    correct: 1,
    explanation: "Only one vector index can be added when configuring an Azure AI Search knowledge source. After adding, the status shows In progress while indexing, then Ready.",
    source: { title: "Add Azure AI Search as a knowledge source", url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search" }
  },
  {
    id: 110, skill: 2, section: "2B", bullet: "tool-computer-use",
    topic: "Computer use loop",
    question: "The computer use tool follows an iterative loop. Which three steps make up that loop?",
    options: [
      "Index, query, summarize",
      "Perception, reasoning, action",
      "Trigger, action, respond",
      "Plan, build, publish"
    ],
    correct: 1,
    explanation: "Computer use follows a loop of Perception (capture screenshots), Reasoning (evaluate state and prior actions), and Action (click, type, scroll) until the task is complete or needs user input.",
    source: { title: "FAQ for the computer use tool", url: "https://learn.microsoft.com/microsoft-copilot-studio/faqs-computer-use" }
  },
  {
    id: 111, skill: 2, section: "2B", bullet: "tool-mcp",
    topic: "MCP onboarding",
    question: "What is the simplest, recommended way to connect an agent to an existing MCP server in Copilot Studio?",
    options: [
      "Manually edit YAML in the code editor",
      "Use the MCP onboarding wizard from Tools > Add a tool > Model Context Protocol",
      "Create an Azure DevOps pipeline",
      "Add it as an Azure AI Search index"
    ],
    correct: 1,
    explanation: "The recommended method is the MCP onboarding wizard: on the agent's Tools page, select Add a tool > New tool > Model Context Protocol, then fill in server name, description, URL, and authentication.",
    source: { title: "Connect your agent to an existing Model Context Protocol (MCP) server", url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent" }
  },
  {
    id: 112, skill: 2, section: "2B", bullet: "tool-connector-rest",
    topic: "Tool details configuration",
    question: "Why does the tool 'Description for the agent to know when to use this tool' matter when adding a tool to an agent?",
    options: [
      "It is shown to end users as legal text",
      "It is a conversational description that helps Microsoft 365 Copilot decide when to invoke the tool and which questions trigger it",
      "It sets the passing score",
      "It determines the channel"
    ],
    correct: 1,
    explanation: "The tool description is a full conversational description of when Copilot should use the tool and the questions that trigger it; together with the tool name it helps Copilot choose the right tool to execute.",
    source: { title: "Extend Microsoft 365 Copilot with agents", url: "https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions" }
  },
  {
    id: 113, skill: 2, section: "2C", bullet: "multiagent-design",
    topic: "Add other agents",
    question: "Which of the following is a supported way to extend an agent with another agent in Copilot Studio?",
    options: [
      "Add a child agent, connect to an existing Copilot Studio agent, or connect to a Foundry/Fabric/A2A agent",
      "Only A2A connections are supported",
      "Only child agents are supported",
      "Agents can't call other agents"
    ],
    correct: 0,
    explanation: "Multi-agent collaboration supports adding a child agent, connecting to an existing Copilot Studio agent, and connecting to external agents such as Microsoft Foundry, Microsoft Fabric data agents, Microsoft 365 Agents SDK agents, and A2A agents.",
    source: { title: "Multi-agent orchestration patterns and best practices", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns" }
  },
  {
    id: 114, skill: 2, section: "2C", bullet: "multiagent-foundry-fabric",
    topic: "Foundry portal requirement",
    question: "When connecting to a Microsoft Foundry agent from Copilot Studio, which Foundry agents can you connect to?",
    options: [
      "Only agents created in the previous (classic) portal",
      "Only agents created in the new Microsoft Foundry portal",
      "Any agent regardless of portal version",
      "Only agents exposed over A2A"
    ],
    correct: 1,
    explanation: "You can only connect to Foundry agents created in the new Microsoft Foundry portal. Connecting to an agent created in the previous portal results in a '404 - Version not found' error.",
    source: { title: "Connect to a Microsoft Foundry agent (preview)", url: "https://learn.microsoft.com/microsoft-copilot-studio/add-agent-foundry-agent" }
  },
  {
    id: 115, skill: 2, section: "2C", bullet: "multiagent-a2a",
    topic: "A2A metadata payload",
    question: "Which kind of information does a typical A2A message payload include that an HTTP connector does not provide?",
    options: [
      "Only the latest user utterance",
      "A unique contextId, message IDs, locale, full chat history, and message content parts",
      "Just an API key",
      "Only billing data"
    ],
    correct: 1,
    explanation: "An A2A message payload includes structured metadata such as a unique contextId, message IDs, locale information, the full chat history (not just the latest utterance), and message content parts—context the agent can use for downstream logic.",
    source: { title: "Connect an agent available over the Agent2Agent (A2A) protocol", url: "https://learn.microsoft.com/microsoft-copilot-studio/add-agent-agent-to-agent" }
  },
  {
    id: 116, skill: 2, section: "2D", bullet: "azure-generative-foundry",
    topic: "Foundry models in prompts",
    question: "What underpins prompts (custom prompts) in Copilot Studio, enabling use of frontier models?",
    options: [
      "Models powered by Azure Foundry, with native integration to the Azure AI Foundry model catalog",
      "On-device models only",
      "A local Power Automate engine",
      "Bing Search grounding only"
    ],
    correct: 0,
    explanation: "Prompts use models powered by Azure Foundry. The native Azure AI Foundry integration brings frontier models (GPT, Llama, DeepSeek, and 1,800+ catalog models) into Copilot Studio prompts.",
    source: { title: "Overview of prompts", url: "https://learn.microsoft.com/microsoft-copilot-studio/prompts-overview" }
  },
  {
    id: 117, skill: 2, section: "2D", bullet: "azure-app-insights",
    topic: "Unified agent monitoring",
    question: "What does the Application Insights 'Agent details' view provide for AI agents?",
    options: [
      "Only cost data for Copilot Studio",
      "A unified monitoring experience across Microsoft Foundry, Copilot Studio, and third-party agents, consolidating telemetry to track performance, token usage/cost, and errors",
      "A way to publish agents to Teams",
      "A replacement for solutions"
    ],
    correct: 1,
    explanation: "The Agent details view in Application Insights gives a unified experience for monitoring AI agents across Microsoft Foundry, Copilot Studio, and third-party agents, consolidating telemetry to track performance, analyze token usage and cost, and troubleshoot errors.",
    source: { title: "Monitor AI agents with Application Insights", url: "https://learn.microsoft.com/azure/azure-monitor/app/agents-view" }
  },

  // ---- Domain 3 ----
  {
    id: 118, skill: 3, section: "3A", bullet: "eval-test-set",
    topic: "Evaluation pass rate target",
    question: "Because agents are probabilistic, what does Microsoft recommend to get reliable evaluation results?",
    options: [
      "Run each test set once and trust the result",
      "Run each test set multiple times and calculate the average success rate, aiming for a realistic pass rate of about 80–90%",
      "Require 100% pass before deploying",
      "Use only a single test case"
    ],
    correct: 1,
    explanation: "Because agents can produce varying responses to the same prompt, you should run each test set multiple times and calculate the average success rate, aiming for a realistic pass rate of 80–90% based on business needs.",
    source: { title: "Review the agent evaluation checklist", url: "https://learn.microsoft.com/agents/agent-evaluation/evaluation-checklist" }
  },
  {
    id: 119, skill: 3, section: "3A", bullet: "eval-review-results",
    topic: "Automate evaluations",
    question: "How can agent evaluations be integrated into CI/CD or regression testing workflows?",
    options: [
      "They cannot be automated",
      "By triggering evaluations programmatically using the Power Platform REST API against predefined test sets",
      "Only by manually re-running them in the UI",
      "By exporting the agent to GitHub"
    ],
    correct: 1,
    explanation: "Copilot Studio lets you run automated tests against predefined test sets using the Power Platform REST API, so you can trigger evaluations programmatically as part of development workflows, release validation, regression testing, and CI/CD pipelines.",
    source: { title: "Automate agent evaluations with Power Platform API", url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-rest-api" }
  },
  {
    id: 120, skill: 3, section: "3B", bullet: "alm-solutions",
    topic: "Healthy ALM environments",
    question: "A healthy ALM strategy for Copilot Studio agents includes at least which environments?",
    options: [
      "A single production environment",
      "Development, test, and production",
      "Only development and production",
      "One environment per maker"
    ],
    correct: 1,
    explanation: "A healthy ALM strategy includes at least three environments—development, test, and production. Developers promote changes from dev to test, fix any bugs in dev, then deploy to production. Production is a production-type environment; others are sandbox.",
    source: { title: "Establish an application lifecycle management strategy", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/alm" }
  },
  {
    id: 121, skill: 3, section: "3B", bullet: "alm-envvars-pipelines",
    topic: "Solutions transport components",
    question: "In Power Platform ALM, what is the role of solutions?",
    options: [
      "They store telemetry for Application Insights",
      "They are the mechanism to distribute components (agents, flows, tables, etc.) across environments via export and import",
      "They replace environment variables",
      "They are required only for desktop flows"
    ],
    correct: 1,
    explanation: "Solutions are the mechanism for implementing ALM: you use them to distribute components—such as tables, apps, flows, and agents—across environments through export and import. Dataverse stores the solutions and pipelines.",
    source: { title: "Overview of application lifecycle management with Microsoft Power Platform", url: "https://learn.microsoft.com/power-platform/alm/overview-alm" }
  },
  {
    id: 122, skill: 2, section: "2A", bullet: "knowledge-connectors",
    topic: "Connector response limit",
    question: "A connector tool returns an HTTP 400 Bad Request in Copilot Studio. What is the cause and the fix?",
    options: [
      "The connector is premium; switch to standard",
      "The response exceeds the 500 KB connector limit; configure the action inputs to filter the data returned",
      "Generative orchestration is off; turn it on",
      "The flow is synchronous; make it asynchronous"
    ],
    correct: 1,
    explanation: "Connector responses are limited to 500 KB; exceeding it causes an HTTP 400. Configure the connector action inputs to filter the data the service returns so the response stays under the limit.",
    source: { title: "Connector request failure", url: "https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/actions/connector-request-failure" }
  },
  {
    id: 123, skill: 2, section: "2C", bullet: "multiagent-a2a",
    topic: "A2A agent card",
    question: "When configuring an A2A connection, what happens if the external agent exposes a valid agent card at the standard .well-known location?",
    options: [
      "Copilot Studio automatically populates the agent's name and description from the card",
      "The connection is blocked for security",
      "You must enter a vector index",
      "The agent is deployed to Teams automatically"
    ],
    correct: 0,
    explanation: "After you enter the A2A endpoint URL, if the agent has a valid agent card at the standard .well-known URL, Copilot Studio automatically pulls the name and description into the form. A2A connections use the custom connector infrastructure, so they can also reach on-premises or virtual-network agents.",
    source: { title: "Connect an agent available over the Agent2Agent (A2A) protocol", url: "https://learn.microsoft.com/microsoft-copilot-studio/add-agent-agent-to-agent" }
  }
];
