export interface Milestone {
  year: string;
  tag: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  capabilities: string[];
  linkText: string;
  linkHref: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export const TIMELINE_DATA: Milestone[] = [
  {
    year: "2021",
    tag: "GENESIS",
    title: "The Kokrajhar Seed",
    description:
      "An experimental hardware hacking workshop established in Kokrajhar, exploring indigenous telemetry hardware & rapid prototyping.",
  },
  {
    year: "2023",
    tag: "EXPANSION",
    title: "Hardware Foundry",
    description:
      "Commissioning of precision CNC machining and SLA rapid 3D tooling facilities. Delivery of first commercial IoT platforms.",
  },
  {
    year: "2024",
    tag: "SCALE",
    title: "Cloud Mesh Runtime",
    description:
      "Formal release of unified cloud telemetry and enterprise SaaS framework. Expansion to serve pan-India and international clients.",
  },
  {
    year: "2025+",
    tag: "FRONTIER",
    title: "Quantum R&D Node",
    description:
      "Launching spatial computing integration labs, parametric design suites, and autonomous edge device manufacturing.",
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Barunmoy Basumatary",
    role: "FOUNDER & PRINCIPAL ARCHITECT",
    bio: "Directs overall hybrid architecture, custom CNC chassis fabrication, and high-reliability embedded firmware. Veteran hardware engineer pioneering northeastern deep tech.",
    image: "/images/about/team-barunmoy.jpg",
    location: "Kokrajhar Enclave",
  },
  {
    name: "Anushka Datta",
    role: "VP OF SOFTWARE SYSTEMS",
    bio: "Principal Systems Architect specializing in zero-trust distributed architectures, event-driven telemetry engines, and enterprise cloud runtimes.",
    image: "/images/about/team-anushka.jpg",
    location: "Kokrajhar Cloud Node",
  },
  {
    name: "Himangshu Brahma",
    role: "HEAD OF INDUSTRIAL DESIGN",
    bio: "Lead Industrial Designer and 3D parametric engineer, bridging ergonomic form factors with high-spec aerospace-grade manufacturing.",
    image: "/images/about/team-himangshu.jpg",
    location: "Kokrajhar Foundry",
  },
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "3d-spatial",
    title: "3D Modelling & Spatial Engineering",
    category: "Physical & Spatial",
    tag: "ENGINEERING TIER: SPATIAL",
    image: "/images/3d-modeling/turbine-digital-twin.jpg",
    description:
      "High-precision CAD/CAM development, industrial product visualization, and interactive WebGL/spatial runtime experiences for mission-critical hardware.",
    capabilities: [
      "3D CAD & STEP Prototyping",
      "Photorealistic 4K Renders",
      "WebGL & Spatial Web Integration",
      "Reverse Engineering & 3D Scanning",
      "FEA Stress Analysis Simulation",
      "Rapid SLA / FDM Print Slicing",
    ],
    linkText: "EXPLORE 3D SPECS",
    linkHref: "/contact?scope=3d-spatial",
  },
  {
    id: "saas-erp",
    title: "Enterprise SaaS & ERP Systems",
    category: "Cloud & Distributed",
    tag: "ENGINEERING TIER: ENTERPRISE",
    image: "/images/saas/enterprise-erp-dashboard.jpg",
    description:
      "High-concurrency cloud software, enterprise resource planning suites, automated billing engines, and real-time telemetry dashboards.",
    capabilities: [
      "Custom ERP & CRM Development",
      "High-Volume Payment Gateways",
      "Real-Time Telemetry Dashboards",
      "Microservices & Edge Cloud Deployments",
      "Zero-Downtime Migration Protocols",
      "Continuous Audit & Security Hardening",
    ],
    linkText: "EXPLORE SAAS ARCHITECTURE",
    linkHref: "/contact?scope=saas-erp",
  },
];

export const WHY_CHOOSE_ANE = [
  {
    num: "01",
    title: "Single Unified Contract",
    tag: "ZERO SILO",
    description:
      "No finger-pointing between your 3D agency and software engineering firm. One contract, one architectural vision.",
  },
  {
    num: "02",
    title: "Zero-Lag Native Sync",
    tag: "SYNC MESH",
    description:
      "CAD digital twins integrate natively with enterprise APIs and IoT sensor streams with zero latency overhead.",
  },
  {
    num: "03",
    title: "Rapid Time-to-Market",
    tag: "AGILE SPEED",
    description:
      "Accelerated agile sprints powered by Kokrajhar hardware foundry and instant cloud deployment pipelines.",
  },
  {
    num: "04",
    title: "Complete IP Sovereignty",
    tag: "100% OWNERSHIP",
    description:
      "All custom source code, STEP CAD files, PCB schematics, and model weights transferred 100% to client ownership upon delivery.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "ANE delivered our industrial telemetry platform and physical enclosures 3 weeks ahead of schedule. The craftsmanship is flawless.",
    author: "Elena Rostova",
    title: "Chief Technology Officer",
    company: "NexaGrid Systems",
  },
  {
    quote:
      "The photorealistic 3D digital twins developed by ANE transformed our client pitch deck and landed us $4M in Series A funding.",
    author: "Marcus Vance",
    title: "VP of Product",
    company: "AeroSpace Spatial",
  },
  {
    quote:
      "Operating an ERP built by ANE has cut our multi-warehouse reconciliation latency from 48 hours to real-time. Uncanny execution.",
    author: "Sunita Roy",
    title: "Director of Digital Innovation",
    company: "Kuber Logistics",
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "How does ANE Labs integrate physical fabrication with software?",
    answer:
      "Unlike traditional outsourced pipelines where hardware fabricators and software developers work in isolation, ANE Labs embeds RTOS firmware, edge drivers, and spatial CAD specifications within the same sprint cycle in our Kokrajhar facility. Physical tolerances and software state machines are co-verified continuously.",
  },
  {
    question: "What is the typical turnaround from brief to prototype?",
    answer:
      "Initial feasibility models and parametric CAD digital twins are generated within 5-7 business days. Fully functional CNC milled 7075 aluminum enclosures with integrated PCB assemblies typically ship within 3-4 weeks for production MVP tiers.",
  },
  {
    question: "Who retains Intellectual Property (IP) rights?",
    answer:
      "You retain 100% of the Intellectual Property. Prior to initial architectural scoping, we execute a bilateral Mutual Non-Disclosure Agreement (M-NDA). Upon milestone completion and settlement, all STEP 3D CAD files, Altium PCB schematics, Git repositories, and firmware binaries are transferred irrevocably to your custody.",
  },
  {
    question: "Can ANE assist with post-launch scaling and mass manufacturing?",
    answer:
      "Yes. While Kokrajhar handles precision low-to-mid volume pilot runs (up to 5,000 units/year), our industrial design team prepares full DFM (Design for Manufacturing) tooling specs, injection molding guides, and factory calibration firmware for tier-1 mass manufacturing partners worldwide.",
  },
];

export const NETWORK_NODES = [
  {
    node: "3d.ane.service",
    tag: "SPATIAL",
    desc: "Spatial synthesis & parametric models",
    href: "/services",
  },
  {
    node: "saas.ane.service",
    tag: "SYSTEMS",
    desc: "Cloud compute orchestrators & web suites",
    href: "/services",
  },
  {
    node: "labs.ane.service",
    tag: "RESEARCH",
    desc: "Deep-tech prototyping & experimental R&D",
    href: "/about",
  },
];
