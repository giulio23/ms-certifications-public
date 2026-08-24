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
// AI-103 Study Guide Taxonomy
// Maps to the official Microsoft AI-103 study guide
// (Developing AI Apps and Agents on Azure)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Plan and manage an Azure AI solution",
    weight: "25–30%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Choose the appropriate Foundry services for generative AI and agents",
        bullets: [
          { slug: "choose-model", label: "Choose a model per task (LLM, SLM, multimodal, Foundry Tools)" },
          { slug: "choose-services", label: "Choose Foundry services for generation, grounding, vector search, agent workflows, multimodal" },
          { slug: "retrieval-indexing", label: "Choose a retrieval and indexing method" },
          { slug: "agent-integration", label: "Choose memory, tool, and knowledge integration for agents" }
        ]
      },
      {
        code: "1B",
        title: "Set up AI solutions in Foundry",
        bullets: [
          { slug: "design-infra", label: "Design Azure infrastructure for AI apps and agents" },
          { slug: "deployment-options", label: "Choose deployment options; configure model & agent deployments" },
          { slug: "cicd-foundry", label: "Integrate Foundry projects with CI/CD pipelines" }
        ]
      },
      {
        code: "1C",
        title: "Manage, monitor, and secure AI systems",
        bullets: [
          { slug: "quotas-cost", label: "Manage quotas, scaling, rate limits, and cost" },
          { slug: "monitor-quality", label: "Monitor performance, drift, safety events, grounding quality; index health" },
          { slug: "secure-identity", label: "Security: managed identity, private networking, keyless credentials, RBAC" }
        ]
      },
      {
        code: "1D",
        title: "Implement responsible AI across generative AI and agentic systems",
        bullets: [
          { slug: "safety-filters", label: "Safety filters, guardrails, risk detection, content moderation" },
          { slug: "rai-instrumentation", label: "RAI instrumentation: evaluators, safety evaluations, explanation tooling" },
          { slug: "auditing", label: "Auditing: trace logging, provenance metadata, approval workflows" },
          { slug: "govern-agents", label: "Govern agent behavior: oversight modes, constraints, tool-access controls" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Implement generative AI and agentic solutions",
    weight: "30–35%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Build generative applications by using Foundry",
        bullets: [
          { slug: "deploy-consume-models", label: "Deploy and consume LLM, small, code, and multimodal models" },
          { slug: "rag", label: "Implement retrieval-augmented generation (RAG)" },
          { slug: "workflows-reasoning", label: "Workflows, tool-augmented flows, multistep reasoning" },
          { slug: "evaluate-apps", label: "Evaluate models & apps (fabrications, relevance, quality, safety)" },
          { slug: "foundry-sdk", label: "Foundry SDKs & connectors; connect an app to a Foundry project" }
        ]
      },
      {
        code: "2B",
        title: "Build agents by using Foundry",
        bullets: [
          { slug: "agent-design", label: "Agent roles, goals, conversation tracking, tool schemas" },
          { slug: "agent-rag-tools", label: "Retrieval, function-calling, memory; agent tools (APIs, knowledge, search, custom)" },
          { slug: "multi-agent", label: "Implement orchestrated multi-agent solutions" },
          { slug: "autonomous-approval", label: "Autonomous/semiautonomous workflows with safeguards & approval; monitoring & error analysis" }
        ]
      },
      {
        code: "2C",
        title: "Optimize and operationalize generative AI systems",
        bullets: [
          { slug: "tune-generation", label: "Tune generation: prompt engineering, model parameters" },
          { slug: "reflection", label: "Model reflection, chain-of-thought evaluations, self-critique loops" },
          { slug: "observability", label: "Observability: tracing, token analytics, safety signals, latency" },
          { slug: "orchestrate-models", label: "Orchestrate multiple models, flows, or hybrid LLM + rules engines" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Implement computer vision solutions",
    weight: "10–15%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Design and implement image- and video-generation solutions",
        bullets: [
          { slug: "generate-images", label: "Generate images from text prompts and reference media" },
          { slug: "generate-video", label: "Generate videos from text prompts and reference media" },
          { slug: "image-editing", label: "Image editing: inpainting, mask-based edits, prompt-driven modifications" },
          { slug: "generation-controls", label: "Apply appropriate generation and editing controls" }
        ]
      },
      {
        code: "3B",
        title: "Design and implement multimodal understanding workflows",
        bullets: [
          { slug: "analyze-visual", label: "Analyze visual context with multimodal models; captions" },
          { slug: "visual-qa", label: "Visual question-answering; alt-text & accessibility descriptions" },
          { slug: "content-understanding", label: "Azure Content Understanding visual extraction; single-task & pro-mode pipelines" },
          { slug: "video-object", label: "Video analysis; identify objects, components, or regions" }
        ]
      },
      {
        code: "3C",
        title: "Implement responsible AI for multimodal content",
        bullets: [
          { slug: "filter-visual", label: "Filter unsafe or disallowed visual content" },
          { slug: "image-injection", label: "Detect & mitigate indirect prompt injection via text embedded in images" },
          { slug: "visual-policy", label: "Enforce visual policy: watermarks, prohibited symbols, brand usage" }
        ]
      }
    ]
  },
  {
    skill: 4,
    title: "Implement text analysis solutions",
    weight: "10–15%",
    color: "violet",
    sections: [
      {
        code: "4A",
        title: "Apply language model text analysis",
        bullets: [
          { slug: "extract-structured", label: "Extract entities, topics, summaries, structured JSON" },
          { slug: "sentiment-safety", label: "Detect sentiment, tone, safety issues, sensitive content" },
          { slug: "translation", label: "Translate text with Azure Translator or LLM-powered flows" },
          { slug: "customize-outputs", label: "Customize outputs for domain tasks" }
        ]
      },
      {
        code: "4B",
        title: "Implement speech solutions",
        bullets: [
          { slug: "stt-tts", label: "Speech-to-text and text-to-speech" },
          { slug: "speech-agent", label: "Speech as an agent modality incl. custom speech models" },
          { slug: "speech-translation", label: "Multimodal reasoning from audio; speech translation" }
        ]
      }
    ]
  },
  {
    skill: 5,
    title: "Implement information extraction solutions",
    weight: "10–15%",
    color: "rose",
    sections: [
      {
        code: "5A",
        title: "Build retrieval and grounding pipelines",
        bullets: [
          { slug: "ingest-index", label: "Ingest and index content (documents, images, audio, video)" },
          { slug: "search-types", label: "Semantic, hybrid, and vector search for grounding" },
          { slug: "enrichment-ocr", label: "Enrichment (custom/built-in skills); RAG ingestion incl. OCR" },
          { slug: "connect-retrieval", label: "Connect retrieval pipelines to workflows and agent tools" }
        ]
      },
      {
        code: "5B",
        title: "Extract content from documents",
        bullets: [
          { slug: "multimodal-extract", label: "Multimodal extraction (OCR + layout analysis + field extraction)" },
          { slug: "grounded-representations", label: "Clean grounded representations via Content Understanding" },
          { slug: "analyzers-markdown", label: "Analyzers for structured or markdown outputs" }
        ]
      }
    ]
  }
];
