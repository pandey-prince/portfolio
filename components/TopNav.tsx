"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#connect", label: "Connect" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("prince-portfolio-dark") === "true";
    document.body.classList.toggle("dark-mode", saved);
    document.documentElement.classList.toggle("dark-mode", saved);
  }, []);

  const toggleDark = () => {
    const isDark = !document.body.classList.contains("dark-mode");
    document.body.classList.toggle("dark-mode", isDark);
    document.documentElement.classList.toggle("dark-mode", isDark);
    localStorage.setItem("prince-portfolio-dark", String(isDark));
    window.updateParticleColor?.(isDark);
  };

  const closeMob = () => setOpen(false);

  return (
    <>
      <header className={`topnav ${open ? "mobile-open" : ""}`} id="tnav">
        <div className="tnav-inner">
          <a href="#home" className="tnav-logo">
            {siteConfig.brand}
          </a>
          <nav className="tnav-links" aria-label="Primary">
            {links.slice(0, 6).map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <div className="tnav-icons">
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" title="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                title="Resume"
                className="tnav-email"
              >
                CV
              </a>
              <button
                type="button"
                className="dm-toggle"
                onClick={toggleDark}
                aria-label="Toggle dark mode"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
                </svg>
              </button>
            </div>
          </nav>
          <div className="tnav-mobile-actions">
            <button
              type="button"
              className="dm-toggle"
              onClick={toggleDark}
              aria-label="Toggle dark mode"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
              </svg>
            </button>
            <button
              type="button"
              className={`hamburger ${open ? "open" : ""}`}
              id="ham"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} id="mob">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMob}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
