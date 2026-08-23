/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// PL-400 Power Platform Developer - Study-mode Questions
// COURSE-DERIVED: each question is written from a specific Microsoft Learn developer doc and links
// to it. correct = 0-based index.

const STUDY_QUESTIONS = [
  // ---- Domain 1 ----
  {
    id: 101, skill: 1, section: "1A", bullet: "td-oob-vs-custom",
    topic: "Plug-ins vs Workflow Activities",
    question: "Which statement reflects Microsoft guidance on choosing plug-ins for custom logic?",
    options: [
      "Always prefer plug-ins for everything",
      "Plug-ins are powerful and performant but require developer skills and have a hard time limit, so weigh them against declarative options",
      "Plug-ins can't connect to external systems",
      "Plug-ins run only in the browser"
    ],
    correct: 1,
    explanation: "Plug-ins are powerful and performant and can connect to external systems, but they require developer skills to build/maintain, can be abused (perf impact), and have a hard time limit. Evaluate declarative options first.",
    source: { title: "Use plug-ins to extend business processes", url: "https://learn.microsoft.com/power-apps/developer/data-platform/plug-ins" }
  },
  {
    id: 102, skill: 1, section: "1A", bullet: "td-table-types",
    topic: "Elastic Tables",
    question: "Which Dataverse table type is designed for very large volumes of data with high-throughput, flexible-schema (NoSQL-style) workloads?",
    options: ["Standard table", "Elastic table", "Virtual table", "Activity table"],
    correct: 1,
    explanation: "Elastic tables are built for scenarios needing massive scale and high throughput with a flexible schema (backed by Azure Cosmos DB). Standard tables are the default relational store; virtual tables surface external data.",
    source: { title: "Types of tables in Dataverse", url: "https://learn.microsoft.com/power-apps/maker/data-platform/types-of-entities" }
  },

  // ---- Domain 2 ----
  {
    id: 103, skill: 2, section: "2B", bullet: "alm-managed-unmanaged",
    topic: "Editing Managed Components",
    question: "You need to change a component that arrived in a managed solution. What must you do, and what is the side effect?",
    options: [
      "Edit it directly in the managed solution with no consequences",
      "Add it to an unmanaged solution to edit it, which creates a dependency that prevents uninstalling the managed solution until removed",
      "Delete the environment",
      "Convert the managed solution to unmanaged"
    ],
    correct: 1,
    explanation: "You can't edit managed components directly; you add them to an unmanaged solution to edit. Doing so creates a dependency between your unmanaged customizations and the managed solution, which then can't be uninstalled until the dependency is removed.",
    source: { title: "Solution concepts (ALM)", url: "https://learn.microsoft.com/power-platform/alm/solution-concepts-alm" }
  },
  {
    id: 104, skill: 2, section: "2B", bullet: "alm-managed-unmanaged",
    topic: "Solution Publisher Prefix",
    question: "Why should you define a custom solution publisher with a meaningful prefix instead of using the default?",
    options: [
      "The prefix changes the GUID of every row",
      "The publisher prefix helps avoid naming collisions so solutions from different publishers can coexist; it should be set before creating components",
      "It disables managed solutions",
      "It is required to run plug-ins"
    ],
    correct: 1,
    explanation: "The publisher prefix (e.g., contoso_) avoids naming collisions so solutions from different publishers can be installed in the same environment. Set it before creating metadata, because you can't rename metadata items afterward.",
    source: { title: "Solution concepts (ALM)", url: "https://learn.microsoft.com/power-platform/alm/solution-concepts-alm" }
  },

  // ---- Domain 3 ----
  {
    id: 105, skill: 3, section: "3B", bullet: "pa-canvas-perf",
    topic: "Delegable vs Non-delegable",
    question: "Which approach keeps a canvas app accurate over a large data source?",
    options: [
      "Rely on non-delegable functions and accept the 500-row limit",
      "Use delegable functions/operators so filtering and sorting happen at the data source instead of pulling rows to the client",
      "Load the entire table into a collection on every keystroke",
      "Turn off the data row limit warning"
    ],
    correct: 1,
    explanation: "Use delegable functions and operators so the data source performs filtering/sorting and returns only needed rows. Non-delegable operations only process up to the local record limit (default 500), risking incorrect results over large data.",
    source: { title: "Understand delegation in a canvas app", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/delegation-overview" }
  },
  {
    id: 106, skill: 3, section: "3A", bullet: "pa-flows-from-canvas",
    topic: "Passing Data to a Flow",
    question: "When a canvas app calls a Power Automate cloud flow, how does it pass values and receive a result?",
    options: [
      "It can't pass any values",
      "It passes parameters in the .Run() call and can receive a response returned by the flow",
      "Only through a Dataverse plug-in",
      "Only by email"
    ],
    correct: 1,
    explanation: "An instant cloud flow added to a canvas app is called (e.g., FlowName.Run(arg1, arg2)) passing parameters from the app; the flow can return values via a Respond to Power Apps action that the app consumes.",
    source: { title: "Use logic flows from canvas apps", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/using-logic-flows" }
  },

  // ---- Domain 4 ----
  {
    id: 107, skill: 4, section: "4A", bullet: "ux-event-registration",
    topic: "Business Rules vs JavaScript",
    question: "For simple form logic that a non-developer can maintain, what does Microsoft recommend before client scripting?",
    options: [
      "Always write JavaScript",
      "Use business rules — a no-code way to apply form logic — and use client scripting only when business rules can't meet the requirement",
      "Use a plug-in for all form logic",
      "Use an Azure Function for form logic"
    ],
    correct: 1,
    explanation: "Microsoft recommends business rules (no-code) for form logic where possible, since a non-developer can maintain them. Use client scripting (JavaScript + Client API) when the requirement can't be met with a business rule.",
    source: { title: "Apply business logic using client scripting in model-driven apps", url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/client-scripting" }
  },
  {
    id: 108, skill: 4, section: "4B", bullet: "pcf-features-deploy",
    topic: "PCF vs HTML Web Resources",
    question: "How do PCF code components differ from HTML web resources?",
    options: [
      "PCF components load in a separate iframe after everything else",
      "PCF components render in the same context and load with other components, and have access to framework APIs (lifecycle, data, Web API, device features)",
      "Web resources are always faster and more capable",
      "PCF components can't be reused"
    ],
    correct: 1,
    explanation: "Unlike HTML web resources, PCF code components render as part of the same context and load at the same time as other components, giving a seamless experience, plus access to framework APIs (lifecycle, contextual data, Web API, device/utility features) and reusability.",
    source: { title: "Power Apps component framework overview", url: "https://learn.microsoft.com/power-apps/developer/component-framework/overview" }
  },
  {
    id: 109, skill: 4, section: "4B", bullet: "pcf-features-deploy",
    topic: "Declaring a PCF Component Premium",
    question: "How do you declare that a PCF component connects to an external service (making it a premium component)?",
    options: [
      "Add an external-service-usage node listing the domains to the component manifest",
      "Email Microsoft support",
      "Set a flag in the Plug-in Registration Tool",
      "Add an environment variable"
    ],
    correct: 0,
    explanation: "You declare a code component as premium by adding an <external-service-usage enabled=\"true\"> node with the external domains it connects to in the component's manifest. Components that connect to external data through the browser are premium.",
    source: { title: "Power Apps component framework overview (Licensing)", url: "https://learn.microsoft.com/power-apps/developer/component-framework/overview" }
  },

  // ---- Domain 5 ----
  {
    id: 110, skill: 5, section: "5A", bullet: "plugin-pipeline-stages",
    topic: "PreOperation Changes",
    question: "Where should a plug-in modify column values of the record being created/updated so the change is saved within the same transaction without triggering another event?",
    options: [
      "PreOperation stage (modify the Target before the main operation)",
      "PreValidation only, after security checks",
      "PostOperation by updating the same record again",
      "Client-side JavaScript"
    ],
    correct: 0,
    explanation: "Change values in the PreOperation stage (within the transaction, before the main operation) by modifying the Target. Avoid changing the same record in PostOperation, which triggers a new Update event.",
    source: { title: "Event framework in Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/developer/data-platform/event-framework" }
  },
  {
    id: 111, skill: 5, section: "5A", bullet: "plugin-context-images",
    topic: "Cancelling an Operation",
    question: "How should a plug-in cancel an invalid operation and show a message to the user?",
    options: [
      "Call Environment.Exit()",
      "Throw an InvalidPluginExecutionException with an appropriate message (ideally detected in PreValidation)",
      "Return null from Execute",
      "Delete the record"
    ],
    correct: 1,
    explanation: "To cancel an operation, throw an InvalidPluginExecutionException with a descriptive message; detect the condition in PreValidation to avoid a costly transaction rollback. Any exception in a synchronous in-transaction stage rolls back the whole transaction.",
    source: { title: "Event framework in Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/developer/data-platform/event-framework" }
  },
  {
    id: 112, skill: 5, section: "5C", bullet: "webapi-operations",
    topic: "Functions vs Actions",
    question: "In the Dataverse Web API (OData v4), how are most Organization service messages exposed?",
    options: [
      "As SQL stored procedures",
      "As OData functions (typically GET, no side effects) and actions (typically POST, may have side effects)",
      "They are not exposed at all",
      "Only as GraphQL resolvers"
    ],
    correct: 1,
    explanation: "OData v4 provides named operations via functions and actions. The Web API exposes most Organization service messages as corresponding functions (usually GET) or actions (usually POST). CRUD operations use the standard HTTP verbs instead.",
    source: { title: "Use the Microsoft Dataverse Web API", url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/overview" }
  },
  {
    id: 113, skill: 5, section: "5B", bullet: "connector-azure-policy",
    topic: "Policy Templates",
    question: "What do custom connector policy templates let you do?",
    options: [
      "Modify connector behavior at runtime (e.g., route, set headers, convert values) without changing the backend API",
      "Define Dataverse security roles",
      "Create solution layers",
      "Replace OAuth with no authentication"
    ],
    correct: 0,
    explanation: "Policy templates let you change a custom connector's behavior at runtime — for example setting a header, routing a request, or transforming a value — without modifying the underlying API. You can also write code to transform data.",
    source: { title: "Custom connectors overview", url: "https://learn.microsoft.com/connectors/custom-connectors/" }
  },
  {
    id: 114, skill: 5, section: "5D", bullet: "adv-flows-expressions",
    topic: "Trigger Conditions",
    question: "How can you stop a cloud flow from running its actions unless incoming data meets a condition, without starting the run at all?",
    options: [
      "Add a trigger condition (filter) so the flow only triggers when the expression is true",
      "Delete the trigger",
      "Use a Pre Image",
      "Register the flow as a plug-in"
    ],
    correct: 0,
    explanation: "A trigger condition (filter) evaluates an expression and only starts the flow when it's true, avoiding unnecessary runs. You can also configure retry policies on actions to handle transient failures.",
    source: { title: "Error handling and trigger conditions in Power Automate", url: "https://learn.microsoft.com/power-automate/guidance/coding-guidelines/error-handling" }
  },

  // ---- Domain 6 ----
  {
    id: 115, skill: 6, section: "6A", bullet: "int-service-endpoints",
    topic: "Synchronous vs Async Endpoints",
    question: "Which Dataverse integration option lets an external endpoint run synchronously (in the transaction) and even affect the operation?",
    options: [
      "A webhook (which can be registered synchronously)",
      "Azure Event Hubs (always async, telemetry-scale)",
      "Change tracking",
      "An alternate key"
    ],
    correct: 0,
    explanation: "Webhooks can be registered to run synchronously within the pipeline (and can affect the operation), whereas Azure Service Bus and Azure Event Hubs are asynchronous, fire-and-forget style integrations suited to decoupled/high-volume scenarios.",
    source: { title: "Azure integration with Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/developer/data-platform/azure-integration" }
  },
  {
    id: 116, skill: 6, section: "6B", bullet: "int-change-tracking",
    topic: "Change Tracking Tokens",
    question: "How does change tracking let a sync job retrieve only what changed since last time?",
    options: [
      "It returns a token; on the next sync you pass the token to get only the changes since then",
      "It deletes all rows after each sync",
      "It requires reading the entire table each time",
      "It only works with canvas apps"
    ],
    correct: 0,
    explanation: "Change tracking returns a token representing the point of the last synchronization. On the next run you supply that token to retrieve only the rows created, updated, or deleted since then — efficient incremental sync to external systems.",
    source: { title: "Use change tracking to synchronize data with external systems", url: "https://learn.microsoft.com/power-apps/developer/data-platform/use-change-tracking-synchronize-data-external-systems" }
  }
];
