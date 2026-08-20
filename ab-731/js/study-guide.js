/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-731 Study Guide Taxonomy
// Maps exactly to the official Microsoft study guide structure

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Identify the business value of generative AI solutions",
    weight: "35–40%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Identify the foundational concepts of generative AI",
        bullets: [
          { slug: "genai-vs-other-ai", label: "Describe the differences between generative AI and other types of AI" },
          { slug: "select-genai-solution", label: "Select a generative AI solution to meet a business need" },
          { slug: "model-types", label: "Describe the differences between AI models, including fine-tuned and pretrained models" },
          { slug: "cost-drivers", label: "Explain the cost drivers in generative AI usage, including tokens and ROI" },
          { slug: "challenges", label: "Identify the challenges of using generative AI, including fabrications, reliability, and bias" },
          { slug: "business-value", label: "Identify when generative AI can provide business value, including scalability and automation" }
        ]
      },
      {
        code: "1B",
        title: "Identify benefits and capabilities of generative AI solutions",
        bullets: [
          { slug: "prompt-impact", label: "Describe the impact of prompt engineering" },
          { slug: "prompt-techniques", label: "Understand techniques of prompt engineering" },
          { slug: "grounding", label: "Identify business requirements for grounding solutions" },
          { slug: "rag", label: "Understand how RAG is used for AI solutions" },
          { slug: "data-impact", label: "Understand the impact of data on AI solutions (type, quality, representative datasets)" },
          { slug: "secure-ai", label: "Describe the importance of secure AI" },
          { slug: "ml-value", label: "Identify scenarios when machine learning adds value" },
          { slug: "ml-lifecycle", label: "Describe the lifecycle of a machine learning solution" },
          { slug: "security-considerations", label: "Identify security considerations for AI systems (app, data, auth)" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Identify benefits, capabilities, and opportunities for Microsoft's AI apps and services",
    weight: "35–40%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Identify benefits and capabilities of Microsoft 365 Copilot and Microsoft Copilot",
        bullets: [
          { slug: "copilot-mapping", label: "Map business processes and use cases to Copilot" },
          { slug: "copilot-versions", label: "Understand differences in capabilities between versions of Copilot" },
          { slug: "copilot-chat", label: "Understand capabilities of Microsoft 365 Copilot Chat (web and mobile)" },
          { slug: "copilot-apps", label: "Understand capabilities of the Copilot experience in M365 apps" },
          { slug: "copilot-studio", label: "Understand capabilities of Microsoft Copilot Studio" },
          { slug: "microsoft-graph", label: "Understand capabilities of Microsoft Graph" },
          { slug: "integrated-ai", label: "Identify benefits of an integrated Microsoft AI solution (risk, safety)" },
          { slug: "ai-services-mapping", label: "Map business processes to Microsoft's AI apps and services" },
          { slug: "researcher-analyst", label: "Identify when to use Researcher or Analyst in Copilot" },
          { slug: "buy-extend-build", label: "Identify when to build, buy, or extend (extensibility framework)" }
        ]
      },
      {
        code: "2B",
        title: "Identify benefits and capabilities of Foundry Tools",
        bullets: [
          { slug: "foundry-mapping", label: "Map business processes and use cases to Foundry Tools" },
          { slug: "azure-ai-services", label: "Identify capabilities of Azure AI services (Vision, Search, Foundry)" },
          { slug: "model-matching", label: "Match an AI model to a business need" },
          { slug: "foundry-benefits", label: "Identify benefits of Microsoft Foundry (scalability, security)" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Identify an implementation and adoption strategy for Microsoft's AI apps and services",
    weight: "20–25%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Align an AI strategy with Microsoft responsible AI policies",
        bullets: [
          { slug: "responsible-ai-importance", label: "Explain the importance of responsible AI" },
          { slug: "governance-principles", label: "Establish governance principles for AI use" },
          { slug: "ai-council", label: "Establish an AI council to guide strategy, oversight, and alignment" },
          { slug: "responsible-ai-standards", label: "Ensure AI solutions meet responsible AI standards (fairness, safety, privacy, inclusiveness, transparency, accountability)" }
        ]
      },
      {
        code: "3B",
        title: "Plan for AI adoption across the organization",
        bullets: [
          { slug: "adoption-team", label: "Establish an adoption team" },
          { slug: "adoption-barriers", label: "Identify common barriers to adoption" },
          { slug: "ai-champions", label: "Establish an AI champions program" },
          { slug: "adoption-impacts", label: "Understand potential impacts to data, security, privacy, and cost" },
          { slug: "copilot-licensing", label: "Understand Copilot license types (pay-as-you-go, monthly, M365)" },
          { slug: "azure-subscriptions", label: "Understand Azure AI subscription models (pay-as-you-go, prepaid)" }
        ]
      }
    ]
  }
];
