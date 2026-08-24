/*
 * AI-103 COMBINED bank — original generated questions grounded in the verified COURSE-MAP.
 */
const COMBINED_QUESTIONS = [
 {
  "id": "gen-1",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is building a customer-support chat app on Microsoft Foundry and wants to browse thousands of available models, comparing large language models, small language models, reasoning models, and multimodal models before deploying one. Where should they start?",
  "options": [
   "The Azure Cost Management blade, which lists models by price",
   "The Microsoft Foundry model catalog, which surfaces the full set of models with filters for capability and provider",
   "The Azure Monitor metrics explorer",
   "The Azure Resource Graph query editor"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Microsoft Foundry Models provides a unified catalog of thousands of models (LLM, SLM, reasoning, multimodal) that you can filter and compare before choosing and deploying one.",
  "source": {
   "title": "Microsoft Foundry Models overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview"
  }
 },
 {
  "id": "gen-2",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team must summarize very long legal documents and needs a model that natively accepts both scanned page images and their extracted text in a single prompt. Which model category in the Foundry catalog fits this requirement?",
  "options": [
   "A multimodal model that can process text and images together",
   "A text-only small language model (SLM)",
   "A text embedding model",
   "A speech-to-text model"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Multimodal models in the Foundry catalog accept more than one input type—such as text and images together—making them appropriate when a single prompt combines page images and text.",
  "source": {
   "title": "Microsoft Foundry Models overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview"
  }
 },
 {
  "id": "gen-3",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to run a compact model at low latency and cost on edge-like workloads with modest reasoning needs, rather than a large frontier model. Which model type in the Foundry catalog is designed for this trade-off?",
  "options": [
   "A frontier-scale reasoning model",
   "A high-resolution image generation model",
   "A small language model (SLM)",
   "A multimodal video model"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Small language models (SLMs) are offered in the catalog for scenarios prioritizing lower latency and cost with a smaller footprint, versus large language models for the most demanding tasks.",
  "source": {
   "title": "Microsoft Foundry Models overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview"
  }
 },
 {
  "id": "gen-4",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In the Microsoft Foundry catalog, models differ by who sells and supports them. Which statement correctly reflects how models are offered?",
  "options": [
   "Every model in the catalog is developed and hosted exclusively by Microsoft",
   "Only open-source community models are available; no partner models are listed",
   "Some models are sold directly by Azure while others come from partners and the community",
   "Models can only be consumed after being retrained by the customer"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Foundry catalog includes models sold directly by Azure as well as models from partners and the community, which affects support, billing, and deployment options.",
  "source": {
   "title": "Microsoft Foundry Models overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview"
  }
 },
 {
  "id": "gen-5",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A workflow needs a model that produces step-by-step chains of thought to solve complex, multi-step math and planning problems more reliably than a standard chat model. Which category should the developer select in the Foundry catalog?",
  "options": [
   "A reasoning model",
   "A text embedding model",
   "An image captioning model",
   "A translation-only model"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Reasoning models are a distinct category in the Foundry catalog optimized for complex, multi-step problem solving, distinct from general chat LLMs and SLMs.",
  "source": {
   "title": "Microsoft Foundry Models overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview"
  }
 },
 {
  "id": "gen-6",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants a single runtime that hosts models, tools, and agent frameworks together so an agent can call tools and manage conversations without stitching services manually. Which Foundry capability provides this?",
  "options": [
   "Azure Resource Manager templates",
   "Foundry Agent Service",
   "Azure Key Vault",
   "The Azure CLI storage extension"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry Agent Service is the single runtime that brings models, tools, and frameworks together to build and run agents.",
  "source": {
   "title": "What is Foundry Agent Service? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/overview"
  }
 },
 {
  "id": "gen-7",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team is deciding between a prompt agent and a hosted agent in Foundry Agent Service. Which characteristic best distinguishes a hosted agent?",
  "options": [
   "A hosted agent can only answer with static, pre-written responses",
   "A hosted agent cannot use any tools",
   "A hosted agent is limited to a single message and cannot track a conversation",
   "A hosted agent runs as a managed, deployed service that can execute tools within the Foundry runtime"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry Agent Service distinguishes prompt agents from hosted agents; hosted agents run as a managed deployed service in the Foundry runtime and can execute tools.",
  "source": {
   "title": "What is Foundry Agent Service? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/overview"
  }
 },
 {
  "id": "gen-8",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An agent needs to call external APIs, search a knowledge index, and run custom functions. In Foundry Agent Service, how are these capabilities made available to the agent?",
  "options": [
   "By embedding all logic directly in the system prompt only",
   "By manually copying data into the model weights",
   "Through toolboxes/tools that the agent can be configured to use",
   "By disabling the runtime and calling models directly"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry Agent Service exposes capabilities through tools (toolboxes) that an agent can invoke, such as APIs, knowledge/search, and custom functions.",
  "source": {
   "title": "What is Foundry Agent Service? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/overview"
  }
 },
 {
  "id": "gen-9",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants agents built on different frameworks and models to run under one consistent Foundry runtime rather than maintaining separate hosting for each. Which statement about Foundry Agent Service is accurate?",
  "options": [
   "It provides a single runtime that supports multiple models, tools, and frameworks",
   "It requires a separate runtime instance per model provider",
   "It only supports a single fixed model with no tools",
   "It is exclusively for training new base models"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry Agent Service is designed as a single runtime that unifies models, tools, and frameworks for building agents.",
  "source": {
   "title": "What is Foundry Agent Service? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/overview"
  }
 },
 {
  "id": "gen-10",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A company needs its chatbot to answer questions using its own private, frequently updated product documentation without retraining the model. Which Foundry approach is most appropriate?",
  "options": [
   "Fine-tune the base model on the documentation each time it changes",
   "Use retrieval-augmented generation (RAG) to ground responses in an index of the documentation",
   "Increase the model temperature to improve accuracy",
   "Switch to a smaller model to reduce cost"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "RAG grounds model responses in your own indexed content and is well suited to private, frequently changing knowledge without retraining the model.",
  "source": {
   "title": "RAG and indexes in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  }
 },
 {
  "id": "gen-11",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer's retrieval must match documents by semantic meaning even when the user's words don't exactly match the source text. Which retrieval method should they choose?",
  "options": [
   "Exact keyword-only matching",
   "Alphabetical sorting of documents",
   "Random sampling of the index",
   "Vector (embedding-based) search"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Vector search uses embeddings to match on semantic similarity, retrieving relevant content even when exact keywords differ.",
  "source": {
   "title": "RAG and indexes in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  }
 },
 {
  "id": "gen-12",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants the best of both exact term matching and semantic similarity in a single query against their Foundry index. Which retrieval strategy combines these?",
  "options": [
   "Hybrid retrieval that combines keyword and vector search",
   "Keyword-only retrieval",
   "Vector-only retrieval with keywords disabled",
   "A model fine-tuning pass instead of retrieval"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Hybrid retrieval combines keyword and vector search so queries benefit from both exact term matching and semantic similarity.",
  "source": {
   "title": "RAG and indexes in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  }
 },
 {
  "id": "gen-13",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer must decide between RAG, fine-tuning, and giving an agent tools. Which scenario most clearly calls for fine-tuning rather than RAG?",
  "options": [
   "The app must always reflect documents that change every hour",
   "The app must adopt a specific consistent style or format the base model doesn't produce well, using stable training examples",
   "The app must cite the exact source passage for every answer",
   "The app must let an agent call a live weather API at request time"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Fine-tuning is appropriate for teaching a stable behavior, style, or format from training examples, whereas RAG suits frequently changing grounded knowledge and agent tools suit live actions.",
  "source": {
   "title": "RAG and indexes in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  }
 },
 {
  "id": "gen-14",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "During indexing for RAG, why is a document typically split into smaller chunks before embedding?",
  "options": [
   "To permanently delete the original document",
   "To improve retrieval relevance and keep passages within model context limits",
   "To convert the text into audio",
   "To disable semantic ranking"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Chunking content into smaller passages improves retrieval precision and keeps retrieved context within the model's token limits, a core part of preparing a RAG index.",
  "source": {
   "title": "RAG and indexes in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  }
 },
 {
  "id": "gen-15",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A support agent should remember a returning user's stated preferences (like preferred language and account tier) across separate conversations. Which Foundry agent capability enables this?",
  "options": [
   "A larger temperature setting",
   "Long-term agent memory",
   "A one-time system prompt with no persistence",
   "A content filter policy"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry agent memory provides long-term memory stores that let an agent retain and reuse information such as user preferences across conversations.",
  "source": {
   "title": "What is Memory? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory"
  }
 },
 {
  "id": "gen-16",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants an agent to carry relevant context forward within and across sessions instead of re-asking the user every time. What is the primary purpose of memory in Foundry Agent Service?",
  "options": [
   "To increase the number of GPUs allocated to the model",
   "To replace the need for any tools",
   "To encrypt the network traffic between services",
   "To store and recall information so the agent maintains context over time"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Memory in Foundry Agent Service exists to store and recall information so an agent can maintain relevant context over time rather than starting from scratch each turn.",
  "source": {
   "title": "What is Memory? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory"
  }
 },
 {
  "id": "gen-17",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When integrating knowledge and tools for a Foundry agent, which pairing of need to capability is correct?",
  "options": [
   "Recalling prior user context over time — use a content filter",
   "Grounding answers in a document corpus — use agent memory only",
   "Retaining durable user context across sessions — use long-term memory; retrieving from a corpus — use a knowledge/search tool",
   "Calling a live external API — use embeddings storage"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Long-term memory is for retaining durable context across sessions, while grounding in a corpus is handled by knowledge/search tools; matching each need to the right capability is a key design choice.",
  "source": {
   "title": "What is Memory? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory"
  }
 },
 {
  "id": "gen-18",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer notes that an agent's short-term conversation history is lost once a session ends, but the app needs the agent to recall key facts weeks later. Which distinction should guide the design?",
  "options": [
   "Short-term conversation state is transient, so use long-term memory to persist information beyond a single session",
   "Long-term memory and conversation history are identical and interchangeable",
   "Long-term memory only stores model weights",
   "Conversation history automatically persists forever without any memory feature"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Conversation history is transient session state, so persisting facts for later recall requires long-term agent memory, which is designed to retain information beyond a single session.",
  "source": {
   "title": "What is Memory? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory"
  }
 },
 {
  "id": "gen-19",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is deploying a large partner model in Microsoft Foundry and wants pay-as-you-go, per-token billing with no dedicated GPU infrastructure to manage. The model must be reachable through a hosted API endpoint immediately after deployment. Which deployment option best fits these requirements?",
  "options": [
   "Managed compute deployment on a dedicated GPU virtual machine",
   "A local containerized deployment on the developer workstation",
   "An Azure Kubernetes Service self-hosted cluster",
   "Serverless API deployment"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Serverless API deployments expose a model through a hosted, pay-as-you-go endpoint billed per token, with no underlying compute for the customer to provision or manage.",
  "source": {
   "title": "Deployment overview for Foundry Models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview"
  }
 },
 {
  "id": "gen-20",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team needs to deploy an open-source model from the Foundry catalog that is NOT available as a serverless API, and they require full control over the compute SKU and instance count that hosts it. Which deployment type should they choose?",
  "options": [
   "Managed compute deployment",
   "Serverless API deployment",
   "Standard global deployment with shared quota",
   "Instant-access deployment"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Managed compute deployments host a model on dedicated virtual machines the customer selects and scales, which is required for catalog models not offered as serverless APIs.",
  "source": {
   "title": "Deployment overview for Foundry Models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview"
  }
 },
 {
  "id": "gen-21",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When comparing deployment options in Foundry, which statement most accurately distinguishes a serverless API deployment from a managed compute deployment?",
  "options": [
   "Serverless API deployments require you to choose and pay for a dedicated VM SKU, while managed compute is billed per token.",
   "Both options require you to provision and patch the underlying GPU infrastructure yourself.",
   "Serverless API deployments abstract away the infrastructure and bill per token, while managed compute uses dedicated infrastructure you size and scale.",
   "Managed compute is only available for Azure OpenAI models, while serverless API supports only partner models."
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Serverless API hides the hosting infrastructure and bills per token, whereas managed compute runs on dedicated virtual machines the customer sizes, scales, and pays for by the hour.",
  "source": {
   "title": "Deployment overview for Foundry Models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview"
  }
 },
 {
  "id": "gen-22",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer selects a flagship model in the Foundry model catalog that is sold directly by Azure and can be consumed through a hosted endpoint without provisioning any compute first. This capability, where a model is ready to call right after deployment, is referred to as:",
  "options": [
   "Cold-start provisioning",
   "Reserved capacity provisioning",
   "Bring-your-own-compute hosting",
   "Instant access to models"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Models sold directly by Azure offer instant access, meaning they can be deployed and called through a hosted endpoint without the customer standing up compute first.",
  "source": {
   "title": "Deployment overview for Foundry Models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview"
  }
 },
 {
  "id": "gen-23",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An organization wants to keep per-token operational costs predictable and avoid managing scaling infrastructure for a widely used flagship chat model. Which factor most strongly favors a serverless API deployment over managed compute?",
  "options": [
   "The team needs to run a fine-tuned model binary that Azure does not host",
   "The team wants pay-per-token consumption without owning dedicated compute",
   "The team requires GPU-level isolation for a custom inference container",
   "The team must guarantee a fixed number of dedicated VM instances at all times"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Serverless API deployments are the right choice when a team wants consumption-based, per-token billing and does not want to own or scale dedicated compute.",
  "source": {
   "title": "Deployment overview for Foundry Models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview"
  }
 },
 {
  "id": "gen-24",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is starting a brand-new Foundry solution and follows the quickstart. Which sequence correctly reflects the initial setup steps to get a working environment?",
  "options": [
   "Create a Foundry resource and project, deploy a model, then grant team members access",
   "Deploy a model, then create a resource, then create a project",
   "Grant team access first, then deploy a model, then create the project",
   "Create a project, deploy a model, and skip creating any Foundry resource"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The quickstart flow is to create the Foundry resource and project, deploy a model into it, and then grant team members access to collaborate.",
  "source": {
   "title": "Quickstart: set up Foundry resources — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/tutorials/quickstart-create-foundry-resources"
  }
 },
 {
  "id": "gen-25",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In the Foundry quickstart, a developer creates a container that organizes deployments, connections, and files for a single application, and to which teammates are granted access. What is this container called?",
  "options": [
   "A subscription",
   "A resource group",
   "A project",
   "A model deployment"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "A Foundry project is the work container that holds model deployments, connections, and files, and is the scope at which team members are granted access.",
  "source": {
   "title": "Quickstart: set up Foundry resources — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/tutorials/quickstart-create-foundry-resources"
  }
 },
 {
  "id": "gen-26",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After creating a Foundry resource and project, a lead developer needs two colleagues to be able to build and test against the deployed model. According to the quickstart, what is the recommended way to enable this collaboration?",
  "options": [
   "Share the resource's admin API key with each colleague over email",
   "Ask each colleague to create their own separate Foundry resource",
   "Grant the colleagues access to the project so they can collaborate",
   "Export the model weights and distribute them to each colleague"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The quickstart's final setup step is to grant team members access to the project, which is the supported, secure way to let colleagues collaborate on the deployed model.",
  "source": {
   "title": "Quickstart: set up Foundry resources — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/tutorials/quickstart-create-foundry-resources"
  }
 },
 {
  "id": "gen-27",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer completing the Foundry quickstart wants to confirm that a newly deployed model responds correctly before wiring it into application code. What is the fastest way to do this within the Foundry experience?",
  "options": [
   "Write and run a full CI/CD pipeline first",
   "Test the deployed model in the playground",
   "Wait for a nightly monitoring report to confirm availability",
   "Redeploy the model three times to warm the cache"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "After deploying a model you can immediately test it in the playground to verify it responds as expected before integrating it into an application.",
  "source": {
   "title": "Quickstart: set up Foundry resources — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/tutorials/quickstart-create-foundry-resources"
  }
 },
 {
  "id": "gen-28",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "While configuring a model deployment in the Foundry portal, a developer must set a value that governs how many tokens per minute the deployment can process, which directly affects throughput and rate limiting. Which setting is this?",
  "options": [
   "The TPM (tokens-per-minute) quota allocation",
   "The embedding vector dimension",
   "The system message length",
   "The number of playground tabs"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "When deploying a model in the portal you configure the TPM (tokens-per-minute) quota, which determines the deployment's throughput capacity and rate limits.",
  "source": {
   "title": "Deploy Foundry Models in the portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/deploy-foundry-models"
  }
 },
 {
  "id": "gen-29",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer deploys a model in the Foundry portal and immediately wants to verify prompt behavior interactively without writing any client code. Which portal feature supports this?",
  "options": [
   "The Azure Resource Manager template editor",
   "The billing and cost analysis blade",
   "The network security group rules editor",
   "The playground"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "After deploying a model in the portal, the playground lets you test the deployment interactively before writing application code.",
  "source": {
   "title": "Deploy Foundry Models in the portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/deploy-foundry-models"
  }
 },
 {
  "id": "gen-30",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team notices their portal-deployed model is returning HTTP 429 responses under heavy load. Which deployment configuration value are they most likely constrained by, and should consider increasing?",
  "options": [
   "The deployment's TPM quota",
   "The model's context window size",
   "The project's display name length",
   "The number of connected data sources"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The TPM quota set on a deployment caps its throughput; exceeding it triggers rate limiting (429s), so raising the TPM allocation is the appropriate response.",
  "source": {
   "title": "Deploy Foundry Models in the portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/deploy-foundry-models"
  }
 },
 {
  "id": "gen-31",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to deploy a Foundry model through the portal experience rather than via CLI or SDK. According to the how-to guidance, which of the following is a step performed during portal-based deployment?",
  "options": [
   "Manually compiling the model weights into a container image",
   "Editing raw Kubernetes YAML for the inference pods",
   "Selecting the model and configuring the deployment, including its quota",
   "Writing a Bicep template to define the GPU node pool"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Portal-based deployment involves selecting the model and configuring the deployment settings such as the TPM quota, then testing it in the playground.",
  "source": {
   "title": "Deploy Foundry Models in the portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/deploy-foundry-models"
  }
 },
 {
  "id": "gen-32",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A platform team wants to automate provisioning and deployment of a hosted Foundry agent so that pushes to a GitHub repository trigger environment setup and deployment. Which tool does the Foundry CI/CD guidance use to bootstrap this pipeline?",
  "options": [
   "Terraform Cloud run tasks",
   "The Azure Developer CLI (azd)",
   "Jenkins declarative pipelines",
   "The az storage CLI"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Foundry CI/CD how-to uses the Azure Developer CLI (azd), whose pipeline configuration wires up provisioning and deployment of hosted agents.",
  "source": {
   "title": "Set up CI/CD for hosted agents with azd — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/set-up-ci-cd-cli"
  }
 },
 {
  "id": "gen-33",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Following the Foundry CI/CD setup, which azd command configures the continuous integration and deployment pipeline, connecting the project to a provider such as GitHub Actions or Azure DevOps?",
  "options": [
   "azd pipeline config",
   "azd env refresh",
   "azd monitor start",
   "azd template init"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "`azd pipeline config` sets up the CI/CD pipeline, wiring the project to GitHub Actions or Azure DevOps so it can provision and deploy the hosted agent automatically.",
  "source": {
   "title": "Set up CI/CD for hosted agents with azd — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/set-up-ci-cd-cli"
  }
 },
 {
  "id": "gen-34",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An organization standardizes its deployment automation on Azure DevOps rather than GitHub. When setting up CI/CD for hosted Foundry agents with azd, how is this preference accommodated?",
  "options": [
   "azd only supports GitHub Actions, so the team must migrate to GitHub",
   "Azure DevOps is unsupported and requires a hand-written REST integration",
   "The team must run the pipeline locally because no provider integration exists",
   "azd pipeline config supports selecting a provider such as GitHub Actions or Azure DevOps"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The azd pipeline configuration supports multiple providers, letting a team target either GitHub Actions or Azure DevOps for their hosted-agent CI/CD.",
  "source": {
   "title": "Set up CI/CD for hosted agents with azd — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/set-up-ci-cd-cli"
  }
 },
 {
  "id": "gen-35",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In a CI/CD workflow for a hosted Foundry agent set up with azd, which two high-level phases does the pipeline perform each time it runs against the target Azure environment?",
  "options": [
   "Lint the model weights and publish a NuGet package",
   "Provision the required Azure resources and deploy the agent",
   "Encrypt the source repository and archive it to blob storage",
   "Generate documentation and email it to stakeholders"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The azd-based pipeline provisions the necessary Azure infrastructure and then deploys the hosted agent, automating both steps on each run.",
  "source": {
   "title": "Set up CI/CD for hosted agents with azd — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/set-up-ci-cd-cli"
  }
 },
 {
  "id": "gen-36",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A solution architect is designing Azure infrastructure for a generative AI workload and must decide between serverless API and managed compute for several models. Which principle correctly guides the choice for a model that is offered directly by Azure and needs the least operational overhead?",
  "options": [
   "Always pick managed compute to minimize per-token cost",
   "Prefer a serverless API deployment for its per-token billing and no infrastructure to manage",
   "Deploy every model to a dedicated Kubernetes cluster for consistency",
   "Avoid hosted endpoints and run all inference on-premises"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "For an Azure-sold model that needs minimal operational overhead, a serverless API deployment is preferred because it bills per token and requires no customer-managed infrastructure.",
  "source": {
   "title": "Deployment overview for Foundry Models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview"
  }
 },
 {
  "id": "gen-37",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer deploys a GPT-4o model in Microsoft Foundry and immediately hits 429 (rate limit) errors during load testing, even though the deployment is barely used elsewhere. Which allocation is the primary constraint that determines how many tokens per minute the deployment can process before throttling?",
  "options": [
   "The number of role assignments granted on the Foundry project",
   "The size of the Azure AI Search index connected to the project",
   "The tokens-per-minute (TPM) quota assigned to the model deployment for that subscription and region",
   "The number of concurrent Entra ID tokens issued to the client"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "In Foundry, quota is allocated as tokens-per-minute (TPM) per subscription, region, and model; a deployment throttles with 429 responses once requests exceed its assigned TPM. Increasing the deployment's TPM (or requesting a quota increase) resolves the throttling.",
  "source": {
   "title": "Manage and increase quotas for Foundry Models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/quota"
  }
 },
 {
  "id": "gen-38",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your team runs several small pilot deployments in one region and wants a fast way to try models without waiting for a formal quota-increase approval. Which Foundry quota feature is designed to let you deploy models against a temporary, region-wide pool of capacity?",
  "options": [
   "Provisioned throughput units (PTU) reservations",
   "Shared (default) quota available across the region",
   "Per-agent RBAC scopes",
   "Private endpoint capacity reservations"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry provides shared/default quota per region that lets you deploy and experiment without an explicit increase request; for sustained higher throughput you request a quota increase or move to provisioned throughput.",
  "source": {
   "title": "Manage and increase quotas for Foundry Models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/quota"
  }
 },
 {
  "id": "gen-39",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A production workload needs a higher tokens-per-minute limit than the default quota allows for a specific model in West Europe. What is the correct action to increase the available capacity?",
  "options": [
   "Submit a quota increase request for that model, region, and subscription",
   "Delete and recreate the Foundry project in a different resource group",
   "Assign the Owner role to the application's managed identity",
   "Disable content filtering to free up token capacity"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Quota is scoped per subscription/region/model; when default limits are insufficient, you submit a quota increase request for that combination. RBAC roles and content filters do not change TPM/PTU allocations.",
  "source": {
   "title": "Manage and increase quotas for Foundry Models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/quota"
  }
 },
 {
  "id": "gen-40",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team commits to a provisioned throughput (PTU) deployment for a latency-sensitive chat application and wants to reduce the hourly cost of the reserved capacity. Which purchasing option lowers the effective cost of PTUs compared to paying the standard hourly rate?",
  "options": [
   "Switching the deployment to pay-as-you-go token billing",
   "Enabling dynamic quota on the standard deployment",
   "Adding a second region to the deployment",
   "Purchasing an Azure Reservation for the provisioned throughput"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Provisioned throughput is billed hourly by default, but purchasing an Azure Reservation (monthly or yearly term) for the PTUs reduces the effective hourly cost of the committed capacity.",
  "source": {
   "title": "Provisioned throughput billing and cost management — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/provisioned-throughput-billing"
  }
 },
 {
  "id": "gen-41",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A finance stakeholder asks how a provisioned throughput deployment is charged when the application sends very few requests during off-hours. How does provisioned throughput (PTU) billing behave in this scenario?",
  "options": [
   "You are billed per token consumed, so low traffic costs almost nothing",
   "You are billed a fixed hourly amount for the provisioned capacity regardless of how many tokens are processed",
   "Billing pauses automatically whenever utilization drops below 50%",
   "You are billed only for the peak minute of usage each hour"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Provisioned throughput reserves dedicated capacity and is billed at a fixed hourly rate for that capacity, independent of actual token consumption—unlike standard pay-as-you-go, which bills per token.",
  "source": {
   "title": "Provisioned throughput billing and cost management — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/provisioned-throughput-billing"
  }
 },
 {
  "id": "gen-42",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An architect is deciding between standard (pay-as-you-go) and provisioned throughput for a new workload with predictable, sustained high volume and strict latency requirements. Which statement best supports choosing provisioned throughput?",
  "options": [
   "It eliminates the need for any quota management or capacity planning",
   "It is always cheaper than pay-as-you-go for every workload size",
   "It provides reserved, predictable capacity and consistent latency for sustained high-volume traffic",
   "It removes the need to configure authentication for the deployment"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Provisioned throughput suits predictable, high-volume workloads because it reserves dedicated capacity that delivers consistent throughput and latency; pay-as-you-go is better for spiky or low/variable traffic.",
  "source": {
   "title": "Provisioned throughput billing and cost management — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/provisioned-throughput-billing"
  }
 },
 {
  "id": "gen-43",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You need to detect when a deployed generative model begins producing answers that are not supported by the retrieved source documents in a RAG application. Which observability capability in Foundry is designed to surface this groundedness signal?",
  "options": [
   "TPM quota alerts on the deployment",
   "Azure Reservations utilization reports",
   "Private endpoint connection logs",
   "Evaluators that measure groundedness and flag ungrounded or fabricated responses"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry observability uses evaluators (including groundedness) together with monitoring and tracing to detect when model outputs are not grounded in the provided context, surfacing quality and safety signals over time.",
  "source": {
   "title": "Observability in generative AI — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/observability"
  }
 },
 {
  "id": "gen-44",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants end-to-end visibility into each agent run—individual tool calls, latency, and token consumption—correlated in a single telemetry backend for troubleshooting. Which integration underpins Foundry observability for collecting this operational telemetry?",
  "options": [
   "Azure Application Insights, which stores traces and monitoring signals for analysis",
   "Azure Key Vault, which stores the request/response payloads",
   "Azure AI Search semantic ranker logs",
   "The model deployment's TPM quota dashboard"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry observability emits tracing and monitoring telemetry to Azure Application Insights, where drift, safety, grounding, latency, and token signals can be analyzed and alerted on.",
  "source": {
   "title": "Observability in generative AI — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/observability"
  }
 },
 {
  "id": "gen-45",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Over several weeks, a production model's response quality slowly degrades as real-world input patterns shift away from what it was evaluated on. Which observability practice helps a team continuously catch this kind of drift and safety regression before users are heavily affected?",
  "options": [
   "Increasing the deployment's TPM quota each week",
   "Rotating the API keys on a fixed cadence",
   "Running evaluators continuously/on a schedule and monitoring the resulting quality and safety signals",
   "Reserving additional PTUs to absorb the drift"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Continuous or scheduled evaluation with observability lets teams track quality, drift, safety, and grounding signals over time and alert when metrics degrade, rather than discovering regressions only from user complaints.",
  "source": {
   "title": "Observability in generative AI — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/observability"
  }
 },
 {
  "id": "gen-46",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A security team mandates that no static API keys be embedded in application configuration for calls to Foundry models. Which authentication approach should the developer use for the app's data-plane calls instead?",
  "options": [
   "Store the API key in an environment variable and rotate it monthly",
   "Share a single subscription-level key across all environments",
   "Embed the key in the client-side code but obfuscate it",
   "Use Microsoft Entra ID (keyless) authentication with a managed identity"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry supports Microsoft Entra ID (keyless) authentication; using a managed identity with RBAC removes the need to store or rotate static API keys and is the recommended secure pattern.",
  "source": {
   "title": "Authentication and authorization for Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/authentication-authorization-foundry"
  }
 },
 {
  "id": "gen-47",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In Foundry, an operation such as creating or deleting a model deployment is governed differently from an operation such as sending a chat completion request. Which pair correctly describes these two categories?",
  "options": [
   "Both are control-plane operations handled by the Azure Resource Manager",
   "Deploying/deleting a resource is a control-plane operation; sending inference requests is a data-plane operation",
   "Both are data-plane operations authenticated only by API keys",
   "Sending inference requests is control-plane; deploying a resource is data-plane"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry distinguishes control-plane operations (managing resources/deployments via Azure Resource Manager) from data-plane operations (runtime inference calls to the model), and each can be authorized independently.",
  "source": {
   "title": "Authentication and authorization for Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/authentication-authorization-foundry"
  }
 },
 {
  "id": "gen-48",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants a background service running on an Azure VM to authenticate to a Foundry resource without any secrets stored on the VM. Which identity mechanism best satisfies this requirement?",
  "options": [
   "A shared API key baked into the VM image",
   "The developer's personal Entra ID account credentials",
   "A managed identity assigned to the VM, granted an appropriate Foundry RBAC role",
   "A self-signed certificate stored in the app folder"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "A managed identity lets the compute resource obtain Entra ID tokens with no stored secrets; granting it the appropriate Foundry role authorizes the service's data-plane calls securely.",
  "source": {
   "title": "Authentication and authorization for Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/authentication-authorization-foundry"
  }
 },
 {
  "id": "gen-49",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You must give a data scientist permission to work within a single Foundry project without granting access to other projects in the same resource. Following least-privilege, how should you assign access?",
  "options": [
   "Assign the Owner role at the subscription scope",
   "Assign an appropriate built-in Foundry role scoped to that specific project",
   "Share the resource's API key only with that data scientist",
   "Assign the Contributor role at the resource group scope"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry RBAC roles can be scoped at the resource, project, or agent level; assigning a suitable built-in role at the project scope grants only the access needed and follows least-privilege.",
  "source": {
   "title": "Role-based access control for Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/rbac-foundry"
  }
 },
 {
  "id": "gen-50",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An administrator needs a role that allows a user to use and manage resources within a Foundry project but does not want to grant full subscription ownership. Which principle should guide the role selection?",
  "options": [
   "Always grant Owner so the user never hits a permission error",
   "Grant access only through shared API keys to avoid RBAC entirely",
   "Assign every user the same Contributor role at tenant scope for consistency",
   "Choose the built-in role with the minimum permissions required for the task, scoped as narrowly as possible"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry RBAC guidance is to apply least-privilege: select the built-in role that grants only the permissions the task needs and scope it to the resource, project, or agent level rather than over-provisioning.",
  "source": {
   "title": "Role-based access control for Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/rbac-foundry"
  }
 },
 {
  "id": "gen-51",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants to restrict access at the level of an individual agent so that only certain principals can invoke or manage it, separate from broader project access. What does Foundry RBAC provide to support this?",
  "options": [
   "Only a single resource-wide scope with no finer granularity",
   "Access control based solely on network IP allowlists",
   "Scopes at the resource, project, and agent levels so access can be granted at the agent granularity",
   "Per-token quotas that double as access controls"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry RBAC supports multiple scopes—resource, project, and agent—so administrators can assign roles at the agent level for fine-grained, least-privilege control.",
  "source": {
   "title": "Role-based access control for Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/rbac-foundry"
  }
 },
 {
  "id": "gen-52",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "During a keyless-authentication rollout, you configure a managed identity to call a Foundry Models deployment. What must you do so that the managed identity is actually authorized to perform inference calls?",
  "options": [
   "Assign the managed identity an appropriate Foundry RBAC role on the resource or project",
   "Add the managed identity's object ID to the deployment's content filter",
   "Copy the resource's primary API key into the managed identity's metadata",
   "Enable public network access on the Foundry resource"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Keyless authentication relies on Entra ID plus RBAC: after enabling Entra ID auth you must assign the managed identity a role that grants the required data-plane permissions before it can call the model.",
  "source": {
   "title": "Configure keyless authentication with Microsoft Entra ID — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/configure-entra-id"
  }
 },
 {
  "id": "gen-53",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After migrating an application to Microsoft Entra ID (keyless) authentication and verifying it works, what is the recommended hardening step to reduce the credential attack surface on the Foundry resource?",
  "options": [
   "Regenerate the API keys every hour with an automation runbook",
   "Disable or remove the resource's API keys so only Entra ID authentication is accepted",
   "Store the API keys in the app's source-control repository as a backup",
   "Grant all users the Owner role so keys are no longer needed"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The keyless guidance is to move to Entra ID authentication and then disable/remove local API keys, eliminating long-lived shared secrets so only managed-identity/Entra tokens are accepted.",
  "source": {
   "title": "Configure keyless authentication with Microsoft Entra ID — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/configure-entra-id"
  }
 },
 {
  "id": "gen-54",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer enables keyless authentication for a Foundry Models resource but the client app now returns authorization errors, even though it obtains a valid Entra ID token. What is the most likely cause?",
  "options": [
   "The Entra ID token is valid, but no Foundry RBAC role granting inference access has been assigned to the calling identity",
   "Keyless authentication requires the API key to also be present in the header",
   "The model deployment must be recreated whenever keys are disabled",
   "Entra ID tokens cannot be used for data-plane inference calls in Foundry"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "A valid token only proves authentication; authorization still requires an appropriate RBAC role on the resource/project. Without the right role assignment, the identity is authenticated but not permitted to call the model.",
  "source": {
   "title": "Configure keyless authentication with Microsoft Entra ID — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/configure-entra-id"
  }
 },
 {
  "id": "gen-55",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is configuring guardrails for a Foundry agent that calls external tools. They want a control that can inspect and act on the arguments the model produces before a tool actually runs. Which intervention point should the guardrail be attached to?",
  "options": [
   "The tool call, so the arguments are evaluated before the function executes",
   "The output, so only the final assistant message is inspected",
   "The input, so only the end-user prompt is inspected",
   "The tool response, so only the data returned by the tool is inspected"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry guardrails can intervene at four points: input, tool call, tool response, and output. To evaluate the arguments a model generates before a function executes, attach the control at the tool-call intervention point.",
  "source": {
   "title": "Guardrails and controls overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview"
  }
 },
 {
  "id": "gen-56",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A compliance team wants a Foundry guardrail to flag risky content and record it for review without stopping the conversation, because the business still wants users to receive a response. Which guardrail action satisfies this requirement?",
  "options": [
   "Configure the control to block the request and return an error",
   "Disable the guardrail entirely and rely on manual audits",
   "Configure the control to annotate the content instead of blocking it",
   "Configure network egress controls to drop the traffic"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Guardrail controls can either block content or annotate it. Annotating flags and records the detected risk while allowing the flow to continue, which fits a monitor-but-don't-interrupt requirement.",
  "source": {
   "title": "Guardrails and controls overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview"
  }
 },
 {
  "id": "gen-57",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An agent needs to reach only a small set of approved backend endpoints, and the security team wants to prevent it from exfiltrating data to arbitrary hosts. Which guardrails capability most directly addresses this concern?",
  "options": [
   "Prompt Shields for indirect attacks",
   "Network egress controls that restrict where the agent can send traffic",
   "Content safety severity thresholds on the output",
   "Role-based access control on the Foundry project"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Beyond content controls, Foundry guardrails include network egress controls that constrain the destinations an agent can communicate with, reducing the risk of data exfiltration to unapproved hosts.",
  "source": {
   "title": "Guardrails and controls overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview"
  }
 },
 {
  "id": "gen-58",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team is worried that a tool an agent calls could return manipulated or harmful data that then influences the model's next step. To inspect the data coming back from a tool before the model consumes it, which guardrail intervention point applies?",
  "options": [
   "The input intervention point",
   "The output intervention point",
   "The tool-call intervention point",
   "The tool-response intervention point"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The tool-response intervention point lets a guardrail evaluate the content returned by a tool before it is fed back to the model, catching manipulated or unsafe data at that stage.",
  "source": {
   "title": "Guardrails and controls overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview"
  }
 },
 {
  "id": "gen-59",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Users are attempting to bypass a chatbot's system instructions with messages like \"ignore all previous rules and act as an unrestricted model.\" Which Prompt Shields capability is designed to detect this class of attack?",
  "options": [
   "Detection of protected material in model output",
   "Detection of user prompt attacks (jailbreak attempts) in the end-user input",
   "Groundedness detection on the response",
   "PII redaction on the conversation"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Prompt Shields detects user prompt attacks (jailbreaks) — attempts in the end-user's input to override the system prompt or elicit disallowed behavior.",
  "source": {
   "title": "Prompt Shields — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields"
  }
 },
 {
  "id": "gen-60",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A RAG application grounds answers on documents retrieved from the web. An attacker plants hidden instructions inside one of those documents so the model will follow them. Which Prompt Shields feature is intended to catch this scenario?",
  "options": [
   "Detection of document/indirect attacks in grounding content",
   "Detection of jailbreak attempts in the user prompt",
   "Temperature and top_p tuning",
   "Managed identity authentication to the search index"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Prompt Shields includes protection against document (indirect) attacks, where malicious instructions are embedded in third-party content the model ingests, such as retrieved documents.",
  "source": {
   "title": "Prompt Shields — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields"
  }
 },
 {
  "id": "gen-61",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "To help a model distinguish trusted developer instructions from untrusted embedded content in retrieved documents, Microsoft recommends a technique that transforms or marks the external data so the model treats it as data rather than commands. What is this technique called?",
  "options": [
   "Fine-tuning",
   "Chunking",
   "Spotlighting",
   "Vectorization"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Spotlighting is a Prompt Shields mitigation that marks or transforms third-party content so the model can tell embedded data apart from legitimate instructions, reducing indirect prompt injection risk.",
  "source": {
   "title": "Prompt Shields — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields"
  }
 },
 {
  "id": "gen-62",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer must explain the difference between the two attack types Prompt Shields protects against. Which statement is accurate?",
  "options": [
   "Both detect only content in the model's final output",
   "User prompt attacks and document attacks are the same detection under one setting",
   "Document attacks target the user's direct prompt, while user prompt attacks target retrieved files",
   "User prompt attacks originate in the end-user's direct input, while document/indirect attacks originate in third-party content the model processes"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Prompt Shields distinguishes user prompt (jailbreak) attacks, which come from the end-user's direct input, from document/indirect attacks, which are injected through external content the model ingests.",
  "source": {
   "title": "Prompt Shields — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields"
  }
 },
 {
  "id": "gen-63",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "During evaluation, a team wants to measure how susceptible their agent is to cross-domain prompt injection where hostile instructions arrive through tool results or documents. Which built-in risk and safety evaluator targets this?",
  "options": [
   "Indirect attack (XPIA) evaluator",
   "Coherence evaluator",
   "Fluency evaluator",
   "Relevance evaluator"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The indirect attack (XPIA — cross-domain prompt injected attack) evaluator assesses how vulnerable a system is to injection attempts delivered through documents or tool outputs.",
  "source": {
   "title": "Risk and safety evaluators — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators"
  }
 },
 {
  "id": "gen-64",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An agent has access to tools that can send emails and delete records. The team wants an evaluation that specifically checks whether the agent attempts actions it should not be permitted to take. Which agent-focused risk and safety evaluator fits?",
  "options": [
   "Groundedness evaluator",
   "Similarity evaluator",
   "Prohibited actions evaluator",
   "Retrieval evaluator"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The risk and safety suite includes agent-specific evaluators such as prohibited actions and sensitive-data leakage; the prohibited actions evaluator checks whether the agent tries to perform actions outside its allowed scope.",
  "source": {
   "title": "Risk and safety evaluators — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators"
  }
 },
 {
  "id": "gen-65",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A responsible AI lead wants automated scoring of whether model responses contain hateful, sexual, violent, or self-harm content, with severity levels, as part of a pre-deployment evaluation run. Which category of evaluator provides this?",
  "options": [
   "Quality evaluators such as fluency and coherence",
   "Content safety evaluators that score harm categories with severity",
   "Performance evaluators for latency and token cost",
   "Retrieval evaluators for search relevance"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content safety evaluators in the risk and safety suite assess responses for hateful, sexual, violent, and self-harm content and return severity-graded scores, supporting responsible AI evaluation before deployment.",
  "source": {
   "title": "Risk and safety evaluators — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators"
  }
 },
 {
  "id": "gen-66",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An organization is establishing an end-to-end responsible AI practice in Foundry. Microsoft frames this lifecycle in three stages that map to finding risks, applying safeguards, and enforcing policy and oversight. What are these three stages?",
  "options": [
   "Ingest, Index, Retrieve",
   "Plan, Build, Deploy",
   "Detect, Redact, Report",
   "Discover, Protect, Govern"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Responsible AI for Foundry is organized around a Discover, Protect, and Govern lifecycle — discovering risks, protecting with safeguards, and governing with policy and oversight.",
  "source": {
   "title": "Responsible AI for Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/responsible-use-of-ai-overview"
  }
 },
 {
  "id": "gen-67",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A security operations team wants runtime threat alerts for generative AI workloads — for example, notifications when a jailbreak or data-exfiltration attempt is detected against a Foundry deployment. Which capability does Foundry's responsible AI guidance point to for this?",
  "options": [
   "Microsoft Defender for Cloud AI threat protection alerts",
   "Azure Monitor autoscale rules",
   "Azure Policy tag enforcement",
   "Content Understanding field extraction"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry's responsible AI overview describes integration with Microsoft Defender for Cloud, which surfaces AI security alerts (such as jailbreak or exfiltration attempts) for the Protect stage of the lifecycle.",
  "source": {
   "title": "Responsible AI for Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/responsible-use-of-ai-overview"
  }
 },
 {
  "id": "gen-68",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A governance officer needs an enterprise-wide way to enforce policies, track compliance, and maintain oversight of AI systems across the organization, rather than configuring safety on a single deployment. Which part of Foundry's responsible AI approach addresses this?",
  "options": [
   "Prompt engineering system messages",
   "Vector search tuning",
   "The Govern stage and its governance framework",
   "Provisioned throughput reservations"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Govern stage of Foundry's responsible AI lifecycle provides a governance framework for enforcing policies, tracking compliance, and maintaining organization-wide oversight of AI systems.",
  "source": {
   "title": "Responsible AI for Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/responsible-use-of-ai-overview"
  }
 },
 {
  "id": "gen-69",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team deploying a Foundry agent for financial operations wants a human to remain in control of consequential decisions. According to the Foundry Agent Service Transparency Note, which practice best supports appropriate human oversight?",
  "options": [
   "Grant the agent full autonomy so it can resolve issues without delays",
   "Keep a human in the loop for high-impact actions and design meaningful oversight",
   "Disable logging so operators are not overwhelmed with data",
   "Remove tool access controls to simplify the deployment"
  ],
  "correct": [
   1
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Transparency Note stresses meaningful human oversight — keeping people in the loop for consequential actions rather than granting unchecked autonomy — as a core responsible-use practice for agents.",
  "source": {
   "title": "Transparency Note for Foundry Agent Service — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/agents/transparency-note"
  }
 },
 {
  "id": "gen-70",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Before an agent is allowed to execute a sensitive tool action such as issuing a refund, the design should require explicit sign-off. Which mechanism described for Foundry agents enforces this?",
  "options": [
   "An approval flow that requires human confirmation before the action executes",
   "Increasing the model's temperature setting",
   "A larger context window",
   "Switching from an SLM to an LLM"
  ],
  "correct": [
   0
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Approval flows require human confirmation before an agent performs a sensitive or high-impact action, giving operators a checkpoint over consequential tool calls.",
  "source": {
   "title": "Transparency Note for Foundry Agent Service — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/agents/transparency-note"
  }
 },
 {
  "id": "gen-71",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "To keep an agent operating within its intended scope, the Transparency Note recommends explicitly constraining what the agent is allowed to do and the areas it operates in. Which control reflects this guidance?",
  "options": [
   "Allowing the agent to call any available tool by default",
   "Relying only on the base model's built-in safety",
   "Letting the agent decide its own goals at runtime",
   "Defining clear action and domain boundaries plus tool-access controls"
  ],
  "correct": [
   3
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Transparency Note recommends setting explicit action and domain boundaries and controlling which tools an agent can access, so it operates only within its intended scope.",
  "source": {
   "title": "Transparency Note for Foundry Agent Service — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/agents/transparency-note"
  }
 },
 {
  "id": "gen-72",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An auditor needs to reconstruct exactly what an agent did — the steps it took, the tools it invoked, and the decisions made — after an incident. Which agent characteristic emphasized in the Transparency Note supports this need?",
  "options": [
   "Higher token throughput",
   "A more creative system prompt",
   "Traceability of the agent's actions and decisions",
   "A smaller model footprint"
  ],
  "correct": [
   2
  ],
  "skill": 1,
  "sub": "1.4",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Traceability — recording the agent's steps, tool invocations, and decisions — is highlighted as essential for auditing, accountability, and post-incident review of agent behavior.",
  "source": {
   "title": "Transparency Note for Foundry Agent Service — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/agents/transparency-note"
  }
 },
 {
  "id": "gen-73",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are building a Python app that must chat with a deployed model and later create an agent, all against a single Microsoft Foundry project. Following the Foundry SDK quickstart, what is the most direct way to obtain a client that is scoped to the project and its connected resources?",
  "options": [
   "Instantiate a raw HTTP client and manually sign each request with the storage account key",
   "Deploy an Azure Functions app that proxies every model call through a shared secret",
   "Call the Azure Resource Manager control-plane API to enumerate deployments before every prompt",
   "Create an AIProjectClient using the project endpoint and a DefaultAzureCredential"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Foundry SDK quickstart connects an app to a project by creating an AIProjectClient from the project endpoint and a DefaultAzureCredential, which then exposes models, agents, and connected resources.",
  "source": {
   "title": "Get started with the Foundry SDK — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code"
  }
 },
 {
  "id": "gen-74",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants keyless authentication for a Foundry app running locally during development and later on an Azure VM with a managed identity, without changing code between environments. Which credential type shown in the Foundry quickstart satisfies this?",
  "options": [
   "A hard-coded API key stored in the source repository",
   "A SAS token generated per request",
   "DefaultAzureCredential, which chains Entra ID credential sources across environments",
   "A basic username-and-password credential passed to the client constructor"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "DefaultAzureCredential resolves Microsoft Entra ID credentials from the environment (developer sign-in locally, managed identity in Azure), giving keyless auth without code changes across environments.",
  "source": {
   "title": "Get started with the Foundry SDK — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code"
  }
 },
 {
  "id": "gen-75",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your team needs to call a deployed chat model from the Foundry project and pass a system message plus a user message to steer the response. In the Foundry SDK quickstart, which client is used to run the chat completion once you have the project client?",
  "options": [
   "An Azure AI Search client retrieved from the project",
   "A chat completions client obtained from the project's inference/Azure OpenAI client",
   "A Document Intelligence analyzer client",
   "A Content Safety moderation client"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "After creating the project client, the quickstart gets an inference/chat completions client (Azure OpenAI-compatible) to send system and user messages to the deployed model and read the response.",
  "source": {
   "title": "Get started with the Foundry SDK — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code"
  }
 },
 {
  "id": "gen-76",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "The Foundry SDK quickstart is available for multiple languages. Which set of languages does the quickstart explicitly cover for connecting an app to a project and chatting with a model?",
  "options": [
   "Only Python and PowerShell",
   "Python, C#, TypeScript, Java, and REST",
   "Go, Rust, and Ruby exclusively",
   "COBOL, Fortran, and Pascal"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Get started with the Foundry SDK quickstart provides parallel steps for Python, C#, TypeScript, Java, and REST.",
  "source": {
   "title": "Get started with the Foundry SDK — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code"
  }
 },
 {
  "id": "gen-77",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is deciding which Foundry SDK to use. They want a single thin-client library that talks to the project endpoint and reaches the project's connected resources rather than wiring up each service SDK separately. Which approach does the Foundry SDK overview recommend as the starting point?",
  "options": [
   "The project (Foundry) SDK, a thin client over the project endpoint that surfaces connectors",
   "A custom gRPC gateway you build and host yourself",
   "The legacy Cognitive Services multi-service SDK only",
   "Direct raw REST calls with no SDK for every operation"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The SDK overview describes the thin-client project SDK that connects to the project endpoint and exposes connectors to underlying resources, recommended as the entry point before dropping down to individual service SDKs.",
  "source": {
   "title": "Get started with Foundry SDKs and endpoints — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview"
  }
 },
 {
  "id": "gen-78",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "According to the Foundry SDKs and endpoints guidance, when should a developer reach past the thin-client project SDK and use a specialized service SDK directly?",
  "options": [
   "Never — the project SDK is the only supported way to call any service",
   "Only when the project has no deployed models",
   "When they need capabilities or fine-grained operations of a specific service (for example the Azure OpenAI or Azure AI Search SDK) beyond what the project client surfaces",
   "Only when writing code in COBOL"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The overview positions the project SDK as the unifying thin client, but directs developers to the specialized service SDKs (such as Azure OpenAI inference or Azure AI Search) when they need service-specific capabilities.",
  "source": {
   "title": "Get started with Foundry SDKs and endpoints — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview"
  }
 },
 {
  "id": "gen-79",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Foundry project has connections to an Azure AI Search resource and an Azure Storage account. Which concept in the Foundry SDK overview lets an app access those linked resources through the project without separately managing each resource's endpoint and secret?",
  "options": [
   "Deployment slots",
   "Availability zones",
   "Virtual network peerings",
   "Connectors (connections) surfaced through the project client"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Connections (connectors) are project-level links to external resources; the project SDK surfaces them so an app can reach linked services like Azure AI Search or Storage through the project.",
  "source": {
   "title": "Get started with Foundry SDKs and endpoints — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview"
  }
 },
 {
  "id": "gen-80",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your generative app answers questions about a company's internal policy PDFs. The base model has no knowledge of these documents, and the policies change monthly. Per the Foundry RAG guidance, which approach best grounds the model's answers in the current documents?",
  "options": [
   "Fine-tune the base model on the PDFs every month",
   "Increase the model's temperature so it invents plausible answers",
   "Retrieval-augmented generation that retrieves relevant content from an index and adds it to the prompt at query time",
   "Raise the max token limit so the whole document set fits in every prompt"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "RAG retrieves relevant chunks from an index and injects them into the prompt at query time, grounding responses in current source data without retraining the model.",
  "source": {
   "title": "RAG and indexes in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  }
 },
 {
  "id": "gen-81",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When implementing RAG in Foundry, a developer must choose a retrieval method for an index. Which combination is described as delivering the strongest relevance by combining keyword matching, vector similarity, and semantic ranking?",
  "options": [
   "Keyword-only search",
   "Hybrid search with semantic ranking",
   "Pure random sampling of documents",
   "Exact substring matching with no ranking"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry RAG guidance highlights hybrid retrieval (keyword plus vector) combined with semantic ranking as the highest-relevance option compared with keyword-only or vector-only retrieval.",
  "source": {
   "title": "RAG and indexes in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  }
 },
 {
  "id": "gen-82",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is deciding between plain RAG and agentic RAG for a complex support scenario where a single user question often needs several sub-queries against the knowledge base. According to Foundry's RAG guidance, what distinguishes agentic retrieval?",
  "options": [
   "It disables the index and relies solely on the model's pretraining",
   "It only works with plain keyword search and cannot use vectors",
   "It removes the need for any grounding data at all",
   "It uses an LLM to plan and issue multiple subqueries, then synthesizes the results"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Agentic RAG uses a model to break a complex query into subqueries, retrieve for each, and combine results, improving answers for multi-part questions over single-shot retrieval.",
  "source": {
   "title": "RAG and indexes in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  }
 },
 {
  "id": "gen-83",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "For a RAG application in Foundry, which service is the recommended retrieval backend that the app connects to as its index/knowledge source?",
  "options": [
   "Azure AI Search",
   "Azure Service Bus",
   "Azure DNS",
   "Azure Traffic Manager"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry RAG guidance connects applications to Azure AI Search as the index and retrieval backend for grounding generative responses.",
  "source": {
   "title": "RAG and indexes in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  }
 },
 {
  "id": "gen-84",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Before shipping a RAG chatbot, you must verify that its answers stay faithful to the retrieved source passages and do not fabricate details. Which evaluation dimension in the Foundry portal evaluations directly measures this?",
  "options": [
   "Groundedness",
   "Latency percentile",
   "Token cost per call",
   "Deployment region"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Groundedness evaluation checks whether generated answers are supported by the retrieved context, which is the key signal for detecting fabrication in RAG apps.",
  "source": {
   "title": "Run evaluations from the portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/evaluate-generative-ai-app"
  }
 },
 {
  "id": "gen-85",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants to run evaluations against a test dataset for their generative app without writing a custom harness, and to compare metrics like relevance, groundedness, and safety visually. Which capability described in Foundry supports this?",
  "options": [
   "Running evaluations from the Foundry portal against a dataset",
   "Editing the model weights directly in the portal",
   "Manually reading each response in a text editor",
   "Disabling all telemetry to speed up testing"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry lets you run evaluations from the portal over a dataset, scoring outputs on quality, groundedness, relevance, and safety and presenting the results for comparison.",
  "source": {
   "title": "Run evaluations from the portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/evaluate-generative-ai-app"
  }
 },
 {
  "id": "gen-86",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You need to evaluate a Foundry agent's behavior, not just a single model, across an evaluation run in the portal. According to the Foundry evaluation guidance, what can portal evaluations target?",
  "options": [
   "Only raw model deployments and nothing else",
   "Only network firewall rules",
   "Models, agents, and datasets",
   "Only the billing subscription"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry portal evaluations can be run against models, agents, and datasets, allowing quality and safety assessment of full agent behavior in addition to model outputs.",
  "source": {
   "title": "Run evaluations from the portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/how-to/evaluate-generative-ai-app"
  }
 },
 {
  "id": "gen-87",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants an automated evaluator that checks whether a generated answer actually addresses the user's question, independent of whether it is grounded in retrieved data. Which built-in quality evaluator fits this need?",
  "options": [
   "Self-harm severity evaluator",
   "Relevance evaluator",
   "Protected material evaluator",
   "Indirect attack (XPIA) evaluator"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Relevance evaluator is a built-in quality evaluator that measures how well a response addresses the query, separate from groundedness which measures support by context.",
  "source": {
   "title": "Built-in evaluators reference — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators"
  }
 },
 {
  "id": "gen-88",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "The Foundry built-in evaluators are organized into categories. Which grouping correctly reflects the categories documented in the built-in evaluators reference?",
  "options": [
   "Billing, networking, and storage evaluators",
   "Only spelling and grammar evaluators",
   "Hardware and GPU utilization evaluators",
   "Quality, RAG, safety, and agent evaluators"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The built-in evaluators reference groups evaluators into categories such as quality (general purpose), RAG, risk and safety, and agent evaluators.",
  "source": {
   "title": "Built-in evaluators reference — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators"
  }
 },
 {
  "id": "gen-89",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A RAG pipeline sometimes returns answers that include facts not present in the retrieved passages. Which built-in RAG evaluator is specifically designed to detect these ungrounded or fabricated claims?",
  "options": [
   "Fluency evaluator",
   "Groundedness evaluator",
   "Coherence evaluator",
   "Similarity evaluator"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Among RAG evaluators, the Groundedness evaluator assesses whether the response is supported by the retrieved context, flagging fabrications not present in the source.",
  "source": {
   "title": "Built-in evaluators reference — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators"
  }
 },
 {
  "id": "gen-90",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to score a summarization feature for readability and grammatical quality of the generated text, regardless of any source documents. Which built-in quality evaluator is most appropriate?",
  "options": [
   "Fluency evaluator",
   "Hateful and unfair content evaluator",
   "Retrieval evaluator",
   "Code vulnerability evaluator"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Fluency evaluator is a built-in quality evaluator that rates the grammatical correctness and readability of generated text, independent of grounding sources.",
  "source": {
   "title": "Built-in evaluators reference — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators"
  }
 },
 {
  "id": "gen-91",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are building a customer-support agent in Microsoft Foundry. You need to give the agent a stable identity that defines its role, goal, and the behavior it should follow across every conversation. Which element of the agent runtime carries these instructions?",
  "options": [
   "The conversation object, which stores the ordered list of turns",
   "A response object returned for each individual model turn",
   "The agent's instructions (system prompt), configured on the agent definition",
   "A per-request temperature parameter set at invocation time"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "In the Foundry agent runtime, the agent is the durable definition that pairs a model with instructions (its role/goal/behavior) and tools; conversations and responses are the per-interaction runtime objects layered on top of that agent.",
  "source": {
   "title": "Build with agents, conversations, and responses — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components"
  }
 },
 {
  "id": "gen-92",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In the Foundry Agent Service runtime, a single multi-turn chat between a user and an agent needs to retain the ordered history of turns so the model has prior context on each new request. Which runtime component is responsible for tracking that ongoing exchange?",
  "options": [
   "The conversation",
   "The tool schema",
   "The model deployment",
   "The evaluator"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The conversation is the runtime component that tracks the ordered turns of an interaction; each turn produces a response, while the agent supplies the model, instructions, and tools.",
  "source": {
   "title": "Build with agents, conversations, and responses — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components"
  }
 },
 {
  "id": "gen-93",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to understand what a Foundry agent produces for each turn: the model's output, any tool calls the model requested, and the run's status. Which runtime object represents the result of processing a single turn?",
  "options": [
   "The knowledge source",
   "The agent definition",
   "The response",
   "The connection"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "A response is the object generated when the agent processes a turn; it carries the model output, any requested tool calls, and status, whereas the conversation holds the sequence of turns.",
  "source": {
   "title": "Build with agents, conversations, and responses — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components"
  }
 },
 {
  "id": "gen-94",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are designing a Foundry agent that must reason over multiple steps and decide when to call tools. Which statement best describes how the agent, conversation, and response components relate at runtime?",
  "options": [
   "Each response is a standalone agent that ignores earlier turns",
   "The agent definition supplies model, instructions, and tools; a conversation groups turns; and each turn yields a response",
   "Conversations replace the need for an agent definition once the first turn runs",
   "Tools are defined per response and discarded after each turn"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The agent is the reusable definition (model + instructions + tools), a conversation groups the ordered turns, and each processed turn produces a response — together forming the runtime.",
  "source": {
   "title": "Build with agents, conversations, and responses — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components"
  }
 },
 {
  "id": "gen-95",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are adding a custom function tool to a Foundry agent so it can look up order status from your internal API. What must you provide so the model knows the function's name, purpose, and the parameters it accepts?",
  "options": [
   "A fine-tuned model checkpoint for the function",
   "A vector index containing the API responses",
   "A private endpoint to the API host",
   "A JSON tool/function schema describing the function name, description, and parameters"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Function calling requires you to define a tool schema (name, description, and JSON parameter definitions) so the model can decide when to call the function and with which arguments.",
  "source": {
   "title": "Use function calling with Foundry agents — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/function-calling"
  }
 },
 {
  "id": "gen-96",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Foundry agent using client-side function calling returns a response indicating the model wants to call your get_weather function with specific arguments. What is the developer's responsibility next?",
  "options": [
   "Execute the function in your application code and submit the tool output back to the agent",
   "Wait for the Foundry service to execute the function automatically and finalize the answer",
   "Re-deploy the model with the function results embedded",
   "Discard the tool call because the model already produced the final answer"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "With function calling, the model only signals its intent and arguments; your application executes the function and returns the output to the agent, which then continues the run to produce the final response.",
  "source": {
   "title": "Use function calling with Foundry agents — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/function-calling"
  }
 },
 {
  "id": "gen-97",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "For a hosted agent, you want a human to review and approve certain tool invocations before they execute, so the agent behaves semi-autonomously for sensitive actions. Which capability supports this?",
  "options": [
   "Temperature tuning on the model deployment",
   "A vector similarity threshold on the search tool",
   "Requiring approvals for tool calls in the agent's function-calling configuration",
   "Enabling batch transcription on the conversation"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry agents can require approvals for tool calls, letting a human authorize sensitive function invocations before they run — the mechanism for semi-autonomous, approval-gated behavior.",
  "source": {
   "title": "Use function calling with Foundry agents — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/function-calling"
  }
 },
 {
  "id": "gen-98",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When defining a function tool schema for a Foundry agent, which detail most directly improves the model's ability to choose the tool at the right time and pass valid arguments?",
  "options": [
   "Setting the agent's max token limit as high as possible",
   "Clear, descriptive names and descriptions for the function and each parameter",
   "Storing the function code in the same region as the model",
   "Assigning the function a dedicated managed identity"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The model relies on the function and parameter names and descriptions in the schema to decide when to call the tool and how to populate arguments; clear, accurate descriptions are what drive correct tool selection.",
  "source": {
   "title": "Use function calling with Foundry agents — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/function-calling"
  }
 },
 {
  "id": "gen-99",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You need a Foundry agent to answer questions grounded in your company's product documentation and to include citations back to the source passages. Which tool should you attach to the agent?",
  "options": [
   "The code interpreter tool",
   "The image generation tool",
   "A custom function that calls a public web API",
   "An Azure AI Search index connected as an agent tool"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Connecting an Azure AI Search index as an agent tool provides retrieval-augmented grounding, letting the agent search your indexed content and return answers with citations to the source documents.",
  "source": {
   "title": "Connect an Azure AI Search index to Foundry agents — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/ai-search"
  }
 },
 {
  "id": "gen-100",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "To connect an existing Azure AI Search index to a Foundry agent as a grounding tool, what must be in place before the agent can retrieve from it?",
  "options": [
   "The index must be re-created as a SQL database",
   "A fine-tuned embedding model deployed to the agent",
   "A connection to the Azure AI Search resource and an existing index the tool can query",
   "The search service must be moved into the same conversation object"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Using AI Search as an agent tool requires a connection to the Azure AI Search resource and an existing index; the agent then queries that index to ground its responses with citations.",
  "source": {
   "title": "Connect an Azure AI Search index to Foundry agents — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/ai-search"
  }
 },
 {
  "id": "gen-101",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Foundry agent uses the Azure AI Search tool for retrieval. A reviewer asks how users can verify that the agent's answers come from approved sources. What does the AI Search tool provide to support this?",
  "options": [
   "Automatic fine-tuning of the model on retrieved passages",
   "A guarantee that no external tool can be called",
   "Speech-to-text transcription of the source documents",
   "Citations that reference the retrieved documents backing the answer"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Azure AI Search tool grounds responses in indexed content and returns citations to the retrieved documents, so users can trace answers back to the approved source material.",
  "source": {
   "title": "Connect an Azure AI Search index to Foundry agents — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/ai-search"
  }
 },
 {
  "id": "gen-102",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your team wants a Foundry agent to combine grounded retrieval with custom actions: answer product questions from indexed docs and also create support tickets through your API. How should you configure the agent?",
  "options": [
   "Attach both an Azure AI Search tool for retrieval and a custom function tool for ticket creation",
   "Use only a function tool and paste the documentation into the system prompt",
   "Deploy two separate models that cannot share a conversation",
   "Replace retrieval with higher temperature to improve grounding"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry agents can be equipped with multiple tools; pairing an Azure AI Search (retrieval) tool with a custom function tool lets one agent both ground answers and take actions via your API.",
  "source": {
   "title": "Connect an Azure AI Search index to Foundry agents — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/ai-search"
  }
 },
 {
  "id": "gen-103",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You want a Foundry agent to remember a returning user's preferences and key facts across separate conversations, rather than only within a single chat. Which Foundry capability addresses this?",
  "options": [
   "The response object's status field",
   "Agent memory, which persists information beyond a single conversation",
   "A higher max-tokens setting on the model",
   "The function-calling approval flow"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Memory in Foundry gives agents long-term recall that persists across conversations, so user preferences and facts are retained beyond the turns of any single chat.",
  "source": {
   "title": "What is Memory? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory"
  }
 },
 {
  "id": "gen-104",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Foundry agent's memory can store different kinds of information. Which of the following best describes a memory type intended to retain durable facts about the user, such as their name and stated preferences?",
  "options": [
   "A user profile memory",
   "A temperature schedule",
   "A tool approval log",
   "A vector search vectorizer"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry memory includes a user profile memory type that captures durable facts and preferences about the user, complementing chat-summary and procedural memory used for other recall needs.",
  "source": {
   "title": "What is Memory? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory"
  }
 },
 {
  "id": "gen-105",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A long-running Foundry agent conversation risks exceeding the model's context window as turns accumulate. Which memory approach helps keep relevant context available without passing every raw turn to the model?",
  "options": [
   "Disabling tools so fewer tokens are used",
   "Increasing the search index replica count",
   "Switching the agent to a batch transcription model",
   "A chat summary memory that condenses prior turns into retained context"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Chat summary memory condenses earlier turns into a compact retained summary, preserving relevant context across a long conversation without sending every raw turn to the model each time.",
  "source": {
   "title": "What is Memory? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory"
  }
 },
 {
  "id": "gen-106",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A complex workflow needs several specialized Foundry agents — one to research, one to draft, and one to review — coordinated by a single controlling agent that delegates subtasks and consolidates results. Which multi-agent orchestration pattern does this describe?",
  "options": [
   "A single monolithic agent with no delegation",
   "A supervisor (hub-and-spoke) pattern where a coordinator delegates to specialized agents",
   "A purely random routing of turns between models",
   "A batch pipeline with no agent involvement"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "A supervisor or hub-and-spoke pattern uses a coordinating agent that delegates subtasks to specialized agents and consolidates their outputs — a core multi-agent orchestration approach in Foundry.",
  "source": {
   "title": "Implement advanced multi-agent orchestration in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/training/modules/aaai-implement-multi-agent-orchestration-azure-ai-foundry/"
  }
 },
 {
  "id": "gen-107",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are designing multi-agent orchestration in Foundry and need several independent subtasks to run at the same time to reduce total latency, with results merged afterward. Which orchestration approach fits this requirement?",
  "options": [
   "Parallel spawning of agents that execute concurrently",
   "A strictly sequential chain where each agent waits for the previous one",
   "Reducing the number of agents to one to avoid coordination",
   "Increasing model temperature to speed up responses"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Parallel spawning runs independent agent subtasks concurrently and merges their results, reducing end-to-end latency compared with a sequential chain where each agent must wait.",
  "source": {
   "title": "Implement advanced multi-agent orchestration in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/training/modules/aaai-implement-multi-agent-orchestration-azure-ai-foundry/"
  }
 },
 {
  "id": "gen-108",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When choosing between multi-agent orchestration frameworks for a Foundry solution, which trade-off should most influence the decision?",
  "options": [
   "The color theme of the Foundry portal",
   "Whether the agents share the same favicon",
   "The number of unrelated models in the global catalog",
   "The framework's control, complexity, and coordination capabilities versus your workflow's needs"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Framework selection for multi-agent orchestration is driven by trade-offs in control, complexity, and coordination features relative to the workflow's requirements, not cosmetic factors.",
  "source": {
   "title": "Implement advanced multi-agent orchestration in Foundry — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/training/modules/aaai-implement-multi-agent-orchestration-azure-ai-foundry/"
  }
 },
 {
  "id": "gen-109",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is calling a chat model deployed in Microsoft Foundry to draft marketing copy and wants each request to produce noticeably more varied, creative wording. Which sampling parameter should be increased to broaden the randomness of the token selection?",
  "options": [
   "frequency_penalty",
   "temperature",
   "max_tokens",
   "stop"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Raising temperature increases randomness in token sampling, producing more diverse and creative output; lowering it makes responses more deterministic and focused.",
  "source": {
   "title": "Prompt engineering techniques — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering"
  }
 },
 {
  "id": "gen-110",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are tuning a generative solution and want the model to sample only from the smallest set of tokens whose cumulative probability reaches a threshold, rather than adjusting the probability distribution's sharpness. Which parameter implements this nucleus-sampling behavior?",
  "options": [
   "top_p",
   "temperature",
   "presence_penalty",
   "logit_bias"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "top_p (nucleus sampling) restricts sampling to the smallest set of tokens whose cumulative probability mass reaches the specified value; Microsoft recommends altering temperature or top_p but not both at once.",
  "source": {
   "title": "Prompt engineering techniques — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering"
  }
 },
 {
  "id": "gen-111",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team notices their model produces better answers on complex arithmetic word problems when the prompt instructs it to reason step by step before giving a final answer. Which prompt engineering technique are they applying?",
  "options": [
   "Few-shot learning",
   "Reducing max_tokens",
   "Output priming with a leading cue",
   "Chain-of-thought prompting"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Chain-of-thought prompting instructs the model to break a problem into intermediate reasoning steps before answering, which improves accuracy on multistep reasoning tasks.",
  "source": {
   "title": "Prompt engineering techniques — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering"
  }
 },
 {
  "id": "gen-112",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to steer a model to classify support tickets into one of three fixed categories by including a handful of labeled example inputs and outputs directly in the prompt. Which technique best describes this approach?",
  "options": [
   "Zero-shot prompting",
   "Fine-tuning",
   "Few-shot learning",
   "Retrieval augmentation"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Few-shot learning provides several example input/output pairs in the prompt so the model can infer the desired pattern without any model retraining.",
  "source": {
   "title": "Prompt engineering techniques — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering"
  }
 },
 {
  "id": "gen-113",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "To make a completion continue in a specific format, a developer ends the prompt with the text \"Sentiment:\" so the model naturally fills in the label next. What is this technique called?",
  "options": [
   "Priming the output (leading cue)",
   "Stop sequence definition",
   "System message scoping",
   "Presence penalty tuning"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Providing a leading cue at the end of the prompt (priming the output) nudges the model to complete text in the intended format or continuation point.",
  "source": {
   "title": "Prompt engineering techniques — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering"
  }
 },
 {
  "id": "gen-114",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer sees the model occasionally repeating the same phrases across a long generated article. Which parameter is designed to discourage the model from repeating tokens it has already used frequently?",
  "options": [
   "top_p",
   "temperature",
   "frequency_penalty",
   "max_tokens"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "frequency_penalty reduces the likelihood of tokens proportionally to how often they have already appeared, discouraging verbatim repetition in the output.",
  "source": {
   "title": "Prompt engineering techniques — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering"
  }
 },
 {
  "id": "gen-115",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When designing prompts, Microsoft recommends clearly separating instructions from the content the model should act on. Which practice best supports this guidance?",
  "options": [
   "Placing all text in a single unbroken paragraph",
   "Sending the instruction only in the assistant role",
   "Setting temperature to 0 for every request",
   "Using section markers or delimiters (for example ###) to distinguish instruction from context"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Using clear delimiters or section markers to separate the instruction from the input context helps the model reliably distinguish what to do from what to operate on.",
  "source": {
   "title": "Prompt engineering techniques — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering"
  }
 },
 {
  "id": "gen-116",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is authoring a system message for a customer-service assistant and wants to guarantee the model refuses questions outside the company's product line. Which element of system message design most directly addresses this?",
  "options": [
   "Increasing max_tokens for longer answers",
   "Adding more few-shot examples of correct answers",
   "Defining the assistant's role and scope, including out-of-scope handling",
   "Lowering top_p to reduce randomness"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "A well-designed system message defines the assistant's role and scope and states how to handle out-of-scope requests, constraining behavior at the system level.",
  "source": {
   "title": "System message design — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering"
  }
 },
 {
  "id": "gen-117",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In a system message, a developer wants to reduce fabricated answers by telling the model exactly what to do when it lacks sufficient information. Which instruction best implements this \"when unsure\" policy?",
  "options": [
   "\"Always provide your best guess even without evidence.\"",
   "\"If you do not know the answer from the provided context, say you don't know.\"",
   "\"Increase the temperature until an answer appears.\"",
   "\"Repeat the user's question back to them.\""
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "An explicit 'when unsure' or fallback policy—instructing the model to admit it doesn't know rather than guess—reduces hallucinations and ungrounded responses.",
  "source": {
   "title": "System message design — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering"
  }
 },
 {
  "id": "gen-118",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer needs the model's responses to always come back as valid JSON matching a fixed set of fields so a downstream service can parse them. In the system message, which technique most directly enforces this?",
  "options": [
   "Specifying an explicit output contract describing the required structure",
   "Raising frequency_penalty",
   "Adding a stop sequence of \"}\"",
   "Switching to a smaller model"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Defining an output contract in the system message—stating the exact structure and fields the response must follow—guides the model to produce consistently parseable output.",
  "source": {
   "title": "System message design — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering"
  }
 },
 {
  "id": "gen-119",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A security-conscious team wants their assistant's system message to resist attempts by end users to override its instructions and to keep it from producing disallowed content. Which system message component addresses this?",
  "options": [
   "A longer few-shot example set",
   "A higher max_tokens value",
   "A lower temperature setting",
   "Safety and behavioral constraints stated in the system message"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "System message design includes explicit safety constraints and behavioral rules that set boundaries on the assistant, helping it resist manipulation and avoid disallowed output.",
  "source": {
   "title": "System message design — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering"
  }
 },
 {
  "id": "gen-120",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is deciding where to place durable, high-priority instructions that should govern the assistant's persona and rules across an entire conversation. According to Foundry system message guidance, where should these go?",
  "options": [
   "In each user message",
   "In the system (developer) message at the start of the conversation",
   "In a separate fine-tuning dataset",
   "In the tool response payloads"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundational, persistent instructions defining role, scope, output format, and safety belong in the system message, which frames the model's behavior for the whole conversation.",
  "source": {
   "title": "System message design — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering"
  }
 },
 {
  "id": "gen-121",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An operations team wants end-to-end visibility into a Foundry agent's execution, including which tools it called and how long each step took, using an open, vendor-neutral telemetry standard. Which standard underpins Foundry agent tracing?",
  "options": [
   "OpenTelemetry",
   "SNMP",
   "Syslog RFC 5424",
   "JMX"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry agent tracing is built on OpenTelemetry, emitting traces and spans that capture tool usage, latency, and other execution details in a standardized format.",
  "source": {
   "title": "Agent tracing overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept"
  }
 },
 {
  "id": "gen-122",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "While reviewing a trace for a single agent run in Foundry, a developer wants to see the individual operations—such as a model call and a specific tool invocation—as nested units of work within that run. What are these individual units called in the tracing model?",
  "options": [
   "Alerts",
   "Deployments",
   "Quotas",
   "Spans"
  ],
  "correct": [
   3
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "In OpenTelemetry-based tracing, a trace represents the overall run and is composed of spans, each representing an individual operation such as a model call or tool invocation.",
  "source": {
   "title": "Agent tracing overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept"
  }
 },
 {
  "id": "gen-123",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer needs to track how many tokens each step of an agent run consumes so they can attribute cost and spot expensive tool calls. Which observability signal captured by Foundry agent tracing provides this?",
  "options": [
   "Grounding score",
   "Token consumption per span",
   "RBAC role assignments",
   "Content filter severity"
  ],
  "correct": [
   1
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Agent traces record token consumption alongside tool usage and latency, letting developers analyze cost and performance at the level of individual spans.",
  "source": {
   "title": "Agent tracing overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept"
  }
 },
 {
  "id": "gen-124",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team runs a multi-agent workflow and wants their traces to consistently represent agent-to-agent interactions so the data is comparable across tools. What does Foundry tracing provide to support this?",
  "options": [
   "Semantic conventions for multi-agent tracing",
   "A fixed 30-day retention policy",
   "Automatic prompt rewriting",
   "Guaranteed single-agent-only spans"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry tracing follows semantic conventions (including multi-agent conventions) so spans for agents, tools, and interactions are structured consistently and remain interoperable.",
  "source": {
   "title": "Agent tracing overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept"
  }
 },
 {
  "id": "gen-125",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An operations lead wants a single place in the Foundry portal to watch aggregate agent health—token usage, latency, and run success rate—over time without querying raw traces manually. Which feature should they use?",
  "options": [
   "The Agent Monitoring Dashboard",
   "The model deployment quota page",
   "The content filter configuration blade",
   "The RBAC role assignment view"
  ],
  "correct": [
   0
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Agent Monitoring Dashboard surfaces aggregate operational metrics such as token usage, latency, and run success rate, giving a consolidated view of agent health.",
  "source": {
   "title": "Agent Monitoring Dashboard — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/how-to-monitor-agents-dashboard"
  }
 },
 {
  "id": "gen-126",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants their deployed agent to be automatically evaluated for quality and safety on a recurring basis in production, with alerts if metrics degrade. Which capability associated with the Agent Monitoring Dashboard supports this?",
  "options": [
   "Manual one-time evaluation only",
   "Disabling tracing to reduce latency",
   "Continuous or scheduled evaluation with alerts",
   "Fine-tuning on live traffic"
  ],
  "correct": [
   2
  ],
  "skill": 2,
  "sub": "2.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The monitoring experience supports continuous or scheduled evaluation of agents in production and can raise alerts when metrics such as quality or safety fall below expectations.",
  "source": {
   "title": "Agent Monitoring Dashboard — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/how-to-monitor-agents-dashboard"
  }
 },
 {
  "id": "gen-127",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to generate an original marketing image from a text description and also needs to later edit specific regions of that image using a mask. Which Azure OpenAI image model should they deploy?",
  "options": [
   "DALL·E 3, because it is the only model that supports text-to-image generation",
   "gpt-image-1, because it supports both text-to-image generation and mask-based inpainting edits",
   "GPT-4o vision, because vision-enabled chat models generate and edit images",
   "Ada embeddings, because image editing is an embedding operation"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "gpt-image-1 supports text-to-image generation plus image editing (inpainting) with a mask, whereas DALL·E 3 supports generation only. Vision chat models and embeddings do not generate images.",
  "source": {
   "title": "How to use image generation models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e"
  }
 },
 {
  "id": "gen-128",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When performing an inpainting edit with gpt-image-1, how does the mask tell the model which part of the image to change?",
  "options": [
   "The fully opaque (black) areas of the mask mark the region to regenerate",
   "The mask must be a separate JSON polygon list of coordinates",
   "The fully transparent areas of the mask indicate the region the model should edit",
   "The mask color hue selects the object class to replace"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "For image edits, the mask's fully transparent pixels indicate the area the model should regenerate; the rest of the image is preserved.",
  "source": {
   "title": "How to use image generation models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e"
  }
 },
 {
  "id": "gen-129",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team needs generated product images with a transparent background so they can composite them onto different colored web pages. Which combination correctly produces this with gpt-image-1?",
  "options": [
   "Set background to transparent and use an output format that supports alpha, such as PNG",
   "Set background to transparent and request a JPEG output",
   "Use DALL·E 3 with the style parameter set to natural",
   "Transparency is not supported by any Azure OpenAI image model"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "gpt-image-1 can produce a transparent background when the background parameter is set to transparent, but only with formats that support alpha (PNG or WEBP); JPEG cannot hold transparency.",
  "source": {
   "title": "How to use image generation models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e"
  }
 },
 {
  "id": "gen-130",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to reduce the file size of generated JPEG and WEBP images returned by gpt-image-1. Which request parameter should they set?",
  "options": [
   "The style parameter",
   "The temperature parameter",
   "The response_format set to url",
   "The output compression parameter"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "gpt-image-1 exposes an output_compression parameter (0-100%) that reduces file size for JPEG and WEBP outputs. Temperature and style do not apply to compression.",
  "source": {
   "title": "How to use image generation models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e"
  }
 },
 {
  "id": "gen-131",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An app currently uses DALL·E 3 and the team asks to add an in-place object-removal feature on already generated images. Why must they switch models?",
  "options": [
   "DALL·E 3 only returns URLs, not image data",
   "DALL·E 3 cannot output PNG files",
   "DALL·E 3 requires a mask on every generation call",
   "DALL·E 3 does not support image editing/inpainting, which gpt-image-1 provides"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "DALL·E 3 is generation-only and has no edit/inpainting endpoint; gpt-image-1 supports editing existing images with a mask.",
  "source": {
   "title": "How to use image generation models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e"
  }
 },
 {
  "id": "gen-132",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer needs higher-detail generated images and is trading off cost against fidelity on gpt-image-1. Which parameter controls the rendering detail level of the output?",
  "options": [
   "The n parameter",
   "The seed parameter",
   "The quality parameter (for example low, medium, or high)",
   "The user parameter"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The quality parameter (low/medium/high for gpt-image-1) controls output fidelity and directly affects cost and latency. The n parameter only sets how many images are returned.",
  "source": {
   "title": "How to use image generation models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e"
  }
 },
 {
  "id": "gen-133",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer submits a text prompt to gpt-image-1 but wants the output sized for a wide banner rather than a square. Which request parameter do they configure?",
  "options": [
   "The aspect_lock parameter",
   "The style parameter set to vivid",
   "The resolution is fixed at 1024x1024 and cannot be changed",
   "The size parameter (for example a landscape dimension such as 1536x1024)"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The size parameter selects the output dimensions, including landscape and portrait options, so a wide banner uses a landscape size rather than the square default.",
  "source": {
   "title": "How to use image generation models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e"
  }
 },
 {
  "id": "gen-134",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A studio wants to generate a short video clip directly from a text prompt on Azure. Which model is designed for this text-to-video scenario?",
  "options": [
   "Sora, the video generation model",
   "gpt-image-1 with a duration parameter",
   "GPT-4o with the video modality flag",
   "DALL·E 3 in animation mode"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Sora is the Azure OpenAI video generation model that creates video from a text prompt (and can also accept image or video input). The image models do not generate video.",
  "source": {
   "title": "Video generation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/video-generation"
  }
 },
 {
  "id": "gen-135",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Besides a text prompt, which additional input types can the Sora video generation model accept to guide a generated video?",
  "options": [
   "Only plain text prompts",
   "An audio waveform only",
   "A JSON storyboard schema only",
   "An image input or an existing video input as a starting reference"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Sora supports generating video from text, from an image, or from an existing video input, enabling reference-guided and continuation scenarios.",
  "source": {
   "title": "Video generation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/video-generation"
  }
 },
 {
  "id": "gen-136",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer integrating Sora needs to specify how long the generated clip should be and its output dimensions. How are these handled?",
  "options": [
   "Duration and resolution are fixed and cannot be set by the caller",
   "Sora exposes generation controls such as clip duration and output dimensions/resolution",
   "Duration is inferred only from the number of words in the prompt",
   "Resolution can only be changed after generation by re-encoding locally"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Sora provides generation controls including the clip duration and output dimensions/resolution, letting developers request videos that fit their target format.",
  "source": {
   "title": "Video generation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/video-generation"
  }
 },
 {
  "id": "gen-137",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Because generating a video is compute-intensive and not instantaneous, how does an application typically retrieve a Sora result?",
  "options": [
   "The video is returned inline in the initial synchronous response",
   "The request creates a generation job that the app polls for status until the video is ready",
   "The app must open a websocket and stream raw frames",
   "The video is emailed to the resource owner"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Video generation is asynchronous: the call starts a generation job, and the application polls the job status and then retrieves the completed video, rather than getting it inline.",
  "source": {
   "title": "Video generation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/video-generation"
  }
 },
 {
  "id": "gen-138",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A compliance reviewer asks what safety behavior applies to Sora video generation. Which statement is accurate?",
  "options": [
   "Sora bypasses content filtering because video is not text",
   "Sora applies content moderation and has documented limitations and safety guardrails on generated video",
   "Safety review is entirely the customer's responsibility with no built-in filtering",
   "Sora only filters the text prompt, never the generated frames"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Sora overview documents safety guardrails, content moderation, and limitations that apply to generated video content, not just the prompt.",
  "source": {
   "title": "Video generation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/video-generation"
  }
 },
 {
  "id": "gen-139",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants to feed an existing short clip into Sora and have it extend or transform that footage. Which capability enables this?",
  "options": [
   "Video-to-video generation using an existing video as input",
   "This requires exporting the video to images first because video input is unsupported",
   "Only image-to-video is supported, so the clip must be reduced to a single frame",
   "Sora can only start from a blank canvas"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Sora accepts an existing video as input, supporting video-to-video scenarios such as extending or transforming provided footage.",
  "source": {
   "title": "Video generation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/video-generation"
  }
 },
 {
  "id": "gen-140",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are building a Foundry agent that should produce images as part of its conversational workflow. What is the recommended way to give the agent this capability?",
  "options": [
   "Manually call the images endpoint outside the agent and paste results back in",
   "Deploy a separate chat model and prompt it to describe images",
   "Enable the code interpreter tool, which renders images from matplotlib only",
   "Attach the image generation tool to the agent so it can generate images within the workflow"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Foundry Agent Service provides an image generation tool that you attach to an agent, letting it generate images directly as part of its workflow.",
  "source": {
   "title": "Image generation tool in Agent Service — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/image-generation"
  }
 },
 {
  "id": "gen-141",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When using the image generation tool with a Foundry agent, which set of parameters can be configured for the generated image?",
  "options": [
   "Only the text prompt, with all other settings fixed",
   "Size, quality, background, and output format",
   "Learning rate, epochs, and batch size",
   "Temperature, top_p, and frequency penalty"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The agent image generation tool exposes image parameters such as size, quality, background, and output format, mirroring the underlying image model controls.",
  "source": {
   "title": "Image generation tool in Agent Service — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/image-generation"
  }
 },
 {
  "id": "gen-142",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An agent using the image generation tool must return icons with a see-through background for overlay on a UI. Which parameter setting achieves this?",
  "options": [
   "Set quality to high",
   "Set size to the largest available dimension",
   "Set the background parameter to transparent",
   "Set output format to JPEG"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The background parameter controls whether the generated image has a transparent or opaque background; setting it to transparent yields a see-through background for overlays.",
  "source": {
   "title": "Image generation tool in Agent Service — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/image-generation"
  }
 },
 {
  "id": "gen-143",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer must decide between calling the Azure OpenAI images API directly and using the Foundry agent image generation tool. Which is the key reason to choose the agent tool?",
  "options": [
   "The agent tool trains a custom image model automatically",
   "The agent tool is the only way to set image size",
   "The agent tool lets the model generate images inline as part of an orchestrated agent conversation and toolset",
   "The agent tool removes all content safety checks for faster output"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The agent image generation tool is chosen when image creation should happen inside an agent's orchestrated workflow alongside its other tools, rather than as a standalone API call.",
  "source": {
   "title": "Image generation tool in Agent Service — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/image-generation"
  }
 },
 {
  "id": "gen-144",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants the image generation tool in an agent to return smaller files for faster page loads while keeping a WEBP format. Which parameter should they adjust?",
  "options": [
   "The output compression parameter",
   "The seed parameter",
   "The presence penalty parameter",
   "The number of conversation turns"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The output compression control reduces file size for compressible formats such as JPEG and WEBP, trading some fidelity for faster delivery.",
  "source": {
   "title": "Image generation tool in Agent Service — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/image-generation"
  }
 },
 {
  "id": "gen-145",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is building a support tool where an agent must answer free-form user questions about uploaded product photos, such as \"Is the seal on this bottle intact?\" The solution needs conversational visual reasoning rather than a fixed set of predefined labels. Which approach best fits this requirement?",
  "options": [
   "Use a vision-enabled chat model such as GPT-4o by passing the image alongside the text prompt in the chat messages",
   "Use the Image Analysis tags feature to return a ranked list of predefined tags",
   "Use the Read OCR model to extract any printed text from the label",
   "Use Content Understanding video analyzers to segment the image into shots"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Vision-enabled chat models (GPT-4o/GPT-4.1/o-series) accept both images and text in the same request, enabling open-ended visual question-answering and reasoning rather than returning only fixed labels.",
  "source": {
   "title": "Use vision-enabled chat models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/gpt-with-vision"
  }
 },
 {
  "id": "gen-146",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When calling a vision-enabled chat model in Azure OpenAI, a developer wants to submit an image that is stored locally rather than referenced by a publicly accessible URL. How can the image be provided in the chat request?",
  "options": [
   "Images must always be provided as a public HTTPS URL; local files are not supported",
   "The image must first be uploaded to Azure AI Search and referenced by index key",
   "Encode the image as a base64 data URL and include it in the image_url content of the message",
   "The image must be converted to a caption string before it can be sent"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Vision-enabled chat models accept images either as a URL or as a base64-encoded data URL embedded in the image_url field of the message content, so local files can be sent inline.",
  "source": {
   "title": "Use vision-enabled chat models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/gpt-with-vision"
  }
 },
 {
  "id": "gen-147",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team processing high-resolution engineering diagrams with a vision-enabled chat model notices the model misses small annotations. They want the model to analyze the image in greater detail at higher token cost. Which request parameter controls this trade-off?",
  "options": [
   "The temperature parameter",
   "The detail (image fidelity) setting on the image content, set to high",
   "The top_p parameter",
   "The frequency_penalty parameter"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The image detail setting (low/high/auto) controls how finely a vision-enabled chat model processes an image; high fidelity captures small features at the cost of more tokens.",
  "source": {
   "title": "Use vision-enabled chat models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/gpt-with-vision"
  }
 },
 {
  "id": "gen-148",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer needs a single API call that returns a human-readable one-sentence description, a list of tags, and detected objects with bounding boxes for uploaded photos, without training a custom model. Which Azure service is designed for this?",
  "options": [
   "Azure AI Document Intelligence Layout model",
   "Azure AI Speech batch transcription",
   "Azure AI Language named entity recognition",
   "Azure AI Vision Image Analysis"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure AI Vision Image Analysis provides prebuilt visual features—captions, tags, object detection with bounding boxes, OCR, people detection, and smart crop—through a single API without custom training.",
  "source": {
   "title": "What is Image Analysis? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-image-analysis"
  }
 },
 {
  "id": "gen-149",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An e-commerce team wants to build visual search so users can find visually similar products from a photo. Which Image Analysis capability produces numeric representations that can be compared for similarity?",
  "options": [
   "Smart crop thumbnails",
   "Optical character recognition (OCR)",
   "Multimodal (vector) embeddings",
   "Dense captions"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Image Analysis multimodal embeddings vectorize images (and text) into a shared space so that similarity between vectors can power visual/image-to-image and text-to-image search.",
  "source": {
   "title": "What is Image Analysis? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-image-analysis"
  }
 },
 {
  "id": "gen-150",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A media site needs to automatically generate square social-media thumbnails that keep the most important region of each uploaded photo in frame. Which Image Analysis feature addresses this?",
  "options": [
   "People detection with bounding boxes",
   "Tags with confidence scores",
   "Background removal",
   "Smart crop, which returns a region of interest and cropped thumbnail coordinates"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Image Analysis smart crop feature identifies the region of interest in an image and generates thumbnail crop coordinates that preserve the salient content at a requested aspect ratio.",
  "source": {
   "title": "What is Image Analysis? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-image-analysis"
  }
 },
 {
  "id": "gen-151",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An accessibility team must automatically generate concise alt-text for images across a public website to meet accessibility standards. Which Azure AI Vision capability is the most direct fit for producing a single human-readable sentence describing each image?",
  "options": [
   "Object detection",
   "Smart crop",
   "People detection",
   "The Caption feature, which returns one descriptive sentence for the whole image"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Caption feature generates a single natural-language sentence describing the whole image, which is well suited for alt-text and accessibility scenarios.",
  "source": {
   "title": "Image captions — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-describe-images-40"
  }
 },
 {
  "id": "gen-152",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants descriptions not just of the overall image but of individual salient regions within it, each with its own bounding box, to build richer region-level alt-text. Which capability provides this?",
  "options": [
   "Caption (single whole-image description)",
   "Tags",
   "Dense Captions",
   "OCR (Read)"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Dense Captions generates descriptive sentences for up to multiple distinct regions of an image, each returned with a bounding box, providing region-level descriptions beyond the single whole-image caption.",
  "source": {
   "title": "Image captions — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-describe-images-40"
  }
 },
 {
  "id": "gen-153",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team notices the Caption and Dense Captions features return an error when called in a particular deployment. According to the documentation, what is a key constraint on availability of these image captioning features?",
  "options": [
   "They are only available in a limited set of Azure regions",
   "They require the image to be under 1 KB in size",
   "They only work on grayscale images",
   "They require a custom-trained model to be deployed first"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Caption and Dense Captions are supported only in specific Azure regions; resources must be created in a supported region for these features to be available.",
  "source": {
   "title": "Image captions — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-describe-images-40"
  }
 },
 {
  "id": "gen-154",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An insurance workflow must pull specific fields—such as damage type, severity, and estimated cost—from a mix of photos and scanned forms, returning structured output with confidence and grounding back to the source. Which Azure service is purpose-built for this generative field extraction across content types?",
  "options": [
   "Azure AI Vision Image Analysis tags",
   "Azure AI Content Understanding",
   "Azure AI Translator",
   "Azure OpenAI text-to-speech"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure AI Content Understanding performs generative extraction of user-defined fields across images, documents, audio, and video, returning structured output with confidence scores and grounding to the source content.",
  "source": {
   "title": "What is Content Understanding? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview"
  }
 },
 {
  "id": "gen-155",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants Content Understanding to extract a consistent, custom set of fields from incoming content. What is the primary artifact they configure to define which fields to extract and how?",
  "options": [
   "A vectorizer skillset",
   "A neural TTS voice model",
   "A Prompt Shield policy",
   "An analyzer with a defined field schema"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "In Content Understanding you create an analyzer configured with a field schema that specifies the fields to extract; the analyzer applies generative extraction to produce structured results.",
  "source": {
   "title": "What is Content Understanding? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview"
  }
 },
 {
  "id": "gen-156",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A compliance team requires that every value Content Understanding returns can be traced back to where it appears in the source content, to support human review. Which characteristic of Content Understanding output supports this requirement?",
  "options": [
   "Outputs include confidence scores and grounding (source references) for extracted values",
   "Outputs are always returned as encrypted binary blobs",
   "Outputs are limited to a fixed list of predefined tags",
   "Outputs are only available as synthesized speech"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding returns confidence scores and grounding that link extracted fields back to their location in the source, which supports validation, human-in-the-loop review, and estimating accuracy.",
  "source": {
   "title": "What is Content Understanding? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview"
  }
 },
 {
  "id": "gen-157",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A single Azure service must handle content across multiple modalities—images, documents, audio, and video—within one framework so a team avoids stitching together separate services. Which service provides this unified multimodal extraction?",
  "options": [
   "Azure AI Speech",
   "Azure AI Document Intelligence",
   "Azure AI Content Understanding",
   "Azure AI Vision Image Analysis"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding is designed as a unified, multimodal service that processes images, documents, audio, and video through a common analyzer-based extraction framework.",
  "source": {
   "title": "What is Content Understanding? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview"
  }
 },
 {
  "id": "gen-158",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team must analyze training videos to produce a searchable transcript plus structured summaries of what happens over time. Which Content Understanding capability supports extracting a transcript and analyzing video over time?",
  "options": [
   "It renders the video into new frames using a generation model",
   "It only removes background noise from the audio track",
   "It converts the video into a single still thumbnail",
   "It produces a transcript, identifies key frames and shots, and supports custom fields and segmentation"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding video analysis produces a transcript and identifies key frames and shots, and supports custom fields and segmentation to structure the analysis of video content.",
  "source": {
   "title": "Content Understanding video overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/video/overview"
  }
 },
 {
  "id": "gen-159",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer configuring a Content Understanding video analyzer wants the service to break a long recording into meaningful segments and extract a defined set of fields per segment. Which analyzer capabilities enable this?",
  "options": [
   "Segmentation together with a custom field schema",
   "Smart crop and background removal",
   "SSML and neural voice selection",
   "Vector kNN and hybrid ranking"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The video analyzer supports segmentation to divide content into segments and a custom field schema to extract structured fields, allowing per-segment extraction over a long video.",
  "source": {
   "title": "Content Understanding video overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/video/overview"
  }
 },
 {
  "id": "gen-160",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "For a video analysis pipeline, a team wants to associate extracted descriptions with specific moments so reviewers can jump to relevant points. Which Content Understanding video output makes this possible?",
  "options": [
   "A single caption for the entire video with no timing",
   "Key frames and shot detection that align analysis to points in the timeline",
   "A base64 image of the first frame only",
   "A list of tags with no temporal information"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding video analysis identifies key frames and shots, aligning extracted information to moments in the video timeline so results can be tied to specific points.",
  "source": {
   "title": "Content Understanding video overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/video/overview"
  }
 },
 {
  "id": "gen-161",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer must choose between Azure AI Vision Image Analysis and a vision-enabled chat model for a task that requires interactive, multi-turn reasoning about an image—answering follow-up questions and comparing details the user points out. Which choice and rationale is correct?",
  "options": [
   "Image Analysis, because it supports conversational multi-turn image reasoning natively",
   "A vision-enabled chat model, because it supports open-ended, conversational visual question-answering across turns",
   "Image Analysis, because chat models cannot accept images at all",
   "Neither; only Document Intelligence can reason about images"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Vision-enabled chat models handle open-ended, conversational visual question-answering and reasoning across turns, whereas Image Analysis returns prebuilt features (captions, tags, objects) rather than interactive dialogue.",
  "source": {
   "title": "Use vision-enabled chat models — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/gpt-with-vision"
  }
 },
 {
  "id": "gen-162",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer needs to detect and locate discrete objects—returning each object's label and bounding-box coordinates—in warehouse shelf photos, using a prebuilt capability. Which Image Analysis feature should be used?",
  "options": [
   "Object detection",
   "Caption",
   "Smart crop",
   "Multimodal embeddings"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Image Analysis object detection feature identifies individual objects in an image and returns each with a bounding box, supporting object/region identification without custom training.",
  "source": {
   "title": "What is Image Analysis? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-image-analysis"
  }
 },
 {
  "id": "gen-163",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer building an image-sharing app wants to screen uploaded photos for unsafe visual content before they are published. Azure AI Content Safety returns a severity score for each detected harm category. Which four harm categories does Content Safety evaluate for both text and image content?",
  "options": [
   "Hate, Sexual, Violence, and Self-harm",
   "Spam, Phishing, Malware, and Fraud",
   "Copyright, Trademark, Watermark, and Provenance",
   "Bias, Toxicity, Profanity, and Misinformation"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure AI Content Safety classifies content into four harm categories -- Hate, Sexual, Violence, and Self-harm -- across text, image, and multimodal content, each returned with a severity level.",
  "source": {
   "title": "Harm categories in Azure AI Content Safety — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/harm-categories"
  }
 },
 {
  "id": "gen-164",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your content-moderation pipeline sends images to the Azure AI Content Safety image analysis API and applies a threshold to the returned severity. For image content, Content Safety returns severity on a trimmed scale. Which severity levels are reported for images?",
  "options": [
   "A continuous 0.0 to 1.0 confidence probability",
   "Four levels: 0, 2, 4, and 6",
   "A pass/fail boolean only",
   "Eight levels: 0 through 7"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "For image content, Content Safety reports severity on a trimmed scale of four levels -- 0 (safe), 2 (low), 4 (medium), and 6 (high) -- rather than the full 0-7 scale used for the detailed text configuration.",
  "source": {
   "title": "Harm categories in Azure AI Content Safety — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/harm-categories"
  }
 },
 {
  "id": "gen-165",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A moderation team wants to understand what the severity score returned by Azure AI Content Safety represents so they can set a rejection threshold. What does a higher severity level indicate?",
  "options": [
   "The number of separate harmful regions detected in the image",
   "The API's confidence that any object was detected at all",
   "The graded degree of severity that flagged content is considered harmful",
   "The resolution in megapixels required to re-scan the image"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Severity in Content Safety is a graded measure describing how harmful flagged content is; higher severity levels indicate more harmful content, which lets teams choose a threshold at which to reject.",
  "source": {
   "title": "Harm categories in Azure AI Content Safety — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/harm-categories"
  }
 },
 {
  "id": "gen-166",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A retailer must block user-uploaded images that display extremist insignia or other prohibited symbols. Which Azure AI Content Safety capability is designed to detect this kind of imagery?",
  "options": [
   "Personally identifiable information (PII) detection",
   "Custom neural voice fingerprinting",
   "Optical character recognition of printed receipts",
   "Image harm-category analysis, which covers prohibited-symbol imagery"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Safety image analysis evaluates visual content against harm categories and covers prohibited-symbol imagery (such as hate symbols), enabling enforcement of visual policy against extremist or banned insignia.",
  "source": {
   "title": "Harm categories in Azure AI Content Safety — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/harm-categories"
  }
 },
 {
  "id": "gen-167",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is deciding whether Azure AI Content Safety can moderate a single asset that combines a picture with an overlaid text caption. Which statement best reflects Content Safety's coverage?",
  "options": [
   "It supports text, image, and multimodal content analysis",
   "It supports only plain-text moderation",
   "It supports only standalone image files with no embedded text",
   "It supports only audio and video streams"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure AI Content Safety applies its harm-category severity scales across text, image, and multimodal content, so an asset that combines an image with text can be evaluated together.",
  "source": {
   "title": "Harm categories in Azure AI Content Safety — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/harm-categories"
  }
 },
 {
  "id": "gen-168",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are calling the Azure AI Content Safety image analysis (Analyze Image) REST API from Python to moderate a profile photo. What form must the image take in the request payload?",
  "options": [
   "A publicly reachable HTTP URL only; base64 is not accepted",
   "A base64-encoded string of the image (or a blob storage reference)",
   "A raw multipart file upload with no encoding",
   "A vectorized embedding of the image produced beforehand"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Analyze Image quickstart passes the image to the API as a base64-encoded string in the request body (a blob storage reference is also supported), and returns per-category severity results.",
  "source": {
   "title": "Quickstart: Analyze image content — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image"
  }
 },
 {
  "id": "gen-169",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After calling the Content Safety Analyze Image API, your code receives a categoriesAnalysis array. To implement an accept/reject filter, what should the application compare for each returned category?",
  "options": [
   "The category name against a hardcoded allowlist of file types",
   "The image's EXIF metadata timestamp",
   "The returned severity value against a threshold you define",
   "The total byte size of the image against a quota"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Analyze Image response includes a severity per harm category; the app implements filtering by comparing each severity against a chosen threshold and rejecting content that meets or exceeds it.",
  "source": {
   "title": "Quickstart: Analyze image content — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image"
  }
 },
 {
  "id": "gen-170",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants to fine-tune how aggressively their moderation service rejects images without changing model code. Using the Content Safety image quickstart approach, how is filtering strictness adjusted?",
  "options": [
   "By retraining the harm-category model on new labeled images",
   "By raising or lowering the severity threshold applied to results",
   "By switching the resource from Standard to Free tier",
   "By enabling optical character recognition on the endpoint"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Because the API returns a severity per category, the application controls strictness simply by setting the severity threshold at which content is rejected -- no model retraining is required.",
  "source": {
   "title": "Quickstart: Analyze image content — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image"
  }
 },
 {
  "id": "gen-171",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "To authenticate the Content Safety image analysis quickstart client, which pair of values does the sample application require from the Content Safety resource?",
  "options": [
   "A storage connection string and a container name",
   "A model deployment name and an API version query string only",
   "A Microsoft Entra tenant ID and a client secret hardcoded in the URL",
   "The resource endpoint and a subscription key"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Analyze Image quickstart configures the client with the Content Safety resource endpoint and a subscription (API) key, typically read from environment variables, to call the moderation API.",
  "source": {
   "title": "Quickstart: Analyze image content — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image"
  }
 },
 {
  "id": "gen-172",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to test the image moderation endpoint against different harm dimensions in a single call. What does the Content Safety Analyze Image response provide for each request?",
  "options": [
   "A severity result for each of the harm categories analyzed",
   "A single overall harmful/not-harmful flag with no category detail",
   "Only the highest-severity category, discarding the others",
   "A textual caption describing the image contents"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Analyze Image API returns a categoriesAnalysis result containing a severity for each harm category evaluated, so a single call reports across Hate, Sexual, Violence, and Self-harm.",
  "source": {
   "title": "Quickstart: Analyze image content — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image"
  }
 },
 {
  "id": "gen-173",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A RAG agent ingests third-party PDFs and images into the model's context. An attacker hides instructions as text inside an uploaded image, hoping the model will obey them. Which Azure OpenAI capability is designed to detect this indirect (document) attack?",
  "options": [
   "Integrated vectorization",
   "Prompt Shields for indirect (document) attacks",
   "Provisioned throughput units",
   "Custom neural voice"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Prompt Shields detects indirect (document) attacks -- malicious instructions embedded in third-party content such as documents or images -- in addition to direct user prompt (jailbreak) attacks.",
  "source": {
   "title": "Prompt Shields — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields"
  }
 },
 {
  "id": "gen-174",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Prompt Shields distinguishes between two attack types. Which pairing correctly describes them?",
  "options": [
   "Network attacks (DDoS) and data-exfiltration attacks",
   "Training-data poisoning and model-weight tampering",
   "User prompt attacks (direct jailbreaks) and document/indirect attacks",
   "Rate-limit attacks and quota-exhaustion attacks"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Prompt Shields protects against user prompt attacks (direct jailbreak attempts entered by the user) and document/indirect attacks (instructions embedded in external content the model processes).",
  "source": {
   "title": "Prompt Shields — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields"
  }
 },
 {
  "id": "gen-175",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "To help a model treat embedded instructions in external documents as data rather than commands, Prompt Shields supports a technique that marks or delimits untrusted content. What is this technique called?",
  "options": [
   "Chunking",
   "Vectorization",
   "Diarization",
   "Spotlighting"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Spotlighting is a Prompt Shields technique that transforms or delimits input documents so the model can distinguish trusted instructions from untrusted embedded content, reducing the success of indirect attacks.",
  "source": {
   "title": "Prompt Shields — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields"
  }
 },
 {
  "id": "gen-176",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A multimodal assistant lets users upload screenshots that may contain hidden textual instructions. Beyond scanning the raw user prompt, why should the team also enable the document-attack detection in Prompt Shields?",
  "options": [
   "Because malicious instructions can arrive through third-party content processed by the model, not just the user's direct prompt",
   "Because it increases the model's maximum context window",
   "Because it converts images into higher-resolution formats before analysis",
   "Because it is required to bill usage under provisioned throughput"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Indirect (document) attack detection is needed because attackers can embed instructions in content the model consumes -- such as text inside uploaded images or documents -- which direct user-prompt screening alone would miss.",
  "source": {
   "title": "Prompt Shields — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields"
  }
 },
 {
  "id": "gen-177",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A studio publishes AI-generated marketing images and needs a tamper-evident way to prove each image's origin and that it was AI-generated. Which Azure OpenAI feature attaches this provenance to generated images?",
  "options": [
   "Content Credentials, based on the C2PA standard",
   "Prompt Shields spotlighting",
   "Integrated vectorization",
   "Sentiment analysis"
  ],
  "correct": [
   0
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Credentials attaches provenance metadata to AI-generated images following the C2PA standard, providing a tamper-evident record of the image's origin and AI generation.",
  "source": {
   "title": "Content Credentials — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry-classic/openai/concepts/content-credentials"
  }
 },
 {
  "id": "gen-178",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In addition to the manifest metadata, Content Credentials embeds a second, less visible signal in images generated by Azure OpenAI image models. What is that additional signal?",
  "options": [
   "A visible logo stamped in the bottom-right corner",
   "An invisible digital watermark embedded in the image",
   "A QR code linking to the prompt text",
   "An EXIF field containing the user's account name"
  ],
  "correct": [
   1
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Alongside the C2PA manifest, Content Credentials embeds an invisible digital watermark in AI-generated images, providing an additional means to identify the content as AI-generated.",
  "source": {
   "title": "Content Credentials — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry-classic/openai/concepts/content-credentials"
  }
 },
 {
  "id": "gen-179",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A compliance officer asks which standard underpins the tamper-evident provenance manifest that Azure OpenAI attaches to generated images through Content Credentials. Which industry standard is used?",
  "options": [
   "ONNX",
   "OpenTelemetry",
   "C2PA (Coalition for Content Provenance and Authenticity)",
   "OAuth 2.0"
  ],
  "correct": [
   2
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Credentials implements the C2PA (Coalition for Content Provenance and Authenticity) standard to record cryptographically signed, tamper-evident provenance in AI-generated images.",
  "source": {
   "title": "Content Credentials — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry-classic/openai/concepts/content-credentials"
  }
 },
 {
  "id": "gen-180",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A publisher wants to verify whether an image circulating online was produced by their Azure OpenAI deployment. Using Content Credentials, how can such an image be checked?",
  "options": [
   "By re-uploading it to the model, which returns the original prompt",
   "By measuring its file size against a stored table of known outputs",
   "By running sentiment analysis on any captions attached to it",
   "By inspecting the embedded C2PA content credentials/provenance manifest"
  ],
  "correct": [
   3
  ],
  "skill": 3,
  "sub": "3.3",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Because Content Credentials embeds a C2PA provenance manifest (and an invisible watermark) in generated images, the image's origin and AI-generated status can be verified by inspecting those embedded content credentials.",
  "source": {
   "title": "Content Credentials — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry-classic/openai/concepts/content-credentials"
  }
 },
 {
  "id": "gen-181",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer needs to add named entity recognition, key phrase extraction, and summarization to a customer-support portal without training separate models for each task. Which Azure service exposes all of these capabilities behind a single set of prebuilt REST and SDK operations?",
  "options": [
   "Azure AI Translator",
   "Azure AI Language",
   "Azure AI Document Intelligence",
   "Azure AI Content Safety"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure AI Language is a single service that provides prebuilt features including named entity recognition (NER), key phrase extraction, and summarization, so no per-task model training is required.",
  "source": {
   "title": "What is Azure AI Language? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/overview"
  }
 },
 {
  "id": "gen-182",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your team wants to expose Azure AI Language capabilities to a generative AI agent so the agent can call operations such as summarization and entity extraction as tools. Which Azure AI Language capability is designed to make these features available to agents through a standardized tool interface?",
  "options": [
   "The Language MCP server and Language agents",
   "A custom question answering knowledge base",
   "The Text Analytics for health container",
   "An Azure Functions trigger binding"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure AI Language provides an MCP server and Language agents so its capabilities can be surfaced to generative AI agents through a standardized tool interface.",
  "source": {
   "title": "What is Azure AI Language? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/overview"
  }
 },
 {
  "id": "gen-183",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer must redact sensitive data such as names, phone numbers, and email addresses from support transcripts before storing them. Which prebuilt Azure AI Language feature identifies and categorizes this information and can return a redacted version of the text?",
  "options": [
   "Key phrase extraction",
   "Language detection",
   "Personally Identifiable Information (PII) detection",
   "Sentiment analysis"
  ],
  "correct": [
   2
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "PII detection in Azure AI Language identifies and categorizes sensitive information in text and can return redacted text with the detected entities masked.",
  "source": {
   "title": "What is Azure AI Language? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/overview"
  }
 },
 {
  "id": "gen-184",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You want to determine whether product reviews express positive, neutral, or negative feelings, and you need the service to return a confidence score for each of those three labels. Which Azure AI Language capability should you use?",
  "options": [
   "Sentiment analysis",
   "Entity linking",
   "Text summarization",
   "Custom text classification"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Sentiment analysis returns positive, neutral, and negative labels along with confidence scores for the document and its sentences.",
  "source": {
   "title": "Sentiment analysis and opinion mining — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview"
  }
 },
 {
  "id": "gen-185",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A hotel wants to know not just the overall sentiment of a review but how guests feel about specific attributes such as \"room\" and \"service.\" Which feature associates opinions and their sentiment with the specific aspects being discussed?",
  "options": [
   "Named entity recognition",
   "Opinion mining (aspect-based sentiment)",
   "Language detection",
   "Key phrase extraction"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Opinion mining, also called aspect-based sentiment analysis, links opinions and their sentiment to specific aspects (targets) such as \"room\" or \"service\" within the text.",
  "source": {
   "title": "Sentiment analysis and opinion mining — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview"
  }
 },
 {
  "id": "gen-186",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When you call the sentiment analysis API on a multi-sentence document, at what levels does the service return sentiment labels and confidence scores?",
  "options": [
   "Only at the whole-document level",
   "Only at the individual word level",
   "Only for entities detected in the text",
   "At both the document level and the individual sentence level"
  ],
  "correct": [
   3
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Sentiment analysis returns labels and confidence scores at the document level and also for each sentence within the document.",
  "source": {
   "title": "Sentiment analysis and opinion mining — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview"
  }
 },
 {
  "id": "gen-187",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer submits a review that mixes praise and complaints, so the model finds a roughly equal blend of positive and negative sentiment across its sentences. Which document-level label does sentiment analysis assign in this situation?",
  "options": [
   "Mixed",
   "Neutral",
   "Undetermined",
   "Ambiguous"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "When a document contains a blend of positive and negative sentences, sentiment analysis returns a document-level label of \"mixed.\"",
  "source": {
   "title": "Sentiment analysis and opinion mining — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview"
  }
 },
 {
  "id": "gen-188",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A compliance team needs to detect and remove sensitive information not only from plain documents but also from multi-turn conversation transcripts between agents and customers. Which statement about Azure AI Language PII detection is correct?",
  "options": [
   "It only supports plain text documents and cannot process conversations",
   "It can classify PII but has no capability to redact it",
   "It requires training a custom model before any PII can be detected",
   "It supports detecting and redacting PII in text, conversations, and documents"
  ],
  "correct": [
   3
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "PII detection supports identifying, classifying, and redacting sensitive information across text, conversations, and documents using prebuilt models.",
  "source": {
   "title": "PII detection — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/overview"
  }
 },
 {
  "id": "gen-189",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants the PII service to redact only credit card numbers and US bank account numbers while leaving other detected categories such as person names in place. What is the recommended approach?",
  "options": [
   "Post-process the full entity list manually because categories cannot be filtered",
   "Disable redaction entirely and write a custom regex layer",
   "Specify the desired PII entity categories in the request so only those are returned or redacted",
   "Switch to sentiment analysis, which supports category filtering"
  ],
  "correct": [
   2
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The PII detection API lets you specify which entity categories to detect, so you can limit detection and redaction to categories such as financial identifiers.",
  "source": {
   "title": "PII detection — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/overview"
  }
 },
 {
  "id": "gen-190",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In the response from Azure AI Language PII detection, each detected item includes a category, a confidence score, and offset information. What does the offset information primarily allow a developer to do?",
  "options": [
   "Identify the exact location of the entity within the input text",
   "Rank the overall document sentiment",
   "Translate the entity into another language",
   "Measure the token cost of the request"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Offset (and length) information identifies where each detected PII entity appears in the input text, enabling precise location and custom redaction.",
  "source": {
   "title": "PII detection — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/overview"
  }
 },
 {
  "id": "gen-191",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An application must translate user-submitted messages across more than 100 languages using Microsoft's cloud translation API. Which service provides this text translation capability?",
  "options": [
   "Azure AI Language sentiment analysis",
   "Azure AI Speech",
   "Azure AI Document Intelligence",
   "Azure AI Translator (text translation)"
  ],
  "correct": [
   3
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure AI Translator's text translation feature supports translation across more than 100 languages and dialects through a cloud REST API.",
  "source": {
   "title": "Azure text translation — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/translator/text-translation/overview"
  }
 },
 {
  "id": "gen-192",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A localization team needs translations that better match their product terminology while still using a fully managed service, without building a translation model from scratch. Which Azure AI Translator capability best fits this need?",
  "options": [
   "Language detection only",
   "Profanity filtering",
   "Adaptive custom translation to tailor output to domain terminology",
   "Static dictionary lookup with no model involvement"
  ],
  "correct": [
   2
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure AI Translator supports adaptive and custom translation, letting teams tailor output to their domain-specific terminology beyond the general model.",
  "source": {
   "title": "Azure text translation — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/translator/text-translation/overview"
  }
 },
 {
  "id": "gen-193",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is deciding between two model approaches offered by Azure AI Translator's text translation API for a given request. Which two model families does the service let you choose between?",
  "options": [
   "Neural machine translation (NMT) and large language model (LLM) translation",
   "Statistical machine translation and rule-based translation",
   "Optical character recognition and neural translation",
   "Speech-to-text and text-to-speech models"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure text translation lets you choose between neural machine translation (NMT) and LLM-based translation models depending on the scenario.",
  "source": {
   "title": "Azure text translation — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/translator/text-translation/overview"
  }
 },
 {
  "id": "gen-194",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A translation workflow must produce output that respects a specified tone and correct grammatical gender for target languages that mark gender. Which Azure AI Translator capability addresses this requirement?",
  "options": [
   "Batch document indexing",
   "Key phrase extraction",
   "PII redaction",
   "Tone and gender controls in translation"
  ],
  "correct": [
   3
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Azure text translation offers tone and gender controls so output can respect a desired tone and correct grammatical gender where the target language marks it.",
  "source": {
   "title": "Azure text translation — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/translator/text-translation/overview"
  }
 },
 {
  "id": "gen-195",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are using Azure OpenAI chat completions to extract product fields from unstructured emails and must guarantee the response always conforms to a specific JSON shape your parser expects. Which feature enforces that the model output adheres to a supplied JSON Schema?",
  "options": [
   "Function calling with auto tool choice",
   "Structured outputs",
   "Prompt Shields",
   "The logit_bias parameter"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Structured outputs let you supply a JSON Schema and have the model reliably produce output that conforms to that schema, ideal for entity and field extraction.",
  "source": {
   "title": "Structured outputs — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/structured-outputs"
  }
 },
 {
  "id": "gen-196",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When enabling structured outputs against a JSON Schema, which schema requirement must the developer satisfy for the request to be accepted?",
  "options": [
   "The schema may only contain string-typed fields",
   "additionalProperties must be set to true on every object",
   "All fields must be marked as required and additionalProperties set to false",
   "The schema must omit the properties keyword entirely"
  ],
  "correct": [
   2
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "For structured outputs, every field must be listed as required and objects must set additionalProperties to false; optional fields are emulated with a union that includes null.",
  "source": {
   "title": "Structured outputs — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/structured-outputs"
  }
 },
 {
  "id": "gen-197",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer plans to use Azure OpenAI structured outputs to extract structured JSON from documents. Which limitation should they be aware of when designing the solution?",
  "options": [
   "Structured outputs only work with embeddings models",
   "Structured outputs are not currently supported with the Foundry Agents service or bring-your-own-data",
   "Structured outputs require the DALL-E image model",
   "Structured outputs disable all safety content filtering"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Structured outputs are used via Chat Completions/Responses and are not currently supported with the Foundry Agents service or bring-your-own-data scenarios.",
  "source": {
   "title": "Structured outputs — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/structured-outputs"
  }
 },
 {
  "id": "gen-198",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team must extract a person's name and organization from thousands of news articles and return each as typed JSON fields. They prefer a generative model with a strict schema rather than a prebuilt NER endpoint. Which approach aligns with using Azure OpenAI for this task?",
  "options": [
   "Send the article to sentiment analysis and read the entities from the score",
   "Use structured outputs with a JSON Schema defining name and organization fields",
   "Use the Translator API with a custom category",
   "Use PII redaction to output the extracted entities"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Structured outputs with a defined JSON Schema let a generative model extract entities such as name and organization into strict, typed JSON fields.",
  "source": {
   "title": "Structured outputs — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/structured-outputs"
  }
 },
 {
  "id": "gen-199",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is building a live captioning feature for a video conferencing app. Captions must appear on screen as participants speak, with only a fraction of a second of delay. Which Azure AI Speech transcription mode should the developer use?",
  "options": [
   "Batch transcription",
   "Fast transcription",
   "Custom speech evaluation",
   "Real-time speech to text"
  ],
  "correct": [
   3
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Real-time speech to text streams audio and returns transcription results as the audio is processed, making it the right choice for live, low-latency scenarios such as live captions.",
  "source": {
   "title": "Speech to text overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text"
  }
 },
 {
  "id": "gen-200",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A company has 50,000 recorded customer-support calls already stored in Azure Blob Storage and wants to transcribe all of them overnight without streaming audio in real time. Which transcription approach is most appropriate?",
  "options": [
   "Batch transcription",
   "Real-time speech to text",
   "Text to speech synthesis",
   "Speech translation"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Batch transcription asynchronously processes large volumes of pre-recorded audio files (for example, from a storage container) without a real-time streaming connection, which fits bulk overnight processing.",
  "source": {
   "title": "Speech to text overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text"
  }
 },
 {
  "id": "gen-201",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In a transcribed multi-party meeting, the output must attribute each utterance to a specific speaker (for example, 'Speaker 1', 'Speaker 2'). Which speech to text capability provides this?",
  "options": [
   "Language identification",
   "Profanity filtering",
   "Diarization",
   "Word-level timestamps"
  ],
  "correct": [
   2
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Diarization distinguishes between different speakers in the audio and attributes transcribed segments to each speaker, which is required for speaker-separated meeting transcripts.",
  "source": {
   "title": "Speech to text overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text"
  }
 },
 {
  "id": "gen-202",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An app receives incoming audio but does not know in advance which language a caller will speak. The app must automatically determine the spoken language before transcribing. Which speech to text feature should be enabled?",
  "options": [
   "Custom speech",
   "Diarization",
   "Language identification",
   "Pronunciation assessment"
  ],
  "correct": [
   2
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Language identification detects the language being spoken in the audio, allowing the service to select the correct locale for transcription when the input language is unknown.",
  "source": {
   "title": "Speech to text overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text"
  }
 },
 {
  "id": "gen-203",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer needs a quick, synchronous REST-based transcription of a short pre-recorded audio file and wants the full transcript returned in a single response rather than streaming or submitting a long-running batch job. Which speech to text option best fits?",
  "options": [
   "Real-time speech to text over WebSocket",
   "Fast transcription",
   "Batch transcription with a storage container",
   "Custom speech endpoint training"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Fast transcription returns transcription results synchronously and faster than real-time for pre-recorded audio, ideal when you need the whole transcript quickly in one API call.",
  "source": {
   "title": "Speech to text overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text"
  }
 },
 {
  "id": "gen-204",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A healthcare app's transcription frequently misrecognizes specialized drug names and clinical terminology that the base speech to text model was not trained on. What is the recommended way to improve recognition accuracy for this domain vocabulary?",
  "options": [
   "Switch from real-time to batch transcription",
   "Enable diarization on the base model",
   "Create and train a custom speech model with domain-specific data",
   "Increase the audio sample rate to 48 kHz"
  ],
  "correct": [
   2
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Custom speech lets you train a model on domain-specific audio and text so it recognizes specialized vocabulary and terminology that the base model handles poorly.",
  "source": {
   "title": "Custom speech overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/custom-speech-overview"
  }
 },
 {
  "id": "gen-205",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After training two custom speech models, a team wants to quantitatively compare how accurately each transcribes their test audio before deploying one to production. Which metric does custom speech use to measure recognition accuracy?",
  "options": [
   "Word error rate (WER)",
   "Mean opinion score (MOS)",
   "BLEU score",
   "Signal-to-noise ratio (SNR)"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Custom speech evaluates recognition quality using word error rate (WER), which quantifies how many words are wrongly recognized so you can compare models before deployment.",
  "source": {
   "title": "Custom speech overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/custom-speech-overview"
  }
 },
 {
  "id": "gen-206",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team has trained a custom speech model and validated its accuracy. To make the model available to their application for recognition requests, what must they do next?",
  "options": [
   "Publish the model to the Azure Marketplace",
   "Deploy the model to a custom endpoint",
   "Convert the model to an SSML voice font",
   "Register the model as a Foundry agent tool"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Once a custom speech model is trained and evaluated, you deploy it to a custom endpoint, which the application then targets for speech to text requests.",
  "source": {
   "title": "Custom speech overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/custom-speech-overview"
  }
 },
 {
  "id": "gen-207",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which type of training data would most directly improve a custom speech model's ability to correctly transcribe how specific in-domain phrases are actually spoken?",
  "options": [
   "A set of neural voice recordings for synthesis",
   "Audio recordings paired with their human-labeled transcripts",
   "A JSON schema describing the expected output fields",
   "A list of target translation languages"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Custom speech is trained with audio plus human-labeled transcripts (and related text data) so the model learns to recognize domain-specific speech accurately.",
  "source": {
   "title": "Custom speech overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/custom-speech-overview"
  }
 },
 {
  "id": "gen-208",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An accessibility app must convert written articles into natural-sounding spoken audio using high-quality neural voices. Which Azure AI Speech capability should the developer use?",
  "options": [
   "Speech to text",
   "Speech translation",
   "Language identification",
   "Text to speech"
  ],
  "correct": [
   3
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Text to speech synthesizes written text into natural-sounding audio using neural voices, which is exactly what a read-aloud accessibility feature requires.",
  "source": {
   "title": "Text to speech overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech"
  }
 },
 {
  "id": "gen-209",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants fine-grained control over synthesized speech output, including pronunciation, pitch, speaking rate, and pauses. Which mechanism does Azure AI text to speech provide for this?",
  "options": [
   "Word error rate tuning",
   "Speech Synthesis Markup Language (SSML)",
   "Diarization settings",
   "A JSON output schema"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "SSML (Speech Synthesis Markup Language) lets you control aspects of text to speech output such as pronunciation, pitch, rate, and pauses.",
  "source": {
   "title": "Text to speech overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech"
  }
 },
 {
  "id": "gen-210",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A brand wants a unique, recognizable synthetic voice for its virtual assistant that does not match any of the prebuilt neural voices. Which text to speech capability enables creating a one-of-a-kind branded voice?",
  "options": [
   "Custom voice",
   "Batch transcription",
   "Pronunciation assessment",
   "Language identification"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Custom voice lets organizations create a distinctive, brand-specific synthetic voice rather than relying only on prebuilt neural voices.",
  "source": {
   "title": "Text to speech overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech"
  }
 },
 {
  "id": "gen-211",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is adding a speech modality to a Foundry agent so it can respond to users with a spoken voice and even a talking avatar. Which Azure AI Speech feature provides the agent's synthesized voice output and avatar rendering?",
  "options": [
   "Custom speech endpoints",
   "Fast transcription",
   "Speech translation",
   "Text to speech (neural voices and avatar)"
  ],
  "correct": [
   3
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Text to speech supplies the agent's voice modality through neural/HD voices and can render a talking avatar, providing spoken responses for the agent.",
  "source": {
   "title": "Text to speech overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech"
  }
 },
 {
  "id": "gen-212",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A conference app must let an English speaker talk and have participants immediately see the transcript in Spanish. Which Azure AI Speech capability directly addresses translating spoken input into another language?",
  "options": [
   "Custom speech",
   "Diarization",
   "Speech translation",
   "Sentiment analysis"
  ],
  "correct": [
   2
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Speech translation performs real-time translation of spoken audio into another language, supporting speech-to-text and speech-to-speech translation scenarios.",
  "source": {
   "title": "Speech translation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-translation"
  }
 },
 {
  "id": "gen-213",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A travel app requires two people speaking different languages to hold a spoken conversation, each hearing the other's words rendered as audio in their own language. Which speech translation mode is required?",
  "options": [
   "Speech-to-text translation only",
   "Speech-to-speech translation",
   "Batch transcription",
   "Text to speech with SSML"
  ],
  "correct": [
   1
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Speech-to-speech translation converts spoken input in one language into spoken audio in another language, enabling a two-way spoken conversation across languages.",
  "source": {
   "title": "Speech translation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-translation"
  }
 },
 {
  "id": "gen-214",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants translated speech output to be spoken back using the customer's own brand voice rather than a generic voice. Which speech translation capability supports this?",
  "options": [
   "Bring your own voice (BYO voice)",
   "Word error rate reduction",
   "Language identification",
   "Selection-mark detection"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Speech translation supports bring-your-own-voice (BYO voice), so translated speech-to-speech output can be rendered in a custom brand voice.",
  "source": {
   "title": "Speech translation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-translation"
  }
 },
 {
  "id": "gen-215",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A live multilingual event needs continuous, low-latency interpretation of a presenter's speech into several target languages as they speak. Which Azure AI Speech translation feature is designed for this real-time interpretation scenario?",
  "options": [
   "Batch transcription",
   "Custom speech evaluation",
   "Dense captions",
   "Live Interpreter"
  ],
  "correct": [
   3
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Live Interpreter provides real-time speech translation/interpretation, making it suitable for continuously interpreting a presenter's speech at a live multilingual event.",
  "source": {
   "title": "Speech translation overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-translation"
  }
 },
 {
  "id": "gen-216",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team is choosing between real-time and batch speech to text. Which statement correctly distinguishes them?",
  "options": [
   "Real-time transcribes streaming audio as it arrives, while batch asynchronously processes sets of pre-recorded audio files",
   "Real-time only works on pre-recorded files, while batch streams live microphone input",
   "Batch is used for text to speech, while real-time is used for transcription",
   "Both require training a custom endpoint before use"
  ],
  "correct": [
   0
  ],
  "skill": 4,
  "sub": "4.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Real-time speech to text transcribes streaming audio as it is captured, whereas batch transcription asynchronously processes large collections of already-recorded audio files.",
  "source": {
   "title": "Speech to text overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text"
  }
 },
 {
  "id": "gen-217",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is building a RAG chat app over an internal knowledge base indexed in Azure AI Search. Answer quality is inconsistent because pure keyword search misses paraphrased questions while pure vector search sometimes returns loosely related passages. Which retrieval configuration does Microsoft recommend to maximize relevance of the grounding data passed to the LLM?",
  "options": [
   "Keyword (BM25) search only, with a higher 'top' value to widen recall",
   "Vector search only, using a larger embedding model dimension",
   "Hybrid search (keyword + vector) combined with L2 semantic ranking",
   "Fuzzy search with a synonym map applied to every field"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "For RAG in Azure AI Search, the recommended pattern is hybrid retrieval (keyword plus vector) with semantic ranking applied on top, which reranks results for the best relevance before they are sent to the model as grounding.",
  "source": {
   "title": "RAG and generative AI in Azure AI Search — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview"
  }
 },
 {
  "id": "gen-218",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Before indexing a large set of long PDFs for a RAG solution in Azure AI Search, a team wants to improve retrieval quality and keep grounding passages within the model's context window. According to the RAG guidance, what content-preparation step is most important?",
  "options": [
   "Split (chunk) documents into smaller passages so retrieval returns focused, relevant sections",
   "Store each entire document in a single field so no context is ever lost",
   "Disable scoring profiles so ranking is based only on raw term frequency",
   "Convert all documents to images and rely solely on OCR at query time"
  ],
  "correct": [
   0
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content preparation for RAG emphasizes chunking large documents into smaller passages; smaller chunks retrieve more precisely and fit within the LLM's context window, improving grounding quality.",
  "source": {
   "title": "RAG and generative AI in Azure AI Search — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview"
  }
 },
 {
  "id": "gen-219",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An architect is comparing the classic RAG pattern in Azure AI Search with the newer agentic retrieval approach for a complex question-answering assistant. Which statement best distinguishes agentic retrieval from a classic single hybrid query?",
  "options": [
   "Agentic retrieval removes the need for an index by querying source files directly",
   "Agentic retrieval only supports keyword search and cannot use vectors",
   "Agentic retrieval requires the app to write all subqueries manually before calling search",
   "Agentic retrieval uses an LLM to break a conversation into multiple focused subqueries that run in parallel, then merges the results"
  ],
  "correct": [
   3
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Agentic retrieval uses a language model to plan and decompose the user's question (and conversation context) into multiple subqueries executed in parallel, producing a merged, higher-recall result set—unlike a single classic hybrid query.",
  "source": {
   "title": "RAG and generative AI in Azure AI Search — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview"
  }
 },
 {
  "id": "gen-220",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants users to find product manuals by meaning rather than exact wording—for example, matching 'how do I reset my password' to a passage titled 'account credential recovery'. Which Azure AI Search capability is designed for this semantic-similarity matching?",
  "options": [
   "A synonym map that lists every possible phrasing manually",
   "Vector search, which uses embeddings to match on conceptual similarity via nearest-neighbor search",
   "A scoring profile that boosts documents by freshness",
   "Wildcard search on the title field"
  ],
  "correct": [
   1
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Vector search encodes content and queries as embeddings and matches them by nearest-neighbor (kNN) similarity, enabling retrieval based on semantic meaning rather than exact keywords.",
  "source": {
   "title": "Vector search overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/vector-search-overview"
  }
 },
 {
  "id": "gen-221",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team runs both a BM25 keyword query and a vector query against the same Azure AI Search index and wants a single ranked result set. Which mechanism does vector search use to fuse the two result lists into one ranking?",
  "options": [
   "It discards the keyword results and keeps only the vector matches",
   "It averages the raw cosine distances and BM25 scores directly",
   "Reciprocal Rank Fusion (RRF), which merges results from multiple queries into a unified ranking",
   "It requires two separate indexes and a manual join in application code"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Hybrid search in Azure AI Search combines keyword and vector results using Reciprocal Rank Fusion (RRF), which merges the separately ranked result sets into a single unified ranking.",
  "source": {
   "title": "Vector search overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/vector-search-overview"
  }
 },
 {
  "id": "gen-222",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A catalog search solution must let users query across both product text descriptions and product photos using a single query. Which vector search capability makes this possible in Azure AI Search?",
  "options": [
   "Multimodal search using multimodal embeddings that place text and images in the same vector space",
   "Running OCR on every image and searching only the extracted text",
   "Storing images as base64 strings in a searchable text field",
   "Using a scoring profile weighted toward image file names"
  ],
  "correct": [
   0
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Vector search supports multimodal scenarios: multimodal embeddings encode text and images into a shared vector space, so a single query can retrieve semantically similar content across both modalities.",
  "source": {
   "title": "Vector search overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/vector-search-overview"
  }
 },
 {
  "id": "gen-223",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer does not want to manage a separate pipeline that chunks documents and calls an embedding model before indexing. They want Azure AI Search to handle splitting and embedding automatically during indexing. Which feature should they use?",
  "options": [
   "Manual push-model indexing where the app pre-computes all vectors",
   "A synonym map combined with analyzers",
   "Knowledge store projections only",
   "Integrated vectorization, which chunks and generates embeddings during indexing via a skillset and vectorizer"
  ],
  "correct": [
   3
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Integrated vectorization performs data chunking and embedding generation inside the indexing pipeline using built-in skills and a vectorizer, removing the need for a separate external embedding pipeline.",
  "source": {
   "title": "Integrated vectorization — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/vector-search-integrated-vectorization"
  }
 },
 {
  "id": "gen-224",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "With integrated vectorization configured, a user submits a plain-text query to the index. How is that text query converted into a vector so it can be compared against the stored embeddings?",
  "options": [
   "The application must call the embedding model itself and pass the vector in the request",
   "A vectorizer attached to the vector field embeds the query text automatically at query time",
   "The query text is matched only with BM25 and never vectorized",
   "The index re-embeds every stored document on each query"
  ],
  "correct": [
   1
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Integrated vectorization attaches a vectorizer to the vector field so that text queries are automatically embedded at query time using the same model, letting clients send plain text instead of precomputed vectors.",
  "source": {
   "title": "Integrated vectorization — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/vector-search-integrated-vectorization"
  }
 },
 {
  "id": "gen-225",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is defining a skillset for integrated vectorization. Which two skills form the core chunk-then-embed sequence over long documents?",
  "options": [
   "OcrSkill followed by KeyPhraseExtractionSkill",
   "EntityRecognitionSkill followed by PIIDetectionSkill",
   "SplitSkill (Text Split) followed by an embedding skill such as AzureOpenAIEmbeddingSkill",
   "ImageAnalysisSkill followed by MergeSkill"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "In an integrated vectorization skillset, the Text Split (SplitSkill) skill chunks documents into passages and an embedding skill (for example AzureOpenAIEmbeddingSkill) generates the vector for each chunk.",
  "source": {
   "title": "Integrated vectorization — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/vector-search-integrated-vectorization"
  }
 },
 {
  "id": "gen-226",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An ingestion pipeline must index thousands of scanned invoice images so their printed text becomes searchable. Which built-in cognitive skill extracts the text from these images during enrichment?",
  "options": [
   "OCR skill (OcrSkill), which recognizes and extracts printed and handwritten text from images",
   "KeyPhraseExtractionSkill, which lists the main talking points",
   "LanguageDetectionSkill, which identifies the document language",
   "ShaperSkill, which restructures enriched output"
  ],
  "correct": [
   0
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The built-in OCR skill extracts printed and handwritten text from images so scanned content can be indexed and searched; it is a common first step in enrichment pipelines over image-based documents.",
  "source": {
   "title": "Skills for extra processing during indexing (skills reference) — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/cognitive-search-predefined-skills"
  }
 },
 {
  "id": "gen-227",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team needs to pull people, organizations, and locations out of ingested contract text and index them as filterable facets. Which category of built-in skill should they add to the skillset?",
  "options": [
   "A utility skill such as ConditionalSkill",
   "A vision skill such as ImageAnalysisSkill",
   "A geo skill for shaping coordinates",
   "A natural language processing skill such as EntityRecognitionSkill"
  ],
  "correct": [
   3
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Built-in natural language processing skills such as the Entity Recognition skill extract entities (people, organizations, locations) from text so they can be indexed as filterable, facetable fields.",
  "source": {
   "title": "Skills for extra processing during indexing (skills reference) — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/cognitive-search-predefined-skills"
  }
 },
 {
  "id": "gen-228",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "None of the built-in cognitive skills performs the domain-specific classification a company needs during indexing. They have deployed the logic as an HTTP endpoint. Which skill type lets the enrichment pipeline call that external code?",
  "options": [
   "SplitSkill, by pointing its output to the endpoint",
   "The Custom Web API skill (WebApiSkill), which calls a developer-provided REST endpoint during enrichment",
   "AzureOpenAIEmbeddingSkill, by overriding its model URL",
   "SentimentSkill, configured with a custom category list"
  ],
  "correct": [
   1
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "When no built-in skill fits, the Custom Web API skill (WebApiSkill) integrates custom logic into the enrichment pipeline by calling a developer-hosted REST endpoint and merging its response into the enriched document.",
  "source": {
   "title": "Skills for extra processing during indexing (skills reference) — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/cognitive-search-predefined-skills"
  }
 },
 {
  "id": "gen-229",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to stand up a working keyword-and-vector search index over blobs quickly, without hand-writing the data source, skillset, index, and indexer definitions. Which Azure portal tool provides this no-code path?",
  "options": [
   "The Azure AI Foundry playground",
   "Azure Data Factory copy activity",
   "The Import data (and Import and vectorize data) wizard in the Azure portal",
   "The Search Explorer query pane"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Import data wizard in the Azure portal is a no-code path that provisions the data source, skillset, index, and indexer, letting you build keyword, RAG, and multimodal search pipelines quickly.",
  "source": {
   "title": "Import data wizards in the Azure portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/search-import-data-portal"
  }
 },
 {
  "id": "gen-230",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In the Import and vectorize data wizard, a developer points at a blob container of long PDFs and wants the resulting index to support RAG. Which processing does the wizard configure for them?",
  "options": [
   "Automatic data chunking and vectorization (embedding generation) so the index is ready for vector and hybrid RAG queries",
   "Only BM25 keyword indexing with no vector fields",
   "A DirectQuery connection back to the blob storage at query time",
   "Row-level security rules mapped from the file ACLs"
  ],
  "correct": [
   0
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Import and vectorize data wizard sets up chunking and integrated vectorization, producing an index with vector fields suitable for vector, hybrid, and multimodal RAG queries.",
  "source": {
   "title": "Import data wizards in the Azure portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/search-import-data-portal"
  }
 },
 {
  "id": "gen-231",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After running the Import data wizard, a developer inspects what was created so they can later customize the pipeline in code. Which set of objects does the wizard generate?",
  "options": [
   "Only a single flat index with no indexer",
   "A logic app, an event grid subscription, and a function app",
   "A synonym map and a scoring profile only",
   "A data source, an index, an indexer, and (when enrichment is chosen) a skillset"
  ],
  "correct": [
   3
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Import data wizard creates the connected objects of a pull-model pipeline—a data source, an index, an indexer, and a skillset when enrichment or vectorization is selected—which you can then edit programmatically.",
  "source": {
   "title": "Import data wizards in the Azure portal — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/search-import-data-portal"
  }
 },
 {
  "id": "gen-232",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An agent must answer multi-part questions such as 'Compare our 2024 and 2025 refund policies and note any regional exceptions.' Rather than issuing one query, the team wants retrieval that decomposes the request. What does agentic retrieval in Azure AI Search do with such a query?",
  "options": [
   "It rejects compound questions and asks the user to simplify",
   "It uses an LLM to plan and split the question into focused subqueries, runs them, and returns a merged, grounded result",
   "It always returns the top three keyword matches regardless of the question shape",
   "It fine-tunes the embedding model on the fly for each request"
  ],
  "correct": [
   1
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Agentic retrieval uses a language model for query planning: it decomposes a complex, conversational question into multiple subqueries, executes them, and merges the results into a single grounded response.",
  "source": {
   "title": "Agentic retrieval in Azure AI Search — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview"
  }
 },
 {
  "id": "gen-233",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is configuring agentic retrieval and must define what content the retrieval agent can draw from. Which concept represents the retrievable content that a knowledge agent queries?",
  "options": [
   "A scoring profile bound to the query",
   "An analyzer chain applied at index time",
   "Knowledge sources (and the knowledge base) that reference the indexes the agent retrieves from",
   "A private endpoint on the search service"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Agentic retrieval organizes retrievable content through knowledge sources and a knowledge base that point to the underlying indexes; the knowledge agent plans subqueries against these sources.",
  "source": {
   "title": "Agentic retrieval in Azure AI Search — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview"
  }
 },
 {
  "id": "gen-234",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants their Foundry agent to call Azure AI Search agentic retrieval as a grounding tool so responses cite retrieved passages. How is agentic retrieval intended to be consumed in this workflow?",
  "options": [
   "It is exposed as a retrieval capability that connects to agents (for example Foundry agents / Foundry IQ) to ground their answers with citations",
   "It can only be queried from Search Explorer in the portal, not from code or agents",
   "It replaces the agent entirely and generates the final chat answer itself",
   "It must be reached by scraping the classic Import data wizard output"
  ],
  "correct": [
   0
  ],
  "skill": 5,
  "sub": "5.1",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Agentic retrieval is designed to connect to agent workflows—such as Foundry agents and Foundry IQ—serving as a grounding/retrieval tool that returns relevant, citable content for the agent's responses.",
  "source": {
   "title": "Agentic retrieval in Azure AI Search — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview"
  }
 },
 {
  "id": "gen-235",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is building an application that must extract printed and handwritten text from scanned PDFs and images, returning paragraphs, lines, and words with bounding coordinates, but does not need table structure or key-value pairs. Which Azure AI Document Intelligence model is the most appropriate and cost-effective choice?",
  "options": [
   "The prebuilt invoice model",
   "The Read (prebuilt-read) OCR model",
   "A custom classification model",
   "The general document model"
  ],
  "correct": [
   1
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Read OCR model is purpose-built to extract printed and handwritten text as paragraphs, lines, and words with coordinates, without the added structure analysis of Layout. Prebuilt invoice and custom models add unneeded capabilities and cost.",
  "source": {
   "title": "Read OCR model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/read"
  }
 },
 {
  "id": "gen-236",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team needs to extract not only text but also tables, selection marks (checkboxes), reading order, and document structure from a mixture of forms so they can preserve layout when passing content to a downstream process. Which Azure AI Document Intelligence prebuilt model should they use?",
  "options": [
   "The receipt model",
   "The Read model",
   "The business card model",
   "The Layout model"
  ],
  "correct": [
   3
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Layout model performs OCR and additionally extracts tables, selection marks, structure, reading order, and key-value pairs. The Read model returns text only, and the receipt/business card models are narrow prebuilt scenarios.",
  "source": {
   "title": "Layout model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/layout"
  }
 },
 {
  "id": "gen-237",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An architect wants a single service that produces a clean, grounded Markdown representation of documents that is optimized for use as context in a RAG pipeline and for agents, combining OCR, layout, and field extraction. Which Azure AI service is designed for this?",
  "options": [
   "Azure AI Translator",
   "Azure AI Content Understanding (document analysis)",
   "Azure AI Content Safety",
   "Azure AI Personalizer"
  ],
  "correct": [
   1
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding document analysis combines OCR, layout, and field extraction and can emit clean Markdown/grounded output specifically intended for RAG and agent scenarios.",
  "source": {
   "title": "Content Understanding document analysis — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/overview"
  }
 },
 {
  "id": "gen-238",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In Azure AI Content Understanding, a developer needs to define which fields to extract, choose between structured JSON and Markdown outputs, and select a base, RAG, domain, or custom configuration for a document. Which construct do they configure to control this behavior?",
  "options": [
   "A skillset",
   "An indexer",
   "An analyzer",
   "A vectorizer"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "In Content Understanding an analyzer is the configurable unit; base/RAG/domain/custom analyzers define the field schema and whether output is structured JSON or Markdown. Skillsets, indexers, and vectorizers are Azure AI Search constructs.",
  "source": {
   "title": "Analyzer configuration & reference — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference"
  }
 },
 {
  "id": "gen-239",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A company is evaluating Azure AI Document Intelligence to automate invoice and receipt processing at scale. How is the service best described?",
  "options": [
   "A machine-learning-based OCR and intelligent document processing service with both prebuilt and custom models",
   "A rule-based template engine that requires manual coordinate mapping for every document type",
   "A text-to-speech service for reading documents aloud",
   "A vector database for storing document embeddings"
  ],
  "correct": [
   0
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Document Intelligence is an ML-based OCR and intelligent document processing service offering prebuilt models (invoice, receipt, etc.) and the ability to train custom models. It is not a template engine, TTS service, or vector store.",
  "source": {
   "title": "What is Document Intelligence? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview"
  }
 },
 {
  "id": "gen-240",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer must generate a searchable PDF from scanned documents so users can select and search over the recognized text while preserving the original page images. Which Azure AI Document Intelligence model provides this searchable PDF output?",
  "options": [
   "The ID document model",
   "The custom neural model",
   "The Read OCR model",
   "The Content Safety model"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Read OCR model extracts text and can produce a searchable PDF that overlays recognized text on the original images. Custom neural, ID document, and Content Safety do not serve this purpose.",
  "source": {
   "title": "Read OCR model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/read"
  }
 },
 {
  "id": "gen-241",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A RAG solution is producing poor answers because tables in source PDFs are being flattened into unreadable runs of text, losing row and column relationships. Which capability should the ingestion step use to preserve tabular structure during extraction?",
  "options": [
   "The Read model, which returns only words and lines",
   "A sentiment analysis model",
   "A key phrase extraction skill",
   "The Layout model, which extracts tables along with rows, columns, and cell content"
  ],
  "correct": [
   3
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Layout model extracts tables including row/column structure and cell content, preserving relationships that plain OCR loses. The Read model returns text without table structure.",
  "source": {
   "title": "Layout model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/layout"
  }
 },
 {
  "id": "gen-242",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants Content Understanding to output document content that an LLM can consume directly as grounded context, keeping headings and structure readable rather than raw positional data. Which output format is most appropriate?",
  "options": [
   "A clean Markdown representation of the document",
   "Raw JPEG image tiles",
   "A binary embeddings blob",
   "An SSML document"
  ],
  "correct": [
   0
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding can emit a clean Markdown representation that preserves structure and is well suited as grounded context for LLMs and RAG. Embeddings and SSML are unrelated output types.",
  "source": {
   "title": "Content Understanding document analysis — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/overview"
  }
 },
 {
  "id": "gen-243",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A form-processing app must capture whether specific checkboxes on a scanned application are marked or unmarked. Which Azure AI Document Intelligence Layout capability directly reports this?",
  "options": [
   "Selection marks",
   "Key phrase extraction",
   "Language detection",
   "Named entity recognition"
  ],
  "correct": [
   0
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Layout model detects selection marks (checkboxes/radio buttons) and reports their selected or unselected state. The other options are Language service features, not Layout OCR outputs.",
  "source": {
   "title": "Layout model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/layout"
  }
 },
 {
  "id": "gen-244",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer needs to extract handwritten notes from scanned medical intake forms. Which statement about the Azure AI Document Intelligence Read model is correct?",
  "options": [
   "It only supports typed/printed text and cannot read handwriting",
   "It requires a custom-trained model before any text can be read",
   "It can extract both printed and handwritten text",
   "It only works on native digital PDFs, not scanned images"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Read OCR model extracts both printed and handwritten text from images and scanned documents without requiring custom training.",
  "source": {
   "title": "Read OCR model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/read"
  }
 },
 {
  "id": "gen-245",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An organization has a specialized contract type with unique fields that no prebuilt model captures. They want to extract those fields reliably. Which Azure AI Document Intelligence capability addresses this?",
  "options": [
   "Only the Read model, since custom extraction is not supported",
   "Using Content Safety to score the document",
   "Switching to Azure AI Translator",
   "Training a custom model to extract the organization-specific fields"
  ],
  "correct": [
   3
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Document Intelligence supports custom models that you train to extract fields specific to your document types when prebuilt models do not cover them.",
  "source": {
   "title": "What is Document Intelligence? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview"
  }
 },
 {
  "id": "gen-246",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer is configuring a Content Understanding analyzer and wants a configuration pre-tuned to produce clean output specifically for retrieval-augmented generation ingestion. Which analyzer type should they select?",
  "options": [
   "A speech transcription analyzer",
   "A RAG analyzer",
   "A translation analyzer",
   "A moderation analyzer"
  ],
  "correct": [
   1
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding provides analyzer types including base, RAG, domain, and custom; the RAG analyzer is oriented toward producing clean grounded output for retrieval scenarios.",
  "source": {
   "title": "Analyzer configuration & reference — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference"
  }
 },
 {
  "id": "gen-247",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When correct reading order matters — for example a multi-column newsletter that OCR might otherwise interleave across columns — which Azure AI Document Intelligence model reconstructs the logical reading order of the content?",
  "options": [
   "The receipt model",
   "The Content Safety model",
   "The Layout model",
   "The key phrase skill"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Layout model analyzes document structure and reading order in addition to OCR, so multi-column content is reconstructed in logical order rather than raw scan order.",
  "source": {
   "title": "Layout model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/layout"
  }
 },
 {
  "id": "gen-248",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer needs both extracted text AND specific business fields (such as vendor, total, and date) captured from documents in one Content Understanding call. Which combination of capabilities does document analysis provide to satisfy this?",
  "options": [
   "Only OCR, with field extraction requiring a separate service",
   "Only translation and language detection",
   "Only field extraction, with no OCR",
   "OCR, layout, and field extraction together"
  ],
  "correct": [
   3
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding document analysis combines OCR, layout, and field extraction in a single flow, so text and defined fields are returned together.",
  "source": {
   "title": "Content Understanding document analysis — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/overview"
  }
 },
 {
  "id": "gen-249",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A downstream system requires programmatic access to extracted fields as key/value data with strict typing rather than prose. Which Content Understanding analyzer output format best fits this requirement?",
  "options": [
   "Structured JSON output",
   "A rendered PNG",
   "Plain narrative Markdown only",
   "An audio WAV file"
  ],
  "correct": [
   0
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding analyzers can produce structured JSON output for programmatic field consumption, as an alternative to the Markdown output used for grounded context.",
  "source": {
   "title": "Analyzer configuration & reference — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference"
  }
 },
 {
  "id": "gen-250",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer must extract key-value pairs (such as 'Invoice Number: 12345') from semi-structured forms while also keeping general layout, without training a custom model. Which Azure AI Document Intelligence prebuilt model provides key-value pair extraction along with OCR and structure?",
  "options": [
   "The Read model",
   "The Content Safety model",
   "The Layout model",
   "The Translator model"
  ],
  "correct": [
   2
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "The Layout model extracts key-value pairs in addition to text, tables, selection marks, and structure, without requiring a custom-trained model.",
  "source": {
   "title": "Layout model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/layout"
  }
 },
 {
  "id": "gen-251",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A solution ingests documents, images, audio, and video and needs one platform capability to produce grounded content representations for agents across these modalities. Which Azure AI service is positioned for this multimodal content extraction?",
  "options": [
   "Azure Key Vault",
   "Azure AI Content Understanding",
   "Azure Monitor",
   "Azure Blob lifecycle management"
  ],
  "correct": [
   1
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "Content Understanding provides multimodal analysis (including documents) and produces grounded representations suitable for RAG and agents. Key Vault, Monitor, and Blob lifecycle are infrastructure services, not extraction services.",
  "source": {
   "title": "Content Understanding document analysis — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/overview"
  }
 },
 {
  "id": "gen-252",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer must choose between the Read and Layout prebuilt models. The requirement is minimal processing to get raw text only, with the lowest complexity, from a large batch of plain-text scanned pages. Which choice and rationale is correct?",
  "options": [
   "Layout, because it is required to return any text at all",
   "Read, because it returns text (paragraphs/lines/words) without the extra table and structure analysis of Layout",
   "Layout, because Read cannot process scanned images",
   "Read, because it is the only model that supports tables and selection marks"
  ],
  "correct": [
   1
  ],
  "skill": 5,
  "sub": "5.2",
  "confidence": "high",
  "set": null,
  "section": null,
  "topic": null,
  "explanation": "For plain text extraction the Read model returns paragraphs, lines, and words without the additional table/structure analysis Layout performs, making it the simpler, appropriate choice. Tables and selection marks are Layout features, not Read.",
  "source": {
   "title": "Read OCR model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/read"
  }
 }
];
