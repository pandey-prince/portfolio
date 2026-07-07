import type { LucideIcon } from "lucide-react";

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
    name: "Pixora",
    category: "Full-stack · Photo management",
    description:
      "A private photo gallery with Clerk authentication, protected routes, batch Cloudinary uploads, pagination, infinite scrolling, signature-verified webhooks, and transactional PostgreSQL writes via Prisma.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Cloudinary"],
    github: "https://github.com/pandey-prince/Pixora",
    demo: "https://pixora-photogallery.vercel.app",
    caseStudy: {
      problem:
        "People want a private place for personal photos — not a public feed. Most gallery apps either expose your media or make bulk uploading and browsing large libraries painfully slow.",
      built:
        "A private, account-scoped gallery: Clerk handles authentication and protected routes, batch uploads go straight to Cloudinary, and signature-verified webhooks keep PostgreSQL in sync through transactional Prisma writes. Pagination and infinite scrolling keep large libraries fast.",
      result:
        "A production-deployed app where every photo is private to its owner, uploads are reliable even in batches, and browsing stays smooth at scale — the same auth + media + database pattern most client products need.",
    },
  },
  {
    name: "JobVista",
    category: "Full-stack · Recruitment",
    description:
      "A job platform with separate student and recruiter workflows, JWT authentication, role-protected APIs, live external job feeds, and a Gemini-powered \"JobMate\" AI assistant.",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/pandey-prince/JobVista",
    demo: "https://job-vista-eta.vercel.app",
    caseStudy: {
      problem:
        "Job boards serve two very different users — candidates and recruiters — and most side-project clones ignore that, mixing everyone into one flow with no real access control.",
      built:
        "A two-sided platform with separate student and recruiter workflows: JWT authentication, role-protected APIs, company and job management for recruiters, applications for students, live external job feeds, and a Gemini-powered \"JobMate\" assistant for candidates.",
      result:
        "A complete multi-role product — the auth, dashboards, and role-based access pattern that maps directly onto marketplaces, admin panels, and any app with more than one type of user.",
    },
  },
  {
    name: "Trimly",
    category: "Full-stack · Analytics",
    description:
      "A URL shortener with link management and click analytics built on Next.js and Prisma over a PostgreSQL database.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/pandey-prince/trimly",
    demo: "https://trimly-4kw9.vercel.app",
    caseStudy: {
      problem:
        "Sharing long links is ugly, and free shorteners give you no ownership of your links or visibility into who is clicking them.",
      built:
        "A URL shortener on Next.js and PostgreSQL via Prisma: instant short links, a management dashboard, and per-link click analytics so every redirect is tracked and owned by its creator.",
      result:
        "A fast, deployed tool with real usage analytics — proof of shipping data-driven features end to end, from schema design to dashboard UI.",
    },
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
  {
    name: "Private Chat",
    category: "Full-stack · Realtime",
    description:
      "Real-time, private chat rooms with anonymous identities and self-destructing messages using Upstash Redis and Upstash Realtime, with room capacity limits and instant delivery.",
    tags: ["Next.js", "TypeScript", "Upstash Redis", "Upstash Realtime"],
    github: "https://github.com/pandey-prince/realtime_chat",
    demo: "https://secure-safechat.vercel.app",
  },
];

export type Experience = {
  period: string;
  location: string;
  company: string;
  role: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    period: "Aug 2025 — Sep 2025",
    location: "Lucknow, India",
    company: "Softflew Technologies",
    role: "Full-Stack Web Developer Intern",
    points: [
      "Built responsive, reusable React.js interfaces and integrated them with Node.js/Express REST APIs backed by MongoDB.",
      "Implemented CRUD workflows and end-to-end frontend-backend integration, handling data operations, debugging, and performance optimization.",
      "Used Git and GitHub for version control and collaborative code reviews, and supported deployment of features to production.",
    ],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Java", "Python", "C", "SQL"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Vite"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "Clerk", "Zod", "Bun"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Postman"] },
];

export type Post = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  url?: string;
  draft?: boolean;
};

// Placeholder writing — swap these for real posts when you publish them.
export const posts: Post[] = [
  {
    title: "How I ship full-stack side projects fast",
    date: "Coming soon",
    excerpt:
      "My workflow for going from idea to deployed product with the MERN stack, TypeScript, and Prisma — auth, data modeling, and the deploy checklist I reuse every time.",
    tags: ["fullstack", "workflow", "mern"],
    draft: true,
  },
  {
    title: "Cracking 220+ LeetCode problems: my DSA routine",
    date: "Coming soon",
    excerpt:
      "The pattern-first approach I used to build a strong DSA foundation, how I schedule practice, and the topics that gave the biggest return during interviews.",
    tags: ["dsa", "interviews", "leetcode"],
    draft: true,
  },
];

export type TechItem = { name: string };

export const techStack: TechItem[] = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Prisma" },
  { name: "Tailwind CSS" },
  { name: "Docker" },
  { name: "AWS" },
  { name: "Vercel" },
  { name: "Git" },
  { name: "Bun" },
];

export type Fact = { value: string; label: string; icon?: LucideIcon };
