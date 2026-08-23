/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-620 Designing and Building Integrated AI Solutions in Copilot Studio - Practice Exam Questions
// COURSE-DERIVED: every question is written from the text of a specific Microsoft Learn product doc
// (Microsoft Copilot Studio, Power Platform, Microsoft Foundry, Microsoft 365 Copilot, Microsoft
// Fabric) that the AB-620 study guide references, and its `source` links to that doc.
// correct = 0-based index.

const QUESTIONS = [
  // ============================================================
  // DOMAIN 1: Plan and configure agent solutions (30–35%)
  // ============================================================
  {
    id: 1, skill: 1, section: "1A", bullet: "plan-integration",
    topic: "Integration patterns",
    question: "You need an agent to call an external service that has no prebuilt connector, and you want a no-code wrapper that can be reused across many agents in your organization. Which integration pattern best fits?",
    options: [
      "A Send HTTP request node in each topic",
      "A custom connector",
      "A Bot Framework skill written in C#",
      "A hard-coded value in a variable"
    ],
    correct: 1,
    explanation: "A custom connector is a no-code/low-code wrapper for a REST API that can be created once and reused across many agents, with built-in parsing and error handling. An HTTP request must be reconfigured in each place and can't be shared like a connector.",
    source: { title: "Plan and design integration strategies", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/integrations" }
  },
  {
    id: 2, skill: 1, section: "1A", bullet: "plan-integration",
    topic: "Agent flows vs cloud flows",
    question: "Which statement correctly describes how agent flows differ from standard Power Automate cloud flows?",
    options: [
      "Agent flows require a separate Power Automate per-user license",
      "Agent flows can't use premium connectors",
      "Agent flows consume Copilot credits based on usage and support human-in-the-loop actions",
      "Agent flows cannot be monitored separately"
    ],
    correct: 2,
    explanation: "Agent flows are billed in Copilot Studio based on usage (no Power Automate license required), can use premium connectors, support human-in-the-loop actions, and their activity can be monitored separately.",
    source: { title: "Agent flows in Microsoft Copilot Studio FAQ", url: "https://learn.microsoft.com/microsoft-copilot-studio/flows-faqs" }
  },
  {
    id: 3, skill: 1, section: "1A", bullet: "plan-identity-audience",
    topic: "Publish channels",
    question: "You build an internal HR agent and want users in Microsoft Teams to be identified automatically without a sign-in prompt. Which publish authentication option should you choose?",
    options: [
      "No authentication",
      "Authenticate with Microsoft",
      "Authenticate manually with a custom OAuth2 provider",
      "Disable publishing"
    ],
    correct: 1,
    explanation: "The 'Authenticate with Microsoft' option automatically sets up Microsoft Entra ID authentication for Teams, Power Apps, and Microsoft 365 Copilot with no manual configuration; in Teams the user is already identified, so they aren't prompted to sign in.",
    source: { title: "Configure user authentication in Copilot Studio", url: "https://learn.microsoft.com/microsoft-copilot-studio/configuration-end-user-authentication" }
  },
  {
    id: 4, skill: 1, section: "1A", bullet: "plan-identity-audience",
    topic: "Channels and deployment",
    question: "After you make changes to an agent that is connected to several channels, what must you do for customers to see the latest content?",
    options: [
      "Publish the agent again, which applies to all connected channels",
      "Re-add each channel one at a time",
      "Nothing; changes are live immediately",
      "Create a new agent and migrate the topics"
    ],
    correct: 0,
    explanation: "Publishing applies to all channels associated with the agent. If you change an agent but don't publish, customers continue to interact with the older content across every connected channel.",
    source: { title: "Key concepts - Publish and deploy your agent", url: "https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels" }
  },
  {
    id: 5, skill: 1, section: "1A", bullet: "plan-identity-audience",
    topic: "No-authentication risk",
    question: "What is a key consequence of selecting the 'No authentication' option for an agent?",
    options: [
      "The agent can still use tools with the signed-in user's credentials",
      "Anyone who has the link can chat with the agent, and it can't use tools with user credentials",
      "The agent is automatically restricted to your tenant",
      "The agent can only be published to Microsoft Teams"
    ],
    correct: 1,
    explanation: "With No authentication, anyone with the link can interact with the agent, and the agent can't use tools that rely on end-user credentials. Microsoft recommends applying authentication for organizational or user-specific agents.",
    source: { title: "Key concepts - Publish and deploy your agent", url: "https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels" }
  },
  {
    id: 6, skill: 1, section: "1A", bullet: "plan-rai-governance",
    topic: "Responsible AI",
    question: "Which statement reflects how Copilot Studio handles responsible AI and customer data for generative features?",
    options: [
      "Tenant data is used to continuously train the foundation models",
      "Generative features run on Microsoft Foundry, ground and validate responses, and don't contribute tenant data to model training",
      "Harmful-content moderation must be configured manually by the maker",
      "Responses are never grounded or validated"
    ],
    correct: 1,
    explanation: "All generative AI features in Copilot Studio run on Microsoft Foundry under Microsoft's Responsible AI standards: they ground responses where possible, validate them to reduce incorrect information, moderate harmful content, and don't use tenant data to train the models.",
    source: { title: "Explore AI capabilities in Copilot Studio", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/ai-capabilities" }
  },
  {
    id: 7, skill: 1, section: "1B", bullet: "agent-flow-basics",
    topic: "Agent flow requirements",
    question: "To use an agent flow as a tool that an agent can call, which trigger and response action must the flow contain?",
    options: [
      "A scheduled trigger and a 'Send an email' action",
      "The 'When an agent calls the flow' trigger and the 'Respond to the agent' action",
      "A 'When a record is created' trigger and a 'Terminate' action",
      "Any trigger, as long as the flow is in the default solution"
    ],
    correct: 1,
    explanation: "To work as a tool with an agent, a flow must be a solution flow that contains the 'When an agent calls the flow' trigger and the 'Respond to the agent' action, and it must respond in real time (synchronously).",
    source: { title: "Modify an existing flow to use with an agent", url: "https://learn.microsoft.com/microsoft-copilot-studio/flow-modify-use-with-agent" }
  },
  {
    id: 8, skill: 1, section: "1B", bullet: "agent-flow-basics",
    topic: "Respond to the agent limits",
    question: "An agent flow contains logic that takes longer than the synchronous response limit. How should you design it so the agent still gets a timely reply?",
    options: [
      "Set the Respond to the agent action to asynchronous mode",
      "Place long-running actions after the Respond to the agent action so they continue after the response is returned",
      "Split the flow into a desktop flow",
      "Increase the connector response size limit"
    ],
    correct: 1,
    explanation: "The flow must respond within the 100-second action limit. Actions that need to run longer can be placed after the 'Respond to the agent' action; they continue to run (up to the flow run duration limit) after the agent receives its response.",
    source: { title: "Modify an existing flow to use with an agent", url: "https://learn.microsoft.com/microsoft-copilot-studio/flow-modify-use-with-agent" }
  },
  {
    id: 9, skill: 1, section: "1B", bullet: "agent-flow-hitl-monitor",
    topic: "Human-in-the-loop actions",
    question: "Which category of agent flow action requires human intervention, such as approval requests or providing information?",
    options: [
      "Built-in tools (loops and branching)",
      "AI capabilities",
      "Human in the loop",
      "Connectors"
    ],
    correct: 2,
    explanation: "Agent flows include several action types. 'Human in the loop' actions require human intervention—for example, approval requests or requests for information—pausing automation until a person responds.",
    source: { title: "Agent flows and workflows overview", url: "https://learn.microsoft.com/microsoft-copilot-studio/flows-overview" }
  },
  {
    id: 10, skill: 1, section: "1B", bullet: "agent-flow-hitl-monitor",
    topic: "Agent flow design considerations",
    question: "When designing an agent that uses agent flows, which design responsibility falls to the developer?",
    options: [
      "Designing an error-handling pattern so the agent knows how to handle exceptions",
      "Manually billing each run to Power Automate",
      "Writing the orchestrator's system prompt",
      "Disabling concurrency to guarantee ordering"
    ],
    correct: 0,
    explanation: "Among the design points for agent flows, the developer must design an error-handling pattern so the agent knows how to handle exceptions; performance is also constrained by the API limits of included services and the flow response has a size limit.",
    source: { title: "Plan and design integration strategies", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/integrations" }
  },
  {
    id: 11, skill: 1, section: "1C", bullet: "topic-nodes-cards",
    topic: "Adaptive Card node",
    question: "You want a topic to show an Adaptive Card that collects input and submits a response back to the agent. Which requirement applies to that card?",
    options: [
      "The card must be added to a Message node only",
      "The card must contain at least one submit button, as it must be interactive",
      "The card can only contain plain text",
      "The card must use schema version 2.0"
    ],
    correct: 1,
    explanation: "An interactive Adaptive Card node must contain at least one submit button so the user can submit information back to the agent; Copilot Studio creates output variables from the card inputs. Non-interactive, display-only cards belong in a Message or Question node.",
    source: { title: "Ask with Adaptive Cards", url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-ask-with-adaptive-card" }
  },
  {
    id: 12, skill: 1, section: "1C", bullet: "topic-nodes-cards",
    topic: "Dynamic adaptive cards with Power Fx",
    question: "How do you include dynamic, variable-driven content on an Adaptive Card in a Copilot Studio topic?",
    options: [
      "Switch the Adaptive Card node to a Power Fx formula that references your variables",
      "Hard-code each value in the JSON literal",
      "Use a separate cloud flow for every value",
      "Adaptive Cards can't display variable content"
    ],
    correct: 0,
    explanation: "In the Adaptive Card node properties you can switch from JSON to a Power Fx formula, which lets you reference topic or agent variables to insert dynamic content into the card.",
    source: { title: "Ask with Adaptive Cards", url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-ask-with-adaptive-card" }
  },
  {
    id: 13, skill: 1, section: "1C", bullet: "topic-generative-http",
    topic: "Send HTTP request node",
    question: "Which HTTP methods can the Send HTTP request node in a Copilot Studio topic use to call an external REST API?",
    options: [
      "GET only",
      "GET and POST only",
      "GET, POST, PATCH, PUT, and DELETE",
      "Only methods exposed by a custom connector"
    ],
    correct: 2,
    explanation: "The Send HTTP request node supports GET, POST, PATCH, PUT, and DELETE. You can add headers (for example, an Authorization bearer token), supply a body, and parse the response into a Power Fx variable using sample JSON.",
    source: { title: "Make HTTP requests", url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-http-node" }
  },
  {
    id: 14, skill: 1, section: "1C", bullet: "topic-generative-http",
    topic: "Customize generative answers",
    question: "In a Create generative answers node, you clear 'Send a message' and store the response in a global variable. Why?",
    options: [
      "To disable the knowledge source entirely",
      "To prevent the agent from immediately returning the answer so you can customize it (for example, render it in an Adaptive Card)",
      "To force the answer to be returned twice",
      "To switch the agent to classic authoring"
    ],
    correct: 1,
    explanation: "Clearing 'Send a message' and storing the generated answer in a global variable stops the agent from immediately returning the answer, letting you customize it—such as rendering it on an Adaptive Card via a Power Fx formula.",
    source: { title: "Use generative answers in a topic", url: "https://learn.microsoft.com/microsoft-copilot-studio/nlu-boost-node" }
  },
  {
    id: 15, skill: 1, section: "1C", bullet: "topic-generative-http",
    topic: "Custom prompts as tools",
    question: "A maker needs precise, structured JSON output with full control over tone and constraints, beyond what the orchestrator provides. Which Copilot Studio capability fits best?",
    options: [
      "A generative answers node over a public website",
      "An AI prompt (custom prompt) tool",
      "A Condition node",
      "The Conversational boosting system topic"
    ],
    correct: 1,
    explanation: "AI prompts (custom prompts) give makers full control over the model's input—tone, constraints, examples, and structured output formats such as JSON—making them ideal when the orchestrator's fixed system prompt isn't precise enough.",
    source: { title: "Explore AI capabilities in Copilot Studio", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/ai-capabilities" }
  },
  {
    id: 16, skill: 1, section: "1C", bullet: "topic-generative-http",
    topic: "Generative answers priority",
    question: "When a generative answers node defines its own knowledge source AND the agent has agent-level knowledge sources, which takes priority?",
    options: [
      "Agent-level sources always win",
      "Knowledge sources defined in the generative answers node take priority; agent-level sources act as a fallback",
      "They are merged with equal weight",
      "Neither is used unless web search is enabled"
    ],
    correct: 1,
    explanation: "Knowledge sources defined in a generative answers node take priority over agent-level knowledge sources, which function as a fallback.",
    source: { title: "Search public data or use a Bing Custom Search for generative answers nodes", url: "https://learn.microsoft.com/microsoft-copilot-studio/nlu-generative-answers-bing" }
  },

  // ============================================================
  // DOMAIN 2: Integrate and extend agents in Copilot Studio (40–45%)
  // ============================================================
  {
    id: 17, skill: 2, section: "2A", bullet: "knowledge-connectors",
    topic: "Copilot connectors as knowledge",
    question: "Your agent needs to ground answers in large bodies of external content (ServiceNow KB, Confluence) with semantic indexing and citations. Which knowledge approach should you use?",
    options: [
      "Power Platform real-time connectors",
      "Copilot connectors that index data into Microsoft Graph",
      "A Send HTTP request node per query",
      "A computer use tool"
    ],
    correct: 1,
    explanation: "Copilot connectors index organizational external data into Microsoft Graph so it can be added as a knowledge source, providing semantic indexing and citations while respecting source-level permissions. They're the right choice for knowledge discovery and grounded Q&A at scale.",
    source: { title: "Copilot connectors versus Power Platform connectors as knowledge sources", url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-graph-vs-power-platform-connectors" }
  },
  {
    id: 18, skill: 2, section: "2A", bullet: "knowledge-connectors",
    topic: "Power Platform connectors as knowledge",
    question: "When should you use a Power Platform connector (real-time connector) as a knowledge source instead of a Copilot connector?",
    options: [
      "When you need to fetch live data or act on real-time enterprise systems without copying data into Microsoft 365",
      "When you want to index a large static knowledge base",
      "When you need semantic search across indexed content",
      "When the data must be crawled into Microsoft Graph"
    ],
    correct: 0,
    explanation: "Power Platform (real-time) connectors fetch live data or perform actions on real-time enterprise systems—such as Salesforce, ServiceNow, or Azure SQL—without replicating data into Microsoft 365. Copilot connectors are for index-then-answer scenarios at scale.",
    source: { title: "Copilot connectors versus Power Platform connectors as knowledge sources", url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-graph-vs-power-platform-connectors" }
  },
  {
    id: 20, skill: 2, section: "2A", bullet: "knowledge-azure-ai-search",
    topic: "Add Azure AI Search",
    question: "When adding Azure AI Search as a knowledge source in Copilot Studio, what does Microsoft recommend about the connection?",
    options: [
      "Manually configure an endpoint and API key in a variable",
      "Add it through a formal data connection (for example, using Microsoft Entra ID authentication), not a manually configured endpoint and key",
      "Use a Send HTTP request node to query the index",
      "Add as many vector indexes as you need"
    ],
    correct: 1,
    explanation: "You must add Azure AI Search through a formal data connection (Data sources > Azure AI Search), ideally with Entra ID authentication—not a manually configured endpoint and API key. Only one vector index can be added per connection.",
    source: { title: "Add Azure AI Search as a knowledge source", url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search" }
  },
  {
    id: 21, skill: 2, section: "2A", bullet: "knowledge-azure-ai-search",
    topic: "Azure AI Search RAG behavior",
    question: "Compared with Dataverse or Graph-connector knowledge, what is a distinguishing characteristic of an Azure AI Search index knowledge source in Copilot Studio?",
    options: [
      "It requires the user to be authenticated with Entra ID for delegated calls",
      "It returns results from a linked vectorized index, and the connection isn't delegated (no per-user security trimming)",
      "It only supports structured Dataverse tables",
      "It can't be used with generative answers"
    ],
    correct: 1,
    explanation: "Azure AI Search returns results from a linked vectorized index. Unlike Dataverse tables or Graph connectors (which use Entra ID delegated auth), the Azure AI Search connection isn't delegated—there is no security trimming or per-user authentication requirement.",
    source: { title: "Enhance AI responses by using Retrieval Augmented Generation", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/retrieval-augmented-generation" }
  },
  {
    id: 22, skill: 2, section: "2B", bullet: "tool-computer-use",
    topic: "Computer use tool",
    question: "When is the computer use tool the most appropriate choice for extending an agent?",
    options: [
      "When the target system exposes a clean REST API",
      "When you need to automate a website or desktop app that has no API, by visually interpreting the screen and using a virtual mouse and keyboard",
      "When you only need to index documents for knowledge",
      "When you want to deploy to Microsoft Teams"
    ],
    correct: 1,
    explanation: "Computer use lets an agent interact with websites and desktop apps by visually interpreting the screen and using a virtual mouse and keyboard. It's ideal when no API is available—legacy or desktop-only workflows—such as data entry, invoice processing, and extraction.",
    source: { title: "Automate web and desktop apps with computer use", url: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use" }
  },
  {
    id: 23, skill: 2, section: "2B", bullet: "tool-computer-use",
    topic: "Computer use prerequisite",
    question: "What is a prerequisite for using the computer use tool in a Copilot Studio agent?",
    options: [
      "The agent must use classic orchestration",
      "The agent must have generative orchestration turned on",
      "The agent must be published to Facebook",
      "A premium Power Automate license per user"
    ],
    correct: 1,
    explanation: "Computer use is only available for agents with generative orchestration turned on. It's powered by a Computer-Using Agent (CUA) model that perceives the screen, reasons, and acts.",
    source: { title: "Automate web and desktop apps with computer use", url: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use" }
  },
  {
    id: 24, skill: 2, section: "2B", bullet: "tool-mcp",
    topic: "MCP capabilities",
    question: "What does connecting an agent to a Model Context Protocol (MCP) server give the agent access to in Copilot Studio?",
    options: [
      "Only static text knowledge",
      "Tools and resources published by the server, kept dynamically in sync as they change",
      "A dedicated virtual machine",
      "The ability to bypass data loss prevention policies"
    ],
    correct: 1,
    explanation: "An MCP server exposes tools (functions the model can call) and resources (file-like data). Copilot Studio dynamically reflects changes to the server's tools and resources, so the agent always has the latest versions and obsolete items are removed.",
    source: { title: "Extend your agent with Model Context Protocol", url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp" }
  },
  {
    id: 25, skill: 2, section: "2B", bullet: "tool-mcp",
    topic: "MCP prerequisite",
    question: "Which setting must be enabled on an agent to use MCP tools?",
    options: [
      "Generative orchestration",
      "Classic chatbot mode",
      "No authentication",
      "Web search"
    ],
    correct: 0,
    explanation: "You must turn on generative orchestration to use MCP. Copilot Studio currently supports MCP tools and resources (not prompts).",
    source: { title: "Extend your agent with Model Context Protocol", url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp" }
  },
  {
    id: 26, skill: 2, section: "2B", bullet: "tool-mcp",
    topic: "MCP and data policies",
    question: "How are MCP servers governed in Copilot Studio with respect to Power Platform data policies?",
    options: [
      "MCP servers are exempt from data loss prevention policies",
      "Because MCP connectivity relies on Power Platform connectors, a data policy that regulates connectors also regulates the MCP server and its tools",
      "MCP servers require a separate Microsoft 365 DLP policy",
      "MCP servers can only be governed in the Microsoft 365 admin center"
    ],
    correct: 1,
    explanation: "Access to MCP servers relies on Power Platform connectors for connectivity. Therefore, if a data policy regulates Power Platform connectors, it also regulates access to the MCP server and its tools.",
    source: { title: "Add tools and resources from an MCP server to your agent", url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent" }
  },
  {
    id: 27, skill: 2, section: "2B", bullet: "tool-connector-rest",
    topic: "REST API tool spec version",
    question: "When adding a REST API as a tool in Copilot Studio, which OpenAPI specification version must you provide?",
    options: [
      "OpenAPI v3 only",
      "OpenAPI v2 (a v3 spec is automatically translated to v2)",
      "WSDL",
      "GraphQL schema"
    ],
    correct: 1,
    explanation: "You must create REST API tools from an OpenAPI v2 specification because of how Power Platform processes API specs; if you submit a v3 spec, the creation process automatically translates it to v2.",
    source: { title: "Extend your agent with tools from a REST API (preview)", url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-rest-api" }
  },
  {
    id: 28, skill: 2, section: "2B", bullet: "tool-connector-rest",
    topic: "Tool types",
    question: "On the Tools card for a Microsoft 365 Copilot agent, which of the following is a valid 'Create new' tool type?",
    options: [
      "Sensitivity label",
      "Computer use",
      "Retention policy",
      "Conditional Access policy"
    ],
    correct: 1,
    explanation: "When adding a new tool you can create: Prompt, Agent flow, Computer use, Custom connector, Model Context Protocol, and REST API. Sensitivity labels, retention, and Conditional Access are governance/security features, not Copilot Studio tools.",
    source: { title: "Extend Microsoft 365 Copilot with agents", url: "https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions" }
  },
  {
    id: 29, skill: 2, section: "2B", bullet: "tool-connector-rest",
    topic: "REST API tool inputs",
    question: "What three things must you provide to connect an agent to a REST API in Copilot Studio?",
    options: [
      "An OpenAPI spec, authentication details, and descriptions that help the model decide when to invoke the API",
      "A Dataverse table, a sensitivity label, and a retention policy",
      "A virtual network, a private endpoint, and a service principal",
      "A test set, a pipeline, and an environment variable"
    ],
    correct: 0,
    explanation: "To connect to a REST API you provide an OpenAPI specification defining the API's actions, the authentication type and details, and descriptions that help the language model determine when to invoke the API.",
    source: { title: "Extend your agent with tools from a REST API (preview)", url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-rest-api" }
  },
  {
    id: 30, skill: 2, section: "2C", bullet: "multiagent-design",
    topic: "Connect existing Copilot Studio agent",
    question: "Where in Copilot Studio do you add another existing agent so your main agent can delegate to it?",
    options: [
      "On the Knowledge page, as a knowledge source",
      "On the Agents page for your main agent, by selecting Add an agent",
      "In the Power Platform admin center pipelines",
      "In the Topics code editor only"
    ],
    correct: 1,
    explanation: "Multi-agent collaboration is configured on the Agents page for your main agent: select Add an agent and choose the agent type (child agent, existing Copilot Studio agent, Foundry, Fabric, A2A, etc.).",
    source: { title: "Multi-agent orchestration patterns and best practices", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns" }
  },
  {
    id: 31, skill: 2, section: "2C", bullet: "multiagent-design",
    topic: "Effective agent metadata",
    question: "Why is it important to write a clear, specific description when adding a connected agent to your main agent?",
    options: [
      "The description is shown to end users as a disclaimer",
      "The main agent's orchestrator uses the description to understand when to invoke the connected agent",
      "It sets the localStorage key",
      "It determines the connector response size limit"
    ],
    correct: 1,
    explanation: "The description should explain the purpose of the connected agent so the main agent's orchestrator can understand when that agent should be used—especially important when multiple tools or agents have overlapping descriptions.",
    source: { title: "Connect to a Microsoft Foundry agent (preview)", url: "https://learn.microsoft.com/microsoft-copilot-studio/add-agent-foundry-agent" }
  },
  {
    id: 32, skill: 2, section: "2C", bullet: "multiagent-foundry-fabric",
    topic: "Connect Foundry agent",
    question: "When creating a connection to a Microsoft Foundry agent from Copilot Studio, what must you supply?",
    options: [
      "Only the agent's display name",
      "The Foundry project endpoint URL (to create the connection) and the Agent Id of the Foundry agent",
      "A SharePoint site URL",
      "An Azure AI Search admin key"
    ],
    correct: 1,
    explanation: "To connect a Foundry agent you create a connection using the Foundry project endpoint URL, then enter the Agent Id of the Foundry agent (which must be created in the new Microsoft Foundry portal) plus a name and description.",
    source: { title: "Connect to a Microsoft Foundry agent (preview)", url: "https://learn.microsoft.com/microsoft-copilot-studio/add-agent-foundry-agent" }
  },
  {
    id: 33, skill: 2, section: "2C", bullet: "multiagent-foundry-fabric",
    topic: "Connect Fabric data agent",
    question: "Before you can connect a Microsoft Fabric data agent to a Copilot Studio agent, which condition must be met?",
    options: [
      "The Fabric data agent must be published, and both it and the Copilot Studio agent must be on the same tenant",
      "The Fabric data agent must be in draft state",
      "The Copilot Studio agent must use classic orchestration",
      "You must disable generative AI orchestration"
    ],
    correct: 0,
    explanation: "The Fabric data agent must be published with a detailed description, both resources must be on the same tenant, you must be signed in with the same account that has access, and generative orchestration must be enabled.",
    source: { title: "Consume a Fabric Data Agent in Microsoft Copilot Studio (preview)", url: "https://learn.microsoft.com/fabric/data-science/data-agent-microsoft-copilot-studio" }
  },
  {
    id: 34, skill: 2, section: "2C", bullet: "multiagent-foundry-fabric",
    topic: "Fabric data agent authentication",
    question: "When you add a Fabric data agent to a Copilot Studio agent, which authentication options can you choose for the connected agent?",
    options: [
      "Anonymous only",
      "User authentication or Agent author authentication",
      "API key only",
      "Certificate only"
    ],
    correct: 1,
    explanation: "For a connected Fabric data agent you can choose User authentication or Agent author authentication. With User authentication you must ensure users have access to the Fabric data agent and its underlying data sources.",
    source: { title: "Consume a Fabric Data Agent in Microsoft Copilot Studio (preview)", url: "https://learn.microsoft.com/fabric/data-science/data-agent-microsoft-copilot-studio" }
  },
  {
    id: 35, skill: 2, section: "2C", bullet: "multiagent-a2a",
    topic: "A2A vs HTTP",
    question: "Why would you connect to an external agent over the Agent2Agent (A2A) protocol instead of a plain HTTP connector?",
    options: [
      "A2A is faster for one-shot API calls",
      "A2A is designed for agent workflows, supports multiturn interactions, and provides rich contextual metadata for delegating tasks",
      "A2A requires no endpoint URL",
      "HTTP connectors can't return JSON"
    ],
    correct: 1,
    explanation: "Unlike an HTTP connector, the A2A protocol is designed for agent workflows: it supports multiturn interactions, provides rich contextual metadata, and is interoperable across frameworks—so Copilot Studio can delegate tasks to another agent, not just call APIs.",
    source: { title: "Connect an agent available over the Agent2Agent (A2A) protocol", url: "https://learn.microsoft.com/microsoft-copilot-studio/add-agent-agent-to-agent" }
  },
  {
    id: 38, skill: 2, section: "2D", bullet: "azure-generative-foundry",
    topic: "Bring your own model",
    question: "How does a maker use a frontier model from the Azure AI Foundry model catalog in a Copilot Studio prompt?",
    options: [
      "By pasting the model weights into the prompt",
      "In the prompt's Model field, select '+' to connect a model from Azure AI Foundry, entering the model deployment name and base model name exactly as shown in Foundry",
      "By enabling web search",
      "Foundry models can't be used in prompts"
    ],
    correct: 1,
    explanation: "In a prompt tool, select the Model dropdown and the plus sign to connect a model from Azure AI Foundry; enter the Model deployment name and Base model name exactly as they appear in Azure AI Foundry, then Connect. The prompt then always uses that model.",
    source: { title: "Bring your own model for your prompts", url: "https://learn.microsoft.com/microsoft-copilot-studio/bring-your-own-model-prompts" }
  },
  {
    id: 39, skill: 2, section: "2D", bullet: "azure-generative-foundry",
    topic: "Govern Foundry model connector",
    question: "Where can an administrator apply a data loss prevention (DLP) policy specifically for the Azure AI Foundry models used in prompts?",
    options: [
      "In the Microsoft 365 admin center under Copilot",
      "In the Power Platform admin center data policies, under the 'Azure AI Foundry' connector",
      "In the SharePoint admin center",
      "In Microsoft Purview only"
    ],
    correct: 1,
    explanation: "Azure AI Foundry models are connected via connectors, so admins set governance for the 'Azure AI Foundry' connector on the data policies page in the Power Platform admin center, adding a specific DLP policy for these models.",
    source: { title: "Bring your own model for your prompts", url: "https://learn.microsoft.com/microsoft-copilot-studio/bring-your-own-model-prompts" }
  },
  {
    id: 40, skill: 2, section: "2D", bullet: "azure-generative-foundry",
    topic: "Azure AI Search for grounding",
    question: "A team wants generative answers grounded on a developer-built search index within their own geo, while still letting the AI summarize a moderated answer. Which option fits?",
    options: [
      "Use Bing Search grounding",
      "Use an Azure AI Search index as a knowledge source",
      "Use a Power Automate desktop flow",
      "Disable generative answers"
    ],
    correct: 1,
    explanation: "Using an Azure AI Search index as a knowledge source lets developers build their own indexes (searching content within their geos) while still using the generative answers feature to craft a moderated, summarized answer.",
    source: { title: "Use public websites to improve generative answers", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-ai-public-websites" }
  },
  {
    id: 41, skill: 2, section: "2D", bullet: "azure-app-insights",
    topic: "Connect Application Insights",
    question: "How do you connect a Copilot Studio agent to Azure Application Insights to capture telemetry?",
    options: [
      "Add the Application Insights connection string in the agent's Settings > Advanced, in the Application Insights section",
      "Add a Send HTTP request node pointing to Azure Monitor",
      "Install a Power Platform pipeline",
      "Enable web search"
    ],
    correct: 0,
    explanation: "You connect an agent to Application Insights by entering the connection string under the agent's Settings > Advanced > Application Insights section. You can optionally enable logging of activities and sensitive activity properties.",
    source: { title: "Capture telemetry with Application Insights", url: "https://learn.microsoft.com/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry" }
  },
  {
    id: 43, skill: 2, section: "2D", bullet: "azure-app-insights",
    topic: "ALM non-solution-aware items",
    question: "After deploying a solution between environments, which Copilot Studio setting is NOT solution-aware and must be reconfigured post-deployment?",
    options: [
      "Topics",
      "Agent flows",
      "Azure Application Insights settings",
      "Variables"
    ],
    correct: 2,
    explanation: "Some Copilot Studio items aren't solution-aware and need post-deployment steps on the downstream environment, including Azure Application Insights settings, manual authentication settings, Direct Line/Web channel security, deployed channels, and sharing.",
    source: { title: "Establish an application lifecycle management strategy", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/alm" }
  },

  // ============================================================
  // DOMAIN 3: Test and manage agents (20–25%)
  // ============================================================
  {
    id: 44, skill: 3, section: "3A", bullet: "eval-test-set",
    topic: "Test case and test set",
    question: "In Copilot Studio agent evaluation, what is a test set?",
    options: [
      "A single question with no expected answer",
      "A group of test cases, where each test case simulates a user interaction and can include an expected response",
      "A list of channels the agent is published to",
      "A pipeline stage"
    ],
    correct: 1,
    explanation: "A test case is a single interaction simulating how a user interacts with the agent and can include the expected response. A group of test cases is a test set, letting you run many cases at once and get an aggregate score.",
    source: { title: "About agent evaluation", url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro" }
  },
  {
    id: 45, skill: 3, section: "3A", bullet: "eval-test-set",
    topic: "Create a test set",
    question: "Which are valid ways to build a test set in Copilot Studio agent evaluation?",
    options: [
      "Only by writing each case manually",
      "Generate cases from knowledge or topics, import a test set file, or manually write cases",
      "Only by importing from Azure DevOps",
      "Only by recording a live conversation"
    ],
    correct: 1,
    explanation: "You can generate test cases from knowledge or topics, import a test set file, or manually write test cases. Each test set can evaluate the agent using multiple test methods at once.",
    source: { title: "About agent evaluation", url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro" }
  },
  {
    id: 46, skill: 3, section: "3A", bullet: "eval-review-results",
    topic: "Evaluation scoring",
    question: "After running an evaluation with a test set, how does Copilot Studio score the results?",
    options: [
      "It assigns a single letter grade",
      "Each test case gets Pass, Fail, Invalid, or Error, and the test set gets a Pass rate based on the pass/fail rate",
      "It only reports total latency",
      "It compares against the 700 passing score"
    ],
    correct: 1,
    explanation: "Copilot Studio simulates conversations, collects responses, and assigns each test case a Pass, Fail, Invalid, or Error based on the case criteria; the test set receives a Pass rate based on the pass/fail rate, visible under Recent results.",
    source: { title: "Run evaluations and view results", url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results" }
  },
  {
    id: 47, skill: 3, section: "3A", bullet: "eval-review-results",
    topic: "Compare and retain results",
    question: "You want to measure whether an agent change improved quality and keep the evidence longer than the default. What should you do?",
    options: [
      "Run the same test set at least twice and use 'Compare with'; export results to CSV since results are kept only 89 days",
      "Delete the old test set and create a new one",
      "Increase the connector response limit",
      "Switch the agent to classic orchestration"
    ],
    correct: 0,
    explanation: "Run the same test set at least twice to use the 'Compare with' tool, which shows which cases improved or declined. Test results are available in Copilot Studio for 89 days; export to CSV to keep them longer.",
    source: { title: "Run evaluations and view results", url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results" }
  },
  {
    id: 48, skill: 3, section: "3B", bullet: "alm-solutions",
    topic: "Agents and solutions",
    question: "Where is an agent stored when you create it in Copilot Studio, and why does that matter for ALM?",
    options: [
      "In SharePoint; it enables versioning",
      "In a Power Platform solution; solutions are the mechanism to transport agents and components across environments",
      "In a Teams channel; it enables sharing",
      "In Application Insights; it enables monitoring"
    ],
    correct: 1,
    explanation: "When you create an agent in Copilot Studio it's created within a Power Platform solution. Solutions are the mechanism for ALM—containers used to export/import and transport artifacts and customizations across environments.",
    source: { title: "Create and manage solutions in Copilot Studio", url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview" }
  },
  {
    id: 49, skill: 3, section: "3B", bullet: "alm-solutions",
    topic: "ALM golden rules",
    question: "Which of the following is one of the ALM golden rules for Copilot Studio agents?",
    options: [
      "Always customize directly in production",
      "Always work in the context of solutions and use a custom publisher and prefix",
      "Never use environment variables",
      "Export solutions as unmanaged into production"
    ],
    correct: 1,
    explanation: "ALM golden rules include: don't customize outside a development environment, always work in the context of solutions, use a custom publisher and prefix, use environment variables for cross-environment settings, and export/deploy as managed (except dev).",
    source: { title: "Establish an application lifecycle management strategy", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/alm" }
  },
  {
    id: 50, skill: 3, section: "3B", bullet: "alm-envvars-pipelines",
    topic: "Environment variables",
    question: "Why use environment variables in a Copilot Studio solution?",
    options: [
      "To store the agent's published transcript",
      "To store parameter keys/values separately from consuming objects so values can change per environment when migrating solutions",
      "To bypass DLP policies",
      "To increase the connector response limit"
    ],
    correct: 1,
    explanation: "Environment variables store parameter keys and values that serve as input to other application objects. Separating parameters from the consuming objects lets you change values within or across environments when you migrate solutions.",
    source: { title: "Recommendations for designing a deployment failure mitigation strategy", url: "https://learn.microsoft.com/power-platform/well-architected/operational-excellence/mitigation-strategy" }
  },
  {
    id: 51, skill: 3, section: "3B", bullet: "alm-envvars-pipelines",
    topic: "Power Platform Pipelines",
    question: "Among Copilot Studio ALM automation options, which is best suited for empowering citizen developers with low setup complexity?",
    options: [
      "Azure DevOps",
      "GitHub Actions for Power Platform",
      "Power Platform Pipelines for Copilot Studio",
      "A manual export/import each time"
    ],
    correct: 2,
    explanation: "Power Platform Pipelines bring CI/CD into the service with low setup complexity, ideal for empowering citizen developers. Azure DevOps targets enterprise teams needing full control; GitHub Actions targets dev/admin teams.",
    source: { title: "Establish an application lifecycle management strategy", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/alm" }
  },
  {
    id: 52, skill: 3, section: "3B", bullet: "alm-envvars-pipelines",
    topic: "Configure pipelines",
    question: "Where can a maker configure and manage solution pipelines without leaving Copilot Studio?",
    options: [
      "In the solution explorer, by selecting Pipelines underneath the list of solutions",
      "Only in the Microsoft 365 admin center",
      "Only in Azure DevOps",
      "In the Topics code editor"
    ],
    correct: 0,
    explanation: "Solution pipelines automate deployment of solutions across environments. In Copilot Studio you open the solution explorer and select Pipelines underneath the list of solutions, then follow the Power Apps pipeline setup requirements.",
    source: { title: "Create and manage solutions in Copilot Studio", url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview" }
  },
  {
    id: 53, skill: 3, section: "3A", bullet: "eval-test-set",
    topic: "Multi-turn test cases",
    question: "What can a single agent evaluation test case represent in Copilot Studio?",
    options: [
      "Only a single question with no expected answer",
      "A single question or an entire conversation, optionally including the expected response",
      "Only a published channel configuration",
      "Only a pipeline deployment"
    ],
    correct: 1,
    explanation: "A test case is a single interaction that simulates how a user would interact with the agent. The interaction can be a single question or an entire conversation, and it can also include the answer you expect the agent to reply with.",
    source: { title: "About agent evaluation", url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro" }
  },
  {
    id: 54, skill: 3, section: "3A", bullet: "eval-review-results",
    topic: "Root cause analysis",
    question: "When reviewing evaluation results, a failing test case may stem from two perspectives. Which pair correctly describes them?",
    options: [
      "A licensing issue or a channel issue",
      "A test case issue (prompt/expected answer/criteria) or an agent design issue (instructions, knowledge, or tool configuration)",
      "A pipeline issue or an environment variable issue",
      "A connector limit issue or an authentication issue"
    ],
    correct: 1,
    explanation: "Assess failed cases from two perspectives: a test case issue (is the prompt, expected answer, or acceptance criteria causing the failure?) or an agent design issue (unclear instructions, or flaws in knowledge or tool configuration?). Then refine the test case or improve the agent.",
    source: { title: "Review the agent evaluation checklist", url: "https://learn.microsoft.com/agents/agent-evaluation/evaluation-checklist" }
  },
  {
    id: 55, skill: 3, section: "3B", bullet: "alm-solutions",
    topic: "Managed vs unmanaged",
    question: "Following the ALM golden rules, how should you deploy a Copilot Studio solution to test and production environments?",
    options: [
      "As unmanaged, so makers can edit directly there",
      "As managed, reserving unmanaged solutions for development environments",
      "It doesn't matter which solution type you use",
      "Always as a single default solution"
    ],
    correct: 1,
    explanation: "An ALM golden rule is to export and deploy solutions as managed, unless you're setting up a development environment. You shouldn't customize outside of development; downstream environments receive managed solutions.",
    source: { title: "Establish an application lifecycle management strategy", url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/alm" }
  }
];
