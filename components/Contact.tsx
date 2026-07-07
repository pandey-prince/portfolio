"use client";

import { useState } from "react";
import { Copy, Check, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/config";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

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
        // No mail provider configured — open the user's mail client instead.
        const subject = encodeURIComponent(`Portfolio message from ${payload.name}`);
        const body = encodeURIComponent(`${payload.message}\n\nFrom: ${payload.name} <${payload.email}>`);
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
    <section id="contact" className="mx-auto w-[min(1120px,calc(100%-48px))] py-20">
      <SectionHeading index="07" title="Get in touch" />

      <div className="grid gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-8 md:grid-cols-[1fr_1fr]">
        <Reveal>
          <p className="text-sm uppercase tracking-wide text-accent">
            Have a role or project in mind?
          </p>
          <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Let&apos;s build something useful.
          </h3>
          <p className="mt-3 text-muted">
            I&apos;m open to full-time software roles, freelance projects, and
            collaborations. Drop a message or reach out directly.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.social.email}
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
              >
                <Mail size={16} /> {siteConfig.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email"
                className="grid h-7 w-7 place-items-center rounded-md border border-line text-muted transition-colors hover:text-accent"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
              </button>
            </div>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              <Phone size={16} /> {siteConfig.phone}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-muted">
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-text">
              <FaGithub size={20} />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-text">
              <FaLinkedin size={20} />
            </a>
            <a href={siteConfig.social.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="transition-colors hover:text-text">
              <FaXTwitter size={20} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about the role or project…"
              className="resize-none rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
            </button>
            {status === "sent" && (
              <p className="text-xs text-accent">Thanks — I&apos;ll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-xs text-[#ff6b6b]">{error || "Could not send. Try emailing directly."}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
