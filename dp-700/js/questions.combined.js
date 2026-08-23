/*
 * DP-700 COMBINED bank — original generated questions grounded in the verified COURSE-MAP.
 * 100% Microsoft-Learn-derived, publishable.
 */
const COMBINED_QUESTIONS = [
 {
  "id": "gen-1",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineering team wants every Spark session in a Fabric workspace to start faster and share a common set of libraries and Spark properties without configuring them per notebook. As a workspace admin, which workspace setting should you configure to enforce these defaults?",
  "options": [
   "Attach a default environment under the Data Engineering/Science Spark settings",
   "Disable high concurrency mode for notebooks",
   "Assign the workspace to a domain",
   "Enable a OneLake shortcut in the Lakehouse"
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
  "explanation": "In workspace Spark settings you can set a default environment, which packages libraries and Spark properties so every attached session inherits the same configuration without per-notebook setup.",
  "source": {
   "title": "Workspace administration settings for Data Engineering and Data Science — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/workspace-admin-settings"
  }
 },
 {
  "id": "gen-2",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your workspace uses the starter pool, but a long-running ETL job needs larger nodes and a specific autoscale range. You want jobs in this workspace to use that configuration by default. What should you do in the workspace Spark settings?",
  "options": [
   "Turn off the workspace's V-Order setting",
   "Create a custom Spark pool and set it as the default pool for the workspace",
   "Switch the workspace to Viewer-only roles",
   "Move the workspace into a different capacity region"
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
  "explanation": "Workspace admins can create custom Spark pools with specific node sizes and autoscale settings and designate one as the default pool used by Spark jobs in that workspace.",
  "source": {
   "title": "Workspace administration settings for Data Engineering and Data Science — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/workspace-admin-settings"
  }
 },
 {
  "id": "gen-3",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team reports that when several members run notebooks at the same time, each session spins up a separate Spark application, consuming capacity quickly. Which workspace Spark setting reduces startup overhead by letting multiple notebooks share the same Spark application?",
  "options": [
   "Dynamic data masking",
   "Deployment pipelines",
   "High concurrency mode",
   "Sensitivity labels"
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
  "explanation": "High concurrency mode lets multiple notebooks share a single Spark application/session, reducing session startup time and capacity consumption when many users run concurrently.",
  "source": {
   "title": "Workspace administration settings for Data Engineering and Data Science — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/workspace-admin-settings"
  }
 },
 {
  "id": "gen-4",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "As a Fabric administrator you need to group related workspaces from the finance business unit so a data steward can manage them and apply settings across that grouping, following a data-mesh approach. Which Fabric capability should you use?",
  "options": [
   "Domains",
   "OneLake shortcuts",
   "Apache Airflow jobs",
   "Deployment rules"
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
  "explanation": "Domains group workspaces (typically by business unit) in a data-mesh architecture, letting domain admins govern and apply delegated settings across the assigned workspaces.",
  "source": {
   "title": "Domains — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  }
 },
 {
  "id": "gen-5",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You have created a domain for the Sales business unit. You want a lead analyst to be able to add and remove workspaces from the domain and manage the domain's settings, but not to have tenant-wide administrative power. Which role should you assign them?",
  "options": [
   "Fabric tenant administrator",
   "Domain admin",
   "Workspace Viewer",
   "Capacity administrator"
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
  "explanation": "Domain admins manage a specific domain — including its settings and which workspaces are assigned — without needing full tenant administrator privileges.",
  "source": {
   "title": "Domains — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  }
 },
 {
  "id": "gen-6",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A domain admin wants members of their domain to be able to assign their own workspaces to the domain, rather than requiring a central admin to do it. Which type of user, once granted at the domain level, can assign workspaces they have appropriate access to into the domain?",
  "options": [
   "Domain viewers",
   "Capacity contributors",
   "Guest users",
   "Domain contributors"
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
  "explanation": "Domain contributors are users allowed to assign workspaces (for which they are a workspace admin) to the domain, enabling self-service, decentralized workspace assignment.",
  "source": {
   "title": "Domains — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  }
 },
 {
  "id": "gen-7",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In the Fabric OneLake logical hierarchy, how are data items such as lakehouses and warehouses organized relative to workspaces?",
  "options": [
   "Each capacity contains exactly one workspace and one item",
   "Items exist at the tenant root and are linked to workspaces by shortcuts only",
   "A workspace is a container within OneLake, and data items live inside workspaces",
   "Workspaces are stored inside items as sub-folders"
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
  "explanation": "OneLake mirrors the Fabric hierarchy: the tenant has one OneLake, workspaces act as containers within it, and data items (lakehouses, warehouses, etc.) are stored inside those workspaces.",
  "source": {
   "title": "OneLake, the OneDrive for data — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-overview"
  }
 },
 {
  "id": "gen-8",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Because OneLake is provisioned automatically with every Fabric tenant and there is exactly one per tenant, which statement best describes how many OneLake instances an organization has and whether it can opt out?",
  "options": [
   "One OneLake per tenant, provisioned automatically and cannot be removed",
   "One OneLake per capacity, created manually by an admin",
   "One OneLake per workspace, optional per workspace",
   "Multiple OneLakes per tenant, one for each domain"
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
  "explanation": "OneLake is a single, unified data lake provisioned automatically for the entire Fabric tenant; there is one per tenant and it cannot be opted out of.",
  "source": {
   "title": "OneLake, the OneDrive for data — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-overview"
  }
 },
 {
  "id": "gen-9",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team frequently queries an external ADLS Gen2 source through a OneLake shortcut and wants to reduce repeated egress and latency for that remote data. Which OneLake capability addresses this?",
  "options": [
   "Row-level security",
   "Shortcut caching",
   "High concurrency mode",
   "V-Order compaction"
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
  "explanation": "OneLake shortcut caching stores frequently accessed data from external shortcut targets so repeated reads avoid re-fetching from the remote source, reducing egress and latency.",
  "source": {
   "title": "OneLake, the OneDrive for data — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-overview"
  }
 },
 {
  "id": "gen-10",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineering team needs to orchestrate a complex set of interdependent Python tasks defined as directed acyclic graphs (DAGs) and wants a managed, Airflow-native experience inside Fabric Data Factory. Which Fabric item should they create?",
  "options": [
   "A Dataflow Gen2",
   "An Apache Airflow job",
   "An Eventstream",
   "A deployment pipeline"
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
  "explanation": "Apache Airflow jobs in Fabric Data Factory provide a managed Apache Airflow runtime for authoring and orchestrating DAG-based workflows.",
  "source": {
   "title": "What is an Apache Airflow job? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/apache-airflow-jobs-concepts"
  }
 },
 {
  "id": "gen-11",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which statement most accurately describes how Apache Airflow jobs run in Microsoft Fabric compared to self-hosting Apache Airflow?",
  "options": [
   "They require you to provision and patch your own Airflow web server and scheduler VMs",
   "They only support no-code drag-and-drop pipelines, not Python DAGs",
   "They can orchestrate only Spark notebooks and nothing else",
   "They are a fully managed service where Fabric handles the Airflow runtime so you focus on authoring DAGs"
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
  "explanation": "Apache Airflow jobs offer a managed Airflow experience: Fabric provisions and manages the underlying Airflow runtime, so engineers concentrate on writing and running DAGs rather than operating infrastructure.",
  "source": {
   "title": "What is an Apache Airflow job? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/apache-airflow-jobs-concepts"
  }
 },
 {
  "id": "gen-12",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are creating a new Apache Airflow job in Fabric to schedule a daily data-processing DAG. In what form do you author the workflow that the Airflow job will execute?",
  "options": [
   "As a T-SQL stored procedure",
   "As a Python file that defines a DAG",
   "As a KQL queryset",
   "As a Power Query M script"
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
  "explanation": "Apache Airflow jobs run DAGs authored as Python files; you add the DAG definition file to the Airflow job project, then run and monitor it.",
  "source": {
   "title": "Create an Apache Airflow Job — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/create-apache-airflow-jobs"
  }
 },
 {
  "id": "gen-13",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After creating an Apache Airflow job and adding a DAG, an engineer wants to confirm it executed successfully and inspect task-level logs. Which interface does Fabric surface for this?",
  "options": [
   "The Power BI report render dialog",
   "The Apache Airflow UI (Airflow web interface) exposed by the job",
   "The Spark history server only",
   "The OneLake file explorer"
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
  "explanation": "A Fabric Apache Airflow job exposes the Apache Airflow UI, where you can trigger the DAG, watch runs, and drill into task-level logs to monitor execution.",
  "source": {
   "title": "Create an Apache Airflow Job — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/create-apache-airflow-jobs"
  }
 },
 {
  "id": "gen-14",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A workspace admin wants to grant a contractor the ability to create and run notebooks and pipelines in a workspace, but NOT to add or remove other users or change workspace settings. Which workspace role should they assign?",
  "options": [
   "Admin",
   "Member",
   "Contributor",
   "Viewer"
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
  "explanation": "The Contributor role can create and edit content such as notebooks and pipelines, but cannot manage workspace access or administer workspace settings, which are Admin/Member capabilities.",
  "source": {
   "title": "Roles in workspaces in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  }
 },
 {
  "id": "gen-15",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A business user needs to open and read reports and lakehouse data in a workspace but should not be able to modify or create any items. Which workspace role provides only this read access?",
  "options": [
   "Viewer",
   "Contributor",
   "Member",
   "Admin"
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
  "explanation": "The Viewer role grants read-only access to view content in a workspace; it cannot create, edit, or delete items.",
  "source": {
   "title": "Roles in workspaces in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  }
 },
 {
  "id": "gen-16",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Only one workspace role can update the workspace's Spark settings and Git integration configuration and manage all user access. A lead engineer must both configure the default Spark pool and add new members. Which role must they hold?",
  "options": [
   "Viewer",
   "Contributor",
   "Admin",
   "Member with sharing disabled"
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
  "explanation": "The Admin role has full control of the workspace, including managing settings such as Spark configuration and Git integration and administering user access and roles.",
  "source": {
   "title": "Roles in workspaces in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  }
 },
 {
  "id": "gen-17",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A workspace admin wants users to be able to add new members and share content, and edit all items, but wants to reserve deleting the workspace and some tenant-delegated administration for a narrower group. Which role grants broad content and sharing rights while stopping short of full Admin?",
  "options": [
   "Viewer",
   "Contributor",
   "Member",
   "Guest"
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
  "explanation": "The Member role can add other members, share items, and edit all content, but does not have the full administrative control (such as deleting the workspace) that the Admin role provides.",
  "source": {
   "title": "Roles in workspaces in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  }
 },
 {
  "id": "gen-18",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A governance lead wants certain settings — such as which sensitivity labels or endorsement options apply — to be managed at the domain level and inherited by all workspaces assigned to that domain, rather than configured tenant-wide. Which Fabric feature enables this delegated administration?",
  "options": [
   "OneLake shortcut caching",
   "High concurrency Spark sessions",
   "Deployment pipeline rules",
   "Delegated domain settings"
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
  "explanation": "Domains support delegated settings, letting a domain admin manage governance options that apply to the workspaces assigned to the domain instead of relying solely on tenant-level configuration.",
  "source": {
   "title": "Domains — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  }
 },
 {
  "id": "gen-19",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineering team wants an end-to-end approach in Fabric that combines source control for their items with a controlled promotion path from a development workspace to production. Which two Fabric capabilities together form the foundation of this CI/CD approach?",
  "options": [
   "Git integration for version control and deployment pipelines for release promotion",
   "OneLake shortcuts for versioning and Dataflows Gen2 for release promotion",
   "Sensitivity labels for version control and the Monitoring hub for release promotion",
   "Workspace roles for version control and semantic model refresh for release promotion"
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
  "explanation": "Fabric CI/CD is built on Git integration (workspace-level version control) and deployment pipelines (promotion across Dev/Test/Prod stages); these are the two core building blocks described in the CI/CD overview.",
  "source": {
   "title": "Introduction to CI/CD in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/cicd-overview"
  }
 },
 {
  "id": "gen-20",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your organization stores its Fabric source code in Azure Repos. You want changes made by developers in a Fabric workspace to be tracked and committed to a branch. At what level is Fabric Git integration connected?",
  "options": [
   "At the individual item level, each item connecting to its own repository",
   "At the capacity level, covering all workspaces on the capacity",
   "At the workspace level, connecting a workspace to a branch of a repository",
   "At the tenant level, a single repository for the whole organization"
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
  "explanation": "Fabric Git integration is configured at the workspace level: a workspace is connected to a specific branch of a Git repository, and supported items in that workspace are synced with it.",
  "source": {
   "title": "What is Microsoft Fabric Git integration? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  }
 },
 {
  "id": "gen-21",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team has connected their Fabric workspace to a Git branch. A developer created a new notebook directly in the workspace and it now appears with an 'Uncommitted' status in the source control panel. What action moves this change into the connected Git branch?",
  "options": [
   "Update, which pulls the latest changes from Git into the workspace",
   "Commit, which pushes the workspace changes to the connected branch",
   "Deploy, which promotes the item to the next pipeline stage",
   "Endorse, which certifies the item for other users"
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
  "explanation": "In Git integration, Commit pushes workspace changes to the connected branch, while Update pulls incoming changes from Git into the workspace; the two directions keep the workspace and repo in sync.",
  "source": {
   "title": "What is Microsoft Fabric Git integration? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  }
 },
 {
  "id": "gen-22",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A lead engineer is setting up a deployment pipeline to promote content through Development, Test, and Production. What is the minimum recommended structure for a Fabric deployment pipeline?",
  "options": [
   "A single stage that contains all three workspaces",
   "One stage per developer, regardless of environment",
   "Exactly two stages: source and destination",
   "Multiple stages, each assigned to a separate workspace, typically Dev, Test, and Prod"
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
  "explanation": "A deployment pipeline is composed of stages, each backed by its own workspace; the common pattern is three stages (Development, Test, Production) so content can be promoted in a controlled sequence.",
  "source": {
   "title": "Introduction to deployment pipelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  }
 },
 {
  "id": "gen-23",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When you deploy items from the Development stage to the Test stage of a deployment pipeline for the first time, how does Fabric associate the items between the two stages?",
  "options": [
   "It creates paired (cloned) items in the target stage and maintains the pairing for future deployments",
   "It moves the items out of the source stage into the target stage",
   "It creates a OneLake shortcut from the target back to the source item",
   "It requires you to manually recreate each item in the target workspace"
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
  "explanation": "Deploying copies items into the target stage and pairs the source and target items; on later deployments Fabric updates the existing paired items rather than creating duplicates.",
  "source": {
   "title": "Introduction to deployment pipelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  }
 },
 {
  "id": "gen-24",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A semantic model in your Development workspace points to a development lakehouse connection. When you promote it to Production, it must instead point to the production data source without a developer manually editing it after each deployment. Which deployment pipeline feature addresses this?",
  "options": [
   "Git integration branching",
   "Deployment rules that change item configuration in the target stage",
   "Sensitivity label inheritance",
   "High concurrency session sharing"
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
  "explanation": "Deployment rules let you define how specific item properties, such as data source or parameter values, are set in the target stage so promoted items automatically use environment-appropriate configuration.",
  "source": {
   "title": "Introduction to deployment pipelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  }
 },
 {
  "id": "gen-25",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer wants to manage a Fabric Warehouse schema as source-controlled code, building and validating table and view definitions locally before publishing. Which approach does the Warehouse development and deployment guidance recommend?",
  "options": [
   "Manually scripting each object in the web SQL editor and copying it between workspaces",
   "Exporting the warehouse as a Power BI template (.pbit) file",
   "Storing CREATE TABLE statements in a Dataflow Gen2 query",
   "Using a SQL database project (DacFx) in tools such as Visual Studio Code or Visual Studio"
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
  "explanation": "Warehouse development and deployment recommends SQL database projects based on DacFx, edited in VS Code or Visual Studio, so the warehouse schema can be version-controlled, built, and deployed as code.",
  "source": {
   "title": "Warehouse source control and deployment — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/development-deployment"
  }
 },
 {
  "id": "gen-26",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which statement best describes the relationship between Git integration and deployment pipelines in a mature Fabric CI/CD process?",
  "options": [
   "They are mutually exclusive; enabling one disables the other for a workspace",
   "Git integration replaces deployment pipelines once branching is configured",
   "They are complementary: Git handles source control and collaboration, while deployment pipelines handle promotion between environments",
   "Deployment pipelines are only available when Git integration is disabled"
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
  "explanation": "The CI/CD overview presents Git integration and deployment pipelines as complementary tools: Git for versioning and collaboration, deployment pipelines for promoting content across stages; teams commonly use both together.",
  "source": {
   "title": "Introduction to CI/CD in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/cicd-overview"
  }
 },
 {
  "id": "gen-27",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer runs Update in the Fabric source control panel and receives a conflict notice because both the workspace and the connected Git branch changed the same item. What must happen before the workspace and branch can be back in sync?",
  "options": [
   "The capacity must be paused and resumed to clear the conflict",
   "The conflict must be resolved before the commit or update can complete",
   "The item must be deleted from Git and recreated in the workspace",
   "The workspace must be disconnected from Git permanently"
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
  "explanation": "When the same item is changed in both the workspace and the branch, Git integration reports a conflict that must be resolved before the sync (commit/update) can complete.",
  "source": {
   "title": "What is Microsoft Fabric Git integration? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  }
 },
 {
  "id": "gen-28",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Beyond Git integration and deployment pipelines, which additional capability does the Fabric CI/CD overview describe for managing environment-specific values (such as connection strings or IDs) across stages so items can be parameterized centrally?",
  "options": [
   "Variable library",
   "Query Insights",
   "V-Order optimization",
   "Sensitivity labels"
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
  "explanation": "The CI/CD overview describes the Variable library as a way to store and manage environment-specific values that items can reference, complementing Git integration and deployment pipelines.",
  "source": {
   "title": "Introduction to CI/CD in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/cicd-overview"
  }
 },
 {
  "id": "gen-29",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A platform engineer wants to automate Fabric lifecycle operations from scripts and pipelines, for example creating workspaces or triggering deployments as part of an infrastructure-as-code workflow. Which tooling does the Fabric CI/CD overview point to for this automation?",
  "options": [
   "The KQL queryset editor",
   "The Power BI Desktop external tools menu",
   "The OneLake file explorer",
   "The Fabric CLI and REST APIs supporting infrastructure-as-code"
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
  "explanation": "The CI/CD overview highlights the Fabric CLI and REST APIs for automating lifecycle operations and enabling infrastructure-as-code approaches to managing Fabric content.",
  "source": {
   "title": "Introduction to CI/CD in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/cicd-overview"
  }
 },
 {
  "id": "gen-30",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team connects a workspace to a new, empty Git branch that contains no Fabric content, while the workspace already contains several items. After connecting, which direction of sync commits the existing workspace items into the branch?",
  "options": [
   "Update (Git to workspace)",
   "Deploy (stage to stage)",
   "Commit (workspace to Git)",
   "Rollback (previous version restore)"
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
  "explanation": "When the workspace holds the content and the branch is empty, committing pushes the workspace items into the Git branch; Update goes the other way (Git into the workspace).",
  "source": {
   "title": "What is Microsoft Fabric Git integration? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  }
 },
 {
  "id": "gen-31",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which Git providers are supported for Fabric Git integration?",
  "options": [
   "Only on-premises Git servers reached through a data gateway",
   "Only GitLab and Bitbucket",
   "Azure DevOps (Azure Repos) and GitHub",
   "Any provider that exposes an SMB file share"
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
  "explanation": "Fabric Git integration supports Azure DevOps (Azure Repos Git) and GitHub as the connected repository providers for workspace version control.",
  "source": {
   "title": "What is Microsoft Fabric Git integration? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  }
 },
 {
  "id": "gen-32",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "During a deployment pipeline promotion, an administrator wants to promote only a subset of items and see, before deploying, which items differ between the source and target stages. What does the deployment pipeline provide to support this?",
  "options": [
   "A comparison that shows items as new, changed, or the same between adjacent stages, with selective deployment",
   "An automatic full deployment that cannot be limited to specific items",
   "A requirement to delete the target workspace before every deployment",
   "A read-only view with no ability to choose which items deploy"
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
  "explanation": "Deployment pipelines compare adjacent stages and flag items as new, different, or unchanged, and you can select which items to deploy rather than always deploying everything.",
  "source": {
   "title": "Introduction to deployment pipelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  }
 },
 {
  "id": "gen-33",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A DevOps engineer wants CI/CD for a Fabric Warehouse: schema changes reviewed via pull requests and deployed automatically through an Azure DevOps pipeline. Which combination aligns with the Warehouse development and deployment guidance?",
  "options": [
   "Editing tables only in the web portal and emailing change scripts for review",
   "A SQL database project stored in Git, with build/publish (DacFx) integrated into a CI/CD pipeline",
   "A Dataflow Gen2 exported as JSON and manually imported per environment",
   "Storing the warehouse definition in a semantic model .pbix file"
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
  "explanation": "The guidance supports keeping a SQL database project in source control and using its DacFx build/publish in CI/CD pipelines (e.g., Azure DevOps) so warehouse schema changes flow through code review and automated deployment.",
  "source": {
   "title": "Warehouse source control and deployment — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/development-deployment"
  }
 },
 {
  "id": "gen-34",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team practices trunk-based development with short-lived feature branches for their Fabric content. To let a developer work in isolation, they create a new workspace connected to their own feature branch, make changes, then merge back via a pull request. Which Fabric capability enables this per-developer isolated workflow?",
  "options": [
   "Deployment rules on the Production stage",
   "Dynamic data masking on the semantic model",
   "The Monitoring hub run history",
   "Git integration's branch-out / workspace-per-branch pattern"
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
  "explanation": "Git integration lets each developer connect an isolated workspace to a feature branch, enabling parallel development and merge-via-PR workflows before changes reach shared branches.",
  "source": {
   "title": "What is Microsoft Fabric Git integration? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  }
 },
 {
  "id": "gen-35",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An administrator notices that not every artifact in their workspace appears in the connected Git repository after committing. What is the most likely reason?",
  "options": [
   "Git integration only tracks items in the Production deployment stage",
   "Only items of supported types are synced by Git integration; unsupported item types are not committed",
   "Committing removes items from the workspace, so they no longer appear",
   "Items must be endorsed as Certified before they can be committed"
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
  "explanation": "Git integration synchronizes only supported item types; items whose type is not yet supported won't be represented in the repository, so coverage depends on the supported-items list.",
  "source": {
   "title": "What is Microsoft Fabric Git integration? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  }
 },
 {
  "id": "gen-36",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A governance lead is choosing between deployment pipelines and Git-based release automation to move content from Test to Production. Which statement accurately reflects how deployment pipelines operate?",
  "options": [
   "Deployment pipelines promote content directly between Fabric workspaces (stages) inside the Fabric service, without requiring a Git repository",
   "Deployment pipelines can only deploy content that was first committed to GitHub",
   "Deployment pipelines physically move workspaces to a different capacity on each deploy",
   "Deployment pipelines require exporting items to local files before promotion"
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
  "explanation": "Deployment pipelines promote content between stage workspaces within the Fabric service and do not require a Git repository, though they can be used alongside Git integration for a complete CI/CD process.",
  "source": {
   "title": "Introduction to deployment pipelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  }
 },
 {
  "id": "gen-37",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer needs to give an analyst the ability to view report and dataset content in a Fabric workspace, but the analyst must not be able to create, edit, or delete any items. Which workspace role satisfies the principle of least privilege?",
  "options": [
   "Viewer",
   "Contributor",
   "Member",
   "Admin"
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
  "explanation": "The Viewer role grants read-only access to workspace content, letting a user consume reports and data without any authoring or management permissions, which fits least privilege here.",
  "source": {
   "title": "Security in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/security/security-overview"
  }
 },
 {
  "id": "gen-38",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In Microsoft Fabric, which identity provider is used to authenticate users and service principals before any workspace or item permissions are evaluated?",
  "options": [
   "A local SQL login stored in the Warehouse",
   "Microsoft Entra ID",
   "An Active Directory Federation Services on-premises server",
   "Kerberos tickets issued by the capacity"
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
  "explanation": "Fabric relies on Microsoft Entra ID for authentication; every request is authenticated by Entra before Fabric authorizes access through workspace roles and item permissions.",
  "source": {
   "title": "Security in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/security/security-overview"
  }
 },
 {
  "id": "gen-39",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants to enforce that only rows belonging to a salesperson's own region are returned when they query a Fabric Warehouse table, regardless of the tool they use. Which feature should be implemented?",
  "options": [
   "Dynamic data masking",
   "Column-level security",
   "Row-level security",
   "Sensitivity labels"
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
  "explanation": "Row-level security uses a security policy with a filter predicate to transparently restrict which rows each user can see, enforced at the database engine level for the Warehouse and SQL analytics endpoint.",
  "source": {
   "title": "Row-level security in Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  }
 },
 {
  "id": "gen-40",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which T-SQL object must be created to bind an inline table-valued function as a filter predicate that implements row-level security on a Fabric Warehouse table?",
  "options": [
   "CREATE SECURITY POLICY",
   "CREATE MASKING RULE",
   "CREATE ROLE",
   "CREATE PARTITION FUNCTION"
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
  "explanation": "Row-level security is enabled by creating a SECURITY POLICY that adds a FILTER predicate referencing an inline table-valued function, which the engine applies automatically to queries against the table.",
  "source": {
   "title": "Row-level security in Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  }
 },
 {
  "id": "gen-41",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Fabric Warehouse table contains a SocialSecurityNumber column that a group of reporting users must never see, while they still query the rest of the table. Which approach restricts access to just that column with the least effort?",
  "options": [
   "Create a row-level security filter predicate on the column",
   "Deny SELECT on the specific column with column-level security",
   "Apply a random() dynamic data mask to the column",
   "Move the column into a separate workspace"
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
  "explanation": "Column-level security restricts access to individual columns by granting or denying column-level SELECT permission, so unauthorized users are blocked from that column while still querying the table.",
  "source": {
   "title": "Column-level security in Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/column-level-security"
  }
 },
 {
  "id": "gen-42",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which statement best describes how column-level security is granted in a Fabric Warehouse?",
  "options": [
   "By creating a security policy with a block predicate",
   "By assigning the user the Viewer workspace role",
   "By using GRANT with a column list on the SELECT permission for the table",
   "By applying a sensitivity label to the column in Purview"
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
  "explanation": "Column-level security is implemented with GRANT/DENY on SELECT that specifies the column list, controlling access to individual columns without needing views.",
  "source": {
   "title": "Column-level security in Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/column-level-security"
  }
 },
 {
  "id": "gen-43",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Fabric Warehouse stores customer email addresses. Business users should still see a partially obfuscated value in the shape of an email, but not the real address. Which masking function is designed for this?",
  "options": [
   "The default() mask",
   "The random() mask",
   "A custom string partial() mask on the entire value",
   "The email() mask"
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
  "explanation": "Dynamic data masking's email() function exposes the first letter and masks the rest in an email-address format, hiding the real address while keeping a recognizable shape.",
  "source": {
   "title": "Dynamic data masking in Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking"
  }
 },
 {
  "id": "gen-44",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which permission must a user be granted so that dynamic data masking is bypassed and they can view the original, unmasked column values in a Fabric Warehouse?",
  "options": [
   "CONTROL",
   "ALTER ANY MASK",
   "UNMASK",
   "VIEW DEFINITION"
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
  "explanation": "Granting the UNMASK permission lets a user see the actual data rather than the masked value; without it, masked columns display the mask output.",
  "source": {
   "title": "Dynamic data masking in Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking"
  }
 },
 {
  "id": "gen-45",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer wants to give a user read access to a specific folder of files in a Lakehouse in OneLake without granting access to the entire workspace. Which capability enables this granular access?",
  "options": [
   "OneLake security roles with folder-level permissions",
   "Assigning the Admin workspace role scoped to the folder",
   "A deployment pipeline deployment rule",
   "A T-SQL GRANT on the folder"
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
  "explanation": "OneLake security lets you define security roles that grant access at the item and folder level, so a user can be given read access to specific folders without full workspace access.",
  "source": {
   "title": "Data security in OneLake — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/onelake/security/get-started-security"
  }
 },
 {
  "id": "gen-46",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Besides folder-level access, which additional data restrictions can OneLake security roles define on tables to enforce fine-grained access?",
  "options": [
   "Only table-level allow lists",
   "Row-level and column-level constraints on tables",
   "Capacity throttling limits",
   "Query timeout thresholds"
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
  "explanation": "OneLake security supports defining table, row, and column constraints within security roles, so data can be restricted down to specific rows and columns of tables in OneLake.",
  "source": {
   "title": "Data security in OneLake — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/onelake/security/get-started-security"
  }
 },
 {
  "id": "gen-47",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An organization must automatically classify and protect sensitive Fabric content by applying a label that persists as data is exported to Excel or Power BI files. Which Fabric governance capability provides this?",
  "options": [
   "Endorsement badges",
   "Deployment pipeline rules",
   "OneLake shortcuts",
   "Purview sensitivity labels (information protection)"
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
  "explanation": "Information protection uses Microsoft Purview sensitivity labels, which classify Fabric items and carry their protection into supported exported files such as Excel and Power BI.",
  "source": {
   "title": "Information protection in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/information-protection"
  }
 },
 {
  "id": "gen-48",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A governance admin configures a policy so that every new Fabric item created in the tenant automatically receives a 'General' sensitivity label unless the user chooses otherwise. Which labeling behavior is this?",
  "options": [
   "Default labeling",
   "Mandatory labeling",
   "Label inheritance",
   "Endorsement promotion"
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
  "explanation": "Default labeling automatically assigns a specified sensitivity label to content when no label is otherwise applied, while still allowing the user to change it.",
  "source": {
   "title": "Information protection in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/information-protection"
  }
 },
 {
  "id": "gen-49",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When a downstream item such as a report is built from a labeled semantic model, the report can automatically receive the same sensitivity label. What is this behavior called?",
  "options": [
   "Mandatory labeling",
   "Default labeling",
   "Row-level security",
   "Label inheritance"
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
  "explanation": "Sensitivity label inheritance propagates a label from upstream data (such as a semantic model) to downstream items, keeping classification consistent across the lineage.",
  "source": {
   "title": "Information protection in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/information-protection"
  }
 },
 {
  "id": "gen-50",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data steward has validated a semantic model as the authoritative, quality-assured version for enterprise reporting and wants to signal this trust to consumers. Which endorsement badge should be applied?",
  "options": [
   "Promoted",
   "Certified",
   "Master data",
   "Verified"
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
  "explanation": "The Certified badge is applied by authorized reviewers to indicate an item meets the organization's quality standards and is trustworthy, a stronger signal than Promoted.",
  "source": {
   "title": "Endorsement — Promote or certify Fabric content — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview"
  }
 },
 {
  "id": "gen-51",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which statement about the Promoted endorsement badge in Fabric is correct?",
  "options": [
   "Only tenant admins can promote content",
   "Promotion requires a Purview data catalog scan",
   "Promoted items are automatically certified after 30 days",
   "Any workspace member with write permission on the item can promote it"
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
  "explanation": "Promotion is a lightweight endorsement that any user with write (contributor) permissions on the item can apply, whereas certification is restricted to authorized reviewers.",
  "source": {
   "title": "Endorsement — Promote or certify Fabric content — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview"
  }
 },
 {
  "id": "gen-52",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which endorsement type is specifically intended to identify the single authoritative source for core business entities such as customers or products?",
  "options": [
   "Promoted",
   "Certified",
   "Master data",
   "Sensitivity label"
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
  "explanation": "The Master data badge marks an item as the authoritative source for key business entities, helping users find the trusted single source of truth.",
  "source": {
   "title": "Endorsement — Promote or certify Fabric content — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview"
  }
 },
 {
  "id": "gen-53",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A security team needs to review who deleted a Fabric semantic model and when the action occurred across the tenant. Where should they look?",
  "options": [
   "The workspace Recent activity pane only",
   "The Capacity Metrics app",
   "The deployment pipeline history",
   "The Fabric audit log, accessed through Microsoft Purview"
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
  "explanation": "Fabric user activities are recorded in the audit log, which is searched through the Microsoft Purview compliance portal (or the unified audit log), capturing operations like item deletion with actor and timestamp.",
  "source": {
   "title": "Track user activities in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/admin/track-user-activities"
  }
 },
 {
  "id": "gen-54",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An auditor wants to programmatically retrieve Fabric audit events for the last 30 days for compliance analysis. Which characteristic of the Fabric audit log is accurate?",
  "options": [
   "Audit events are only viewable in the browser and cannot be retrieved programmatically",
   "Audit logs are stored solely inside each workspace's OneLake folder",
   "Audit logging must be enabled per report before any events are captured",
   "Audit activities are logged by Purview and can be searched or retrieved through the audit log search and APIs"
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
  "explanation": "Fabric operations are captured in the Purview-backed audit log, which supports searching the unified audit log and programmatic retrieval for compliance and analysis.",
  "source": {
   "title": "Track user activities in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/admin/track-user-activities"
  }
 },
 {
  "id": "gen-55",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineering team needs to move 40 tables from an on-premises SQL Server into a Fabric lakehouse on a nightly schedule. The load is high-volume with no row-level transformation logic required, and the team wants the simplest fit-for-purpose orchestration item. According to the Fabric decision guide, which option should they choose?",
  "options": [
   "A Dataflow Gen2 with a separate query per table",
   "A pipeline Copy activity (or Copy job) orchestrated on a schedule",
   "A Spark notebook reading each table with JDBC",
   "An Eventstream with a lakehouse destination"
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
  "explanation": "The decision guide positions the Copy activity/Copy job in a pipeline as the best fit for high-volume, code-free data movement without complex transformations; Dataflow Gen2 is better when Power Query transformations are needed and Spark when custom code/large-scale transformation is required.",
  "source": {
   "title": "Decision guide — copy activity, copy job, Dataflow, Eventstream, or Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-pipeline-dataflow-spark"
  }
 },
 {
  "id": "gen-56",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An analyst who is comfortable with Power Query but not with code needs to cleanse and reshape data from several sources and land the result in a lakehouse table, with a low-code authoring experience. Based on the Fabric decision guide, which item best matches this profile?",
  "options": [
   "Dataflow Gen2",
   "Spark notebook with PySpark",
   "Data pipeline Copy activity only",
   "Eventstream"
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
  "explanation": "Dataflow Gen2 provides a low-code Power Query-based experience ideal for users who want to transform and prepare data without writing Spark or SQL code, according to the decision guide.",
  "source": {
   "title": "Decision guide — copy activity, copy job, Dataflow, Eventstream, or Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-pipeline-dataflow-spark"
  }
 },
 {
  "id": "gen-57",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team must process a continuous feed of telemetry events and route them to multiple destinations with no-code transformations as data arrives. Which Fabric item does the decision guide recommend for this streaming ingestion and routing scenario?",
  "options": [
   "A scheduled data pipeline",
   "A Dataflow Gen2",
   "An Eventstream",
   "A warehouse stored procedure"
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
  "explanation": "The decision guide identifies Eventstream as the item designed for capturing, transforming, and routing real-time streaming events to multiple destinations without code.",
  "source": {
   "title": "Decision guide — copy activity, copy job, Dataflow, Eventstream, or Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-pipeline-dataflow-spark"
  }
 },
 {
  "id": "gen-58",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A workload requires complex, large-scale transformations over billions of rows using custom Python logic and machine-learning libraries. Which Fabric compute option does the decision guide point to for this requirement?",
  "options": [
   "Dataflow Gen2",
   "Copy job",
   "Eventstream",
   "Spark (notebooks or Spark job definitions)"
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
  "explanation": "Per the decision guide, Spark (via notebooks or Spark job definitions) is the choice for complex, code-first, large-scale transformations and advanced logic that exceed the capabilities of Dataflow Gen2 or Copy.",
  "source": {
   "title": "Decision guide — copy activity, copy job, Dataflow, Eventstream, or Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-pipeline-dataflow-spark"
  }
 },
 {
  "id": "gen-59",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data pipeline needs to orchestrate several activities in sequence — first copy raw files, then run a Spark notebook, then refresh a semantic model — with dependency-based control flow between the steps. Which Fabric capability is designed for this coordination role?",
  "options": [
   "Dataflow Gen2, which orchestrates activities across items",
   "An Eventstream, which sequences batch activities",
   "A KQL queryset, which schedules downstream jobs",
   "A data pipeline, which chains and orchestrates activities with control flow"
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
  "explanation": "The decision guide describes data pipelines as the orchestration layer that chains activities (copy, notebook, dataflow, stored procedure, semantic model refresh) with control flow and dependencies; Dataflow Gen2 transforms data but does not orchestrate other items.",
  "source": {
   "title": "Decision guide — copy activity, copy job, Dataflow, Eventstream, or Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-pipeline-dataflow-spark"
  }
 },
 {
  "id": "gen-60",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants to copy data from a source to a destination on a recurring basis with built-in incremental copy and minimal configuration, without hand-authoring a pipeline. Which purpose-built option does the Fabric decision guide highlight for this?",
  "options": [
   "Copy job",
   "Spark structured streaming",
   "Dataflow Gen2 staging",
   "Eventstream custom endpoint"
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
  "explanation": "The decision guide describes the Copy job as a simplified, purpose-built experience for recurring data copy with support for incremental copy patterns and less configuration than authoring a full pipeline.",
  "source": {
   "title": "Decision guide — copy activity, copy job, Dataflow, Eventstream, or Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-pipeline-dataflow-spark"
  }
 },
 {
  "id": "gen-61",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You want a Fabric pipeline to run automatically every day at 02:00 without any manual action or external event. Which trigger type should you configure on the pipeline?",
  "options": [
   "An on-demand (manual) run",
   "A storage event trigger",
   "A scheduled trigger",
   "A tumbling window API call"
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
  "explanation": "A scheduled trigger runs the pipeline on a recurring time-based cadence (for example, daily at a set time); on-demand runs require manual invocation and storage event triggers fire on file events, not on a clock.",
  "source": {
   "title": "Run, schedule, or use events to trigger a pipeline — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs"
  }
 },
 {
  "id": "gen-62",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A pipeline must start automatically whenever a new file is uploaded to a specific Azure Blob Storage / ADLS Gen2 path. Which Fabric pipeline trigger type meets this requirement?",
  "options": [
   "A scheduled trigger set to every minute",
   "An on-demand run",
   "A parameterized manual run",
   "A storage event trigger"
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
  "explanation": "Storage event triggers start a pipeline in response to blob created or deleted events on an Azure Storage account, avoiding the need to poll on a fixed schedule.",
  "source": {
   "title": "Run, schedule, or use events to trigger a pipeline — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs"
  }
 },
 {
  "id": "gen-63",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "During development, an engineer wants to execute a Fabric pipeline immediately one time to validate that the activities work, without setting up any recurring schedule. Which run option should they use?",
  "options": [
   "Create a scheduled trigger and wait for it to fire",
   "Configure a storage event trigger",
   "Use the on-demand 'Run' option to trigger the pipeline immediately",
   "Publish a deployment pipeline to Test"
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
  "explanation": "An on-demand run executes the pipeline immediately once, which is the typical approach for testing and ad-hoc execution during development; schedules and event triggers are for automated recurring or event-driven runs.",
  "source": {
   "title": "Run, schedule, or use events to trigger a pipeline — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs"
  }
 },
 {
  "id": "gen-64",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants a Fabric pipeline to react to Fabric events — for example, run when a Dataflow Gen2 or another job completes — using the Real-Time hub. Which mechanism enables this event-driven orchestration?",
  "options": [
   "A cron expression in the pipeline settings",
   "Fabric event triggers (event-based triggers) via the Real-Time hub / Fabric events",
   "A manual on-demand run scheduled by a person",
   "A deployment rule in a deployment pipeline"
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
  "explanation": "Fabric supports event-based triggers that let pipelines respond to Fabric and storage events surfaced through the Real-Time hub, enabling event-driven orchestration rather than only time-based schedules.",
  "source": {
   "title": "Run, schedule, or use events to trigger a pipeline — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs"
  }
 },
 {
  "id": "gen-65",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After a scheduled pipeline runs, an engineer needs to confirm whether it succeeded and inspect the duration and status of each individual activity. Where in Fabric Data Factory can they review this per-run detail?",
  "options": [
   "In the pipeline run history / output monitoring view",
   "Only in the Git integration commit log",
   "In the workspace role assignment page",
   "In the semantic model refresh settings"
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
  "explanation": "Pipeline run history lets you monitor each triggered run and drill into activity-level status, duration, and output to confirm success or diagnose failures.",
  "source": {
   "title": "Run, schedule, or use events to trigger a pipeline — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs"
  }
 },
 {
  "id": "gen-66",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A single pipeline should load data for a different source table each run without cloning the pipeline. The table name is supplied at run time. Which Fabric pipeline feature makes the pipeline reusable in this way?",
  "options": [
   "Hardcoding the table name in each Copy activity",
   "A separate deployment pipeline stage per table",
   "Pipeline parameters referenced by dynamic expressions",
   "A storage event trigger per table"
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
  "explanation": "Pipeline parameters let you pass values (such as a table name) in at run time and reference them through dynamic expressions, making one pipeline reusable across many inputs instead of duplicating it.",
  "source": {
   "title": "Parameters and dynamic expressions in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters"
  }
 },
 {
  "id": "gen-67",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In a Fabric pipeline expression, you need to build a folder path that concatenates a container name with the pipeline's parameter value inside a string. Which dynamic-content syntax correctly embeds the parameter?",
  "options": [
   "\"raw/\" + parameters.tableName",
   "@concat('raw/', pipeline().parameters.tableName)",
   "${raw/}{tableName}",
   "= CONCAT('raw/', [tableName])"
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
  "explanation": "Fabric pipeline expressions begin with @ and use functions such as concat(); pipeline parameters are referenced with pipeline().parameters.<name>, so @concat('raw/', pipeline().parameters.tableName) is the correct string interpolation.",
  "source": {
   "title": "Parameters and dynamic expressions in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters"
  }
 },
 {
  "id": "gen-68",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You want a pipeline to capture the exact UTC time the run started and write it into a destination column. Which category of value should you reference in the dynamic expression?",
  "options": [
   "A pipeline parameter that a user types manually each run",
   "A workspace setting in the admin portal",
   "A deployment rule value",
   "A system variable such as the pipeline run's trigger/UTC time"
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
  "explanation": "System variables expose run-context values (such as pipeline run ID and trigger/UTC time) that expressions can read automatically, unlike parameters, which must be supplied at invocation.",
  "source": {
   "title": "Parameters and dynamic expressions in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters"
  }
 },
 {
  "id": "gen-69",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A pipeline parameter named 'loadDate' holds a date string, and you need to compute the previous day for an incremental filter. Which expression approach is appropriate in a Fabric pipeline?",
  "options": [
   "Use the @{ } interpolation only, since functions are not allowed in pipelines",
   "Use an expression function such as @addDays(pipeline().parameters.loadDate, -1)",
   "Edit the parameter default value manually before every run",
   "Move the calculation into a deployment pipeline rule"
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
  "explanation": "Fabric pipeline expressions support a library of functions (date, string, collection, logical, etc.); addDays applied to a parameter value computes a derived date such as the prior day for incremental loads.",
  "source": {
   "title": "Parameters and dynamic expressions in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters"
  }
 },
 {
  "id": "gen-70",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "What is the key difference between a pipeline parameter and a pipeline variable in Fabric Data Factory?",
  "options": [
   "Parameters are set at run time (external input) and are read-only during the run, while variables can be assigned and changed within the run using Set variable",
   "Parameters can change mid-run but variables cannot be set at all",
   "Variables are supplied at invocation and parameters are internal only",
   "There is no difference; the terms are interchangeable"
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
  "explanation": "Parameters are inputs passed when the pipeline is invoked and remain constant for that run, whereas variables are internal, mutable values that activities (like Set variable) can update during execution.",
  "source": {
   "title": "Parameters and dynamic expressions in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters"
  }
 },
 {
  "id": "gen-71",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A parent pipeline uses an Invoke pipeline (Execute pipeline) activity to call a child pipeline and must pass a batch identifier into it. How is the value handed to the child pipeline?",
  "options": [
   "By writing the value to a lakehouse file the child reads",
   "By setting an environment variable in workspace settings",
   "By hardcoding it into the child pipeline's activities",
   "By mapping it to the child pipeline's parameters in the Invoke pipeline activity"
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
  "explanation": "When invoking a child pipeline, the parent supplies values to the child's defined parameters through the Invoke/Execute pipeline activity, enabling parameterized, reusable orchestration hierarchies.",
  "source": {
   "title": "Parameters and dynamic expressions in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters"
  }
 },
 {
  "id": "gen-72",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An organization needs code-free movement of large volumes of data plus lightweight, low-code shaping, and is deciding between a Copy activity and a Dataflow Gen2. According to the decision guide, which statement best guides the choice?",
  "options": [
   "Use Copy activity for efficient bulk movement without transformation, and Dataflow Gen2 when Power Query transformations are the primary need",
   "Always use Copy activity because Dataflow Gen2 cannot write to a lakehouse",
   "Use Dataflow Gen2 for all cases because it is faster than Copy for bulk movement",
   "Both are streaming engines, so pick based on latency only"
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
  "explanation": "The decision guide recommends Copy activity for high-volume, transformation-free data movement and Dataflow Gen2 when low-code Power Query transformation is the main requirement; the two serve different primary purposes.",
  "source": {
   "title": "Decision guide — copy activity, copy job, Dataflow, Eventstream, or Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-pipeline-dataflow-spark"
  }
 },
 {
  "id": "gen-73",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are designing a star schema in a Fabric warehouse to support a sales semantic model. Business events such as individual sales transactions, at the lowest level of detail, should be stored in which type of table?",
  "options": [
   "A dimension table",
   "A fact table",
   "A bridge table",
   "A staging table"
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
  "explanation": "In dimensional modeling, fact tables store the measurable business events (transactions) at the grain of the model, while dimension tables provide the descriptive context used to filter and group those facts.",
  "source": {
   "title": "Dimensional modeling in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"
  }
 },
 {
  "id": "gen-74",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When preparing tables for a dimensional model in a Fabric warehouse, which characteristic best describes a well-designed dimension table?",
  "options": [
   "It contains numeric measures aggregated at query time",
   "It stores one row per business event at the finest grain",
   "It holds descriptive attributes with a surrogate key that facts reference",
   "It is always loaded as a temporary staging object and dropped after each run"
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
  "explanation": "Dimension tables hold descriptive attributes (such as product name or customer region) and use a surrogate key that fact tables reference through foreign keys, enabling filtering and grouping of measures.",
  "source": {
   "title": "Dimensional modeling in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"
  }
 },
 {
  "id": "gen-75",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer wants each dimension row to have a stable primary key that is independent of the source system's natural (business) key, so the warehouse is not disrupted if the source reissues keys. What should the engineer add to each dimension table?",
  "options": [
   "A surrogate key",
   "A composite natural key",
   "A row-level security predicate",
   "A hash-partitioned distribution column"
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
  "explanation": "A surrogate key is a warehouse-generated identifier (typically an integer) that uniquely identifies each dimension row independently of the source system's business key, insulating the model from source-key changes.",
  "source": {
   "title": "Dimensional modeling in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"
  }
 },
 {
  "id": "gen-76",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Why is a properly designed star schema considered a prerequisite for building an efficient Fabric semantic model?",
  "options": [
   "It eliminates the need to define any relationships in the semantic model",
   "It forces all data to be stored in a single denormalized table",
   "It organizes data into fact and dimension tables that align with how measures are aggregated and sliced, improving performance and usability",
   "It converts the warehouse into a real-time streaming engine"
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
  "explanation": "A star schema separates measurable facts from descriptive dimensions, which matches how semantic models aggregate measures and slice by attributes, producing better query performance and a more intuitive model.",
  "source": {
   "title": "Dimensional modeling in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"
  }
 },
 {
  "id": "gen-77",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In a star schema, how are fact tables related to dimension tables?",
  "options": [
   "Dimension tables store foreign keys that reference fact table surrogate keys",
   "Fact and dimension tables are joined only through a shared bridge table in every case",
   "There are no relationships; facts and dimensions are queried independently",
   "Fact tables store foreign keys that reference the surrogate keys of dimension tables"
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
  "explanation": "In a star schema, the fact table holds foreign keys pointing to the surrogate keys of each related dimension, so measures can be filtered and grouped by dimension attributes.",
  "source": {
   "title": "Dimensional modeling in Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"
  }
 },
 {
  "id": "gen-78",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A customer dimension must preserve full history: when a customer moves to a new region, the old row should be retained and a new row created so historical facts still map to the region that was current at the time. Which slowly changing dimension approach implements this?",
  "options": [
   "SCD Type 1 (overwrite the attribute in place)",
   "SCD Type 2 (add a new row and mark the prior row as expired)",
   "SCD Type 0 (never load the dimension after initial creation)",
   "No SCD is needed; simply truncate and reload the dimension"
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
  "explanation": "SCD Type 2 preserves history by inserting a new dimension row for the changed attribute and expiring the previous row (often via effective/end dates or a current flag), so facts continue to reference the version that was current at the time.",
  "source": {
   "title": "Load tables in a dimensional model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-load-tables"
  }
 },
 {
  "id": "gen-79",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "During dimension loading, a data engineer decides that when a product's category is corrected, only the latest value matters and no history needs to be kept. Which SCD type overwrites the existing attribute value in place?",
  "options": [
   "SCD Type 2",
   "SCD Type 3",
   "SCD Type 1",
   "SCD Type 6"
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
  "explanation": "SCD Type 1 simply overwrites the changed attribute with the new value, keeping no history — appropriate when only the current value is needed.",
  "source": {
   "title": "Load tables in a dimensional model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-load-tables"
  }
 },
 {
  "id": "gen-80",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When orchestrating the load of a dimensional model, why should dimension tables generally be loaded before the fact tables that reference them?",
  "options": [
   "Fact tables must exist before dimensions so surrogate keys can be generated",
   "Because fact tables cannot be truncated once dimensions are present",
   "So that surrogate keys exist in the dimensions and can be looked up to populate the fact table's foreign keys",
   "To avoid the need for staging tables entirely"
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
  "explanation": "Facts reference dimensions by surrogate key, so dimensions must be loaded first; the fact load then looks up the current surrogate keys to populate the fact's foreign key columns.",
  "source": {
   "title": "Load tables in a dimensional model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-load-tables"
  }
 },
 {
  "id": "gen-81",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A recommended ETL pattern for loading a Fabric warehouse first copies raw source data into intermediate tables where it can be cleansed, deduplicated, and transformed before being merged into the final dimensional model. What are these intermediate tables called?",
  "options": [
   "Staging tables",
   "Bridge tables",
   "Factless fact tables",
   "Materialized views"
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
  "explanation": "Staging tables hold raw extracted data temporarily so it can be validated, cleansed, and transformed before being loaded into the production dimension and fact tables.",
  "source": {
   "title": "Load tables in a dimensional model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-load-tables"
  }
 },
 {
  "id": "gen-82",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A fact table already holds billions of historical rows. During each nightly run, only new and changed transactions since the last successful load should be added, rather than reloading the entire table. Which loading strategy is appropriate?",
  "options": [
   "A full load that truncates and reloads the fact table each night",
   "Deleting the fact table and recreating it from the dimensions",
   "Loading the fact table before the dimensions to save time",
   "An incremental load that appends only the rows changed since the last watermark"
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
  "explanation": "For large fact tables, an incremental load that identifies and appends only new or changed rows (based on a high-watermark such as a date or ID) is far more efficient than a full reload.",
  "source": {
   "title": "Load tables in a dimensional model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-load-tables"
  }
 },
 {
  "id": "gen-83",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When a fact row arrives whose business key does not yet exist in the related dimension (a late-arriving fact), which technique lets the fact still be loaded while preserving referential integrity?",
  "options": [
   "Discard the fact row permanently",
   "Convert the fact table into a dimension table",
   "Overwrite the dimension's surrogate key with the fact's business key",
   "Insert a placeholder (inferred member) row in the dimension and later update it when the dimension data arrives"
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
  "explanation": "Late-arriving facts are handled by inserting an inferred (placeholder) dimension member so the fact can reference a valid surrogate key immediately; the placeholder is updated with full attributes when the dimension record later arrives.",
  "source": {
   "title": "Load tables in a dimensional model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-load-tables"
  }
 },
 {
  "id": "gen-84",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Fabric warehouse dimension load must insert rows that are new in the source and update rows whose attributes changed, all in a single set-based operation against the target table. Which T-SQL approach best fits this requirement?",
  "options": [
   "Run separate uncoordinated INSERT and DELETE statements in random order",
   "Use a MERGE (upsert) operation that matches on the business key to insert new rows and update changed ones",
   "Truncate the dimension and reinsert only the unchanged rows",
   "Load the data with row-level security predicates instead of DML"
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
  "explanation": "An upsert (MERGE) matches incoming rows against the dimension on the business key, inserting rows that do not exist and updating those whose attributes changed, which is the standard set-based dimension load technique.",
  "source": {
   "title": "Load tables in a dimensional model — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-load-tables"
  }
 },
 {
  "id": "gen-85",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You configure incremental refresh for a Dataflow Gen2 that ingests order data. The dataflow must detect which rows changed since the previous run. What element of the source data is required to make incremental refresh work?",
  "options": [
   "A column, such as a modified-date or timestamp, that indicates when each row last changed",
   "A primary key constraint on the destination lakehouse table",
   "A fixed number of rows per day in the source",
   "A sensitivity label applied to the source query"
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
  "explanation": "Incremental refresh relies on a DateTime column (for example a last-modified timestamp) so the dataflow can filter to only the rows that changed within the refresh window rather than reprocessing everything.",
  "source": {
   "title": "Set up an incremental refresh with Dataflow Gen2 — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-setup-incremental-refresh-with-dataflows-gen2"
  }
 },
 {
  "id": "gen-86",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In a Dataflow Gen2 incremental refresh, you want each run to overwrite only the buckets of data that fall within the changed window while leaving older buckets untouched. Which behavior does the incremental refresh setting provide compared with a full refresh?",
  "options": [
   "It always appends duplicate rows for the entire history on every run",
   "It disables query folding so all rows are pulled locally",
   "It converts the destination into a streaming eventstream",
   "It extracts and replaces only the data in the defined incremental window, avoiding reprocessing the full source each time"
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
  "explanation": "Incremental refresh limits extraction and loading to the rows within the configured window (based on the change-detection column), so only recently changed data is reprocessed instead of the entire source.",
  "source": {
   "title": "Set up an incremental refresh with Dataflow Gen2 — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-setup-incremental-refresh-with-dataflows-gen2"
  }
 },
 {
  "id": "gen-87",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When defining an incremental refresh in Dataflow Gen2, you must specify how far back changed data should be captured (for example, the last 1 month) and how the buckets are sized (for example, by day). Which two settings drive this window?",
  "options": [
   "Distribution key and partition count",
   "The extract range (how much history to evaluate) and the bucket size (the granularity of each increment)",
   "The V-Order flag and the VACUUM retention period",
   "The Kafka offset and consumer group"
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
  "explanation": "Dataflow Gen2 incremental refresh is configured by choosing how much data to evaluate for changes and the bucket granularity that defines each incremental slice, using the selected DateTime column.",
  "source": {
   "title": "Set up an incremental refresh with Dataflow Gen2 — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-setup-incremental-refresh-with-dataflows-gen2"
  }
 },
 {
  "id": "gen-88",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team needs a continuous streaming load pattern in which telemetry events flowing through an eventstream are written to a lakehouse as Delta tables for downstream Spark and SQL analytics. Which eventstream destination should they add?",
  "options": [
   "A KQL database destination only",
   "A Lakehouse destination",
   "A Power BI dataset destination",
   "A custom endpoint that only forwards to Event Hubs"
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
  "explanation": "Adding a Lakehouse destination to an eventstream lands the streaming events as Delta tables in the lakehouse, enabling a continuous streaming load consumable by Spark, SQL, and semantic models.",
  "source": {
   "title": "Add a lakehouse destination to an eventstream — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/add-destination-lakehouse"
  }
 },
 {
  "id": "gen-89",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When configuring a Lakehouse destination on an eventstream, you can choose an ingestion mode that trades write frequency against file size to reduce the number of small files created in the Delta table. Which consideration is correct?",
  "options": [
   "Choosing the minimum-rows/lower-latency mode reduces latency but can create many small files, while the higher-duration mode batches more events into fewer, larger files",
   "Ingestion mode has no effect on the number or size of files written",
   "The lakehouse destination can only write CSV files, not Delta tables",
   "A lakehouse destination requires the eventstream to be paused before each write"
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
  "explanation": "The event-processing/ingestion settings on a Lakehouse destination let you balance latency against file size: minimizing rows per write lowers latency but produces many small files, while larger time/row thresholds batch events into fewer, larger Delta files better suited to analytics.",
  "source": {
   "title": "Add a lakehouse destination to an eventstream — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/add-destination-lakehouse"
  }
 },
 {
  "id": "gen-90",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A lakehouse destination on an eventstream has been writing streaming data as many small Delta files, degrading query performance over time. Which maintenance action is recommended to keep the destination table performant?",
  "options": [
   "Convert the lakehouse table to a KQL database automatically",
   "Disable the eventstream permanently after the first write",
   "Remove all dimension tables from the lakehouse",
   "Enable table optimization/compaction so small files are periodically combined into larger ones"
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
  "explanation": "Because streaming ingestion tends to create many small files, enabling table optimization/compaction on the lakehouse destination periodically merges them into larger files, maintaining good read performance.",
  "source": {
   "title": "Add a lakehouse destination to an eventstream — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/add-destination-lakehouse"
  }
 },
 {
  "id": "gen-91",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team needs a store for structured and semi-structured data where data engineers transform files with Spark and PySpark, but analysts also need a T-SQL read endpoint over the same Delta tables. Which Fabric item best fits when the primary authoring experience is Spark notebooks over files in OneLake?",
  "options": [
   "Warehouse, because all access must go through T-SQL",
   "Lakehouse, which stores Delta tables in OneLake and exposes a read-only SQL analytics endpoint",
   "Eventhouse, which is optimized for high-volume streaming telemetry",
   "Cosmos DB in Fabric, for document-oriented operational workloads"
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
  "explanation": "A Lakehouse stores Delta tables and files in OneLake for Spark/PySpark authoring while automatically providing a read-only SQL analytics endpoint for T-SQL queries over the same tables.",
  "source": {
   "title": "Fabric decision guide: choose a data store — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-data-store"
  }
 },
 {
  "id": "gen-92",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your workload requires low-latency ingestion and analytics over billions of rows of time-series and log events, with a query language optimized for that data. According to the choose-a-data-store guidance, which Fabric store is designed for this?",
  "options": [
   "Eventhouse (KQL database)",
   "Warehouse",
   "Lakehouse",
   "SQL database in Fabric"
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
  "explanation": "The decision guide positions the Eventhouse/KQL database for large-volume, high-velocity time-series and log/telemetry data queried with KQL.",
  "source": {
   "title": "Fabric decision guide: choose a data store — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-data-store"
  }
 },
 {
  "id": "gen-93",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An application team needs a transactional, OLTP-style relational store inside Fabric that also mirrors its data into OneLake for analytics, using a familiar SQL Server engine. Which store does the decision guide recommend?",
  "options": [
   "Eventhouse",
   "Lakehouse",
   "SQL database in Fabric",
   "Warehouse"
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
  "explanation": "SQL database in Fabric is the transactional (OLTP) relational option built on the SQL Server engine, and its data is automatically mirrored into OneLake for analytics.",
  "source": {
   "title": "Fabric decision guide: choose a data store — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-data-store"
  }
 },
 {
  "id": "gen-94",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer must run an ETL process that inserts into multiple tables and requires it to fully commit or fully roll back as one unit. Comparing Warehouse and Lakehouse, which statement is correct?",
  "options": [
   "The Lakehouse SQL analytics endpoint supports full read/write multi-table transactions",
   "Neither Warehouse nor Lakehouse supports T-SQL DML",
   "The Warehouse supports multi-table ACID transactions through T-SQL, while the Lakehouse SQL analytics endpoint is read-only",
   "Only the Lakehouse can enforce ACID guarantees because it uses Delta"
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
  "explanation": "The Warehouse supports full T-SQL DML with multi-table ACID transactions, whereas the Lakehouse's SQL analytics endpoint is read-only and writes happen through Spark.",
  "source": {
   "title": "Fabric decision guide: Warehouse vs Lakehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-lakehouse-warehouse"
  }
 },
 {
  "id": "gen-95",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team is deciding between a Lakehouse and a Warehouse. The primary skill set is Spark/PySpark, and much of the incoming data is unstructured files that will be curated into tables. Which choice does the guidance favor and why?",
  "options": [
   "Warehouse, because it can store raw unstructured files natively",
   "Warehouse, because Spark is its native compute engine",
   "Either, since both use T-SQL as the only write path",
   "Lakehouse, because it supports both files and tables and uses Spark as the primary engine"
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
  "explanation": "The Lakehouse handles unstructured files and structured tables with Spark as the primary developer experience, making it the better fit for Spark-centric teams with file-based data.",
  "source": {
   "title": "Fabric decision guide: Warehouse vs Lakehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-lakehouse-warehouse"
  }
 },
 {
  "id": "gen-96",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An analytics team is entirely T-SQL-oriented and wants a store where they can create, load, and update tables using only SQL, with no requirement to write Spark code. Which Fabric item does the decision guide recommend?",
  "options": [
   "Warehouse",
   "Lakehouse",
   "KQL database",
   "OneLake shortcut"
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
  "explanation": "The Warehouse is the fully T-SQL experience where tables are created, loaded, and modified using SQL only, with no need to author Spark code.",
  "source": {
   "title": "Fabric decision guide: Warehouse vs Lakehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-lakehouse-warehouse"
  }
 },
 {
  "id": "gen-97",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Sales data lives in an existing ADLS Gen2 container and must appear in a Lakehouse without copying or duplicating the files. Which OneLake feature accomplishes this?",
  "options": [
   "Database mirroring",
   "A Copy activity in a data pipeline",
   "A OneLake shortcut pointing to the ADLS Gen2 location",
   "A Dataflow Gen2 with Append mode"
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
  "explanation": "A OneLake shortcut references data in place (including external ADLS Gen2 or S3 targets) so it appears in the Lakehouse without physically copying the files.",
  "source": {
   "title": "OneLake shortcuts — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  }
 },
 {
  "id": "gen-98",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A OneLake shortcut points to a Delta table stored under the Tables area of another Lakehouse. Which engines can read data through this shortcut?",
  "options": [
   "Only Spark notebooks",
   "Only the SQL analytics endpoint",
   "Only Power BI in DirectQuery",
   "Spark, the SQL analytics endpoint, and KQL can all read through the shortcut"
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
  "explanation": "A shortcut in the Tables section surfaces the target as a table that Spark, the SQL analytics endpoint, and KQL can all query, since OneLake is a shared storage layer.",
  "source": {
   "title": "OneLake shortcuts — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  }
 },
 {
  "id": "gen-99",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An engineer creates a shortcut to an Amazon S3 bucket and notices repeated cross-cloud reads are slow. Which OneLake shortcut capability helps reduce latency and egress for frequently accessed external files?",
  "options": [
   "Enabling shortcut caching so retrieved files are stored in OneLake for subsequent reads",
   "Converting the shortcut into a mirrored database",
   "Switching the shortcut target from Files to Tables",
   "Disabling the SQL analytics endpoint on the Lakehouse"
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
  "explanation": "Shortcut caching stores files retrieved from external sources (such as S3 or ADLS Gen2) in OneLake for a retention period, reducing latency and egress on repeated reads.",
  "source": {
   "title": "OneLake shortcuts — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  }
 },
 {
  "id": "gen-100",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You want an operational Azure SQL Database continuously replicated into OneLake as analytics-ready Delta tables in near real time, with no ETL pipelines to build or maintain. Which Fabric capability provides this?",
  "options": [
   "A scheduled Copy activity that truncates and reloads each table",
   "Mirroring the database into Fabric",
   "A OneLake shortcut to the SQL Database",
   "A Dataflow Gen2 running on a five-minute schedule"
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
  "explanation": "Mirroring continuously replicates a supported source database's data and metadata into OneLake as Delta tables in near real time, without building ETL pipelines.",
  "source": {
   "title": "What is Mirroring in Fabric? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/mirroring/overview"
  }
 },
 {
  "id": "gen-101",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team wants to push change data from a source system that is not on the list of natively supported mirrored databases, writing changes into OneLake themselves in the required format. Which mirroring approach supports this?",
  "options": [
   "Metadata mirroring",
   "Database mirroring",
   "Shortcut mirroring",
   "Open mirroring"
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
  "explanation": "Open mirroring lets applications and data providers write change data into a mirrored database landing zone in OneLake, extending mirroring to sources beyond the natively supported databases.",
  "source": {
   "title": "What is Mirroring in Fabric? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/mirroring/overview"
  }
 },
 {
  "id": "gen-102",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After configuring database mirroring, where does the replicated data physically land, and in what format is it queryable?",
  "options": [
   "In the source database only, with a virtual view in Fabric",
   "In the capacity's SQL endpoint cache as Parquet, deleted after each query",
   "In OneLake as Delta tables, queryable via the SQL analytics endpoint and Spark",
   "In an Eventhouse as KQL tables, queryable only with KQL"
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
  "explanation": "Mirrored data is landed in OneLake as Delta/Parquet tables, so it can be queried through the SQL analytics endpoint, Spark, and other Fabric engines like any other OneLake table.",
  "source": {
   "title": "What is Mirroring in Fabric? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/mirroring/overview"
  }
 },
 {
  "id": "gen-103",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A pipeline copies a very large on-premises SQL table into a Fabric Warehouse. The Copy activity must land the data efficiently and can use an interim store to improve throughput for the bulk load. Which Copy activity feature provides this?",
  "options": [
   "Staged copy (staging), which routes data through an interim storage location",
   "Query acceleration for OneLake shortcuts",
   "V-Order write optimization",
   "High concurrency session sharing"
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
  "explanation": "The Copy activity's staging option routes data through interim storage to improve performance for certain sources/sinks and large bulk loads.",
  "source": {
   "title": "Copy activity in Data Factory for Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/copy-data-activity"
  }
 },
 {
  "id": "gen-104",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In a Copy activity, source column names and types do not exactly match the destination table. Which Copy activity capability lets you explicitly align source fields to destination columns?",
  "options": [
   "The Transform gallery",
   "Column mapping in the Copy activity's Mapping tab",
   "A KQL update policy",
   "The OneLake shortcut caching setting"
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
  "explanation": "The Copy activity's Mapping configuration lets you define column mappings between source and destination and handles supported data-type conversions during the copy.",
  "source": {
   "title": "Copy activity in Data Factory for Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/copy-data-activity"
  }
 },
 {
  "id": "gen-105",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You need to ingest many files from a REST API and various cloud stores into a Lakehouse without hand-configuring each connection. Which experience within the Copy activity guides you through selecting source and destination step by step?",
  "options": [
   "The Spark Advisor",
   "The Monitoring hub",
   "The Copy assistant",
   "The Variable library"
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
  "explanation": "The Copy assistant is a guided experience that walks you through choosing the source connector, destination, and settings for the Copy activity.",
  "source": {
   "title": "Copy activity in Data Factory for Microsoft Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/copy-data-activity"
  }
 },
 {
  "id": "gen-106",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In a Fabric notebook, you read a CSV into a Spark DataFrame and want to persist it as a managed Delta table named 'sales' in the attached Lakehouse. Which PySpark call accomplishes this?",
  "options": [
   "df.write.format(\"delta\").saveAsTable(\"sales\")",
   "df.to_csv(\"/Files/sales\")",
   "spark.read.table(\"sales\")",
   "df.createOrReplaceTempView(\"sales\")"
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
  "explanation": "Writing with the delta format and saveAsTable persists the DataFrame as a managed Delta table in the Lakehouse; a temp view or to_csv would not create a managed Delta table.",
  "source": {
   "title": "Load data into a lakehouse with a notebook — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-notebook-load-data"
  }
 },
 {
  "id": "gen-107",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A notebook ingests a daily batch that sometimes contains duplicate rows carried over from the prior extract. Using PySpark, which transformation removes duplicate records before writing to the Delta table?",
  "options": [
   "df.groupBy().count()",
   "df.dropDuplicates()",
   "df.repartition(1)",
   "df.cache()"
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
  "explanation": "dropDuplicates() (or distinct()) removes duplicate rows in a DataFrame; the other calls change counts, partitioning, or caching but do not deduplicate.",
  "source": {
   "title": "Load data into a lakehouse with a notebook — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-notebook-load-data"
  }
 },
 {
  "id": "gen-108",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When loading data with a notebook, you want to append a new daily batch to an existing Delta table without overwriting the historical rows already present. Which write mode should you use?",
  "options": [
   "overwrite",
   "ignore",
   "errorIfExists",
   "append"
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
  "explanation": "Using mode(\"append\") adds the new rows to the existing Delta table, preserving prior data, whereas overwrite would replace it and errorIfExists/ignore would block or skip the write.",
  "source": {
   "title": "Load data into a lakehouse with a notebook — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-notebook-load-data"
  }
 },
 {
  "id": "gen-109",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A retail company wants a single Fabric workload that can ingest continuous clickstream events, transform them in-flight without code, land them in an analytics store queryable with KQL, and raise alerts when thresholds are breached. Which Fabric experience is purpose-built to cover this end-to-end streaming scenario?",
  "options": [
   "Real-Time Intelligence",
   "Data Warehouse with COPY INTO on a schedule",
   "Dataflows Gen2 with incremental refresh",
   "A Lakehouse loaded by a nightly Copy activity"
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
  "explanation": "Real-Time Intelligence is the Fabric workload for event-driven data, bundling the Real-Time hub, eventstreams, eventhouse/KQL, and Activator for actions on streaming data.",
  "source": {
   "title": "Real-Time Intelligence overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/overview"
  }
 },
 {
  "id": "gen-110",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In Real-Time Intelligence, which component provides the central catalog for discovering and connecting to streaming data sources such as Azure Event Hubs and other Fabric events before you route them into an eventstream?",
  "options": [
   "The Monitoring hub",
   "The OneLake data hub for semantic models",
   "The Real-Time hub",
   "The Capacity Metrics app"
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
  "explanation": "The Real-Time hub is the single place in Real-Time Intelligence to discover, ingest, and manage streaming data and events across Fabric and external sources.",
  "source": {
   "title": "Real-Time Intelligence overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/overview"
  }
 },
 {
  "id": "gen-111",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team needs to compute per-minute average temperature from a continuous sensor feed and trigger downstream actions when the average exceeds a limit. Which Real-Time Intelligence capabilities support producing windowed aggregations and acting on the results?",
  "options": [
   "V-Order compaction and VACUUM",
   "Deployment pipelines and Git integration",
   "Row-level security policies and dynamic data masking",
   "Windowed aggregations in the eventhouse plus Activator actions"
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
  "explanation": "Real-Time Intelligence supports time-windowed aggregations over streaming data in the eventhouse and lets Activator raise alerts or trigger actions when conditions are met.",
  "source": {
   "title": "Real-Time Intelligence overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/overview"
  }
 },
 {
  "id": "gen-112",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which statement best describes the role of the eventhouse within a Real-Time Intelligence solution?",
  "options": [
   "It is a no-code canvas used only to route events between sources and destinations",
   "It is an analytics store optimized for time-series and event data, queried with KQL",
   "It is a Git provider used to version control streaming artifacts",
   "It is a semantic model layer used exclusively for Power BI Direct Lake reports"
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
  "explanation": "The eventhouse is the Real-Time Intelligence analytics store built for large volumes of time-series/event data, and its KQL databases are queried using the Kusto Query Language.",
  "source": {
   "title": "Real-Time Intelligence overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/overview"
  }
 },
 {
  "id": "gen-113",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An engineer wants to filter out records where status equals 'error' and compute a running count grouped by region directly inside an eventstream, without writing any Spark or KQL code. Which eventstream feature enables this?",
  "options": [
   "A stored procedure activity in a data pipeline",
   "A DirectQuery composite model over the stream",
   "No-code event processor transformations such as Filter, Group by, and Aggregate",
   "The Copy activity mapping tab"
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
  "explanation": "Eventstreams provide a no-code event processor with operations like Filter, Aggregate, Group by, and Join to transform events in-flight before they reach a destination.",
  "source": {
   "title": "Eventstreams overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  }
 },
 {
  "id": "gen-114",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A developer has an existing Apache Kafka application and wants it to publish events into a Fabric eventstream and consume processed events back, using familiar Kafka client libraries. Which eventstream capability makes this possible?",
  "options": [
   "The eventstream's Kafka-compatible endpoint",
   "A OneLake shortcut to the Kafka topic",
   "Mirroring the Kafka cluster into a Warehouse",
   "A Dataflow Gen2 connector to Kafka"
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
  "explanation": "Eventstreams expose a Kafka endpoint so applications using the Kafka protocol can stream data in and out of the eventstream without changing their client code.",
  "source": {
   "title": "Eventstreams overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  }
 },
 {
  "id": "gen-115",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which of the following is a valid destination that an eventstream can route processed events to in Fabric?",
  "options": [
   "A Power BI paginated report",
   "A Git repository branch",
   "A deployment pipeline stage",
   "An Eventhouse (KQL database)"
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
  "explanation": "Eventstreams can send events to destinations including an Eventhouse/KQL database, a Lakehouse, a derived stream, and a Fabric Activator, enabling downstream analytics and actions.",
  "source": {
   "title": "Eventstreams overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  }
 },
 {
  "id": "gen-116",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are configuring an eventstream and need to combine two incoming event streams on a shared key so enriched records flow to a single destination. Which no-code operation should you add to the eventstream?",
  "options": [
   "VACUUM",
   "Join",
   "Pivot",
   "OPTIMIZE"
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
  "explanation": "The eventstream event processor includes a Join operation that merges two streams on a matching condition, alongside Filter, Aggregate, and Group by transformations.",
  "source": {
   "title": "Eventstreams overview — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  }
 },
 {
  "id": "gen-117",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer wants to process an eventstream using PySpark in a Fabric notebook, applying custom transformation logic to the streaming records. Which approach does Microsoft document for reading an eventstream in a notebook?",
  "options": [
   "Query the eventstream with T-SQL through the SQL analytics endpoint",
   "Import the eventstream as a Dataflow Gen2 query",
   "Use Spark Structured Streaming to read from the eventstream in the notebook",
   "Attach the eventstream as a OneLake shortcut under Tables"
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
  "explanation": "Fabric supports reading an eventstream from a notebook using Apache Spark Structured Streaming, allowing PySpark code to consume and transform the streaming data.",
  "source": {
   "title": "Explore sample stock market data with Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/explore-sample-stock-market-data-with-spark"
  }
 },
 {
  "id": "gen-118",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When consuming an eventstream with Spark Structured Streaming in a Fabric notebook, which characteristic distinguishes a structured streaming query from a normal batch DataFrame read?",
  "options": [
   "It reads the source exactly once and then stops automatically",
   "It requires the data to first be exported to CSV files",
   "It can only output to the console and never to a table",
   "It runs as a continuous query that incrementally processes new events as they arrive"
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
  "explanation": "Spark Structured Streaming runs as a continuous, incremental query that keeps processing newly arriving events, unlike a one-time batch read of a static DataFrame.",
  "source": {
   "title": "Explore sample stock market data with Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/explore-sample-stock-market-data-with-spark"
  }
 },
 {
  "id": "gen-119",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team already knows Python and Spark and wants maximum flexibility to enrich streaming events with complex custom logic and machine-learning scoring before writing results to a Delta table. Which streaming processing engine best fits these requirements in Fabric?",
  "options": [
   "Spark Structured Streaming in a notebook",
   "The eventstream no-code event processor",
   "Dynamic data masking in a Warehouse",
   "A KQL update policy in an eventhouse"
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
  "explanation": "Spark Structured Streaming in a notebook gives full programmatic control with PySpark for complex custom transformations and ML, whereas the eventstream processor is limited to no-code operations.",
  "source": {
   "title": "Explore sample stock market data with Spark — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/explore-sample-stock-market-data-with-spark"
  }
 },
 {
  "id": "gen-120",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An analyst needs to author and save KQL queries against data stored in an eventhouse/KQL database and reuse them later. Which Fabric item is designed for writing, running, and saving these Kusto queries?",
  "options": [
   "A Dataflow Gen2",
   "A KQL queryset",
   "A notebook environment",
   "A deployment pipeline"
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
  "explanation": "A KQL queryset is the Fabric item used to run, view, customize, save, and share Kusto Query Language queries against KQL databases and eventhouses.",
  "source": {
   "title": "KQL queryset — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-set"
  }
 },
 {
  "id": "gen-121",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which capability of a KQL queryset lets a single query combine data stored in a KQL database with data in other Fabric sources?",
  "options": [
   "V-Order write optimization",
   "Sensitivity label inheritance",
   "Cross-service (cross-database) queries",
   "Incremental refresh watermarks"
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
  "explanation": "A KQL queryset supports cross-service and cross-database queries, so a KQL query can reference and join data across KQL databases and other supported sources.",
  "source": {
   "title": "KQL queryset — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-set"
  }
 },
 {
  "id": "gen-122",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A KQL queryset is used to explore streaming telemetry landed in an eventhouse. Which language does the queryset use to filter, aggregate, and analyze that data?",
  "options": [
   "T-SQL",
   "PySpark",
   "M (Power Query)",
   "Kusto Query Language (KQL)"
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
  "explanation": "A KQL queryset uses the Kusto Query Language to query KQL database and eventhouse data; KQL is optimized for fast, read-only analysis of large time-series datasets.",
  "source": {
   "title": "KQL queryset — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-set"
  }
 },
 {
  "id": "gen-123",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Your external Delta tables live in ADLS Gen2 and are exposed to an eventhouse through OneLake shortcuts, but interactive KQL queries over them are slow. Which Real-Time Intelligence feature is designed to speed up these queries by caching the shortcut data?",
  "options": [
   "V-Order compaction",
   "Query acceleration for OneLake shortcuts",
   "Deployment rules",
   "Dynamic data masking"
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
  "explanation": "Query acceleration for OneLake shortcuts caches external delta table data referenced by a shortcut, significantly improving query performance compared with a standard (non-accelerated) shortcut.",
  "source": {
   "title": "Query acceleration for OneLake shortcuts — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/query-acceleration-overview"
  }
 },
 {
  "id": "gen-124",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When deciding between query acceleration for a OneLake shortcut and a standard OneLake shortcut in Real-Time Intelligence, which trade-off is most accurate?",
  "options": [
   "Query acceleration removes the need to store any data but disables KQL queries",
   "A standard shortcut is always faster because it caches data automatically",
   "Query acceleration improves query performance on shortcut data at the cost of additional caching resources",
   "Query acceleration only works with T-SQL, not KQL"
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
  "explanation": "Query acceleration trades extra caching resource consumption for faster queries over external shortcut data, whereas a standard shortcut reads the source directly without that acceleration.",
  "source": {
   "title": "Query acceleration for OneLake shortcuts — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/query-acceleration-overview"
  }
 },
 {
  "id": "gen-125",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team is choosing how to store streaming data for the fastest interactive KQL analytics in an eventhouse. Which option generally provides the best query performance for data that is fully ingested and managed by the eventhouse?",
  "options": [
   "A native (managed) table in the eventhouse",
   "A standard OneLake shortcut to external delta files",
   "A CSV file referenced through a Files shortcut",
   "A Dataflow Gen2 staging query"
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
  "explanation": "Native tables ingested into the eventhouse deliver the best query performance because the data is fully managed and optimized, whereas shortcuts read external data with more overhead unless query acceleration is applied.",
  "source": {
   "title": "Query acceleration for OneLake shortcuts — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/query-acceleration-overview"
  }
 },
 {
  "id": "gen-126",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An eventhouse queries external delta tables through OneLake shortcuts that are updated frequently by an upstream process. Query acceleration is enabled. What should the engineer understand about how accelerated shortcuts behave?",
  "options": [
   "Accelerated shortcut data never updates and must be recreated daily",
   "Enabling acceleration converts the shortcut into a Warehouse table automatically",
   "Acceleration only applies to internal OneLake tables, never external delta tables",
   "Query acceleration caches the external delta data so subsequent queries run faster while reflecting the shortcut's data"
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
  "explanation": "Query acceleration works with external delta tables surfaced via OneLake shortcuts by caching their data to boost query performance, unlike a standard shortcut that reads the source each time.",
  "source": {
   "title": "Query acceleration for OneLake shortcuts — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/query-acceleration-overview"
  }
 },
 {
  "id": "gen-127",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer manages dozens of pipelines, Dataflow Gen2 refreshes, notebook runs, and semantic model refreshes across a Fabric workspace. They want a single place to see the status and history of all these jobs without opening each item individually. Which Fabric feature should they use?",
  "options": [
   "The workspace lineage view",
   "The Capacity Metrics app",
   "Individual item settings pages",
   "The Monitoring hub"
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
  "explanation": "The Monitoring hub is a centralized experience that shows job status and history across pipelines, dataflows, notebooks, semantic models, and other items, so you don't have to check each item separately.",
  "source": {
   "title": "Use the Monitoring hub — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/admin/monitoring-hub"
  }
 },
 {
  "id": "gen-128",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In the Monitoring hub, a data engineer wants to reduce the list to only failed notebook runs so they can triage overnight ingestion problems quickly. What is the most direct way to do this?",
  "options": [
   "Export the entire list to CSV and filter in Excel",
   "Delete successful runs from the history",
   "Open each notebook and check its run log one by one",
   "Apply the built-in filters for item type and status"
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
  "explanation": "The Monitoring hub provides filtering and column customization, letting you narrow the view by item type (for example, Notebook) and status (for example, Failed) directly in the hub.",
  "source": {
   "title": "Use the Monitoring hub — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/admin/monitoring-hub"
  }
 },
 {
  "id": "gen-129",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A team lead is confused about the scope of items shown in the Monitoring hub. Which statement accurately describes what the Monitoring hub displays?",
  "options": [
   "Only pipeline runs from the current workspace",
   "Only semantic model refreshes across the tenant",
   "Activities for Fabric items the user has permission to view, across supported item types",
   "Only jobs that are currently running, never historical runs"
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
  "explanation": "The Monitoring hub surfaces monitoring activities for supported Fabric items that the signed-in user has permission to see, including both in-progress and completed (historical) runs.",
  "source": {
   "title": "Use the Monitoring hub — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/admin/monitoring-hub"
  }
 },
 {
  "id": "gen-130",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer schedules a nightly pipeline and wants to be notified by email if a scheduled run fails, without building any custom alerting logic. Which capability supports this?",
  "options": [
   "OneLake diagnostic logs",
   "Schedule-failure notifications configured on the scheduled item",
   "A manual daily check of the Monitoring hub",
   "Row-level security policies"
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
  "explanation": "Fabric lets you enable failure notifications on a schedule so that owners receive an email when a scheduled run fails, which the Monitoring hub documentation describes for supported items.",
  "source": {
   "title": "Use the Monitoring hub — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/admin/monitoring-hub"
  }
 },
 {
  "id": "gen-131",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After opening a specific pipeline run in the Monitoring hub, a data engineer wants to see the sequence and duration of each activity to find the slowest step. Which view should they open?",
  "options": [
   "The Query Insights view",
   "The Gantt (timeline) view of the pipeline run",
   "The V-Order compaction report",
   "The endorsement badge panel"
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
  "explanation": "The pipeline run monitoring experience includes a Gantt view that visualizes each activity's start time and duration, making it easy to spot which activity took the longest.",
  "source": {
   "title": "Monitor pipeline runs — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-pipeline-runs"
  }
 },
 {
  "id": "gen-132",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data pipeline failed on its Copy activity. In the pipeline run detail view, where does a data engineer find the specific error message that caused the failure?",
  "options": [
   "By hovering the failed activity's output/error details in the run's activity list",
   "In the workspace's OneLake file explorer",
   "In the semantic model's refresh schedule",
   "In the Capacity Metrics app's throttling chart"
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
  "explanation": "Monitoring a pipeline run lets you drill into each activity and view its output and error details, exposing the specific error message for a failed activity such as Copy.",
  "source": {
   "title": "Monitor pipeline runs — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-pipeline-runs"
  }
 },
 {
  "id": "gen-133",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer wants to run KQL queries over historical pipeline run logs to build custom monitoring dashboards and long-term trend analysis. Which Fabric capability provides this log data?",
  "options": [
   "Dynamic data masking",
   "Workspace monitoring, which stores logs in an eventhouse queryable with KQL",
   "The lakehouse SQL analytics endpoint only",
   "Sensitivity labels applied to the pipeline"
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
  "explanation": "Workspace monitoring captures pipeline (and other) logs into a monitoring eventhouse/KQL database that you can query with KQL for custom analysis beyond the built-in run history.",
  "source": {
   "title": "Monitor pipeline runs — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-pipeline-runs"
  }
 },
 {
  "id": "gen-134",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A nightly ingestion pipeline failed at its third of five activities. Rather than re-running the whole pipeline from the beginning, the engineer wants to resume from the point of failure after fixing the issue. Which pipeline monitoring capability enables this?",
  "options": [
   "Rerun the pipeline from the failed activity",
   "Delete the pipeline and recreate it",
   "Disable the schedule permanently",
   "Convert the pipeline into a Dataflow Gen2"
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
  "explanation": "From the pipeline run monitoring view you can rerun a pipeline from a failed activity, avoiding re-execution of already-successful upstream activities.",
  "source": {
   "title": "Monitor pipeline runs — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-pipeline-runs"
  }
 },
 {
  "id": "gen-135",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer wants a broad, capacity-level view of Fabric Data Warehouse resource consumption and how warehouse workloads contribute to capacity usage over time. Which tool is the best fit?",
  "options": [
   "The Fabric Capacity Metrics app",
   "The Git integration status page",
   "The deployment pipelines compare view",
   "The OneLake shortcut cache settings"
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
  "explanation": "Monitoring a Fabric Data Warehouse includes using the Microsoft Fabric Capacity Metrics app to understand capacity-level resource consumption attributable to warehouse activity.",
  "source": {
   "title": "Monitoring Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/monitoring-overview"
  }
 },
 {
  "id": "gen-136",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer needs to identify long-running and resource-intensive T-SQL queries against a Fabric warehouse to tune them. Which built-in warehouse monitoring feature exposes historical query execution details?",
  "options": [
   "Delta table OPTIMIZE logs",
   "The Eventstream error metrics table",
   "OneLake diagnostic settings",
   "Query Insights views"
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
  "explanation": "Query Insights provides views over historical query activity in a Fabric warehouse, helping identify long-running, frequent, or resource-intensive queries.",
  "source": {
   "title": "Monitoring Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/monitoring-overview"
  }
 },
 {
  "id": "gen-137",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer wants to inspect currently executing sessions, requests, and transactions in a Fabric warehouse in near real time for live troubleshooting. Which monitoring mechanism should they use?",
  "options": [
   "Dynamic management views (DMVs)",
   "Deployment rules",
   "The Monitoring hub Gantt chart",
   "Sensitivity label inheritance"
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
  "explanation": "Fabric Data Warehouse supports dynamic management views (DMVs) that let you observe active sessions, requests, and transactions for live, near-real-time monitoring and troubleshooting.",
  "source": {
   "title": "Monitoring Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/monitoring-overview"
  }
 },
 {
  "id": "gen-138",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer opens the Data Warehouse Monitor experience within the warehouse item. What does this in-context monitoring surface primarily provide?",
  "options": [
   "Row-level security predicate definitions",
   "Insight into query activity and warehouse performance for that specific warehouse",
   "The Git commit history of the warehouse project",
   "The Spark pool autoscale configuration"
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
  "explanation": "The Data Warehouse Monitor provides in-context visibility into query activity and performance for the specific warehouse, complementing the capacity-level Metrics app and Query Insights.",
  "source": {
   "title": "Monitoring Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/monitoring-overview"
  }
 },
 {
  "id": "gen-139",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A business team wants to be alerted automatically when a semantic model's refreshed data shows total daily sales dropping below a threshold, and to trigger an email and a Teams message when it does — all without writing code. Which Fabric feature should the data engineer configure?",
  "options": [
   "Column-level security",
   "A VACUUM maintenance job",
   "A OneLake shortcut",
   "Fabric Activator (Data Activator)"
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
  "explanation": "Fabric Activator is a no-code capability that monitors data — including semantic model data and streaming events — and triggers actions such as emails or Teams messages when defined conditions are met.",
  "source": {
   "title": "What is Fabric Activator? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/data-activator/activator-introduction"
  }
 },
 {
  "id": "gen-140",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When configuring a rule in Fabric Activator, which three components must a data engineer define?",
  "options": [
   "A source project, a Spark pool, and a deployment stage",
   "A workspace role, a sensitivity label, and an audit scope",
   "An object/event to monitor, a condition to evaluate, and an action to take",
   "A partition key, a distribution type, and a statistics target"
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
  "explanation": "Activator rules are built around monitoring an object/event, evaluating a condition on its data, and taking an action (such as sending an alert) when the condition is met.",
  "source": {
   "title": "What is Fabric Activator? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/data-activator/activator-introduction"
  }
 },
 {
  "id": "gen-141",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Which of the following data sources can Fabric Activator monitor to drive its alerting rules?",
  "options": [
   "Only Power BI report visuals",
   "Only pipeline run logs",
   "Eventstreams and Power BI/semantic model data",
   "Only static CSV files in OneLake"
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
  "explanation": "Activator can monitor real-time data from eventstreams and data from Power BI reports/semantic models, letting it alert on both streaming events and refreshed model data.",
  "source": {
   "title": "What is Fabric Activator? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/data-activator/activator-introduction"
  }
 },
 {
  "id": "gen-142",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A monitoring solution must send an alert only when a sensor's temperature stays above 100 degrees for a sustained period, not on every momentary spike, and should trigger a Power Automate flow when it does. Which capability of Fabric Activator makes this possible?",
  "options": [
   "It can only send a single email per event with no conditions",
   "It supports time-based/sustained conditions and can trigger custom actions including Power Automate flows",
   "It requires a T-SQL stored procedure to evaluate the threshold",
   "It can only monitor batch pipeline runs, not sensor streams"
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
  "explanation": "Activator supports conditions that account for how long a state persists and can trigger actions such as sending alerts or starting a Power Automate flow, so momentary spikes can be excluded.",
  "source": {
   "title": "What is Fabric Activator? — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/data-activator/activator-introduction"
  }
 },
 {
  "id": "gen-143",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer troubleshooting a Dataflow Gen2 refresh wants to confirm whether the most recent refresh succeeded or failed and see its run history alongside other job types in one place. Which Fabric experience surfaces Dataflow Gen2 refresh activities together with pipeline and notebook runs?",
  "options": [
   "The Monitoring hub",
   "The Fabric CLI",
   "The lakehouse Files explorer",
   "The workspace settings page"
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
  "explanation": "The Monitoring hub aggregates activities across supported item types — including Dataflow Gen2 refreshes, pipelines, and notebooks — so status and history for all of them appear in one centralized list.",
  "source": {
   "title": "Use the Monitoring hub — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/admin/monitoring-hub"
  }
 },
 {
  "id": "gen-144",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer wants to compare cold-cache versus warm-cache query performance and review resource usage trends across many warehouse queries over the past week. Which combination of Fabric Data Warehouse monitoring tools best supports this analysis?",
  "options": [
   "Git integration and deployment pipelines",
   "OneLake shortcuts and mirroring",
   "Query Insights together with the Capacity Metrics app",
   "Dynamic data masking together with row-level security"
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
  "explanation": "Query Insights exposes historical query performance details (including caching behavior) while the Capacity Metrics app shows resource consumption trends, together giving a full picture of warehouse performance over time.",
  "source": {
   "title": "Monitoring Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/monitoring-overview"
  }
 },
 {
  "id": "gen-145",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Data Factory pipeline with eight sequential activities fails at the sixth activity (a Copy activity). You fix the underlying source connection issue. To avoid re-running the five activities that already succeeded, what is the most efficient way to resume the pipeline?",
  "options": [
   "Clone the pipeline and delete the first five activities before running it",
   "Use \"Rerun from failed activity\" from the pipeline run monitoring view",
   "Set the retry count on the first activity to 5 and trigger a new run",
   "Disable the first five activities manually, then trigger the pipeline"
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
  "explanation": "The pipeline run monitoring view lets you rerun from the failed activity, which re-executes only the failed activity and everything downstream, skipping the activities that already succeeded.",
  "source": {
   "title": "Monitor pipeline runs in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-pipeline-runs"
  }
 },
 {
  "id": "gen-146",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An engineer needs to see the exact error message and failure details for a specific activity inside a failed pipeline run. In the Fabric pipeline monitoring experience, where is this information found?",
  "options": [
   "By selecting the error/output icon next to the failed activity in the run detail view",
   "Only by querying the workspace Spark application logs",
   "By exporting the pipeline JSON definition and inspecting the activity node",
   "By opening the semantic model refresh history for the workspace"
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
  "explanation": "In the pipeline run detail view, each activity exposes input/output and an error icon that surfaces the specific error code and message for that activity.",
  "source": {
   "title": "Monitor pipeline runs in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-pipeline-runs"
  }
 },
 {
  "id": "gen-147",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You want to build long-term, queryable diagnostics for pipeline failures across many runs so you can analyze error patterns with KQL. Which capability should you enable and use?",
  "options": [
   "The built-in pipeline retry policy",
   "Workspace monitoring, which routes run logs to a monitoring eventhouse queryable with KQL",
   "The Gantt view in the Monitoring hub",
   "Dataflow Gen2 Mashup log download"
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
  "explanation": "Workspace monitoring captures pipeline run logs into a monitoring eventhouse (KQL database), enabling durable, cross-run analysis of failures with KQL queries.",
  "source": {
   "title": "Monitor pipeline runs in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-pipeline-runs"
  }
 },
 {
  "id": "gen-148",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A pipeline run shows an overall status of Failed, but you need to understand the timeline and which activities ran in parallel versus sequence to isolate the bottleneck near the failure. Which monitoring view is best suited for this?",
  "options": [
   "The list/table view of activity outputs",
   "The Gantt view of the pipeline run",
   "The Query Insights views",
   "The Spark Advisor panel"
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
  "explanation": "The Gantt view visualizes activity durations and overlap across the run timeline, making it easy to see sequencing and where time was spent before the failure.",
  "source": {
   "title": "Monitor pipeline runs in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-pipeline-runs"
  }
 },
 {
  "id": "gen-149",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Dataflow Gen2 refresh failed. You need the most detailed, low-level record of what happened during the Mashup engine evaluation to diagnose the transformation error. What should you do from the refresh history?",
  "options": [
   "Re-publish the dataflow to force a schema refresh",
   "Download the detailed refresh (Mashup) logs for the failed refresh",
   "Convert the dataflow to a pipeline Copy activity",
   "Increase the staging warehouse capacity"
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
  "explanation": "Dataflow Gen2 refresh history lets you download detailed Mashup logs for a refresh, which contain the engine-level evaluation details needed to diagnose transformation errors.",
  "source": {
   "title": "Monitor Dataflow Gen2 refresh history — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  }
 },
 {
  "id": "gen-150",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Dataflow Gen2 has multiple queries (tables). The overall refresh is marked Failed, but you suspect only one table caused the problem. Where in the refresh history can you confirm which specific table failed?",
  "options": [
   "In the Capacity Metrics app timepoint page",
   "In the refresh details, which show per-table (activity) status and error drill-down",
   "In the OneLake shortcut properties of the destination",
   "In the Spark job graph for the dataflow"
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
  "explanation": "The Dataflow Gen2 refresh history exposes per-table/activity status so you can drill into the individual table that errored rather than the aggregate refresh status.",
  "source": {
   "title": "Monitor Dataflow Gen2 refresh history — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  }
 },
 {
  "id": "gen-151",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An engineer opens the Dataflow Gen2 refresh history and sees a refresh with status \"Succeeded\" but a warning indicator. What is the correct interpretation?",
  "options": [
   "The refresh completed but some non-fatal issues were reported that should be reviewed in the details",
   "The refresh must be immediately re-run because no data was written",
   "The dataflow definition is corrupt and must be recreated",
   "The warning always indicates a capacity throttling event and can be ignored"
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
  "explanation": "A succeeded-with-warning refresh finished and wrote data, but recorded non-fatal issues; the refresh details should be reviewed to understand and address them.",
  "source": {
   "title": "Monitor Dataflow Gen2 refresh history — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  }
 },
 {
  "id": "gen-152",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A PySpark notebook cell fails partway through a large job. You want to see, in context, the real-time progress of the Spark job, the executor logs, and any diagnostics without leaving the notebook. Which feature provides this?",
  "options": [
   "The Fabric Capacity Metrics app",
   "The pipeline Gantt view",
   "The notebook's contextual (inline) Spark monitoring, showing job progress and real-time logs",
   "The Query Insights DMVs"
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
  "explanation": "Fabric notebooks provide contextual monitoring inline with the cells, exposing Spark job progress, stages, and real-time logs to debug failures without switching tools.",
  "source": {
   "title": "Monitor and debug Apache Spark notebooks — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitor-debug"
  }
 },
 {
  "id": "gen-153",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Spark job in a notebook is running far slower than expected. One stage has a few tasks taking dramatically longer than the rest, suggesting uneven partition sizes. Which built-in Fabric capability is designed to flag this condition automatically?",
  "options": [
   "The Monitoring hub schedule-failure notification",
   "The Eventhouse metrics table",
   "Spark Advisor, including data skew detection",
   "Dynamic data masking"
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
  "explanation": "Spark Advisor analyzes the job and surfaces advice such as data skew detection, which explains a few long-running tasks caused by uneven partitions.",
  "source": {
   "title": "Monitor and debug Apache Spark notebooks — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitor-debug"
  }
 },
 {
  "id": "gen-154",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After a notebook run fails, you want to inspect the Spark job graph and drill from a failed stage into the specific tasks and their logs. From the notebook, what is the correct path?",
  "options": [
   "Open the workspace Git history and compare notebook versions",
   "Download the Dataflow Gen2 Mashup logs",
   "Use the contextual monitoring to open the Spark job details, then navigate to the failed stage and tasks",
   "Query the queryinsights.exec_requests_history view"
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
  "explanation": "The notebook's contextual monitoring links to the Spark job details where you can drill from jobs to stages to individual tasks and their logs to locate the failure.",
  "source": {
   "title": "Monitor and debug Apache Spark notebooks — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitor-debug"
  }
 },
 {
  "id": "gen-155",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An Eventstream is deployed, but downstream data looks incomplete. You suspect malformed input events are being dropped when the stream tries to parse them. Which metric category from workspace monitoring should you examine first?",
  "options": [
   "Deserialization errors in EventStreamErrorMetrics",
   "VacuumDurationMs on the destination lakehouse",
   "The warehouse queryinsights.frequently_run_queries view",
   "The semantic model refresh duration"
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
  "explanation": "Eventstream workspace monitoring exposes EventStreamErrorMetrics that break out deserialization errors, which occur when incoming events cannot be parsed into the expected format.",
  "source": {
   "title": "Eventstream workspace monitoring — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/fabric-workspace-monitoring"
  }
 },
 {
  "id": "gen-156",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You enabled workspace monitoring for an Eventstream and want to determine whether errors are occurring at input parsing, during a transform's type conversion, or at runtime. Which metric grouping supports this distinction?",
  "options": [
   "BlobsDropped counts",
   "The Spark executor memory metrics",
   "The deployment pipeline comparison view",
   "EventStreamErrorMetrics categorized as runtime, deserialization, and conversion errors"
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
  "explanation": "EventStreamErrorMetrics separates errors into runtime, deserialization, and conversion categories, letting you localize whether the problem is parsing, type conversion, or execution.",
  "source": {
   "title": "Eventstream workspace monitoring — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/fabric-workspace-monitoring"
  }
 },
 {
  "id": "gen-157",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In the Eventstream editor, one node shows a red/error status. What is the best first step to understand why that specific node is failing?",
  "options": [
   "Delete the node and rebuild the entire eventstream",
   "Restart the Fabric capacity",
   "Review the node's status and error information exposed by Eventstream workspace monitoring",
   "Switch the destination to a warehouse instead of a lakehouse"
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
  "explanation": "Eventstream workspace monitoring reports per-node status and associated error metrics, so reviewing the failing node's status is the correct first diagnostic step.",
  "source": {
   "title": "Eventstream workspace monitoring — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/fabric-workspace-monitoring"
  }
 },
 {
  "id": "gen-158",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Data ingested into an Eventhouse from a stream appears to be missing. You want to confirm whether the eventhouse dropped blobs during ingestion and check the ingestion result status. Which source should you query?",
  "options": [
   "The queryinsights.long_running_queries view",
   "The Dataflow Gen2 refresh history",
   "The pipeline Gantt view",
   "The EventhouseMetrics table, examining BlobsDropped and IngestionResult"
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
  "explanation": "The EventhouseMetrics table surfaces ingestion diagnostics such as BlobsDropped and IngestionResult, which reveal whether and why ingestion failed or dropped data.",
  "source": {
   "title": "Monitor Eventhouse metrics — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/monitor-metrics"
  }
 },
 {
  "id": "gen-159",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An engineer is troubleshooting intermittent Eventhouse ingestion failures and wants to correlate the failures over time using a metrics table. Which metrics source is purpose-built for Eventhouse ingestion troubleshooting?",
  "options": [
   "EventhouseMetrics",
   "EventStreamErrorMetrics",
   "queryinsights.exec_requests_history",
   "The Spark Advisor"
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
  "explanation": "EventhouseMetrics is the metrics table for the Eventhouse and is used to troubleshoot ingestion failures such as dropped blobs and failed ingestion results.",
  "source": {
   "title": "Monitor Eventhouse metrics — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/monitor-metrics"
  }
 },
 {
  "id": "gen-160",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A scheduled T-SQL job against a Fabric Warehouse sometimes fails or is canceled. You need to identify which queries failed or were canceled and inspect their details after the fact. Which feature should you use?",
  "options": [
   "The Spark Advisor skew detection",
   "The Eventhouse metrics table",
   "The Dataflow Gen2 Mashup logs",
   "Query Insights, using the queryinsights views to find failed/canceled queries"
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
  "explanation": "Query Insights provides system views over historical query execution in the Warehouse, letting you identify failed, canceled, and long-running T-SQL queries.",
  "source": {
   "title": "Query insights in Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/query-insights"
  }
 },
 {
  "id": "gen-161",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A warehouse query intermittently times out for users. You want historical, aggregated visibility into completed query executions—including duration and status—without manually capturing sessions. Which Query Insights capability provides this?",
  "options": [
   "The EventhouseMetrics BlobsDropped column",
   "The pipeline \"rerun from failed activity\" action",
   "The queryinsights.exec_requests_history view of completed query executions",
   "The OneLake shortcut cache settings"
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
  "explanation": "Query Insights exposes queryinsights.exec_requests_history, which records completed query executions with details such as duration and status for historical analysis.",
  "source": {
   "title": "Query insights in Fabric Data Warehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/query-insights"
  }
 },
 {
  "id": "gen-162",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A OneLake shortcut in a Lakehouse points to an external ADLS Gen2 location. Users report that queries against the shortcut fail with authorization errors, while the underlying storage is healthy. What is the most likely root cause to investigate first?",
  "options": [
   "The Delta log of the destination table is corrupt",
   "The Spark pool has run out of executors",
   "The warehouse statistics are stale",
   "The shortcut's connection/credentials no longer have permission to the external target"
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
  "explanation": "A OneLake shortcut relies on its stored connection and credentials to reach the external target; when access fails despite healthy storage, expired or insufficient credentials/permissions on the shortcut connection are the typical cause.",
  "source": {
   "title": "Monitor pipeline runs in Data Factory — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-pipeline-runs"
  }
 },
 {
  "id": "gen-163",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A lakehouse Delta table is written to continuously by a streaming job, producing thousands of tiny Parquet files. Query performance on the SQL analytics endpoint has degraded. Which maintenance command should you run to consolidate the small files into fewer, larger ones?",
  "options": [
   "VACUUM",
   "OPTIMIZE",
   "ANALYZE",
   "REFRESH TABLE"
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
  "explanation": "The OPTIMIZE (bin-compaction) operation merges many small Parquet files into fewer larger files, which is the recommended fix for the small-file problem that hurts read performance.",
  "source": {
   "title": "Delta table maintenance in Fabric Lakehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  }
 },
 {
  "id": "gen-164",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "After many updates and deletes, a Delta table's storage has grown because old, unreferenced data files remain. You want to reclaim storage by physically removing files no longer referenced by the Delta log. Which operation performs this cleanup, and what is its default retention behavior?",
  "options": [
   "OPTIMIZE, which removes files older than 30 days",
   "V-Order, which compacts historical files on write",
   "VACUUM, which immediately deletes all previous version files",
   "VACUUM, which by default retains files for 7 days before they can be removed"
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
  "explanation": "VACUUM removes unreferenced data files older than the retention threshold, which defaults to 7 days (168 hours) to protect concurrent readers and time-travel.",
  "source": {
   "title": "Delta table maintenance in Fabric Lakehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  }
 },
 {
  "id": "gen-165",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A data engineer wants to run OPTIMIZE, V-Order, and VACUUM on a lakehouse table without writing any code. Which Fabric capability lets them trigger these maintenance actions directly from the Lakehouse explorer?",
  "options": [
   "The Table maintenance context-menu option in the Lakehouse explorer",
   "The Monitoring hub retry action",
   "A Dataflow Gen2 refresh",
   "The Capacity Metrics app"
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
  "explanation": "Fabric lakehouses expose ad hoc table maintenance directly from the explorer: right-clicking a Delta table opens the Maintenance dialog where you can run OPTIMIZE (with V-Order) and VACUUM.",
  "source": {
   "title": "Delta table maintenance in Fabric Lakehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  }
 },
 {
  "id": "gen-166",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You want to schedule regular OPTIMIZE and VACUUM maintenance for dozens of lakehouse tables so it runs automatically overnight. What is the recommended approach in Fabric?",
  "options": [
   "Manually run the Table maintenance dialog each night",
   "Enable auto-compaction, which requires no scheduling",
   "Orchestrate the maintenance in a notebook or pipeline that can be scheduled",
   "Rely on the SQL analytics endpoint to compact tables automatically"
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
  "explanation": "Beyond ad hoc runs from the explorer, table maintenance can be orchestrated programmatically in notebooks or pipelines so it can be scheduled and applied at scale across many tables.",
  "source": {
   "title": "Delta table maintenance in Fabric Lakehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  }
 },
 {
  "id": "gen-167",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Before running VACUUM on a Delta table, an engineer sets the retention period to 0 hours to aggressively reclaim space. What is the primary risk of doing this?",
  "options": [
   "It permanently disables V-Order on the table",
   "It can corrupt the Delta transaction log format",
   "It can remove files still needed by in-flight readers or time-travel, breaking concurrent queries",
   "It forces a full table rewrite that doubles storage temporarily"
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
  "explanation": "Setting VACUUM retention below the default risks deleting files that active readers or time-travel queries still depend on, which is why Fabric retains 7 days by default.",
  "source": {
   "title": "Delta table maintenance in Fabric Lakehouse — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  }
 },
 {
  "id": "gen-168",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "V-Order is a write-time optimization applied to Parquet files in Fabric. What benefit does it primarily provide?",
  "options": [
   "It encrypts the Parquet files at rest",
   "It replaces the Delta transaction log with a columnar index",
   "It deduplicates rows during write",
   "It applies sorting, encoding, and compression so engines like the SQL analytics endpoint and Power BI read the files faster"
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
  "explanation": "V-Order applies special sorting, row-group distribution, dictionary encoding, and compression to Parquet files, reducing the data read by Fabric compute engines and speeding up reads.",
  "source": {
   "title": "Delta Lake table optimization and V-Order — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/delta-optimization-and-v-order"
  }
 },
 {
  "id": "gen-169",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A workload is extremely write-heavy and read infrequently, so the engineer wants to reduce the write overhead added by V-Order. At which levels can V-Order be controlled in Fabric Spark?",
  "options": [
   "Only at the workspace level",
   "Only globally per capacity",
   "At the session, table, or individual write level",
   "V-Order cannot be disabled once a table is created"
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
  "explanation": "V-Order can be enabled or disabled at the Spark session level, per table (table property), or for a specific write operation, giving fine-grained control over the write-time cost.",
  "source": {
   "title": "Delta Lake table optimization and V-Order — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/delta-optimization-and-v-order"
  }
 },
 {
  "id": "gen-170",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A large fact table is frequently filtered on a small set of high-cardinality columns. To colocate related data and reduce the amount of data scanned for those filters, which technique should be combined with OPTIMIZE?",
  "options": [
   "Z-Order on the frequently filtered columns",
   "VACUUM with a longer retention",
   "Disabling V-Order",
   "Increasing the number of small files"
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
  "explanation": "Z-Ordering during OPTIMIZE colocates related information in the same set of files based on the specified columns, improving data-skipping for queries that filter on those columns.",
  "source": {
   "title": "Delta Lake table optimization and V-Order — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/delta-optimization-and-v-order"
  }
 },
 {
  "id": "gen-171",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "In a Fabric notebook, which Spark configuration controls whether V-Order is applied to Delta writes for the current session?",
  "options": [
   "spark.sql.shuffle.partitions",
   "spark.executor.memory",
   "spark.databricks.delta.retentionDurationCheck.enabled",
   "spark.sql.parquet.vorder.default (or the equivalent V-Order enablement setting)"
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
  "explanation": "V-Order for a session is toggled through the dedicated Spark V-Order configuration property, allowing writes in that session to be optimized (or not) without changing table-level settings.",
  "source": {
   "title": "Delta Lake table optimization and V-Order — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/delta-optimization-and-v-order"
  }
 },
 {
  "id": "gen-172",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Queries against a Fabric Warehouse are returning suboptimal plans because the optimizer lacks accurate information about data distribution. Which action most directly improves plan quality?",
  "options": [
   "Increasing the number of Parquet files per table",
   "Ensuring statistics are created and kept up to date",
   "Disabling result-set caching",
   "Converting all columns to VARCHAR(MAX)"
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
  "explanation": "The query optimizer relies on statistics to estimate cardinality and choose efficient plans; keeping statistics current is a core warehouse performance guideline.",
  "source": {
   "title": "Fabric Data Warehouse performance guidelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance"
  }
 },
 {
  "id": "gen-173",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An engineer notices the first execution of a query against a newly loaded Warehouse table is slow, but subsequent runs are much faster. What best explains the difference?",
  "options": [
   "The first run compiles the table into a materialized view",
   "The first run experiences a cold cache; later runs benefit from data cached in memory/SSD",
   "Statistics are only created on the second execution",
   "V-Order is applied lazily after the first query"
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
  "explanation": "Cold-cache performance is slower because data must be fetched from remote storage; once cached in memory and local SSD, repeat queries over the same data run faster.",
  "source": {
   "title": "Fabric Data Warehouse performance guidelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance"
  }
 },
 {
  "id": "gen-174",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "You are bulk-loading a large volume of data into a Fabric Warehouse table and want the most performant ingestion method for large files in OneLake or Azure storage. Which approach is recommended?",
  "options": [
   "Row-by-row INSERT statements",
   "A Dataflow Gen2 with per-row transformations",
   "COPY INTO",
   "SELECT INTO from a small staging view"
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
  "explanation": "COPY INTO is the recommended high-throughput bulk ingestion mechanism for loading large data files into a Fabric Warehouse efficiently.",
  "source": {
   "title": "Fabric Data Warehouse performance guidelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance"
  }
 },
 {
  "id": "gen-175",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "When designing tables in a Fabric Warehouse, why is choosing the smallest appropriate data type for each column a performance best practice?",
  "options": [
   "Smaller data types disable statistics collection",
   "Only small data types support clustered indexes",
   "Smaller data types reduce memory footprint and I/O, improving query and load performance",
   "Large data types are not supported in Fabric Warehouse"
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
  "explanation": "Right-sizing data types minimizes the bytes processed and stored, lowering memory and I/O consumption, which the warehouse performance guidelines call out as important.",
  "source": {
   "title": "Fabric Data Warehouse performance guidelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance"
  }
 },
 {
  "id": "gen-176",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A specific analytical query in a Fabric Warehouse consistently chooses a join strategy that performs poorly for its data shape. As a targeted, last-resort tuning measure, what does Fabric provide to influence the optimizer for that query?",
  "options": [
   "A mandatory clustered columnstore rebuild",
   "Disabling the SQL analytics endpoint",
   "Manual file compaction with OPTIMIZE",
   "Query hints (OPTION clause)"
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
  "explanation": "Fabric Warehouse supports query hints (via the OPTION clause) that let you influence optimizer decisions such as join type for specific problematic queries.",
  "source": {
   "title": "Fabric Data Warehouse performance guidelines — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance"
  }
 },
 {
  "id": "gen-177",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A Fabric Spark notebook job takes a long time to begin executing because a brand-new Spark session must be provisioned each time. Which Spark compute feature is designed to minimize this session startup latency?",
  "options": [
   "Custom pools with the largest node size",
   "Starter pools (prehydrated, always-ready clusters)",
   "Disabling dynamic allocation",
   "Setting autoscale to a fixed single node"
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
  "explanation": "Starter pools are pre-warmed, always-on clusters that let Spark sessions start in seconds, avoiding the cluster spin-up delay incurred by fully custom pools.",
  "source": {
   "title": "Apache Spark compute for Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-compute"
  }
 },
 {
  "id": "gen-178",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "A workload has highly variable data volumes across runs, and you want Spark to add or remove executors within a job based on demand rather than provisioning a fixed number. Which feature should you enable on the pool?",
  "options": [
   "V-Order",
   "Result-set caching",
   "Z-Order clustering",
   "Dynamic allocation (autoscale of executors)"
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
  "explanation": "Dynamic allocation lets Spark scale the number of executors up and down within configured min/max bounds according to the workload, right-sizing compute for variable jobs.",
  "source": {
   "title": "Apache Spark compute for Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-compute"
  }
 },
 {
  "id": "gen-179",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "An engineer needs Spark jobs to run on nodes with more memory and a specific number of nodes tailored to a heavy transformation. Which Fabric Spark option gives this level of control over node size and pool configuration?",
  "options": [
   "Starter pools, which use fixed default node sizes",
   "Custom Spark pools",
   "The SQL analytics endpoint",
   "The Monitoring hub"
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
  "explanation": "Custom Spark pools let you choose node sizes (memory/cores), set node counts, and configure autoscale, providing control that the default starter pool does not.",
  "source": {
   "title": "Apache Spark compute for Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-compute"
  }
 },
 {
  "id": "gen-180",
  "sourceBank": "microsoft-learn",
  "type": "single",
  "generated": true,
  "question": "Where are the maximum node counts, autoscale limits, and available node sizes for Spark pools ultimately bounded in Fabric?",
  "options": [
   "By the capacity assigned to the workspace",
   "By the number of lakehouses in the workspace",
   "By the Delta log retention setting",
   "By the number of Power BI reports connected"
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
  "explanation": "Spark pool sizing (node counts, autoscale ceilings, and available node families) is bounded by the Fabric capacity assigned to the workspace, which sets the compute limits available.",
  "source": {
   "title": "Apache Spark compute for Fabric — Microsoft Learn",
   "url": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-compute"
  }
 }
];
