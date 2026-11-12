export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "cloud" | "web";
  description: string;
  detailedOverview: string;
  badge: string;
  gradient: string;
  icon: string;
  features: string[];
  benefits: { title: string; description: string }[];
  deliverables: string[];
  technologies: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    subtitle: "Enterprise-grade cloud architectures for scale and reliability",
    category: "cloud",
    badge: "Cloud Infrastructure",
    gradient: "from-blue-600 via-indigo-600 to-cyan-500",
    icon: "cloud",
    description:
      "We provide secure, scalable, and cost-effective cloud solutions that help businesses modernize their IT infrastructure, improve performance, and accelerate growth.",
    detailedOverview:
      "At Loopsquare Tech, our Cloud Solutions empower modern enterprises to ditch rigid legacy systems and harness the elastic power of the cloud. Whether you are running distributed microservices, multi-region deployments, or data-intensive analytics workloads, our certified cloud architects design resilient, automated, and secure cloud environments on AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
    features: [
      "Custom Multi-Cloud and Hybrid Architecture Design",
      "Infrastructure as Code (Terraform, AWS CDK, Pulumi)",
      "High Availability & Automated Disaster Recovery (DR)",
      "Serverless & Microservices Containerization (Docker, Kubernetes)",
      "Continuous Integration & Continuous Delivery (CI/CD Pipelines)",
      "24/7 Monitoring, Alerting & Health Probes",
    ],
    benefits: [
      {
        title: "99.99% Operational Uptime",
        description: "Self-healing distributed systems designed with redundant availability zones.",
      },
      {
        title: "Elastic Scalability",
        description: "Seamlessly scale resources up or down dynamically based on user demand.",
      },
      {
        title: "Maximized Cost Efficiency",
        description: "Eliminate costly over-provisioning through optimized resource allocation.",
      },
    ],
    deliverables: [
      "Target Architecture Blueprint & Infrastructure Diagrams",
      "Automated Infrastructure as Code (IaC) Repositories",
      "Hardened VPCs, IAM Policies, and Security Baselines",
      "Automated Deployment CI/CD Pipelines with GitOps",
      "Monitoring Dashboard (CloudWatch/Datadog/Grafana)",
      "Operations Runbook & Admin Training",
    ],
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Kubernetes", "Docker", "Terraform", "Prometheus", "Grafana"],
    process: [
      {
        step: "01",
        title: "Assessment & Strategy",
        description: "We audit existing workloads, performance requirements, compliance mandates, and business objectives.",
      },
      {
        step: "02",
        title: "Architecture Design",
        description: "Craft resilient, multi-zone network topologies and compute configurations with strict security boundaries.",
      },
      {
        step: "03",
        title: "Automated Deployment",
        description: "Provision all resources via Infrastructure as Code with zero manual drift and deterministic builds.",
      },
      {
        step: "04",
        title: "Validation & Handover",
        description: "Perform load stress testing, failover drills, and security audits followed by comprehensive team training.",
      },
    ],
    faqs: [
      {
        question: "Which cloud provider is right for our business?",
        answer: "We evaluate your tech stack, compliance requirements, geographic reach, and pricing incentives to recommend AWS, Azure, GCP, or a hybrid multi-cloud setup.",
      },
      {
        question: "Can you help manage our cloud after it's built?",
        answer: "Yes, we offer ongoing managed cloud operations, proactive monitoring, security patch management, and SLA-backed support.",
      },
    ],
  },
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    subtitle: "High-performance, responsive websites built to turn visitors into customers",
    category: "web",
    badge: "Web Experience",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    icon: "globe",
    description:
      "We create modern, responsive, and user-friendly websites that strengthen your online presence and help businesses connect with their customers.",
    detailedOverview:
      "Your website is the digital front door to your business. Loopsquare Tech crafts ultra-fast, visually captivating, and accessible web experiences tailored to showcase your unique value proposition. By pairing state-of-the-art frameworks like React, Next.js, and modern CSS with UX-first design principles, we ensure your site looks flawless across all screen sizes and converts visitors into loyal clients.",
    features: [
      "Custom UI/UX Design Tailored to Your Brand Identity",
      "Fully Mobile-Responsive & Tablet Optimized",
      "Ultra-Fast Core Web Vitals (95+ Lighthouse Scores)",
      "Search Engine Optimization (SEO) Built-in from Day One",
      "Accessible & Compliance-Ready (WCAG 2.1 AA Standards)",
      "Intuitive Content Management (Headless CMS / Custom Admin)",
    ],
    benefits: [
      {
        title: "Instant First Impressions",
        description: "Modern aesthetics and clean typography that inspire trust and confidence.",
      },
      {
        title: "Lightning-Fast Load Times",
        description: "Sub-second load times that keep visitors engaged and reduce bounce rates.",
      },
      {
        title: "Higher Search Rankings",
        description: "Clean semantic markup and structured data designed for search engine prominence.",
      },
    ],
    deliverables: [
      "Interactive High-Fidelity Figma Prototypes",
      "Production-Ready Front-End & Back-End Codebase",
      "Responsive Layouts for Mobile, Tablet, and Desktop",
      "SEO Meta Tags, Open Graph previews, and XML Sitemap",
      "Integrated Contact Forms & Analytics Tracking",
      "Comprehensive User Guide & CMS Training",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Sanity / Strapi", "Figma", "Node.js"],
    process: [
      {
        step: "01",
        title: "Discovery & Wireframing",
        description: "We understand your target audience, analyze competitors, and map out intuitive user flows and wireframes.",
      },
      {
        step: "02",
        title: "UI Design & Branding",
        description: "Craft modern, cohesive design systems with high-converting layouts, polished animations, and typography.",
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Clean, performant coding with cross-browser compatibility, mobile responsiveness, and accessibility checks.",
      },
      {
        step: "04",
        title: "SEO, Launch & Analytics",
        description: "Deploy to high-speed CDN edge networks with analytics, domain setup, and search engine submission.",
      },
    ],
    faqs: [
      {
        question: "How long does a custom website development project take?",
        answer: "Most custom corporate and brand websites are designed, developed, and deployed within 2 to 4 weeks depending on scope.",
      },
      {
        question: "Will I be able to edit content on my website without coding?",
        answer: "Yes, we integrate easy-to-use CMS solutions that allow your team to update text, images, blog posts, and banners in real time.",
      },
    ],
  },
  {
    id: "cloud-migration",
    slug: "cloud-migration",
    title: "Cloud Migration",
    subtitle: "Zero-data-loss, minimal-downtime migration to modern cloud ecosystems",
    category: "cloud",
    badge: "Data & Systems Migration",
    gradient: "from-indigo-600 via-purple-600 to-blue-500",
    icon: "switch",
    description:
      "Seamlessly migrate your applications, data, and infrastructure to the cloud with minimal downtime and maximum efficiency.",
    detailedOverview:
      "Migrating legacy workloads or on-premises servers to the cloud can be daunting. Loopsquare Tech provides structured, battle-tested migration pathways that protect data integrity, prevent disruption to daily business operations, and modernize your architecture during the transition. We handle everything from Lift-and-Shift (Rehosting) to Replatforming and Refactoring for cloud-native agility.",
    features: [
      "Holistic Application & Database Dependency Mapping",
      "Phased, Zero-Data-Loss Migration Methodologies",
      "Live Database Replication & Synchronization",
      "Automated Cutover Planning with Instant Rollback Safeguards",
      "Legacy Code Modernization & Container Wrapping",
      "Post-Migration Performance Benchmarking & Validation",
    ],
    benefits: [
      {
        title: "Zero Business Interruption",
        description: "Staged cutovers and rehearsals guarantee your customers experience no unexpected outages.",
      },
      {
        title: "Bulletproof Data Integrity",
        description: "Multi-point checksum verifications ensure every record and file is safely preserved.",
      },
      {
        title: "Immediate Performance Gains",
        description: "Enjoy faster compute speeds, reduced latency, and modern managed cloud services.",
      },
    ],
    deliverables: [
      "Migration Feasibility & Readiness Assessment",
      "Comprehensive Cutover Timeline & Runbook",
      "Pre-Flight Staging Environment with Mirrored Production Data",
      "Data Sync & Verification Auditing Reports",
      "Decommissioning Plan for Legacy Infrastructure",
      "Post-Cutover Hypercare Support",
    ],
    technologies: ["AWS DMS", "Azure Migrate", "Google Cloud Migrate", "Docker", "PostgreSQL", "Kafka", "Terraform"],
    process: [
      {
        step: "01",
        title: "Workload Audit",
        description: "Inventory all servers, databases, third-party integrations, bandwidth requirements, and dependencies.",
      },
      {
        step: "02",
        title: "Target Architecture & Pilot",
        description: "Build the cloud destination environment and execute a pilot migration on non-critical workloads.",
      },
      {
        step: "03",
        title: "Continuous Replication",
        description: "Establish real-time data sync channels between on-premises systems and cloud storage/databases.",
      },
      {
        step: "04",
        title: "Scheduled Cutover & Verification",
        description: "Perform scheduled switchover during off-peak windows, verify data consistency, and initiate hypercare.",
      },
    ],
    faqs: [
      {
        question: "How do you ensure our operations don't experience downtime?",
        answer: "We use continuous background replication to keep target cloud databases in sync with production. The final DNS switchover takes only minutes.",
      },
      {
        question: "What happens if an unexpected issue arises during cutover?",
        answer: "Every migration comes with an automated rollback procedure that allows us to revert traffic instantly with zero data loss.",
      },
    ],
  },
  {
    id: "cloud-cost-optimization",
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization",
    subtitle: "Identify waste, rightsize resources, and reduce your monthly cloud bill by up to 40%",
    category: "cloud",
    badge: "FinOps & ROI",
    gradient: "from-purple-600 via-pink-600 to-indigo-600",
    icon: "trending-down",
    description:
      "Optimize your cloud spending by identifying cost-saving opportunities while maintaining performance, reliability, and scalability.",
    detailedOverview:
      "Unchecked cloud usage, idle compute instances, unattached storage volumes, and inefficient data transfer routes can inflate monthly infrastructure spending. Loopsquare Tech implements data-driven FinOps methodologies that systematically identify waste, rightsize resources, leverage committed pricing models (Reserved Instances, Savings Plans, Spot), and establish financial accountability without sacrificing performance.",
    features: [
      "Comprehensive Deep-Dive Cloud Spend & Usage Auditing",
      "Detection of Orphaned Disks, Idle Instances & Zombie Resources",
      "Automated Workload Rightsizing & Auto-Scaling Policies",
      "Reserved Instance (RI) & Savings Plans Strategic Allocation",
      "Storage Tier Lifecycle Optimization (Cold/Archive policies)",
      "FinOps Cost Attribution, Budget Alerts & Real-Time Dashboards",
    ],
    benefits: [
      {
        title: "Up to 40% Bill Reduction",
        description: "Most clients recoup our optimization fees within the first 60 days of implementation.",
      },
      {
        title: "Predictable Monthly Forecasting",
        description: "Eliminate surprise end-of-month cloud bills with granular budget triggers.",
      },
      {
        title: "Sustained Long-Term Savings",
        description: "Automated governance policies prevent cloud sprawl from creeping back in.",
      },
    ],
    deliverables: [
      "Executive Cost Audit & Savings Opportunities Report",
      "Immediate High-Impact 'Quick Win' Action Plan",
      "Rightsizing & Architectural Recommendation Matrix",
      "Automated Scheduled Shutdown for Dev/Stage Environments",
      "Custom FinOps Cost Allocation Tags & Dashboard",
      "Quarterly Cloud Financial Review Guidance",
    ],
    technologies: ["AWS Cost Explorer", "AWS Compute Optimizer", "Azure Cost Management", "GCP Cloud Billing", "Kubecost", "Datadog"],
    process: [
      {
        step: "01",
        title: "Spend Telemetry Collection",
        description: "Analyze 3-12 months of historical billing records, resource utilization metrics, and cost spikes.",
      },
      {
        step: "02",
        title: "Waste Identification",
        description: "Uncover idle nodes, overprovisioned memory/CPU, unattached storage, and sub-optimal network routing.",
      },
      {
        step: "03",
        title: "Rightsizing & Commitment",
        description: "Execute non-disruptive rightsizing adjustments and establish strategic Savings Plans and commitments.",
      },
      {
        step: "04",
        title: "Governance & Automation",
        description: "Deploy automated tagging policies, budget threshold alarms, and scheduled non-production shutdowns.",
      },
    ],
    faqs: [
      {
        question: "Will cost optimization degrade our system's speed or performance?",
        answer: "Never. We base all recommendations on actual historical CPU, memory, and I/O utilization metrics to maintain peak performance thresholds.",
      },
      {
        question: "How fast can we see results?",
        answer: "Immediate waste removal (zombie resources, obsolete snapshots) yields savings on your very next billing cycle.",
      },
    ],
  },
  {
    id: "cloud-security-management",
    slug: "cloud-security-management",
    title: "Cloud Security & Management",
    subtitle: "Enterprise defense, proactive vulnerability monitoring, and regulatory compliance",
    category: "cloud",
    badge: "Security & Governance",
    gradient: "from-indigo-600 via-blue-600 to-cyan-600",
    icon: "shield",
    description:
      "Protect and manage your cloud infrastructure with proactive monitoring, security best practices, and ongoing technical support.",
    detailedOverview:
      "Modern cyber threats require a Zero Trust security posture. Loopsquare Tech shields your cloud environments with continuous posture management, robust identity access controls, data encryption at rest and in transit, and proactive threat detection. We help you achieve compliance with SOC 2, ISO 27001, HIPAA, and GDPR standards while ensuring seamless day-to-day operations.",
    features: [
      "Zero Trust Architecture & Least-Privilege IAM Enforcement",
      "Cloud Security Posture Management (CSPM) & Vulnerability Scanning",
      "End-to-End Encryption for Data at Rest and in Transit",
      "Web Application Firewall (WAF) & DDoS Mitigation (Cloudflare, AWS Shield)",
      "Automated Patching, Backup Verification & Log Retention",
      "Compliance Alignment for SOC 2, ISO 27001, HIPAA, and GDPR",
    ],
    benefits: [
      {
        title: "Proactive Threat Defense",
        description: "Identify and neutralize vulnerabilities before attackers can discover them.",
      },
      {
        title: "Streamlined Compliance",
        description: "Accelerate security audits with automated evidence gathering and audit trails.",
      },
      {
        title: "Round-the-Clock Peace of Mind",
        description: "Continuous monitoring ensures mission-critical services remain shielded 24/7.",
      },
    ],
    deliverables: [
      "Cloud Security Audit & Risk Assessment Matrix",
      "Hardened IAM Roles, Multi-Factor Authentication (MFA) Policies",
      "Configured WAF Rulesets and DDoS Protection Shields",
      "Automated Key Management & Secret Rotation Systems",
      "Centralized SIEM Logging & Real-Time Incident Alerts",
      "Incident Response Playbook & Disaster Recovery Plan",
    ],
    technologies: ["AWS GuardDuty", "AWS Security Hub", "Azure Sentinel", "Cloudflare", "WAF", "HashiCorp Vault", "Wazuh"],
    process: [
      {
        step: "01",
        title: "Security & Risk Assessment",
        description: "Benchmark your existing infrastructure against CIS benchmarks, NIST guidelines, and industry best practices.",
      },
      {
        step: "02",
        title: "Identity & Access Hardening",
        description: "Implement principle of least privilege, enforce MFA, and eliminate hardcoded credentials and wildcards.",
      },
      {
        step: "03",
        title: "Network & Perimeter Defense",
        description: "Lock down public endpoints, deploy web application firewalls, and encrypt all data transport channels.",
      },
      {
        step: "04",
        title: "Continuous SIEM & Support",
        description: "Activate automated threat detection, centralized log analysis, and 24/7 security incident response.",
      },
    ],
    faqs: [
      {
        question: "How do you help us pass compliance audits like SOC 2?",
        answer: "We configure policy compliance guardrails, automated evidence generation, access logging, and encrypted backups aligned with auditor requirements.",
      },
      {
        question: "What happens if a security anomaly or breach attempt occurs?",
        answer: "Automated alerts trigger immediate containment protocols while our technical team investigates and remediates root causes.",
      },
    ],
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-commerce Development",
    subtitle: "Scalable online stores with frictionless checkout and high conversion rates",
    category: "web",
    badge: "Digital Commerce",
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    icon: "cart",
    description:
      "Build secure and scalable online stores that deliver seamless shopping experiences and help grow your digital business.",
    detailedOverview:
      "In the competitive world of digital commerce, page speed, frictionless checkout, and mobile optimization directly determine your revenue. Loopsquare Tech builds custom, high-converting e-commerce platforms using Shopify, WooCommerce, and modern Headless Commerce architectures (Next.js + Medusa / Stripe). We integrate global payment gateways, automated inventory management, and personalized customer journeys.",
    features: [
      "Custom Storefront UI/UX Designed for High Conversion",
      "Headless E-commerce & Shopify Plus Customization",
      "Seamless Multi-Currency & Multi-Language Payment Gateways (Stripe, PayPal, Apple Pay)",
      "Real-Time Inventory Synchronization & ERP Integration",
      "Optimized 1-Click Checkout & Abandoned Cart Recovery",
      "Advanced Product Filtering, Search & Recommendation Engines",
    ],
    benefits: [
      {
        title: "Higher Conversion Rates",
        description: "Distraction-free checkout flows engineered to maximize completed purchases.",
      },
      {
        title: "Effortless Traffic Spikes",
        description: "Cloud-backed storefronts built to handle flash sales and holiday surges without slowdowns.",
      },
      {
        title: "Omnichannel Selling",
        description: "Sync your inventory across web, Instagram, TikTok Shop, and marketplaces.",
      },
    ],
    deliverables: [
      "Full Custom E-commerce Storefront & Mobile View",
      "Secure Payment Gateway & Fraud Detection Setup",
      "Product Catalog Migration & Variant Management Setup",
      "Shipping Carrier API & Tax Automation Integration",
      "Automated Order Confirmation & Marketing Email Flows",
      "Store Owner Operations & Inventory Management Training",
    ],
    technologies: ["Shopify / Shopify Plus", "WooCommerce", "Next.js Commerce", "Stripe", "Medusa", "Tailwind CSS", "Redis"],
    process: [
      {
        step: "01",
        title: "Store Strategy & Product Mapping",
        description: "Define catalog architecture, payment gateways, shipping rules, tax requirements, and user shopping personas.",
      },
      {
        step: "02",
        title: "Bespoke Storefront Design",
        description: "Create engaging product pages, dynamic filters, visual cart drawers, and frictionless checkout flows.",
      },
      {
        step: "03",
        title: "Integration & Security",
        description: "Connect payment gateways, shipping calculators, CRM, inventory management, and PCI-DSS compliant protocols.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        description: "Execute end-to-end test orders, speed optimization, cart abandonment triggers, and store go-live.",
      },
    ],
    faqs: [
      {
        question: "Should we choose Shopify or a custom Headless store?",
        answer: "We guide you based on your catalog size, customization needs, and growth goals. Shopify is great for rapid go-to-market, while headless offers unmatched speed and customization.",
      },
      {
        question: "Can you migrate our products and customer history from our old store?",
        answer: "Yes, we handle complete data migration including customer accounts, order history, product variants, and SEO redirect mappings.",
      },
    ],
  },
  {
    id: "web-application-development",
    slug: "web-application-development",
    title: "Web Application Development",
    subtitle: "Custom SaaS platforms, client portals, and bespoke business systems",
    category: "web",
    badge: "Custom SaaS & Systems",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    icon: "code",
    description:
      "Develop custom web applications tailored to your business requirements, improving productivity and streamlining operations.",
    detailedOverview:
      "Off-the-shelf software often forces your business into someone else's workflow. Loopsquare Tech engineers bespoke, scalable web applications that solve your specific operational challenges. From full-featured SaaS products and interactive customer portals to internal workflow management systems, our full-stack engineering team uses React, Node.js, Python, and cloud-native databases to build software that scales effortlessly.",
    features: [
      "Full-Stack Web Application Engineering (React, Next.js, Node.js, Python)",
      "Role-Based Access Control (RBAC) & Multi-Tenant Architecture",
      "RESTful & GraphQL Robust API Design & Documentation",
      "Real-Time Data Streaming & WebSocket Event Systems",
      "Scalable SQL & NoSQL Database Schema Architecture",
      "Automated Unit, Integration, and End-to-End Test Coverage",
    ],
    benefits: [
      {
        title: "Tailored to Your Exact Workflow",
        description: "Software that adapts to your unique processes rather than forcing compromises.",
      },
      {
        title: "Enterprise-Grade Scalability",
        description: "Architected to grow from your first hundred users to millions without rewrites.",
      },
      {
        title: "Full Intellectual Property Ownership",
        description: "You own 100% of the custom source code, documentation, and database schemas.",
      },
    ],
    deliverables: [
      "Technical Architecture & Database Schema Specification",
      "Interactive Frontend Application with Responsive Design",
      "Secure Backend API Services & Microservices",
      "Comprehensive API Documentation (Swagger / Postman)",
      "Automated Test Suites (Jest, Playwright, Cypress)",
      "CI/CD Deployment Pipelines with Staging & Production Environments",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "Python / FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    process: [
      {
        step: "01",
        title: "Requirements Engineering",
        description: "Translate complex business logic into user stories, technical specifications, and entity relationship diagrams.",
      },
      {
        step: "02",
        title: "System Architecture & UX",
        description: "Design modular API contracts, database schemas, and interactive Figma UI prototypes.",
      },
      {
        step: "03",
        title: "Agile Sprint Development",
        description: "Two-week agile development cycles with regular demos, code reviews, and automated test integration.",
      },
      {
        step: "04",
        title: "QA, Security & Production Deployment",
        description: "Perform vulnerability audits, load testing, containerized deployment, and ongoing post-launch monitoring.",
      },
    ],
    faqs: [
      {
        question: "Do we own the intellectual property and code?",
        answer: "Yes, 100%. Upon completion, all source code, design assets, and repositories belong entirely to your company.",
      },
      {
        question: "Can you integrate with our existing third-party software and ERP?",
        answer: "Absolutely. We specialize in building custom API integrations with CRMs, ERPs, accounting software, and external services.",
      },
    ],
  },
  {
    id: "website-maintenance-support",
    slug: "website-maintenance-support",
    title: "Website Maintenance & Support",
    subtitle: "Proactive security, uptime monitoring, and continuous technical updates",
    category: "web",
    badge: "Continuous Care",
    gradient: "from-cyan-600 via-blue-600 to-indigo-700",
    icon: "tool",
    description:
      "Keep your website secure, updated, and running smoothly with regular maintenance, performance monitoring, and technical support.",
    detailedOverview:
      "Launching your website is only the beginning. Without proactive maintenance, websites suffer from outdated packages, security vulnerabilities, broken links, and creeping performance degradation. Loopsquare Tech provides comprehensive maintenance plans that keep your digital assets patched, blazing fast, safely backed up, and continuously updated with new features and content.",
    features: [
      "24/7 Automated Uptime & Real-User Performance Monitoring",
      "Routine Core, CMS, Plugin, and Dependency Security Patching",
      "Daily Automated Off-Site Encrypted Backups with 1-Click Restore",
      "Continuous Malware Scanning & Firewall Protection",
      "Monthly Core Web Vitals & Speed Optimization Audits",
      "Dedicated Developer Hours for Content & Feature Updates",
    ],
    benefits: [
      {
        title: "Zero Downtime Surprises",
        description: "Immediate automated alerts notify our on-call engineers before visitors notice an issue.",
      },
      {
        title: "Protected Against Cyber Threats",
        description: "Frequent security updates and scans safeguard customer data and reputation.",
      },
      {
        title: "Always Modern & Fast",
        description: "Ongoing tune-ups ensure your site maintains top search rankings and fast load times.",
      },
    ],
    deliverables: [
      "Monthly Maintenance & Security Health Report",
      "Automated Off-Site Backup Schedule (Daily/Weekly)",
      "Priority SLA Support Channel (Slack / Email / Ticket)",
      "Continuous SSL Certificate & Domain Renewal Monitoring",
      "On-Demand Bug Fixes & Content Uploads",
      "Quarterly Strategy & Feature Enhancement Consultation",
    ],
    technologies: ["Cloudflare", "UptimeRobot", "Datadog", "GitHub Actions", "WP Engine / Vercel", "Sentry", "Lighthouse"],
    process: [
      {
        step: "01",
        title: "Initial Health Audit",
        description: "We review your existing codebase, hosting configuration, security certificates, and performance bottlenecks.",
      },
      {
        step: "02",
        title: "Monitoring & Backup Setup",
        description: "Deploy automated uptime monitoring probes, error reporting trackers (Sentry), and encrypted backup schedules.",
      },
      {
        step: "03",
        title: "Routine Scheduled Updates",
        description: "Test and apply updates in a staging sandbox before rolling out safely to production.",
      },
      {
        step: "04",
        title: "Monthly Reporting & Evolution",
        description: "Receive transparent reports highlighting uptime stats, security checks, and continuous feature recommendations.",
      },
    ],
    faqs: [
      {
        question: "Can you maintain a website that wasn't originally built by Loopsquare Tech?",
        answer: "Yes! We begin with an onboarding code audit to review the architecture, resolve any immediate issues, and establish our maintenance schedule.",
      },
      {
        question: "What is your emergency response time for critical issues?",
        answer: "Under our priority support plans, critical downtime or security incidents receive an immediate response within 15 to 30 minutes.",
      },
    ],
  },
];

