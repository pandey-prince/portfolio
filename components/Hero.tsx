"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  const roles = siteConfig.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setFade(false);
      }, 400);
    }, 3500);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section id="home">
      <div className="container">
        <div className="hero-inner">
          <div>
            <div className="hero-avail">
              <span className="avail-dot" />
              Open to work &amp; freelance
            </div>
            <div className="hero-pre">Hi, I&apos;m</div>
            <h1 className="hero-name">
              <span className="word">
                <span>{siteConfig.firstName}</span>
              </span>
              <em>
                <span>{siteConfig.lastName}.</span>
              </em>
            </h1>
            <p className="hero-meta">
              <span>{siteConfig.location}</span>
              <span className="mdot" />
              <span id="role-text" className={`role-swap ${fade ? "fade" : ""}`}>
                {roles[roleIndex]}
              </span>
            </p>
            <p className="hero-bio">
              I build <strong>responsive web apps</strong> and reliable APIs —
              from clean React/Next.js frontends to Node.js backends and
              database-backed products that hire-ready teams and freelance
              clients can ship with.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn-primary">
                <div className="fill" />
                <span>View Projects →</span>
              </a>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Book a Call
              </a>
              <a href="#connect" className="btn-ghost">
                Get in Touch
              </a>
              <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                Resume
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-img">
              <div className="photo-fallback" aria-hidden>
                PP
              </div>
            </div>
            <div className="photo-card">
              <span className="pc-loc">📍 {siteConfig.locationShort}</span>
              <span className="pc-open">
                <span className="pc-dot" />
                Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
