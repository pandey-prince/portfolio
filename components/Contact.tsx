"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/config";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
    };

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (json.fallback) {
        const subject = encodeURIComponent(`Portfolio message from ${payload.name}`);
        const body = encodeURIComponent(
          `${payload.message}\n\nFrom: ${payload.name} <${payload.email}>`,
        );
        window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
        setStatus("sent");
        form.reset();
        return;
      }

      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section id="connect">
      <div className="container">
        <Reveal>
          <div className="sec-eye">Connect</div>
        </Reveal>
        <div className="connect-grid">
          <div>
            <Reveal delayClass="d1">
              <h2 className="connect-title">
                Let&apos;s build
                <br />
                <em>something real.</em>
              </h2>
            </Reveal>
            <Reveal delayClass="d2">
              <p className="connect-sub">
                Have a role or freelance project in mind, or just want to say hi?
                I&apos;m always up for a conversation.
              </p>
            </Reveal>
            <Reveal delayClass="d3">
              <div className="conn-links">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="conn-link"
                >
                  <div className="conn-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 6.268c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.297 24 17.8 24 12.5 24 5.87 18.627.5 12 .5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="conn-label">GitHub</div>
                    <div className="conn-val">github.com/{siteConfig.handles.github}</div>
                  </div>
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="conn-link"
                >
                  <div
                    className="conn-icon"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 600,
                      fontSize: 13,
                      color: "currentColor",
                    }}
                  >
                    in
                  </div>
                  <div>
                    <div className="conn-label">LinkedIn</div>
                    <div className="conn-val">linkedin.com/in/prince-pandey123</div>
                  </div>
                </a>
                <a href={siteConfig.social.email} className="conn-link">
                  <div className="conn-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="conn-label">Email</div>
                    <div className="conn-val">{siteConfig.email}</div>
                  </div>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="conn-link"
                >
                  <div className="conn-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.6 10.8a15.05 15.05 0 006.6 6.6l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.59.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.59a1 1 0 01-.25 1.01L6.6 10.8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="conn-label">Phone</div>
                    <div className="conn-val">{siteConfig.phone}</div>
                  </div>
                </a>
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noreferrer"
                  className="conn-link"
                >
                  <div className="conn-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div>
                    <div className="conn-label">Twitter / X</div>
                    <div className="conn-val">@dev___guy</div>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delayClass="d2">
            <div className="fb-title">
              Drop a thought,
              <br />
              <em>start a conversation.</em>
            </div>
            <p className="fb-sub">I read every message. No templates, no bots.</p>
            <form className="fb-form" onSubmit={onSubmit}>
              <input
                className="fb-inp"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="fb-inp"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <textarea
                className="fb-ta"
                name="message"
                placeholder="Your message…"
                required
              />
              <button className="fb-btn" type="submit" disabled={status === "sending"}>
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Sent ✓"
                    : "Send →"}
              </button>
              {status === "sent" && (
                <p className="fb-status ok">Thanks — I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="fb-status err">
                  {error || "Could not send. Try emailing directly."}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
