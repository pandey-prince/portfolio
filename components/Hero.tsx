"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  const roles = siteConfig.roles;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section
      id="top"
      className="mx-auto grid w-[min(1120px,calc(100%-48px))] items-center gap-12 pt-32 pb-16 md:grid-cols-[1.15fr_0.85fr] md:pt-40 md:pb-24"
    >
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for roles & freelance projects
        </p>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Prince
          <br />
          <span className="text-accent">Pandey.</span>
        </h1>

        <div className="mt-5 h-7 overflow-hidden font-mono text-lg text-accent-2">
          <span key={roleIndex} className="block animate-[fadeUp_0.4s_ease]">
            {roles[roleIndex]}
          </span>
        </div>

        <p className="mt-5 max-w-xl text-muted">{siteConfig.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
          >
            View my work <ArrowDownRight size={16} />
          </a>
          <a
            href={siteConfig.bookingUrl}
            className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Work with me <ArrowUpRight size={16} />
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-text"
          >
            Resume <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5 text-muted">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-text">
            <FaGithub size={20} />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-text">
            <FaLinkedin size={20} />
          </a>
          <a href={siteConfig.social.email} aria-label="Email" className="transition-colors hover:text-text">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <aside className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow)]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <p className="ml-2 font-mono text-xs text-muted">prince.profile.ts</p>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            <span className="text-accent-2">const</span> prince = {"{"}
            {"\n"}  role: <span className="text-accent">&quot;Full-Stack Developer&quot;</span>,
            {"\n"}  location: <span className="text-accent">&quot;India&quot;</span>,
            {"\n"}  stack: [
            {"\n"}    <span className="text-accent">&quot;React&quot;</span>, <span className="text-accent">&quot;TypeScript&quot;</span>,
            {"\n"}    <span className="text-accent">&quot;Node.js&quot;</span>, <span className="text-accent">&quot;PostgreSQL&quot;</span>
            {"\n"}  ],
            {"\n"}  building: <span className="text-accent">&quot;useful web products&quot;</span>,
            {"\n"}  openToWork: <span className="text-accent-2">true</span>
            {"\n"}
            {"}"};
          </code>
        </pre>
        <div className="border-t border-line px-5 py-3 font-mono text-xs text-muted">
          <span className="text-accent">›</span> Ready to collaborate
          <span className="blink">_</span>
        </div>
      </aside>
    </section>
  );
}
