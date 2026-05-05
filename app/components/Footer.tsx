"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";
import { portfolioData } from "@/app/data/portfolio-i18n";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const profile = data.profile;

  return (
    <footer
      id="contacto"
      className="relative overflow-hidden border-t border-line/80 pt-10"
      data-reveal="section"
      data-parallax-scope
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_72%)] blur-3xl"
        data-parallax="soft"
      />

      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="max-w-2xl" data-reveal-group>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.34em] text-muted"
            data-reveal-item
          >
            Contact
          </p>
          <h3
            className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em]"
            data-reveal-item
          >
            {t.footer.contact}
          </h3>
          <p className="mt-3 text-muted" data-reveal-item>
            {t.footer.contactText}
          </p>
        </div>

        <div className="space-y-3" data-reveal-group>
          <a
            href={`mailto:${profile.email}`}
            className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)]/35 hover:bg-[color:var(--surface-2)]"
            data-reveal-item
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-[color:var(--surface-2)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-[color:var(--accent)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            <span className="flex-1">{profile.email}</span>
            <ArrowUpRightIcon className="h-4 w-4 text-foreground/55 transition duration-200 group-hover:text-foreground" />
          </a>

          {profile.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)]/35 hover:bg-[color:var(--surface-2)]"
              data-reveal-item
            >
              <span>{link.label}</span>
              <ArrowUpRightIcon className="h-4 w-4 text-[color:var(--accent)] transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>

      <div
        className="mt-10 border-t border-line/80 pt-8 text-center text-sm text-muted"
        data-reveal-group
      >
        <p data-reveal-item>{t.footer.copyright.replace("%name%", profile.name)}</p>
      </div>
    </footer>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={className}
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
