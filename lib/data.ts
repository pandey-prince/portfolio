import type { LucideIcon } from "lucide-react";

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Pixora",
    category: "Full-stack · Photo management",
    description:
      "A private photo gallery with Clerk authentication, protected routes, batch Cloudinary uploads, pagination, infinite scrolling, signature-verified webhooks, and transactional PostgreSQL writes via Prisma.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Cloudinary"],
    github: "https://github.com/pandey-prince/Pixora",
  },
  {
    name: "JobVista",
    category: "Full-stack · Recruitment",
    description:
      "A job platform with separate student and recruiter workflows, JWT authentication, role-protected APIs, live external job feeds, and a Gemini-powered \"JobMate\" AI assistant.",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/pandey-prince/JobVista",
  },
  {
    name: "LumoAI",
    category: "Full-stack · AI assistant",
    description:
      "A ChatGPT-style assistant powered by Google Gemini 2.5 Flash with persistent multi-turn chat threads stored in MongoDB, served through a clean Node.js and Express REST API.",
    tags: ["React", "Node.js", "Express", "Google Gemini", "MongoDB"],
    github: "https://github.com/pandey-prince/LumoAI",
  },
  {
    name: "Private Chat",
    category: "Full-stack · Realtime",
    description:
      "Real-time, private chat rooms with anonymous identities and self-destructing messages using Upstash Redis and Upstash Realtime, with room capacity limits and instant delivery.",
    tags: ["Next.js", "TypeScript", "Upstash Redis", "Upstash Realtime"],
    github: "https://github.com/pandey-prince",
  },
  {
    name: "Trimly",
    category: "Full-stack · Analytics",
    description:
      "A URL shortener with link management and click analytics built on Next.js and Prisma over a PostgreSQL database.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/pandey-prince",
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
