"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    updateParticleColor?: (isDark: boolean) => void;
  }
}

export default function Effects() {
  useEffect(() => {
    const bar = document.getElementById("bar");
    const tnav = document.getElementById("tnav");
    const sbp = document.getElementById("sbp");
    const vdot = document.getElementById("vdot");
    const vpathGlow = document.getElementById("v-path-glow") as SVGPathElement | null;
    const ph = document.querySelector(".hero-photo") as HTMLElement | null;

    const onScroll = () => {
      const scrollH = document.body.scrollHeight - window.innerHeight;
      const pct = scrollH > 0 ? (window.scrollY / scrollH) * 100 : 0;
      if (bar) bar.style.width = `${pct}%`;
      if (sbp) sbp.style.height = `${pct}%`;

      if (vdot) {
        const yPx = (window.scrollY / document.body.scrollHeight) * 1000;
        let xOffset = 6;
        if (yPx <= 400) xOffset = 6;
        else if (yPx > 400 && yPx <= 410) xOffset = 6 - (yPx - 400) * 0.5;
        else if (yPx > 410 && yPx <= 440) xOffset = 1;
        else if (yPx > 440 && yPx <= 460) xOffset = 1 + (yPx - 440) * 0.5;
        else if (yPx > 460 && yPx <= 490) xOffset = 11;
        else if (yPx > 490 && yPx <= 500) xOffset = 11 - (yPx - 490) * 0.5;
        else xOffset = 6;

        vdot.style.top = `${(window.scrollY / document.body.scrollHeight) * 100}vh`;
        vdot.style.left = `${xOffset - 1.5}px`;

        if (vpathGlow) {
          const pathLen = vpathGlow.getTotalLength?.() || 1000;
          const scrollPct = scrollH > 0 ? window.scrollY / scrollH : 0;
          vpathGlow.style.strokeDashoffset = String(pathLen * (1 - scrollPct));
        }
      }

      tnav?.classList.toggle("scrolled", window.scrollY > 20);

      let cur = "";
      document.querySelectorAll("section[id]").forEach((s) => {
        const el = s as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) cur = el.id;
      });
      document.querySelectorAll(".tnav-links a[href^='#']").forEach((a) => {
        a.classList.toggle("act", a.getAttribute("href") === `#${cur}`);
      });

      if (ph && window.innerWidth > 768) {
        ph.style.transform = `translateY(${window.scrollY * 0.04}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Custom cursor + particles (desktop only)
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let cleanupCursor = () => {};

    if (finePointer && !reduceMotion) {
      const canvas = document.getElementById("p-canvas") as HTMLCanvasElement | null;
      const dot = document.getElementById("c-dot");
      if (canvas && dot) {
        const ctx = canvas.getContext("2d");
        let w = 0;
        let h = 0;
        let mx = -100;
        let my = -100;
        type Particle = {
          x: number;
          y: number;
          size: number;
          sx: number;
          sy: number;
          life: number;
          decay: number;
          color: string;
        };
        const particles: Particle[] = [];

        const resize = () => {
          w = canvas.width = window.innerWidth;
          h = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const onMove = (e: MouseEvent) => {
          mx = e.clientX;
          my = e.clientY;
          dot.style.opacity = "1";
          dot.style.left = `${mx}px`;
          dot.style.top = `${my}px`;
          for (let i = 0; i < 5; i++) {
              const isDark = document.documentElement.classList.contains("dark-mode");
            particles.push({
              x: mx,
              y: my,
              size: Math.random() * 2 + 0.5,
              sx: (Math.random() - 0.5) * 1.5,
              sy: (Math.random() - 0.5) * 1.5,
              life: 1,
              decay: Math.random() * 0.03 + 0.02,
              color: isDark ? "rgba(255, 255, 255, " : "rgba(200, 191, 170, ",
            });
          }
        };
        window.addEventListener("mousemove", onMove);

        const animate = () => {
          if (!ctx) return;
          ctx.clearRect(0, 0, w, h);
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.sx;
            p.y += p.sy;
            p.life -= p.decay;
            ctx.fillStyle = `${p.color}${p.life})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            if (p.life <= 0) {
              particles.splice(i, 1);
              i--;
            }
          }
          raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);

        window.updateParticleColor = (isDark: boolean) => {
          particles.forEach((p) => {
            p.color = isDark ? "rgba(255, 255, 255, " : "rgba(200, 191, 170, ";
          });
        };

        const links = document.querySelectorAll(
          "a, button, .sk, .conn-link, .proj-row, .hb-fill, .gh-link",
        );
        const enter = () => {
          dot.style.transform = "translate(-50%, -50%) scale(2.5)";
          dot.style.backgroundColor = "transparent";
          dot.style.border = "1px solid var(--rust)";
        };
        const leave = () => {
          dot.style.transform = "translate(-50%, -50%) scale(1)";
          dot.style.backgroundColor = "var(--rust)";
          dot.style.border = "none";
        };
        links.forEach((l) => {
          l.addEventListener("mouseenter", enter);
          l.addEventListener("mouseleave", leave);
        });

        const hide = () => {
          dot.style.opacity = "0";
        };
        const show = () => {
          dot.style.opacity = "1";
        };
        document.addEventListener("mouseleave", hide);
        document.addEventListener("mouseenter", show);

        cleanupCursor = () => {
          cancelAnimationFrame(raf);
          window.removeEventListener("resize", resize);
          window.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseleave", hide);
          document.removeEventListener("mouseenter", show);
          links.forEach((l) => {
            l.removeEventListener("mouseenter", enter);
            l.removeEventListener("mouseleave", leave);
          });
          delete window.updateParticleColor;
        };
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      cleanupCursor();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="grain-overlay" aria-hidden />
      <div className="v-tracker" aria-hidden>
        <svg className="v-line-svg" preserveAspectRatio="none" viewBox="0 0 12 1000">
          <path id="v-path-bg" d="M6 0 L6 400 L1 410 L1 440 L11 460 L11 490 L6 500 L6 1000" />
          <path
            id="v-path-glow"
            className="v-glow-path"
            d="M6 0 L6 400 L1 410 L1 440 L11 460 L11 490 L6 500 L6 1000"
            strokeDasharray="100 900"
            strokeDashoffset="1000"
          />
        </svg>
        <div className="v-dot" id="vdot" />
      </div>
      <canvas id="p-canvas" aria-hidden />
      <div className="cursor-dot" id="c-dot" aria-hidden />
      <div id="bar" aria-hidden />
    </>
  );
}
