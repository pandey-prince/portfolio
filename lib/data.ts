export type CaseStudy = {
  problem: string;
  built: string;
  result: string;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    name: "JobLeLo",
    category: "Full-stack · Recruitment",
    description:
      "A job aggregation platform with JWT cookie auth, email OTP, Google Sign-In, scraping pipelines across 100+ company career pages, and a Gemini-powered JobMate AI assistant for resume/job match scoring.",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Docker", "Gemini AI"],
    github: "https://github.com/pandey-prince/JobVista",
    demo: "https://job-vista-eta.vercel.app",
    caseStudy: {
      problem:
        "Job boards serve two very different users — candidates and recruiters — and most side-project clones ignore that, mixing everyone into one flow with no real access control or live listings.",
      built:
        "A full-stack platform aggregating 600+ IT listings from 100+ career pages (Greenhouse, Lever, Workday), with JWT cookie auth, OTP + Google Sign-In, scraping pipelines via GitHub Actions, and a Gemini JobMate assistant.",
      result:
        "A production-grade multi-role product with saved jobs, watchlists, alerts, and an admin dashboard monitoring 150+ sources — the auth and data pipeline pattern that maps onto real marketplaces.",
    },
  },
  {
    name: "Pixora",
    category: "Full-stack · Photo management",
    description:
      "A private encrypted photo gallery with Clerk authentication, browser-side AES-256-GCM encryption, Argon2id key derivation, Cloudinary uploads, and transactional PostgreSQL writes via Prisma.",
    tags: ["React", "TypeScript", "Bun", "Express", "PostgreSQL", "Prisma", "Clerk", "Cloudinary"],
    github: "https://github.com/pandey-prince/Pixora",
    demo: "https://pixora-photogallery.vercel.app",
    caseStudy: {
      problem:
        "People want a private place for personal photos — not a public feed. Most gallery apps either expose your media or make bulk uploading and browsing large libraries painfully slow.",
      built:
        "A zero-knowledge style gallery: Clerk handles auth, photos are encrypted in the browser before upload, Cloudinary stores ciphertext, and Prisma keeps PostgreSQL in sync through transactional writes.",
      result:
        "A production-deployed app where photos stay unreadable without the user’s secret — the same auth + media + database pattern most client products need.",
    },
  },
  {
    name: "Private Chat",
    category: "Full-stack · Realtime",
    description:
      "Real-time chat with ephemeral and persistent rooms, anonymous identities, SSE delivery, Redis rate limiting, and type-safe APIs on Elysia over PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Elysia", "Redis", "SSE", "Prisma", "PostgreSQL"],
    github: "https://github.com/pandey-prince/realtime_chat",
    demo: "https://secure-safechat.vercel.app",
  },
  {
    name: "Trimly",
    category: "Full-stack · Analytics",
    description:
      "A URL shortener with link management and click analytics built on Next.js and Prisma over a PostgreSQL database.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/pandey-prince/trimly",
    demo: "https://trimly-4kw9.vercel.app",
  },
  {
    name: "LumoAI",
    category: "Full-stack · AI assistant",
    description:
      "A ChatGPT-style assistant powered by Google Gemini 2.5 Flash with persistent multi-turn chat threads stored in MongoDB, served through a clean Node.js and Express REST API.",
    tags: ["React", "Node.js", "Express", "Google Gemini", "MongoDB"],
    github: "https://github.com/pandey-prince/LumoAI",
    demo: "https://lumo-ai-xi.vercel.app",
  },
];

export type Experience = {
  period: string;
  location: string;
  company: string;
  role: string;
  logo: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    period: "July 2025 — August 2025",
    location: "Lucknow, India",
    company: "Softflew Technologies",
    role: "Software Development Intern",
    logo: "SF",
    points: [
      "Engineered frontend features for a production MERN application over a 45-day internship, enhancing 10+ pages.",
      "Resolved 12 critical UI bugs and implemented UI enhancements across assigned modules.",
      "Integrated REST APIs into React components to fetch, render, and update application data.",
      "Collaborated using Git workflows including branching, pull requests, and code reviews.",
    ],
  },
];

export type SkillIcon = { icon: string; name: string };

export const skillIcons: SkillIcon[] = [
  { icon: "react", name: "React" },
  { icon: "nextjs", name: "Next.js" },
  { icon: "typescript", name: "TypeScript" },
  { icon: "javascript", name: "JavaScript" },
  { icon: "nodejs", name: "Node.js" },
  { icon: "express", name: "Express" },
  { icon: "mongodb", name: "MongoDB" },
  { icon: "postgres", name: "PostgreSQL" },
  { icon: "prisma", name: "Prisma" },
  { icon: "redux", name: "Redux" },
  { icon: "tailwind", name: "Tailwind CSS" },
  { icon: "java", name: "Java" },
  { icon: "python", name: "Python" },
  { icon: "docker", name: "Docker" },
  { icon: "git", name: "Git" },
  { icon: "github", name: "GitHub" },
  { icon: "vercel", name: "Vercel" },
  { icon: "postman", name: "Postman" },
  { icon: "aws", name: "AWS" },
  { icon: "bun", name: "Bun" },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["Java", "JavaScript", "TypeScript", "SQL"] },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Bun", "Elysia", "REST APIs", "JWT", "OTP"],
  },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"] },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub Actions", "Docker", "Vercel", "Render"],
  },
];

export type Achievement = {
  icon: string;
  date: string;
  name: string;
  location: string;
  description: string;
  badge: string;
  badgeVariant: "fill" | "out" | "mute";
};

export const achievements: Achievement[] = [
  {
    icon: "⚡",
    date: "Ongoing",
    name: "375+ DSA & Competitive Programming",
    location: "LeetCode · Codeforces",
    description:
      "Solved 375+ DSA and competitive programming problems across LeetCode and Codeforces — building a strong pattern-first foundation for interviews and real systems work.",
    badge: "375+",
    badgeVariant: "fill",
  },
  {
    icon: "🛰️",
    date: "2025",
    name: "Job aggregation at production scale",
    location: "JobLeLo",
    description:
      "Built a production-grade job aggregation system indexing opportunities from 100+ company career pages, with scraping pipelines, auth, and AI-assisted matching.",
    badge: "Shipped",
    badgeVariant: "out",
  },
  {
    icon: "🔒",
    date: "2025",
    name: "End-to-end encrypted cloud photo storage",
    location: "Pixora",
    description:
      "Implemented zero-knowledge style photo storage where uploaded images remain unreadable to the server — AES-256-GCM in the browser with Argon2id key derivation.",
    badge: "Security",
    badgeVariant: "mute",
  },
];

export type Stat = {
  to: number;
  suffix?: string;
  label: string;
};

export const aboutStats: Stat[] = [
  { to: 5, suffix: "+", label: "Projects Shipped" },
  { to: 375, suffix: "+", label: "DSA Problems" },
  { to: 1, label: "Internships" },
  { to: 2026, label: "Grad Year" },
];

export const aboutChips = [
  "🎓 B.Tech CSE",
  "📍 Lucknow",
  "⚡ Full-Stack",
  "🧩 DSA 375+",
  "💼 Open to work",
];
