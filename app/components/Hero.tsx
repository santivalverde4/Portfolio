"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";
import { portfolioData } from "@/app/data/portfolio-i18n";

interface HeroProps {
  projectCount: number;
  technologyCount: number;
}

export function Hero({ projectCount, technologyCount }: HeroProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const profile = data.profile;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const orbit = section.querySelector<HTMLElement>("[data-hero-orbit]");
    const copyShell = section.querySelector<HTMLElement>("[data-hero-copy-shell]");

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline
        .fromTo(
          "[data-hero-badge]",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
          0.08,
        )
        .fromTo(
          "[data-hero-title-line]",
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 },
          0.2,
        )
        .fromTo(
          "[data-hero-copy]",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.1 },
          0.38,
        )
        .fromTo(
          "[data-hero-actions]",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          0.62,
        )
        .fromTo(
          "[data-hero-orbit]",
          { autoAlpha: 0, scale: 0.96, y: 20 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.05 },
          0.24,
        )
        .fromTo(
          "[data-hero-card]",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.82, stagger: 0.14 },
          0.62,
        )
        .fromTo(
          "[data-hero-scroll]",
          { autoAlpha: 0 },
          { autoAlpha: 0.8, duration: 0.5 },
          1.1,
        );
    }, section);

    const cleanupHandlers: Array<() => void> = [];

    if (window.matchMedia("(pointer: fine)").matches && orbit && copyShell) {
      const handleMove = (event: MouseEvent) => {
        const rect = section.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(orbit, {
          x: x * 26,
          y: y * 18,
          rotateZ: x * 2.4,
          duration: 1.15,
          ease: "power3.out",
          overwrite: "auto",
        });

        gsap.to(copyShell, {
          x: x * -10,
          y: y * -8,
          duration: 1.2,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const handleLeave = () => {
        gsap.to([orbit, copyShell], {
          x: 0,
          y: 0,
          rotateZ: 0,
          duration: 1.1,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      section.addEventListener("mousemove", handleMove);
      section.addEventListener("mouseleave", handleLeave);

      cleanupHandlers.push(() => section.removeEventListener("mousemove", handleMove));
      cleanupHandlers.push(() => section.removeEventListener("mouseleave", handleLeave));
    }

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="group relative overflow-hidden rounded-[32px] border border-line/90 bg-surface px-6 py-8 shadow-soft sm:px-8 md:px-12 md:py-12"
      data-parallax-scope
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.13),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.1),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent md:inset-x-10" />
      <div
        className="pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] blur-3xl"
        data-parallax="soft"
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full border border-white/8"
        data-parallax="soft"
      />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
        <div className="max-w-3xl space-y-6" data-hero-copy-shell>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted" data-hero-badge>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/85">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
              {profile.role}
            </span>
            <span className="inline-flex items-center gap-2 text-muted/90">
              <span className="h-px w-5 bg-white/12" />
              {profile.location}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-foreground md:text-6xl">
              <span className="block" data-hero-title-line>
                {t.hero.title}
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg" data-hero-copy>
              {profile.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted" data-hero-copy>
              <span className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-black/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/75">
                {profile.availability}
              </span>
              <span className="max-w-xl text-foreground/60">{t.hero.focusText}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1" data-hero-actions>
            <a
              href="#proyectos"
              className="inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.12)]"
            >
              {t.hero.viewProjects}
              <ArrowUpRightIcon />
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-3 rounded-xl border border-line/80 bg-[color:var(--surface-2)]/65 px-5 py-3 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)]/35 hover:bg-[color:var(--surface-2)]"
            >
              {t.hero.downloadCV}
              <ArrowDownIcon />
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[460px]" data-hero-orbit>
          <div className="absolute inset-0 rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] backdrop-blur-sm" />
          <div className="absolute inset-4 rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_65%)]" />
          <div className="absolute inset-0" data-parallax="soft">
            <HeroSignal />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between p-4 md:p-6">
            <div
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/70"
              data-hero-card
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              Motion System
            </div>

            <div className="grid grid-cols-2 gap-3">
              <article
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 backdrop-blur-sm"
                data-hero-card
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  {t.hero.projectsLabel}
                </p>
                <p className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-foreground">
                  {projectCount}+
                </p>
              </article>

              <article
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 backdrop-blur-sm"
                data-hero-card
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  {t.hero.technologiesLabel}
                </p>
                <p className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-foreground">
                  {technologyCount}+
                </p>
              </article>

              <article
                className="relative col-span-2 overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 backdrop-blur-sm"
                data-hero-card
              >
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_72%)] blur-2xl" />
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  {t.hero.focusLabel}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/78">
                  {t.hero.focusText}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-5 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-muted lg:flex"
        data-hero-scroll
      >
        <span>{language === "es" ? "Scroll" : "Scroll"}</span>
        <span className="h-px w-14 bg-gradient-to-r from-white/50 to-transparent" />
      </div>
    </section>
  );
}

function HeroSignal() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="hero-signal h-full w-full"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle className="hero-signal__ring hero-signal__ring--slow" cx="210" cy="210" r="132" />
      <circle className="hero-signal__ring" cx="210" cy="210" r="92" />
      <circle className="hero-signal__ring hero-signal__ring--slow" cx="210" cy="210" r="52" />

      <line className="hero-signal__line" x1="210" y1="78" x2="326" y2="146" />
      <line
        className="hero-signal__line"
        x1="326"
        y1="146"
        x2="344"
        y2="224"
        style={{ animationDelay: "0.6s" }}
      />
      <line
        className="hero-signal__line"
        x1="344"
        y1="224"
        x2="286"
        y2="318"
        style={{ animationDelay: "1.2s" }}
      />
      <line
        className="hero-signal__line"
        x1="286"
        y1="318"
        x2="176"
        y2="334"
        style={{ animationDelay: "1.8s" }}
      />
      <line
        className="hero-signal__line"
        x1="176"
        y1="334"
        x2="88"
        y2="260"
        style={{ animationDelay: "2.4s" }}
      />
      <line
        className="hero-signal__line"
        x1="88"
        y1="260"
        x2="84"
        y2="170"
        style={{ animationDelay: "3s" }}
      />
      <line
        className="hero-signal__line"
        x1="84"
        y1="170"
        x2="148"
        y2="106"
        style={{ animationDelay: "3.6s" }}
      />
      <line
        className="hero-signal__line"
        x1="148"
        y1="106"
        x2="210"
        y2="210"
        style={{ animationDelay: "0.3s" }}
      />
      <line
        className="hero-signal__line"
        x1="210"
        y1="210"
        x2="286"
        y2="318"
        style={{ animationDelay: "1.5s" }}
      />
      <line
        className="hero-signal__line"
        x1="210"
        y1="210"
        x2="88"
        y2="260"
        style={{ animationDelay: "2.1s" }}
      />

      <circle className="hero-signal__core" cx="210" cy="210" r="7" />
      <circle className="hero-signal__node" cx="210" cy="78" r="5" />
      <circle className="hero-signal__node" cx="326" cy="146" r="4.5" style={{ animationDelay: "0.4s" }} />
      <circle className="hero-signal__node" cx="344" cy="224" r="5" style={{ animationDelay: "1s" }} />
      <circle className="hero-signal__node" cx="286" cy="318" r="4.5" style={{ animationDelay: "1.6s" }} />
      <circle className="hero-signal__node" cx="176" cy="334" r="5" style={{ animationDelay: "2.2s" }} />
      <circle className="hero-signal__node" cx="88" cy="260" r="4.5" style={{ animationDelay: "2.8s" }} />
      <circle className="hero-signal__node" cx="84" cy="170" r="5" style={{ animationDelay: "3.4s" }} />
      <circle className="hero-signal__node" cx="148" cy="106" r="4.5" style={{ animationDelay: "4s" }} />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 14 14 6" />
      <path d="M7 6h7v7" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 4v11" />
      <path d="m5.5 10.5 4.5 4.5 4.5-4.5" />
    </svg>
  );
}
