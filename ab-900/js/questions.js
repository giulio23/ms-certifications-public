/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-900 Microsoft 365 Copilot and Agent Administration Fundamentals - Practice Exam Questions
// COURSE-DERIVED: every question is written from the text of a specific Microsoft Learn course
// unit (AB-900T00 Copilot/agent + M365 admin modules) or the official Learn product doc the course
// and study guide point to, and its `source` links to that unit/doc. correct = 0-based index.

const QUESTIONS = [
  // ============================================================
  // DOMAIN 1: Core features and objects of Microsoft 365 services (30–35%)
  // ============================================================
  {
    id: 1, skill: 1, section: "1A", bullet: "m365-licenses",
    topic: "Microsoft 365 Licenses",
    question: "To enable Microsoft 365 Copilot for a user, what must be true about that user's licensing?",
    options: [
      "The user needs only a Copilot license, with no other Microsoft 365 license",
      "The user must have a qualifying Microsoft 365 / Office 365 base license, plus the Copilot add-on license assigned",
      "Copilot can be assigned to a distribution list to cover many users at once",
      "Any free Microsoft account is sufficient"
    ],
    correct: 1,
    explanation: "Microsoft 365 Copilot is an add-on. Users must have a qualifying Microsoft 365 or Office 365 base license (e.g., M365 E3/E5, Business Standard/Premium) and then be assigned the Copilot license. Copilot licenses can only be assigned to individual user accounts, not distribution lists or shared mailboxes.",
    source: { title: "Implement Microsoft 365 Copilot: Assign licenses (Training)", url: "https://learn.microsoft.com/training/modules/implement-microsoft-365-copilot/6-assign-your-microsoft-365-copilot-licenses" }
  },
  {
    id: 2, skill: 1, section: "1A", bullet: "m365-admin-center",
    topic: "Microsoft 365 Admin Center",
    question: "Which admin center is the central place to configure organization-wide settings such as domain names and to manage users and licenses for Microsoft 365?",
    options: [
      "The Microsoft 365 admin center",
      "The Microsoft Purview portal",
      "The SharePoint admin center",
      "The Power Platform admin center"
    ],
    correct: 0,
    explanation: "The Microsoft 365 admin center is the central console for organization configuration — managing domains, users, groups, licenses, and org settings — and is where Copilot licenses are assigned and usage reports are reviewed.",
    source: { title: "Microsoft 365 admin center overview", url: "https://learn.microsoft.com/microsoft-365/admin/admin-overview/admin-center-overview" }
  },
  {
    id: 3, skill: 1, section: "1A", bullet: "exchange-objects",
    topic: "Exchange Online Objects",
    question: "Which objects are configured using the Exchange admin center?",
    options: [
      "SharePoint sites and document libraries",
      "Teams and channels",
      "Mailboxes and distribution lists",
      "Conditional Access policies"
    ],
    correct: 2,
    explanation: "Exchange Online recipients — such as user mailboxes and distribution lists (distribution groups) — are managed in the Exchange admin center. Sites/libraries are SharePoint, teams/channels are Teams, and Conditional Access is in Microsoft Entra.",
    source: { title: "Recipients in Exchange Online", url: "https://learn.microsoft.com/exchange/recipients-in-exchange-online/recipients-in-exchange-online" }
  },
  {
    id: 4, skill: 1, section: "1A", bullet: "sharepoint-objects",
    topic: "SharePoint Sites & Permissions",
    question: "In SharePoint, which permission level lets a user create custom agents for a site (beyond just using the site's ready-made agent)?",
    options: [
      "Visitor (read-only) permission",
      "Edit permission or higher",
      "No permission is required",
      "Only the global administrator can"
    ],
    correct: 1,
    explanation: "SharePoint sites contain libraries and folders, and access is governed by roles/permissions (e.g., Owner/Member/Visitor). To create custom agents for a SharePoint site, a user needs Edit permissions or higher on that site.",
    source: { title: "Get started with agents: What are agents? (Training)", url: "https://learn.microsoft.com/training/modules/get-started-no-code-copilot-agents-sharepoint/2-what-are-agents" }
  },
  {
    id: 5, skill: 1, section: "1A", bullet: "teams-objects",
    topic: "Teams Admin Center Objects",
    question: "Which objects are managed in the Microsoft Teams admin center?",
    options: [
      "Teams, channels, and policies",
      "Mailboxes and mail flow rules",
      "Sensitivity labels and retention policies",
      "Azure virtual machines"
    ],
    correct: 0,
    explanation: "The Teams admin center is used to configure teams, channels, and the policies (meeting, messaging, app, etc.) that govern how Teams is used in the organization.",
    source: { title: "Overview of teams and channels in Microsoft Teams", url: "https://learn.microsoft.com/microsoftteams/teams-channels-overview" }
  },
  {
    id: 6, skill: 1, section: "1B", bullet: "zero-trust",
    topic: "Zero Trust Principles",
    question: "Which three guiding principles define the Zero Trust security model?",
    options: [
      "Trust the network, verify once, allow broad access",
      "Verify explicitly, use least privilege access, assume breach",
      "Encrypt everything, block everything, log everything",
      "Authenticate, authorize, audit"
    ],
    correct: 1,
    explanation: "Zero Trust is built on three principles: verify explicitly (always authenticate/authorize on all signals), use least privilege access (JIT/JEA, risk-based adaptive policies), and assume breach (minimize blast radius, segment access, verify encryption).",
    source: { title: "Zero Trust deployment plan with Microsoft 365", url: "https://learn.microsoft.com/security/zero-trust/microsoft-365-zero-trust" }
  },
  {
    id: 7, skill: 1, section: "1B", bullet: "zero-trust",
    topic: "Zero Trust — Least Privilege",
    question: "Granting users 'just enough access' (JIT/JEA) and using risk-based adaptive policies is an expression of which Zero Trust principle?",
    options: ["Verify explicitly", "Use least privilege access", "Assume breach", "Trust but verify"],
    correct: 1,
    explanation: "The 'use least privilege access' principle limits user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection — reducing exposure if credentials are compromised.",
    source: { title: "Zero Trust identity and device access configurations", url: "https://learn.microsoft.com/security/zero-trust/zero-trust-identity-device-access-policies-overview" }
  },
  {
    id: 8, skill: 1, section: "1B", bullet: "authentication-authorization",
    topic: "Authentication vs Authorization",
    question: "Which security control requires users to provide two or more forms of verification (such as a password plus an Authenticator notification) and greatly reduces the risk from stolen credentials?",
    options: [
      "Single sign-on (SSO)",
      "Multifactor authentication (MFA)",
      "Data Loss Prevention (DLP)",
      "A sensitivity label"
    ],
    correct: 1,
    explanation: "Authentication verifies identity; authorization determines what an authenticated identity can do. Multifactor authentication (MFA) requires two or more forms of verification, greatly reducing the risk that stolen credentials can be used to access the environment.",
    source: { title: "Zero Trust identity and device access configurations (Microsoft Entra ID)", url: "https://learn.microsoft.com/security/zero-trust/zero-trust-identity-device-access-policies-overview" }
  },
  {
    id: 9, skill: 1, section: "1B", bullet: "defender-xdr",
    topic: "Microsoft Defender XDR",
    question: "What does Microsoft Defender XDR do?",
    options: [
      "It is a relational database service",
      "It automatically collects, correlates, and analyzes signal, threat, and alert data across endpoints, email, apps, and identities to detect and respond to threats",
      "It assigns Microsoft 365 licenses to users",
      "It creates SharePoint sites"
    ],
    correct: 1,
    explanation: "Microsoft Defender XDR is an extended detection and response (XDR) solution that automatically collects, correlates, and analyzes signal, threat, and alert data from across the Microsoft 365 environment — endpoints, email, applications, and identities — supporting the Zero Trust 'assume breach' principle.",
    source: { title: "Zero Trust with Microsoft Defender XDR", url: "https://learn.microsoft.com/defender-xdr/zero-trust-with-microsoft-365-defender" }
  },
  {
    id: 10, skill: 1, section: "1C", bullet: "entra-id",
    topic: "Microsoft Entra ID",
    question: "Which Microsoft service provides identity management capabilities for Microsoft 365 — including MFA, Conditional Access, and Privileged Identity Management (PIM)?",
    options: ["Microsoft Purview", "Microsoft Entra ID", "Microsoft Defender for Office 365", "SharePoint Advanced Management"],
    correct: 1,
    explanation: "Microsoft Entra ID provides the full suite of identity management capabilities used to secure access — including MFA, Conditional Access, Identity Secure Score, audit logs, and Privileged Identity Management (PIM) to reduce standing administrative access.",
    source: { title: "Zero Trust identity and device access configurations (Microsoft Entra ID)", url: "https://learn.microsoft.com/security/zero-trust/zero-trust-identity-device-access-policies-overview" }
  },
  {
    id: 11, skill: 1, section: "1C", bullet: "entra-id",
    topic: "Privileged Identity Management",
    question: "Which Microsoft Entra capability helps reduce the number of standing (always-on) administrative accounts by providing just-in-time privileged access?",
    options: [
      "Privileged Identity Management (PIM)",
      "Single sign-on (SSO)",
      "Data Loss Prevention (DLP)",
      "Sensitivity labels"
    ],
    correct: 0,
    explanation: "Microsoft Entra Privileged Identity Management (PIM) is used to reduce the number of persistent administrative accounts by granting just-in-time, time-bound privileged access — a least-privilege best practice for protecting privileged identities.",
    source: { title: "Prerequisite work for Zero Trust identity and device access (PIM)", url: "https://learn.microsoft.com/security/zero-trust/zero-trust-identity-device-access-policies-prerequisite" }
  },
  {
    id: 12, skill: 1, section: "1C", bullet: "conditional-access",
    topic: "Conditional Access",
    question: "What is the purpose of a Microsoft Entra Conditional Access policy?",
    options: [
      "To classify documents by sensitivity",
      "To evaluate the conditions of a sign-in (user, device, risk, location) and then allow, block, or require extra controls like MFA",
      "To assign Copilot licenses automatically",
      "To create distribution lists"
    ],
    correct: 1,
    explanation: "Conditional Access evaluates signals about a sign-in (user, device compliance, risk, location, etc.) and uses policy to determine the access decision — for example, requiring MFA or a compliant device, or blocking access. It's a core way to operationalize 'verify explicitly'.",
    source: { title: "What is Conditional Access?", url: "https://learn.microsoft.com/entra/identity/conditional-access/overview" }
  },
  {
    id: 13, skill: 1, section: "1C", bullet: "conditional-access",
    topic: "Conditional Access — Risk-based",
    question: "Risk-based Conditional Access policies (sign-in risk and user risk) depend on which additional capability?",
    options: [
      "Microsoft Purview DLP",
      "Microsoft Entra ID Protection",
      "SharePoint Advanced Management",
      "Exchange transport rules"
    ],
    correct: 1,
    explanation: "Risk-based Conditional Access policies (sign-in risk and user risk) require Microsoft Entra ID Protection, which detects identity risk and feeds it into the access decision. Conditional Access itself requires Microsoft Entra ID P1.",
    source: { title: "What is Conditional Access? (license requirements)", url: "https://learn.microsoft.com/entra/identity/conditional-access/overview" }
  },
  {
    id: 14, skill: 1, section: "1C", bullet: "sso",
    topic: "Single Sign-On",
    question: "What is the primary benefit of single sign-on (SSO)?",
    options: [
      "It encrypts data at rest",
      "It lets users authenticate once and then access multiple applications without signing in again to each one",
      "It blocks all external sharing",
      "It classifies sensitive information automatically"
    ],
    correct: 1,
    explanation: "Single sign-on (SSO) lets a user authenticate once and then access multiple connected applications without repeatedly entering credentials — improving usability while reducing password fatigue and the attack surface from multiple credentials.",
    source: { title: "What is single sign-on (SSO)? — Microsoft Entra", url: "https://learn.microsoft.com/entra/identity/enterprise-apps/what-is-single-sign-on" }
  },
  {
    id: 15, skill: 1, section: "1C", bullet: "entra-id",
    topic: "Identity Secure Score",
    question: "Which Microsoft Entra feature gives a numeric measurement of an organization's identity security posture along with recommended improvements?",
    options: ["Identity Secure Score", "Compliance Manager", "Activity explorer", "Block download policy"],
    correct: 0,
    explanation: "Identity Secure Score in Microsoft Entra ID provides a measurement of the organization's identity security posture and recommended actions to improve it. Audit logs (also in Entra) let admins review user and admin activity.",
    source: { title: "Securing identity with Zero Trust (Microsoft Entra)", url: "https://learn.microsoft.com/security/zero-trust/deploy/identity" }
  },

  // ============================================================
  // DOMAIN 2: Data protection and governance for M365 and Copilot (35–40%)
  // ============================================================
  {
    id: 16, skill: 2, section: "2A", bullet: "purview-info-protection",
    topic: "Microsoft Purview Information Protection",
    question: "What does Microsoft Purview Information Protection provide?",
    options: [
      "A framework and capabilities to discover, classify, and protect sensitive data using sensitivity labels, trainable classifiers, and sensitive information types",
      "A service to create SharePoint sites",
      "A tool to assign Copilot licenses",
      "A way to deploy virtual machines"
    ],
    correct: 0,
    explanation: "Microsoft Purview Information Protection provides a framework, process, and capabilities to protect sensitive data across clouds, apps, and devices — using sensitivity labels, trainable classifiers, and sensitive information types to define and apply protection.",
    source: { title: "Learn about Data Security Posture Management (Purview Information Protection)", url: "https://learn.microsoft.com/purview/data-security-posture-management" }
  },
  {
    id: 17, skill: 2, section: "2A", bullet: "purview-dlp",
    topic: "Data Loss Prevention",
    question: "What is the purpose of Microsoft Purview Data Loss Prevention (DLP)?",
    options: [
      "To help prevent users from inappropriately sharing or leaking sensitive data",
      "To assign sensitivity labels automatically to all files",
      "To monitor Copilot license usage",
      "To create Conditional Access policies"
    ],
    correct: 0,
    explanation: "Microsoft Purview DLP policies help prevent users from inappropriately sharing sensitive data. DLP detects sensitive information using content analysis (keyword matching, expression evaluation, classifiers) and can warn or block risky sharing.",
    source: { title: "Learn about Data Security Posture Management (DLP)", url: "https://learn.microsoft.com/purview/data-security-posture-management" }
  },
  {
    id: 18, skill: 2, section: "2A", bullet: "purview-dlp",
    topic: "Endpoint DLP for Generative AI",
    question: "How can Endpoint DLP help protect data when users interact with third-party generative AI sites in a browser?",
    options: [
      "It deletes the AI site from the browser",
      "It can warn or block users from pasting sensitive information (e.g., credit card numbers) into sites like ChatGPT",
      "It assigns the user a Copilot license",
      "It encrypts the SharePoint site"
    ],
    correct: 1,
    explanation: "Endpoint DLP policies on onboarded Windows devices can warn or block users from sharing sensitive information with third-party generative AI sites accessed via a browser — for example, preventing a user from pasting credit card numbers into ChatGPT.",
    source: { title: "Microsoft Purview protections for generative AI apps", url: "https://learn.microsoft.com/purview/ai-microsoft-purview" }
  },
  {
    id: 19, skill: 2, section: "2A", bullet: "purview-insider-risk",
    topic: "Insider Risk Management",
    question: "What does Microsoft Purview Insider Risk Management help organizations do?",
    options: [
      "Detect, investigate, and mitigate internal risks such as data leakage, IP theft, and security violations",
      "Translate documents between languages",
      "Provision Azure storage accounts",
      "Assign Teams policies"
    ],
    correct: 0,
    explanation: "Insider Risk Management uses machine learning and signals from Microsoft 365 and third-party indicators to detect, investigate, and mitigate internal risks like data leakage, IP theft, and security violations — with privacy controls such as pseudonymization. A 'Risky AI usage' policy template detects risky AI/Copilot usage.",
    source: { title: "Microsoft Purview protections for generative AI apps (Insider Risk Management)", url: "https://learn.microsoft.com/purview/ai-microsoft-purview" }
  },
  {
    id: 20, skill: 2, section: "2A", bullet: "purview-dspm-ai",
    topic: "DSPM for AI",
    question: "What is the role of Microsoft Purview Data Security Posture Management (DSPM) for AI?",
    options: [
      "It is the 'front door' to discover, secure, and apply compliance controls for AI/Copilot data usage across the enterprise",
      "It assigns Copilot licenses",
      "It is a relational database",
      "It replaces Microsoft Entra ID"
    ],
    correct: 0,
    explanation: "DSPM for AI is the front door to discover, secure, and apply compliance controls for AI usage. It uses existing Purview controls (Information Protection, DLP, Insider Risk) with graphical tools, data-risk assessments, and one-click policies to gain insight into and protect AI/Copilot data.",
    source: { title: "Use Microsoft Purview to manage data security & compliance for Microsoft 365 Copilot (DSPM for AI)", url: "https://learn.microsoft.com/purview/ai-m365-copilot" }
  },
  {
    id: 21, skill: 2, section: "2A", bullet: "purview-dspm-ai",
    topic: "DSPM for AI — Data Risk Assessments",
    question: "Which DSPM for AI capability helps an organization identify and fix issues that could result in oversharing of data to Copilot?",
    options: [
      "Data risk assessments",
      "Single sign-on",
      "Distribution lists",
      "Teams channels"
    ],
    correct: 0,
    explanation: "DSPM for AI provides data risk assessments that help identify and fix issues that could result in oversharing of data — including a default weekly assessment to 'protect your data from potential oversharing risks' and one-click remediation policies.",
    source: { title: "Use Microsoft Purview to manage data security & compliance for Microsoft 365 Copilot", url: "https://learn.microsoft.com/purview/ai-m365-copilot" }
  },
  {
    id: 22, skill: 2, section: "2A", bullet: "sensitivity-labels",
    topic: "Sensitivity Labels",
    question: "How do sensitivity labels with encryption interact with Microsoft 365 Copilot?",
    options: [
      "Copilot ignores all label-based protections",
      "Copilot won't return encrypted content unless the user has at least the View usage right, and generated content can inherit the source's protection",
      "Copilot automatically removes labels from documents",
      "Sensitivity labels only apply to email, not Copilot"
    ],
    correct: 1,
    explanation: "When data is encrypted by Purview Information Protection (via sensitivity labels or IRM), Copilot won't return it unless the user has at least the View usage right. Copilot-generated content can inherit the most restrictive label/permission from its source, and Copilot cites the original protected source.",
    source: { title: "Examine how Microsoft 365 Copilot protects sensitive business data (Training)", url: "https://learn.microsoft.com/training/modules/examine-data-security-microsoft-365-copilot/3-examine-copilot-protects-sensitive-business-data" }
  },
  {
    id: 23, skill: 2, section: "2A", bullet: "sensitivity-labels",
    topic: "Sensitivity Labels — Purpose",
    question: "What is a primary use case for sensitivity labels in Microsoft Purview?",
    options: [
      "To classify and protect content (e.g., apply encryption or visual markings) based on its sensitivity",
      "To schedule meetings",
      "To assign Microsoft 365 Copilot licenses",
      "To monitor agent usage"
    ],
    correct: 0,
    explanation: "Sensitivity labels classify and protect content based on sensitivity — they can apply encryption, content markings, and access restrictions, and are a core building block of Information Protection that Copilot respects when surfacing data.",
    source: { title: "Use Microsoft Purview for Microsoft 365 Copilot (sensitivity labels)", url: "https://learn.microsoft.com/purview/ai-m365-copilot" }
  },
  {
    id: 24, skill: 2, section: "2A", bullet: "data-classification",
    topic: "Data Classification",
    question: "What does Microsoft Purview data classification provide?",
    options: [
      "A framework to identify and tag sensitive data across Microsoft services using built-in or custom classifications",
      "A way to deploy virtual machines",
      "A single sign-on portal",
      "A method to create Teams channels"
    ],
    correct: 0,
    explanation: "Data classification provides a framework for identifying and tagging sensitive data across services (Office 365, Dynamics 365, Azure). Using sensitive information types and trainable classifiers, it can detect sensitive data — including in Copilot prompts and responses — surfacing it in Purview reports and activity explorer.",
    source: { title: "Microsoft Purview protections for generative AI apps (data classification)", url: "https://learn.microsoft.com/purview/ai-microsoft-purview" }
  },
  {
    id: 25, skill: 2, section: "2A", bullet: "retention",
    topic: "Retention & Data Lifecycle Management",
    question: "Which Microsoft Purview capability lets administrators set retention policies — including for Copilot chat interaction data?",
    options: [
      "Data Lifecycle Management (retention)",
      "Conditional Access",
      "Single sign-on",
      "SharePoint Advanced Management"
    ],
    correct: 0,
    explanation: "Microsoft Purview Data Lifecycle Management provides retention (and deletion) policies to keep or remove content for a required period. Admins can use Purview to set retention policies for data related to Copilot chat interactions.",
    source: { title: "Examine how Microsoft 365 Copilot uses your proprietary business data (Training)", url: "https://learn.microsoft.com/training/modules/examine-data-security-microsoft-365-copilot/2-examine-copilot-uses-proprietary-business-data" }
  },
  {
    id: 26, skill: 2, section: "2B", bullet: "copilot-data-access",
    topic: "How Copilot Accesses Data",
    question: "How does Microsoft 365 Copilot access organizational content to ground its responses?",
    options: [
      "It accesses all tenant data regardless of permissions",
      "It accesses content and context through Microsoft Graph, respecting each user's existing access permissions",
      "It copies data to OpenAI's public services",
      "It only uses data the administrator manually uploads"
    ],
    correct: 1,
    explanation: "Copilot connects LLMs to organizational data and accesses content and context through Microsoft Graph, with respect to each specific user's access permissions. It can reason over a user's documents, emails, calendar, chats, meetings, and contacts — only what that user can already access.",
    source: { title: "Examine how Microsoft 365 Copilot uses your proprietary business data (Training)", url: "https://learn.microsoft.com/training/modules/examine-data-security-microsoft-365-copilot/2-examine-copilot-uses-proprietary-business-data" }
  },
  {
    id: 27, skill: 2, section: "2B", bullet: "copilot-data-access",
    topic: "Copilot Data Boundary & Training",
    question: "Which statement about Microsoft 365 Copilot data is correct?",
    options: [
      "Prompts and responses are used to train the foundation LLMs by default",
      "Prompts, responses, and Graph data stay within the Microsoft 365 service boundary and are NOT used to train the foundation LLMs (unless the tenant admin opts in)",
      "Copilot shares data with other customers' tenants",
      "Copilot uses OpenAI's public ChatGPT service"
    ],
    correct: 1,
    explanation: "Your prompts, Copilot's responses, and data accessed through Microsoft Graph aren't available to other customers and aren't used to train the foundation LLMs (unless the tenant admin opts in). Processing uses Azure OpenAI Service with separate model instances — not OpenAI's public services — and stays in the M365 service boundary.",
    source: { title: "Examine how Microsoft 365 Copilot uses your proprietary business data (Training)", url: "https://learn.microsoft.com/training/modules/examine-data-security-microsoft-365-copilot/2-examine-copilot-uses-proprietary-business-data" }
  },
  {
    id: 28, skill: 2, section: "2B", bullet: "copilot-protections",
    topic: "Copilot — View Permissions",
    question: "Microsoft 365 Copilot only displays organizational data to which a user has at least what level of access?",
    options: ["Full Control permission", "Read/Write permission", "View (read) permission", "Owner permission"],
    correct: 2,
    explanation: "Copilot only surfaces data that an individual user has at least View permission to within Microsoft 365 services like SharePoint, OneDrive, and Teams. If a user can't access a confidential folder, Copilot can't use that content in responses — it uses the same access controls as the rest of M365.",
    source: { title: "Examine how Microsoft 365 Copilot protects sensitive business data (Training)", url: "https://learn.microsoft.com/training/modules/examine-data-security-microsoft-365-copilot/3-examine-copilot-protects-sensitive-business-data" }
  },
  {
    id: 29, skill: 2, section: "2B", bullet: "copilot-protections",
    topic: "Tenant Isolation",
    question: "How does Microsoft 365 Copilot prevent one organization's data from being seen by another organization?",
    options: [
      "Through logical tenant isolation enforced by Microsoft Entra authorization and role-based access control",
      "By emailing data between tenants",
      "By disabling Copilot for all tenants",
      "It does not isolate tenant data"
    ],
    correct: 0,
    explanation: "Microsoft ensures data is logically isolated by tenant and encrypted in transit and at rest. Copilot running in one tenant (Contoso) can't see another tenant's data (Fabrikam) — logical isolation is achieved through Microsoft Entra authorization and role-based access control.",
    source: { title: "Examine how Microsoft 365 Copilot protects sensitive business data (Training)", url: "https://learn.microsoft.com/training/modules/examine-data-security-microsoft-365-copilot/3-examine-copilot-protects-sensitive-business-data" }
  },
  {
    id: 30, skill: 2, section: "2C", bullet: "governance-risk-tools",
    topic: "Compliance Manager",
    question: "Which Microsoft Purview tool helps identify compliance risks and provides recommendations and improvement actions, including control-mapping templates for AI regulations?",
    options: ["Compliance Manager", "Conditional Access", "Single sign-on", "Teams admin center"],
    correct: 0,
    explanation: "Microsoft Purview Compliance Manager identifies compliance risks and recommends improvement actions, and provides control-mapping regulatory templates (including for AI) that DSPM for AI can use for guided assistance to AI regulations.",
    source: { title: "Use Microsoft Purview for Microsoft 365 Copilot (Compliance Manager)", url: "https://learn.microsoft.com/purview/ai-m365-copilot" }
  },
  {
    id: 31, skill: 2, section: "2C", bullet: "governance-risk-tools",
    topic: "Auditing & eDiscovery for Copilot",
    question: "Which Purview capabilities let administrators review Copilot prompts and responses for investigations and compliance?",
    options: [
      "Conditional Access and SSO",
      "Auditing (unified audit log) and Content search in eDiscovery",
      "Teams policies and channels",
      "Blob storage tiers"
    ],
    correct: 1,
    explanation: "Copilot prompts and responses are captured in the unified audit log and flow into activity explorer (DSPM for AI 'AI activities'). Admins can use the Audit solution and Content search in Microsoft Purview eDiscovery to search and review these interactions for investigations and compliance.",
    source: { title: "Use Microsoft Purview for Microsoft 365 Copilot (Auditing/eDiscovery)", url: "https://learn.microsoft.com/purview/ai-m365-copilot" }
  },
  {
    id: 32, skill: 2, section: "2D", bullet: "sharepoint-oversharing",
    topic: "SharePoint Advanced Management",
    question: "Before enabling Copilot, which add-on gives administrators tools to reduce oversharing, control content sprawl, and manage content lifecycle in SharePoint?",
    options: [
      "SharePoint Advanced Management (SAM)",
      "Microsoft Entra ID Protection",
      "Exchange transport rules",
      "Microsoft Defender for Office 365"
    ],
    correct: 0,
    explanation: "SharePoint Advanced Management (SAM) equips administrators with tools to bolster content governance for a Copilot deployment — preventing content sprawl, reducing oversharing, and managing content lifecycle (e.g., inactive site policies, data access governance reports).",
    source: { title: "Implement SharePoint Advanced Management tools to prepare for Copilot (Training)", url: "https://learn.microsoft.com/training/modules/implement-microsoft-365-copilot/3-implement-sharepoint-advanced-management-tools" }
  },
  {
    id: 33, skill: 2, section: "2D", bullet: "sharepoint-oversharing",
    topic: "RAC vs RCD",
    question: "A site's permissions are correct, but you want to stop its content from appearing in Copilot results and org-wide search without changing who can access it. Which SharePoint Advanced Management policy fits?",
    options: [
      "Restricted Access Control (RAC)",
      "Restricted Content Discovery (RCD)",
      "Block download policy",
      "Conditional Access policy"
    ],
    correct: 1,
    explanation: "Restricted Content Discovery (RCD) keeps permissions unchanged but suppresses the site's content from appearing in Copilot results and organization-wide search. Use Restricted Access Control (RAC) instead when you actually need to narrow who can access the site.",
    source: { title: "Implement SharePoint Advanced Management tools to prepare for Copilot (Training)", url: "https://learn.microsoft.com/training/modules/implement-microsoft-365-copilot/3-implement-sharepoint-advanced-management-tools" }
  },

  // ============================================================
  // DOMAIN 3: Basic administrative tasks for Copilot and agents (25–30%)
  // ============================================================
  {
    id: 34, skill: 3, section: "3A", bullet: "copilot-agent-capabilities",
    topic: "Types of Agents",
    question: "An everyday business user with no coding background wants to build an agent in SharePoint or Copilot Chat. Which statement is correct?",
    options: [
      "Only developers can create any kind of agent",
      "Everyday business users can build agents (from templates or their own rules), while advanced agents with generative AI and custom connectors require Copilot Studio / developer tools",
      "Agents can only be created by Microsoft",
      "Agents ignore Microsoft 365 permissions"
    ],
    correct: 1,
    explanation: "Everyday business users can create agents in SharePoint and Copilot Chat without coding (from templates or their own options/rules). Advanced agents — with generative AI and 1000+ custom/prebuilt connectors — require Copilot Studio and developer tooling. All agents adhere to Microsoft 365 permissions.",
    source: { title: "Get started with agents: What are agents? (Training)", url: "https://learn.microsoft.com/training/modules/get-started-no-code-copilot-agents-sharepoint/2-what-are-agents" }
  },
  {
    id: 35, skill: 3, section: "3A", bullet: "copilot-agent-capabilities",
    topic: "Custom Agents",
    question: "With a Microsoft 365 Copilot license, what can an organization do regarding agents?",
    options: [
      "Nothing — agents require a separate product",
      "Create, deploy, use, and share custom agents to extend Microsoft 365 Copilot, from simple prompt-based to advanced autonomous agents",
      "Only use Microsoft-built agents",
      "Only use agents in Excel"
    ],
    correct: 1,
    explanation: "A Microsoft 365 Copilot license lets the organization create, deploy, use, and share custom agents that extend Copilot capabilities — ranging from simple prompt-based agents to more advanced, autonomous agents.",
    source: { title: "Agents admin guide for Microsoft 365 (licensing scenarios)", url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide" }
  },
  {
    id: 36, skill: 3, section: "3A", bullet: "copilot-licensing-models",
    topic: "Monthly License vs Pay-as-you-go",
    question: "Which statement best contrasts the Microsoft 365 Copilot monthly license with the pay-as-you-go plan?",
    options: [
      "The monthly license bills per message; pay-as-you-go is a fixed per-seat fee",
      "The monthly per-user license unlocks embedded Copilot in Office apps and capabilities like Researcher/Analyst; pay-as-you-go enables usage-based billing for services like Copilot Chat and SharePoint agents with no per-seat commitment",
      "They are identical",
      "Pay-as-you-go is only for on-premises servers"
    ],
    correct: 1,
    explanation: "The Microsoft 365 Copilot (per-user, monthly) license unlocks embedded Copilot in Word/Excel/Outlook/Teams plus capabilities like Researcher and Analyst. Pay-as-you-go enables usage-based billing for specific scenarios — Microsoft 365 Copilot Chat and SharePoint agents — without committing to a full per-seat license.",
    source: { title: "Microsoft 365 Copilot pay-as-you-go overview for IT admins", url: "https://learn.microsoft.com/microsoft-365/copilot/pay-as-you-go/overview" }
  },
  {
    id: 37, skill: 3, section: "3A", bullet: "copilot-licensing-models",
    topic: "Pay-as-you-go Services",
    question: "Which services can be billed through the Microsoft 365 Copilot pay-as-you-go plan?",
    options: [
      "Microsoft 365 Copilot Chat and SharePoint agents",
      "Exchange mailboxes and distribution lists",
      "Conditional Access policies",
      "Sensitivity labels"
    ],
    correct: 0,
    explanation: "The pay-as-you-go plan enables usage-based billing for Microsoft 365 Copilot Chat, SharePoint agents, and the Copilot Retrieval API (preview) — letting users access these Copilot features without a full per-seat license.",
    source: { title: "Microsoft 365 Copilot pay-as-you-go overview for IT admins", url: "https://learn.microsoft.com/microsoft-365/copilot/pay-as-you-go/overview" }
  },
  {
    id: 38, skill: 3, section: "3A", bullet: "copilot-enable-disable",
    topic: "Enable/Disable Copilot Features",
    question: "Where can an administrator control which apps can use Copilot features and turn Copilot on or off for the organization?",
    options: [
      "In the Integrated apps section of the Microsoft 365 admin center",
      "In the Exchange admin center mail flow rules",
      "In the SharePoint recycle bin",
      "In Microsoft Entra ID Protection"
    ],
    correct: 0,
    explanation: "Administrators manage Copilot agents and extensibility in the Integrated apps section of the Microsoft 365 admin center — turning Copilot on/off, deciding which users or groups can access an app with Copilot features, and blocking or unblocking apps.",
    source: { title: "Manage agents for Copilot in the Microsoft 365 admin center (Training)", url: "https://learn.microsoft.com/training/modules/manage-agents-microsoft-365-copilot/2-manage-copilot-agents-using-admin-center" }
  },
  {
    id: 39, skill: 3, section: "3A", bullet: "copilot-enable-disable",
    topic: "Pay-as-you-go Admin Roles",
    question: "Which administrator roles can view and manage Microsoft 365 Copilot pay-as-you-go billing in the admin center?",
    options: [
      "Global administrator, Billing administrator, and AI administrator (with Global reader read-only)",
      "Any licensed end user",
      "Only the Teams administrator",
      "Only the SharePoint administrator"
    ],
    correct: 0,
    explanation: "Pay-as-you-go can be viewed and managed by the Global administrator, Billing administrator, and AI administrator roles, with the Global reader having read-only access. Microsoft recommends using the least-privileged role that fits the task.",
    source: { title: "Microsoft 365 Copilot pay-as-you-go overview for IT admins", url: "https://learn.microsoft.com/microsoft-365/copilot/pay-as-you-go/overview" }
  },
  {
    id: 40, skill: 3, section: "3A", bullet: "researcher-analyst",
    topic: "Researcher and Analyst",
    question: "Researcher and Analyst are examples of what in Microsoft 365 Copilot?",
    options: [
      "Additional capabilities (reasoning agents) unlocked with a Microsoft 365 Copilot license",
      "SharePoint permission levels",
      "Exchange distribution lists",
      "Conditional Access conditions"
    ],
    correct: 0,
    explanation: "Researcher and Analyst are advanced reasoning capabilities/agents that an organization gains access to when it purchases a Microsoft 365 Copilot license, alongside embedded Copilot features and custom agents.",
    source: { title: "Agents admin guide for Microsoft 365 (Researcher and Analyst)", url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide" }
  },
  {
    id: 41, skill: 3, section: "3A", bullet: "researcher-analyst",
    topic: "Prebuilt Agents",
    question: "Prompt Coach, Writing Coach, and Idea Coach are examples of which type of agent?",
    options: [
      "Prebuilt agents (created by Microsoft or an approved vendor)",
      "Advanced developer-built agents",
      "Ready-made SharePoint site agents",
      "Conditional Access policies"
    ],
    correct: 0,
    explanation: "Prompt Coach, Writing Coach, Idea Coach, and Visual Creator are prebuilt agents — created by Microsoft (or a Microsoft-approved vendor) — that integrate seamlessly and provide immediate value without extensive configuration.",
    source: { title: "Get started with agents: What are agents? (Training)", url: "https://learn.microsoft.com/training/modules/get-started-no-code-copilot-agents-sharepoint/2-what-are-agents" }
  },
  {
    id: 42, skill: 3, section: "3B", bullet: "copilot-licenses-admin",
    topic: "Assign Copilot Licenses",
    question: "From where can an administrator assign Microsoft 365 Copilot licenses to users?",
    options: [
      "The Microsoft 365 admin center (Users > Active users > Licenses and apps) or the Copilot setup wizard",
      "The Exchange admin center only",
      "The SharePoint recycle bin",
      "Microsoft Defender XDR"
    ],
    correct: 0,
    explanation: "Copilot licenses are assigned from the Microsoft 365 Copilot setup wizard or the Microsoft 365 admin center (Users > Active users > select users > Licenses and apps), or with PowerShell. Licenses can only be assigned to individual users, not distribution lists or shared mailboxes.",
    source: { title: "Implement Microsoft 365 Copilot: Assign licenses (Training)", url: "https://learn.microsoft.com/training/modules/implement-microsoft-365-copilot/6-assign-your-microsoft-365-copilot-licenses" }
  },
  {
    id: 43, skill: 3, section: "3B", bullet: "copilot-licenses-admin",
    topic: "Manage Pay-as-you-go Billing",
    question: "How does an administrator enable Copilot pay-as-you-go billing for a service like Copilot Chat?",
    options: [
      "By creating a billing policy and connecting it to the pay-as-you-go service on the Copilot Billing & usage page in the admin center",
      "By assigning a sensitivity label",
      "By creating a Conditional Access policy",
      "By adding a distribution list"
    ],
    correct: 0,
    explanation: "To enable pay-as-you-go, an admin creates a billing policy and connects it to the Copilot service (e.g., Microsoft 365 Copilot Chat or SharePoint agents) on the Copilot > Billing & usage page in the Microsoft 365 admin center. Costs can be viewed under Billing > Cost Management.",
    source: { title: "Set up pay-as-you-go for Microsoft 365 Copilot services", url: "https://learn.microsoft.com/microsoft-365/copilot/pay-as-you-go/setup" }
  },
  {
    id: 44, skill: 3, section: "3B", bullet: "copilot-usage-monitoring",
    topic: "Copilot Analytics",
    question: "Which reporting system lets administrators track Copilot and agent usage, adoption, and impact across the organization?",
    options: [
      "Copilot Analytics (Copilot Control System / Copilot Dashboard)",
      "Microsoft Entra ID Protection",
      "Exchange message trace",
      "SharePoint recycle bin"
    ],
    correct: 0,
    explanation: "Copilot Analytics (part of the Copilot Control System) centralizes Copilot usage data, agent usage data, and Microsoft Graph data into reports and visualizations — the Copilot Dashboard, Microsoft 365 admin center, and Copilot Studio — to track readiness, adoption, and impact.",
    source: { title: "Copilot Control System measurement and reporting", url: "https://learn.microsoft.com/microsoft-365/copilot/copilot-control-system/measurement-reporting" }
  },
  {
    id: 45, skill: 3, section: "3B", bullet: "copilot-usage-monitoring",
    topic: "License Optimization",
    question: "Why should an administrator regularly review Microsoft 365 Copilot usage reports?",
    options: [
      "To identify inactive assigned licenses that can be revoked and reassigned to more active users, right-sizing the investment",
      "To delete all SharePoint sites",
      "To disable Microsoft Entra ID",
      "To remove all sensitivity labels"
    ],
    correct: 0,
    explanation: "Microsoft 365 usage reports in the admin center show who is actively using Copilot. Reviewing them lets admins identify inactive assigned licenses to revoke and reallocate to high-potential users, optimizing the number of licenses and the ROI of the investment.",
    source: { title: "Implement Microsoft 365 Copilot: Assign licenses (license management)", url: "https://learn.microsoft.com/training/modules/implement-microsoft-365-copilot/6-assign-your-microsoft-365-copilot-licenses" }
  },
  {
    id: 46, skill: 3, section: "3C", bullet: "agents-create-access",
    topic: "Who Can Create Agents",
    question: "In the context of agent creation, what does a user need to build a custom agent for a SharePoint site?",
    options: [
      "Global administrator role",
      "Edit permissions or higher on the site (plus appropriate Copilot licensing)",
      "Only a guest account",
      "No access at all"
    ],
    correct: 1,
    explanation: "Everyday business users can create agents in SharePoint and Copilot Chat without coding. To create custom agents for a specific SharePoint site, a user needs Edit permissions or higher on that site; agents only expose content the user is permitted to access.",
    source: { title: "Get started with agents: What are agents? (Training)", url: "https://learn.microsoft.com/training/modules/get-started-no-code-copilot-agents-sharepoint/2-what-are-agents" }
  },
  {
    id: 47, skill: 3, section: "3C", bullet: "agents-create-access",
    topic: "IT Governance for Agents",
    question: "Why are IT governance controls (policies, access control, monitoring) important for agents created by business users?",
    options: [
      "They aren't needed because agents have no access to data",
      "Because while users create agents, the organization is responsible for controls that ensure compliance, security, quality, and accountability",
      "Because agents replace the need for Microsoft Entra ID",
      "Because governance disables all agents"
    ],
    correct: 1,
    explanation: "Although users create agents, the organization is responsible for IT governance controls — policy development, risk management, access control (RBAC/MFA), data management, performance monitoring, and training — to ensure agents are used compliantly, securely, and accountably.",
    source: { title: "Get started with agents: Examine IT governance controls for agents (Training)", url: "https://learn.microsoft.com/training/modules/get-started-no-code-copilot-agents-sharepoint/6-examine-governance-controls-agents" }
  },
  {
    id: 48, skill: 3, section: "3C", bullet: "agents-monitoring",
    topic: "Monitoring Agents",
    question: "Which admin centers are used to monitor Microsoft 365 Copilot agents (usage, operational insights, lifecycle)?",
    options: [
      "The Microsoft 365 admin center and the Microsoft Power Platform admin center",
      "The Exchange admin center and the SharePoint recycle bin",
      "Only the Teams admin center",
      "Microsoft Defender XDR only"
    ],
    correct: 0,
    explanation: "Agents are monitored — usage, operational insights, and agent lifecycle — by working with the Microsoft 365 admin center and the Microsoft Power Platform admin center. The Microsoft 365 admin center's Integrated apps area also enables/disables agent extensibility.",
    source: { title: "Manage agents for Copilot in the Microsoft 365 admin center (Training)", url: "https://learn.microsoft.com/training/modules/manage-agents-microsoft-365-copilot/2-manage-copilot-agents-using-admin-center" }
  }
];
