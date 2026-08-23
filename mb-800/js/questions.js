/*
 * Copyright (c) 2026 Giulio Stefanica. All rights reserved.
 * https://www.linkedin.com/in/giuliostefanica/
 *
 * This content is original work by Giulio Stefanica.
 * Unauthorized copying, redistribution, or reproduction of this
 * material in any form is strictly prohibited without written
 * permission from the author.
 */
// MB-800 Dynamics 365 Business Central Functional Consultant - Practice Exam Questions
// COURSE-DERIVED: every question is written from the text of a specific Microsoft Learn
// MB-800T00 course unit or the Business Central product documentation the course references,
// and its `source` links to that unit/doc. correct = 0-based index.
// Mapped to the official MB-800 study guide (Skills measured as of June 30, 2026).

const QUESTIONS = [
  // ============================================================
  // DOMAIN 1: Set up Business Central (20–25%)  ->  ~12 questions
  // ============================================================
  {
    id: 1, skill: 1, section: "1A", bullet: "company-config",
    topic: "Configuration Packages",
    question: "A partner wants to reuse a standard finance setup across many new customer companies without re-entering setup tables each time. Which Business Central tool is designed for this?",
    options: [
      "A configuration (RapidStart) package exported as a .rapidstart file",
      "A general journal batch",
      "A security group",
      "A financial report definition"
    ],
    correct: 0,
    explanation: "After you set up a company that suits your needs, you can create a configuration (RapidStart) package containing the relevant setup data, then export it as a .rapidstart file and apply it when you create a new company that should be configured the same way.",
    source: { title: "Set up company configuration packages", url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/set-up-standard-company-configuration-packages" }
  },
  {
    id: 2, skill: 1, section: "1A", bullet: "company-config",
    topic: "Configuration Worksheet",
    question: "In the configuration worksheet, how is the formatting hierarchy used to organize the tables you want to transfer to a new company?",
    options: [
      "Tables contain areas, which contain groups",
      "Areas contain groups, which contain tables",
      "Groups contain areas, which contain tables",
      "Packages contain questionnaires, which contain areas"
    ],
    correct: 1,
    explanation: "Formatting in the configuration worksheet is based on a simple hierarchy: areas contain groups, which in turn contain tables. Areas and groups are optional but useful for arranging tables logically before adding the worksheet lines to a configuration package.",
    source: { title: "Set up company configuration packages", url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/set-up-standard-company-configuration-packages" }
  },
  {
    id: 3, skill: 1, section: "1A", bullet: "company-config",
    topic: "Configuration Packages — Posted Entries",
    question: "Why can't you include the customer, vendor, and item ledger entry tables in a configuration package when migrating setup data?",
    options: [
      "Those tables are always empty in a new company",
      "You can't import data to tables that contain posted entries",
      "Those tables are not part of the database schema",
      "Ledger entry tables are encrypted and can't be exported"
    ],
    correct: 1,
    explanation: "You can't import data to tables that contain posted entries, like the customer, vendor, and item ledger entry tables. Don't include this data in a configuration package; instead post entries with journals after importing the package.",
    source: { title: "Set up company configuration packages", url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/set-up-standard-company-configuration-packages" }
  },
  {
    id: 4, skill: 1, section: "1A", bullet: "core-functionality",
    topic: "Copilot & Agent Capabilities",
    question: "An administrator needs to turn an individual generally-available Copilot feature off for all users in a Business Central environment. Where do they do this?",
    options: [
      "On the General Ledger Setup page",
      "By deleting the user's permission set",
      "On the Copilot & agent capabilities page, by selecting the feature and choosing Deactivate",
      "In the Azure portal under Cognitive Services"
    ],
    correct: 2,
    explanation: "On the Copilot & agent capabilities page, the administrator can select a feature in the list and choose Activate or Deactivate to turn it on or off for all users. Copilot is a system feature, so the page controls individual capabilities rather than Copilot as a whole.",
    source: { title: "Configure Copilot and agent capabilities", url: "https://learn.microsoft.com/dynamics365/business-central/enable-ai" }
  },
  {
    id: 5, skill: 1, section: "1A", bullet: "core-functionality",
    topic: "Copilot — Allow Data Movement",
    question: "The Allow data movement toggle appears on the Copilot & agent capabilities page. What does its presence indicate?",
    options: [
      "The environment has exceeded its data storage quota",
      "The Business Central environment is in a different geography than the Azure OpenAI Service that Copilot uses",
      "Copilot has been permanently disabled by Microsoft",
      "The company is using on-premises Business Central"
    ],
    correct: 1,
    explanation: "The presence of the Allow data movement toggle indicates that the location of your Business Central environment differs from the Azure OpenAI Service geography that Copilot uses. To enable Copilot you must allow data movement across geographies.",
    source: { title: "Configure Copilot and agent capabilities", url: "https://learn.microsoft.com/dynamics365/business-central/enable-ai" }
  },
  {
    id: 6, skill: 1, section: "1B", bullet: "security-permissions",
    topic: "Permission Sets",
    question: "Two permission sets assigned to the same user both contain a security filter on the same table. How does Business Central combine them?",
    options: [
      "It uses the most restrictive filter",
      "It blocks access to the table entirely",
      "The filters are combined so the least restrictive filter is used",
      "Only the first permission set's filter applies"
    ],
    correct: 2,
    explanation: "When multiple permission sets that refer to the same table data are assigned to a user, they're combined so that the least restrictive filter is used. You shouldn't repeat a table in multiple permission sets you plan to combine for one user.",
    source: { title: "Using security filters", url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-filters" }
  },
  {
    id: 7, skill: 1, section: "1B", bullet: "security-permissions",
    topic: "Security Filters",
    question: "A consultant wants a salesperson to see only the records that contain a particular salesperson code. Which Business Central feature provides this record-level restriction?",
    options: [
      "A global dimension",
      "A security filter on the permission set's table data",
      "A number series",
      "A posting group"
    ],
    correct: 1,
    explanation: "Security filters provide record-level security. You set a security filter on a permission set's table data, choosing the field (such as Salesperson Code) and the value that limits the user's access to only those records.",
    source: { title: "Using security filters", url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-filters" }
  },
  {
    id: 8, skill: 1, section: "1B", bullet: "security-permissions",
    topic: "Security Groups",
    question: "What is the main advantage of using security groups rather than assigning permission sets to each user individually?",
    options: [
      "Security groups bypass license entitlements",
      "You can assign or change one permission set for many users in a single action",
      "Security groups remove the need for permission sets",
      "Only security groups support security filters"
    ],
    correct: 1,
    explanation: "Security groups make it easier to manage permissions: you organize users into groups and then assign or change one permission set for many users in one action. Permissions apply to all members of the group.",
    source: { title: "Assign permissions to users and groups", url: "https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions" }
  },
  {
    id: 9, skill: 1, section: "1C", bullet: "dimensions-setup",
    topic: "Global vs Shortcut Dimensions",
    question: "How many global dimensions and how many shortcut dimensions can you define on the General Ledger Setup page?",
    options: [
      "Two global dimensions and eight shortcut dimensions",
      "Eight global dimensions and two shortcut dimensions",
      "Four global dimensions and four shortcut dimensions",
      "Unlimited global dimensions and two shortcut dimensions"
    ],
    correct: 0,
    explanation: "You can set up two global dimensions and eight shortcut dimensions. Global dimensions are used as filters on reports, batch jobs, and analysis views; shortcut dimensions appear as fields on journal and document lines.",
    source: { title: "Work with dimensions", url: "https://learn.microsoft.com/dynamics365/business-central/finance-dimensions" }
  },
  {
    id: 10, skill: 1, section: "1C", bullet: "dimensions-setup",
    topic: "Blocked Dimension Combinations",
    question: "On the Dimension Combinations page, what does selecting the Blocked option for a combination of two dimensions mean?",
    options: [
      "Both dimensions can be posted together, but only for certain dimension values",
      "The two dimensions can't be posted on the same entry regardless of their values",
      "The dimensions are hidden from all reports",
      "The dimension values are deleted from the system"
    ],
    correct: 1,
    explanation: "A blocked dimension combination means you can't post both dimensions on the same entry regardless of the dimension values. A limited combination, by contrast, allows both dimensions but only for certain value combinations.",
    source: { title: "Work with dimensions", url: "https://learn.microsoft.com/dynamics365/business-central/finance-dimensions" }
  },
  {
    id: 11, skill: 1, section: "1C", bullet: "dimensions-setup",
    topic: "Default Dimension Priorities",
    question: "An entry has more than one proposed default dimension because the customer account and the item account each carry a different default. How do you resolve which default applies?",
    options: [
      "Block one of the dimensions",
      "Set up default dimension priorities by source code",
      "Delete the dimension from one of the accounts",
      "Change the global dimension on the General Ledger Setup page"
    ],
    correct: 1,
    explanation: "Different account types can have different default dimensions, so an entry might have more than one proposed default. You apply priority rules on the Default Dimension Priorities page per source code to avoid such conflicts.",
    source: { title: "Work with dimensions", url: "https://learn.microsoft.com/dynamics365/business-central/finance-dimensions" }
  },
  {
    id: 12, skill: 1, section: "1D", bullet: "approvals-workflows",
    topic: "Approval Users",
    question: "Before creating purchase approval workflows, what must you set up to define which sales and purchase records each approver is qualified to approve?",
    options: [
      "A configuration package for each approver",
      "An approver and substitute approver for each approval user, with amount limits",
      "A separate company for each approval level",
      "A security filter on the Workflow table"
    ],
    correct: 1,
    explanation: "Before you create approval workflows, you must set up an approver and substitute approver for each approval user. To define which records they're qualified to approve, you can also set amount limits for approvers.",
    source: { title: "Walkthrough: Set up and use a purchase approval workflow", url: "https://learn.microsoft.com/dynamics365/business-central/walkthrough-setting-up-and-using-a-purchase-approval-workflow" }
  },
  {
    id: 13, skill: 1, section: "1D", bullet: "approvals-workflows",
    topic: "Workflow Notifications",
    question: "Workflow approval notifications in Business Central are sent through which mechanism, which must be set up to start automatically?",
    options: [
      "A Power BI dataflow",
      "A job queue",
      "A number series",
      "The Adjust Exchange Rates batch job"
    ],
    correct: 1,
    explanation: "All workflow notifications are sent through a job queue. You must make sure the job queue is set up to handle workflow notifications and that Start Automatically From Server is selected.",
    source: { title: "Approval workflow notifications", url: "https://learn.microsoft.com/dynamics365/business-central/across-setting-up-workflow-notifications" }
  },

  // ============================================================
  // DOMAIN 2: Configure financials (30–35%)  ->  ~18 questions
  // ============================================================
  {
    id: 14, skill: 2, section: "2A", bullet: "financial-setup",
    topic: "Currency Exchange Rates",
    question: "When you run the Adjust Exchange Rates batch job, which exchange rate amounts on the Currency Exchange Rates page are used to update open bank, receivables, and payables transactions?",
    options: [
      "The Exchange Rate Amount and Relational Exchange Rate Amount",
      "The Adjustment Exch. Rate Amount and Relational Adjmt Exch. Rate Amt",
      "The Fix Exchange Rate Amount only",
      "The Unit-Amount Rounding Precision"
    ],
    correct: 1,
    explanation: "The standard Exchange Rate Amount / Relational Exchange Rate Amount are used as defaults on new documents. The Adjustment Exch. Rate Amount and Relational Adjmt Exch. Rate Amt are used by the Adjust Exchange Rates batch job to update open bank, receivables, and payables transactions.",
    source: { title: "Update currency exchange rates", url: "https://learn.microsoft.com/dynamics365/business-central/finance-how-update-currencies" }
  },
  {
    id: 15, skill: 2, section: "2A", bullet: "financial-setup",
    topic: "Currencies & G/L Accounts",
    question: "Why can't you link a currency code directly to a general ledger account in Business Central?",
    options: [
      "G/L accounts can only hold foreign currency",
      "Amounts on general ledger accounts are always in local currency (LCY)",
      "Currency codes are reserved for bank accounts only",
      "G/L accounts don't support posting groups"
    ],
    correct: 1,
    explanation: "You can't link currency codes to G/L accounts because amounts on general ledger accounts are in LCY. Instead, you track foreign-currency balances on bank, customer, and vendor accounts; posting groups link those to the relevant G/L accounts where values show in LCY.",
    source: { title: "Set up currencies", url: "https://learn.microsoft.com/dynamics365/business-central/finance-set-up-currencies" }
  },
  {
    id: 16, skill: 2, section: "2A", bullet: "financial-setup",
    topic: "Additional Reporting Currency",
    question: "A company wants every general ledger entry to be reported automatically in both LCY and a second currency. What should they set up?",
    options: [
      "A unit-amount rounding precision",
      "An additional reporting currency",
      "A payment tolerance",
      "A global dimension"
    ],
    correct: 1,
    explanation: "By defining an additional reporting currency, amounts are automatically reported in both the local currency (LCY) and the additional reporting currency on each general ledger entry and on other entries.",
    source: { title: "Setting up finance", url: "https://learn.microsoft.com/dynamics365/business-central/finance-setup-finance" }
  },
  {
    id: 17, skill: 2, section: "2B", bullet: "chart-of-accounts",
    topic: "G/L Account Types",
    question: "Which G/L account type allows journals to post amounts directly to the account in the chart of accounts?",
    options: [
      "Heading",
      "Total",
      "Posting",
      "Begin-Total"
    ],
    correct: 2,
    explanation: "Each line in the chart of accounts is a G/L account of one of five types. Only Posting accounts allow journals to post lines to them; Heading, Total, Begin-Total, and End-Total define structure and subtotals for financial reporting.",
    source: { title: "Understanding the Chart of Accounts", url: "https://learn.microsoft.com/dynamics365/business-central/finance-chart-of-accounts" }
  },
  {
    id: 18, skill: 2, section: "2B", bullet: "chart-of-accounts",
    topic: "G/L Account Categories",
    question: "How many top-level account categories does Business Central provide for mapping G/L accounts to build basic financial reports?",
    options: [
      "Six: Assets, Liabilities, Equity, Income, Cost of Goods, and Expense",
      "Four: Assets, Liabilities, Income, and Expense",
      "Three: Balance Sheet, Income Statement, and Cash Flow",
      "Five: Posting, Heading, Total, Begin-Total, and End-Total"
    ],
    correct: 0,
    explanation: "You create the first layer of a financial report by selecting an account category for each G/L account. There are six categories: Assets, Liabilities, Equity, Income, Cost of Goods, and Expense.",
    source: { title: "Organize general ledger (G/L) data using account categories", url: "https://learn.microsoft.com/dynamics365/business-central/bi-account-categories" }
  },
  {
    id: 19, skill: 2, section: "2B", bullet: "chart-of-accounts",
    topic: "Dimensions vs Accounts",
    question: "A consultant wants to avoid creating a separate G/L account for every department and project. What is the recommended approach?",
    options: [
      "Create a configuration package for each department",
      "Use dimensions to categorize entries instead of expanding the chart of accounts",
      "Use a separate company per department",
      "Add more shortcut dimensions to the bank account"
    ],
    correct: 1,
    explanation: "Dimensions categorize entries so you can track and analyze them. Instead of setting up separate G/L accounts for each department and project, you use dimensions as the basis for analysis and avoid a complicated chart of accounts.",
    source: { title: "Understanding the Chart of Accounts", url: "https://learn.microsoft.com/dynamics365/business-central/finance-chart-of-accounts" }
  },
  {
    id: 20, skill: 2, section: "2B", bullet: "posting-groups",
    topic: "General Business vs Product Posting Groups",
    question: "On a sales document, which combination of posting groups determines the revenue (income statement) posting?",
    options: [
      "The customer posting group and the inventory posting group",
      "The general business posting group and the general product posting group",
      "The bank account posting group and the FA posting group",
      "The vendor posting group and the customer posting group"
    ],
    correct: 1,
    explanation: "The revenue posting is determined by the combination of the general business posting group (from the customer) and the general product posting group (from the item). The customer posting group determines the receivables (balance sheet) posting.",
    source: { title: "Set up posting groups", url: "https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups" }
  },
  {
    id: 21, skill: 2, section: "2B", bullet: "posting-groups",
    topic: "Customer Posting Group",
    question: "Which posting group defines the accounts to use when you post accounts receivable transactions for a customer?",
    options: [
      "General product posting group",
      "Inventory posting group",
      "Customer posting group",
      "Bank account posting group"
    ],
    correct: 2,
    explanation: "Customer posting groups define the accounts to use when you post accounts receivable transactions. They are a specific posting group set up on the Customer Posting Groups page; the receivables posting on a sales document is determined by the customer's posting group.",
    source: { title: "Set up posting groups", url: "https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups" }
  },
  {
    id: 22, skill: 2, section: "2B", bullet: "posting-groups",
    topic: "Inventory Posting Setup",
    question: "Inventory posting groups are assigned to items and then mapped to G/L accounts on which page, in combination with a location?",
    options: [
      "General Posting Setup page",
      "Inventory Posting Setup page",
      "VAT Posting Setup page",
      "Customer Posting Groups page"
    ],
    correct: 1,
    explanation: "You assign inventory posting groups to items and map them to G/L accounts on the Inventory Posting Setup page. When you post an item entry, the system posts to the G/L account set up for the combination of inventory posting group and location.",
    source: { title: "Set up posting groups", url: "https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups" }
  },
  {
    id: 23, skill: 2, section: "2B", bullet: "posting-groups",
    topic: "Multiple Posting Groups",
    question: "A company wants users to be able to choose a posting group other than a customer's default when working with a sales document. What must be enabled?",
    options: [
      "The Allow Multiple Posting Groups toggle",
      "The Automatic Cost Posting checkbox",
      "The Force Doc. Balance field",
      "The Direct Posting field on the G/L account"
    ],
    correct: 0,
    explanation: "To let people choose alternative customer, vendor, or employee posting groups that replace the default, you turn on the Allow Multiple Posting Groups toggle on the relevant setup pages.",
    source: { title: "Set up posting groups", url: "https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups" }
  },
  {
    id: 24, skill: 2, section: "2C", bullet: "journals-banks",
    topic: "Journal Templates vs Batches",
    question: "What is the relationship between a general journal template and a general journal batch?",
    options: [
      "A batch contains many templates, each with its own page",
      "A template defines the page and basic structure; you create one or more batches under it for personal layouts and number series",
      "Templates and batches are identical and interchangeable",
      "A batch defines the posting accounts; a template stores the journal lines"
    ],
    correct: 1,
    explanation: "Each journal template is represented by a dedicated page with the functions and fields it needs. Under each template you set up one or more batches — for example a personal payment journal batch with its own layout, number series, and settings.",
    source: { title: "Work with general journals", url: "https://learn.microsoft.com/dynamics365/business-central/ui-work-general-journals" }
  },
  {
    id: 25, skill: 2, section: "2C", bullet: "journals-banks",
    topic: "Recurring Journal Allocations",
    question: "In a recurring general journal, how can you split a single posted amount across several different accounts?",
    options: [
      "By creating a separate journal template for each account",
      "By defining allocation lines with an Allocation %, Allocation Quantity, or Amount",
      "By blocking the dimension combination",
      "By posting the journal once per account manually"
    ],
    correct: 1,
    explanation: "You can allocate an entry in a recurring general journal to several accounts by choosing the Allocations action and adding a line for each allocation, filling in the Allocation %, Allocation Quantity, or Amount field along with the account.",
    source: { title: "Allocate recurring costs and income", url: "https://learn.microsoft.com/dynamics365/business-central/year-allocate-costs-income" }
  },
  {
    id: 26, skill: 2, section: "2C", bullet: "journals-banks",
    topic: "Suggest Balancing Amount",
    question: "On the General Journal Batches page, what does selecting the Suggest Balancing Amount checkbox do?",
    options: [
      "It blocks posting until the journal balances by date",
      "It prefills the Amount field with the value required to balance the document",
      "It exports the batch to Excel",
      "It assigns a number series to the batch"
    ],
    correct: 1,
    explanation: "If you select Suggest Balancing Amount on the line for a batch, the Amount field on subsequent general journal lines with the same document number is automatically prefilled with the value required to balance the document.",
    source: { title: "Work with general journals", url: "https://learn.microsoft.com/dynamics365/business-central/ui-work-general-journals" }
  },
  {
    id: 27, skill: 2, section: "2C", bullet: "ap-ar",
    topic: "Cash Receipt Journal",
    question: "When applying a customer payment to multiple open customer ledger entries while posting a cash receipt journal, which action lets you select the entries to apply to?",
    options: [
      "Insert FA Bal. Account",
      "Apply Entries, then Set Applies-to ID",
      "Calculate Inventory",
      "Get Tables"
    ],
    correct: 1,
    explanation: "To apply a payment to multiple customer ledger entries when posting, you enter the full payment, choose the Apply Entries action, select the entries, and choose Set Applies-to ID before posting the cash receipt journal.",
    source: { title: "Reconcile customer payments with a cash receipt journal", url: "https://learn.microsoft.com/dynamics365/business-central/receivables-how-apply-sales-transactions-manually" }
  },
  {
    id: 28, skill: 2, section: "2C", bullet: "ap-ar",
    topic: "Application Method",
    question: "When the Application Method field on a customer card is set to Apply to Oldest, how are payments applied?",
    options: [
      "Payments are never applied automatically",
      "Payments are applied to the oldest open entry unless you manually specify an entry",
      "Payments are applied to the newest open entry only",
      "Payments are split equally across all open entries"
    ],
    correct: 1,
    explanation: "If the Application Method on the customer card contains Apply to Oldest, payments are applied to the oldest open entry unless you manually specify an entry. If the method is Manual, you always apply entries manually.",
    source: { title: "Reconcile customer payments with a cash receipt journal", url: "https://learn.microsoft.com/dynamics365/business-central/receivables-how-apply-sales-transactions-manually" }
  },
  {
    id: 29, skill: 2, section: "2D", bullet: "fixed-assets-setup",
    topic: "Depreciation Books",
    question: "Why would a company assign more than one depreciation book to the same fixed asset?",
    options: [
      "Each book must use the same depreciation terms",
      "To calculate depreciation differently for different purposes, such as one for tax reporting and another for internal reporting",
      "Because a fixed asset can't be acquired without two books",
      "To split the asset into two physical components"
    ],
    correct: 1,
    explanation: "Depreciation books define the different ways depreciation is calculated. You can assign multiple depreciation books to a fixed asset for different purposes, for example one for tax reporting and another for internal reporting, each with its own terms.",
    source: { title: "Set up fixed asset depreciation", url: "https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-depreciation" }
  },
  {
    id: 30, skill: 2, section: "2D", bullet: "fixed-assets-setup",
    topic: "Depreciation Methods",
    question: "Which depreciation method depreciates the asset value with a fixed yearly percentage or amount evenly over the depreciation period?",
    options: [
      "Declining-Balance 1",
      "Straight-Line",
      "Half-Year Convention",
      "Declining-Balance 2"
    ],
    correct: 1,
    explanation: "With Straight-Line depreciation you depreciate the asset value either with a fixed yearly percentage or a fixed yearly amount evenly over the depreciation period. Declining-balance methods allocate the largest part of the cost to the early years.",
    source: { title: "Depreciation methods for fixed assets", url: "https://learn.microsoft.com/dynamics365/business-central/fa-depreciation-methods" }
  },
  {
    id: 31, skill: 2, section: "2D", bullet: "fixed-assets-setup",
    topic: "DB1/SL Method",
    question: "With the DB1/SL depreciation method, how does Business Central decide which amount to post each period?",
    options: [
      "It always uses the straight-line amount",
      "It always uses the declining-balance amount",
      "It calculates both a straight-line and a declining-balance amount and posts the greater of the two",
      "It averages the two amounts"
    ],
    correct: 2,
    explanation: "DB1/SL combines Declining-Balance 1 and Straight-Line. The Calculate Depreciation batch job computes both a straight-line amount and a declining-balance amount, and only the greater of the two is transferred to the journal each period.",
    source: { title: "Depreciation methods for fixed assets", url: "https://learn.microsoft.com/dynamics365/business-central/fa-depreciation-methods" }
  },

  // ============================================================
  // DOMAIN 3: Configure sales and purchasing (10–15%)  ->  ~7 questions
  // ============================================================
  {
    id: 32, skill: 3, section: "3A", bullet: "inventory-setup",
    topic: "Costing Method — FIFO",
    question: "A company sells items with a limited shelf life and wants the oldest goods sold first. Which costing method matches this assumption?",
    options: [
      "LIFO",
      "FIFO",
      "Standard",
      "Specific"
    ],
    correct: 1,
    explanation: "FIFO assumes the first items placed in inventory are sold first, which suits items with a limited shelf life because the oldest goods need to be sold before they pass their sell-by date.",
    source: { title: "Design details: Costing methods", url: "https://learn.microsoft.com/dynamics365/business-central/design-details-costing-methods" }
  },
  {
    id: 33, skill: 3, section: "3A", bullet: "inventory-setup",
    topic: "Costing Method — Standard",
    question: "Which costing method presets an item's unit cost based on an estimate, then adjusts to the actual cost later through variance values?",
    options: [
      "Average",
      "Specific",
      "Standard",
      "FIFO"
    ],
    correct: 2,
    explanation: "With the Standard costing method an item's unit cost is preset based on an estimate. When the actual cost is realized later, the standard cost must be adjusted to the actual cost through variance values. It's used where cost control is critical.",
    source: { title: "Design details: Costing methods", url: "https://learn.microsoft.com/dynamics365/business-central/design-details-costing-methods" }
  },
  {
    id: 34, skill: 3, section: "3A", bullet: "inventory-setup",
    topic: "Changing Costing Method",
    question: "Under what condition can you NOT change an item's costing method?",
    options: [
      "When the item has a variant",
      "When item ledger entries already exist for the item",
      "When the item is assigned to a location",
      "When the item has an SKU"
    ],
    correct: 1,
    explanation: "You can't change an item's costing method if item ledger entries exist for the item — that is, after you've bought or sold it. The recommended workaround is to replace the item with a new one and transfer inventory using an assembly order.",
    source: { title: "Design details: Costing methods", url: "https://learn.microsoft.com/dynamics365/business-central/design-details-costing-methods" }
  },
  {
    id: 35, skill: 3, section: "3A", bullet: "inventory-setup",
    topic: "Average Cost Calculation",
    question: "On the Inventory Setup page, which two fields must be filled to enable average cost calculation?",
    options: [
      "Automatic Cost Posting and Expected Cost Posting to G/L",
      "Average Cost Period and Average Cost Calc. Type",
      "Costing Method and Unit Cost",
      "Location Mandatory and Variant Mandatory"
    ],
    correct: 1,
    explanation: "Average cost is a periodic weighted average. Two fields on the Inventory Setup page enable it: Average Cost Period (Day, Week, Month, or Accounting Period) and Average Cost Calc. Type (Item, or Item/Variant/Location).",
    source: { title: "Design details: Average cost", url: "https://learn.microsoft.com/dynamics365/business-central/design-details-average-cost" }
  },
  {
    id: 36, skill: 3, section: "3B", bullet: "master-data",
    topic: "Default Dimensions on Locations",
    question: "On a transfer order, when From Location and To Location have different default Department dimensions, which location's default dimension is copied?",
    options: [
      "Always the From Location",
      "The default from the last location field entered (the in-transit location is ignored)",
      "Always the in-transit location",
      "Neither — dimensions must be entered manually"
    ],
    correct: 1,
    explanation: "Because transfer orders deal with more than one location, the order of data entry matters: default dimensions are copied from the last location field entered, and the in-transit location is ignored.",
    source: { title: "Set up locations", url: "https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-locations" }
  },
  {
    id: 37, skill: 3, section: "3B", bullet: "pricing-discounts",
    topic: "Line Discount vs Invoice Discount",
    question: "Which statement correctly distinguishes a sales line discount from a sales invoice discount?",
    options: [
      "A line discount is a percentage off the whole document; an invoice discount is per line",
      "A line discount applies to individual lines based on a combination such as customer/item/quantity; an invoice discount is a percentage subtracted from the document total when it exceeds a minimum",
      "Both apply only to purchase documents",
      "An invoice discount is an amount per line; a line discount is a percentage of the total"
    ],
    correct: 1,
    explanation: "A line discount is given for lines based on a combination of customer, item, minimum quantity, unit of measure, or period. An invoice discount is a percentage subtracted from the document total if the sum of all lines exceeds a certain minimum.",
    source: { title: "Set up prices and discounts", url: "https://learn.microsoft.com/dynamics365/business-central/across-prices-and-discounts" }
  },
  {
    id: 38, skill: 3, section: "3B", bullet: "pricing-discounts",
    topic: "Calc. Inv. Discount",
    question: "Which setting makes Business Central automatically calculate invoice discounts on sales documents?",
    options: [
      "The Allow Line Disc. toggle on the price list",
      "The Calc. Inv. Discount toggle on the Sales & Receivables Setup page",
      "The Discount Posting field on the General Posting Setup",
      "The Best Price Calculation field on the item"
    ],
    correct: 1,
    explanation: "To have Business Central automatically calculate invoice discounts for sales, you turn on the Calc. Inv. Discount toggle on the Sales & Receivables Setup page, then define discount percentages per customer.",
    source: { title: "Set up prices and discounts", url: "https://learn.microsoft.com/dynamics365/business-central/across-prices-and-discounts" }
  },

  // ============================================================
  // DOMAIN 4: Perform Business Central operations (30–35%)  ->  ~18 questions
  // ============================================================
  {
    id: 39, skill: 4, section: "4A", bullet: "basic-tasks",
    topic: "Open in Excel vs Edit in Excel",
    question: "A user wants to change records on a list page in Excel and push the updates back into Business Central. Which action should they use?",
    options: [
      "Open in Excel",
      "Edit in Excel",
      "Enter analysis mode",
      "Print to PDF"
    ],
    correct: 1,
    explanation: "Both Open in Excel and Edit in Excel are available from the Share icon. Open in Excel exports a read-only view, while Edit in Excel lets you make changes to records in Excel and then update the data back in Business Central.",
    source: { title: "View and edit in Excel from Business Central", url: "https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel" }
  },
  {
    id: 40, skill: 4, section: "4A", bullet: "basic-tasks",
    topic: "Data Analysis Mode",
    question: "What is a key characteristic of the data analysis (analysis mode) feature on list pages?",
    options: [
      "It permanently changes the underlying data of the list page",
      "It analyzes data directly on the page without changing the underlying data or running a report",
      "It requires exporting to Excel first",
      "It is only available to delegated administrators"
    ],
    correct: 1,
    explanation: "The data analysis feature lets you calculate, summarize, and examine data interactively directly from a list page or query, without running a report or opening Excel — and it doesn't change the underlying data or the page layout.",
    source: { title: "Analyze list page and query data using data analysis feature", url: "https://learn.microsoft.com/dynamics365/business-central/analysis-mode" }
  },
  {
    id: 41, skill: 4, section: "4A", bullet: "process-sales-purchases",
    topic: "Sales Order — Ship before Invoice",
    question: "On a sales order, why can't you create an invoice for a quantity before it has shipped?",
    options: [
      "Invoicing always happens automatically with shipment",
      "Before you can invoice you must have recorded a shipment, or choose to ship and invoice at the same time",
      "Sales orders never support partial invoicing",
      "The Qty. to Invoice field is read-only on sales orders"
    ],
    correct: 1,
    explanation: "When you post a sales order you create a shipment and an invoice, together or independently. You can't create an invoice from the Sales Orders page for something that hasn't shipped — you must record a shipment first, or ship and invoice at the same time.",
    source: { title: "Posting sales", url: "https://learn.microsoft.com/dynamics365/business-central/ui-post-sales" }
  },
  {
    id: 42, skill: 4, section: "4A", bullet: "process-sales-purchases",
    topic: "Partial Shipment & Invoice",
    question: "How do you create a partial shipment and a partial invoice from a single sales order?",
    options: [
      "Split the order into two separate orders",
      "Fill in the Qty. to Ship and Qty. to Invoice fields on the individual order lines before posting",
      "Use the Combine Shipments batch job",
      "Set the Shipping Advice field to Complete"
    ],
    correct: 1,
    explanation: "You can create a partial shipment and a partial invoice by filling in the Qty. to Ship and Qty. to Invoice fields on the individual sales order lines before you post. (Setting Shipping Advice to Complete actually prevents partial shipments.)",
    source: { title: "Sell products with a customer sales order", url: "https://learn.microsoft.com/dynamics365/business-central/sales-how-sell-products" }
  },
  {
    id: 43, skill: 4, section: "4A", bullet: "process-sales-purchases",
    topic: "Blanket Sales Orders",
    question: "What is the purpose of a blanket sales order?",
    options: [
      "To invoice multiple shipments on one document",
      "To manage a customer's commitment to purchase large quantities delivered in several shipments over time",
      "To reverse a posted sales shipment",
      "To set up recurring sales prices"
    ],
    correct: 1,
    explanation: "A blanket sales order manages your customer's commitment to purchase large quantities delivered in several shipments over time. You convert blanket order lines into individual sales orders as deliveries are made.",
    source: { title: "Sales", url: "https://learn.microsoft.com/dynamics365/business-central/sales-manage-sales" }
  },
  {
    id: 44, skill: 4, section: "4A", bullet: "process-sales-purchases",
    topic: "Purchase Order — Receive before Invoice",
    question: "On a purchase order for items, what must happen before you can post a purchase invoice?",
    options: [
      "You must record a receipt, or choose to receive and invoice at the same time",
      "You must first create a blanket purchase order",
      "You must run the Adjust Cost - Item Entries batch job",
      "You must post the vendor payment"
    ],
    correct: 0,
    explanation: "When you post a purchase order for items you can create a receipt and an invoice together or independently. You can't create a purchase invoice for products that aren't received — you must record a receipt first, or receive and invoice at the same time.",
    source: { title: "Record purchases with purchase invoices and orders", url: "https://learn.microsoft.com/dynamics365/business-central/purchasing-how-record-purchases" }
  },
  {
    id: 45, skill: 4, section: "4A", bullet: "process-sales-purchases",
    topic: "Undo Shipment / Reversal",
    question: "A drop-shipment sales shipment was posted but not yet invoiced. How can it be reversed?",
    options: [
      "By deleting the posted sales shipment record",
      "By opening the posted sales shipment and choosing Undo Shipment",
      "By editing the Package Tracking No. field",
      "By posting a negative quantity in the item journal"
    ],
    correct: 1,
    explanation: "You can reverse posted drop shipments when both the sales shipment and the related purchase receipt aren't yet invoiced. You open the posted sales shipment and choose Undo Shipment; Business Central reverts the linked purchase receipt and creates correction entries.",
    source: { title: "Make drop shipments", url: "https://learn.microsoft.com/dynamics365/business-central/sales-how-drop-shipment" }
  },
  {
    id: 46, skill: 4, section: "4B", bullet: "financial-documents",
    topic: "Combine Shipments",
    question: "A customer received several separate shipments and should receive one invoice for all of them. Which feature accomplishes this?",
    options: [
      "Recurring sales lines",
      "Combine Shipments on a single invoice",
      "Blanket sales order",
      "Post Batch"
    ],
    correct: 1,
    explanation: "The Combine Shipments feature lets you invoice a customer once for multiple shipments by combining the shipments on one invoice.",
    source: { title: "Sales", url: "https://learn.microsoft.com/dynamics365/business-central/sales-manage-sales" }
  },
  {
    id: 47, skill: 4, section: "4B", bullet: "financial-documents",
    topic: "Correcting Posted Documents",
    question: "For critical fields on a posted sales document that affect the audit trail, how should corrections be made?",
    options: [
      "Edit the posted document directly",
      "Reverse or undo the posting rather than editing it",
      "Delete the customer ledger entry",
      "Change the value in the cash receipt journal"
    ],
    correct: 1,
    explanation: "You can edit certain noncritical fields on posted documents (such as Package Tracking No.). But for more critical fields that affect the auditing trail, you must reverse or undo the posting instead of editing it directly.",
    source: { title: "Posting sales", url: "https://learn.microsoft.com/dynamics365/business-central/ui-post-sales" }
  },
  {
    id: 48, skill: 4, section: "4B", bullet: "financial-documents",
    topic: "Discount Posting",
    question: "Whether a separate G/L entry is posted for a sales discount amount depends on which setting?",
    options: [
      "The Discount Posting field on the Sales & Receivables Setup page",
      "The Direct Posting field on the G/L account",
      "The Force Doc. Balance field on the journal template",
      "The Allow Multiple Posting Groups toggle"
    ],
    correct: 0,
    explanation: "When a sales order is posted, posting might result in a G/L entry for the discount amount. Whether an entry for the discount is posted depends on the contents of the Discount Posting field on the Sales & Receivables Setup page.",
    source: { title: "Posting sales", url: "https://learn.microsoft.com/dynamics365/business-central/ui-post-sales" }
  },
  {
    id: 49, skill: 4, section: "4B", bullet: "journals-payments",
    topic: "Payment Reconciliation Journal",
    question: "Which page is one of the fastest ways to register payments by importing a bank statement file and automatically matching payments to open customer or vendor ledger entries?",
    options: [
      "The Cash Receipt Journal page",
      "The Payment Registration page",
      "The Payment Reconciliation Journal page",
      "The Bank Account Reconciliation page"
    ],
    correct: 2,
    explanation: "The Payment Reconciliation Journal page imports a bank statement file or feed and applies payments to open customer or vendor ledger entries based on data matches. You can review and change matches, and the bank account is reconciled when all payments are applied.",
    source: { title: "Managing receivables", url: "https://learn.microsoft.com/dynamics365/business-central/receivables-manage-receivables" }
  },
  {
    id: 50, skill: 4, section: "4B", bullet: "journals-payments",
    topic: "Bank Account Reconciliation",
    question: "Which page do you use to reconcile a bank account by matching imported bank statement lines with your system's bank account ledger entries, but where you can't apply payments?",
    options: [
      "Payment Registration page",
      "Bank Account Reconciliation page",
      "Cash Receipt Journal page",
      "General Journal page"
    ],
    correct: 1,
    explanation: "On the Bank Account Reconciliations page you reconcile bank accounts by matching imported bank statement lines with your bank account ledger entries (and can reconcile check payments). You can't apply payments there — that's done in journals like the Payment Reconciliation or Cash Receipt journal.",
    source: { title: "Managing receivables", url: "https://learn.microsoft.com/dynamics365/business-central/receivables-manage-receivables" }
  },
  {
    id: 51, skill: 4, section: "4B", bullet: "journals-payments",
    topic: "Unapply Entries",
    question: "When you correct (unapply) an application of customer entries, what happens to the entries that the original application closed?",
    options: [
      "They are permanently deleted",
      "Correcting entries with opposite-sign amounts are posted and the closed entries are reopened",
      "Only the payment discount is reversed",
      "The customer card is blocked"
    ],
    correct: 1,
    explanation: "When you correct an application, correcting entries are created and posted for all entries — the same as the originals but with the opposite sign in the Amount field — and the entries that the application closed are reopened.",
    source: { title: "Reconcile customer payments with a cash receipt journal", url: "https://learn.microsoft.com/dynamics365/business-central/receivables-how-apply-sales-transactions-manually" }
  },
  {
    id: 52, skill: 4, section: "4B", bullet: "journals-payments",
    topic: "Cash Receipt Journal Accounts",
    question: "On a cash receipt journal line for a non-cash customer payment, what should the Bal. Account Type typically be set to?",
    options: [
      "Fixed Asset",
      "Bank Account",
      "Customer",
      "Item"
    ],
    correct: 1,
    explanation: "When posting a customer payment in the cash receipt journal you set Account Type to Customer and the Bal. Account Type to Bank Account for non-cash payments (or G/L Account for cash payments), then post the journal.",
    source: { title: "Reconcile customer payments with a cash receipt journal", url: "https://learn.microsoft.com/dynamics365/business-central/receivables-how-apply-sales-transactions-manually" }
  },
  {
    id: 53, skill: 4, section: "4C", bullet: "fa-transactions",
    topic: "Acquire Fixed Asset",
    question: "What must you do before you can acquire a fixed asset in Business Central?",
    options: [
      "Post a disposal entry",
      "Set up and assign a depreciation book to the fixed asset",
      "Run the Calculate Depreciation batch job",
      "Block the asset for posting"
    ],
    correct: 1,
    explanation: "You must set up and assign a depreciation book to each fixed asset before you can acquire it. You then acquire it by posting an acquisition transaction from the Fixed Asset G/L Journal, or by using the Assisted Fixed Asset Acquisition page.",
    source: { title: "Acquire fixed assets", url: "https://learn.microsoft.com/dynamics365/business-central/fa-how-acquire" }
  },
  {
    id: 54, skill: 4, section: "4C", bullet: "fa-transactions",
    topic: "Dispose of Fixed Asset",
    question: "Which statement is true about posting a fixed asset disposal?",
    options: [
      "A disposal entry can be posted at any time before depreciation",
      "A disposal entry must be the last entry posted for a fixed asset, and the total disposal amount must be a credit",
      "Disposal entries are posted from the cash receipt journal",
      "You can post only one disposal entry per asset, never partial"
    ],
    correct: 1,
    explanation: "A disposal entry must be the last entry posted for a fixed asset. For partially disposed assets you can post more than one disposal entry, but the total of all posted disposal amounts must be a credit amount. You post it from the Fixed Asset G/L Journal with FA Posting Type Disposal.",
    source: { title: "Dispose of or retire fixed assets", url: "https://learn.microsoft.com/dynamics365/business-central/fa-how-dispose-retire" }
  },
  {
    id: 55, skill: 4, section: "4C", bullet: "fa-transactions",
    topic: "Post Depreciation",
    question: "When posting depreciation manually from the Fixed Asset G/L Journal, which action creates the second journal line for the balancing account set up for depreciation posting?",
    options: [
      "Calculate Depreciation",
      "Insert FA Bal. Account",
      "Get Related Tables",
      "Set Applies-to ID"
    ],
    correct: 1,
    explanation: "After creating the line with FA Posting Type Depreciation, you choose the Insert FA Bal. Account action, which creates a second journal line for the balancing account set up for depreciation posting in the FA posting group.",
    source: { title: "Depreciate or amortize fixed assets", url: "https://learn.microsoft.com/dynamics365/business-central/fa-how-depreciate-amortize" }
  },
  {
    id: 56, skill: 4, section: "4C", bullet: "inventory-transactions",
    topic: "Reclassification Journal",
    question: "Which journal do you use to change attributes such as the location, bin, or dimensions on item ledger entries without changing quantities?",
    options: [
      "The physical inventory journal",
      "The item reclassification journal",
      "The cash receipt journal",
      "The recurring general journal"
    ],
    correct: 1,
    explanation: "To change attributes on item ledger entries — such as dimensions, or to transfer items by reclassifying bin and location codes — you use an item reclassification journal.",
    source: { title: "Count, adjust, and reclassify inventory using journals", url: "https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-adjust-reclassify" }
  },
  {
    id: 57, skill: 4, section: "4C", bullet: "inventory-transactions",
    topic: "Physical Inventory Count",
    question: "On the Physical Inventory Journal, what happens after you enter the actual counted quantities and choose Post?",
    options: [
      "Nothing is recorded until you also run the cash receipt journal",
      "Posting creates item ledger entries and physical inventory ledger entries reflecting the difference",
      "The calculated quantities are recalculated and overwritten",
      "The items are transferred to the adjustment bin only"
    ],
    correct: 1,
    explanation: "When you enter the actual counted quantity in the Qty. (Phys. Inventory) field and post, Business Central adjusts inventory to reflect the difference between expected and actual quantities, creating item ledger entries and physical inventory ledger entries.",
    source: { title: "Count, adjust, and reclassify inventory using journals", url: "https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-adjust-reclassify" }
  },
  {
    id: 58, skill: 4, section: "4C", bullet: "inventory-transactions",
    topic: "Misplaced Items vs Reclassification",
    question: "A physical count reveals differences caused by items posted with incorrect locations. How should these be corrected?",
    options: [
      "Enter the differences directly in the physical inventory journal",
      "Use a reclassification journal or a transfer order to redirect the items to the correct locations",
      "Post a negative adjustment for the whole quantity",
      "Delete the affected item ledger entries"
    ],
    correct: 1,
    explanation: "If the physical count reveals differences caused by items posted with incorrect locations, you should NOT enter those differences in the physical inventory journal. Instead use a reclassification journal or a transfer order to move the items to the correct locations.",
    source: { title: "Count, adjust, and reclassify inventory using journals", url: "https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-adjust-reclassify" }
  }
];
