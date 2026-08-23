/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// MB-800 Study Guide Taxonomy
// Maps to the official Microsoft MB-800 study guide (Skills measured as of June 30, 2026)

const STUDY_GUIDE = [
  {
    skill: 1,
    title: "Set up Business Central",
    weight: "20–25%",
    color: "blue",
    sections: [
      {
        code: "1A",
        title: "Create and configure a company; set up core functionality",
        bullets: [
          { slug: "company-config", label: "Create a company with Assisted Setup, configuration packages, and data migration" },
          { slug: "core-functionality", label: "Set up core functionality (reports & layouts, job queues, number series, Copilot/agent capabilities)" }
        ]
      },
      {
        code: "1B",
        title: "Manage security",
        bullets: [
          { slug: "security-permissions", label: "Manage users, permission sets, security filters, and security groups" }
        ]
      },
      {
        code: "1C",
        title: "Set up dimensions",
        bullets: [
          { slug: "dimensions-setup", label: "Set up dimensions, global/shortcut dimensions, defaults, priorities, and blocking combinations" }
        ]
      },
      {
        code: "1D",
        title: "Manage approvals using workflows",
        bullets: [
          { slug: "approvals-workflows", label: "Set up approval workflows, notifications, and approval/workflow user setup" }
        ]
      }
    ]
  },
  {
    skill: 2,
    title: "Configure financials",
    weight: "30–35%",
    color: "emerald",
    sections: [
      {
        code: "2A",
        title: "Set up financial management",
        bullets: [
          { slug: "financial-setup", label: "Set up G/L, accounting periods, payment terms, currencies, and exchange rates" }
        ]
      },
      {
        code: "2B",
        title: "Manage chart of accounts; set up posting groups",
        bullets: [
          { slug: "chart-of-accounts", label: "Manage the chart of accounts, account categories, and financial reporting" },
          { slug: "posting-groups", label: "Set up specific & general posting groups and the general/inventory posting setup" }
        ]
      },
      {
        code: "2C",
        title: "Set up journals, bank accounts, A/P and A/R",
        bullets: [
          { slug: "journals-banks", label: "Set up journal templates, batches, recurring journals, and bank accounts" },
          { slug: "ap-ar", label: "Set up accounts payable/receivable, payment & cash-receipt journals, and entry application" }
        ]
      },
      {
        code: "2D",
        title: "Configure fixed assets",
        bullets: [
          { slug: "fixed-assets-setup", label: "Configure depreciation books, FA classes/subclasses, and depreciation methods" }
        ]
      }
    ]
  },
  {
    skill: 3,
    title: "Configure sales and purchasing",
    weight: "10–15%",
    color: "amber",
    sections: [
      {
        code: "3A",
        title: "Set up inventory",
        bullets: [
          { slug: "inventory-setup", label: "Set up inventory, item settings, costing methods, locations, and SKUs" }
        ]
      },
      {
        code: "3B",
        title: "Configure master data; manage pricing and discounts",
        bullets: [
          { slug: "master-data", label: "Configure customer and vendor core settings" },
          { slug: "pricing-discounts", label: "Manage prices, line discounts, and invoice discounts" }
        ]
      }
    ]
  },
  {
    skill: 4,
    title: "Perform Business Central operations",
    weight: "30–35%",
    color: "violet",
    sections: [
      {
        code: "4A",
        title: "Basic tasks and processing purchases & sales",
        bullets: [
          { slug: "basic-tasks", label: "Personalize pages, filter, find documents, Edit in Excel, and use data analysis mode" },
          { slug: "process-sales-purchases", label: "Process quotes, orders, shipments/receipts, blanket orders, and reversals" }
        ]
      },
      {
        code: "4B",
        title: "Process financial documents, journals & payments",
        bullets: [
          { slug: "financial-documents", label: "Process invoices, credit memos, combined shipments, corrections, and prepayments" },
          { slug: "journals-payments", label: "Process payment/cash-receipt journals, apply/undo entries, and bank reconciliation" }
        ]
      },
      {
        code: "4C",
        title: "Process fixed asset and inventory transactions",
        bullets: [
          { slug: "fa-transactions", label: "Process fixed asset acquisitions, depreciations, and disposals" },
          { slug: "inventory-transactions", label: "Process inventory counts, adjustments, reclassifications, and transfers" }
        ]
      }
    ]
  }
];
