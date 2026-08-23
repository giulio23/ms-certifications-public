/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// AB-900 Study Guide Taxonomy
// Maps to the official Microsoft AB-900 study guide
// (Microsoft 365 Copilot and Agent Administration Fundamentals)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Identify the core features and objects of Microsoft 365 services",
    weight: "30–35%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Identify the core objects of Microsoft 365 services",
        bullets: [
          { slug: "m365-licenses", label: "How license types assigned to users/groups affect access" },
          { slug: "m365-admin-center", label: "Organization configuration in the Microsoft 365 admin center" },
          { slug: "exchange-objects", label: "Exchange Online objects (mailboxes, distribution lists)" },
          { slug: "sharepoint-objects", label: "SharePoint objects, roles, and permissions" },
          { slug: "teams-objects", label: "Teams admin center objects (teams, channels, policies)" }
        ]
      },
      {
        code: "1B",
        title: "Understand the Microsoft 365 security principles",
        bullets: [
          { slug: "zero-trust", label: "Core Zero Trust principles" },
          { slug: "authentication-authorization", label: "Authentication methods and authorization" },
          { slug: "defender-xdr", label: "Threat protection, intelligence, and Microsoft Defender XDR" }
        ]
      },
      {
        code: "1C",
        title: "Identify the core security features of Microsoft 365 services",
        bullets: [
          { slug: "entra-id", label: "Microsoft Entra ID capabilities (incl. Secure Score, PIM, audit logs)" },
          { slug: "conditional-access", label: "Conditional Access policies" },
          { slug: "sso", label: "Purpose and benefits of single sign-on (SSO)" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Understand data protection and governance tasks for Microsoft 365 and Copilot",
    weight: "35–40%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Understand Microsoft Purview",
        bullets: [
          { slug: "purview-info-protection", label: "Microsoft Purview Information Protection" },
          { slug: "purview-dlp", label: "Microsoft Purview Data Loss Prevention (DLP)" },
          { slug: "purview-insider-risk", label: "Insider Risk Management" },
          { slug: "purview-dspm-ai", label: "Data Security Posture Management (DSPM) for AI" },
          { slug: "sensitivity-labels", label: "Use cases for sensitivity labels" },
          { slug: "data-classification", label: "Data classification" },
          { slug: "retention", label: "Retention and Data Lifecycle Management" }
        ]
      },
      {
        code: "2B",
        title: "Understand data security implications of Copilot",
        bullets: [
          { slug: "copilot-data-access", label: "How Copilot accesses data and how Microsoft Graph influences responses" },
          { slug: "copilot-protections", label: "How Copilot uses permissions/controls + responsible AI principles" }
        ]
      },
      {
        code: "2C",
        title: "Identify data protection and governance risks",
        bullets: [
          { slug: "governance-risk-tools", label: "Compliance Manager, activity explorer, eDiscovery, Communication Compliance, DSPM for AI" }
        ]
      },
      {
        code: "2D",
        title: "Identify and monitor oversharing in SharePoint",
        bullets: [
          { slug: "sharepoint-oversharing", label: "Oversharing tools, data access governance reports, SharePoint Advanced Management (RAC/RCD)" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Perform basic administrative tasks for Copilot and agents",
    weight: "25–30%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Understand features and capabilities of Copilot and agents",
        bullets: [
          { slug: "copilot-agent-capabilities", label: "Built-in capabilities of Copilot and agents; custom agents" },
          { slug: "copilot-licensing-models", label: "Copilot monthly license vs pay-as-you-go (incl. SharePoint)" },
          { slug: "copilot-enable-disable", label: "Which Copilot features can be enabled or disabled" },
          { slug: "researcher-analyst", label: "Use cases for Researcher and Analyst" }
        ]
      },
      {
        code: "3B",
        title: "Perform basic administrative tasks for Copilot",
        bullets: [
          { slug: "copilot-licenses-admin", label: "Assign Copilot licenses; manage pay-as-you-go billing" },
          { slug: "copilot-usage-monitoring", label: "Monitor usage & adoption (Copilot Analytics, admin center); manage prompts" }
        ]
      },
      {
        code: "3C",
        title: "Perform basic administrative tasks for agents",
        bullets: [
          { slug: "agents-create-access", label: "Configure user access to agents; create an agent; approval process" },
          { slug: "agents-monitoring", label: "Monitor agents via the Microsoft 365 and Power Platform admin centers" }
        ]
      }
    ]
  }
];
