/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// PL-400 Power Platform Developer (Associate) - Practice Exam Questions
// COURSE-DERIVED: every question is written from the text of a specific Microsoft Learn developer
// doc that the PL-400 study guide / PL-400T00 course references; `source` links to that doc.
// Mapped to the official PL-400 study guide (Skills measured as of March 19, 2026). correct = 0-based.

const QUESTIONS = [
  // ============================================================
  // DOMAIN 1: Create a technical design (10–15%)
  // ============================================================
  {
    id: 1, skill: 1, section: "1A", bullet: "td-oob-vs-custom",
    topic: "Out-of-the-box vs Custom Code",
    question: "When designing a Dataverse solution, which approach should you evaluate FIRST before writing a plug-in?",
    options: [
      "Always write a plug-in for any business logic",
      "Whether a declarative option (business rule, calculated/rollup column, Power Automate, custom action) can meet the requirement",
      "Whether to write the code in C# or JavaScript",
      "Whether to use the Web API or the Organization service"
    ],
    correct: 1,
    explanation: "Microsoft guidance is to first consider declarative options (business rules, calculated/rollup columns, Power Automate, custom actions) before writing a plug-in. Use plug-ins only when a declarative process can't meet the requirement.",
    source: { title: "Use plug-ins to extend business processes", url: "https://learn.microsoft.com/power-apps/developer/data-platform/plug-ins" }
  },
  {
    id: 2, skill: 1, section: "1A", bullet: "td-business-logic-placement",
    topic: "Where to Implement Business Logic",
    question: "A requirement must run server-side, synchronously, within the Dataverse database transaction, and be able to cancel an invalid operation. Which option fits best?",
    options: [
      "Client-side JavaScript on the form",
      "A synchronous Dataverse plug-in",
      "A scheduled Power Automate cloud flow",
      "A canvas app Power Fx formula"
    ],
    correct: 1,
    explanation: "Server-side logic that runs inside the transaction and can cancel the operation is a synchronous plug-in. Client scripting runs only in the form; scheduled flows run later and out-of-transaction; canvas Power Fx is client-side.",
    source: { title: "Use plug-ins to extend business processes", url: "https://learn.microsoft.com/power-apps/developer/data-platform/plug-ins" }
  },
  {
    id: 3, skill: 1, section: "1A", bullet: "td-business-logic-placement",
    topic: "Client vs Server Logic",
    question: "Which business logic option executes in the user's browser and can react to form events like OnLoad and OnChange?",
    options: [
      "A Dataverse plug-in",
      "Client scripting (JavaScript using the Client API)",
      "An Azure Function",
      "A rollup column"
    ],
    correct: 1,
    explanation: "Client scripting (JavaScript targeting the Client API object model) runs in the browser and reacts to model-driven form/grid events such as OnLoad, OnChange, and OnSave. Plug-ins and Azure Functions run server-side.",
    source: { title: "Apply business logic using client scripting in model-driven apps", url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/client-scripting" }
  },
  {
    id: 4, skill: 1, section: "1A", bullet: "td-table-types",
    topic: "Table Types",
    question: "You need a Dataverse table that surfaces data living in an external system in real time, without copying it into Dataverse. Which table type fits?",
    options: ["Standard table", "Virtual table", "Elastic table", "Activity table"],
    correct: 1,
    explanation: "A virtual table surfaces data from an external data source in real time as if it were a Dataverse table, without storing the data in Dataverse. Standard tables store data in Dataverse; elastic tables suit very high-volume/NoSQL-style workloads.",
    source: { title: "Types of tables in Dataverse", url: "https://learn.microsoft.com/power-apps/maker/data-platform/types-of-entities" }
  },
  {
    id: 5, skill: 1, section: "1A", bullet: "td-security-impact",
    topic: "Security Feature Impact",
    question: "Which Power Platform feature can BLOCK a custom connector or flow from combining data between connector groups, and so must be considered when designing integrations?",
    options: [
      "Data loss prevention (DLP) policies",
      "Solution layers",
      "Environment variables",
      "Alternate keys"
    ],
    correct: 0,
    explanation: "DLP policies classify connectors as business vs non-business and block data flowing between groups. When designing solution components that use connectors, you must assess DLP impact (alongside security roles, teams, business units, and row sharing).",
    source: { title: "Data loss prevention policies (Power Platform)", url: "https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention" }
  },
  {
    id: 6, skill: 1, section: "1A", bullet: "td-auth-strategy",
    topic: "Authentication Strategy",
    question: "Which authentication method does Microsoft recommend when designing a custom connector that secures access to your API?",
    options: [
      "No authentication",
      "Microsoft Entra ID (OAuth 2.0)",
      "Hard-coded credentials in the connector",
      "A shared password emailed to users"
    ],
    correct: 1,
    explanation: "For custom connectors, Microsoft recommends Microsoft Entra ID (OAuth 2.0). Custom connectors support generic OAuth 2.0, service-specific OAuth, Basic auth, and API key — but Entra ID is the recommended approach.",
    source: { title: "Custom connectors overview (Secure your API)", url: "https://learn.microsoft.com/connectors/custom-connectors/" }
  },
  {
    id: 7, skill: 1, section: "1B", bullet: "td-design-components",
    topic: "Designing Reusable Components",
    question: "You need a reusable UI control that renders a custom visual (e.g., a slider or map) bound to a column or dataset across model-driven and canvas apps. Which component type should you design?",
    options: [
      "An HTML web resource",
      "A Power Apps component framework (PCF) code component",
      "A Power Automate child flow",
      "A Dataverse business rule"
    ],
    correct: 1,
    explanation: "PCF code components are reusable controls that render bound to columns or datasets across model-driven and canvas apps, loading in the same context as native controls (unlike HTML web resources). They're a core reusable-component design choice for developers.",
    source: { title: "Power Apps component framework overview", url: "https://learn.microsoft.com/power-apps/developer/component-framework/overview" }
  },

  // ============================================================
  // DOMAIN 2: Build Power Platform solutions / ALM (10–15%)
  // ============================================================
  {
    id: 8, skill: 2, section: "2A", bullet: "bld-security-roles",
    topic: "Security Roles for Code (Least Privilege)",
    question: "When configuring Dataverse security so a plug-in or code component works while minimizing risk, which principle should you follow?",
    options: [
      "Grant every user the System Administrator role",
      "Grant the least privilege required — only the privileges the component needs",
      "Disable security roles entirely",
      "Use a single shared account with full access for all code"
    ],
    correct: 1,
    explanation: "Configure Dataverse security roles to support code components following the principle of least privilege — granting only the privileges the component needs, rather than over-permissioning users or using broad admin roles.",
    source: { title: "Security roles and privileges (Power Platform)", url: "https://learn.microsoft.com/power-platform/admin/security-roles-privileges" }
  },
  {
    id: 9, skill: 2, section: "2A", bullet: "bld-dev-environments",
    topic: "Development Environments",
    question: "Following ALM best practice, where should developers make and test customizations before they reach production?",
    options: [
      "Directly in the production environment",
      "In a development (and separate test) environment, distributing changes downstream",
      "Only in the default environment shared by all users",
      "In an end user's personal OneDrive"
    ],
    correct: 1,
    explanation: "Makers and developers work in development environments using unmanaged solutions, then import to downstream environments (test, UAT, production) as managed solutions — keeping experiments out of production.",
    source: { title: "Solution concepts (ALM)", url: "https://learn.microsoft.com/power-platform/alm/solution-concepts-alm" }
  },
  {
    id: 10, skill: 2, section: "2B", bullet: "alm-managed-unmanaged",
    topic: "Managed vs Unmanaged Solutions",
    question: "Which statement about managed and unmanaged solutions is correct?",
    options: [
      "You develop in managed solutions and deploy unmanaged to production",
      "You develop in unmanaged solutions (your source) and deploy managed solutions to downstream environments",
      "Managed and unmanaged solutions are identical",
      "You can freely edit components directly inside a managed solution"
    ],
    correct: 1,
    explanation: "Unmanaged solutions are developed (and are your source, checked into source control); managed solutions are deployed to downstream environments (test/prod). You can't edit components directly within a managed solution.",
    source: { title: "Solution concepts (ALM)", url: "https://learn.microsoft.com/power-platform/alm/solution-concepts-alm" }
  },
  {
    id: 11, skill: 2, section: "2B", bullet: "alm-managed-unmanaged",
    topic: "Deleting a Managed Solution",
    question: "What happens when you delete (uninstall) a managed solution that contains a custom table?",
    options: [
      "Nothing is removed; the components stay in the default solution",
      "All the customizations and extensions it included are removed, and data in its custom tables/columns is lost",
      "Only the solution container is removed but the table and its data remain",
      "The solution is converted to unmanaged"
    ],
    correct: 1,
    explanation: "Deleting a managed solution removes all the customizations and extensions it included; data stored in custom tables and custom columns that are part of the managed solution is lost. (Deleting an unmanaged solution removes only the container.)",
    source: { title: "Solution concepts (ALM)", url: "https://learn.microsoft.com/power-platform/alm/solution-concepts-alm" }
  },
  {
    id: 12, skill: 2, section: "2B", bullet: "alm-solution-layers",
    topic: "Solution Layers",
    question: "When you import an unmanaged solution's customizations in a dev environment and later import it as managed to test, which layers are involved?",
    options: [
      "Customizing in dev works in the unmanaged layer; the managed solution imports into the managed layer",
      "Both always use the managed layer",
      "Layers don't exist in Power Platform",
      "Unmanaged solutions have no layer at all"
    ],
    correct: 0,
    explanation: "When you customize in development you work in the unmanaged layer. When you export as managed and import to another environment, the managed solution is imported into the managed layer. Solution layers determine the runtime behavior when multiple solutions affect a component.",
    source: { title: "Solution layers (ALM)", url: "https://learn.microsoft.com/power-platform/alm/solution-layers-alm" }
  },
  {
    id: 13, skill: 2, section: "2B", bullet: "alm-env-variables",
    topic: "Environment Variables",
    question: "What is the purpose of environment variables in a Power Platform solution?",
    options: [
      "To store the GUID primary key of every row",
      "To store configuration values that differ per environment (e.g., a URL or API key) so the same solution works across dev/test/prod without code changes",
      "To define plug-in pipeline stages",
      "To replace security roles"
    ],
    correct: 1,
    explanation: "Environment variables let you store configuration values (such as endpoints, IDs, or secrets via Key Vault references) that can differ between environments. The same solution can carry the variable definition and receive environment-specific values on import — supporting healthy ALM.",
    source: { title: "Environment variables overview", url: "https://learn.microsoft.com/power-apps/maker/data-platform/environmentvariables" }
  },
  {
    id: 14, skill: 2, section: "2B", bullet: "alm-pipelines-buildtools",
    topic: "Pipelines & Build Tools",
    question: "Which tools support automated CI/CD deployment of Power Platform solutions across environments?",
    options: [
      "Power Platform Pipelines and Power Platform Build Tools (Azure DevOps / GitHub)",
      "Power BI Desktop and Excel",
      "The Plug-in Registration Tool only",
      "Azure Key Vault only"
    ],
    correct: 0,
    explanation: "Power Platform Pipelines provide in-product automated deployment between environments, and Power Platform Build Tools enable CI/CD automations in Azure DevOps (and GitHub Actions) to export, import, and manage solutions.",
    source: { title: "Microsoft Power Platform Build Tools for Azure DevOps", url: "https://learn.microsoft.com/power-platform/alm/devops-build-tools" }
  },

  // ============================================================
  // DOMAIN 3: Implement Power Apps improvements (10–15%)
  // ============================================================
  {
    id: 15, skill: 3, section: "3A", bullet: "pa-power-fx",
    topic: "Power Fx",
    question: "What is Power Fx?",
    options: [
      "A C#-based server-side language for plug-ins",
      "The low-code, Excel-like formula language used across Power Platform (e.g., canvas apps)",
      "A REST protocol for Dataverse",
      "A type of Dataverse table"
    ],
    correct: 1,
    explanation: "Power Fx is the low-code, Excel-like formula language used across Power Platform. Developers implement complex formulas and functions (e.g., for filtering, lookups, and logic) in canvas apps and increasingly elsewhere.",
    source: { title: "Power Fx overview", url: "https://learn.microsoft.com/power-platform/power-fx/overview" }
  },
  {
    id: 16, skill: 3, section: "3A", bullet: "pa-component-libraries",
    topic: "Component Libraries",
    question: "How do you make a canvas app component reusable across multiple apps in an environment?",
    options: [
      "Copy-paste the controls into each app manually",
      "Publish it in a component library that apps can reference and update from",
      "Convert it to a Dataverse table",
      "Register it with the Plug-in Registration Tool"
    ],
    correct: 1,
    explanation: "Component libraries are containers of reusable canvas components that can be shared across apps. Apps reference the library and can pick up updates, avoiding copy-paste duplication.",
    source: { title: "Component library (canvas apps)", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/component-library" }
  },
  {
    id: 17, skill: 3, section: "3A", bullet: "pa-flows-from-canvas",
    topic: "Calling Flows from Canvas",
    question: "How can a canvas app run server-side business logic implemented in a Power Automate cloud flow?",
    options: [
      "It cannot call flows",
      "By adding the flow to the app and calling it (e.g., with the Power Automate connector / .Run) from a control's Power Fx",
      "By registering the flow as a plug-in step",
      "By embedding the flow as an HTML web resource"
    ],
    correct: 1,
    explanation: "A canvas app can invoke a Power Automate cloud flow (instant trigger) — adding the flow to the app and calling it from a control's OnSelect with Power Fx — to implement business logic, pass parameters, and receive responses.",
    source: { title: "Use logic flows from canvas apps", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/using-logic-flows" }
  },
  {
    id: 18, skill: 3, section: "3B", bullet: "pa-monitor-debug",
    topic: "Monitor",
    question: "Which tool lets you watch a live stream of events and diagnostics while a canvas or model-driven app runs, to troubleshoot issues?",
    options: ["Monitor", "Plug-in Registration Tool", "Solution checker", "Power Platform CLI only"],
    correct: 0,
    explanation: "Monitor provides a live stream of events as an app runs, helping developers troubleshoot canvas and model-driven app issues (alongside browser-based debugging tools).",
    source: { title: "Monitor overview", url: "https://learn.microsoft.com/power-apps/maker/monitor-overview" }
  },
  {
    id: 19, skill: 3, section: "3B", bullet: "pa-canvas-perf",
    topic: "Delegation",
    question: "A canvas app gallery only shows 500 of thousands of matching rows. What concept explains this and should guide your query design?",
    options: [
      "Delegation — non-delegable operations only process the local record limit (default 500)",
      "Solution layering",
      "Plug-in pipeline stages",
      "Alternate keys"
    ],
    correct: 0,
    explanation: "Delegation pushes query processing to the data source. When a function/operation isn't delegable, Power Apps only retrieves up to the local record limit (default 500). Designing delegable queries is key to canvas app performance over large data.",
    source: { title: "Understand delegation in a canvas app", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/delegation-overview" }
  },
  {
    id: 20, skill: 3, section: "3B", bullet: "pa-canvas-perf",
    topic: "Canvas Performance — Pre-loading",
    question: "Which technique improves canvas app startup/runtime performance?",
    options: [
      "Loading all data only when each screen is opened, repeatedly",
      "Pre-loading or caching data (e.g., into collections) and using delegable queries to reduce round-trips",
      "Disabling delegation entirely",
      "Adding more non-delegable filters"
    ],
    correct: 1,
    explanation: "Optimizing canvas performance includes pre-loading/caching data (e.g., into collections), minimizing calls, and using delegable queries so processing happens at the data source rather than pulling everything to the client.",
    source: { title: "Understand delegation in a canvas app", url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/delegation-overview" }
  },
  {
    id: 21, skill: 3, section: "3B", bullet: "pa-model-driven-perf",
    topic: "Model-driven Performance",
    question: "Which choice helps optimize model-driven app performance?",
    options: [
      "Adding many unfiltered subgrids and columns to every form and view",
      "Simplifying forms (fewer controls/tabs, load-on-demand) and keeping views focused with appropriate columns and filters",
      "Disabling all security roles",
      "Storing data in canvas collections only"
    ],
    correct: 1,
    explanation: "Model-driven performance is improved by streamlining forms (fewer heavy controls, tabs that load on demand) and keeping views focused (appropriate columns, filtered queries), reducing the data and rendering work per load.",
    source: { title: "Optimize model-driven app form performance", url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/optimize-form-performance" }
  },

  // ============================================================
  // DOMAIN 4: Extend the user experience (10–15%)
  // ============================================================
  {
    id: 22, skill: 4, section: "4A", bullet: "ux-client-api",
    topic: "Client API Object Model",
    question: "In model-driven app client scripting, which object model do you use to read/write form data and respond to events?",
    options: [
      "The Organization service (IOrganizationService)",
      "The Client API object model (e.g., formContext)",
      "The Plug-in Registration Tool API",
      "Power Fx only"
    ],
    correct: 1,
    explanation: "Client scripting uses the Client API object model (such as formContext / executionContext) to interact with form objects and events — reacting when a form loads, a column changes, or data is saved.",
    source: { title: "Apply business logic using client scripting in model-driven apps", url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/client-scripting" }
  },
  {
    id: 23, skill: 4, section: "4A", bullet: "ux-event-registration",
    topic: "Script Web Resources & Events",
    question: "How do you make JavaScript run on a model-driven form's OnLoad event?",
    options: [
      "Register the script as a plug-in step",
      "Add the JavaScript as a script (JScript) web resource and register the function as an event handler on the form's OnLoad event",
      "Put the JavaScript in an environment variable",
      "Deploy it as an Azure Function"
    ],
    correct: 1,
    explanation: "You attach JavaScript to form events by adding it as a script (JScript) web resource and registering the function as a handler for the event (OnLoad, OnChange, OnSave). Business rules are the no-code alternative for simpler logic.",
    source: { title: "Apply business logic using client scripting in model-driven apps", url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/client-scripting" }
  },
  {
    id: 24, skill: 4, section: "4A", bullet: "ux-client-webapi",
    topic: "Xrm.WebApi from Client Script",
    question: "From client-side JavaScript in a model-driven app, which object do you use to perform Dataverse data operations via the Web API?",
    options: ["Xrm.WebApi", "IOrganizationService", "HttpClient in C#", "Power Fx Patch()"],
    correct: 0,
    explanation: "Model-driven apps provide the Xrm.WebApi object, which exposes methods to create, retrieve, update, and delete Dataverse data through the Web API from client-side JavaScript.",
    source: { title: "Use the Microsoft Dataverse Web API (Xrm.WebApi)", url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/overview" }
  },
  {
    id: 25, skill: 4, section: "4A", bullet: "ux-commands-navigation",
    topic: "Commands & Navigation",
    question: "Which statement about ribbon commands/buttons and navigation in model-driven apps is correct?",
    options: [
      "Commands can only be defined in C# plug-ins",
      "You can configure commands and buttons using Power Fx or JavaScript, and navigate to custom pages using the Client API (Xrm.Navigation)",
      "Navigation to custom pages is not possible",
      "Buttons can't run any logic"
    ],
    correct: 1,
    explanation: "Modern commands and buttons can be configured with Power Fx or JavaScript, and you can navigate to custom pages and dialogs using the Client API (e.g., Xrm.Navigation.navigateTo).",
    source: { title: "Client scripting and the Client API reference", url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/client-scripting" }
  },
  {
    id: 26, skill: 4, section: "4B", bullet: "pcf-lifecycle-manifest",
    topic: "PCF Manifest",
    question: "In a Power Apps component framework (PCF) project, what does the manifest (ControlManifest.Input.xml) define?",
    options: [
      "The plug-in pipeline stage",
      "The component's metadata — properties, data-set/field bindings, and feature usage (e.g., external-service-usage)",
      "The Dataverse security roles",
      "The solution publisher prefix only"
    ],
    correct: 1,
    explanation: "The PCF manifest declares the component's metadata: its properties, whether it binds to a field or a dataset, resources, and feature usage (for example, the external-service-usage node that marks a component premium).",
    source: { title: "Power Apps component framework overview", url: "https://learn.microsoft.com/power-apps/developer/component-framework/overview" }
  },
  {
    id: 27, skill: 4, section: "4B", bullet: "pcf-lifecycle-manifest",
    topic: "PCF Lifecycle",
    question: "Which method in a PCF code component is called by the framework when bound data or context changes and the component should re-render?",
    options: ["init() only, once", "updateView()", "destroy() on every change", "Execute()"],
    correct: 1,
    explanation: "PCF components implement lifecycle methods: init (initialize), updateView (called when data/context changes so the component re-renders), getOutputs (return values to the host), and destroy (cleanup). updateView handles changes after initialization.",
    source: { title: "Power Apps component framework overview", url: "https://learn.microsoft.com/power-apps/developer/component-framework/overview" }
  },
  {
    id: 28, skill: 4, section: "4B", bullet: "pcf-features-deploy",
    topic: "PCF Packaging & Features",
    question: "How is a PCF code component delivered to a Power Apps environment so makers can use it?",
    options: [
      "Email the TypeScript file to makers",
      "Bundle it into a solution package, then import the solution into the environment (Dataverse)",
      "Register it with the Plug-in Registration Tool",
      "Publish it as a Power Automate child flow"
    ],
    correct: 1,
    explanation: "After building the component with the Power Platform CLI, you pack it into a solution (pac solution) and import that solution into the Dataverse environment so the component appears in the maker experience. PCF components can also use Device, Utility, and Web API features.",
    source: { title: "Power Apps component framework — package and deploy", url: "https://learn.microsoft.com/power-platform/alm/component-framework" }
  },

  // ============================================================
  // DOMAIN 5: Extend the platform (30–35%) — largest
  // ============================================================
  {
    id: 29, skill: 5, section: "5A", bullet: "plugin-pipeline-stages",
    topic: "Event Pipeline Stages",
    question: "You want plug-in logic to validate and cancel an invalid operation BEFORE the database transaction and before security checks. Which pipeline stage should you register on?",
    options: ["PreValidation", "PreOperation", "MainOperation", "PostOperation"],
    correct: 0,
    explanation: "PreValidation occurs before the main operation and outside the database transaction (and before security checks) — the right place to validate and cancel an operation cheaply. Cancelling in PreOperation/PostOperation rolls back the transaction with performance impact.",
    source: { title: "Event framework in Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/developer/data-platform/event-framework" }
  },
  {
    id: 30, skill: 5, section: "5A", bullet: "plugin-pipeline-stages",
    topic: "PostOperation & Async",
    question: "Where should you register a plug-in step that must run AFTER the main operation, and which execution mode lets it run outside the transaction via the async service?",
    options: [
      "PreValidation, synchronous",
      "PostOperation, asynchronous",
      "MainOperation, synchronous",
      "PreOperation, asynchronous"
    ],
    correct: 1,
    explanation: "Logic that runs after the main operation registers on PostOperation. Within PostOperation you can register the step in asynchronous execution mode, so it runs after the operation completes via the asynchronous service (outside the transaction).",
    source: { title: "Event framework in Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/developer/data-platform/event-framework" }
  },
  {
    id: 31, skill: 5, section: "5A", bullet: "plugin-context-images",
    topic: "IPlugin & Execution Context",
    question: "A Dataverse plug-in class must implement which interface, and what does the platform pass to it at run time?",
    options: [
      "IOrganizationService; a connection string",
      "IPlugin (with an Execute method); contextual data via IPluginExecutionContext (through the service provider)",
      "IServiceEndpointNotificationService; a webhook URL",
      "IDisposable; a file handle"
    ],
    correct: 1,
    explanation: "Plug-in classes implement IPlugin, which exposes a single Execute method. At run time the platform passes contextual data about the operation; the plug-in obtains IPluginExecutionContext (and services like IOrganizationService) from the service provider.",
    source: { title: "Use plug-ins to extend business processes", url: "https://learn.microsoft.com/power-apps/developer/data-platform/plug-ins" }
  },
  {
    id: 32, skill: 5, section: "5A", bullet: "plugin-context-images",
    topic: "Pre/Post Images",
    question: "On an Update plug-in, the Target only contains the columns that changed. How do you read the value of a column that was NOT changed in this update?",
    options: [
      "Register a Pre Image containing that column and read it from the context's PreEntityImages",
      "It's impossible to read unchanged values",
      "Use a Post Image only, which always has every column",
      "Query the Web API from PreValidation before security checks"
    ],
    correct: 0,
    explanation: "Register a Pre Image (snapshot before the operation) that includes the needed columns, then read it from the context's PreEntityImages. Post Images capture values after the operation. Images let plug-ins access attributes not present in the Target.",
    source: { title: "Event framework — event context", url: "https://learn.microsoft.com/power-apps/developer/data-platform/event-framework" }
  },
  {
    id: 33, skill: 5, section: "5A", bullet: "plugin-orgservice-perf",
    topic: "Synchronous vs Asynchronous",
    question: "Why must synchronous plug-ins execute and complete quickly?",
    options: [
      "Because they run in the browser",
      "Because the data operation waits for the plug-in to finish, directly affecting end-user perceived performance (and there's a hard time limit)",
      "Because they can't access the Organization service",
      "Because they only run overnight"
    ],
    correct: 1,
    explanation: "A synchronous plug-in causes the data operation to wait until the plug-in finishes, so it affects end-user perceived performance and must complete quickly; plug-ins also have a hard time limit. Asynchronous execution is queued and runs after the operation.",
    source: { title: "Use plug-ins to extend business processes", url: "https://learn.microsoft.com/power-apps/developer/data-platform/plug-ins" }
  },
  {
    id: 34, skill: 5, section: "5A", bullet: "plugin-orgservice-perf",
    topic: "Organization Service in Plug-ins",
    question: "Inside a plug-in, how do you perform additional Dataverse data operations (create/retrieve/update)?",
    options: [
      "Use IOrganizationService obtained from the service provider (IOrganizationServiceFactory)",
      "Open a direct SQL connection to the database",
      "Use Xrm.WebApi (the client object)",
      "Use Power Fx Patch()"
    ],
    correct: 0,
    explanation: "Plug-ins use the Organization service (IOrganizationService), obtained via IOrganizationServiceFactory from the service provider, to perform data operations server-side. Xrm.WebApi is a client-side object, not for plug-ins.",
    source: { title: "Use the Dataverse Web API and Organization service", url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/overview" }
  },
  {
    id: 35, skill: 5, section: "5A", bullet: "plugin-custom-api",
    topic: "Custom API & Registration",
    question: "You want to define a reusable, named Dataverse operation (message) that runs your plug-in logic and can be called from Web API or other code. What should you create?",
    options: [
      "A custom API (custom message) with a plug-in that implements its logic",
      "A canvas component",
      "An environment variable",
      "A Power BI dataset"
    ],
    correct: 0,
    explanation: "A custom API defines a custom message (named operation) with parameters; you implement its logic in a plug-in registered on the custom API's MainOperation. It can then be called like any other message via the Web API or Organization service. Plug-in steps are configured with the Plug-in Registration Tool.",
    source: { title: "Create and use custom APIs", url: "https://learn.microsoft.com/power-apps/developer/data-platform/custom-api" }
  },
  {
    id: 36, skill: 5, section: "5B", bullet: "connector-openapi-auth",
    topic: "Custom Connector = REST Wrapper",
    question: "What is a custom connector, fundamentally?",
    options: [
      "A Dataverse plug-in",
      "A wrapper around a REST API (described by an OpenAPI/Swagger definition or Postman collection) that lets Power Apps, Power Automate, and Copilot Studio call it",
      "A type of canvas control",
      "A solution layer"
    ],
    correct: 1,
    explanation: "A custom connector is a wrapper around a REST (or SOAP, for Logic Apps) API. You describe the API with an OpenAPI definition or a Postman collection so Power Apps, Power Automate, Logic Apps, and Copilot Studio can communicate with it.",
    source: { title: "Custom connectors overview", url: "https://learn.microsoft.com/connectors/custom-connectors/" }
  },
  {
    id: 37, skill: 5, section: "5B", bullet: "connector-openapi-auth",
    topic: "Importing Definitions",
    question: "Which is a valid way to define a custom connector?",
    options: [
      "Only by hand-writing C# code",
      "From an OpenAPI definition, a Postman collection, or from scratch in the connector portal",
      "Only from a Dataverse table",
      "Only by exporting a Power BI report"
    ],
    correct: 1,
    explanation: "You can create a custom connector from an OpenAPI (Swagger) definition, from a Postman collection, or from scratch in the connector portal. You can also import definitions from existing APIs, Azure services, and GitHub.",
    source: { title: "Custom connectors overview", url: "https://learn.microsoft.com/connectors/custom-connectors/" }
  },
  {
    id: 38, skill: 5, section: "5B", bullet: "connector-azure-policy",
    topic: "Azure Functions for Connectors",
    question: "Which Azure service is commonly used to build the backend REST API that a custom connector wraps, especially for serverless/event logic?",
    options: ["Azure Functions", "Azure Blob Storage", "Azure Key Vault", "Azure Virtual Network"],
    correct: 0,
    explanation: "For public APIs you create and manage, Microsoft suggests Azure Functions (also Azure Web Apps / API Apps). An Azure Function is a common way to build the REST backend that a custom connector wraps. Policy templates can modify connector behavior at runtime.",
    source: { title: "Custom connectors overview", url: "https://learn.microsoft.com/connectors/custom-connectors/" }
  },
  {
    id: 39, skill: 5, section: "5C", bullet: "webapi-operations",
    topic: "Web API is OData v4",
    question: "Which standard does the Dataverse Web API implement, and which HTTP methods map to create/retrieve/update/delete?",
    options: [
      "SOAP; only POST",
      "OData v4 (RESTful); POST, GET, PATCH, DELETE",
      "GraphQL; QUERY/MUTATE",
      "gRPC; streaming only"
    ],
    correct: 1,
    explanation: "The Dataverse Web API implements OData v4, a RESTful protocol. Create/retrieve/update/delete map to POST, GET, PATCH, and DELETE; named operations are exposed as OData functions and actions.",
    source: { title: "Use the Microsoft Dataverse Web API", url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/overview" }
  },
  {
    id: 40, skill: 5, section: "5C", bullet: "webapi-operations",
    topic: "Web API vs Organization Service",
    question: "Which statement correctly contrasts the Web API and the Organization service?",
    options: [
      "They are completely unrelated and use different data",
      "The Web API is a RESTful experience for any language; the Organization service is the .NET SDK — both ultimately go through the same underlying message pipeline",
      "Only the Web API can write data",
      "The Organization service is deprecated"
    ],
    correct: 1,
    explanation: "The Web API gives a RESTful, language-agnostic experience; the Organization service is the .NET SDK using messages/requests. The Web API exposes most Organization service messages as OData functions/actions, and both invoke the same underlying platform messages.",
    source: { title: "Use the Microsoft Dataverse Web API", url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/overview" }
  },
  {
    id: 41, skill: 5, section: "5C", bullet: "webapi-perf-oauth",
    topic: "Service Protection / Retry",
    question: "Your integration calls the Dataverse Web API at high volume and starts receiving HTTP 429 responses. What should your code do?",
    options: [
      "Ignore the response and keep sending at the same rate",
      "Honor the Retry-After header and implement a retry policy (back off), respecting service protection limits",
      "Switch to SOAP to avoid limits",
      "Disable authentication to speed up calls"
    ],
    correct: 1,
    explanation: "Dataverse enforces service protection API limits and returns HTTP 429 when exceeded. Implement API limit retry policies that honor the Retry-After header and back off; also optimize for concurrency, transactions, and bulk operations. Authenticate with OAuth.",
    source: { title: "Service protection API limits", url: "https://learn.microsoft.com/power-apps/developer/data-platform/api-limits" }
  },
  {
    id: 42, skill: 5, section: "5D", bullet: "azure-functions",
    topic: "Azure Functions & Managed Identity",
    question: "An Azure Function processes a long-running workload for a Power Platform solution and must call Dataverse securely without storing secrets. What should it use to authenticate?",
    options: [
      "A managed identity",
      "A hard-coded username and password",
      "An anonymous connection",
      "A shared API key in the source code"
    ],
    correct: 0,
    explanation: "Use a managed identity to authenticate the Azure Function to Power Platform/Dataverse, avoiding stored secrets. Azure Functions are well suited to long-running operations and scheduled/event-driven triggers for Power Platform solutions.",
    source: { title: "Use managed identities with Dataverse", url: "https://learn.microsoft.com/power-platform/admin/managed-identity-overview" }
  },
  {
    id: 43, skill: 5, section: "5D", bullet: "adv-flows-expressions",
    topic: "Cloud Flow Error Handling",
    question: "Which cloud flow capability lets you run actions only when a previous action fails, so you can handle errors gracefully?",
    options: [
      "Configure run-after settings (e.g., 'has failed'/'is skipped') on an action, or use Scope + run-after for try/catch",
      "Delete the flow when an error occurs",
      "Use a Pre Image",
      "Register a plug-in step"
    ],
    correct: 0,
    explanation: "In cloud flows you implement error handling by configuring an action's 'configure run after' to run on the previous step's failure/timeout/skip, often using Scopes to build try/catch/finally patterns. You can also set trigger conditions and retry policies.",
    source: { title: "Error handling in Power Automate", url: "https://learn.microsoft.com/power-automate/guidance/coding-guidelines/error-handling" }
  },
  {
    id: 44, skill: 5, section: "5D", bullet: "adv-flows-childflows-sp",
    topic: "Child Flows & Secrets",
    question: "Which pair of practices supports reuse and secret management in advanced cloud flows?",
    options: [
      "Copying the same actions into every flow; hard-coding secrets",
      "Using child flows for reusable logic; retrieving secrets from Azure Key Vault (and using Entra ID service principals for auth)",
      "Disabling all connectors; emailing passwords",
      "Storing secrets in flow comments"
    ],
    correct: 1,
    explanation: "Develop reusable logic with child flows (called from a parent), retrieve secrets securely from Azure Key Vault rather than hard-coding them, and authenticate using Microsoft Entra ID service principals where appropriate.",
    source: { title: "Create child flows in Power Automate", url: "https://learn.microsoft.com/power-automate/create-child-flows" }
  },

  // ============================================================
  // DOMAIN 6: Develop integrations (10–15%)
  // ============================================================
  {
    id: 45, skill: 6, section: "6A", bullet: "int-publish-events",
    topic: "Publishing Dataverse Events",
    question: "Which tool do developers use to register plug-ins, webhooks, and Azure integrations so they respond to Dataverse events?",
    options: [
      "The Plug-in Registration Tool",
      "Power BI Desktop",
      "The canvas app studio",
      "Azure Key Vault"
    ],
    correct: 0,
    explanation: "The Plug-in Registration Tool registers plug-ins, Azure Service Bus/Event Hub integrations, virtual table data providers, and webhooks against event framework steps. Code can also publish events via IServiceEndpointNotificationService.",
    source: { title: "Event framework in Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/developer/data-platform/event-framework" }
  },
  {
    id: 46, skill: 6, section: "6A", bullet: "int-publish-events",
    topic: "Remote Execution Context",
    question: "When a Dataverse event is pushed to an Azure Service Bus endpoint or a webhook, what does the receiving endpoint get?",
    options: [
      "Nothing — events can't leave Dataverse",
      "A RemoteExecutionContext containing data about the operation",
      "The full database backup",
      "Only the row's GUID with no other data"
    ],
    correct: 1,
    explanation: "For Azure Service Bus, Azure Event Hubs, or a webhook, the data posted to the registered endpoint comes as a RemoteExecutionContext (which implements IExecutionContext), carrying contextual data about the operation that raised the event.",
    source: { title: "Event framework in Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/developer/data-platform/event-framework" }
  },
  {
    id: 47, skill: 6, section: "6A", bullet: "int-service-endpoints",
    topic: "Service Endpoints",
    question: "Which destinations can Dataverse push events to for asynchronous integration with external systems?",
    options: [
      "Only email",
      "Webhooks, Azure Service Bus, and Azure Event Hubs",
      "Only SharePoint lists",
      "Only Power BI"
    ],
    correct: 1,
    explanation: "Dataverse can publish events to service endpoints — webhooks (synchronous or async HTTP), Azure Service Bus, and Azure Event Hubs — enabling external systems to listen for and react to Dataverse data events.",
    source: { title: "Azure integration with Microsoft Dataverse", url: "https://learn.microsoft.com/power-apps/developer/data-platform/azure-integration" }
  },
  {
    id: 48, skill: 6, section: "6B", bullet: "int-change-tracking",
    topic: "Change Tracking",
    question: "You need to periodically synchronize only the Dataverse rows that changed since your last sync to an external system, efficiently. Which feature should you use?",
    options: [
      "Change tracking",
      "A Pre Image",
      "A solution layer",
      "An environment variable"
    ],
    correct: 0,
    explanation: "Change tracking lets you efficiently synchronize data by retrieving only the records that were created, updated, or deleted since the last synchronization (using a token), instead of re-reading the whole table.",
    source: { title: "Use change tracking to synchronize data with external systems", url: "https://learn.microsoft.com/power-apps/developer/data-platform/use-change-tracking-synchronize-data-external-systems" }
  },
  {
    id: 49, skill: 6, section: "6B", bullet: "int-alternate-keys-upsert",
    topic: "Alternate Keys & Upsert",
    question: "When importing records from an external system that has its own unique IDs (but not Dataverse GUIDs), which combination lets you insert-or-update without first querying for existence?",
    options: [
      "Define an alternate key on the external ID and use the UpsertRequest message",
      "Always use the GUID primary key and a Retrieve before each write",
      "Use a Pre Image",
      "Use a canvas component"
    ],
    correct: 0,
    explanation: "Define an alternate key based on the external system's unique value so you can reference rows by that business key, then use UpsertRequest, which creates the row if it doesn't exist or updates it if it does — ideal for data synchronization.",
    source: { title: "Use an alternate key to reference a record", url: "https://learn.microsoft.com/power-apps/developer/data-platform/use-alternate-key-reference-record" }
  },
  {
    id: 50, skill: 6, section: "6B", bullet: "int-alternate-keys-upsert",
    topic: "Why Upsert",
    question: "What is the main benefit of using UpsertRequest during data integration?",
    options: [
      "It deletes all existing rows first",
      "It avoids a separate existence check and race conditions by creating or updating in a single operation keyed on an alternate (or primary) key",
      "It only works with the Web API and never the SDK",
      "It bypasses security roles"
    ],
    correct: 1,
    explanation: "UpsertRequest performs a create-or-update in one operation based on a key (often an alternate key), removing the need for a separate retrieve-then-decide step and reducing round-trips and race conditions when syncing external data.",
    source: { title: "Use an alternate key to reference a record", url: "https://learn.microsoft.com/power-apps/developer/data-platform/use-alternate-key-reference-record" }
  }
];
