export type ProjectCategory = "All" | "Web" | "Mobile" | "AI & Systems";

export interface ProfileData {
  fullName: string;
  brandTag: string;
  wordmark: string;
  title: string;
  headline: string;
  location: string;
  availability: string;
  heroSummary: string;
  profileImage: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
  coreSkills: string[];
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  philosophyPoints: {
    title: string;
    description: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | "Layers"
    | "Smartphone"
    | "Building2"
    | "ServerCog"
    | "Database"
    | "ShieldCheck";
  tags: string[];
  span: string;
  accent: "cyan" | "sky" | "teal";
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  categories: Exclude<ProjectCategory, "All">[];
  primaryCategory: Exclude<ProjectCategory, "All">;
  summary: string;
  architecture: string;
  impact: string;
  highlights: string[];
  stack: string[];
  badge: string;
  accentGradient: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: "MonitorSmartphone" | "Server" | "DatabaseZap" | "ShieldAlert";
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: "Current" | "Completed";
  focus: string;
  highlights: string[];
}

export const PROFILE: ProfileData = {
  fullName: "Sabeesan Gnanavel",
  brandTag: "Sabeesan.G",
  wordmark: "SABEESAN",
  title: "Full-Stack Software Engineer | BSc (Hons) Software Engineering Undergraduate",
  headline:
    "Full-Stack Software Engineer | React, Next.js, Django, Node.js & Kotlin | Building Scalable Web & Mobile Applications | Cybersecurity Enthusiast",
  location: "Jaffna, Northern Province, Sri Lanka",
  availability: "Available for Hybrid & Remote opportunities globally",
  heroSummary:
    "Full-Stack Software Engineer and BSc (Hons) Software Engineering undergraduate specializing in designing, building, and deploying scalable web, mobile, and enterprise applications. Serving as a Lead Developer across commercial and independent software initiatives, I turn complex operational problems into clean, reliable, and secure software products.",
  profileImage: "/src/profile-studio.jpg",
  email: "sabeesan.gnanavel@gmail.com",
  socials: {
    github: "https://github.com/sabeesan",
    linkedin: "https://www.linkedin.com/in/sabeesan-gnanavel",
  },
  coreSkills: [
    "Full-Stack Development",
    "Next.js",
    "Django",
    "Kotlin",
    "PostgreSQL",
  ],
  metrics: [
    {
      label: "Production Systems",
      value: "7+",
      detail: "End-to-end web, mobile & enterprise platforms shipped",
    },
    {
      label: "Full-Stack Web & Mobile",
      value: "100%",
      detail: "Next.js, Django, Node.js, Kotlin & PostgreSQL delivery",
    },
    {
      label: "End-to-End Cloud & DevOps",
      value: "99.9%",
      detail: "Linux VPS, Nginx, Gunicorn, Docker & Play Console releases",
    },
    {
      label: "Security By Design",
      value: "24/7",
      detail: "Hardened APIs, JWT/RBAC, & least-privilege architecture",
    },
  ],
  philosophyPoints: [
    {
      title: "Systems Architecture",
      description:
        "Every system starts with clear domain modeling, normalized relational or document schemas, and clean API contracts so features scale without brittle rewrites.",
    },
    {
      title: "Security-By-Design",
      description:
        "From JWT/session hardening and input validation to least-privilege Linux VPS and Nginx reverse-proxy configurations, security is built into every layer.",
    },
    {
      title: "Full-Lifecycle Ownership",
      description:
        "Software only creates value when it runs reliably in the real world—from architecture and UI craft to Linux VPS deployment, Play Store releases, and automated webhooks.",
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "fullstack-web",
    title: "Full-Stack Web Development",
    description:
      "Scalable web applications built with Next.js, React, TypeScript, Django, and Node.js—engineered for speed, SEO, and maintainable growth.",
    iconName: "Layers",
    tags: ["Next.js", "React", "TypeScript", "Django", "Node.js"],
    span: "md:col-span-2",
    accent: "cyan",
  },
  {
    id: "mobile-dev",
    title: "Mobile Application Development",
    description:
      "Native Android applications built with Kotlin and modern Material/UI architecture, packaged as signed AAB releases for Google Play.",
    iconName: "Smartphone",
    tags: ["Kotlin", "Native Android", "Material UI", "Play Console"],
    span: "md:col-span-1",
    accent: "sky",
  },
  {
    id: "enterprise-saas",
    title: "Custom Enterprise & SaaS Systems",
    description:
      "End-to-end POS, billing, inventory management, and workflow automation platforms tailored to high-throughput business operations.",
    iconName: "Building2",
    tags: ["POS & Billing", "Inventory", "ESC/POS", "Automation"],
    span: "md:col-span-1",
    accent: "teal",
  },
  {
    id: "cloud-devops",
    title: "Cloud, VPS & DevOps Deployment",
    description:
      "Production Linux VPS setups, Nginx reverse proxies, Gunicorn workers, Docker containers, and automated CI/CD pipelines with zero-downtime focus.",
    iconName: "ServerCog",
    tags: ["Linux VPS", "Nginx", "Gunicorn", "Docker", "CI/CD"],
    span: "md:col-span-2",
    accent: "cyan",
  },
  {
    id: "database-api",
    title: "Database Architecture & API Design",
    description:
      "High-performance PostgreSQL, MongoDB, and MySQL schemas paired with secure, well-documented RESTful APIs and webhook integrations.",
    iconName: "Database",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "DRF", "REST APIs"],
    span: "md:col-span-1",
    accent: "sky",
  },
  {
    id: "security-uiux",
    title: "Application Security & UI/UX Engineering",
    description:
      "Security-by-design practices and API hardening paired with clean, responsive, dark-mode interfaces crafted with Tailwind CSS and Framer Motion.",
    iconName: "ShieldCheck",
    tags: ["App Security", "API Hardening", "Tailwind CSS", "Framer Motion"],
    span: "md:col-span-2",
    accent: "teal",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "salesphere-pos",
    title: "SaleSphere POS & Billing System",
    subtitle: "Multi-Terminal Retail Point-of-Sale & Inventory Platform",
    categories: ["Web", "AI & Systems"],
    primaryCategory: "Web",
    badge: "Enterprise POS",
    summary:
      "Multi-terminal retail Point-of-Sale and inventory management platform engineered with Django, PostgreSQL, and React, deployed on a Linux VPS (Nginx/Gunicorn) with custom ESC/POS desktop and Bluetooth thermal receipt printing.",
    architecture:
      "Decoupled React frontend communicating with a Django & PostgreSQL transactional core behind Nginx and Gunicorn on a hardened Linux VPS. Integrated custom ESC/POS command drivers for both USB/desktop and Bluetooth thermal receipt printers.",
    impact:
      "Streamlined multi-counter checkout, real-time stock reconciliation, and instant thermal receipt generation across concurrent retail terminals.",
    highlights: [
      "Multi-terminal real-time inventory synchronization with PostgreSQL ACID transactions",
      "Custom ESC/POS desktop & Bluetooth thermal receipt printing pipeline",
      "Production Linux VPS deployment orchestrated with Nginx & Gunicorn",
      "Role-based terminal access, audit trails, and daily sales reconciliation",
    ],
    stack: ["Django", "PostgreSQL", "React", "Nginx", "Gunicorn", "Linux VPS", "ESC/POS"],
    accentGradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "naviora-android",
    title: "Naviora (Native Android App)",
    subtitle: "Production Native Android Application on Google Play",
    categories: ["Mobile"],
    primaryCategory: "Mobile",
    badge: "Google Play",
    summary:
      "Production native Android application built in Kotlin (`com.appzmakers.naviora`) and published to the Google Play Console with signed AAB releases and clean mobile UX.",
    architecture:
      "Structured native Kotlin architecture following modern Material design principles, lifecycle-aware state management, and release-hardened Android App Bundle (AAB) signing.",
    impact:
      "Delivered a responsive, Play Store-compliant native Android experience with streamlined release packaging and consistent mobile performance.",
    highlights: [
      "Built natively in Kotlin (`com.appzmakers.naviora`) with modern Material UI",
      "Signed Android App Bundle (AAB) pipeline published via Google Play Console",
      "Optimized view rendering and smooth navigation transitions",
      "Clean separation of UI, state, and device capabilities",
    ],
    stack: ["Kotlin", "Native Android", "Material Design", "Google Play Console", "AAB"],
    accentGradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "virtual-saree-draping",
    title: "Virtual Saree Draping & Blouse Fitting System",
    subtitle: "AI-Powered Computer Vision Virtual Try-On Platform",
    categories: ["AI & Systems", "Web"],
    primaryCategory: "AI & Systems",
    badge: "AI & Computer Vision",
    summary:
      "AI-powered virtual try-on platform combining Django REST Framework, OpenCV, MediaPipe, and PyTorch with an interactive React, Vite, and Fabric.js canvas.",
    architecture:
      "Python inference backend powered by MediaPipe pose/landmark detection, OpenCV image warping, and PyTorch segmentation exposed via Django REST Framework to a responsive React + Vite + Fabric.js interactive canvas.",
    impact:
      "Enabled real-time body-landmark alignment, dynamic garment draping, and interactive fine-tuning directly in the browser.",
    highlights: [
      "MediaPipe & OpenCV landmark extraction for accurate garment alignment",
      "PyTorch-backed segmentation and perspective fitting via Django REST Framework",
      "Interactive React, Vite & Fabric.js canvas for live draping adjustments",
      "Low-latency API pipeline bridging computer vision and browser rendering",
    ],
    stack: ["Django REST Framework", "PyTorch", "OpenCV", "MediaPipe", "React", "Vite", "Fabric.js"],
    accentGradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "enterprise-construction-web",
    title: "Enterprise Construction Management Web Platform",
    subtitle: "High-Performance Corporate & Project Showcase Platform",
    categories: ["Web"],
    primaryCategory: "Web",
    badge: "Next.js RSC",
    summary:
      "High-performance corporate web platform built with Next.js, React Server Components, TypeScript, Tailwind CSS, and Shadcn UI, featuring WebP media optimization and dynamic SEO sitemaps.",
    architecture:
      "Next.js App Router leveraging React Server Components for minimal client JavaScript, strict TypeScript domain models, Shadcn UI primitives, automated WebP asset optimization, and dynamic XML sitemap generation.",
    impact:
      "Achieved rapid page loads, strong search engine indexability, and a refined dark-mode architectural presentation.",
    highlights: [
      "React Server Components & TypeScript for fast, type-safe rendering",
      "WebP media optimization pipeline for high-resolution project galleries",
      "Dynamic SEO metadata and automated sitemap generation",
      "Accessible, responsive component system built with Tailwind CSS & Shadcn UI",
    ],
    stack: ["Next.js", "React Server Components", "TypeScript", "Tailwind CSS", "Shadcn UI", "SEO"],
    accentGradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "whatsapp-automation-bot",
    title: "WhatsApp Business Automation Bot",
    subtitle: "Event-Driven Customer Engagement & Webhook Engine",
    categories: ["AI & Systems"],
    primaryCategory: "AI & Systems",
    badge: "Webhook Engine",
    summary:
      "Automated customer engagement and webhook processing engine built with Node.js, Express, and the Meta WhatsApp Business API.",
    architecture:
      "Event-driven Node.js and Express service verifying signed Meta webhook payloads, routing conversational state machines, and dispatching automated template and interactive responses.",
    impact:
      "Automated repetitive customer inquiries with reliable webhook verification and low-latency message orchestration.",
    highlights: [
      "Meta WhatsApp Business Cloud API integration with signature verification",
      "Express webhook ingestion with structured conversational state routing",
      "Automated interactive replies, notifications, and error recovery",
      "Modular handler architecture ready for CRM and order-status hooks",
    ],
    stack: ["Node.js", "Express", "Meta WhatsApp Business API", "Webhooks", "REST APIs"],
    accentGradient: "from-teal-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "eldoria-dragons-heart",
    title: "Eldoria: The Dragon's Heart",
    subtitle: "Full-Stack Educational Number-Recognition Game",
    categories: ["Web", "AI & Systems"],
    primaryCategory: "Web",
    badge: "Full-Stack Game",
    summary:
      "Full-stack educational number-recognition game featuring JWT authentication, RESTful services, and dual database persistence (React, Vite, Node.js, Express, MongoDB, SQLite).",
    architecture:
      "Interactive React + Vite game client backed by a Node.js & Express REST API with stateless JWT authentication and dual persistence across MongoDB and SQLite.",
    impact:
      "Combined engaging game mechanics with secure player progression tracking and resilient hybrid data storage.",
    highlights: [
      "JWT-secured player authentication and session management",
      "Dual database persistence strategy combining MongoDB and SQLite",
      "RESTful Node.js & Express backend powering progression and scoring",
      "Fast, interactive React + Vite gameplay loop",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "SQLite", "JWT"],
    accentGradient: "from-sky-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "renttent-medicare-plus",
    title: "RentTent & Medicare Plus",
    subtitle: "Dual Full-Stack Rental & Hospital Management Systems",
    categories: ["Web", "AI & Systems"],
    primaryCategory: "Web",
    badge: "Full-Stack Suite",
    summary:
      "Full-stack MERN equipment rental platform and Java/MySQL hospital management system engineered for end-to-end operational workflows.",
    architecture:
      "RentTent built on the MERN stack (MongoDB, Express, React, Node.js) for booking and inventory tracking; Medicare Plus engineered in OOP Java with a normalized MySQL relational schema for patient, appointment, and clinical records.",
    impact:
      "Demonstrated versatility across both modern JavaScript document-store web apps and strongly-typed Java relational enterprise systems.",
    highlights: [
      "RentTent: MERN-stack booking engine, catalog filtering, and rental lifecycle",
      "Medicare Plus: Java OOP architecture backed by normalized MySQL schemas",
      "Clean CRUD workflows, validation, and role-oriented operational views",
      "End-to-end data integrity across both NoSQL and RDBMS paradigms",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Java", "MySQL"],
    accentGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile",
    subtitle: "Interactive web interfaces & native Android experiences",
    iconName: "MonitorSmartphone",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Kotlin (Native Android)",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
  },
  {
    id: "backend-apis",
    title: "Backend & APIs",
    subtitle: "Resilient server architectures & event-driven services",
    iconName: "Server",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express",
      "NestJS",
      "RESTful APIs",
      "Webhooks",
    ],
  },
  {
    id: "databases-devops",
    title: "Databases & DevOps",
    subtitle: "High-integrity data stores & Linux production infrastructure",
    iconName: "DatabaseZap",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Linux VPS",
      "Nginx",
      "Gunicorn",
      "Docker",
      "Git",
    ],
  },
  {
    id: "security-focus",
    title: "Security & Focus Areas",
    subtitle: "Hardened systems & architectural engineering",
    iconName: "ShieldAlert",
    skills: [
      "Application Security",
      "API Security",
      "DevOps Automation",
      "System Architecture",
    ],
  },
];

export const MARQUEE_ROW_1 = [
  "Next.js",
  "React",
  "TypeScript",
  "Django",
  "Django REST Framework",
  "Kotlin",
  "PostgreSQL",
  "Node.js",
  "NestJS",
  "Tailwind CSS",
  "Framer Motion",
];

export const MARQUEE_ROW_2 = [
  "Docker",
  "Linux VPS",
  "Nginx",
  "Gunicorn",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Express",
  "Shadcn UI",
  "Application Security",
  "RESTful APIs",
];

export const EDUCATION: EducationItem[] = [
  {
    id: "bedfordshire",
    institution: "University of Bedfordshire (via SLIIT Northern Uni)",
    degree: "BSc (Hons) in Computer Software Engineering",
    period: "Jan 2026 – Mar 2027",
    status: "Current",
    focus:
      "Software architecture, distributed systems, agile engineering, cloud/DevOps, and game development mechanics.",
    highlights: [
      "Software Architecture & Distributed Systems",
      "Agile Engineering & Cloud / DevOps",
      "Game Development Mechanics",
    ],
  },
  {
    id: "sliit-city-uni",
    institution: "SLIIT City UNI",
    degree: "Higher Diploma in Information Technology (HDIT)",
    period: "Mar 2024 – Dec 2025",
    status: "Completed",
    focus:
      "Full-stack web development, OOP (Java), data structures, relational/NoSQL databases, and networking.",
    highlights: [
      "Full-Stack Web Development & OOP (Java)",
      "Data Structures & Algorithms",
      "Relational / NoSQL Databases & Networking",
    ],
  },
  {
    id: "jaffna-hindu-college",
    institution: "Jaffna Hindu College",
    degree: "High School Diploma, Mathematics",
    period: "Jan 2020 – Dec 2022",
    status: "Completed",
    focus:
      "Strong analytical and mathematical foundation supporting algorithmic problem-solving and software engineering.",
    highlights: ["Mathematics Stream", "Analytical Problem Solving"],
  },
];

