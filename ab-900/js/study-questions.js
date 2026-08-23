/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-900 Copilot & Agent Administration Fundamentals - Study-mode Questions
// COURSE-DERIVED: each question is written from a specific Microsoft Learn course unit or the
// official Learn doc the course points to, and links to it. correct = 0-based index.

const STUDY_QUESTIONS = [
  // ---- Domain 1 ----
  {
    id: 101, skill: 1, section: "1A", bullet: "m365-licenses",
    topic: "License Assignment Constraints",
    question: "To which of the following can a Microsoft 365 Copilot license be assigned?",
    options: [
      "Individual user accounts (or groups of individual users)",
      "Distribution lists",
      "Shared mailboxes",
      "SharePoint sites"
    ],
    correct: 0,
    explanation: "Administrators can only assign Copilot licenses to individual user accounts (or groups of individual users). Licenses can't be assigned to distribution lists, shared mailboxes, or other non-user entities, and the user must also hold a qualifying base license.",
    source: { title: "Implement Microsoft 365 Copilot: Assign licenses (Training)", url: "https://learn.microsoft.com/training/modules/implement-microsoft-365-copilot/6-assign-your-microsoft-365-copilot-licenses" }
  },
  {
    id: 102, skill: 1, section: "1B", bullet: "zero-trust",
    topic: "Assume Breach",
    question: "Verifying end-to-end encryption, segmenting access, and using analytics to drive threat detection supports which Zero Trust principle?",
    options: ["Verify explicitly", "Use least privilege access", "Assume breach", "Trust the network"],
    correct: 2,
    explanation: "The 'assume breach' principle minimizes blast radius and segments access, verifies end-to-end encryption, and uses analytics to gain visibility, drive threat detection, and improve defenses.",
    source: { title: "Zero Trust deployment plan with Microsoft 365", url: "https://learn.microsoft.com/security/zero-trust/microsoft-365-zero-trust" }
  },
  {
    id: 103, skill: 1, section: "1B", bullet: "defender-xdr",
    topic: "Defender for Office 365",
    question: "Which Microsoft Defender service primarily protects email and collaboration tools against phishing, business email compromise, and malware?",
    options: [
      "Microsoft Defender for Office 365",
      "Microsoft Entra ID Protection",
      "SharePoint Advanced Management",
      "Microsoft Purview DLP"
    ],
    correct: 0,
    explanation: "Microsoft Defender for Office 365 is a cloud-based email-filtering service that protects against advanced threats to email and collaboration (phishing, BEC, malware) and is a key component of the broader Microsoft Defender XDR solution.",
    source: { title: "Zero Trust with Microsoft Defender for Office 365", url: "https://learn.microsoft.com/defender-office-365/zero-trust-with-microsoft-365-defender-office-365" }
  },
  {
    id: 104, skill: 1, section: "1C", bullet: "conditional-access",
    topic: "Security Defaults vs Conditional Access",
    question: "For editions of Microsoft 365 that don't support Conditional Access, what can an organization enable to require MFA for all accounts?",
    options: ["Security defaults", "Sensitivity labels", "Retention policies", "Distribution lists"],
    correct: 0,
    explanation: "Security defaults help protect against identity-related attacks and can require MFA for all accounts; they're available to all customers and are useful where Conditional Access (which requires Microsoft Entra ID P1) isn't available.",
    source: { title: "What is Conditional Access? (security defaults)", url: "https://learn.microsoft.com/entra/identity/conditional-access/overview" }
  },
  {
    id: 105, skill: 1, section: "1C", bullet: "sso",
    topic: "SSO and Identity Risk",
    question: "Why does consolidating app access behind single sign-on (SSO) with Microsoft Entra ID improve security as well as usability?",
    options: [
      "It centralizes authentication so policies (like MFA and Conditional Access) and monitoring apply consistently, reducing the number of separate credentials",
      "It stores passwords in plain text for convenience",
      "It removes the need for any authentication",
      "It disables auditing"
    ],
    correct: 0,
    explanation: "With apps centrally authenticating through Microsoft Entra ID and SSO, users have fewer separate credentials, and security controls (MFA, Conditional Access) and monitoring apply consistently — improving both the user experience and the security posture.",
    source: { title: "What is single sign-on (SSO)? — Microsoft Entra", url: "https://learn.microsoft.com/entra/identity/enterprise-apps/what-is-single-sign-on" }
  },

  // ---- Domain 2 ----
  {
    id: 106, skill: 2, section: "2A", bullet: "purview-info-protection",
    topic: "Information Protection Building Blocks",
    question: "Which capabilities does Microsoft Purview Information Protection use to identify and protect sensitive data?",
    options: [
      "Sensitivity labels, trainable classifiers, and sensitive information types",
      "Teams channels and meeting policies",
      "Blob access tiers",
      "Distribution lists"
    ],
    correct: 0,
    explanation: "Information Protection uses sensitivity labels, trainable classifiers, and sensitive information types to define and apply protection policies to sensitive data across clouds, apps, and devices.",
    source: { title: "Learn about Data Security Posture Management (Information Protection)", url: "https://learn.microsoft.com/purview/data-security-posture-management" }
  },
  {
    id: 107, skill: 2, section: "2A", bullet: "purview-dspm-ai",
    topic: "DSPM for AI — One-click Policies",
    question: "What do the 'one-click policies' in DSPM for AI help an administrator do?",
    options: [
      "Quickly apply recommended protections (e.g., sensitivity-label policies) to reduce AI data risks",
      "Delete the tenant",
      "Disable Microsoft Entra ID",
      "Create Teams channels"
    ],
    correct: 0,
    explanation: "DSPM for AI offers one-click policies that let admins quickly apply recommended protections — such as sensitivity labels and policies — from a recommendation or remediation action, helping reduce oversharing and AI data risks fast.",
    source: { title: "Use Microsoft Purview for Microsoft 365 Copilot (DSPM for AI)", url: "https://learn.microsoft.com/purview/ai-m365-copilot" }
  },
  {
    id: 108, skill: 2, section: "2C", bullet: "governance-risk-tools",
    topic: "Communication Compliance",
    question: "Which Microsoft Purview solution helps detect policy violations in communications (such as inappropriate or risky messages)?",
    options: [
      "Communication Compliance",
      "Conditional Access",
      "Single sign-on",
      "Block download policy"
    ],
    correct: 0,
    explanation: "Microsoft Purview Communication Compliance helps identify policy violations in communications. It's one of the governance solutions (alongside Compliance Manager, activity explorer, eDiscovery, and DSPM for AI) supported for monitoring risk across Microsoft 365 and Copilot.",
    source: { title: "Use Microsoft Purview for Microsoft 365 Copilot (capabilities)", url: "https://learn.microsoft.com/purview/ai-m365-copilot" }
  },
  {
    id: 109, skill: 2, section: "2B", bullet: "copilot-protections",
    topic: "Responsible AI & Copyright Commitment",
    question: "Which statement reflects how Microsoft 365 Copilot approaches responsible AI and customer outputs?",
    options: [
      "Copilot outputs are guaranteed 100% factual and need no review",
      "Microsoft follows responsible AI principles (privacy, security, inclusiveness, transparency), users should review outputs, and the Copilot Copyright Commitment defends customers who use the built-in guardrails",
      "Microsoft claims ownership of all customer outputs",
      "Copilot disables all content filtering"
    ],
    correct: 1,
    explanation: "Copilot adheres to responsible AI principles and isn't guaranteed 100% factual, so users should review outputs. Microsoft doesn't claim ownership of outputs and, under the Copilot Copyright Commitment, defends commercial customers against certain copyright claims when they use the built-in guardrails and content filters.",
    source: { title: "Examine how Microsoft 365 Copilot uses your proprietary business data (responsible AI)", url: "https://learn.microsoft.com/training/modules/examine-data-security-microsoft-365-copilot/2-examine-copilot-uses-proprietary-business-data" }
  },
  {
    id: 110, skill: 2, section: "2D", bullet: "sharepoint-oversharing",
    topic: "Data Access Governance Reports",
    question: "Which SharePoint Advanced Management feature helps you quickly identify sites with potentially overshared content (e.g., 'Everyone Except External Users' or 'Anyone' links)?",
    options: [
      "Data access governance (DAG) reports",
      "Exchange mail flow rules",
      "Microsoft Entra Conditional Access",
      "Teams meeting policies"
    ],
    correct: 0,
    explanation: "SharePoint Advanced Management's data access governance reports identify sites containing potentially overshared or sensitive content — such as usage of 'Everyone Except External Users', 'People in your organization', and 'Anyone' sharing links — so you can apply appropriate controls before enabling Copilot.",
    source: { title: "Implement SharePoint Advanced Management tools to prepare for Copilot (Training)", url: "https://learn.microsoft.com/training/modules/implement-microsoft-365-copilot/3-implement-sharepoint-advanced-management-tools" }
  },
  {
    id: 111, skill: 2, section: "2D", bullet: "sharepoint-oversharing",
    topic: "Block Download Policy",
    question: "Which SharePoint Advanced Management policy lets users view files in the browser but blocks downloading, printing, or syncing — reducing accidental data loss?",
    options: [
      "Block download policy",
      "Restricted Content Discovery (RCD)",
      "Retention policy",
      "Sensitivity label"
    ],
    correct: 0,
    explanation: "The Block download policy for SharePoint and OneDrive sites gives users browser-only access — no download, print, or sync — letting them stay productive while reducing the risk of accidental data loss. It's enabled via a PowerShell cmdlet (Set-SPOSite … -BlockDownloadPolicy $true).",
    source: { title: "Implement SharePoint Advanced Management tools to prepare for Copilot (Training)", url: "https://learn.microsoft.com/training/modules/implement-microsoft-365-copilot/3-implement-sharepoint-advanced-management-tools" }
  },
  {
    id: 112, skill: 2, section: "2B", bullet: "copilot-data-access",
    topic: "Compliance Boundary",
    question: "By default, where do a user's Microsoft 365 Copilot prompts, retrieved data, and responses remain?",
    options: [
      "On the public internet",
      "Within the Microsoft 365 service (compliance) boundary, unless an admin chooses to let data out (e.g., to query the web with Bing)",
      "In another customer's tenant",
      "In OpenAI's public ChatGPT service"
    ],
    correct: 1,
    explanation: "Prompts, the data they retrieve, and generated responses remain within the Microsoft 365 service (compliance) boundary, consistent with Microsoft's privacy, security, and compliance commitments — though administrators can choose to let data out of the boundary, for example to query public web content via Bing.",
    source: { title: "Examine how Microsoft 365 Copilot uses your proprietary business data (Training)", url: "https://learn.microsoft.com/training/modules/examine-data-security-microsoft-365-copilot/2-examine-copilot-uses-proprietary-business-data" }
  },

  // ---- Domain 3 ----
  {
    id: 113, skill: 3, section: "3A", bullet: "copilot-agent-capabilities",
    topic: "Ready-made SharePoint Site Agents",
    question: "What is a 'ready-made' SharePoint site agent?",
    options: [
      "An agent automatically created (when requirements are met) and scoped to a SharePoint site's content when the site is created",
      "An agent that ignores site permissions",
      "A developer-built autonomous agent",
      "An Exchange distribution list"
    ],
    correct: 0,
    explanation: "When a SharePoint site is created and certain requirements are met (Copilot licensing, permissions, properly configured environment), Copilot can automatically create a ready-made agent scoped to that site's content and set it as the site's default agent.",
    source: { title: "Get started with agents: What are agents? (Training)", url: "https://learn.microsoft.com/training/modules/get-started-no-code-copilot-agents-sharepoint/2-what-are-agents" }
  },
  {
    id: 114, skill: 3, section: "3A", bullet: "copilot-agent-capabilities",
    topic: "Copilot Studio for Advanced Agents",
    question: "Which tool do developers and makers use to build advanced, customized agents with generative AI and custom data connectors?",
    options: [
      "Microsoft Copilot Studio",
      "The Exchange admin center",
      "The SharePoint recycle bin",
      "Microsoft Entra ID Protection"
    ],
    correct: 0,
    explanation: "Microsoft Copilot Studio is the unified platform for creating Copilot Chat agents — from no-code agents for everyday business users to advanced agents (with generative AI and 1000+ connectors) for developers, with secure deployment and central administration.",
    source: { title: "Get started with agents: What are agents? (Training)", url: "https://learn.microsoft.com/training/modules/get-started-no-code-copilot-agents-sharepoint/2-what-are-agents" }
  },
  {
    id: 115, skill: 3, section: "3B", bullet: "copilot-usage-monitoring",
    topic: "Where to View Copilot Adoption",
    question: "Where can administrators view Copilot adoption and usage trends per app and Copilot feature?",
    options: [
      "The Copilot Dashboard (Viva Insights) and the Microsoft 365 Copilot readiness/usage reports in the admin center",
      "The Exchange message trace",
      "The SharePoint recycle bin",
      "Microsoft Defender for Identity"
    ],
    correct: 0,
    explanation: "Copilot Analytics surfaces adoption in the Copilot Dashboard's Adoption tab (in Viva Insights) and in the Microsoft 365 Copilot readiness and usage reports in the admin center; the Analytics tab in Copilot Studio gives per-agent insights.",
    source: { title: "Copilot Control System measurement and reporting", url: "https://learn.microsoft.com/microsoft-365/copilot/copilot-control-system/measurement-reporting" }
  },
  {
    id: 116, skill: 3, section: "3B", bullet: "copilot-licenses-admin",
    topic: "Disable Pay-as-you-go",
    question: "How does an administrator stop pay-as-you-go billing for a Copilot service such as Copilot Chat?",
    options: [
      "Disconnect (clear) the billing policies associated with the service on the Copilot Billing & usage page",
      "Delete the user's mailbox",
      "Remove the SharePoint site",
      "Disable Microsoft Entra ID"
    ],
    correct: 0,
    explanation: "Disabling pay-as-you-go involves disconnecting the billing policies associated with the service (e.g., Microsoft 365 Copilot Chat or SharePoint agents) on the Copilot > Billing & usage page; after that, the billing policy can also be deleted.",
    source: { title: "Set up pay-as-you-go for Microsoft 365 Copilot services (disable)", url: "https://learn.microsoft.com/microsoft-365/copilot/pay-as-you-go/setup" }
  },
  {
    id: 117, skill: 3, section: "3C", bullet: "agents-monitoring",
    topic: "Agent Access & Permissions",
    question: "When a user uses an agent, what content can it surface on their behalf?",
    options: [
      "Any content in the tenant, regardless of permissions",
      "Only content in the agent's knowledge sources that the user already has permission to access",
      "Content from other tenants",
      "Only content the administrator manually approves each time"
    ],
    correct: 1,
    explanation: "When a user uses an agent, they have access to the sites, pages, and documents in the agent's knowledge sources that they already have permission to access. If they lack permission to specific content, the agent can't surface it — agents adhere to Microsoft 365 permissions.",
    source: { title: "Get started with agents: Examine IT governance controls for agents (Training)", url: "https://learn.microsoft.com/training/modules/get-started-no-code-copilot-agents-sharepoint/6-examine-governance-controls-agents" }
  }
];
