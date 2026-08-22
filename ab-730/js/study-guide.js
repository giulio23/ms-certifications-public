/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-730 Study Guide Taxonomy
// Maps exactly to the official Microsoft AB-730 study guide structure

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Understand generative AI fundamentals",
    weight: "25–30%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Understand generative AI capabilities across Microsoft 365 experiences",
        bullets: [
          { slug: "copilot-privacy", label: "Understand how Copilot keeps your organization's information private and secure" },
          { slug: "context-affects-responses", label: "Understand how context (work files, web data, app) affects Copilot responses" },
          { slug: "chat-vs-agent", label: "Understand the difference between a chat experience and an agent experience" },
          { slug: "create-own-agent", label: "Understand the use case for creating your own agent" },
          { slug: "copilot-across-apps", label: "Understand differences in Copilot experience across M365 apps" }
        ]
      },
      {
        code: "1B",
        title: "Identify responsible AI and data protection practices",
        bullets: [
          { slug: "common-risks", label: "Identify common risks including fabrications, prompt injection, and over-reliance" },
          { slug: "verification-steps", label: "Select verification steps appropriate to the task (citation checks, human review)" },
          { slug: "sensitive-data-risks", label: "Recognize and mitigate risks to sensitive data" },
          { slug: "data-protection-restrictions", label: "Understand how data protection restricts prompt results" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Manage prompts and conversations by using AI",
    weight: "35–40%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Create and manage prompts in Microsoft 365 Copilot",
        bullets: [
          { slug: "effective-prompts", label: "Understand how to create an effective prompt" },
          { slug: "reference-resources", label: "Select appropriate resources to reference in a prompt" },
          { slug: "save-prompt", label: "Save a prompt" },
          { slug: "schedule-prompt", label: "Schedule a prompt" },
          { slug: "share-prompt", label: "Share a prompt" }
        ]
      },
      {
        code: "2B",
        title: "Manage conversations in Copilot",
        bullets: [
          { slug: "find-conversations", label: "Understand how to find previous conversations" },
          { slug: "delete-chat", label: "Delete a chat" },
          { slug: "rename-chat", label: "Rename a chat" },
          { slug: "add-to-notebook", label: "Add a conversation to a notebook" }
        ]
      },
      {
        code: "2C",
        title: "Create and manage Microsoft 365 Copilot agents",
        bullets: [
          { slug: "agent-store-vs-create", label: "Understand when to use Agent Store versus creating a new agent" },
          { slug: "create-agent-template", label: "Create an agent by using a template" },
          { slug: "configure-agent-knowledge", label: "Configure an agent that has knowledge" },
          { slug: "configure-agent-settings", label: "Configure agent settings (instructions, capabilities, suggested prompts)" },
          { slug: "share-agent", label: "Share an agent with team members" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Draft and analyze business content by using AI",
    weight: "25–30%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Draft business documents and communications",
        bullets: [
          { slug: "create-doc-from-prompt", label: "Create a new document from a prompt" },
          { slug: "generate-from-existing", label: "Generate a document from an existing document" },
          { slug: "management-summary", label: "Generate a management summary based on a document" },
          { slug: "move-data-between-apps", label: "Move data and insights between Microsoft 365 apps" }
        ]
      },
      {
        code: "3B",
        title: "Manage meetings and collaboration",
        bullets: [
          { slug: "copilot-for-meetings", label: "Describe how to use Copilot for meetings" },
          { slug: "copilot-pages", label: "Describe how to use Copilot Pages for collaboration" },
          { slug: "copilot-memory", label: "Describe how Copilot uses memory and instructions" }
        ]
      }
    ]
  }
];
