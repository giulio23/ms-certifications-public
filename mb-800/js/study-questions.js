/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// MB-800 Dynamics 365 Business Central Functional Consultant - Study-mode Questions
// COURSE-DERIVED: each question is written from a specific Microsoft Learn MB-800T00 course unit
// or the Business Central product doc the course references, and links to it (correct = 0-based index).
// These reinforce the study-guide bullets.

const STUDY_QUESTIONS = [
  // ---- Domain 1 ----
  {
    id: 101, skill: 1, section: "1A", bullet: "company-config",
    topic: "Configuration Templates",
    question: "When migrating master data such as customers and vendors into a new company, what feature provides a set of default settings automatically assigned to imported records?",
    options: [
      "Configuration templates",
      "Number series",
      "Posting groups",
      "Security groups"
    ],
    correct: 0,
    explanation: "Configuration templates contain a set of default settings that are automatically assigned to records imported into Business Central. They facilitate importing master data such as customer and vendor information and are an alternative to cloud migration tools.",
    source: { title: "Set up company configuration packages", url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/set-up-standard-company-configuration-packages" }
  },
  {
    id: 102, skill: 1, section: "1A", bullet: "core-functionality",
    topic: "Copilot — Administrator Requirements",
    question: "Which permission, in a user's Business Central account, allows them to configure Copilot and agent capabilities?",
    options: [
      "DATA ANALYSIS - EXEC",
      "SUPER permission (or an equivalent admin license such as Dynamics 365 Administrator)",
      "Copilot Sys Features only",
      "Direct Insert on the User Group Member table"
    ],
    correct: 1,
    explanation: "To configure Copilot and agent capabilities you need SUPER permission in your Business Central user account, or one of the admin licenses such as Internal BC Administrator or Dynamics 365 Administrator. Business Central doesn't yet offer object-level permissions for Copilot configuration.",
    source: { title: "Configure Copilot and agent capabilities", url: "https://learn.microsoft.com/dynamics365/business-central/enable-ai" }
  },
  {
    id: 103, skill: 1, section: "1B", bullet: "security-permissions",
    topic: "License Entitlements vs Permission Sets",
    question: "A Team Member-licensed user is assigned the SUPER permission set. What limits what they can actually do?",
    options: [
      "Nothing — SUPER overrides the license",
      "The Team Member license entitlements still limit the user",
      "Only security filters limit the user",
      "The user is blocked from signing in"
    ],
    correct: 1,
    explanation: "License entitlements are the broad filter for what a user can do, while permission sets are the fine-grained filter. Even with the SUPER permission set, a Team Member-licensed user is still limited by the Team Member license entitlements.",
    source: { title: "Access controls for Dynamics 365 Business Central", url: "https://learn.microsoft.com/azure/azure-sovereign-clouds/public/access-controls-d365-business-central" }
  },
  {
    id: 104, skill: 1, section: "1C", bullet: "dimensions-setup",
    topic: "Changing Global Dimensions",
    question: "Why should you choose your global dimensions carefully to avoid changing them later?",
    options: [
      "Global dimensions can never be changed once set",
      "Changing a global dimension requires updating all entries posted with it, which can be time-consuming and lock tables",
      "Changing a global dimension deletes all dimension values",
      "Global dimensions are not used in reports"
    ],
    correct: 1,
    explanation: "Changing a global or shortcut dimension requires all entries posted with the dimension to be updated. Using the Change Global Dimensions action can be time-consuming, affect performance, and lock tables during the update, so you should choose global dimensions carefully.",
    source: { title: "Work with dimensions", url: "https://learn.microsoft.com/dynamics365/business-central/finance-dimensions" }
  },
  {
    id: 105, skill: 1, section: "1D", bullet: "approvals-workflows",
    topic: "Workflow Templates",
    question: "On the Workflow Templates page, what does a workflow name that starts with the prefix 'MS-' indicate?",
    options: [
      "The workflow is disabled",
      "The template was added by Microsoft",
      "The workflow requires Power Automate",
      "The template is a Power BI report"
    ],
    correct: 1,
    explanation: "Business Central includes many preconfigured workflows represented by workflow templates. When a template's name starts with MS-, it means the template was added by Microsoft. You can copy these templates to create new workflows.",
    source: { title: "Workflows in Business Central", url: "https://learn.microsoft.com/dynamics365/business-central/across-workflow" }
  },

  // ---- Domain 2 ----
  {
    id: 106, skill: 2, section: "2A", bullet: "financial-setup",
    topic: "Realized Gains/Losses",
    question: "When a currency adjustment triggers an unrealized gain at month-end and the actual payment is later registered at a different rate, where is the actual loss posted?",
    options: [
      "To the inventory adjustment account",
      "To the realized losses account, after the unrealized transaction is reversed with the payment",
      "To the customer posting group's receivables account only",
      "To the additional reporting currency account"
    ],
    correct: 1,
    explanation: "At month-end a currency adjustment can trigger an unrealized gain. At payment time, the unrealized transaction is reversed together with the payment, and the actual loss is posted to the realized losses account.",
    source: { title: "Currencies in Business Central", url: "https://learn.microsoft.com/dynamics365/business-central/finance-currencies" }
  },
  {
    id: 107, skill: 2, section: "2B", bullet: "chart-of-accounts",
    topic: "Generate Financial Reports",
    question: "After mapping all chart-of-accounts G/L accounts to categories and subcategories, which action updates the built-in financial reports with that mapping?",
    options: [
      "Get Tables",
      "Generate Financial Reports",
      "Adjust Exchange Rates",
      "Calculate Inventory"
    ],
    correct: 1,
    explanation: "After you set up categories and subcategories and map all accounts, you choose Generate Financial Reports on the G/L Account Categories page. This updates the M-prefixed financial reports with the mapping for your chart of accounts.",
    source: { title: "Organize general ledger (G/L) data using account categories", url: "https://learn.microsoft.com/dynamics365/business-central/bi-account-categories" }
  },
  {
    id: 108, skill: 2, section: "2B", bullet: "posting-groups",
    topic: "General Posting Setup",
    question: "On the General Posting Setup page, what is configured for each combination of general business and general product posting groups?",
    options: [
      "A set of general ledger accounts to post to, such as sales and COGS accounts",
      "The depreciation method for fixed assets",
      "The number series for documents",
      "The security filter for the table"
    ],
    correct: 0,
    explanation: "The General Posting Setup combines business and product posting groups; for each combination you assign a set of general ledger accounts to post to. This lets the same item post sales/COGS to different accounts depending on the customer's business posting group.",
    source: { title: "Set up posting groups", url: "https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups" }
  },
  {
    id: 109, skill: 2, section: "2C", bullet: "journals-banks",
    topic: "Background Error Check",
    question: "Which feature on the General Journal Batches page validates a finance journal while you work on it, showing issues in the Journal Check FactBox before posting?",
    options: [
      "Suggest Balancing Amount",
      "Background Error Check",
      "Force Doc. Balance",
      "Preview Posting"
    ],
    correct: 1,
    explanation: "On the General Journal Batches page you can choose Background Error Check to have Business Central validate finance journals while you work on them. The Check Document / Journal Check FactBoxes then show issues in the current line and the whole batch.",
    source: { title: "Work with general journals", url: "https://learn.microsoft.com/dynamics365/business-central/ui-work-general-journals" }
  },
  {
    id: 110, skill: 2, section: "2C", bullet: "ap-ar",
    topic: "Cross-Currency Application",
    question: "When you apply a customer invoice in one currency to a payment in another currency, which date determines the exchange rate used for conversion?",
    options: [
      "The work date",
      "The posting date of the applying entry (Entry A)",
      "The due date of the invoice",
      "The last adjustment date of the currency"
    ],
    correct: 1,
    explanation: "When applying ledger entries in different currencies, the posting date on the applying entry (Entry A) is used to find the exchange rate that converts amounts on the other entry. Application of entries in different currencies must first be enabled.",
    source: { title: "Reconcile customer payments with a cash receipt journal", url: "https://learn.microsoft.com/dynamics365/business-central/receivables-how-apply-sales-transactions-manually" }
  },
  {
    id: 111, skill: 2, section: "2D", bullet: "fixed-assets-setup",
    topic: "Half-Year Convention",
    question: "When the Half-Year Convention is turned on for a fixed asset, how much depreciation is taken in the first fiscal year?",
    options: [
      "A full year regardless of the starting date",
      "Six months of depreciation, regardless of the Depreciation Starting Date",
      "No depreciation in the first year",
      "Depreciation proportional to the exact starting date"
    ],
    correct: 1,
    explanation: "When you apply the Half-Year Convention method, a fixed asset has six months of depreciation in the first fiscal year, regardless of the contents of the Depreciation Starting Date field. It can be used with Straight-Line, Declining-Balance 1, and DB1/SL.",
    source: { title: "Depreciation methods for fixed assets", url: "https://learn.microsoft.com/dynamics365/business-central/fa-depreciation-methods" }
  },

  // ---- Domain 3 ----
  {
    id: 112, skill: 3, section: "3A", bullet: "inventory-setup",
    topic: "LIFO Costing",
    question: "Why is the LIFO costing method disallowed in many countries/regions?",
    options: [
      "It requires serial number tracking",
      "It can be used to depress profit",
      "It only works with standard cost items",
      "It can't be combined with locations"
    ],
    correct: 1,
    explanation: "LIFO assumes the last items placed in inventory are sold first. When prices are rising, the value on the income statement decreases, lowering tax liabilities. Because it can be used to depress profit, LIFO is disallowed in many countries/regions.",
    source: { title: "Design details: Costing methods", url: "https://learn.microsoft.com/dynamics365/business-central/design-details-costing-methods" }
  },
  {
    id: 113, skill: 3, section: "3B", bullet: "master-data",
    topic: "Invoice Discount Codes",
    question: "On a customer card, what does the Invoice Disc. Code field reference?",
    options: [
      "A number series for invoices",
      "An existing customer whose invoice discount terms are reused",
      "A posting group for receivables",
      "A dimension value for the customer"
    ],
    correct: 1,
    explanation: "Invoice discount codes are represented by existing customer cards. By selecting another customer's code in the Invoice Disc. Code field, you quickly assign that customer's invoice discount terms, which saves time when many customers share the same terms.",
    source: { title: "Set up prices and discounts", url: "https://learn.microsoft.com/dynamics365/business-central/across-prices-and-discounts" }
  },
  {
    id: 114, skill: 3, section: "3B", bullet: "pricing-discounts",
    topic: "Best Price Calculation",
    question: "After special prices and line discounts are set up for sales and purchases, what does Business Central do automatically on documents and journal lines?",
    options: [
      "It blocks the document until prices are confirmed",
      "It calculates the best price on sales and purchase documents and on project and item journal lines",
      "It removes all discounts above a threshold",
      "It posts the discount to a separate company"
    ],
    correct: 1,
    explanation: "After you record special prices and line discounts for sales and purchases, Business Central automatically calculates the best price on sales and purchase documents and on project and item journal lines, helping ensure optimal profit.",
    source: { title: "Record special sales prices and discounts", url: "https://learn.microsoft.com/dynamics365/business-central/sales-how-record-sales-price-discount-payment-agreements" }
  },

  // ---- Domain 4 ----
  {
    id: 115, skill: 4, section: "4B", bullet: "financial-documents",
    topic: "Prepayments",
    question: "Where do you access the posting options related to prepayments when processing a sales order?",
    options: [
      "Only on the Sales Invoices page",
      "Under the Posting menu of the sales order, which includes prepayment-related options",
      "On the General Ledger Setup page",
      "From the Payment Reconciliation Journal"
    ],
    correct: 1,
    explanation: "When posting a sales order, the Posting menu offers actions such as Post, Post and Send, Preview Posting, and Post Batch. For sales orders you can also access options related to prepayments (invoicing prepayments) from there.",
    source: { title: "Posting sales", url: "https://learn.microsoft.com/dynamics365/business-central/ui-post-sales" }
  },
  {
    id: 116, skill: 4, section: "4C", bullet: "inventory-transactions",
    topic: "Transfer Orders vs Reclassification",
    question: "Which two methods can you use to transfer inventory items between locations?",
    options: [
      "Transfer orders and the item reclassification journal",
      "Cash receipt journals and the physical inventory journal",
      "Configuration packages and number series",
      "Posting groups and dimension priorities"
    ],
    correct: 0,
    explanation: "You can transfer inventory items between locations using transfer orders (to manage warehouse activities) or with the item reclassification journal, which can reclassify bin and location codes.",
    source: { title: "Manage inventory", url: "https://learn.microsoft.com/dynamics365/business-central/inventory-manage-inventory" }
  }
];
